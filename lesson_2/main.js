//DZ 1

var sum = prompt('USD==>KG')
var inkg = 0
if(sum){
inkg = sum * 86
alert(inkg)
}

//DZ 2

var disel = prompt('Введите топливо')
var money = prompt('Введите стоимость')

if(disel ==='АИ-92'){
    alert(money/12)
}else if(disel ==='АИ-95'){
    alert(money/17)
}else if(disel ==='АИ-98'){
    alert(money/21)
}if(disel ==='Газ'){
    alert(money/45)
}if(disel ==='ДТ'){
    alert(money/24)
}else{
    console.error('...')
}

//DZ 3
var planet = prompt('Введите любое число от 1 до 9')
if(planet == '1'){
    console.log('Меркурий')
}else if(planet == '2'){
    console.log('Венера')
}else if(planet == '3'){
    console.log('Земля')
}else if(planet == '4'){
    console.log('Марс')
}else if(planet == '5'){
     console.log('Юпитер')
}else if(planet == '6'){
     console.log('Сатурн')
}else if(planet == '7'){
     console.log('Уран')
}else if(planet == '8'){
    console.log('Нептун')
}else if(planet == '9'){
     console.log('Плутон')
}else{
    console.error('Пишите строго от 1 до 9')
}





