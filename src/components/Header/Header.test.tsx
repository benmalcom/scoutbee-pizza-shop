import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import Header from './';

test('<Header/> component renders successfully', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});


test('<Header/> renders header links', () => {
  const { getByText } = render(<Router><Header /></Router>);

  const homeLinkElement = getByText(/home/i);
  expect(homeLinkElement).toBeInTheDocument();

  const makePizzaLinkElement = getByText(/make pizza/i);
  expect(makePizzaLinkElement).toBeInTheDocument();
});
