
 let person1 = {name: "Mani" , currentAge : 30 , maxAge: 80 , amountPerWeek: 8}
 let person2 = {name: "Benyamin" , currentAge : 34 , maxAge: 100 , amountPerWeek: 10}
 let person3 = {name: "Mana" , currentAge : 38 , maxAge: 90 , amountPerWeek: 4}

 function totalPotatoConsumption(person) {
    let totalPotato = 0;
    totalPotato =  (person.maxAge - person.currentAge) * (375 / 7) * person.amountPerWeek;
     return (`${person.name}  is ${person.currentAge} years old and will live ${person.maxAge} and will take in ${totalPotato} numbers in his life`)
}
console.log(totalPotatoConsumption(person1))
console.log(totalPotatoConsumption(person2))
console.log(totalPotatoConsumption(person3))


