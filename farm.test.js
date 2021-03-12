const { getYieldForPlant, getYieldForCrop, getTotalYield, getCostsForCrop,
        getRevenueForCrop, getProfitForCrop, getTotalProfit } = require("./farm");

const corn = {
    name: "corn",
    yield: 30,
    cost: 10,
    factors: {
        sun: {
        low: -50,
        medium: 0,
        high: 50,
              },
    },
};

const pumpkin = {
    name: "pumpkin",
    yield: 50,
    cost: 20,
    factors: {
        sun: {
        low: -50,
        medium: 0,
        high: 50,
              },
    },
};

const crops = [
    { crop: corn, numCrops: 5, salesPrice: 2},
    { crop: pumpkin, numCrops: 2, salesPrice: 3 },
];
          
const environmentFactors = {
    sun: "low",
};

describe("getYieldForPlant", () => {
    test("Get yield for plant with no environment factors", () => {
        expect(getYieldForPlant(corn)).toBe(30);
    });
});

describe("getYieldForCrop", () => {
    const corn = {
        name: "corn",
        yield: 3,
        factors: {
            sun: {
            low: -50,
            medium: 0,
            high: 50,
                  },
        },
    };
    const input = {
        crop: corn,
        numCrops: 10,
    };

    test("Get yield for crop, simple", () => {
        
        expect(getYieldForCrop(input)).toBe(30);
        
    });

    test("get yield for crop + low sun", () => {
        expect(getYieldForCrop(input, environmentFactors)).toBe(15);
    }) 


});

describe("getTotalYield", () => {
    test("Calculate total yield with multiple crops", () => {

        expect(getTotalYield( crops )).toBe(250); 
    });

    test("Calculate total yield with 0 amount", () => {
        const cropsEmpty = [];
        expect(getTotalYield({ cropsEmpty })).toBe(0);
    });
}); 



describe("getCostsForCrop", () => {

    test("costs is a number", () => {
        expect(getCostsForCrop( crops[0])).not.toBeNaN()
    })
})

describe("getRevenueForCrop", () => {

    test("revenue return value is a number", () => {
        expect(getRevenueForCrop(crops[0])).not.toBeNaN();
    })

    test("happypath, return revenue zonder factors ", () => {
        expect(getRevenueForCrop(crops[0])).toBe(300);
    })

    test("happypath, return revenue met factors ", () => {
        expect(getRevenueForCrop(crops[0],environmentFactors )).toBe(150);
    })

})

describe("getProfitForCrop", () => {

    test("happypath, return correct profit ", () => {
        expect(getProfitForCrop(crops[0])).toBe(250);
    })

    test("get total of profits", () => {
        expect(getTotalProfit(crops)).toBe(0)
    })
    
})
