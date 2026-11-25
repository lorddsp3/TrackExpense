# ExpenseTracker – Database Module

This directory contains the proposed MySQL database design for the ExpenseTracker IWT project.

## Files

| File                  | Description                         |
| --------------------- | ----------------------------------- |
| expense_tracker.sql   | Database and table creation queries |
| sample_data.sql       | Sample records for testing          |
| database_structure.md | Database documentation              |

## Database Setup

1. Open MySQL or phpMyAdmin.
2. Execute `expense_tracker.sql`.
3. Execute `sample_data.sql`.
4. Select the `expense_tracker` database.
5. Explore the tables and their relationships.

## Database Tables

- users
- transactions
- budgets
- obligations
- user_settings

**Note:** This is a proposed database module. The current website uses browser localStorage. MySQL connectivity and server-side authentication have not yet been integrated.
