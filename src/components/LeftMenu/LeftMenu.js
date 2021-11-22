import { useEffect } from 'react';
import { MySelect } from '../MySelect/MySelect';
import style from './Style.module.css';
import pokemon from 'pokemontcgsdk';
import { useStoreActions, useStoreState } from 'easy-peasy';


export const LeftMenu = () => {


    const dataTypes = useStoreState((state) => state.userData.pokemonSelect.dataTypes);
    const dataSubtypes = useStoreState((state) => state.userData.pokemonSelect.dataSubtypes);
    const setPokemonDataSelectTypes = useStoreActions((actions) => actions.userData.setPokemonDataSelectTypes);
    const setPokemonDataSelectSubtypes = useStoreActions((actions) => actions.userData.setPokemonDataSelectSubtypes);


    useEffect(() => {
       // console.log('left menu');
        if (dataTypes.length === 0) {
            pokemon.type.all().then(result => {
                const types = result?.[0] ? result : [];
                setPokemonDataSelectTypes(types);
            });
        }
        if (dataSubtypes.length === 0) {
            pokemon.subtype.all().then(result => {
                const subtypes = result?.[0] ? result : [];
                setPokemonDataSelectSubtypes(subtypes);
            });
        }
    }, []);



    return (
        <div className={style.leftMenu}>
            <div className={style.fixedMenu}>
                <MySelect type='type' />
                <MySelect type='subtype' />
            </div>
        </div>
    );
}