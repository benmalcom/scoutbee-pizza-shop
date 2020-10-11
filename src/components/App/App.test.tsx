import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
test('<App/> component renders successfully', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
