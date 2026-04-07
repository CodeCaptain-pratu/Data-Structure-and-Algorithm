/**
 * @param {number} width
 * @param {number} height
 */
var Robot = function(width, height) {
    this.pos=[];
    this.moved=false;
    this.idx=0;
    //bottom (left to right)
    for(let x=0;x<width;x++){
        this.pos.push([x,0,0]);
    }
    //right (bottom to top)
    for(let y=1;y<height;y++){
        this.pos.push([width-1,y,1]);
    }
    //top (right to left)
    for(let x=width-2;x>=0;x--){
        this.pos.push([x,height-1,2]);
    }
    //left (top to bottom)
    for(let y=height-2;y>0;y--){
        this.pos.push([0,y,3]);
    }
    this.pos[0][2]=3;
};

/** 
 * @param {number} num
 * @return {void}
 */
Robot.prototype.step = function(num) {
    this.moved=true;
    this.idx=Math.floor((this.idx+num)%this.pos.length);
};

/**
 * @return {number[]}
 */
Robot.prototype.getPos = function() {
    return [this.pos[this.idx][0],this.pos[this.idx][1]];
};

/**
 * @return {string}
 */
Robot.prototype.getDir = function() {
    if(!this.moved){
        return "East";
    }
    let dir=this.pos[this.idx][2];
    if(dir===0){
        return "East";
    }else if(dir===1){
        return "North";
    }else if(dir===2){
        return "West";
    }
    return "South";
};

/** 
 * Your Robot object will be instantiated and called as such:
 * var obj = new Robot(width, height)
 * obj.step(num)
 * var param_2 = obj.getPos()
 * var param_3 = obj.getDir()
 */
