export function getNumberFormat(num: number) {
    
    var units = ["M","B","T","Q"]
    var unit: number = Math.floor((num / 1.0e+1).toFixed(0).toString().length)
    var r: number = unit%3
    let right: string = Number(('1.0e+'+(unit-r))).toFixed(2);
    var x: number =  Math.abs(Number(num))/parseFloat(right);
    return x.toFixed(2)+ ' ' + units[Math.floor(unit / 3) - 2]
}