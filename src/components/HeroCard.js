/**
 * 英雄卡片顯示元件
 * 
 * Props
 * heroData          Object     英雄資料，有 id, name 和 image
 * 
 */

import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Grid, Card, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';
import { Link, useParams } from "react-router-dom";
import PropTypes from 'prop-types';

function HeroCard({ heroData }) {

    let { heroId } = useParams();

    return (
        <GridCol item xs={6} sm={4} md={4} lg={3}>
            <Link to={`/heroes/${heroData.id}`}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={ heroData.name }
                            image={ heroData.image }
                        />
                        <CardContent>
                            <CardTitle gutterBottom variant="h5" component="h2">
                                { Number(heroId) === heroData.id ? <SelectedName>{ heroData.name }</SelectedName> : <span>{ heroData.name }</span> }
                            </CardTitle>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Link>
        </GridCol>
    );
}

HeroCard.propTypes = {
    heroData: PropTypes.object.isRequired,
};

const SelectedName = styled.span`
    color: #E3325A;
`;

const CardTitle = styled(Typography)`
    text-align: center;
`;

const GridCol = styled(Grid)`
    margin-bottom: 20px;
`;

export default HeroCard;