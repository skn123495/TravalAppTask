import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import Home from '@app/screens/Home/Home';


// Mocking axios get method
jest.mock('axios');

describe('Home Component', () => {
  it('fetches flights successfully', async () => {
    const mockedData = [{ id: 1, airline: 'Test Airline', price: 100 }];
    axios.get.mockResolvedValueOnce({ data: mockedData });

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Test Airline')).toBeTruthy();
    });
  });

  it('filters flights by airline', async () => {
    const mockedData = [
      { id: 1, airline: 'Test Airline', price: 100 },
      { id: 2, airline: 'Another Airline', price: 200 },
    ];
    axios.get.mockResolvedValueOnce({ data: mockedData });

    const { getByText, getByTestId } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Test Airline')).toBeTruthy();
    });

    fireEvent.press(getByText('Sort Flights'));

    fireEvent.press(getByTestId('filter-airline-Test Airline'));

    await waitFor(() => {
      expect(getByText('Test Airline')).toBeTruthy();
      expect(getByText('Another Airline')).not.toBeTruthy();
    });
  });

  it('sorts flights by price', async () => {
    const mockedData = [
      { id: 1, airline: 'Test Airline', price: 200 },
      { id: 2, airline: 'Another Airline', price: 100 },
    ];
    axios.get.mockResolvedValueOnce({ data: mockedData });

    const { getByText } = render(<Home />);

    await waitFor(() => {
      expect(getByText('Test Airline')).toBeTruthy();
    });

    fireEvent.press(getByText('Sort Price'));

    await waitFor(() => {
      expect(getByText('Another Airline')).toBeTruthy();
      expect(getByText('Test Airline')).not.toBeTruthy();
    });
  });
});
