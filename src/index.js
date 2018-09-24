// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};
const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
            enumerable: false,
            get: ()=>property,
            set: (value)=> {property = value}                
      });
      return property;
};
 

const createProtoMagicObject = () => {
    let magicObject = () =>{};
    magicObject.prototype = Object.__proto__;
    return magicObject;
};

var counter = 0;
const incrementor = () => {
    counter++;      
    incrementor.valueOf =()=>{return counter}
    return incrementor;
};

var asyncCounter = 0;
const asyncIncrementor = () => {
    asyncCounter++;      
    incrementor.valueOf =()=>{return asyncCounter}
    return incrementor;
};
const createIncrementer = function*() {
    let i = 0;
    while (true){
        i++;
        yield i;
    }        
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (value) => {
    var promise = new Promise(resolve => {
        setTimeout(() => resolve(value), 1234);
    })
    return promise;
};

const getDeepPropertiesCount = (object) => {
    var count = 0;
    countProperties(object);    
    function countProperties(obj){
        for(let i = 0; i < Object.keys(obj).length; i++){
            count++;
            var key = Object.keys(obj)[i]; 
            if(Object.keys(obj[key]).length > 0){
                countProperties(obj[key])
            }
        }
    }
    return count;
};
const createSerializedObject = () => {
    return null;
};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((a, b) => a.__proto__ > b.__proto__ ? true : false);
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