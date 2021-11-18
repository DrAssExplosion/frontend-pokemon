import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'semantic-ui-react';


export const Header = () => {

    let navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/auth');
    }

    return (
        <div><Button onClick={logout}>Выход</Button></div>
    );
}