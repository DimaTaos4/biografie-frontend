import NotFoundPage from "./NotFoundPage/NotFoundPage";

import HomePage from "./HomePage/HomePage";

import SkillsPage from "./SkillsPage/SkillsPage";

import PortfolioPage from "./PortfolioPage/PortfolioPage";

import { Route, Routes } from "react-router-dom";

import Container from "../moduls/layouts/Container/Container";

const Navigation = () => {
  return (
    <Container>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </Container>
  );
};
export default Navigation;
