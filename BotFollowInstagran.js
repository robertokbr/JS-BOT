let contador = 0;
let arr = document.querySelectorAll('.L3NKy');
arr.forEach((v, i)=>{

//definir intervalo para nao ser banido 
    setTimeout( 
        ()=>{

            if(!v.classList.contains('_8A5w5')){
                v.click();
                contador++
                console.log('numeros de usuarios seguidos: '+contador);
            } else {

                console.log('voce já segue este usuario');
            }


        }
        
        
        
        , i * 5000)


}   );



contador.appendChild