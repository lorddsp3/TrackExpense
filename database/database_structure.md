# Database Structure – ExpenseTracker

## Database Name

`expense_tracker`

## Tables

### 1. users

Stores registered user account information.

- user_id – Primary Key
- full_name – User's full name
- email – Unique email address
- password_hash – Password hash field
- created_at – Account creation timestamp

### 2. transactions

Stores income and expense records.

- transaction_id – Primary Key
- user_id – Foreign Key
- description – Transaction details
- amount – Transaction amount
- transaction_type – Income or Expense
- category – Transaction category
- transaction_date – Date of transaction

### 3. budgets

Stores monthly budget configurations.

- budget_id – Primary Key
- user_id – Foreign Key
- monthly_income – Total monthly income
- savings_goal – Monthly savings target
- budget_month – Budget period

### 4. obligations

Stores recurring payments and financial commitments.

- obligation_id – Primary Key
- user_id – Foreign Key
- obligation_name – Name of obligation
- amount – Payment amount
- category – Loan, EMI, subscription or bill
- due_date – Payment due date

### 5. user_settings

Stores individual user preferences.

- setting_id – Primary Key
- user_id – Foreign Key
- currency – Preferred currency
- theme – Interface theme

## Relationships

- One user can have multiple transactions.
- One user can have multiple budgets.
- One user can have multiple financial obligations.
- Each user has one settings record.

## Database Technology

MySQL Relational Database Management System (RDBMS).
