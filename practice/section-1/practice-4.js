'use strict';

function collectSameElements(collectionA, objectB) {
	return collectionA.filter(elementObject => objectB.value.includes(elementObject.key)).map(elementObject => elementObject.key);
}
