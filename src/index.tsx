import { Route, Routes } from "react-router";
import AuthenticatedLayout from "@layouts/authenticated.layout";
import Home from "@pages/Home";
import Dashboard from "@pages/Dashboard";

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
