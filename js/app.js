const text_input = document.querySelector("textarea");
const word = document.getElementById("wordCount");
const character = document.getElementById("characterCount");
const sentence = document.getElementById("sentencesCount");
const paragraph = document.getElementById("paragraphCount");
const reading = document.getElementById("readingTime");

text_input.addEventListener("input", () => {
  let text_value = text_input.value; //returns string

  const getCharacterCount = () => {
    return text_value.length;
  };

  const getWordCount = () => {
    let numberOfWords = text_value.split(" ").filter((item) => {
      return item != "";
    });
    return numberOfWords.length;
  };

  const getSentenceCount = () => {
    let text = text_value + " ";
    let count = text.split(". ").length - 1;
    return count;
  };

  const getParagraphCount = () => {
    let paragraph_count = text_value.replace(/\n$/gm, "").split(/\n/).length;
    return paragraph_count;
  };

  const setCount = () => {
    word.textContent = getWordCount();
    character.textContent = getCharacterCount();
    sentence.textContent = getSentenceCount();
    paragraph.textContent = getParagraphCount();
  };

  setCount();
});
