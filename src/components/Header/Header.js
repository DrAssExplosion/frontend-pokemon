import { useNavigate, useLocation } from 'react-router';
import { Button } from 'semantic-ui-react';
import style from './Style.module.css';
import { useStoreActions } from 'easy-peasy';
import { memo, useEffect } from 'react';



function Header() {

    let navigate = useNavigate();
    let location = useLocation().pathname;
    const setLogin = useStoreActions((actions) => actions.userData.setLogin);
    const setPassword = useStoreActions((actions) => actions.userData.setPassword);
    const setAccessPasswordOTP = useStoreActions((actions) => actions.userData.setAccessPasswordOTP);

    const logout = () => {
        setLogin(null);
        setPassword(null);
        setAccessPasswordOTP(null);
        localStorage.clear();
        navigate('/auth');
    }
    const back = () => {
        navigate(-1);
    }

    useEffect(() => {
       // console.log('header')
    }, [])

    return (
        <div className={style.header}>
            {
                location.match(/pokemon(?!-)/) ? <Button onClick={back}>Назад</Button> : <span></span>
            }
            <Button onClick={logout}>Выход</Button>
        </div>
    );
}

export default memo(Header, ((prevProps, nextProps) => {
    // const location = useLocation();
    return false
}
));