class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor(value) {
     let createdNode = new Node(value)
     this.head = createdNode
     this.tail = this.head
     this.length = 1   
    }
    addElement(value) {
        let createdNode = new Node(value)
        if(!this.head) {
            this.head = createdNode
            this.tail = this.head
        } else {
            this.tail.next = createdNode
            this.tail = createdNode
        }
        this.length++
        return this
    }
    removeElement(value) {
        if(this.length == 1) {
            this.head = null
            this.tail = null
            this.length --
        } else if(this.head.value == value){
            this.head = this.head.next
            this.length --
        } else {
           let prevNode =  this.getToTheNode(this.head,value)
           console.log('found',prevNode)
        }
    }
    getToTheNode(head,value) {
        if(head.next.value == value) {
            head.next = null
            this.tail = head
            this.length --
            return head
        } else return this.getToTheNode(head.next,value)
    }
    //2->4->5->6
    unshift(value) {
        let createdNode = new Node(value)
        if(!this.head) {
            this.head = createdNode = this.tail
        } else {
            createdNode.next = this.head
            this.head = createdNode
        }
        this.length++
        return this
    }
    shift() {
        if(this.head == this.tail) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            
        }
        this.length --
    }
    getItems(index) {
        if(this.length < index || index < 1) {
            console.log("No element exists")
            return undefined
        } else {
            let temp = this.head
            for (let i=1;i<index;i++) {
                temp = temp.next
            }
            return temp
        }
    }
    setItems(index,value) {
        if(index<1 || index > this.length) {
            return undefined
        } else {
            let temp = this.getItems(index)
            temp.value = value
        }
    }
    insertItem(index,value) {
        if(index<1) {
            return undefined
        } else if(index == 1) {
            this.unshift(value)
        } else if( index == this.length) {
            let createdNode = new Node(value)
            this.tail.next = createdNode
            this.tail = createdNode
            this.length++
        } else if(!this.head || this.length ==0){
            let createdNode = new Node(value)
            console.log('created',createdNode)
            this.head = createdNode
            this.tail = this.head
            this.length++
        } else {
            let temp = this.head
            for(let i=1;i<index-1;i++) {
                temp = temp.next
                console.log('temp',temp)
            }
            let createdNode = new Node(value)
            createdNode.next = temp.next
            temp.next = createdNode
            this.length++
        }
    }
    removeByIndex(index) {
        if(index<1)
            {
             return undefined
            }
        else if(index > this.length) {
            return undefined
        } else if(index == 1) {
            this.head = this.head.next
        }else {
            let temp = this.head
            for(let i=1;i<index-1;i++)
                {
                    temp = temp.next
                    console.log(temp)
                }
            let prevItem = temp
            prevItem.next = temp.next.next
            if(prevItem.next == null) {
                this.tail = prevItem
            }
        }
            this.length --
        }
    findMiddleNode(){
        let slow = this.head
        let fast = this.head
        while(fast !== null && fast.next!== null) {
            console.log('fast each pass',fast)
            slow = slow.next
            fast = fast.next.next
        }
        console.log('fast',fast)
        return slow
    }
    hasLoop () {
        let slow = this.head
        let fast = this.head
        while(fast !== null && fast.next!==null){
            slow = slow.next
            fast = fast.next.next
            if( fast == slow) return true
        }
        return false
    }
    findKthFromEnd(k) {
        let fast = this.head
        let slow = this.head
        if(k===0 || k< 0) return null
        if(k===1) return this.tail
        for(let i=0;i<k;i++) {
            if(fast === null) return null
            fast = fast.next
        }
        
        while(fast!=null) {
            console.log(slow)
            slow = slow.next
            fast = fast.next
        }
        return slow
    }
    }

    

const myLinkedList = new LinkedList(4)
myLinkedList.addElement(7)
myLinkedList.addElement(16)
myLinkedList.addElement(22)
myLinkedList.addElement(8)
myLinkedList.addElement(18)
myLinkedList.addElement(98)
myLinkedList.addElement(89)
myLinkedList.addElement(128)
// myLinkedList.removeElement(4)
// myLinkedList.unshift(15)
// myLinkedList.shift()
// console.log('before',JSON.stringify(myLinkedList))
// myLinkedList.setItems(4,17)
// myLinkedList.insertItem(4,100)
// myLinkedList.removeByIndex(1)
console.log('Actual List',JSON.stringify(myLinkedList))
console.log('ans',myLinkedList.findMiddleNode())
// 1->2->3->4->5->6->7