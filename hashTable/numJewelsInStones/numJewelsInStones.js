const numJewelsInStones = function (jewels, stones) {
  const lookupTable = new Map();

  jewels.split("").forEach((char) => {
    lookupTable.set(char, 0);
  });

  stones.split("").forEach((char) => {
    if (lookupTable.has(char)) {
      lookupTable.set(char, lookupTable.get(char) + 1);
    }
  });

  return Array.from(lookupTable.values()).reduce((prev, cur) => prev + cur);
};

module.exports = numJewelsInStones;
