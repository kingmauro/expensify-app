import expenses from '../fixtures/expenses';
import getExpensesTotal from '../../selectors/expensesTotal';

test('should return 0 if no expenses',() => {
	const res = getExpensesTotal([]);
	expect(res).toBe(0);
});

test('should correctyl add up a single expense',() => {
	const res = getExpensesTotal([expenses[0]]);
	expect(res).toBe(100);
});

test('shoud correctyle add up multiple expenses',() => {
	const res = getExpensesTotal(expenses);
	expect(res).toBe(600);
});