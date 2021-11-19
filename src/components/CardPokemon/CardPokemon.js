import { useNavigate } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';
import style from './Style.module.css';


export const CardPokemon = ({ dataPokemon, openModal }) => {
    let navigate = useNavigate();
    return (
        <Card onClick={() => openModal(true)} className={style.card}>
            <Image src={dataPokemon.images.small} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{dataPokemon.name}</Card.Header>
                <Card.Description>
                    {dataPokemon.artist}
                </Card.Description>
            </Card.Content>
            <Card.Content extra style={{ paddingTop: 0, textAlign: 'end' }}>
                <span className={style.link} onClick={() => navigate(`/pokemon/${dataPokemon.id}`)} >Подробнее</span>
            </Card.Content>
        </Card>
    );
}