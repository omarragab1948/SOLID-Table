import Table from "../patterns/CCTable";

const CCTableUsers = ({ data, actions, headers, additionalProps }) => {
  return (
    <Table>
      <Table.Header>
        <Table.Row>
          {headers?.map((header) => (
            <Table.HeaderCell key={header.id}>{header.label}</Table.HeaderCell>
          ))}
          {actions && <Table.HeaderCell>Actions</Table.HeaderCell>}
        </Table.Row>
      </Table.Header>

      <tbody>
        {data?.map((row, index) => (
          <Table.Row key={row.id} index={index}>
            {headers?.map((h) => (
              <Table.Cell
                key={`${row.id}-${h.id}`}
                renderFn={additionalProps?.[`onRender${h.id}`]}
                row={row}
              >
                {row[h.id]}
              </Table.Cell>
            ))}
            {actions && <Table.Actions actions={actions} />}
          </Table.Row>
        ))}
      </tbody>

      <Table.Footer>
        <Table.Row>
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
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default CCTableUsers;
