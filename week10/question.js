class Graph{
    constructor(){
        this.adjancencyList = {};
    }

    addVertex(vertex){
        if (!this.adjancencyList[vertex]) this.adjancencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weightval){
        // if (!this.adjancencyList[vertex1] || !this.adjancencyList[vertex2]) return undefined;
        let weight = {
            value: weightval
        }
        this.adjancencyList[vertex1].push(vertex2);
        this.adjancencyList[vertex1].push()
        // becuase our graph is directed 
        // this.adjancencyList[vertex2].push(vertex1);

    }

    removeEdge(vertex1, vertex2){
        this.adjancencyList[vertex1] = this.adjancencyList[vertex1].filter( vertex => vertex !== vertex2);
        // this.adjancencyList[vertex2] = this.adjancencyList[vertex2].filter(vertex => vertex !== vertex1);
    }
    
    removeVertex(vertex){
        for(let val of this.adjancencyList[vertex]){
            this.removeEdge(vertex, val);
        }
        delete this.adjancencyList[vertex]
    }

}

let count = new Graph();

count.addVertex('Nairobi')
count.addVertex('Lagos')
count.addVertex('Dakar');
// console.log(count.adjancencyList['Lagos']);
count.addEdge('Nairobi', 'Lagos');
count.addEdge('Nairobi', 'Lagos');
count.addEdge('Nairobi', 'Lagos');
count.addEdge('Nairobi', 'Lagos');
count.addEdge('Lagos', 'Dakar')
// count.removeEdge()
console.log(count.removeEdge('Lagos', 'Nairobi'))
// count.removeVertex('Lagos');
console.log(count.adjancencyList)