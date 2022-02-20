class ObjectSet {
  private items = {};

  public add(value: string) {
    if (this.has(value)) {
      return false;
    }

    this.items[value] = value;
    return true;
  }

  public has(value: string) {
    return this.items.hasOwnProperty(value);
  }

  public remove(value) {
    if (this.has(value)) {
      delete this.items[value];
      return true;
    }

    return false;
  }

  public clear() {
    this.items = {};
    return true;
  }

  public size() {
    return Object.keys(this.items).length;
  }

  public values() {
    const result = [];

    for (const item in this.items) {
      result.push(item);
    }

    return result;
  }

  public union(otherSet: ObjectSet) {
    const unionSet = new ObjectSet();

    for (const item of this.values()) {
      unionSet.add(item);
    }

    for (const item of otherSet.values()) {
      if (unionSet.has(item)) {
        continue;
      }

      unionSet.add(item);
    }

    return unionSet;
  }

  public intersection(otherSet: ObjectSet) {
    const intersectionSet = new ObjectSet();

    for (const item of this.values()) {
      if (otherSet.has(item)) {
        intersectionSet.add(item);
      }
    }

    return intersectionSet;
  }

  public difference(otherSet: ObjectSet) {
    const differenceSet = new ObjectSet();

    for (const item of this.values()) {
      if (otherSet.has(item) === false) {
        differenceSet.add(item);
      }
    }

    return differenceSet;
  }

  public isSubsetOf(otherSet: ObjectSet) {
    for (const item of this.values()) {
      if (otherSet.has(item) === false) {
        return false;
      }
    }

    return true;
  }
}

module.exports = ObjectSet;
