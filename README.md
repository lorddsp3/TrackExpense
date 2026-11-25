# ExpenseTracker – Personal Finance & Budget Management System

<p align="center">
  <strong>Internet and Web Technology (IWT) Mini Project</strong>
</p>

<p align="center">
  A smart and responsive web application for managing personal income, expenses, budgets, and financial goals.
</p>

# Live Demo:

https://lorddsp3.github.io/TrackExpense/

---

## Project Information

| Detail        | Information                       |
| ------------- | --------------------------------- |
| Project Name  | ExpenseTracker                    |
| Subject       | Internet and Web Technology (IWT) |
| Institute     | PIEMR                             |
| Academic Year | 2026–2027                         |
| Project Type  | Mini Project                      |

### Submitted By

| S. No. | Student Name         | Enrollment Number |
| ------ | -------------------- | ----------------- |
| 1      | Divyansh Singh Patel | 0863CS241064      |
| 2      | Ansh Kumrawat        | 0863CS241034      |

---

## Abstract

ExpenseTracker is a web-based personal finance management application designed to help users monitor their income, expenses, savings, and monthly financial commitments.

The application provides an interactive dashboard where users can record financial transactions, manage recurring expenses, establish savings goals, and monitor their available spending balance.

One of its primary features is the **Safe-to-Spend Calculator**, which calculates the amount of money a user can safely spend after accounting for savings goals and fixed monthly obligations.

The project demonstrates the practical implementation of HTML, CSS, and JavaScript concepts in developing a responsive and interactive web application.

## Objectives

- To develop a user-friendly personal finance management website.
- To understand and implement HTML5, CSS3, and JavaScript.
- To provide income and expense tracking functionality.
- To calculate monthly savings and remaining spending capacity.
- To implement CRUD operations for financial records.
- To understand client-side data persistence.
- To design a responsive interface for different screen sizes.

## Features

### 1. Dashboard

- Overview of total income and expenses.
- Available balance and savings summary.
- Monthly financial statistics.
- Visual representation of spending patterns.

### 2. Income and Expense Management

- Add new income and expense records.
- Edit existing transactions.
- Delete unwanted transactions.
- Categorize transactions.
- Maintain transaction dates and descriptions.

### 3. Budget Management

- Set monthly income.
- Define monthly savings goals.
- Manage fixed monthly obligations.
- Track loans, EMIs, and subscriptions.
- Calculate the remaining available budget.

### 4. Safe-to-Spend Calculator

- Calculates disposable spending capacity.
- Deducts fixed financial commitments.
- Accounts for savings goals.
- Updates the remaining spending balance when new expenses are added.

### 5. Reports and Analytics

- Monthly financial overview.
- Income allocation visualization.
- Expense category breakdown.
- Spending progress indicators.

### 6. User Interface

- Responsive web design.
- Interactive navigation.
- Clean and modern interface.
- CSS-based charts and visualizations.

### 7. Data Management

- Persistent storage of financial records using browser local storage.
- Shared financial data between application pages.
- Automatic retrieval of previously saved records.

## Technology Stack

| Technology           | Purpose                             |
| -------------------- | ----------------------------------- |
| HTML5                | Website structure                   |
| CSS3                 | Styling and responsive layout       |
| JavaScript (ES6+)    | Application logic and interactivity |
| Browser localStorage | Client-side data persistence        |
| CSS Grid & Flexbox   | Responsive layouts                  |
| MySQL                | primary database                    |

**Database Architecture (Proposed Enhancement):**

MySQL can be introduced as a relational database for centralized storage of user accounts, authentication information, transactions, budgets, and financial records.

The proposed database tables include:

- `users` – User registration and account information.
- `transactions` – Income and expense records.
- `budgets` – Monthly income and savings goals.
- `obligations` – Loans, EMIs, and recurring subscriptions.
- `user_settings` – Individual application preferences.

Server-side authentication and MySQL integration are proposed extensions and are not part of the current frontend-only implementation.

## Project Structure

```text
ExpenseTracker/
│
├── index.html
├── auth.html
├── budget.html
├── settings.html
│
├── css/
│   └── ...
│
├── js/
│   └── ...
│
├── database/
│   ├── expense_tracker.sql
│   ├── sample_data.sql
│   ├── database_structure.md
│   └── README.md
│
├── server/
│   ├── db.js
│   └── auth.js
│
├── package.json
└── README.md
```

## Conclusion

ExpenseTracker provides a practical solution for managing personal finances through a simple and interactive web interface.

The project demonstrates the application of fundamental web technologies, including HTML, CSS, and JavaScript, in developing a real-world application.

It also provides an opportunity to understand client-side data management, CRUD operations, responsive web design, and the potential integration of relational database systems.
