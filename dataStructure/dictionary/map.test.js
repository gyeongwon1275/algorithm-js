const Map = require("./Map");

describe("Map", () => {
  describe("set", () => {
    it("원소를 추가한다.", () => {
      const map = new Map();

      map.set("a", 1);

      expect(map.has("a")).toBe(true);
    });
  });

  describe("remove", () => {
    it("원소를 삭제한다.", () => {
      const map = new Map();

      map.set("a", 1);
      map.set("b", 2);

      expect(map.has("a")).toBe(true);
      expect(map.has("b")).toBe(true);

      map.remove("a");

      expect(map.has("a")).toBe(false);
    });
  });

  describe("get", () => {
    it("키에 해당하는 원소의 값을 반환한다.", () => {
      const map = new Map();

      map.set("a", 1);
      map.set("b", 2);

      expect(map.get("a")).toBe(1);
      expect(map.get("b")).toBe(2);
      expect(map.get("c")).toBe(undefined);
    });
  });

  describe("clear", () => {
    it("모든 원소를 삭제한다.", () => {
      const map = new Map();

      map.set("a", 1);
      map.set("b", 2);

      expect(map.get("a")).toBe(1);
      expect(map.get("b")).toBe(2);

      map.clear();

      expect(map.has("a")).toBe(false);
      expect(map.has("b")).toBe(false);
    });
  });

  describe("size", () => {
    it("원소의 갯수를 반환한다.", () => {
      const map = new Map();

      map.set("a", 1);
      map.set("b", 2);
      map.set("c", 3);
      map.set("d", 4);

      expect(map.size()).toBe(4);
    });
  });

  describe("keys", () => {
    it("dictionary 의 모든 키를 배열로 반환한다.", () => {
      const map = new Map();

      map.set("a", 1);
      map.set("b", 2);
      map.set("c", 3);
      map.set("d", 4);

      expect(map.keys()).toEqual(["a", "b", "c", "d"]);
    });
  });

  describe("values", () => {
    it("dictionary 의 모든 값을 배열로 반환한다.", () => {
      const map = new Map();

      map.set("a", 1);
      map.set("b", 2);
      map.set("c", 3);
      map.set("d", 4);

      expect(map.values()).toEqual([1, 2, 3, 4]);
    });
  });
});
