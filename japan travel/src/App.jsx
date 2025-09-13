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
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          {/* Rotta per l'Homepage */}
          <Route path="/Japan-Travel-Reimagined/" element={<HomePage />} />

          {/* Rotte per le pagine di Scoperta del Giappone */}
          <Route
            path="Japan-Travel-Reimagined/scopri-giappone"
            element={<DiscoverJapanPage />}
          />
          <Route
            path="Japan-Travel-Reimagined/scopri-giappone/storia"
            element={<HistoryPage />}
          />
          <Route
            path="Japan-Travel-Reimagined/scopri-giappone/cultura"
            element={<CulturePage />}
          />
          <Route
            path="Japan-Travel-Reimagined/scopri-giappone/comportamento"
            element={<CulturePage />}
          />
          <Route
            path="Japan-Travel-Reimagined/scopri-giappone/cibo"
            element={<CulturePage />}
          />
          <Route
            path="Japan-Travel-Reimagined/scopri-giappone/popculture"
            element={<CulturePage />}
          />

          {/* Rotte per le pagine di Pianificazione del Viaggio */}
          <Route
            path="Japan-Travel-Reimagined/organizza-viaggio"
            element={<PlanYourTripPage />}
          />
          <Route
            path="Japan-Travel-Reimagined/organizza-viaggio/alloggi"
            element={<PlanYourTripPage />}
          />
          <Route
            path="Japan-Travel-Reimagined/organizza-viaggio/trasporti"
            element={<PlanYourTripPage />}
          />
          <Route
            path="Japan-Travel-Reimagined/organizza-viaggio/visti-e-documenti"
            element={<PlanYourTripPage />}
          />
          <Route
            path="Japan-Travel-Reimagined/organizza-viaggio/budget"
            element={<PlanYourTripPage />}
          />
          <Route
            path="Japan-Travel-Reimagined/organizza-viaggio/consigli-utili"
            element={<PlanYourTripPage />}
          />

          {/* Rotta dinamica per le pagine delle regioni */}
          <Route
            path="Japan-Travel-Reimagined/regioni/:regionName"
            element={<RegionPage />}
          />

          {/* Rotta per gestire i casi di "pagina non trovata" */}
          <Route path="*" element={<h1>404: Pagina non trovata</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
