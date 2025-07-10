import "./shared/styles/styles.css";
import Header from "./moduls/layouts/Header/Header";

import Footer from "./moduls/layouts/Footer/Footer";

import PageLayout from "./moduls/layouts/PageLayout/PageLayout";

import Navigation from "./pages/Navigation";

function App() {
  return (
    <PageLayout>
      <Header />
      <Navigation />
      <Footer />
    </PageLayout>
  );
}

export default App;
