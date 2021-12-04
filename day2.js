const fs = require('fs');

const day2Part1 = () =>{
    fs.readFile('./day2_input.txt',(err,data)=>{
        const commands = data.toString();
        const commandsArray = commands.split('\n');
        let horizontalPosition = 0;
        let depth = 0;
        for(let i=0;i<commandsArray.length;i++){
            const step = Number(commandsArray[i].match(/\d+/));
            const command = commandsArray[i].match(/\w+/);
            if(command){
                switch (command[0]) {
                    case 'forward':
                        horizontalPosition += step;
                        break;
                    case 'up':
                        depth -= step
                        break;
                    case 'down':
                        depth += step
                        break;
                    default:
                        break;
                }
            }
        }
        console.log(horizontalPosition)
        console.log(depth)
        console.log(depth*horizontalPosition)
    })
}

day2Part1()

const day2Part2 = () =>{
    fs.readFile('./day2_input.txt',(err,data)=>{
        const commands = data.toString();
        const commandsArray = commands.split('\n');
        let horizontalPosition = 0;
        let depth = 0;
        let aim = 0;
        for(let i=0;i<commandsArray.length;i++){
            const step = Number(commandsArray[i].match(/\d+/));
            const command = commandsArray[i].match(/\w+/);
            if(command){
                switch (command[0]) {
                    case 'forward':
                        horizontalPosition += step;
                        depth += aim*step;
                        break;
                    case 'up':
                        aim -= step
                        break;
                    case 'down':
                        aim += step
                        break;
                    default:
                        break;
                }
            }
        }
        console.log(horizontalPosition)
        console.log(depth)
        console.log(depth*horizontalPosition)
    })
}

day2Part2()