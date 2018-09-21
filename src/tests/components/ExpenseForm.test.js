import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();
})


test('should render expense form with value used for edit', () => {
	const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>);
	expect(wrapper).toMatchSnapshot();
})


test('should render error for invalid submissions', () => {
	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();

	wrapper.find('form').simulate('submit', {
		preventDefault: () => { }
	});

	expect(wrapper.state('error').length).toBeGreaterThan(0);
});


test('should set description on input change', () => {
	const value = "New Descripcion";

	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();

	wrapper.find('input').at(0).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('description')).toBe(value);
});


test('should set amount on input change with valid data' , () => {
	const value = '123.00';

	const wrapper = shallow(<ExpenseForm />);
	expect(wrapper).toMatchSnapshot();

	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});

	expect(wrapper.state('amount')).toBe(value);
	expect(wrapper).toMatchSnapshot();
});

test('shuld not set amount if data is not valid', () => {
	const value = '12.233';
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('input').at(1).simulate('change', {
		target: { value }
	});
	expect(wrapper.state('amount')).toBe('');
});


test('should set note on textarea change', () => {
	const value = "New note";
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('textarea').simulate('change', {
		target: { value }
	});
	expect(wrapper.state('note')).toBe(value);
});

test('should submit form with data', () => {
	const onSubmitSpy = jest.fn();
	const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

	wrapper.find('form').simulate('submit', {
		preventDefault: () => {}
	});

	expect(wrapper.state('error')).toBe('');
	expect(onSubmitSpy).toHaveBeenLastCalledWith({
		description: expenses[0].description,
		amount: expenses[0].amount,
		note: expenses[0].note,
		createdAt: expenses[0].createdAt
	})
});

test('should set createdAt when onDateChange is triggered', () => {
	const now = moment();
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onDateChange')(now);
	expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
	const focused = true;
	const wrapper = shallow(<ExpenseForm />);
	wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
	expect(wrapper.state('calendarFocused')).toEqual(focused)
})