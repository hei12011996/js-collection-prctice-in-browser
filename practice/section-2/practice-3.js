'use strict';

function countSameElements(collection) {
	var return_array = [];
	collection.forEach(function(element){
		var found = 0;
		var parsedKeyAndValue  = parseKeyAndValue(element);
		return_array.forEach(function(valueObject){
			if(valueObject.name == parsedKeyAndValue.key){
				found = 1;
				valueObject.summary += parsedKeyAndValue.value;
			}
		})
		if(found == 0){
			return_array.push({
				name: parsedKeyAndValue.key,
				summary: parsedKeyAndValue.value
			})
		}
	})
	
  // return 'Implement the practice require, and begin changing code in this row';
  return return_array;
}

function parseKeyAndValue(element){
	if (element.indexOf('-') != -1) {
		var breakOffValue = element.substring(element.indexOf('-') + 1);
		return {key: element.substring(0, element.indexOf('-')), value: Number(breakOffValue)};
	} else if (element.indexOf(':') != -1) {
		var breakOffValue = element.substring(element.indexOf(':') + 1);
		return {key: element.substring(0, element.indexOf(':')), value: Number(breakOffValue)};
	} else if ((element.indexOf('[') != -1) && (element.indexOf(']') != -1)) {
		var breakOffValue = element.substring(element.indexOf('[') + 1, element.indexOf(']'));
		return {key :element.substring(0, element.indexOf('[')), value: Number(breakOffValue)};
	} else {
		return {key: element, value: 1};
	}
}