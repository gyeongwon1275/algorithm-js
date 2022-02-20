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
    this.table[this.loseloseHash(key)] = value;
  }

  public get(key: string) {
    return this.table[this.loseloseHash(key)];
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
