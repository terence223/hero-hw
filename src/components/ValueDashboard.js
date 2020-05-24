/**
 * 能力值顯示和增減的元件
 * 
 * Props
 * abilityName       String     能力值名
 * abilityValue      Number     能力值數值
 * achieveMax        Boolean    能力值是否已達使用上限
 * onChangeAbility   Function   改變值時呼叫並傳回能力名和新的能力值
 * 
 */

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

ValueDashboard.propTypes = {
    abilityName: PropTypes.string,
    abilityValue: PropTypes.number,
    achieveMax: PropTypes.bool,
    onChangeAbility: PropTypes.func
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