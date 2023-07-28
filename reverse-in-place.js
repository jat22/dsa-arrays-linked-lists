function reverseInPlace (lst) {
	let cur = lst.head
	let temp;

	while(cur){
		temp = cur.next;
		cur.next = cur.prev;
		cur.prev = temp;
		cur = temp
	}

	temp = lst.head;
	lst.head = lst.tail
	lst.tail = temp

}

const list = new DoubleLinkedList([1,2,3,4,5])