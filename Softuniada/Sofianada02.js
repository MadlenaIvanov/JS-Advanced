function coffeeCup(numText) {
    console.log(numText);

    let number = Number(numText[0]);
    let text = numText[1];

    let width = 3 * number + 6;
    let height = 3 * numText + 1;

    for (let i = 0; i < number; i++) {
        console.log('~ ~ ~');       
    }

    let lineRim = '';
    for (let i = 0; i < width - 1; i++) {
        lineRim += '=';
    }
    console.log(lineRim);

    let rowsForName = height - number - 3;

    // for (let i = 0; i < width + 1; i++) {
    //     const element = array[i];
        
    // }

    for (let i = 0; i < number; i++) {
        
        
        
    }



    let bottomCup = '';
    for (let i = 0; i < width - 1; i++) {
        bottomCup += '-';
    }
    console.log(bottomCup);


}
coffeeCup([3, 'Java']);