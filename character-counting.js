function countLetters(count){
 var object = {}

for (const x of count) {

if (x === " ") {

 } else if (object[x] === undefined) {
   object[x] = 1
 } else {
   object[x] ++
 }

}
return object
}

console.log(countLetters("This is a test string"))

// -countLetters return unique characters that exist in a
// string that is passed into a function

// -instances each letter was found in string
// -returns object that represents stats for sentence,
// all chars found in string, and their counts



// countLetters("lighthouse in the house")
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }
