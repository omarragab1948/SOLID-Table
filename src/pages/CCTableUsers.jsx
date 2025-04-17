import Table from "../patterns/CCTable";

const CCTableUsers = ({ data }) => {
  return (
    <Table>
      <Table.Header>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Phone</Table.HeaderCell>
        <Table.HeaderCell>Email</Table.HeaderCell>
        <Table.HeaderCell>Orders</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Header>

      <Table.Body>
        {data.map((user) => (
          <Table.Row key={user.id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.phone}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>{user.requestedOrders}</Table.Cell>
            <Table.Cell>{user.status}</Table.Cell>
            <Table.Cell>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  justifyContent: "center",
                }}
              >
                <button
                  title="Edit"
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
                  ✏️ Edit
                </button>
                <button
                  title="Delete"
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
                  🗑️ Delete
                </button>
                <button
                  title="View"
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
                  👁️ View
                </button>
              </div>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>Total Records: {data.length}</Table.Footer>
    </Table>
  );
};
export default CCTableUsers;
