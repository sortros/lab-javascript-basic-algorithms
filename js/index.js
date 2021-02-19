// Iteration 1: Names and Input
//1.1 Create a variable `hacker1` with the driver's name.
let hacker1 ="pepe";
//1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is" + " " + hacker1 );
//1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 ="eli";
//1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is" + " " + hacker2 );
// Iteration 2: Conditionals
//2.1. Depending on which name is longer, print:
  //- The driver has the longest name, it has XX characters. or
  //- It seems that the navigator has the longest name, it has XX characters. or
  //- Wow, you both have equally long names, XX characters!.
  if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
    }else if(hacker1.length < hacker2.length) {
      console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
    }else{
      console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
    }
// Iteration 3: Loops
//3.1 Print all the characters of the driver's name, separated by a space and in capitals //i.e. "J O H N"
var i;
for (i = 0; i < hacker1.length; i++) {
  console.log( hacker1[i].toUpperCase().split(""));
}
//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
var p;
for (p= hacker1.length -1; p >= 0; p--) {
  console.log(hacker1[p]);
}
//3.3 Depending on the lexicographic order of the strings, print:
  //- The driver's name goes first.
  //- Yo, the navigator goes first definitely.
  //- What?! You both have the same name?
if ('hacker1'.localeCompare('hacker2')== -1){
  console.log("The driver's name goes first.");
} else if ('hacker1'.localeCompare('hacker2')== 1){
  console.log("Yo, the navigator goes first definitely.");
}else {
  console.log("Yo, the navigator goes first definitely.");
}
//Bonus 1:
//Go to lorem ipsum generator and:
//1. Generate 3 paragraphs. Store the text in a variable type of string.
//2. Make your program count the number of words in the string.
let latin= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis molestie tortor, sed luctus lacus. Nulla ac elit ornare, sodales mauris sit amet, porta lorem. Aliquam sit amet magna auctor, elementum purus sed, dignissim magna. Aenean ut tellus sodales, lobortis arcu nec, venenatis lorem. Cras enim enim, ullamcorper ut enim et, rutrum convallis lacus. Cras eget felis non nulla maximus fermentum sed quis lorem. Etiam mollis libero vel dictum posuere. Mauris id tortor id ligula ullamcorper gravida. Pellentesque et mattis turpis. Cras auctor laoreet ex, eu mollis tortor placerat ac. Quisque facilisis volutpat venenatis. Praesent sit amet aliquet augue. Quisque quis quam eget dolor volutpat imperdiet sed a elit. Aliquam ullamcorper nibh dui, porta accumsan magna mollis non. Aliquam vitae enim id eros mollis iaculis quis in lacus. Vivamus in finibus dolor. Praesent aliquam justo tellus, a porta arcu posuere ac. Curabitur sodales est urna, eget pellentesque justo feugiat a. Duis eu nisi pretium, eleifend metus ut, laoreet augue. Aenean gravida porta eros molestie convallis. Morbi quis dictum justo. Nam dui elit, lobortis quis consectetur in, blandit in mi. Integer vitae ullamcorper dui, ut ultrices mauris. Pellentesque id sem efficitur, fringilla dolor vestibulum, faucibus turpis. Ut leo lectus, interdum at sagittis eu, lobortis vel leo. Vivamus vel semper risus, cursus finibus nulla. Nullam gravida mi nec quam pellentesque gravida."
console.log (latin.length);
//3. Make your program count the number of times the Latin word et appears.
let latinArray = latin.split(" ");
console.log(latinArray)
for (let i=0; i < latinArray.length; i++) {
  let text = "et";
  let count = 0;
  if (latinArray[i] == "et") {
    count++
    console.log(count);
  }
}
marca_de_verificación_blanca
ojos
manos_levantadas







Tomar notas















