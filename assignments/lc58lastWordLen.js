/**
 * Leet code 58Given a string s consisting of words and spaces, return the length of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 * 
 * Solution;
 * Start from the right (index at s.length - 1)
 * keep checking the char - make sure we find the first non-space char before we start counting
 * or decide to bail out.
 * 
 * for instance "hello world    nice   " <<-- is supposed to return 4 as char count for nice
 * 
 * Hence, we use a boolean to decide if the first non-space char is found or not and only then
 * start counting the characters
 */
var lengthOfLastWord = function(s) {

    let wordCount = 0;
    let rightWordFound = false;
    for (let i = s.length - 1; i >= 0; i--) {

        if (s[i] == ' ' && !rightWordFound) {
            continue;
        } else if (s[i] == ' ' && rightWordFound) {
            break;
        }

        rightWordFound = true;
        wordCount++;
    }
    return wordCount;    
};

let str = "   hello world again    nice day   ";
console.log("Origina string is : " + str);
console.log(lengthOfLastWord(str));

/**
 * The simpler solution would be:
 * Use the language libs to strip trailing spaces
 * then split based on ' ' and pick the last word in the split or
 * tokenized array
 */

function lengthOfLastWordSimpler(str) {
    str = str.trimStart().trimEnd();

    let lastSpaceIndex = str.lastIndexOf(' ');
    let lastWord = str.substring(lastSpaceIndex + 1)
    console.log("Trimmed string : " + str + ", last space index is " + lastSpaceIndex);
    console.log("Final word is : " + lastWord + ", with word len : " + lastWord.length);

    return lastWord;
    
}

lengthOfLastWordSimpler(str);