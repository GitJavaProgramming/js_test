// 源： https://cloud.tencent.com/developer/article/1055554
function List() {//列表的构造函数
    this._dataStore = []; //初始化一个空数组来保存列表元素
    this._pos = 0;//当前的位置
}
List.prototype={
    constructor:List,
    clear:function(){//清空列表
        delete this._dataStore;
        this._dataStore = []; this._pos = 0;
    },
    find:function(element){//在列表中查找某一元素，若有返回位置，否则返回-1
        for (var i = 0; i < this._dataStore.length; ++i) {
            if (this._dataStore[i] === element) {return i;}
        };return -1;
    },
    contains:function(element){//判断给定值是否在列表中
        for (var i = 0; i < this._dataStore.length; ++i) {
            if (this._dataStore[i] === element) {return true; break;}
        };return false;
    },
    insert:function(element, after){//当前位置插入新元素
        var insert_pos = this.find(after);
        if (insert_pos > -1) {this._dataStore.splice(insert_pos+1, 0, element);return true;};
        return false;
    },
    append:function(element){this._dataStore[this._dataStore.length] = element;},//末尾添加新元素
    remove:function(element){//删除元素
        var foundAt = this.find(element);
        if (foundAt > -1) {this._dataStore.splice(foundAt,1);return true;};
        return false;
    },
    front:function(){this._pos = 0;},//将当前位置指针设为表首
    end:function(){this._pos = this._dataStore.length-1;},//将当前位置指针设为表尾
    prev:function(){if (this._pos > 0) {--this._pos;}},//当前位置上移指针
    next:function(){if (this._pos < this._dataStore.length-1) {++this._pos;}},//当前位置下移指针
    moveTo:function(_position){this._pos = _position;},//移动当前位置指针到指定位置
    length:function(){return this._dataStore.length;},//获取列表的中元素的个数
    curr_pos:function(){return this._pos;},//返回当前位置指针
    getElement:function(){return this._dataStore[this._pos];},//返回当前位置的列表项
    toString:function(){return this._dataStore;}//返回列表的字符串形式
}
function Stack() {//栈的构造函数
    this._dataStore = [];//初始化一个空数组来保存列表元素
    this._top = 0;//记录栈顶的位置
}
Stack.prototype={
    constructor:Stack,
    clear:function(){//清空栈
        delete this._dataStore;
        this._dataStore = []; this._top = 0;
    },
    push:function(element){this._dataStore[this._top++] = element;},//向栈内添加元素
    pop:function(){return this._dataStore[--this._top];},//从栈内取出元素
    peek:function(){return this._dataStore[this._top-1]},//查看栈顶元素
    length:function(){return this._top;}//获取列表的中元素的个数
}
function Queue() {//队列的构造函数
    this._dataStore = [];//初始化一个空数组来保存元素
}
Queue.prototype={
    constructor:Queue,
    clear:function(){//清空队列
        delete this._dataStore;
        this._dataStore = []; this._top = 0;
    },
    enqueue:function(element){this._dataStore.push(element)},//向队尾添加一个元素
    dequeue:function(){return this._dataStore.shift();},//删除队首元素
    front:function(){return this._dataStore[0];},//读取队首元素
    back:function(){return this._dataStore[this._dataStore.length-1];},//读取队尾元素
    empty:function(){if(this._dataStore.length === 0){return true;}else{return false;}},//判断队列是否为空
    toString:function(){//将队列元素拼接字符串
        var retStr = "";
        for (var i = 0; i < this._dataStore.length; ++i) {retStr += this._dataStore[i] + ",";}
        return retStr;
    }
}
function Node(element) {//链表中节点的构造函数
    this.element = element;
    this.next = null;
}
function LList() {//链表的构造函数
    this.head = new Node("head");
}
LList.prototype={
    constructor:LList,
    find:function(item){//查找链表，如果找到则返回该节点，否者返回头节点
        var currNode = this.head;
        while (currNode.element != item) {currNode = currNode.next;} 
        return currNode;
    },
    insert:function(newElement, item){//在找到的节点后，新增一个节点
        var newNode = new Node(newElement);//新增节点
        var current = this.find(item);//查找节点
        newNode.next = current.next;//先将当前节点的next赋值给新节点的next
        current.next = newNode;//再将当前节点的next设置为新节点
    },
    display:function(){
        var currNode = this.head;
        while (currNode.next!==null){console.log(currNode.next.element);currNode = currNode.next; }
    },
    findPrev:function(item){//查找链表，返回当前节点的上一个节点
        var currNode = this.head;
        while (currNode.next!==null && currNode.next.element!==item){ currNode = currNode.next; }
        return currNode;
    },
    remove:function(item){//在链表中删除给定的节点
        var prevNode = this.findPrev(item);
        if (prevNode.next !== null) { prevNode.next = prevNode.next.next;}
    }
}
function Dictionary() {//字典的构造函数
    this._datastore = new Array();
}
Dictionary.prototype={
    constructor:Dictionary,
    add:function(key,value){ this._datastore[key]=value; },//增加一条键值对
    find:function(key){ return this._datastore[key] },//查找指定key，返回对应value的值
    remove:function(key){ delete this._datastore[key] },//删除指定key的键值对
    showAll:function(){ //打印字典的所有键值对
        //若需排序可以给Object.keys(this._datastore)数组追加sort方法
        Object.keys(this._datastore).forEach(function(key){console.log(key+" -> "+this._datastore[key]);}.bind(this)) 
    },
    count:function(){//返回字典所含键值对数量
        var n = 0;
        for(var key in this._datastore) {++n;}
        return n;
    },
    clear:function(){ //清空字典
        Object.keys(this._datastore).forEach(function(key){ delete this._datastore[key];}.bind(this))
    }
}
function HashTable() {//散列的构造函数
    this._table = new Array(137);//数组的长度应该为质数，即预算散列表的长度
}
HashTable.prototype={
    constructor:HashTable,
    simpleHash:function(data){//简单的散列函数（返回键字符串的ASCII累加除数组长度的余数）
        var total = 0;
        for (var i = 0; i < data.length; ++i) {total += data.charCodeAt(i);}
        return total % this._table.length;
    },
    betterHash:function(data){//更好的散列函数算法，减少碰撞
        const H = 37;
        var total = 0;
        for (var i = 0; i < data.length; ++i) {total += H * total + data.charCodeAt(i);} 
        total = total % this._table.length;
        if (total < 0) {total += this._table.length-1;}
        return parseInt(total);
    },
    put:function(data){var pos = this.simpleHash(data);this._table[pos] = data;},//使用简单散列函数
    //put:function(key,data){var pos = this.betterHash(key);this._table[pos] = data;},//使用高级散列函数
    showDistro:function(){//显示散列表中的数据
        var n = 0;
        for (var i = 0; i < this._table.length; ++i) {
            if (this._table[i] !== undefined) {console.log(i + ": " + this._table[i]);}
        }
    },
    get:function(key){return this._table[this.betterHash(key)];},
}
function Set() {//集合的构造函数
    this._dataStore = [];
}
Set.prototype={
    constructor:Set,
    add:function(data){//向集合中添加元素
        if (this._dataStore.indexOf(data) < 0) {this._dataStore.push(data);return true;
        } else {return false;}
    },
    remove:function(data){//从集合中移除元素
        var pos = this._dataStore.indexOf(data);
        if (pos > -1) {this._dataStore.splice(pos,1);return true;
        } else {return false;}
    },
    contains:function(){//检查一个元素是否在集合中
        if (this._dataStore.indexOf(data) > -1) {return true;} else {return false;}
    },
    size:function(){return this._dataStore.length},//返回集合的长度
    union:function(set){//返回与另一个集合的并集
        var tempSet = new Set();
        for (var i = 0; i < this._dataStore.length; ++i) {tempSet.add(this._dataStore[i]);}
        for (var i = 0; i < set.dataStore.length; ++i) {
            if (!tempSet.contains(set.dataStore[i])) {tempSet.dataStore.push(set.dataStore[i]);}
        } 
        return tempSet;
    },
    intersect:function(set){//返回与另一个集合的交集
        var tempSet = new Set();
        for (var i = 0; i < this._dataStore.length; ++i) {
            if (set.contains(this._dataStore[i])) {tempSet.add(this._dataStore[i]);}
        } 
        return tempSet;
    },
    subset:function(set){//判断集合是否其他集合的子集
        if (this.size() > set.size()) {return false;
        } else {
            this._dataStore.foreach(function(member){if (!set.contains(member)) {return false;}})
        } 
        return true;
    },
    difference:function(set){//返回与另一个集合的补集
        var tempSet = new Set();
        for (var i = 0; i < this._dataStore.length; ++i) {
            if (!set.contains(this._dataStore[i])) {tempSet.add(this._dataStore[i]);}
        } 
        return tempSet;
    },
    show:function(){return this._dataStore;},//显示集合中的元素
}
function Node2(data, left, right) {//二叉树中节点的构造函数
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = function(){return this.data;};
}
function BST(){//二叉查找树的构造函数
    this.root = null;
}
BST.prototype={
    constructor:BST,
    insert:function(data){//插入节点
        var n = new Node2(data, null, null);
        if (this.root == null) {
            this.root = n;
        } else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;if (current == null) {parent.left = n;break;}
                } else {
                    current = current.right;if (current == null) {parent.right = n;break;}
                }
            }
        }
    },
    inOrder:function(node){
        if (!(node == null)) {
        this.inOrder(node.left);
        console.log(node.show() + " ");
        this.inOrder(node.right);
        }
    },
    getMin:function(){//获取最小的数，即最左节点
        var current = this.root;
        while (!(current.left == null)) {current = current.left;}
        return current.data;
    },
    getMax:function(){//获取最大的数，即最右节点
        var current = this.root;
        while (!(current.right == null)) {current = current.right;}
        return current.data;
    },
    find:function(data){//查找指定的值
        var current = this.root;
        while (current != null) {
            if (current.data == data) {return current;
            } else if (data < current.data) {current = current.left;
            } else {current = current.right;}
        } 
        return null;
    },
    remove:function(data){ root = this.removeNode(this.root, data);},//调用removeNode删除节点
    removeNode:function(node,data){ //删除节点
        if (node == null) {return null;}
        if (data == node.data) {
            if (node.left == null && node.right == null) {return null;} // 没有子节点的节点
            if (node.left == null) {return node.right;} // 没有左子节点的节点
            if (node.right == null) {return node.left;} // 没有右子节点的节点
            // 有两个子节点的节点
            var tempNode = getSmallest(node.right);
            node.data = tempNode.data;
            node.right = removeNode(node.right, tempNode.data);
            return node;
        } else if (data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
    }
}
function Graph(v) {//图的构造函数,v表示顶点的数量
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.marked = [];//遍历标志位
    for (var i = 0; i < this.vertices; ++i) {this.marked[i] = false;}
    this.edgeTo = [];//路径查找时，存储两个顶点之间的边
}
Graph.prototype={
    constructor:Graph,
    addEdge:function(v,w){//增加一条从顶点v到顶点w的边
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    },
    showGraph:function(){var p='';//显示当前图的结构
        for (var i = 0; i < this.vertices; ++i) { p+='顶点'+i+' ->';
            for (var j = 0; j < this.vertices; ++j) {
                if (this.adj[i][j] !== undefined){ p+=this.adj[i][j]+' ';}
            };p+='\n';
        }console.log(p)
    },
    dfs:function(v){//深度优先搜索
        this.marked[v] = true;
        if (this.adj[v] !== undefined) {console.log("深度优先: " + v);}
        for(var w in this.adj[v]) {
            if(!this.marked[this.adj[v][w]]){this.dfs(this.adj[v][w]);}
        }
    },
    bfs:function(s){//广度优先搜索
        var queue = [];
        this.marked[s] = true;
        queue.push(s); // 添加到队尾
        while (queue.length > 0) {
            var v = queue.shift(); // 从队首移除
            if (v!==''&&v !== undefined) {console.log("广度优先: " + v);} 
            for(var w in this.adj[v]) {
                if (!this.marked[this.adj[v][w]]) {
                    this.marked[this.adj[v][w]] = true;
                    this.edgeTo[this.adj[v][w]] = v;
                    queue.push(this.adj[v][w]);
                }
            }
        }
    },
    pathTo:function(v){//获取最短路径，即顶点v到顶点0的边（必须先广度搜索生成edgeTo）
        var source = 0;
        if (!this.marked[v]) {return undefined;}
        var path = [];
        for (var i = v; i != source; i = this.edgeTo[i]) {path.push(i);}
        path.push(source);
        return path;
    }
}