
USE expense_tracker;

-- Demo user (password_hash is a placeholder)
INSERT INTO users (full_name, email, password_hash)
VALUES
('Divyansh Patel', 'divyansh@example.com', 'DEMO_HASH'),
('Ansh Kumrawat', 'ansh@example.com', 'DEMO_HASH');

-- Sample transactions
INSERT INTO transactions
(user_id, description, amount, transaction_type, category, transaction_date)
VALUES
(1, 'Monthly Pocket Money', 15000, 'income', 'Income', '2026-11-01'),
(1, 'College Canteen', 250, 'expense', 'Food', '2026-11-03'),
(1, 'Bus Pass', 800, 'expense', 'Transport', '2026-11-05'),
(1, 'Online Shopping', 1200, 'expense', 'Shopping', '2026-11-08'),
(2, 'Monthly Allowance', 12000, 'income', 'Income', '2026-11-01');

-- Sample budgets
INSERT INTO budgets
(user_id, monthly_income, savings_goal, budget_month)
VALUES
(1, 15000, 3000, '2026-11-01'),
(2, 12000, 2000, '2026-11-01');

-- Sample obligations
INSERT INTO obligations
(user_id, obligation_name, amount, category, due_date)
VALUES
(1, 'Internet Subscription', 599, 'Subscription/Bill', '2026-11-15'),
(1, 'Monthly Transport', 800, 'Subscription/Bill', '2026-11-05'),
(2, 'Mobile Recharge', 299, 'Subscription/Bill', '2026-11-20');

-- User preferences
INSERT INTO user_settings (user_id, currency, theme)
VALUES
(1, 'INR', 'light'),
(2, 'INR', 'dark');
