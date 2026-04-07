/**
 * @param {number[][]} men
 * @param {number[][]} women
 * @returns {number[]}
 */
class Solution {
    stableMarriage(men, women) {
        // code here
        let n=men.length;
        let wifeOfMan=new Array(n).fill(-1);
        let husbandOfWoman=new Array(n).fill(-1);
        let rank=Array.from({length:n},()=> new Array(n));
        for(let w=0;w<n;w++){
            for(let i=0;i<n;i++){
                rank[w][women[w][i]]=i;
            }
        }
        let freeMan=[];
        let nextProposal=new Array(n).fill(0);
        for(let i=0;i<n;i++){
            freeMan.push(i);
        }
        while(freeMan.length>0){
            let m=freeMan.shift();
            let w=men[m][nextProposal[m]];
            nextProposal[m]++;
            if(husbandOfWoman[w]===-1){
                husbandOfWoman[w]=m;
                wifeOfMan[m]=w;    
            }else{
                let m2=husbandOfWoman[w];
                if(rank[w][m]<rank[w][m2]){
                    husbandOfWoman[w]=m;
                    wifeOfMan[m]=w;
                    wifeOfMan[m2]=-1;
                    freeMan.push(m2);
                }else{
                    freeMan.push(m);
                }
            }
        }
        return wifeOfMan;
    }
}
