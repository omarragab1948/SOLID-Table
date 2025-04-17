#  Reusable Table Component – Powered by SOLID Principles

This is a highly reusable and flexible table component built using plain React. Unlike the Compound Component Pattern, which can reduce reusability in data-heavy interfaces, this solution keeps the component abstract and customizable from the outside—making it perfect for dashboards, admin panels, and lists.

---

## 🔧 Features

- Dynamic table with customizable headers and rows
- Supports actions (edit, delete, etc.)
- Supports custom cell rendering using render props
- Styled with clean and minimal UI
- Follows SOLID principles for maintainability

---

##  Why Not Compound Component Pattern?

Compound Component Pattern is great for UI components like Modals, Tabs, and Accordions—where child elements define behavior visually.

However, in **data-driven tables**, it:
- Forces you to manually map and render each field inside the component usage
- Adds unnecessary verbosity when reusing across multiple screens
- Doesn’t scale well when table structure is dynamic

---

##  How SOLID Principles Helped

###  Open/Closed Principle (OCP)
> The component is open for extension but closed for modification.

Instead of changing the internal logic for each new use case, we pass:
- `headers`: to define columns
- `actions`: to define per-row operations
- `additionalProps`: to render custom cells (e.g. conditional styling, custom JSX)

---

###  Dependency Inversion Principle (DIP)
> High-level modules should not depend on low-level modules. Both should depend on abstractions.

- The table doesn’t assume how a row should be rendered.
- We inject the rendering logic from outside using `onRender{ColumnId}` props.
- This makes the component decoupled and testable.

---

##  Usage Example

```jsx
<Table
  data={products}
  headers={[
    { id: "name", label: "Name" },
    { id: "price", label: "Price" },
    { id: "status", label: "Stock Status" },
  ]}
  actions={[
    { id: "edit", label: "Edit", icon: <EditIcon /> },
    { id: "delete", label: "Delete", icon: <TrashIcon /> },
  ]}
  additionalProps={{
    onRenderstatus: (row) =>
      row.status === "Out of stock"
        ? <span style={{ color: "red" }}>{row.status}</span>
        : row.status,
  }}
/>
