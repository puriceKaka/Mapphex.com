# User Manual

## System Overview

This system has three main portals:

- **Money Office**: manages finance work such as customer bills, supplier bills, payroll, budgets, approvals, and reports.
- **Selling Office**: manages sales work such as possible customers, customers, quotes, orders, customer bills, goals, and sales summaries.
- **Business Check**: shows analytics from Finance and Sales, including business summaries, forecasts, warnings, and downloads.

The system is designed to open clean and empty. No customer, supplier, bill, sales, or analytics records are stored in the browser. Data appears only after a user adds it during the current session or imports a backup file.

## Login And Registration

1. Open the system home page.
2. Choose the portal you want to use:
   - Money Office
   - Selling Office
   - Business Check
3. Click **Register** if it is your first time in that browser session.
4. Enter your full name, role, phone, email, password, and confirm password.
5. Click **Register**.
6. Go back to **Login**.
7. Enter the same name or email and password.
8. Click **Login**.

Registration is temporary. If the page is refreshed or reopened, the user may need to register again because browser storage has been removed.

## Currency Selection

The currency selector lets the user choose a country and currency.

Example:

- Kenya - KES
- United States - USD
- Lebanon - LBP

When a currency is selected, visible money values use that currency label. The currency list is configuration data, not customer or database data.

## Money Office

The Money Office is used for finance operations.

### Home

The finance home shows finance dashboard buttons such as:

- Available money
- Money earned
- Money spent
- Money left
- Waiting customer bills
- Waiting approvals
- Budget spent
- Budget left
- Recent money activity
- Money in and out

The dashboard starts empty. Values update when finance records are added.

### Customer Bills

Use this section to create and manage bills that customers should pay.

Main actions:

- Add a customer bill.
- Edit a customer bill.
- Delete a customer bill.
- Mark a bill as paid.
- Filter bills by status.
- Export or print the bill list.

Customer bill statuses include:

- Paid
- Unpaid
- Overdue
- Pending

### Supplier Bills

Use this section to manage bills the company must pay to suppliers.

Main actions:

- Add a supplier bill.
- Edit a supplier bill.
- Delete a supplier bill.
- Mark a supplier bill as paid.
- Filter supplier bills by status.
- Export or print supplier bill records.

### Budgets

The budget area is for viewing and downloading budget information.

Main actions:

- View team budgets.
- Compare planned and actual spending.
- Check budget requests.
- Review spending limits.
- Download budget table.
- Print budget information.

The budget table starts empty until data is added or imported.

### Payroll

The payroll section is used for salary records.

Main actions:

- View employee salary records.
- Review allowances.
- Review deductions.
- Approve salaries.
- Download payroll table.
- Print payroll table.

The payroll table starts empty.

### Reports

Finance reports can be opened, printed, or downloaded.

Supported downloads:

- PDF print view
- Word document
- Excel workbook

Finance report examples:

- Profit and loss summary
- What we own and owe
- Money in/out summary
- Balance check summary
- Tax summaries
- Spending summary
- Money earned summary
- Monthly money summary
- Budget summary
- Salary summary

### Approvals

The approvals area is used to review requests before they are accepted.

Approval types include:

- Approve customer bills
- Approve spending
- Approve purchases
- Approve budgets
- Approve payments
- Approve salaries
- Approve money entries
- Approve suppliers

## Selling Office

The Selling Office is used for sales operations.

### Home

The sales home includes clickable dashboard buttons:

- Total sales
- Money from sales this month
- New possible customers
- Sales still open
- Sales completed
- Buying customers
- Sales goal progress
- Top customers
- Recent activities

The dashboard starts empty. It updates after sales records are added.

### Add Sales Records

The sales workspace has forms for:

- Add possible customer
- Add customer
- Add price quote
- Add order

Each form creates a sales record in the sales table.

### Sales Table Actions

Each sales record can have these actions:

- **View**: opens the customer or sales record details.
- **Edit**: updates the record.
- **Delete**: removes the record.
- **Convert**: changes the record to the next stage.

Conversion flow:

1. Possible customer converts to customer.
2. Price quote converts to order.
3. Order converts to customer bill.

### Follow-Up Reminders

The system checks follow-up dates.

It can show:

- Follow-ups due today.
- Overdue follow-up warnings.

### Sales Activity Log

The activity log records actions such as:

- Adding a record.
- Editing a record.
- Deleting a record.
- Converting a record.
- Exporting sales files.

### Sales Downloads

The sales export button downloads:

- PDF print view
- Word document
- Excel file
- JSON backup file

The JSON backup file is used for importing sales records later.

## Business Check

The Business Check portal shows analytics from Finance and Sales data.

### Dashboard

The dashboard includes:

- Total money earned
- Total sales
- Total money spent
- Profit percentage
- Active customers
- Sales growth
- Money in and out
- Monthly work result

All dashboard values start empty and update from current Finance and Sales records.

### Analytics Sections

Clickable analytics sections include:

- Key Numbers
- Money Check
- Sales Check
- Customer Check
- Forecasts
- Business Summaries
- Download Files

### Alerts And Warnings

Analytics can show warnings when:

- Sales growth is low.
- Spending is high.
- Customers need follow-up.
- Profit is dropping.

### Forecasts

Forecast details include:

- Expected sales
- Expected spending
- Expected profit
- Expected customers

### Analytics Downloads

Supported analytics downloads:

- Excel
- PDF
- CSV
- Word reports

## Import And Export

The system supports backup/import tools.

Export can create files for:

- Sales records
- Finance records
- Analytics records

Import can load a valid backup file back into the current session.

Because browser storage is removed, imported data stays only while the page is open.

## Empty Data Behavior

The system no longer keeps local browser data.

This means:

- No records remain after refresh unless a real backend database is added later.
- No old customer or supplier examples should appear.
- No browser `localStorage` or `sessionStorage` is used.
- Tables open empty.
- Dashboard figures start at `0`.

## Recommended Workflow

1. Register and log into the needed portal.
2. Select the country currency.
3. Add finance or sales records.
4. Use dashboard buttons to view summaries.
5. Use edit, delete, approve, mark paid, and convert actions where needed.
6. Download reports when required.
7. Export a backup before closing the page if you need to keep the session data.

## Important Notes

- The current version is front-end only.
- There is no permanent database connected.
- To keep records permanently, a backend database must be added.
- Until a database is added, exports are the only way to keep records after closing or refreshing the system.
