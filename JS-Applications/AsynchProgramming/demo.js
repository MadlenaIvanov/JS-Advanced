function asyncDemo() {
    console.log('first');

     setTimeout(() => {
         console.log('inside timeout')
     }, 2000);

    console.log('second');
}

asyncDemo();