'use strict';

function countSameElements(collection) {
	var return_array = [];
	collection.forEach(function(element){
		var found = 0;
		return_array.forEach(function(valueObject){
			if(valueObject.key == element){
				found = 1;
				valueObject.count++;
			}
		})
		if(found == 0){
			return_array.push({
				key: element,
				count: 1
			})
		}
	})
	
  // return 'Implement the practice require, and begin changing code in this row';
  return return_array;
}
