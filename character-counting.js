function unique_char(str1) {
  var str=str1;
  var uniql="";
  for (var x=0; x <str.length; x++) {
    if(uniql.indexOf(str.charAt(x))==-1)
    {
      uniql += str[x];
    }
  }
  return uniql;
}
console.log(unique_char("lighthouse in the house"));

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
