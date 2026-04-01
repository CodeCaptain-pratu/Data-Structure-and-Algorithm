/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(position, health, direction) {
    let robots=[];
    for(let i=0;i<position.length;i++)
    {
        robots.push({
            pos:position[i],
            health:health[i],
            dir:direction[i],
            index:i
        });
    }
    robots.sort((a,b)=>a.pos-b.pos);
    let stack=[];
    let survivors=Array(position.length).fill(null);
    for(let robot of robots)
    {
        if(robot.dir==='R')
        {
            stack.push(robot);
        }
        else
        {
            while(stack.length>0)
            {
                let lastrobot=stack[stack.length-1];
                if(lastrobot.health > robot.health)
                {
                    lastrobot.health--;
                    robot=null;
                    break;
                }
                else if(lastrobot.health<robot.health)
                {
                    robot.health--;
                    stack.pop();
                }
                else
                {
                    stack.pop();
                    robot=null;
                    break;
                }
            }
            if(robot)
            {
                survivors[robot.index]=robot.health;
            }
        }
    }
    for(let robot of stack)
    {
        survivors[robot.index]=robot.health;
    }
    return survivors.filter(health=>health!==null);

};
