import Users from "./pages/Users";
import Products from "./pages/Products";
import CCTableUsers from "./pages/CCTableUsers";
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
function App() {
  return (
    <>
      <Users />
      <Products />
      <CCTableUsers data={users} />
    </>
  );
}

export default App;
