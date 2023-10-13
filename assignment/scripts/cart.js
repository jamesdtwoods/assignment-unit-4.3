console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

// function addItem(item) {
//     console.log('in add item:', item);
//     basket.push(item);
//     return true;
// }

function addItem(item) {
    console.log('in add item:', item);
    if (!isFull()) {
        basket.push(item);
        return true;
    }
    else {
        return false;
    }
}

console.log(`Basket is ${basket}`);
console.log('running addItem:', addItem('item1'));
console.log('running addItem:', addItem('item2'));
console.log('running addItem:', addItem('item3'));
console.log('running addItem:', addItem('item4'));
console.log(`Basket is now ${basket}`);


function listItems() {
    console.log('in listItems');
    for (let i = 0; i < basket.length; i++){
        console.log('in array loop:', basket[i]);
    }
}

console.log('running listItems:', listItems());

function empty() {
    console.log('in empty')
    for (let i = basket.length; i = basket.length; i--) {
        console.log('in empty loop:', basket[i]);
        basket.pop();
    }
}

console.log(`Basket is ${basket}`);
console.log('running empty:', empty());
console.log(`Basket is now ${basket}`);

const maxItems = 5;

function isFull() {
    if (basket.length < 5 && basket.length >= 0){
        return false;
    }
    else {
        return true;
    }
}

console.log('is the basket full?', isFull());










// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
