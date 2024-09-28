function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = findLength(head);
  let count = length - n - 1;
  if (count < 0) return head.next;
  let curr = head;
  for (let i = 0; i < count; i++) {
    curr = curr.next;
  }
  curr.next = curr.next.next;
  return head;
  function findLength(head: ListNode | null) {
    let count = 0;
    if (head === null) return count;
    let curr = head;
    while (curr !== null) {
      count++;
      curr = curr.next;
    }
    return count;
  }
}
