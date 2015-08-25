function dataType(x) {
    switch(typeof x){
        case 'string':
            return 'string';
        case 'boolean':
            return 'boolean';
        case 'undefined':
            return 'undefined';
        case 'number':
            if (Math.round(x) === x ){
                return 'integer';
            }
            return 'float';
        case 'object':
            if (x instanceof Object){
                return 'object';
            }
            return 'null';
        default:
            return 'not recognized';
    }
}


console.log(dataType(8)); //integer
console.log(dataType(3.01)); //float
console.log(dataType("wfsfd")); //string
console.log(dataType(null)); // null
console.log(dataType({})); // object
console.log(dataType(true)); // boolean
