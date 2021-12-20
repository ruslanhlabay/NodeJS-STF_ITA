
function quad( a, b, c ) {
    let d, x1, x2
    d = b*b - 4 * a * c
    console.log('a='+a+'  b='+b+'  c='+c+ '  D='+ d )
    if (d > 0) {
        x1 = (-b+Math.sqrt(d))/(2*a)
        x2 = (-b-Math.sqrt(d))/(2*a)
        return 'x1='+String(x1)+'  x2='+String(x2)
    } 
    if (d === 0) {
        x1 =  -b / (2 * a)
        return 'x1='+String(x1)
    } 
	
	return 'Рішення цього рівняння не існує' 
}

console.log(quad(1,4,2))
console.log(quad(1,2,1))
console.log(quad(2,2,2))
