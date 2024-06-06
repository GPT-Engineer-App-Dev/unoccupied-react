import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx"; // Import Login page
import ProtectedRoute from "./components/ProtectedRoute.jsx"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;