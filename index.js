class Node {
	constructor(value, next, prev){
		this.value = value;
		this.next = next;
		this.prev = prev;
	}
}
class LinkedList {
	constructor() {
		this.tail = null;
		this.head = null;
	}

	reverse(node) {
		
		if(node === null || node.next === null) {
			return node;
		}

		let rest = this.reverse(node.next);
		node.next.next = node;

		node.next = null;

		return rest;

	}

	addToHead(val) {
		const newNode = new Node(val, this.head, null);
		if (this.head) {
			this.head.prev = newNode;
		} else {
			this.tail = newNode;
		}
		this.head = newNode;
	}

	addToTail(val) {
		const newNode = new Node(val, null, this.tail);
		if(this.tail) {
			this.tail.next = newNode;
		} else {
			this.head = newNode;
		}
		this.tail = newNode;
	}

	printList(head) {
		let current = head;
		while(current) {
			console.log(current.value);
			current = current.next;
		}
	}
}

let myLL = new LinkedList();

myLL.addToHead('Apollo');
myLL.addToHead('Duke');
myLL.addToHead('Amos');
myLL.addToHead('Rufus');
myLL.addToHead('Apollo');
myLL.addToHead('Lucky');
myLL.addToHead('Rufus');
myLL.addToHead('Quincy');
myLL.addToHead('Rex');

console.log('------- Original Linked List --------');

myLL.printList(myLL.head);

let reverdedList = myLL.reverse(myLL.head);

console.log('------- Reversed Linked List --------');

myLL.printList(reverdedList);



