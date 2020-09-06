/**
 * 英雄卡片顯示元件規格
 * 
 * Props
 * heroData          Object     英雄資料，有 id, name 和 image
 * 
 */

import React from 'react';
import styled from 'styled-components';
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from 'prop-types';

function HeroCard({ heroData }) {

    // 判定這張卡片是否是網址正在讀取資料的 Hero
    let selected = useRouteMatch({
        path: `/heroes/${heroData.id}`,
        strict: true,
        sensitive: true
    });

    return (
        <GridCol item xs={6} sm={4} md={4} lg={3}>
            <TheLink to={`/heroes/${heroData.id}`}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={ heroData.name }
                            image={ heroData.image }
                        />
                        <CardContent>
                            <CardTitle gutterBottom variant="h5" component="h2">
                                { selected ? <SelectedName>{ heroData.name }</SelectedName> : <span>{ heroData.name }</span> }
                            </CardTitle>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </TheLink>
        </GridCol>
    );
}

HeroCard.propTypes = {
    heroData: PropTypes.object.isRequired,
};

const TheLink = styled(Link)`
    text-decoration: none;
`;

const CardTitle = styled(Typography)`
    text-align: center;
`;

const GridCol = styled(Grid)`
    margin-bottom: 20px;
`;

const SelectedName = styled.span`
    color: #E3325A;
`;

export default HeroCard;