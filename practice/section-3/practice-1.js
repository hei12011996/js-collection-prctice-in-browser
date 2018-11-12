'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var return_array = [];
	collectionA.forEach(function(element){
		if(objectB.value.includes(element.key)){
			return_array.push({
				key: element.key, count: 1 * (element.count - 1)
			});
		} else {
			return_array.push(element);
		}
	})
	
  // return 'Implement the practice require, and begin changing code in this row';
	return return_array;
}
