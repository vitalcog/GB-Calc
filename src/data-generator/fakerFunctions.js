import faker from 'faker';

export function generateFakeSavings() { // will generate an object with simulated values

    let fp = faker.random.number({ // starting value to represent "competitor" price
        'min': 800,
        'max': 2200
    })
    let sv = faker.random.number({ // generates a number 2-8 to represent our savings percentage
        'min': 2,
        'max': 8
    })
    let bp = fp - ( (sv/100) * fp); // finds "our" price based on the generated number for savings

    return {
        fakePrice: fp,
        savings: sv,
        betterPrice: bp,
    }
}