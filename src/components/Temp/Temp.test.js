import React from 'react';
import { shallow } from 'enzyme';
import Temp, { tfn } from './Temp.jsx';

// After getting sick of fucking with the setup for this I am adding this here
// TODO (tj): Clean me the fuck up before submitting and figure out why this sucks so badly
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter() });


xdescribe('Testing the temp component', () => {
  it('returns 10 when testing direct', () => {
    const wrapper = shallow(<Temp />);
    const instance = wrapper.instance();
    expect(wrapper.state('count')).toBe(0);
    instance.changeCountTo10();
    expect(wrapper.state('count')).toBe(10);
  });
  it ('returns 3 when testing the stupid fn', () => {
    const instance = shallow(<Temp />).instance();
    const ans = tfn();
    expect(ans).toBe(3);
  })
})
