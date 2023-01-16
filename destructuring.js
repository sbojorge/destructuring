/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: 'developper',
    jill: 'designer',
    alicia: 'accountant'
};
let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecundary] = languages;
console.log(johnNative, johnSecundary);
let [, ,maryNative, marySecundary] = languages;
console.log(maryNative, marySecundary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'spanish',
    fourthLanguage: 'german'
}
let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ['apple','orange','banana','peach','cherry'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite, secondFavorite,others);

let favoriteFoods = {
    brian: 'pizza',
    anna: 'burger',
    sarah: 'sushi',
    lili: 'biscuits'
};
let {sarah, lili, ...rest} = favoriteFoods;
console.log(sarah, lili, rest);


