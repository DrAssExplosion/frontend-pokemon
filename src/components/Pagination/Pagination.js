import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useParams, useNavigate } from 'react-router';
import style from './Style.module.css';


export const Pagination = () => {

    const params = useParams();
    const navigate = useNavigate();
    const arrPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [activeBtn, setActiveBtn] = useState(1);


    useEffect(() => {
        let page = +params.page || 1;
        setActiveBtn(page);
    }, [])


    const goPage = (page) => {
        setActiveBtn(page);
        navigate(`/pokemon-list/${page}`);
    }

    return (
        <Button.Group size='small' className={style.buttonGroup}>
            {
                arrPages.map((page) => <Button onClick={() => goPage(page)} key={page} color={page === activeBtn ? 'grey' : null}>{page}</Button>)
            }
        </Button.Group>
    );
}