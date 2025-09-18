import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import FarmerDashboard from "./Modules/market/pages/FarmerDashboard.jsx";
import CropRecommendation from "./Modules/recommendation/pages/Recommedation.jsx";
import ProfilePage from "./Modules/auth/pages/Profile.jsx";
import SignIn from "./Modules/auth/pages/SignIn.jsx";
import Signup from "./Modules/auth/pages/Signup.jsx";
import Assistant from "./Modules/VoiceAssistant/Pages/Assistant.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/market" element={<FarmerDashboard />} />
        <Route path="/recommendation" element={<CropRecommendation />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/assistant" element={<Assistant />} />

        {/* Example: Add more pages like About, Contact, etc. */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </>
  );
}

export default App;
