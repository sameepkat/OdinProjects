
class LinkedList{
    Node = class{
        constructor(val = null, next = null){
        this.value = val;
        this.nextNode = next;
        }
    };
    head = new this.Node();
    current = this.head;
    append(value){
        if(this.head.value == null && this.head.nextNode == null){
            this.head.value = value;
            this.head.nextNode = null;
            return;
        }
        this.current = this.head;
        while(this.current.nextNode != null){
        this.current = this.current.nextNode;
        }
        this.current.nextNode = new this.Node();
        this.current.nextNode.value = value;
        this.current.nextNode.nextNode = null;
    }
    prepend(value){
        newHead = new this.Node();
        newHead.value = value;
        newHead.nextNode = this.head;
        this.head = newHead;
    }
    size(){
        let count = 0;
        if(this.head.value == null && this.head.nextNode == null)
            return 0;
        if(this.head.value && this.head.nextNode == null)
            return 1;
        this.current = this.head;
        while(this.current.nextNode != null){
            count++;
            this.current = this.current.nextNode;
        }
        return count;
    }
    getHead(){
        return this.head;
    }
    tail(){
        this.current = this.head;
        while(this.current.nextNode != null){
            this.current = this.current.nextNode;
        }
        return this.current;
    }
    at(index){
        let i = 0;
        this.current = this.head;
        while(this.current.nextNode != null){
            if(i == index){
            return this.current;
            }
            this.current=this.current.nextNode;
        }
    }
    pop(){
        this.current = this.head;
        if(this.head.value && this.head.nextNode == null){
            let item = this.head.value;
            this.head = new this.Node();
            return item;
        }
        while(this.current.nextNode.nextNode != null){
            this.current = this.current.nextNode;
        }
        let item = this.current.nextNode.value;
        this.current.nextNode = null; 
        return (item);
    }
    contains(value){
        this.current = this.head;
        while(this.current.nextNode != null){
            if(this.current.value == value){
                return true;
            }
            this.current = this.current.nextNode;
        }
        return false;
    }
    find(value){
        let index = 0;
        this.current = this.head;
        while(this.current.nextNode != null){
            if(this.current.value ==value){
                return index;
            }
            this.current = this.current.nextNode;
            index++;
        }
        console.error('Data not found');
        return;
    }
    toString(){
       this.current = this.head;
        let allItems = '';
        while(this.current.nextNode != null){
            allItems = allItems + `( ${this.current.value} ) -> `;
            this.current = this.current.nextNode;
        }
        allItems += `null` ;
        return allItems;
    }
}

const list = new LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
