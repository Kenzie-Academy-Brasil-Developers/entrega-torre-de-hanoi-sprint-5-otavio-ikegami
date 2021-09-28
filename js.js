let moves=0;
function movimentoDisco (){
    let cliques=0;
    let torreResultado=document.getElementsById('torre2')
    let torres = document.getElementById('torres#colcarid#').click(function(){
        cliques++;
        if(cliques===1){primeiraTorre}
        else if(cliques===2){segundaTorre}
    })
    let discoSaida =torreDisco.lastChild;
    if(torreAlvo.childElementCount!==0){
        let discoComp = torreAlvo.lastChild;
        if (discoSaida.clientWidth>discoComp.clientWidth){
            alert('Escolha inválida!')
        }
    }
    if (torreDisco.childElementCount===0){
        alert('Escolha inválida!')
    }
    else{
        torreAlvo.appendChild(disco);
        moves++;
    }
    if(torreResultado.childElementCount===5){
        document.getElementById('').appendChild(document.createTextNode("Parabéns você ganhou, desta vez!"))
    }

} 
document.getElementById('').appendChild(document.createTextNode(moves))




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