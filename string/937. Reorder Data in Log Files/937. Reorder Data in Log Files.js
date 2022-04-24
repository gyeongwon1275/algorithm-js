/**
 * @param {string[]} logs
 * @return {string[]}
 */

const reorderLogFiles = function (logs) {
  const isLetter = (log) => /[a-z]/.test(log);

  return logs.sort((log1, log2) => {
    const log1Identifier = log1.split(" ")[0];

    const log1Text = log1.replace(log1Identifier, "");

    const log2Identifier = log2.split(" ")[0];
    const log2Text = log2.replace(log2Identifier, "");

    if (isLetter(log1Text) && isLetter(log2Text)) {
      if (log1Text > log2Text) return 1;
      if (log1Text < log2Text) return -1;

      if (log1Identifier > log2Identifier) return 1;
      if (log1Identifier < log2Identifier) return -1;

      return 0;
    } else if (isLetter(log1Text) || isLetter(log2Text)) {
      if (isLetter(log1Text)) {
        return -1;
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  });
};

module.exports = reorderLogFiles;
