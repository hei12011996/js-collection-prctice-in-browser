'use strict';

function collectSameElements(collectionA, objectB) {
	var return_array = [];
	collectionA.forEach(function(element){
		if(objectB.value.includes(element)){
			return_array.push(element);
		}
	})
  // return 'Implement the practice require, and begin changing code in this row';
	return return_array;
}
