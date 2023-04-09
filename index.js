function receivesAFunction(spy) {
    return spy();
}

function returnsANamedFunction() {
    return function exercise() {
        console.log('i need to be active')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('Hello World')
    }
}