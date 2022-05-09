let num = [1,4,6]
num[3]=7
num.push(9)
/*for (let p=0; p<num.length; p++) {
    console.log(num[p])
}
*/

for(let p in num) {
    console.log(num[p])
}
