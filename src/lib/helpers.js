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

const helpers = {
    determineAdCategory,
    formatAdType,
    camelCase,
    objectFromEntries
}


export default helpers