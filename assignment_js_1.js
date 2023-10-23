function reverseWords(sentence) {
    var wordsArray = sentence.split(' ');
    var reversedWordsArray = wordsArray.map(function(word) {
      return reverseWord(word);
    });
    var reversedSentence = reversedWordsArray.join(' ');
    return reversedSentence;
  }
  
  function reverseWord(word) {
    var charactersArray = word.split('');
    var reversedCharactersArray = charactersArray.reverse();
    var reversedWord = reversedCharactersArray.join('');
    return reversedWord;
  }
  
  // Example usage
  var inputSentence = "This is a sanket sunny day";
  var reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence);
  