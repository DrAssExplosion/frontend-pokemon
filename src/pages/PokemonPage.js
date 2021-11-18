import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthorizationVerification } from '../components/AuthorizationVerification';
import { Header } from '../components/Header';


const PokemonPage = () => {



  return (
    <>
      <AuthorizationVerification />
      <Header />
      PokemonPage
    </>
  );
}

export default PokemonPage;
