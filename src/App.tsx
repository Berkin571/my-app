import "./index.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Layout } from "./layout";
import { Home, Leistungen, FAQ, Kontakt, UeberUns } from "./pages";
import { companyData } from "./data";

function App() {
  return (
    <Router>
      <Layout company={companyData}>
        <Routes>
          <Route path="/" element={<Home {...companyData} />} />
          <Route path="/leistungen" element={<Leistungen />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/kontakt" element={<Kontakt {...companyData} />} />
          <Route path="/ueber-uns" element={<UeberUns {...companyData} />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
