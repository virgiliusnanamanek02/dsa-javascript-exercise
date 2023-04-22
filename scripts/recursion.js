const sumOfArrays = array => {
	let total = 0;
	for (const element of array) {
		total += Array.isArray(element) ? sumOfArrays(element) : element;
	}

	return total;
};

module.exports = sumOfArrays;
