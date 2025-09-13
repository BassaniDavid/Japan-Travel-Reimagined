import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/Homepage";
import RegionPage from "../pages/RegionPage";
import DiscoverJapanPage from "../pages/DiscoverJapanPage";
import PlanYourTripPage from "../pages/PlanYourTripPage";
import CulturePage from "../pages/discoverJapanPages/DiscoverJapanSubPage";
import "./App.css";

import HistoryPage from "../pages/discoverJapanPages/HystoryPage";

function App() {
  return (
    <BrowserRouter basename="/Japan-Travel-Reimagined">
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* Rotta per l'Homepage */}
          <Route path="/" element={<HomePage />} />

          {/* Rotte per le pagine di Scoperta del Giappone */}
          <Route path="scopri-giappone" element={<DiscoverJapanPage />} />
          <Route path="scopri-giappone/storia" element={<HistoryPage />} />
          <Route path="scopri-giappone/cultura" element={<CulturePage />} />
          <Route
            path="scopri-giappone/comportamento"
            element={<CulturePage />}
          />
          <Route path="scopri-giappone/cibo" element={<CulturePage />} />
          <Route path="scopri-giappone/popculture" element={<CulturePage />} />

          {/* Rotte per le pagine di Pianificazione del Viaggio */}
          <Route path="organizza-viaggio" element={<PlanYourTripPage />} />
          <Route path="organizza-viaggio/alloggi" element={<CulturePage />} />
          <Route path="organizza-viaggio/trasporti" element={<CulturePage />} />
          <Route
            path="organizza-viaggio/visti-e-documenti"
            element={<CulturePage />}
          />
          <Route path="organizza-viaggio/budget" element={<CulturePage />} />
          <Route
            path="organizza-viaggio/consigli-utili"
            element={<CulturePage />}
          />

          {/* Rotta dinamica per le pagine delle regioni */}
          <Route path="regioni/:regionName" element={<RegionPage />} />

          {/* Rotta per gestire i casi di "pagina non trovata" */}
          <Route path="*" element={<h1>404: Pagina non trovata</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
