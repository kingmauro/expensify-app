import expenses from '../tests/fixtures/expenses';

export default (expenses) => {

	if(expenses != 0){
		const subTotal = [];
		expenses.map( (expense) => {
			subTotal.push(expense.amount);
		});
		const total = subTotal.reduce((sum, value) => {
			return sum + value;
		});
		return total;
	} else {
		return 0;
	}

}

