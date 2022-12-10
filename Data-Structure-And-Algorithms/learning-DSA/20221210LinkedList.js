//#region Constructing a linked list
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}


const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

//#endregion

//#region Method 1: iterative algorithm
// const printLinkedList = (head)=>{
//  let current = head;
//  while(current != null){
//     console.log(current.val);
//     current = current.next;
//  }
// };
//#endregion


//#region Visualing the process
//  A -> B -> C -> D -> NULL
//                      head
//#endregion


//#endregion Method 2: recursive algorithm
// const printLinkedList = (head) =>{
//     if (head == null) return;
//     console.log(head.val);
//     printLinkedList(head.next);
// }

// printLinkedList(a);
//#endregion



//#region Practice Question: linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.


// approach 1: iterative approach
// const LinkedListValues = (head) =>{
//     let current = head;
//     const values = [];
//     while (current != null){
//         values.push(current.val);
//         current = current.next;
//     }
//     return values;
// }
// console.log(LinkedListValues(a));


// approach 2: recursive approach
const LinkedListValues = (head) =>{
    const values = [];
    fillValues(head, values);
};
console.log(LinkedListValues(a));

const fillValues(head, values)=>{
    if (head == null) return;
    
};

//#endregion

