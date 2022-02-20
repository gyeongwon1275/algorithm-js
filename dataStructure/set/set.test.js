const Set = require("./ObjectSet");

describe("Set", () => {
  describe("add", () => {
    it("원소를 추가한다.", () => {
      const set = new Set();
      set.add("a");
      set.add("b");

      expect(set.has("a")).toBe(true);
      expect(set.has("b")).toBe(true);
    });
  });

  describe("remove", () => {
    it("원소를 삭제한다.", () => {
      const set = new Set();
      set.add("a");
      set.add("b");
      set.remove("b");

      expect(set.has("a")).toBe(true);
      expect(set.has("b")).toBe(false);
    });
  });

  describe("clear", () => {
    it("모든 원소를 삭제한다.", () => {
      const set = new Set();
      set.add("a");
      set.add("b");
      set.clear();

      expect(set.has("a")).toBe(false);
      expect(set.has("b")).toBe(false);
    });
  });

  describe("size", () => {
    it("원소의 갯수를 반환한다.", () => {
      const set = new Set();
      set.add("a");
      set.add("b");

      expect(set.size()).toBe(2);
    });
  });

  describe("values", () => {
    it("집합의 모든 원소를 배열 형태로 반환한다.", () => {
      const set = new Set();
      set.add("a");
      set.add("b");

      expect(set.values()).toEqual(["a", "b"]);
    });
  });

  describe("union", () => {
    it("두 집합 중 어느 한쪽이라도 포함된 원소로 구성된 집합을 구한다.", () => {
      const Aset = new Set();
      Aset.add("a");
      Aset.add("b");
      Aset.add("c");
      Aset.add("d");

      const Bset = new Set();
      Bset.add("c");
      Bset.add("d");
      Bset.add("e");
      Bset.add("f");

      const Cset = Aset.union(Bset);

      expect(Cset.values()).toEqual(["a", "b", "c", "d", "e", "f"]);
    });
  });

  describe("intersection", () => {
    it("두 집합 모두 포함되어 있는 원소로 구성된 집합을 구한다.", () => {
      const Aset = new Set();
      Aset.add("a");
      Aset.add("b");
      Aset.add("c");
      Aset.add("d");

      const Bset = new Set();
      Bset.add("c");
      Bset.add("d");
      Bset.add("e");
      Bset.add("f");

      const Cset = Aset.intersection(Bset);

      expect(Cset.values()).toEqual(["c", "d"]);
    });
  });

  describe("difference", () => {
    it("method 를 호출한 집합에는 있지만 인자로 받는 집합에는 없는 원소로 구성된 집합을 반환합니다.", () => {
      const Aset = new Set();
      Aset.add("a");
      Aset.add("b");
      Aset.add("c");
      Aset.add("d");

      const Bset = new Set();
      Bset.add("c");
      Bset.add("d");
      Bset.add("e");
      Bset.add("f");

      const Cset = Aset.difference(Bset);

      expect(Cset.values()).toEqual(["a", "b"]);
    });
  });

  describe("isSubsetOf", () => {
    it("어떤 집합이 다른 집합의 일부인지 확인합니다. ", () => {
      const Aset = new Set();
      Aset.add("a");
      Aset.add("b");

      const Bset = new Set();
      Bset.add("a");
      Bset.add("b");
      Bset.add("c");
      Bset.add("d");

      const Cset = new Set();
      Cset.add("1");
      Cset.add("2");
      Cset.add("3");

      expect(Aset.isSubsetOf(Bset)).toBe(true);
      expect(Aset.isSubsetOf(Cset)).toBe(false);
      expect(Bset.isSubsetOf(Aset)).toBe(false);
      expect(Cset.isSubsetOf(Bset)).toBe(false);
    });
  });
});
