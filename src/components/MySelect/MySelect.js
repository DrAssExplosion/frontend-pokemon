import style from './Style.module.css';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';


export const MySelect = ({ type }) => {

    const navigate = useNavigate();
    const dataTypes = useStoreState((state) => state.userData.pokemonSelect.dataTypes);
    const dataSubtypes = useStoreState((state) => state.userData.pokemonSelect.dataSubtypes);

    const typeSelect = useStoreState((state) => state.userData.pokemonSelect.type);
    const subtypeSelect = useStoreState((state) => state.userData.pokemonSelect.subtype);

    const setPokemonSelectType = useStoreActions((actions) => actions.userData.setPokemonSelectType);
    const setPokemonSelectSubtype = useStoreActions((actions) => actions.userData.setPokemonSelectSubtype);
    

    useEffect(() => {
    }, [dataTypes, dataSubtypes])

    return (
        <div className={style.select}>
            {
                type === 'type' ?
                    <select value={typeSelect} onChange={e => { setPokemonSelectType(e.currentTarget.value); navigate(`/pokemon-list/1`); }} >
                        <option>Выбрать тип</option>
                        {
                            dataTypes.map((name, i) => <option key={i} value={name}>{name}</option>)
                        }
                    </select>
                    :
                    <select value={subtypeSelect} onChange={e => { setPokemonSelectSubtype(e.currentTarget.value); navigate(`/pokemon-list/1`); }} >
                        <option>Выбрать подтип</option>
                        {
                            dataSubtypes.map((name, i) => <option key={i} value={name}>{name}</option>)
                        }
                    </select>
            }

        </div>
    );

}

