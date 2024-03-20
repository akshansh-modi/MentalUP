import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";
import HomePage from "./pages/exports";
import Coaches from "./pages/Coaches/Coaches";
import CoachPage from "./pages/CoachPage/CoachPage";
import CalendlyComponent from "./components/CalendyComponent";
import NotFound from "./pages/notFound/NotFound";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:id" element={<CoachPage />} />
          <Route path="/appointment" element={<CalendlyComponent/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
