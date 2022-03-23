function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const reverseList = function (head) {
  /*    
  
  거꾸로 뒤집어진 list 를 현재 next 에 붙이고 
  현재는 이후 다음 거꾸로 뒤집어진 list 
  현재 next 는 다음 현재 node 로  
  
  
  const reverseListRecursive = (node,reversed = null) => {

          if(!node) { return reversed}

          const temp = node.next;
          node.next = reversed

          return reverseListRecursive(temp,node)

      }

      return reverseListRecursive(head)
 */
  let reversed = null;
  let current = head;

  while (current) {
    const temp = current.next;
    current.next = reversed;
    reversed = current;
    current = temp;
  }

  return reversed;
};

module.exports = { reverseList, ListNode };
