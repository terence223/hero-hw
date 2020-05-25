/**
 * 
 * 主要頁面
 * 
 */

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Container, CircularProgress } from '@material-ui/core';
import { notifySuccess } from '../tool/notification';

import HeroProfile from '../components/HeroProfile';
import HeroCard from '../components/HeroCard';

function Heroes() {

    let { path } = useRouteMatch();

    const [heros, setHeros] = useState([]);    // 所有英雄基本資料

    // 取得所有英雄基本資料
    const fetchHeros = () => {
        axios.get('https://hahow-recruit.herokuapp.com/heroes')
            .then((res) => {
                setHeros(res.data);
            })
            .catch((error) => {
                notifySuccess('錯誤！', '網站發生錯誤，很抱歉！');
            });
    }
    
    useEffect(() => {
        fetchHeros();
    }, []);

    if(!heros.length) return(<LoadingPage><CircularProgress color="inherit" size={60} /></LoadingPage>)

    return (
        <div>
            <TheContainer maxWidth="md">
                <Grid container spacing={2}>
                    {
                        heros.map(hero => <HeroCard key={hero.id} heroData={hero} />)
                    }
                </Grid>
            </TheContainer>
            <Switch>
                <Route path={`${path}/:heroId`}>
                    <HeroProfile />
                </Route>
            </Switch>
        </div>
    );
}

const TheContainer = styled(Container)`
    margin-top: 40px;
`;

const LoadingPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 300px;
`;

export default Heroes;