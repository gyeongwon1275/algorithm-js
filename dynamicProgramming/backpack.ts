type Item = {
  price: number;
  space: number;
};

function getMaxPriceInbackpack(items: Item[], backpackSpace: number): number {
  const table = [];

  for (let i = 0; i < items.length; i++) {
    table.push(new Array(backpackSpace).map(() => 0));
  }

  for (let i = 0; i < table.length; i++) {
    const item = items[i];
    for (let space = 0; space < backpackSpace; space++) {
      const currentSpace = space + 1;
      const currentItemPrice = currentSpace >= item.space ? item.price : 0;
      const remainingSpace = currentSpace - item.space;
      const currentMax =
        i > 0 && remainingSpace >= 1
          ? currentItemPrice + table[i - 1][remainingSpace - 1]
          : currentItemPrice;

      const beforeMax = i > 0 ? table[i - 1][space] : 0;

      table[i][space] = beforeMax > currentMax ? beforeMax : currentMax;
    }
  }

  return table[items.length - 1][backpackSpace - 1];
}

module.exports = {
  getMaxPriceInbackpack,
};
