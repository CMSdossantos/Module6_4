const getYieldForPlant =   obj => obj.yield;
const getYieldForCrop =  (obj,fac) => {
    
    if(fac) {
        let env = fac.sun;
        return obj.crop.yield * obj.numCrops / 100 * (100 +  obj.crop.factors.sun[env])
    } else {
        return obj.crop.yield * obj.numCrops ;
    }
};

const getTotalYield = (obj) => Array.from(obj).reduce((acc,dt) => acc + getYieldForCrop(dt), 0);
const getCostsForCrop = (obj) =>  obj.crop.cost * obj.numCrops;
const getRevenueForCrop = (obj,fac) => obj.salesPrice * (getYieldForCrop(obj,fac)); 
 
const getProfitForCrop = (obj,fac) =>  getRevenueForCrop(obj,fac) - getCostsForCrop(obj);  
const getTotalProfit = (obj,fac) => Array.from(obj).reduce( (acc, curr) => acc + getTotalProfit(curr,fac) ,0 );  


module.exports = {
    getYieldForPlant, getYieldForCrop, getTotalYield,
    getCostsForCrop, getRevenueForCrop, getProfitForCrop,
    getTotalProfit,
}
