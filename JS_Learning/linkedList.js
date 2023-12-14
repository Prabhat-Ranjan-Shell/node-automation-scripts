let arr = [20, 40, 50, 10, 30]; // [10,20,40,50,30] // [10,20,30,40,50]

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let last = this.head;
        while (last.next !== null) {
            last = last.next;
        }
        last.next = newNode;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    insertAt(position, data) {
        if (position < 0) {
            console.log("Invalid position.");
            return;
        }

        const newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let previous = null;
        let count = 0;

        while (count < position && current !== null) {
            previous = current;
            current = current.next;
            count++;
        }

        if (current === null && count < position) {
            console.log("Position out of range.");
            return;
        }

        newNode.next = current;
        previous.next = newNode;

        return this.head;
    }

    delete(data) {
        if (this.head === null) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }

        return this.head;
    }

    printList() {
        let current = this.head;
        let a = []
        while (current !== null) {
            process.stdout.write(current.data + " -> ");
            a.push(current.data);
            arr = [...a];
            current = current.next;
        }
        console.log("null");
    }
}

// Create a linked list
const llist = new LinkedList();

// Append elements
arr.forEach(item => {
    llist.append(item);
});

function reArrange(pos, target) {
    const posIdx = pos - 1;
    const targetIdx = target - 1;

    llist.delete(arr[posIdx]);
    llist.insertAt(targetIdx, arr[posIdx]);

    llist.printList();
}

reArrange(4, 1);
reArrange(5, 3);