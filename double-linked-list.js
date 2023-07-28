class Node {
	constructor(val) {
	  this.val = val;
	  this.next = null;
	  this.prev = null;
	}
  }

class DoubleLinkedList {
	constructor(vals = []) {
	  this.head = null;
	  this.tail = null;
	  this.length = 0;
  
	  for (let val of vals) this.push(val);
	}
  
	_get(idx){
	  let cur = this.head;
	  let count = 0;
  
	  while(cur !== null && count != idx){
		count++;
		cur = cur.next
	  }
  
	  return cur
	}
  
	/** push(val): add new value to end of list. */
  
	push(val) {
	  const newNode = new Node(val);
	  if(!this.head){
		this.head = newNode;
		this.tail = this.head
	  } else{
		newNode.prev = this.tail
		this.tail.next = newNode;
		this.tail = newNode
	  }
  
	  this.length++
  
	}
  
	/** unshift(val): add new value to start of list. */
  
	unshift(val) {
	  const newNode = new Node(val);
  
	  if(!this.head){
		this.head = newNode;
		this.tail = this.head;
	  } else {
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
	  }
  
	  this.length++
	}
  
	/** pop(): return & remove last item. */
  
	pop() {
	  return this.removeAt(this.length - 1)
	}
  
	/** shift(): return & remove first item. */
  
	shift() {
	  return this.removeAt(0)
	}
  
	/** getAt(idx): get val at idx. */
  
	getAt(idx) {
	  if(idx >= this.length || idx < 0) throw new Error("Invalid index.")
  
	  return this._get(idx).val;
	}
  
	/** setAt(idx, val): set val at idx to val */
  
	setAt(idx, val) {
	  if(idx >= this.length || idx < 0) throw new Error("Invalid index.")
  
	  let cur = this._get(idx);
	  cur.val = val
	}
  
	/** insertAt(idx, val): add node w/val before idx. */
  
	insertAt(idx, val) {
	  if(idx > this.length || idx < 0) throw new Error("Invalid index.")
  
	  if(idx === 0) return this.unshift(val);
	  if(idx === this.length) return this.push(val)
  
	  let prevObj = this._get(idx - 1);
	  
	  let newNode = new Node(val);
	  newNode.next = prevObj.next;
	  newNode.prev = prevObj.val;
	  prevObj.next.prev = newNode
	  prevObj.next = newNode
  
	  this.length++

	  console.log(`Input Value: ${val}`)
		
	  console.log(`Value at ${idx}: ${this.idx}`)

	}
  
	/** removeAt(idx): return & remove item at idx, */
  
	removeAt(idx) {
	  if(idx >= this.length || idx < 0) throw new Error("Invalid index.")
  
	  if(idx === 0) {
		let val = this.head.val;
		this.head = this.head.next;
		if(this.head) this.head.prev = null;
		else this.tail = null;
		this.length--;
		if(this.length < 2) this.tail = this.head;
		return val
	  }
  
	  if(idx === this.length - 1){
		let val = this.tail.val;
		this.tail = this.tail.prev
		this.tail.next = null
		this.length--;
		return val
	  }
	  
	  let cur = this._get(idx)

	  let val = cur.val;
	  cur.next.prev = cur.prev
	  cur.prev.next = cur.next
	  this.length--;
	  return val;
  
	}
  
	/** average(): return an average of all values in the list */
  
	average() {
	  if(this.length === 0) return 0
	  let sum = 0;
  
	  let cur = this.head
	  while(cur){
		sum += cur.val;
		cur = cur.next
	  }
	  
	  return sum / this.length
	}
  }