import { useState, useEffect } from 'react';
import { MySelect } from '../MySelect/MySelect';
import style from './Style.module.css';
import pokemon from 'pokemontcgsdk';


export const LeftMenu = () => {

    const [types, setTypes] = useState([]);
    const [subtypes, setSubtypes] = useState([]);


    useEffect(() => {
        pokemon.type.all().then(result => { setTypes(result?.[0] ? result : []); });
        pokemon.subtype.all().then(result => { setSubtypes(result?.[0] ? result : []); });
    }, []);



    return (
        <div className={style.leftMenu}>
            <MySelect dataList={types} type='type' />
            <MySelect dataList={subtypes} type='subtype' />
        </div>
    );
}