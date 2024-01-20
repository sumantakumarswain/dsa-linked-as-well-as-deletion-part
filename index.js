class Node {
    constructor(data) {
        this.data = data;
        this.reference = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.insert = function (data) {
            var node = new Node(data);
            if (this.head == null) {
                this.head = node;
                return this.head
            } else {
                var currentNode = this.head;
                while (currentNode.reference != null) {
                    currentNode = currentNode.reference
                }
                currentNode.reference = node;
                return this.head
            }
        }
        this.remove = function (Data) {
            if (this.head == null) {
                return -1
            }
            var currentNode = this.head;
            var prev = null;
            while (currentNode != null) {
                if (currentNode.data == Data) {
                    if (prev == null) {
                        this.head = currentNode.reference;
                        return this.head
                    }
                    prev.reference = currentNode.reference;
                    return this.head
                }
                prev = currentNode;
                currentNode = currentNode.reference;
            }

        }
    }
}

var linkedList = new LinkedList();
linkedList.insert(5);
linkedList.insert(4);
linkedList.insert(3);
linkedList.insert(2)
console.log(linkedList.insert(1));
console.log(linkedList.remove(3))