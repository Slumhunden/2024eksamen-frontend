import NavBar from "./components/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeltagerPage from "./pages/deltagerPage";

export default function App() {
  return (
    <div>
      <>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/deltagere" element={<DeltagerPage />} />
            {/* Add other routes as needed */}
          </Routes>
        </Router>
      </>
    </div>
  );
}
