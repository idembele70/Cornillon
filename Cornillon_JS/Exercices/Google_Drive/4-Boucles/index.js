mainLoop: while (true) {
    
  firstFor:  for (let i = 0; i < 4; i++) {
        console.log('1er for');
        if(i == 2) break mainLoop;

        for (let j = 0; j < 3; j++) {
            console.log('\t 2eme for');
            if (j ==1) continue firstFor;
            console.log('\t 2eme for aprés continue');
        }
    }   
}

console.log('Fin de Programme');