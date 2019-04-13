// Prototype Inheritance
// Exercise - Extend the functionality of a built in object

// #1 - Date object => to have new method .lastYear
// wich shows you last year 'YYYY' format
Date.prototype.lastYear = function() {
	let fullYear = this.getFullYear();
	if(fullYear > 0) {
		return --fullYear;
	} else {
		new Date().getFullYear();
	}
};

var dt = new Date('04-07-2019 19:53');
dt.lastYear();

// #Bonus - Modify .map to print 'map'
// at the end of each item
// console.log([1,2,3].map());
// 1map, 2map, 3map
Array.prototype.map = function() {
	let arr = [];
	for(let i =0; i < this.length; i++) {
		arr.push((this[i] + 'map'));
	}
	return arr;
}