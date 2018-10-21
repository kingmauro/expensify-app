import incomes from '../tests/fixtures/incomes';

export default (incomes) => {

	if(incomes != 0){
		const subTotal = [];
		incomes.map( (income) => {
			subTotal.push(income.amount);
		});
		const total = subTotal.reduce((sum, value) => {
			return sum + value;
		});
		return total;
	} else {
		return 0;
	}

}

