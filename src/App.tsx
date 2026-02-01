import Footer from "@components/footer";
import PhotographyHobbyPopup from "@components/photography-hobby-popup";
import Navigation from "./apps/navigation/nagivation";
import SinglePage from "./apps/pages/landing/SinglePage";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <SinglePage />
      <Footer />
      <PhotographyHobbyPopup />
    </div>
  );
}

export default App;
