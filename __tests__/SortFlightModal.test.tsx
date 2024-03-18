import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SortFlightModal from '@app/screens/Home/SortFlightModal';


describe('SortFlightModal Component', () => {
  const flights = [
    { id: 1, airline: 'Airline 1' },
    { id: 2, airline: 'Airline 2' },
  ];

  it('renders modal with flight items correctly', () => {
    const { getByText } = render(
      <SortFlightModal
        flights={flights}
        onAirinePress={() => {}}
        setIsModalVisible={() => {}}
      />
    );

    expect(getByText('Airline 1')).toBeTruthy();
    expect(getByText('Airline 2')).toBeTruthy();
  });

  it('triggers onAirinePress callback with correct airline name when flight item is pressed', () => {
    const mockOnAirinePress = jest.fn();

    const { getByText } = render(
      <SortFlightModal
        flights={flights}
        onAirinePress={mockOnAirinePress}
        setIsModalVisible={() => {}}
      />
    );

    fireEvent.press(getByText('Airline 1'));
    expect(mockOnAirinePress).toHaveBeenCalledWith('Airline 1');

    fireEvent.press(getByText('Airline 2'));
    expect(mockOnAirinePress).toHaveBeenCalledWith('Airline 2');
  });
});
