const fs = require('fs');
let gammaRate;
let epsilongammaRate ;
let gammaRateArray;
let epsilongammaRateArray;
const day3Part1 = () => {
    fs.readFile('./day3_input.txt',(err,data)=>{
        const binaryNumbers = data.toString();
        const binaryNumbersArray = binaryNumbers.split('\n');
        gammaRateArray = [0,0,0,0,0,0,0,0,0,0,0,0];
        epsilongammaRateArray = [0,0,0,0,0,0,0,0,0,0,0,0];
        for(let i=0;i<binaryNumbersArray.length;i++){
            let array = binaryNumbersArray[i].split('');
            for(let j=0;j<array.length;j++){
                if(array[j]==='1'){
                    gammaRateArray[j]++;
                }
                if(array[j]==='0'){
                    epsilongammaRateArray[j]++
                }
            }
        }
        gammaRate = gammaRateArray.map((val,i)=> val>epsilongammaRateArray[i]?1:0).join('');
        epsilongammaRate = epsilongammaRateArray.map((val,i)=> val>gammaRateArray[i]?1:0).join('');
        console.log(gammaRate)
        console.log(epsilongammaRate)
        console.log(parseInt(gammaRate,2)*parseInt(epsilongammaRate,2))
        
    })
}

day3Part1()

const day3Part2 = () => {
    fs.readFile('./day3_input.txt',(err,data)=>{
        const binaryNumbers = data.toString();
        const binaryNumbersArray = binaryNumbers.split('\n');
        let oxygenScrubberRating = getScrubberRating(binaryNumbersArray,'oxygen')
        let co2ScrbubberRating = getScrubberRating(binaryNumbersArray,'co2')
        console.log(oxygenScrubberRating)
        console.log(co2ScrbubberRating)
        console.log(parseInt(oxygenScrubberRating,2)*parseInt(co2ScrbubberRating,2))
    })
}

const getScrubberRating = (arr,type) => {
    const length = arr[0].length
    let filteredArr = [...arr]
    for(let i=0;i<length;i++){
        let count_0 = 0;
        let count_1 = 0;
        for(let j=0;j<filteredArr.length;j++){
            if(filteredArr[j].substr(i,1)==='0'){
                count_0++;
            }
            else{
                count_1++;
            } 
            if(count_0>filteredArr.length/2||count_1>filteredArr.length/2){
                break;
            }               
        }
        if(type==='oxygen'){
            filteredArr = filteredArr.filter((element)=>element.substr(i,1)===(count_1>=count_0?'1':'0'))
        }
        else{
            filteredArr = filteredArr.filter((element)=>element.substr(i,1)===(count_1>=count_0?'0':'1'))
        }
        if(filteredArr.length===1){
            return filteredArr
        }
    }
    return filteredArr
}

day3Part2()