function findLongestWord(str) {
    let longestWord = str.split(' ').reduce(function (longest, currentWord) {
        return currentWord.length > longest.length ? currentWord : longest;
    }, "");
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));