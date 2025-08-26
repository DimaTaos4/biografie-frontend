import { useState } from "react";
import "./shared/styles/styles.css";
import Header from "./moduls/layouts/Header/Header";
import Footer from "./moduls/layouts/Footer/Footer";
import PageLayout from "./moduls/layouts/PageLayout/PageLayout";
import ScrollToTop from "./shared/components/ScrollToTop/ScrollToTop";
import Navigation from "./pages/Navigation";
import HamburgerModal from "./shared/Modals/HamburgerModal/HamburgerModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageLayout>
      <ScrollToTop />
      <Header onHamburgerClick={() => setIsModalOpen(true)} />
      <Navigation />
      <Footer />
      {isModalOpen && <HamburgerModal onClose={() => setIsModalOpen(false)} />}
    </PageLayout>
  );
}

export default App;
