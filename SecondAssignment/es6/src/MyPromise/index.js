class MyPromise extends Promise{
    constructor(executor) {
        super(executor);
    }

    then(onfulfilled, onrejected) {
        console.log(`This is a new then`);
        const value = super.then(onfulfilled, onrejected);
        return value;
    }

    catch(onrejected) {
        console.log(`This is a new catch`);
        return returnValue = super.catch(onrejected);
    }

    static all = (arr) => {
        console.log(arr.forEach(console.log))
    }
}

export default MyPromise;


