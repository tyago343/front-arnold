import { Route, Routes } from "react-router";
import AuthenticatedLayout from "@layouts/authenticated.layout";
import Home from "@pages/Home";
import Dashboard from "@pages/Dashboard";
import User from "@pages/User";

export default function App() {
  return (
    <AuthenticatedLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </AuthenticatedLayout>
  );
}
