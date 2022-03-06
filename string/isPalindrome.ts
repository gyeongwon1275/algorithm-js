/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s: string) {
  /* 
  0-9 asciiCode : 48-57
  A-Z asciiCode : 65-90
  */
  const isAlphanumericCharacters = (asciiCode) => {
    return (
      (asciiCode >= 48 && asciiCode <= 57) ||
      (asciiCode >= 65 && asciiCode <= 90)
    );
  };

  const alphanumericCharacters = s
    .toUpperCase()
    .split("")
    .filter((char) => isAlphanumericCharacters(char.charCodeAt(0)));

  const lastIndex = alphanumericCharacters.length - 1;

  for (let i = 0; i < alphanumericCharacters.length; i++) {
    if (alphanumericCharacters[i] !== alphanumericCharacters[lastIndex - i]) {
      return false;
    }
  }

  return true;
};

module.exports = isPalindrome;
