import React from 'react';
import { render } from '@testing-library/react-native';
import ListItems from '@app/screens/Home/ListItems';

describe('ListItems Component', () => {
  it('renders list items correctly', () => {
    const flights = [
      { id: 1, airline: 'Airline 1', price: 100 },
      { id: 2, airline: 'Airline 2', price: 200 },
    ];

    const { getByText } = render(<ListItems flights={flights} />);

    expect(getByText('Delhi')).toBeTruthy();
    expect(getByText('Mumbai')).toBeTruthy();
    expect(getByText('Airline 1')).toBeTruthy();
    expect(getByText('Airline 2')).toBeTruthy();
    expect(getByText('₹ 100')).toBeTruthy();
    expect(getByText('₹ 200')).toBeTruthy();
  });

  it('displays "No Data Found" message when list is empty', () => {
    const flights = [];

    const { getByText } = render(<ListItems flights={flights} />);

    expect(getByText('No Data Found in the list')).toBeTruthy();
  });
});
