import React from "react";

// Table Component (Parent)
const Table = ({ children, ...props }) => {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
      {...props}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          fontFamily: "'Segoe UI', sans-serif",
          fontSize: "14px",
        }}
      >
        {children}
      </table>
    </div>
  );
};

// Table Header Component
Table.Header = ({ children }) => {
  return <thead>{children}</thead>;
};

// Table Row Component
Table.Row = ({ children, index }) => {
  return (
    <tr
      style={{
        backgroundColor: index % 2 === 0 ? "#fff" : "#f9fafb",
        ":hover": {
          backgroundColor: "#f3f4f6",
        },
      }}
    >
      {children}
    </tr>
  );
};

// Table HeaderCell Component
Table.HeaderCell = ({ children }) => {
  return (
    <th
      style={{
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#4f46e5",
        color: "white",
        fontWeight: "600",
        position: "sticky",
        top: 0,
        borderBottom: "2px solid #ddd",
        borderRight: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {children}
    </th>
  );
};

// Table Cell Component
Table.Cell = ({ children, renderFn, row }) => {
  return (
    <td
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #e5e7eb",
        textAlign: "center",
        transition: "background-color 0.2s ease",
      }}
    >
      {renderFn ? renderFn(row) : children}
    </td>
  );
};

// Table Footer Component
Table.Footer = ({ children }) => {
  return <tfoot>{children}</tfoot>;
};

// Table Action Component
Table.Actions = ({ actions }) => {
  return (
    <td
      style={{
        padding: "12px 16px",
        borderBottom: "1px solid #e5e7eb",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        {actions?.map((action) => (
          <button
            key={action?.id}
            style={{
              padding: "6px 12px",
              backgroundColor: "#f3f4f6",
              color: "#4f46e5",
              border: "1px solid #e5e7eb",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              transition: "all 0.2s ease",
            }}
          >
            {action.icon && <span>{action.icon}</span>}
            {action.label}
          </button>
        ))}
      </div>
    </td>
  );
};

export default Table;
