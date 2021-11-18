import React, { useState, useEffect } from 'react';
import { AppInit } from './components/AppInit';
import { Routes, Route } from "react-router-dom";
import { AuthPage } from './pages/AuthPage';
import 'semantic-ui-css/semantic.min.css';
import { AccessPasswordOTPPage } from './pages/AccessPasswordOTPPage';
import { useNavigate } from 'react-router-dom';
import { PokemonListPage } from './pages/PokemonListPage';
import { AuthorizationVerification } from './components/AuthorizationVerification';

function App() {

  // const [initApp, setInitApp] = useState(false);



  return (
    <>

      <Routes>
        <Route path="auth" element={<AuthPage />} />
        <Route path="access-password" element={<AccessPasswordOTPPage />} />
        <Route path="pokemon-list" element={<PokemonListPage />} />
      </Routes>
    </>

  );

}

export default App;
