import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import style from './Style.module.css';
import pokemon from 'pokemontcgsdk';
import { Pagination } from './../../components/Pagination/Pagination';
import { NothingWasFound } from './../../components/NothingWasFound/NothingWasFound';
import { Loader } from 'semantic-ui-react';
import { ModalPokemon } from '../ModalPokemon/ModalPokemon';
import { useStoreActions, useStoreState } from "easy-peasy";
import { motion } from 'framer-motion';



export const PokemonCardList = () => {

  const [arrData, setArrData] = useState(null);
  const params = useParams();
  const page = params.page || '1';

  const typeSelect = useStoreState((state) => state.userData.pokemonSelect.type);
  const subtypeSelect = useStoreState((state) => state.userData.pokemonSelect.subtype);

  const setCountPaginations = useStoreActions((actions) => actions.userData.setCountPaginations);
  const setCurrentPage = useStoreActions((actions) => actions.userData.setCurrentPage);



  useEffect(() => {
    const thisPage = params.page || '1';
    setCurrentPage(thisPage);
    let sortTypeSelect = (typeSelect && typeSelect !== 'Выбрать тип') ? `types:${typeSelect}` : '';
    let sortSubtypeSelect = (subtypeSelect && subtypeSelect !== 'Выбрать подтип') ? ` subtypes:${subtypeSelect}` : '';

    pokemon.card.where({ q: sortTypeSelect + sortSubtypeSelect, pageSize: 50, page: thisPage })
      .then(result => {
        setCountPaginations(Math.ceil(result.totalCount / 50)); // Кол-во страниц по результату
        setArrData(result.data);
        // console.log(result);
      })
  }, [page, typeSelect, subtypeSelect]);

  return (
    <motion.div exit={{opacity:0}} animate={{opacity: 1}} initial={{opacity: 0}} >
    <div className={style.container}>
      <div className={style.cardList}>
        {
          arrData === null
            ?
            <Loader active inverted size='large'>Загрузка</Loader>
            :
            arrData.length > 0 ? arrData.map((data, index) => <ModalPokemon key={index} dataPokemon={data} />) : <NothingWasFound />
        }
      </div>
      <Pagination />
    </div>
    </motion.div>
  );
}