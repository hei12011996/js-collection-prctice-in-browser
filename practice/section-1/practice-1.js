'use strict';

function collectSameElements(collectionA, collectionB) {
	var return_array = [];
	collectionA.forEach(function(element){
		if(collectionB.includes(element)){
			return_array.push(element);
		}
	});
  //return 'Implement the practice require, and begin changing code in this row';
	return return_array;
}
