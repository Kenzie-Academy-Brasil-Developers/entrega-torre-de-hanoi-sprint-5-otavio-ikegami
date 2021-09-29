//CRIANDO DISPLAY
const body = document.querySelector('body')
//const button = document.getElementById('btn');

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
        //createP('torre 1', torre0);

        const torre1 = document.querySelector('#torre1');
       // createP('torre 2', torre1);

        const torre2 = document.querySelector('#torre2');
        //createP('torre 3', torre2);

        createDiv('disco',torre0, 3);

        //button.remove()
    }

    
    //FUNÇÃO DE MOVIMENTO
    //FUNÇÃO ALTERNATIVA
    let discoSelecionado = '';
    let discoTamanho = 0;
    let moves = 0;
    let clique = true;


    let moviment = (ev) => {


        if(clique){
            discoSelecionado = ev.currentTarget.lastChild;
            discoSelecionado.classList.add('selected');

            discoTamanho = discoSelecionado.offsetWidth;

            clique = false;
            console.log(clique)
        }
        else if(!clique && ev.currentTarget.lastChild === null || discoTamanho < ev.currentTarget.lastChild.clientWidth ){
            let torre = ev.currentTarget;
            torre.appendChild(discoSelecionado);
            discoSelecionado.classList.remove('selected');
            
            clique = true;
            console.log(clique)
            if(document.getElementById('torre2').childElementCount===3){
                document.getElementById('resultado').appendChild(document.createTextNode("Parabéns você ganhou, desta vez!"))
                document.getElementById('contador').appendChild(document.createTextNode(moves))
        
            }

            return moves++;
        }
    }

    //FUNÇÃO RESET
    let resetGame = () =>{
        const corpo = document.querySelector('.main');
        corpo.remove();
        displayCreate();
        reset.remove();
    }

    //CHAMANDO FUNÇÕES
    //button.addEventListener('click', displayCreate)
    window.onload = displayCreate();

    document.querySelector('#torre0').addEventListener("click", moviment);
    document.querySelector('#torre1').addEventListener("click", moviment);
    document.querySelector('#torre2').addEventListener("click", moviment);

    const reset = document.querySelector('.reset');
    reset.onclick = resetGame;
    
    
    //torre0
    /*document.getElementById('torre0').addEventListener("click", () =>{
    //adicionar disco
    if(discoTamanho !== 0 && 
        discoTamanho < document.getElementById('torre0').lastChild.clientWidth){
        document.getElementById('torre0').appendChild(discoSelecionado);
        document.getElementById('torre0').lastChild.classList.remove("selected");
        moves++;
    }
    //selecionar disco
    if(document.getElementById('torre0').childElementCount>1){
        discoSelecionado=document.getElementById('torre0').lastChild;
        discoTamanho=document.getElementById('torre0').offsetWidth;
        document.getElementById('torre0').lastChild.classList.add("selected");
    }
    //condição de vitória 
    if(document.getElementById('torre2').childElementCount===3){
        document.getElementById('resultado').appendChild(document.createTextNode("Parabéns você ganhou, desta vez!"))
        document.getElementById('contador').appendChild(document.createTextNode(moves))

    }
    })
    //torre1
    document.getElementById('torre1').addEventListener("click", () =>{
    //adicionar disco
    if(discoTamanho!==0 && 
        discoTamanho<document.getElementById('torre1').lastChild.clientWidth){
        document.getElementById('torre1').appendChild(discoSelecionado);
        document.getElementById('torre1').lastChild.classList.remove("selected");
        moves++;
    }
    //selecionar disco
    if(document.getElementById('torre1').childElementCount>1){
        discoSelecionado=document.getElementById('torre1').lastChild;
        discoTamanho=document.getElementById('torre1').offsetWidth;
        document.getElementById('torre1').lastChild.classList.add("selected");
    }
    //condição de vitória 
    if(document.getElementById('torre2').childElementCount===3){
        document.getElementById('resultado').appendChild(document.createTextNode("Parabéns você ganhou, desta vez!"))
        document.getElementById('contador').appendChild(document.createTextNode(moves))

    }
    })
    //torre2
    document.getElementById('torre2').addEventListener("click", () =>{
    //adicionar disco    
    if(discoTamanho!==0 && 
    discoTamanho<document.getElementById('torre2').lastChild.clientWidth){
        document.getElementById('torre2').appendChild(discoSelecionado);
        document.getElementById('torre2').lastChild.classList.remove("selected");
        moves++;
    }
    //selecionar disco
    if(document.getElementById('torre2').childElementCount>1){
        discoSelecionado=document.getElementById('torre2').lastChild;
        discoTamanho=document.getElementById('torre2').offsetWidth;
        document.getElementById('torre2').lastChild.classList.add("selected");
    }
    //condição de vitória 
    if(document.getElementById('torre2').childElementCount===3){
        document.getElementById('resultado').appendChild(document.createTextNode("Parabéns você ganhou, desta vez!"))
        document.getElementById('contador').appendChild(document.createTextNode(moves))

    }
    })
    
    return button.remove();
}*/

    

