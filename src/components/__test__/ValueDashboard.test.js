/**
 * 
 * 試個簡單的 unit test
 * 
 */

import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';
import ValueDashboard from '../ValueDashboard';

it('減少能力值測試', () => {
    const mockCallback = jest.fn();
    render(<ValueDashboard abilityValue={5} abilityName="str" onChangeAbility={mockCallback} />);
    expect(screen.queryByText('5').toBeTruthy);
    fireEvent.click(screen.queryByTestId('remove'));
    expect(mockCallback.mock.calls.length).toBe(1);
});

it('減少能力值測試，值為 0 應該失效', () => {
    const mockCallback = jest.fn();
    render(<ValueDashboard abilityValue={0} abilityName="str" onChangeAbility={mockCallback} />);
    expect(screen.queryByText('0').toBeTruthy);
    fireEvent.click(screen.queryByTestId('remove'));
    expect(mockCallback.mock.calls.length).toBe(0);
});
