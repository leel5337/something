for(let i = 0; i < 10; i++){
    if(i === 2) {
        continue;
   }
    console.log(i);
}

/* 위의 식과 아래의 식은 같은 식이
for(let i = 0; i < 10; i++){
    if(i === 2) continue;
    console.log(i);
}
*/

for(let i = 0; i < 10; i++){
    if(i === 2) continue;
    console.log(i);
    if ( i === 5) break;
}