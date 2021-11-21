import React, { useState } from 'react';
import { LeftMenu } from '../../components/LeftMenu/LeftMenu';
import { PokemonCardList } from '../../components/PokemonCardList/PokemonCardList';
import { AuthorizationVerification } from './../../components/AuthorizationVerification';
import { Header } from './../../components/Header/Header';
import style from './Style.module.css';


export const PokemonListPage = () => {


  return (
    <>
      <AuthorizationVerification />
      <Header />
      <div className={style.container}>
        <LeftMenu />
        <PokemonCardList />
      </div>
    </>
  );
}
