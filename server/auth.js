// server/auth.js
// User Registration, Login, Logout and Authentication

const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const { executeQuery } = require("./db");

// Generate a secure random session token
function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

// Hash session token before storing it in database
function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

// 1. USER REGISTRATION
async function registerUser(fullName, email, password) {
  try {
    if (!fullName || !email || !password) {
      return {
        success: false,
        message: "All fields are required.",
      };
    }

    if (password.length < 8) {
      return {
        success: false,
        message: "Password must contain at least 8 characters.",
      };
    }

    email = email.trim().toLowerCase();

    // Check whether email already exists
    const existingUser = await executeQuery(
      "SELECT user_id FROM users WHERE email = ?",
      [email],
    );

    if (existingUser.length > 0) {
      return {
        success: false,
        message: "Email is already registered.",
      };
    }

    // Securely hash password
    const passwordHash = await bcrypt.hash(password, 12);

    // Insert new user
    const result = await executeQuery(
      `INSERT INTO users
            (full_name, email, password_hash)
            VALUES (?, ?, ?)`,
      [fullName.trim(), email, passwordHash],
    );

    // Create default user settings
    await executeQuery(
      `INSERT INTO user_settings (user_id)
             VALUES (?)`,
      [result.insertId],
    );

    return {
      success: true,
      message: "Registration successful!",
      userId: result.insertId,
    };
  } catch (error) {
    console.error("Registration Error:", error);

    return {
      success: false,
      message: "Unable to register user.",
    };
  }
}

// 2. USER LOGIN
async function loginUser(email, password) {
  try {
    if (!email || !password) {
      return {
        success: false,
        message: "Email and password are required.",
      };
    }

    email = email.trim().toLowerCase();

    // Find user by email
    const users = await executeQuery(
      `SELECT user_id, full_name, email, password_hash
             FROM users
             WHERE email = ?`,
      [email],
    );

    if (users.length === 0) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    const user = users[0];

    // Compare password with stored hash
    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      return {
        success: false,
        message: "Invalid email or password.",
      };
    }

    // Generate session token
    const token = generateToken();
    const tokenHash = hashToken(token);

    // Session expires after 7 days
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    await executeQuery(
      `INSERT INTO sessions
            (user_id, token_hash, expires_at)
            VALUES (?, ?, ?)`,
      [user.user_id, tokenHash, expiresAt],
    );

    return {
      success: true,
      message: "Login successful!",
      token,
      user: {
        user_id: user.user_id,
        full_name: user.full_name,
        email: user.email,
      },
    };
  } catch (error) {
    console.error("Login Error:", error);

    return {
      success: false,
      message: "Unable to login.",
    };
  }
}

// 3. VERIFY USER SESSION
async function authenticateToken(token) {
  try {
    if (!token) return null;

    const tokenHash = hashToken(token);

    const sessions = await executeQuery(
      `SELECT u.user_id, u.full_name, u.email
             FROM sessions s
             JOIN users u ON s.user_id = u.user_id
             WHERE s.token_hash = ?
             AND s.expires_at > NOW()`,
      [tokenHash],
    );

    if (sessions.length === 0) {
      return null;
    }

    return sessions[0];
  } catch (error) {
    console.error("Authentication Error:", error);
    return null;
  }
}

// 4. USER LOGOUT
async function logoutUser(token) {
  try {
    if (!token) {
      return {
        success: false,
        message: "Session token is required.",
      };
    }

    const tokenHash = hashToken(token);

    await executeQuery("DELETE FROM sessions WHERE token_hash = ?", [
      tokenHash,
    ]);

    return {
      success: true,
      message: "Logged out successfully.",
    };
  } catch (error) {
    console.error("Logout Error:", error);

    return {
      success: false,
      message: "Unable to logout.",
    };
  }
}

module.exports = {
  registerUser,
  loginUser,
  authenticateToken,
  logoutUser,
};
