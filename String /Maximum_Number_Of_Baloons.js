/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    let b=0, a=0, l=0, o=0, n=0;
    for(let ch of text){
        if(ch==="b"){
            b++;
        }else if(ch==="a"){
            a++;
        }else if(ch==="l"){
            l++;
        }else if(ch==="o"){
            o++;
        }else if(ch==="n"){
            n++;
        }
    }
    return Math.min(b,a,Math.floor(l/2),
                    Math.floor(o/2), n);
};
