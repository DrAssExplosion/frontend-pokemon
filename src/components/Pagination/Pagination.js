import { useEffect, useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useParams, useNavigate } from 'react-router';
import style from './Style.module.css';
import { useStoreState } from "easy-peasy";



export const Pagination = () => {

    const params = useParams();
    const navigate = useNavigate();
    const [activeBtn, setActiveBtn] = useState(1);
    const [arrPages, setArrPages] = useState([]);
    const countPaginations = useStoreState((state) => state.userData.data.countPaginations);
    const currentPage = +useStoreState((state) => state.userData.data.currentPage);




    useEffect(() => {
        let page = +params.page || 1;
        // console.log(countPaginations);
        // console.log(currentPage);
        const FirtLeft = currentPage - 1 >= 1 && currentPage <= countPaginations ? currentPage - 1 : currentPage;
        const SecondLeft = currentPage - 2 >= 2 && currentPage <= countPaginations ? currentPage - 2 : currentPage;
        const ThridLeft = currentPage - 3 >= 3 && currentPage <= countPaginations ? currentPage - 3 : currentPage;
        const FirtRight = currentPage + 1 <= countPaginations ? currentPage + 1 : countPaginations;
        const SecondRight = currentPage + 2 <= countPaginations ? currentPage + 2 : countPaginations;
        const ThridRight = currentPage + 3 <= countPaginations ? currentPage + 3 : countPaginations;

        let arrPagesT = [1, ThridLeft, SecondLeft, FirtLeft, currentPage, FirtRight, SecondRight, ThridRight, countPaginations];
        arrPagesT = arrPagesT.sort((a, b) => a - b).filter(e => e > 0);
        arrPagesT = [...new Set([...arrPagesT])];
        setArrPages(arrPagesT)
        // console.log(arrPagesT);
        setActiveBtn(page);
    }, [countPaginations, currentPage])


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