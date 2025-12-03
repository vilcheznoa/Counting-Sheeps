let list1 = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true]
let list2 = [false, false, false]

function countSheeps(list) {
    let numberSheep = 0;
    for (let sheep = 0; sheep < list.length; sheep++) {
        if (list[sheep] === true) { numberSheep++ }
    }
    if (numberSheep > 0) {
        console.log("There are " + numberSheep + " sheep in total");
        return;
    }
    if (numberSheep === 0) {
        console.log("UPS!!! Wolfs eaten Sheeps");
        return;
    }
}

console.log(countSheeps(list1))
console.log(countSheeps(list2))

