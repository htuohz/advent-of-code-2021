const fs = require('fs');

const wins = (arr,set) => {
    let columns = []
    let rows = []
    arr.map((val,index)=>{
        if(!rows[`${parseInt((index)/5)}`]){
            rows[`${parseInt((index)/5)}`] = []
        }
        rows[`${parseInt((index)/5)}`].push(val)
        if(!columns[`${parseInt(index%5)}`]){
            columns[`${parseInt(index%5)}`] = []
        }
        columns[`${parseInt(index%5)}`].push(val)
    })
    return columns.filter(column=>column.every(val=>set.includes(val))).length!==0 || rows.filter(row=>row.every(val=>set.includes(val))).length!==0
    
}

const day4Part1 = () => {
    fs.readFile('./day4_input.txt',(err,data)=>{
        const string = data.toString();
        let arr = string.split(/\n/)
        let randomArray = arr[0].split(',')
        arr.shift()
        arr = arr.filter((val)=>val!=='')
        let boards = {}
        arr.map((val,index)=>{
            if(!boards[`${parseInt((index)/5)}`]){
                boards[`${parseInt((index)/5)}`] = []
            }
            val.trim().replace(/\s+/g,' ').split(' ').map(val=>boards[`${parseInt((index)/5)}`].push(val))
        })

        for(let i =4;i<randomArray.length;i++){
            let wonBoard = Object.keys(boards).filter(key=>wins(boards[key],randomArray.slice(0,i+1)))
            console.log(wonBoard.length)
            if(wonBoard.length!==0){
                let filteredWonBoard = boards[wonBoard[0]].filter(val=>!(randomArray.slice(0,i+1).includes(val))).reduce((pre,cur)=>parseInt(pre)+parseInt(cur))
                return console.log(filteredWonBoard*randomArray[i])
            }
        }
    })
}

day4Part1()

const day4Part2 = () => {
    fs.readFile('./day4_input.txt',(err,data)=>{
        const string = data.toString();
        let arr = string.split(/\n/)
        let randomArray = arr[0].split(',')
        arr.shift()
        arr = arr.filter((val)=>val!=='')
        let boards = {}
        arr.map((val,index)=>{
            if(!boards[`${parseInt((index)/5)}`]){
                boards[`${parseInt((index)/5)}`] = []
            }
            val.trim().replace(/\s+/g,' ').split(' ').map(val=>boards[`${parseInt((index)/5)}`].push(val))
        })
        let finalArray = []
        for(let i =4;i<randomArray.length;i++){
            let wonBoard = Object.keys(boards).filter(key=>wins(boards[key],randomArray.slice(0,i+1)))
            
            if(wonBoard.length!==0){
                wonBoard.map(key=>delete boards[key])
            }
            //remove all the boards which has won, to find the finally lasting one
            if(Object.keys(boards).length===1){
                finalArray = [...boards[(Object.keys(boards)[0])]]
            }
            if(Object.keys(boards).length===0){
                let finalArraySum = finalArray.filter(val=>!(randomArray.slice(0,i+1).includes(val))).reduce((pre,cur)=>parseInt(pre)+parseInt(cur))
                return console.log(finalArraySum*randomArray[i])
            }
        }
    })
}
day4Part2()

