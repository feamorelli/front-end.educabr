function fat(n) {
    let c = 1
    for(let f = n;f>0;f--) {
    c=c*f
    }
    return c
}
console.log(fat(5))