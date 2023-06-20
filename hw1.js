function getPasswordChecker(password) {
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    }
}

function getPasswordChecker(password) {
    return function(guess) {
        if (password === guess) {
            return true;
        }
        return false;
    }
}

const check = getPasswordChecker('P@ssw0rd');

console.log(check('P@ssw1rd'));
console.log(check('P@ssw0rd'));
