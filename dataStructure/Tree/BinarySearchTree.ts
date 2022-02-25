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

  private inOrderSearchRecursive(treeNode: BinarySearchTree, data: number) {
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

  public search(data: number, type = "inorder") {
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

    switch (type) {
      case "inorder":
        return this.inOrderSearchRecursive(this, data);

      default:
        return this.inOrderSearchRecursive(this, data);
    }
  }
}

module.exports = BinarySearchTree;
