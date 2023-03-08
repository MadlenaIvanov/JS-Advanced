//---City Recorc

// function cityRecords(name, populataion, treasury){
//      const city = {
//          name: name,
//          populataion: populataion,
//          treasury: treasury,
//          taxRate: 10,
//          collectTaxes() {
//              this.treasury += this.populataion * this.taxRate;
//          },
//          applyGrowth(percent) {
//              this.populataion += Math.floor(this.populataion * percent / 100);
//          },
//          applyRecession(percent) {
//             this.treasury += Math.ceil(this.treasury * percent / 100);

//          }
//      };

//      return city;
//  }

// const result = cityRecords('Tortuga', 7000, 15000);
//  console.log(result);

//  result.taxRate = 15;
//  result.collectTaxes();
//  console.log(result);



//  const myObj = {
//      name: 'Peter',
//      age: 23,
//      hairColor: 'brown'
//  };

//  console.log(myObj.age);

//  myObj.age = 24;
//  console.log(myObj.age);
//  console.log(myObj['age']);

//  const propName = 'age';
//  console.log(myObj[propName]);

//  myObj.lastName = 'Johnson';
//  console.log(myObj);

//  myObj['height'] = 176;
//  console.log(myObj);

//  let {age} = myObj;
//  console.log(age);

// const myAssocArray = {
//      'first': 5,
//      'second': 10,
//      'third': 15
// };

// for(let key in myAssocArray) {
//     console.log(key);
// }

// const keys = Object.keys(myAssocArray);

// for(let key in myAssocArray) {
//     console.log(key)
// }
 
// const values = Object.values(myAssocArray);

// for(let value of values) {
//     console.log(value)
// }

// const entries = Object.entries(myAssocArray);

// for(let entry of entries) {
//     // console.log(entry);

//     console.log('key', entry[0]);
//     console.log('value', entry[1]);
// }

// for(let [key, value] of entries) {

//     console.log('key', key);
//     console.log('value', value);
// }

//---Town Population
// function population(townsArray) {
//     const towns = {};

//     for (let townAsString of townsArray) {

//         let tokens = townAsString.split(' <-> ');
//         let name = tokens[0];
//         let populataion = Number(tokens[1]);

//         if(towns[name] == undefined) {
//             towns[name] = populataion;
//         } else {
//             towns[name] += populataion;            
//         }
//     }

//     for (let name in towns) {
//         console.log(`${name} : ${towns[name]}`);
//     }
// }

// population(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']);

// const myObj = {
//       firstName: 'Peter',
//       lastName: 'Johnson',
//       sayHi() {
//           return 'Hi';
//       },
//       fullName: function() {
//           return `${this.firstName} ${this.lastName}`;
//       }
// };

// console.log(myObj.fullName());

// const sayHi = myObj.sayHi;
// console.log(sayHi());
// const fullName = myObj.fullName;

// const person = {
//     firstName: 'George',
//     lastName: 'Smith',
// };

//  person.fullName = fullName;
//  console.log(person.fullName());

//object factory
// function factory(library, orders) {
//     const result = [];

//     for (let order of orders) {
//         const composed = Object.assign({}, order.template);

//         for(let part of order.parts) {
//             composed[part] = library[part];
//         }

//          result.push(composed);
//     }

//     return result;
// }

// const library = {

//     print: function () {    
//     console.log(`${this.name} is printing a page`);    
//     },    
//     scan: function () {    
//     console.log(`${this.name} is scanning a document`);    
//     },    
//     play: function (artist, track) {    
//     console.log(`${this.name} is playing '${track}' by ${artist}`);    
//     },    
//     };
    
//     const orders = [{    
//     template: { name: 'ACME Printer'},    
//     parts: ['print']},    
//     {template: { name: 'Initech Scanner'},    
//     parts: ['scan']},    
//     {template: { name: 'ComTron Copier'},    
//     parts: ['scan', 'print']},    
//     {template: { name: 'BoomBox Stereo'},    
//     parts: ['play']},    
//     ];

//     const products = factory(library, orders); 
//     console.log(products); 

//--Calorie Object
// function solve(arr) {
//     let result = {};
//     let name = '';
//     let calories = 0;

//     for (let i = 0; i < arr.length; i++) {

//         if(i % 2 == 0) {
//              name = arr[i];

//         } else {
//             calories = Number(arr[i]);
//         }

//         result[name] = calories;
//     }
//     console.log(result);
// }

// solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

//     for (let name in towns) {
//         console.log(`${name} : ${towns[name]}`);
//     }
// }

// population(['Istanbul <-> 100000',
// 'Honk Kong <-> 2100004',
// 'Jerusalem <-> 2352344',
// 'Mexico City <-> 23401925',
// 'Istanbul <-> 1000']);

//--Const Crew
// function solve(worker) {
    
//     if(worker.dizziness){
//         worker.levelOfHydrated += worker.weight*0.1*worker.experience;
//         worker.dizziness = false;
//     }

//     return worker;
// }

// console.log(solve({ 
//     weight: 80,
//     experience: 1,
//     levelOfHydrated: 0,
//     dizziness: true 
// }
// ))

//--Car Factory
// function solve(input) {

//     function getEngine(power) {

//         let engines = [{
//                 power: 90,
//                 volume: 1800
//             },
//             {
//                 power: 120,
//                 volume: 2400
//             },
//             {
//                 power: 200,
//                 volume: 3500
//             }
//         ].sort((a, b) => a.power - b.power);

//         let result;

//         result = engines.find(x => x.power >= power);

//         return result;
//     }

//     function getCarriage(carriage, color) {

//         let theCarriage = {
//             type: carriage,
//             color: color
//         };

//         return theCarriage;
//     }

//     function getWheels(wheelsize) {
//         let wheel = wheelsize % 2 === 0 ? wheelsize - 1 : wheelsize;

//         return [wheel, wheel, wheel, wheel];
//ORRRRRRRRRRRRRR Array(4).fill(wheel, 0, 4);
//     }

//     let car = {
//         model: input.model,
//         engine: getEngine(input.power),
//         carriage: getCarriage(input.carriage, input.color),
//         wheels: getWheels(input.wheelsize)
//     };

//     return car;
// }

function solve(car) {
    let result = {};

    result['model'] = car.model;

    if(car.power <= 90) {
        //  myObj['height'] = 176;
        result['engine'] = { power: 90, volume: 1800 };
    } else if(car.power > 90 && car.power <= 120) {
        result['engine'] = { power: 120, volume: 2400 };
    } else if(car.power > 120  && car.power <= 200){
        result['engine'] = { power: 200, volume: 3500 };
    }

    result['carriage'] = {
        type: car.carriage, 
        color: car.color,
    };

    if(Math.floor(car.wheelsize) % 2 == 0) {
        car.wheelsize = car.wheelsize - 1;
         result['wheels'] = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];

    } else {
        result['wheels'] = [car.wheelsize, car.wheelsize, car.wheelsize, car.wheelsize];
    }

    return result;
}

console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
))