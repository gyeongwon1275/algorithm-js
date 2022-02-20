class OMap {
  private items = {};

  public has(key) {
    return key in this.items;
  }

  public set(key, value) {
    this.items[key] = value;

    return true;
  }

  public remove(key) {
    if (this.has(key)) {
      delete this.items[key];
      return true;
    }

    return false;
  }

  public get(key) {
    return this.has(key) ? this.items[key] : undefined;
  }

  public clear() {
    this.items = {};
  }

  public size() {
    return Object.keys(this.items).length;
  }

  public keys() {
    return Object.keys(this.items);
  }
  public values() {
    const result = [];

    for (const item of Object.values(this.items)) {
      result.push(item);
    }

    return result;
  }
}

module.exports = OMap;
