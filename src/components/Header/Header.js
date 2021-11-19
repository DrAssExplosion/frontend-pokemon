import { useNavigate, useLocation } from 'react-router';
import { Button } from 'semantic-ui-react';
import style from './Style.module.css';

export const Header = () => {

    let navigate = useNavigate();
    let location = useLocation().pathname;

    const logout = () => {
        localStorage.clear();
        navigate('/auth');
    }
    const back = () => {
        navigate(-1);
    }

    return (
        <div className={style.header}>
            {
                location.match(/pokemon(?!-)/) ? <Button onClick={back}>Назад</Button> : <span></span>
            }
            <Button onClick={logout}>Выход</Button>
        </div>
    );
}