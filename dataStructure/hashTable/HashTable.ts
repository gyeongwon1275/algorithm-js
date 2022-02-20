const List = require("../sequential/LinkedList");
class HashTable {
  private loseloseHash(key: string) {
    // 키를 구성하는 문자의 아스키 코드 정수 값을 합한다.

    let hash = 0;

    for (let index = 0; index < key.length; index++) {
      hash += key.charCodeAt(index);
    }
    return hash % 37;
  }

  private table = [];

  public put(key: string, value) {
    const hash = this.loseloseHash(key);
    const bucket = this.table[hash];
    if (bucket) {
      List.append(bucket, { [key]: value });
      return;
    }
    const root = List.append(null, { [key]: value });
    this.table[hash] = root;
  }

  public get(key: string) {
    const hash = this.loseloseHash(key);
    const value = this.table[hash];

    const values = List.getAllOrNull(value);

    return values.length ? values : undefined;
  }

  public remove(key: string) {
    const hash = this.loseloseHash(key);
    if (hash in this.table) {
      this.table[hash] = undefined;
      return true;
    }

    return false;
  }
}

module.exports = HashTable;
