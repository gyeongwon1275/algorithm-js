/* 
todo 
- 왼쪽에서 자신과 동일한 node 있으면 경로상태값 ++ 
- 오른쪽에서 자신과 동일한 node 있으면 경로상태값 ++ 
- 현재 node 기준으로 왼쪽 경로 + 오른쪽 경로 와 기존 최대값을 비교하여 최대값을 update 한다. 
- 현재 node 가 자식 node 가 될 수 있으니 왼쪽, 오른쪽 중 하나만 경로상태값을 가지도록 둘 중 최대값을 반환한다. 
*/

var longestUnivaluePath = function (root) {
  this.result = 0;

  const dfs = (node) => {
    if (!node) {
      return 0;
    }

    let left = dfs(node.left);
    let right = dfs(node.right);

    if (node.left && node.left.val === node.val) {
      left++;
    } else {
      left = 0;
    }

    if (node.right && node.right.val === node.val) {
      right++;
    } else {
      right = 0;
    }

    this.result = Math.max(this.result, left + right);

    return Math.max(left, right);
  };

  dfs(root);
  return this.result;
};

module.exports = longestUnivaluePath;
