import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Etablissement from "./Pages/Etablissement";
import ContactUs from "./Pages/ContactUs";
import Activites from "./Pages/Activites";
import Classes from "./Pages/Classes";
import Prescolaire from "./Pages/Prescolaire";
import Primaire from "./Pages/Primaire";
import College from "./Pages/College";
import Lycee from "./Pages/Lycee";
import Pedagogie from "./Pages/Pedagogie";
import Rubriques from "./Pages/Rubriques";
import Media from "./Pages/Media";
import TvScolaire from "./Pages/TvScolaire";
import RadioScolaire from "./Pages/RadioScolaire";
import Galerie from "./Pages/Galerie";
import NosServices from "./Pages/NosServices";
import Clubs from "./Pages/Clubs";
import Voyages from "./Pages/Voyages";
import Concerts from "./Pages/Concerts";
import API from "./api/axios";
import Footer from "./Components/Footer";

import AtableCestActu from "./Pages/PageRubrique/AtableCestActu";
import BienEtreLecole from "./Pages/PageRubrique/BienEtreLecole";
import CreationsEcolieres from "./Pages/PageRubrique/CreationsEcolieres";
import CultureDecouvertes from "./Pages/PageRubrique/CultureDecouvertes";
import EcoleCitoyenne from "./Pages/PageRubrique/EcoleCitoyenne";
import LaSceneParascolaire from "./Pages/PageRubrique/LaSceneParascolaire";
import LechoQuotidiene from "./Pages/PageRubrique/LechoQuotidiene";
import LecoleFutur from "./Pages/PageRubrique/LecoleFutur";
import LeMondePerspective from "./Pages/PageRubrique/LeMondePerspective";
import LesEtoilesNotreEcole from "./Pages/PageRubrique/LesEtoilesNotreEcole";
import LesVoixDeLecole from "./Pages/PageRubrique/LesVoixDeLecole";
import PlaneteEcole from "./Pages/PageRubrique/PlaneteEcole";
import ProjetsQuiChangentTout from "./Pages/PageRubrique/ProjetsQuiChangentTout";
import SportEspritEquipe from "./Pages/PageRubrique/SportEspritEquipe";


const App = () => {
  useEffect(() => {
    API.get("/")
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/etablissement" element={<Etablissement />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/activites" element={<Activites />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/prescolaire" element={<Prescolaire />} />
        <Route path="/primaire" element={<Primaire />} />
        <Route path="/college" element={<College />} />
        <Route path="/lycee" element={<Lycee />} />
        <Route path="/pedagogie" element={<Pedagogie />} />
        <Route path="/rubriques" element={<Rubriques />} />
        <Route path="/media" element={<Media />} />
        <Route path="/tvScolaire" element={<TvScolaire />} />
        <Route path="/radioScolaire" element={<RadioScolaire />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/NosServices" element={<NosServices />} />
        <Route path="/Clubs" element={<Clubs />} />
        <Route path="/Voyages" element={<Voyages />} />
        <Route path="/Concerts" element={<Concerts />} />

        <Route path="/atableCestActu" element={<AtableCestActu />} />
        <Route path="/bienEtreLecole" element={<BienEtreLecole />} />
        <Route path="/creationsEcolieres" element={<CreationsEcolieres />} />
        <Route path="/cultureDecouvertes" element={<CultureDecouvertes />} />
        <Route path="/ecoleCitoyenne" element={<EcoleCitoyenne />} />
        <Route path="/laSceneParascolaire" element={<LaSceneParascolaire/>} />
        <Route path="/lechoQuotidiene" element={<LechoQuotidiene />} />
        <Route path="/lecoleFutur" element={<LecoleFutur />} />
        <Route path="/leMondePerspective" element={<LeMondePerspective />} />
        <Route path="/lesEtoilesNotreEcole" element={<LesEtoilesNotreEcole />} />
        <Route path="/lesVoixDeLecole" element={<LesVoixDeLecole />} />
        <Route path="/planeteEcole" element={<PlaneteEcole />} />
        <Route path="/projetsQuiChangentTout" element={<ProjetsQuiChangentTout />} />
        <Route path="/sportEspritEquipe" element={<SportEspritEquipe />} />

      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
