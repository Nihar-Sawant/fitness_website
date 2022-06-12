import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

//importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//importing Pages
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";

//css files mapping
import "./App.css";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: "1488 px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exersice/:id" element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
