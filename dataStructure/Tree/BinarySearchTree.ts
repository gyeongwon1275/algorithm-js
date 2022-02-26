class BinarySearchTree {
  private data: number = null;
  private left: BinarySearchTree = null;
  private right: BinarySearchTree = null;

  constructor(data: number) {
    this.data = data;
  }

  public getData() {
    return this.data;
  }

  public setData(data: number) {
    this.data = data;
  }

  public getLeft() {
    return this.left;
  }
  public getRight() {
    return this.right;
  }

  public setLeft(left: BinarySearchTree) {
    this.left = left;
  }
  public setRight(right: BinarySearchTree) {
    this.right = right;
  }

  private insertRecursive(treeNode: BinarySearchTree, data: number) {
    // 현재 data 가 비어있으면? => 넣는다.

    // 현재 data 가 비어있지 않으면?
    // 넣고자하는 수와 현재 data 와 비교한다.
    // 넣고자 하는 수가 현재 data 보다 작으면 왼쪽에 넣는 걸 시도한다.
    // 왼쪽이 비어있으면 => 넣는다.
    // 왼쪽이 비어있지 않으면 넣고자 하는 수와 왼쪽과 비교한다.

    // 넣고자 하는 수가 현재 data 보다 크면 오른쪽에 넣는 걸 시도한다.
    // 오른쪽이 비어있으면 => 넣는다.
    // 오른쪽이 비어있지 않으면 넣고자 하는 수와 오른쪽과 비교한다.

    // 반복되는 것
    // 현재 root 가 비어있는지 확인
    // 비어있으면 넣는다.
    // 비어있지 않으면 현재 root 와 넣으려고 하는 data 를 비교한다.
    // 왼쪽 또는 오른쪽으로 root 를 변경한다.

    // 탈출조건
    // 비어있으면 넣는다.

    if (!treeNode) {
      return new BinarySearchTree(data);
    }

    const root = treeNode.getData();

    if (root === data) {
      return;
    }

    if (root > data) {
      treeNode.setLeft(treeNode.insertRecursive(treeNode.getLeft(), data));
    } else {
      treeNode.setRight(treeNode.insertRecursive(treeNode.getRight(), data));
    }

    return treeNode;
  }

  public insert(data: number) {
    this.insertRecursive(this, data);
  }

  private inOrderSearchRecursive(
    treeNode: BinarySearchTree,
    data: number
  ): boolean {
    if (!treeNode) {
      return false;
    }

    const root = treeNode.getData();
    if (data === root) {
      return true;
    }

    if (data < root) {
      return this.inOrderSearchRecursive(treeNode.getLeft(), data);
    }

    return this.inOrderSearchRecursive(treeNode.getRight(), data);
  }

  private traversePreOrderRecursive(
    treeNode: BinarySearchTree,
    result: number[] = []
  ) {
    /* 
    나 넣음
    왼쪽 넣음 
    오른쪽 넣음 

    없으면 탈출 
    */
    if (!treeNode) {
      return;
    }

    result.push(treeNode.getData());
    this.traversePreOrderRecursive(treeNode.getLeft(), result);
    this.traversePreOrderRecursive(treeNode.getRight(), result);

    return result;
  }
  public traversePreOrder() {
    return this.traversePreOrderRecursive(this);
  }

  private traverseInOrderRecursive(
    treeNode: BinarySearchTree,
    result: number[] = []
  ) {
    /* 
   왼쪽 넣음 
   나 넣음
   오른쪽 넣음 

    없으면 탈출 
    */
    if (!treeNode) {
      return;
    }

    this.traverseInOrderRecursive(treeNode.getLeft(), result);
    result.push(treeNode.getData());
    this.traverseInOrderRecursive(treeNode.getRight(), result);

    return result;
  }

  public traverseInOrder() {
    return this.traverseInOrderRecursive(this);
  }

  private traversePostOrderRecursive(
    treeNode: BinarySearchTree,
    result: number[] = []
  ) {
    /* 
   왼쪽 넣음 
   오른쪽 넣음 
   나 넣음

    없으면 탈출 
    */
    if (!treeNode) {
      return;
    }

    this.traversePostOrderRecursive(treeNode.getLeft(), result);
    this.traversePostOrderRecursive(treeNode.getRight(), result);
    result.push(treeNode.getData());

    return result;
  }

  public traversePostOrder() {
    return this.traversePostOrderRecursive(this);
  }

  public search(data: number): boolean {
    // root 가 없으면 false 를 반환한다.
    // data 와 현재 root 를 비교한다.
    // 일치하면 true 를 반환한다.
    // 일치하지 않고 root 보다 작으면
    // 왼쪽에서 찾는다.
    // 일치하지 않고 root 보다 크면
    // 오른쪽에서 찾는다.
    /* 
    반복하는 것 
    root 가 있는지 확인 

    root 가 있으면 data 와 비교
    
    data 와 일치하면 true 반환 

    data 가 root 보다 작으면 왼쪽에서 반복
    data 가 root 보다 크면 오른쪽에서 반복
    */

    return this.inOrderSearchRecursive(this, data);
  }

  private getNodeToRemove(treeNode: BinarySearchTree, data) {
    const root = treeNode.getData();

    if (data === root) {
      return treeNode;
    }
    if (data < root) {
      return this.getNodeToRemove(treeNode.getLeft(), data);
    }

    return this.getNodeToRemove(treeNode.getRight(), data);
  }

  private getNodeToRemoveSuccessor(treeNode: BinarySearchTree) {
    if (!treeNode.getRight()) {
      return treeNode;
    }

    return this.getNodeToRemoveSuccessor(treeNode.getRight());
  }

  private getParent(treeNode: BinarySearchTree, data: number) {
    if (!treeNode) {
      return null;
    }

    const root = treeNode.getData();

    if (data === root) {
      return null;
    }

    if (data < root) {
      const leftNode = treeNode.getLeft();
      if (data === leftNode.getData()) {
        return treeNode;
      }

      return this.getParent(leftNode, data);
    }

    const rightNode = treeNode.getRight();
    if (data === rightNode.getData()) {
      return treeNode;
    }

    return this.getParent(rightNode, data);
  }
  public remove(data: number) {
    if (this.search(data) === false) {
      return false;
    }

    const nodeToRemove = this.getNodeToRemove(this, data);
    const nodeToRemoveSuccessor = this.getNodeToRemoveSuccessor(
      nodeToRemove.getLeft()
    );
    const dataToChange = nodeToRemoveSuccessor.getData();
    const parentNode = this.getParent(nodeToRemove, dataToChange);
    parentNode.setRight(null);

    nodeToRemove.setData(dataToChange);

    return true;
  }
}

module.exports = BinarySearchTree;
