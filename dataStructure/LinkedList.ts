class ListNode {
  private data: number;
  private next: ListNode;

  constructor(data: number) {
    this.data = data;
  }

  public getData() {
    return this.data;
  }

  public getNextOrNull() {
    return this.next;
  }

  public setNext(node: ListNode) {
    this.next = node;
  }
}

class LinkedList extends ListNode {
  constructor(data?) {
    super(data);
  }
  public static append(rootOrNull: ListNode, data): ListNode {
    const node = new LinkedList();

    return null;
  }

  public static prepend(rootOrNull: ListNode, data): ListNode {
    return null;
  }

  public static insertAt(
    rootOrNull: ListNode,
    index: number,
    data: number
  ): ListNode {
    return null;
  }

  public static removeAt(rootOrNull: ListNode, index: number): ListNode {
    return null;
  }

  public static getIndexOf(rootOrNull: ListNode, data: number): number {
    return -1;
  }

  public static getOrNull(rootOrNull: ListNode, index: number): ListNode {
    return null;
  }

  public static reverse(rootOrNull: ListNode): ListNode {
    return null;
  }

  public static interleaveOrNull(
    rootOrNull: ListNode,
    root1OrNull: ListNode
  ): ListNode {
    return null;
  }
}

module.exports = LinkedList;
