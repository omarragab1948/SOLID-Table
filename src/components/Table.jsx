const Table = ({ data, actions, headers, additionalProps }) => {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        maxWidth: "100%",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "separate",
          borderSpacing: 0,
          fontFamily: "'Segoe UI', sans-serif",
          fontSize: "14px",
          tableLayout: "auto",
        }}
      >
        <thead>
          <tr>
            {headers?.map((header) => (
              <th
                key={header.id}
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
                  ":lastChild": {
                    borderRight: "none",
                  },
                  whiteSpace: "nowrap",
                  width: `${100 / (headers.length + (actions ? 1 : 0))}%`,
                }}
              >
                {header.label}
              </th>
            ))}
            {actions && (
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
                  ":lastChild": {
                    borderRight: "none",
                  },
                  width: `${100 / (headers.length + (actions ? 1 : 0))}%`,
                }}
              >
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data?.map((row, index) => (
            <tr
              key={row.id}
              style={{
                backgroundColor: index % 2 === 0 ? "#fff" : "#f9fafb",
                ":hover": {
                  backgroundColor: "#f3f4f6",
                },
              }}
            >
              {headers?.map((h) => (
                <td
                  key={`${row.id}-${h.id}`}
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #e5e7eb",
                    textAlign: "center",
                    transition: "background-color 0.2s ease",
                  }}
                >
                  {additionalProps?.[`onRender${h.id}`]
                    ? additionalProps[`onRender${h.id}`](row)
                    : row[h.id]}
                </td>
              ))}
              {actions && (
                <td
                  style={{
                    padding: "12px 16px",
                    borderBottom: "1px solid #e5e7eb",
                    textAlign: "center",
                    transition: "background-color 0.2s ease",
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
                          ":hover": {
                            backgroundColor: "#4f46e5",
                            color: "white",
                            borderColor: "#4f46e5",
                          },
                        }}
                      >
                        {action.icon && <span>{action.icon}</span>}
                        {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td
              colSpan={actions ? headers?.length + 1 : headers?.length}
              style={{
                padding: "12px 16px",
                textAlign: "center",
                backgroundColor: "#f8f9fa",
                fontWeight: "600",
                borderTop: "2px solid #ddd",
                borderBottomLeftRadius: "8px",
                borderBottomRightRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>Total Records: {data?.length || 0}</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <button
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#4f46e5",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Previous
                  </button>
                  <span style={{ padding: "6px 12px" }}>Page 1 of 5</span>
                  <button
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#4f46e5",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Next
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default Table;
