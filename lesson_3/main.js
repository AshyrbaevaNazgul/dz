var opros = prompt('Выберете одно направление(fronted,backend,devops)')
switch(opros){
    case'fronted':
    console.log('html, css, javascript, react, redux')
    break;
    case'backend':
    console.log('c#/java/python/go/php, databases, servers, network, terminal')
    break
    case'devops':
    console.log('cloud, bash, terraform, CI\CD')
    break;
    default:
        console.warn('nope')
}

var massiv = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]
var card = 0
for(mass of massiv){
    if(mass[0] === "4"){
        card++
    } 
    console.log('Карт VISA:'+ card )
}

var remark = [5,4,3,5,4,3,3,4,5,5,2,5,3,4]
var total = 0
for(mark of remark){
    total += mark/14
}
console.log('Total:', Math.round(total))
Math.round(total)