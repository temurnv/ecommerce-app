import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<div>Salom</div>} />
    </Routes>
  );
};

export default App;
