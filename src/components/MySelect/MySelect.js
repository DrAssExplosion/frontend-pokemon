import style from './Style.module.css';

export const MySelect = ({ dataList, setTypesSelect, setSubtypesSelect }) => {

    return (
        <div className={style.select}>
            {
                setTypesSelect ?
                    <select onChange={e => setTypesSelect(e.currentTarget.value)} >
                        <option>Выбрать тип</option>
                        {
                            dataList.map((name, i) => <option key={i} value={name}>{name}</option>)
                        }
                    </select>
                    :
                    <select onChange={e => setSubtypesSelect(e.currentTarget.value)} >
                        <option>Выбрать подтип</option>
                        {
                            dataList.map((name, i) => <option key={i} value={name}>{name}</option>)
                        }
                    </select>
            }

        </div>
    );

}

