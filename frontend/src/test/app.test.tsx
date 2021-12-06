import React from 'react';
import {App} from '../app';
import { configure ,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('App UI test',()=>{

  test('test app snaphot', () => {
    const component = shallow(<App/>);
    expect(component).toMatchSnapshot();
  });

  test('test main app elements', () => {
    const component = shallow(<App/>);
    expect(component.find('.page_layout')).toHaveLength(1)
  });
})