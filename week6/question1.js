let {SinglyLinkedList} = require('../week5/singlyllist');

class SinglyLinkedList2 extends SinglyLinkedList{
    constructor(){
        super();
    }

    recurSearch(val){
        let stand = this;
        if (stand.val === val) return true;
        if (!stand.next) return false;
        stand = stand.next;
        return recurSearch(stand)

    }

}


let me = new SinglyLinkedList2();