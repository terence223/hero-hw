/**
 * 英雄卡片顯示元件
 * 
 * Props
 * heroData          Object     英雄資料，有 id, name 和 image
 * 
 */

import React from 'react';
import styled from 'styled-components';
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function HeroCard({ heroData }) {
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
                                { heroData.name }
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

export default HeroCard;