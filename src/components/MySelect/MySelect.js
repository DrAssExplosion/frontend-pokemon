import style from './Style.module.css';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { useNavigate } from 'react-router';


export const MySelect = ({ dataList, type }) => {

    const navigate = useNavigate();
    const setPokemonSelectType = useStoreActions((actions) => actions.userData.setPokemonSelectType);
    const setPokemonSelectSubtype = useStoreActions((actions) => actions.userData.setPokemonSelectSubtype);
    const typeSelect = useStoreState((state) => state.userData.pokemonSelect.type);
    const subtypeSelect = useStoreState((state) => state.userData.pokemonSelect.subtype);


    return (
        <div className={style.select}>
            {
                type === 'type' ?
                    <select onChange={e => { setPokemonSelectType(e.currentTarget.value); navigate(`/pokemon-list/1`); }} >
                        <option>Выбрать тип</option>
                        {
                            dataList.map((name, i) => <option selected={typeSelect === name} key={i} value={name}>{name}</option>)
                        }
                    </select>
                    :
                    <select onChange={e => { setPokemonSelectSubtype(e.currentTarget.value); navigate(`/pokemon-list/1`); }} >
                        <option>Выбрать подтип</option>
                        {
                            dataList.map((name, i) => <option selected={subtypeSelect === name} key={i} value={name}>{name}</option>)
                        }
                    </select>
            }

        </div>
    );

}

