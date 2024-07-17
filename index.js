function isPalindrome(word) {
  // Write your algorithm here
  wordReversed = word.split("").reverse().join("");
  return word === wordReversed;
}

/* 
  Add your pseudocode here
  input: "a word"
    check if input is a palindrome
      input should be reversed
      check if input = inputReversed
  output: true/false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
