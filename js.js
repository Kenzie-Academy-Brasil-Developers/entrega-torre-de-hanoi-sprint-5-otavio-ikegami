function movimentoDisco (){
    let cliques=0;
    let moves=0;
    let torreResultado=document.getElementsById('torre2')
    let torres = document.getElementById('torres#colcarid#').click(function(){
        cliques++;
        if(cliques===1){primeiraTorre}
        else if(cliques===2){segundaTorre}
    })
    if (torreDisco.childElementCount===0 // || se o alvo for menor 
        ){alert('Escolha inválida!')}
    else{
        let disco =torreDisco.lastChild;
        torreAlvo.appendChild(disco);
        moves++;
    }
    if(torreResultado.childElementCount===5){
        //ganhou
    }
}




//torre0 torre1 torre2

function primeiraTorre (){
    let torres = document.getElementById('torres#colocarid#');
    torres.addEventListener('click', function(x) {
    let torreDisco = document.getElementById(x.target.id);
    return torreDisco;
})}
function segundaTorre (){
    let torres = document.getElementById('torres#colocarid#');
    torres.addEventListener('click', function(y) {
    let torreAlvo = document.getElementById(y.target.id);
    return torreAlvo;
})}