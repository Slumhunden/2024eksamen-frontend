import NavBar from "./components/navBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DeltagerPage from "./pages/deltagerPage";
import ResultsPage from "./pages/resultsPage";

export default function App() {
  return (
    <div>
      <>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/deltagere" element={<DeltagerPage />} />
           <Route path="/resultater" element={<ResultsPage />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}
