import React, { useState } from 'react';
import { LeftMenu } from '../../components/LeftMenu/LeftMenu';
import { PokemonCardList } from '../../components/PokemonCardList/PokemonCardList';
import { AuthorizationVerification } from './../../components/AuthorizationVerification';
import { Header } from './../../components/Header/Header';
import style from './Style.module.css';


export const PokemonListPage = () => {


  const [typeSelect, setTypesSelect] = useState(null);
  const [subtypeSelect, setSubtypesSelect] = useState(null);

  return (
    <>
      <AuthorizationVerification />
      <Header />
      <div className={style.container}>
        <LeftMenu setTypesSelect={setTypesSelect} setSubtypesSelect={setSubtypesSelect} />
        <PokemonCardList typeSelect={typeSelect} subtypeSelect={subtypeSelect} />
      </div>
    </>
  );
}
