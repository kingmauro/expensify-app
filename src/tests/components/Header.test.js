import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header', () => {
	const wrapper = shallow(<Header startLogout={() => { }} />);
	expect(wrapper).toMatchSnapshot();
	// expect(wrapper.find('h1').text()).toBe('Expensify');
	// const renderer = new ShallowRenderer();
	// renderer.render(<Header />);
	// expect(renderer.getRenderOutput()).toMatchSnapshot();
})