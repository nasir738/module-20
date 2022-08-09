// function factiorial(number) {
//     let num = 1;
//     let result = 1;
//     while (num <= 7) {
//         result = result * num;
//         number++;
//     }
//     return result;
// }
// console.log(number);

function getfactorial(number) {
    let factiorial = 1;
    for (let i = 1; i <= 7; i++){
        factiorial = factiorial * i;
        console.log(i,factiorial);
    }
    return factiorial;
}
const factiorial = getfactorial(7);
// console.log('factorial result is', factiorial);