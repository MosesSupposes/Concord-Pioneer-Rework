/**
 * A collection of utility functions 
 */


// helper for mutating the allAds state property
export function determineAdCategory(adType) {
    switch(adType) {
        case 'small square':
            return 'small'
        default: 
            return 'small'
    }
}

// another helper for mutating the allAds state property
export function formatAdType(adType) {
    return camelCase(adType.concat('s'))

}

// camelCases a string ('some word' --> 'someWord')
export function camelCase(str) {
    return str.split(' ')
    .map((word, i) => {
        const firstLetter = word[0]
        const firstWord = i === 0
        return (!firstWord) ? word.replace(firstLetter, firstLetter.toUpperCase()) : word
    })
    .reduce((acc, cur) => ( (cur === ' ') ? acc : acc.concat(cur)), '')
}

// shim for native Object.fromEntries()
export function objectFromEntries(iterable) {
    return Object.assign({}, ...iterable.map( ([k, v]) => ({ [k]: v }) ))
}

export function getUniqueValuesReduce(arr) {   // this version is clearer than the filter alternative
    return arr.reduce( (acc, cur) => !( acc.includes(cur) ) ? acc.concat(cur) : acc, [])
}


export function mapObj(mapperFn,o) {
	var newObj = {};
	var keys = Object.keys(o);
	for (let key of keys) {
		newObj[key] = mapperFn( o[key] );
	}
	return newObj;
}

export function filterObj(predicateFn,o) {
	const newObj = {}
	Object.keys(o)
	.filter(key => predicateFn(o[key]))
	.forEach(key => newObj[key] = o[key])
	return newObj
}

export function reduceObj(reducerFn,initialValue,o) {
	return Object.values(o).reduce(reducerFn, initialValue)
}

export function constant(val) {
    return function() {
        return val
    }
}

export function curry(fn,arity = fn.length) {
	return (function nextCurried(prevArgs){
		return function curried(nextArg){
			var args = prevArgs.concat([nextArg]);
			if (args.length >= arity) {
				return fn(...args);
			}
			else {
				return nextCurried(args);
			}
		};
	})([]);
}

export function compose(...fns) {
	return function composed(arg) {
		return fns.reduceRight((result,fn) => fn(result),arg);
	};
}

export function pipe(...fns) {
	return compose(...fns.reverse());
}

export function binary(fn) {
	return function two(arg1,arg2){
		return fn(arg1,arg2);
	};
}

export function reduce(arr, reducerFn, initialValue) {
    var accumulator = initialValue === undefined ? undefined : initialValue
    for (let i = 0; i < arr.length; i++) {
        if (accumulator !== undefined) 
            accumulator = reducerFn(accumulator, arr[i], i, arr)
        else 
            accumulator = arr[i]
    }
    return accumulator
}

export function reduceRight(arr, reducerFn, initialValue) {
    return reduce(arr.reverse(), reducerFn, initialValue)
}



