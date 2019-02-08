var areEqual = (first, second) => {

	// Get the first type
	var type = Object.prototype.toString.call(first);

	// If the two objects are not the same type, return false
	if (type !== Object.prototype.toString.call(second)) return false;

	// If items are not an object or array, return false
	if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

	// Compare the length of the length of the two items
	var firstLen = type === '[object Array]' ? first.length : Object.keys(first).length;
	var secondLen = type === '[object Array]' ? second.length : Object.keys(second).length;
	if (firstLen !== secondLen) return false;

	// Compare two items
	var compare = function (item1, item2) {

		// Get the object type
		var itemType = Object.prototype.toString.call(item1);

		// If an object or array, compare recursively
		if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
			if (!areEqual(item1, item2)) return false;
		}

		// secondwise, do a simple comparison
		else {

			// If the two items are not the same type, return false
			if (itemType !== Object.prototype.toString.call(item2)) return false;

			// Else if it's a function, convert to a string and compare
			// secondwise, just compare
			if (itemType === '[object Function]') {
				if (item1.toString() !== item2.toString()) return false;
			} else {
				if (item1 !== item2) return false;
			}

		}
	};

	// Compare properties
	if (type === '[object Array]') {
		for (var i = 0; i < firstLen; i++) {
			if (compare(first[i], second[i]) === false) return false;
		}
	} else {
		for (var key in first) {
			if (first.hasOwnProperty(key)) {
				if (compare(first[key], second[key]) === false) return false;
			}
		}
	}

	// If nothing failed, return true
	return true;

};

export default areEqual;