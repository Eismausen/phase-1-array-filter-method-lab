// Code your solution here
function findMatching(arrDriverNames, string) {
    function filterFunc(element) {
        return (element.toLowerCase() === string.toLowerCase())
    }

    let returnArr = arrDriverNames.filter(filterFunc);
    return returnArr;
}

function fuzzyMatch(arrDriverNames, string) {
    function partialMatch(element) {
        return (element.slice(0, string.length) === string);
    }
    let returnArr = arrDriverNames.filter(partialMatch);
    return returnArr;
}

function matchName(arrDrivers, string) {
    function nameFilter(element) {
        return (element.name.toLowerCase() === string.toLowerCase())
    }

    let returnArr = arrDrivers.filter(nameFilter);
    return returnArr;
}