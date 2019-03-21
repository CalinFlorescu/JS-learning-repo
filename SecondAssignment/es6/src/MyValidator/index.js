//import NotUndefinedError from './NotUndefinedError';

class NotUndefinedError extends Error {
    constructor() {
        super();
        throw new Error(`You must not insert undefined values`);
    }
}

class NotNullError extends Error {
    constructor() {
        super();
        throw new Error(`You must not insert null values`);
    }
}
class NotNumber extends Error {
    constructor() {
        super();
        throw new Error(`This is not a number`);
    }
}

class NotGreaterThan extends Error {
    constructor(value) {
        super(value);
        throw new Error(`This is not greather than ${value}`);
    }
}

class NotString extends Error {
    constructor() {
        super();
        console.log(`This is not a string`);
        //throw new Error(`This is not a string`);
    }
}

class NotLessThan extends Error {
    constructor(value) {
        super(value);
        throw new Error(`This is not less than ${value}`);
    }
}
class NotHasLengthLess extends Error {
    constructor(value) {
        super(value);
        throw new Error(`The length of the string is shorter than ${value}`);
    }
}
class NotHasLengthGreater extends Error {
    constructor(value) {
        super(value);
        throw new Error(`The length of the string is greater than ${value}`);
    }
}

class MyValidator extends (NotUndefinedError, NotNullError, NotNumber, NotHasLengthGreater, NotHasLengthLess, NotLessThan, NotGreaterThan, NotString){
    constructor(value){
        if(value === null) {
            throw new NotNullError();
        } else if(value === undefined) {
            throw new NotUndefinedError();
        } else if(value instanceof Function) {
            throw new Error(`You must not insert functions as parameter`);
        } else {
            super(value);
            this.value = value;
        }
    }

    isNumber() {
        if(typeof (this.value) === `number`)
            return this;
        else
            throw new NotNumber();
    }

    isGreaterThan(value) {
        if(this.value > value) {
            return this;
        } else {
            throw new NotGreaterThan(value);
        }
    }

    isLessThan(value) {
        if(this.value < value) {
            return this;
        } else {
            throw new NotLessThan(value);
        }
    }

    isString() {
        if(typeof (this.value) === `string`) {
            return this;
        } else {
            throw new NotString();
        }
    }

    hasLengthGreaterThan(value) {
        if(this.value.length > value) {
            return this;
        } else {
            throw new NotHasLengthGreater(value);
        }
    }

    hasLengthLessThan(value) {
        if(this.value.length > value) {
            return this;
        } else {
            throw new NotHasLengthShorter(value);
        }
    }
}

export default MyValidator;