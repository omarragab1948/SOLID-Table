import React from "react";

const CCTable = ({ children }) => {
  return (
    <div style={{ overflowX: "auto", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
      <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
        {children}
      </table>
    </div>
  );
};

const Header = ({ children }) => (
  <thead>
    <tr>{children}</tr>
  </thead>
);

const HeaderCell = ({ children }) => (
  <th
    style={{
      padding: "16px",
      backgroundColor: "#4f46e5",
      color: "white",
      fontWeight: "600",
      textAlign: "center",
    }}
  >
    {children}
  </th>
);

const Body = ({ children }) => <tbody>{children}</tbody>;

const Row = ({ children, onClick }) => (
  <tr
    onClick={onClick}
    style={{
      cursor: onClick ? "pointer" : undefined,
      backgroundColor: "#fff",
      transition: "background-color 0.2s ease",
    }}
  >
    {children}
  </tr>
);

const Cell = ({ children }) => (
  <td
    style={{
      padding: "12px 16px",
      borderBottom: "1px solid #e5e7eb",
      textAlign: "center",
    }}
  >
    {children}
  </td>
);

const Footer = ({ children }) => (
  <tfoot>
    <tr>
      <td colSpan={100}>
        <div style={{ padding: "12px 16px", textAlign: "center" }}>{children}</div>
      </td>
    </tr>
  </tfoot>
);

CCTable.Header = Header;
CCTable.HeaderCell = HeaderCell;
CCTable.Body = Body;
CCTable.Row = Row;
CCTable.Cell = Cell;
CCTable.Footer = Footer;

export default CCTable;
