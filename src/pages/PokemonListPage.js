import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { AuthorizationVerification } from '../components/AuthorizationVerification';
import { Header } from '../components/Header';


export const PokemonListPage = () => {

   

  return (
    <>
      <AuthorizationVerification />
      <Header />
      PokemonListPage
    </>
  );
}
 