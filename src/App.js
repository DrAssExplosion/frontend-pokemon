import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthPage } from './pages/AuthPage';
import 'semantic-ui-css/semantic.min.css';
import { AccessPasswordOTPPage } from './pages/AccessPasswordOTPPage';
import { PokemonListPage } from './pages/PokemonListPage/PokemonListPage';
import { PokemonPage } from './pages/PokemonPage/PokemonPage';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from 'react-router';
import "./styles.css";
import pokemon from 'pokemontcgsdk';
import { StoreProvider } from 'easy-peasy';
import store from './store/store';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();
  pokemon.configure({ apiKey: 'ddd31964-6b73-4f6d-8fc4-0ac4b283516b' });

  useEffect(() => {
    console.log(location.key);
  })
  return (
    <StoreProvider store={store}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes>
          <Route path="auth" element={<AuthPage />} />
          <Route path="access-password" element={<AccessPasswordOTPPage locationKeyThis={location.key} />} />
          <Route path="pokemon-list" element={<PokemonListPage />} >
            <Route path=":page" />
          </Route>
          <Route path="pokemon" element={<PokemonPage />} >
            <Route path=":page" />
          </Route>
          <Route path="*" element={<AuthPage />} />
        </Routes>
      </AnimatePresence>
    </StoreProvider>
  );

}

export default App;
