// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => propertyName;
const createNotEnumerableProperty = (propertyName) => Symbol(propertyName);
const createProtoMagicObject = () => {
	return function() {};
};

let i = 0;
const incrementor = () => {
	i++;
	return incrementor;
};
incrementor.valueOf = function() {
	return i;
}


let param = 0;
const asyncIncrementor = () => {
	return new Promise((resolve, reject) => {
	 resolve(++param);
});
};

const createIncrementer = function*() {
	let index = 0;
	while (index != 'undefined') yield ++index;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
				resolve(param);
		}, 1000);
});
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (array) => {
	array.sort((a, b) => a.__proto__ - b.__proto__);
	return array;
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;