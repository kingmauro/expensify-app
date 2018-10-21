import moment from 'moment';
// Get visible Incomes

export default (incomes, { text, sortBy, startDate, endDate }) => {

	return incomes.filter( (income) => {

		const createdAtMoment = moment(income.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true ;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true ;
		const textMatch = text === "" ||  income.description.toLowerCase().includes(text.toLowerCase());


		return textMatch && startDateMatch && endDateMatch;

	}).sort( (a, b) => {
		if (sortBy === 'date') {
			return a.createdAt < b.createdAt ? 1 : -1;
		} else if (sortBy === 'amount') {
			return a.amount < b.amount ? 1 : -1;
		}
	})

}