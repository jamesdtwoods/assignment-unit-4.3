console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
    console.log('in add item:', item);
    basket.push(item);
    return true;
}

console.log('running addItem:', addItem('item1'));
console.log('running addItem:', addItem('item2'));
console.log('running addItem:', addItem('item3'));
console.log('running addItem:', addItem('item4'));


function listItems() {
    console.log('in listItems');
    for (let i = 0; i < basket.length; i++){
        console.log('in array loop:', basket[i]);
    }
}

console.log('running listItems:', listItems());

function empty() {
    console.log('in empty')
    for (let i = 0; i < basket.length; i++) {
        console.log('in empty loop:', basket[i]);
        basket.pop();
    }
}

console.log('running empty:', empty());

console.log(basket);

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
