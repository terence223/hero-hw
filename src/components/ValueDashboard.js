import React from 'react';
import styled from 'styled-components';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function ValueDashboard({abilityName, abilityValue, achieveMax, onChangeAbility}) {
    if(!abilityName) {
        return null
    }

    return (
        <Container>
            <AbilityNameSpan>
                { abilityName.toUpperCase() }
            </AbilityNameSpan>
            <Fab size="small" color="secondary" aria-label="remove" disabled={!abilityValue} onClick={() => {
                if(abilityValue > 0) onChangeAbility(abilityName, abilityValue - 1)
            }}>
                <RemoveIcon />
            </Fab>
            <AbilityValueSpan>
                { abilityValue }
            </AbilityValueSpan>
            <Fab size="small" color="secondary" aria-label="add" disabled={achieveMax} onClick={() => {
                if(!achieveMax) onChangeAbility(abilityName, abilityValue + 1)
            }}>
                <AddIcon />
            </Fab>
        </Container>
    );
};

const Container = styled.div`
    width: 300px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const AbilityNameSpan = styled.span`
    width: 50px;
    text-align: center;
    display: inline-block;
    margin-right: 40px;
    margin-left: -10px;
`;

const AbilityValueSpan = styled.span`
    width: 60px;
    text-align: center;
    display: inline-block;
`;


export default ValueDashboard;