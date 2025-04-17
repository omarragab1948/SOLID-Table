import React from "react";
import Table from "../components/Table";

const Users = () => {
  const headers = [
    {
      id: "name",
      label: "Name",
    },
    {
      id: "phone",
      label: "Phone",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "requestedOrders",
      label: "Requested Orders",
    },
    {
      id: "status",
      label: "Status",
    },
    {
      id: "address",
      label: "Address",
    },
  ];
  const actions = [
    {
      id: "edit",
      label: "Edit",
      icon: "✏️", // Pencil emoji
    },
    {
      id: "delete",
      label: "Delete",
      icon: "🗑️", // Wastebasket emoji
    },
    {
      id: "view",
      label: "View",
      icon: "👁️", // Eye emoji
    },
  ];
  const users = [
    {
      id: 1,
      name: "Ali Hassan",
      phone: "01012345678",
      email: "ali.hassan@example.com",
      requestedOrders: 3,
      status: "active",
      address: "Cairo, Egypt",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      phone: "01098765432",
      email: "sara.ahmed@example.com",
      requestedOrders: 5,
      status: "pending",
      address: "Alexandria, Egypt",
    },
    {
      id: 3,
      name: "Omar Adel",
      phone: "01122334455",
      email: "omar.adel@example.com",
      requestedOrders: 1,
      status: "inactive",
      address: "Giza, Egypt",
    },
    {
      id: 4,
      name: "Laila Mahmoud",
      phone: "01234567890",
      email: "laila.mahmoud@example.com",
      requestedOrders: 4,
      status: "active",
      address: "Tanta, Egypt",
    },
    {
      id: 5,
      name: "Khaled Mostafa",
      phone: "01511223344",
      email: "khaled.mostafa@example.com",
      requestedOrders: 2,
      status: "active",
      address: "Mansoura, Egypt",
    },
  ];
  const additionalProps = {
    onRenderstatus: (item) => {
      const statusColors = {
        active: "green",
        pending: "orange",
        inactive: "red",
      };
      const bgColor = statusColors[item?.status] || "black";
      return (
        <span
          style={{
            backgroundColor: bgColor,
            color: "#fff",
            padding: "6px 8px",
            borderRadius: "4px",
            display: "inline-block",
            fontSize: "0.875rem",
            fontWeight: "500",
            width: "80px",
            textAlign: "center", 
            boxSizing: "border-box", 
          }}
        >
          {item?.status}
        </span>
      );
    },
  };

  return (
    <div>
      <h2>Users Table</h2>
      <Table
        data={users}
        headers={headers}
        actions={actions}
        additionalProps={additionalProps}
      />
    </div>
  );
};

export default Users;
