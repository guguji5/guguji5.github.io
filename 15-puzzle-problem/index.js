const Counter = {
    data() {
      return {
        inputList: [],
        target: [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0]],
        list: [[5,1,2,4],[9,6,3,8],[13,15,10,11],[14,0,7,12]],
        openList: [
            // {
            //     fvalue: Number,
            //     list: Array
            // }
        ],
        closeList: [],
        step: 0,
        disable: false
      }
    },
    computed:{
        size(){
            return this.target.length
        }
    },
    mounted() {
        this.openList.push({
            step: this.step,
            fvalue: this.f(this.list),
            list: this.list
        })
        this.generateNextList();
    },
    methods:{
        calcReverseValue(list){
            let flatList = [].concat(...list)
            let v = 0;
            for(let i=0;i<flatList.length-1;i++){
                for(let j=i+1;j<flatList.length;j++){
                    if(flatList[j]<flatList[i]){
                        v++
                    }
                }
            }
            return v
        },
        show(){
            console.log(this.openList)
            console.log(this.closeList)
        },
        generateNextList(auto =false){
            const currNode = this.openList.shift()
            this.list = currNode.list
            this.closeList.push(currNode)
            if(this.isTarget(currNode.list)){
                this.disable = true
                // alert('success')
                return
            }
            this.step++
            let nextList = []
            let directions = ['up', 'down', 'right', 'left']
            directions.forEach(direction =>{
                let { list: newNode, position } = this.moveZero(direction, currNode.list)
                if(newNode && !this.isExistInCloseList(newNode)){
                    nextList.push({
                        position,
                        fvalue: this.f(newNode),
                        list: newNode,
                        step: this.step
                    })
                }
            })
            // this.openList = this.openList.concat(nextList).sort((a, b) => a.fvalue - b.fvalue)
            this.openList = nextList.sort((a, b) => a.fvalue - b.fvalue)
            if(auto){
                setTimeout(()=>{
                    this.generateNextList(auto)
                }, 1000)
            }
        },
        isTarget(currNode){
            let flatCurrNode = [].concat(...currNode)
            let flatTarget = [].concat(...this.target)
            return flatTarget.every((item, i) => item === flatCurrNode[i] )
        },
        isExistInCloseList(currNode){
            let isExist = false
            let flatCurrNode = [].concat(...currNode)
            for(let node of this.closeList){
                let flatNode = [].concat(...node.list)
                isExist = isExist || flatNode.every((item, i) => item === flatCurrNode[i] )
            }
            return isExist
        },
        findPosition(num = 0, list = this.list){
            let tempList = [].concat(...list)
            let zeroIndex = tempList.findIndex(item => item === num)
            return {
                row: Math.floor(zeroIndex / this.size),
                col: zeroIndex % this.size
            }
        },
        moveZero(toward , from = this.list){
            const { row, col} = this.findPosition(0, from)
            let to = new Array(this.size).fill([]).map((item, i) => [...from[i]])
            let position = {}
            switch(toward){
                case 'up':
                    if(row === 0) return false
                    position = {row: row-1,col}
                    to[row][col] = to[row-1][col]
                    to[row-1][col] = 0
                    break;
                case 'down':
                    if(row === this.size-1) return false
                    position = {row: row+1,col}
                    to[row][col] = to[row+1][col] 
                    to[row+1][col] = 0
                    break;
                case 'right':
                    if(col === this.size-1) return false
                    position = {row,col: col+1}
                    to[row][col] = to[row][col+1]
                    to[row][col+1] = 0
                    break;
                case 'left':
                    if(col === 0) return false
                    position = {row,col: col-1}
                    to[row][col] = to[row][col-1] 
                    to[row][col-1] = 0
                    break;

            }
            return {list: to, position}
        },
        f(list){
            // cost function, equal g()+h()
            return this.h(list)
            // return this.g()+this.h(list)
        },
        g(){
            // has paied cost
            return this.step
        },
        h(list){
            // The minimum cost need
            // the sum of the distance between an out-of-position chess piece and its target position
            // except 0
            let totalDistance = 0
            for(let rowIndex=0; rowIndex < list.length; rowIndex++){
                for(let colIndex=0; colIndex < list.length; colIndex++){
                    if(list[rowIndex][colIndex] !==0 && list[rowIndex][colIndex] !== this.target[rowIndex][colIndex]){
                        let distance = this.calcDistanceFromTargetPosition(list, rowIndex, colIndex)
                        totalDistance += distance
                    }
                }
            }
            return totalDistance;
        },
        calcDistanceFromTargetPosition(list, row, col){
            const { row: rightRow, col: rightCol} = this.findPosition(list[row][col], this.target)
            return Math.abs(rightRow - row) + Math.abs(rightCol - col)
        }
    }
}

Vue.createApp(Counter).mount('#eightPuzzle')