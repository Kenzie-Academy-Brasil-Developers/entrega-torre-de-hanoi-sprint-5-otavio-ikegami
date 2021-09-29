//CRIANDO DISPLAY
const body = document.querySelector('body')
const button = document.getElementById('btn');

    let createP = (texto, destino) =>{
        const p = document.createElement('p');

        p.innerText = texto;

        return destino.appendChild(p);
    }


     let createDiv = (classe, destino, quantidade) => {
        
        for(let i = 0; i < quantidade; i++){
            
            const div = document.createElement('div');
    
            div.classList.add(classe)
    
            div.setAttribute('id', classe + i)
        
            destino.appendChild(div);
        }
     }



    let displayCreate = () => {
    const main = document.createElement('main');
    main.classList.add('main');
    body.appendChild(main);

    const reset = document.createElement('button');
    reset.innerText = 'Reset';
    reset.classList.add('reset')
    body.appendChild(reset);

    createDiv('contador', main, 1);
    createDiv('resultado', main, 1);
    
    createDiv('torre', main, 3);
    const torre0 = document.querySelector('#torre0');
    createP('torre 1', torre0);

    const torre1 = document.querySelector('#torre1');
    createP('torre 2', torre1);

    const torre2 = document.querySelector('#torre2');
    createP('torre 3', torre2);

    createDiv('disco',torre0, 3);

    return button.remove();
    }


    button.addEventListener('click', displayCreate);

    let resetGame = () =>{
        const corpo = document.querySelector('.main');
        corpo.remove();
        displayCreate();
    }

    const reset = document.querySelector('.reset');
    reset.onclick = resetGame;
//FUNÇÃO DE MOVIMENTO

let moves=0;
function movimentoDisco (){
    let cliques=0;
    let torreResultado=document.getElementsById('torre2')
    let torres = document.getElementById('torres#colcarid#').click(function(){
        cliques++;
        if(cliques===1){
            primeiraTorre();
        }
        else if(cliques===2){
            segundaTorre();
            return cliques=0;
        }
    })
    let discoSaida =torreDisco.lastChild;
    discoSaida.classList.add("selected");
    if(torreAlvo.childElementCount!==0){
        let discoComp = torreAlvo.lastChild;
        if (discoSaida.clientWidth>discoComp.clientWidth){
            alert('Escolha inválida!')
            discoSaida.classList.remove("selected");
        }
    }
    if (torreDisco.childElementCount===0){
        alert('Escolha inválida!')
        discoSaida.classList.remove("selected");
    }
    else{ 
        torreAlvo.appendChild(disco);
        moves++;
        discoSaida.classList.remove("selected");
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


//TESTE DE EXECUÇÃO
  torre0.onclick = (x) =>{
      console.log(x.currentTarget);
    return x.currentTarget
  } 
