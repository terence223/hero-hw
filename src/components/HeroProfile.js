import React, { useState, useEffect } from 'react';
import { Grid, Button, CircularProgress, Container } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import styled from 'styled-components';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import ValueDashboard from './ValueDashboard';

function HeroProfile() {

    let { heroId } = useParams()

    // 計算 Object 內部所有值總和
    const countObjectValueTotal = (obj) => {
        return Object.values(obj).reduce((acc, crr) => {
            return acc + crr
        }, 0);
    };

    const [abilities, setAbilities] = useState({});    // 該 Hero 能力數值資料
    const [isStoring, setIsStoring] = useState(false); // 是否正在執行儲存的 patch

    // 使用點數是否已達上限
    const isAchieveMaximum = (obj) => {
        return countObjectValueTotal(obj) === abilities.total;
    }

    // 計算剩餘點數
    const leftPoint = () => {
        if(!abilities.data) return 
        return abilities.total - countObjectValueTotal(abilities.data);
    }

    // 取得選定的英雄 id 和能力值資料
    const fetchHerosValue = (heroId) => {
        axios.get(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`)
            .then((res) => {
                setAbilities({
                    total : countObjectValueTotal(res.data),
                    data: res.data
                })
            })
            .catch((error) => {

            })
    }

    // 能力值改變函式
    const onChangeAbility = (key, val) => {
        const tempAbility ={...abilities.data};
        tempAbility[key] = val;
        setAbilities({
            ...abilities,
            data: tempAbility
        })
    }

    const onStoreAbilities = () => {
        if(leftPoint() > 0) {
            alert('錯誤!', '還有剩餘點數未用完喔！');
            return
        }
    
        setIsStoring(true);
        axios.patch(`https://hahow-recruit.herokuapp.com/heroes/${heroId}/profile`, abilities.data)
            .then((res) => {
                setIsStoring(false);
            })
            .catch((error) => {
                setIsStoring(false);
            })
    }

    useEffect(() => {
        fetchHerosValue(heroId);
    }, [heroId]);

    return (
        <TheContainer maxWidth="md">
            <Grid container spacing={2}>
                <Grid container justify="center" item xs={12} sm={12} md={6} lg={6}>
                    { 
                        abilities.data && Object.entries(abilities.data).map((val, index) => <ValueDashboard key={index} abilityName={val[0]} abilityValue={val[1]} onChangeAbility={onChangeAbility}  achieveMax={isAchieveMaximum(abilities.data)} />)
                    }
                </Grid>
                <StoreGrid container item xs={12} sm={12} md={6} lg={6}>
                    <LeftPointSpan>剩餘點數 : { leftPoint() }</LeftPointSpan>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{height: '42px'}}
                        disabled={isStoring}
                        startIcon={ isStoring ? <CircularProgress color="inherit" size={20} /> : <SaveIcon /> }
                        onClick={() => onStoreAbilities()}
                    >
                        { isStoring ? '處理中' : '儲存' }
                    </Button>
                </StoreGrid>
            </Grid>
        </TheContainer>
    );
}

const TheContainer = styled(Container)`
    margin-top: 40px;
`;

const LeftPointSpan = styled.span`
  line-height: 50px;
`;

const StoreGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default HeroProfile;