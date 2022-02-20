class ListNode {
  private element;
  private next: ListNode;

  constructor(element) {
    this.element = element;
    this.next = null;
  }
  public getData() {
    return this.element;
  }
  public getNextOrNull() {
    return this.next;
  }
  public setNext(node: ListNode) {
    this.next = node;
  }
}

class LinkedList {
  public static append(rootOrNull: ListNode, element) {
    const node = new ListNode(element);

    if (rootOrNull) {
      let current = rootOrNull;
      while (current.getNextOrNull()) {
        current = current.getNextOrNull();
      }

      current.setNext(node);
      return rootOrNull;
    } else {
      return node;
    }
  }
  public static prepend(rootOrNull: ListNode, element) {
    const node = new ListNode(element);
    node.setNext(rootOrNull);
    return node;
  }
  public static insertAt(rootOrNull: ListNode, index: number, element) {
    const node = new ListNode(element);

    if (rootOrNull === null) {
      return node;
    } else if (index === 0) {
      node.setNext(rootOrNull);
      return node;
    } else {
      let current = rootOrNull;

      let position = index;
      while (position !== 0 && current) {
        current = current.getNextOrNull();

        position--;
      }

      rootOrNull.setNext(node);
      node.setNext(current);
      return rootOrNull;
    }
  }
  public static removeAt(rootOrNull: ListNode, index: number) {
    if (rootOrNull === null) {
      return rootOrNull;
    } else if (index === 0) {
      return rootOrNull.getNextOrNull();
    } else if (index < 0) {
      return null;
    } else {
      let position = index;
      let front = rootOrNull;
      let back = rootOrNull.getNextOrNull();

      while (position > 1 && back) {
        front = front.getNextOrNull();
        back = back.getNextOrNull();
        position--;
      }

      front.setNext(back.getNextOrNull());

      return rootOrNull;
    }
  }
  public static getIndexOf(rootOrNull: ListNode, element) {
    if (rootOrNull === null) {
      return null;
    } else {
      let current = rootOrNull;
      let index = 0;
      while (current && element !== current.getData()) {
        current = current.getNextOrNull();
        index++;
      }

      return current ? index : null;
    }
  }
  public static getOrNull(rootOrNull: ListNode, index: number) {
    if (rootOrNull === null || index < 0) {
      return null;
    } else {
      let current = rootOrNull;
      let pointer = index;
      while (pointer !== 0 && current) {
        current = current.getNextOrNull();
        pointer--;
      }

      return current || null;
    }
  }

  public static getAllOrNull(rootOrNull: ListNode) {
    if (rootOrNull === null) {
      return null;
    } else {
      const values = [];
      let current = rootOrNull;

      while (current) {
        values.push(current.getData());
        current = current.getNextOrNull();
      }

      return values;
    }
  }

  public static reverse(rootOrNull: ListNode) {
    if (rootOrNull) {
      let current = rootOrNull;
      let next = rootOrNull.getNextOrNull();
      let result = current;
      result.setNext(null);

      while (next) {
        current = next;
        next = next.getNextOrNull();
        current.setNext(result);
        result = current;
      }

      return result;
    }

    return null;
  }
}

module.exports = LinkedList;
