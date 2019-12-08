function random(min, max) {
    const r = Math.random();
    return Math.floor(r * (max - min) + min);
}

function clone(obj) {
	const newObj = {};
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			newObj[prop] = obj[prop];
		}
	}
	return newObj;
}

export default {random, clone};
