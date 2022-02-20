const HashTable = require("./HashTable");

describe("HashTable", () => {
  describe("put", () => {
    it("데이터를 삽입합니다.", () => {
      const hashTable = new HashTable();

      hashTable.put("shit", 1);
      hashTable.put("tish", 2);

      expect(hashTable.get("shit")).toEqual([{ shit: 1 }, { tish: 2 }]);
    });
  });

  describe("remove", () => {
    it("데이터를 삭제합니다.", () => {
      const hashTable = new HashTable();

      hashTable.put("shit", 1);

      expect(hashTable.get("shit")).toEqual([{ shit: 1 }]);

      hashTable.remove("shit");
      expect(hashTable.get("shit")).toBe(undefined);
    });
  });
});
