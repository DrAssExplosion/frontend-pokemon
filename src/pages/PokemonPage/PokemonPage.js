import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { AuthorizationVerification } from './../../components/AuthorizationVerification';
import { Header } from './../../components/Header/Header';
import style from './Style.module.css';
import { Divider } from 'semantic-ui-react';
import pokemon from 'pokemontcgsdk';

export const PokemonPage = () => {

  const [data, setData] = useState(null);
  const params = useParams();
  const page = params.page || 'base1-4';

  useEffect(() => {
    let pokemonFind = page;
    pokemon.card.find(pokemonFind)
      .then(result => {
        setData(result);
      })
  }, [page]);

  return (
    <>
      <AuthorizationVerification />
      <Header />
      {
        data !== null ?
          <div className={style.container}>
            <div className={style.leftBlock}>
              <img src={data.images.large} alt='...' />
              <div className={style.description}>{data.flavorText}</div>
            </div>
            <div className={style.rightBlock}>
              <p>Name - {data.name}</p>
              <p>Supertype - {data.supertype}</p>
              <p>Types - {data.types.map(e => e + ' ')}</p>
              <p>SubTypes - {data.subtypes.map(e => e + ' ')}</p>
              <Divider />
              <p>Damage - {data?.attacks?.[0].damage || 'Неопределено'}</p>
              <p>{data?.attacks?.[0].cost?.[0] || 'Неопределено'}</p>
              <p>{data?.weaknesses?.[0].type || 'Неопределено'}</p>
              <p>{data.hp}</p>
            </div>
          </div>
          : null
      }

    </>
  );

}

