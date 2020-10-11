import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import selectEvent from 'react-select-event';
import { shallow } from 'enzyme';
import { pizzaIngredients } from '../../../data/mock';
import Make from './';


const mockData = {
  pizzaName: 'Pepperoni',
  pizzaIngredients: pizzaIngredients[0],
};
afterEach(cleanup);

test('<Make/>  renders successfully', () => {
  const component = shallow(<Make/>);
  expect(component).toMatchSnapshot();
});

test('<Make/> renders page title', () => {
  const { getByText } = render(<Make/>);
  const homeTitle = getByText(/Make Pizza/i);
  expect(homeTitle).toBeInTheDocument();
});

test('<Make/> should watch input correctly', () => {
  const { getByTestId, getByText, getByLabelText } = render(<Make/>);

  const nameInput = getByTestId('name');

  userEvent.type(nameInput, mockData.pizzaName);
  expect(nameInput).toHaveValue(mockData.pizzaName);

  selectEvent.openMenu(getByLabelText('Ingredients'));
  expect(getByText(mockData.pizzaIngredients.name)).toBeInTheDocument();

});

