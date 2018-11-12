'use strict';

function collectSameElements(collectionA, objectB) {
	var return_array = [];
	collectionA.forEach(function(elementObject){
		if(objectB.value.includes(elementObject.key)){
			return_array.push(elementObject.key);
		}
	})
  // return 'Implement the practice require, and begin changing code in this row';
	return return_array;
}
