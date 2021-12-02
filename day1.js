const day1Part1 = () =>{
    fs.readFile('./day1_input.txt',(err,data)=>{
        const depths = data.toString()
        const depthsArray = depths.split('\n')
        let count = 0
        for(let i=1;i<depthsArray.length;i++){
            if(Number(depthsArray[i])>Number(depthsArray[i-1])){
                count++
            }
        }
        console.log(count)
    })
}

day1Part1()

const day1Part2 = () =>{
    fs.readFile('./day1_input.txt',(err,data)=>{
        const depths = data.toString()
        const depthsArray = depths.split('\n')
        let count = 0
        for(let i=0;i<depthsArray.length-3;i++){
            if(Number(depthsArray[i])<Number(depthsArray[i+3])){
                count++
            }
        }
        console.log(count)
    })
}

day1Part2()
