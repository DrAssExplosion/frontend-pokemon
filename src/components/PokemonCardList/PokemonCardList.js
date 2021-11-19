import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import style from './Style.module.css';
import pokemon from 'pokemontcgsdk';
import { Pagination } from './../../components/Pagination/Pagination';
import { Loader } from 'semantic-ui-react';
import { ModalPokemon } from '../ModalPokemon/ModalPokemon';

export const PokemonCardList = ({ typeSelect, subtypeSelect }) => {

  const [arrData, setArrData] = useState(null);
  const params = useParams();
  const page = params.page || '1';

  useEffect(() => {
    const thisPage = params.page || '1';
    let sortTypeSelect = (typeSelect && typeSelect !== 'Выбрать тип') ? `types:${typeSelect}` : '';
    let sortSubtypeSelect = (subtypeSelect && subtypeSelect !== 'Выбрать подтип') ? ` subtypes:${subtypeSelect}` : '';
    pokemon.card.where({ q: sortTypeSelect + sortSubtypeSelect, pageSize: 25, page: thisPage })
      .then(result => {
        setArrData(result.data);
      })
  }, [page, typeSelect, subtypeSelect]);

  return (
    <div className={style.container}>
      <div className={style.cardList}>
        {
          arrData === null
            ?
            <Loader active size='large'>Загрузка</Loader>
            :
            arrData.map((data, index) => <ModalPokemon key={index} dataPokemon={data} />)
        }
      </div>
      <Pagination />
    </div>
  );
}