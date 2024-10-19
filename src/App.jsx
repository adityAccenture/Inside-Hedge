import { Toaster } from "react-hot-toast";
import All from "./All";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PremiumService from "./components/PremiumService";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/premium-service" element={<PremiumService />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  );
};
export default App;
