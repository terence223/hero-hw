import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import HeroProfile from '../components/HeroProfile';
import HeroCard from '../components/HeroCard';

function Heroes() {

    let { path, url } = useRouteMatch();

    const [heros, setHeros] = useState([]);    // 所有英雄基本資料

    // 取得所有英雄基本資料
    const fetchHeros = () => {
        axios.get('https://hahow-recruit.herokuapp.com/heroes')
            .then((res) => {
                setHeros(res.data);
            })
            .catch((error) => {
            });
    }
    
    useEffect(() => {
        fetchHeros();
    }, []);

    return (
        <div>
            {
                heros.map(hero => <HeroCard key={hero.id} heroData={hero} />)
            }
            <Switch>
                <Route path={`${path}/:heroId`}>
                    <HeroProfile />
                </Route>
            </Switch>
        </div>
    );
}

export default Heroes;