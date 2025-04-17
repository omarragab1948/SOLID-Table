import React from "react";
import Table from "../components/Table";

const Products = () => {
  const headers = [
    { id: "name", label: "Product Name" },
    { id: "price", label: "Price (EGP)" },
    { id: "category", label: "Category" },
    { id: "stock", label: "In Stock" },
    { id: "image", label: "Image" },
  ];

  const actions = [
    {
      id: "edit",
      label: "Edit",
      icon: "✏️", 
    },
    {
      id: "delete",
      label: "Delete",
      icon: "🗑️",
    },
    {
      id: "view",
      label: "View",
      icon: "👁️",
    },
  ];
  const products = [
    {
      id: 1,
      name: "Wireless Mouse",
      price: 250,
      category: "Electronics",
      stock: 20,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      price: 480,
      category: "Audio",
      stock: 0,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 3,
      name: "Notebook",
      price: 35,
      category: "Stationery",
      stock: 50,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 4,
      name: "Backpack",
      price: 180,
      category: "Accessories",
      stock: 12,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 5,
      name: "Power Bank",
      price: 300,
      category: "Electronics",
      stock: 7,
      image: "https://via.placeholder.com/80",
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
            width: "80px", // Fixed width
            textAlign: "center", // Center text
            boxSizing: "border-box", // Include padding in width
          }}
        >
          {item?.status}
        </span>
      );
    },
  };

  return (
    <div>
      <h2>Products Table</h2>
      <Table
        data={products}
        headers={headers}
        actions={actions}
        additionalProps={additionalProps}
      />
    </div>
  );
};

export default Products;
