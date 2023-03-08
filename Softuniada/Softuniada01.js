function nod(number) {
    let number1 = Number(number[0]);
    let number2 = Number(number[1]);

    let biggerNumber = 0;
    if (number1 > number2) {
        biggerNumber = number1;
    } else {
        biggerNumber = number2;
    }

    let nod1 = [];
    let nod2 = [];

        for (let i = 1; i <= biggerNumber; i++) {
            if (number1 % i == 0) {
                nod1.push(i);
            }

            if (number2 % i == 0) {
                nod2.push(i);
            }
        }

    let overAllNoK = number1 * number2;

    let nok1 = [];
    let nok2 = [];

    for (let i = 1; i <= overAllNoK; i++) { 
        
        nok1.push(number1 * i);
        nok2.push(number2 * i);      
    }

    let commonNod = nod1.filter(x => nod2.includes(x));
    let biggestNod = Number(commonNod.slice(-1));

    let commonNok = nok1.filter(x => nok2.includes(x));
    let smallestNok = Number(commonNok[0]);

    let result = biggestNod + smallestNok;

    console.log(result);
    console.log(commonNok);

}

nod([8, 12]);
nod([18, 20]);