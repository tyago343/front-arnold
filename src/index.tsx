import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import AuthenticatedLayout from "@layouts/authenticated.layout";

export default function App() {
  return (
    <AuthenticatedLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </AuthenticatedLayout>
  );
}
