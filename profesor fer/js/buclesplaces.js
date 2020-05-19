let lugares = ['Acapulco','Japon','Museo de cera','Muralla china','six flags'];

console.log('Utilizando for')
for(var i=0; i<lugares.length;i++){
    console.log(`Mi destino que deseo visitar es: ${lugares[i]}`);
}

console.log('\nUtilizando for of');
for(let l of lugares){
    console.log(`Mi destino que deseo visitar es: ${l}`);
}

console.log('\nUtilizando while');
let j=0;
while(j<lugares.length){
    console.log(`Mi destino que deseo visitar es: ${lugares[j]}`);
    j++
}

console.log('\nUtilizando do while');
let z=0;
do{
    console.log(`Mi destino que deseo visitar es: ${lugares[z]}`);
    z++
}while(z<lugares.length);
