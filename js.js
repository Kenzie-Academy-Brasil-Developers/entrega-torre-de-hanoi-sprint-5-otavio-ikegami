//CRIANDO DISPLAY
const body = document.querySelector('body')

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
        
        createDiv('torre', main, 3);
        const torre0 = document.querySelector('#torre0');

        const torre1 = document.querySelector('#torre1');

        const torre2 = document.querySelector('#torre2');
        createDiv('disco',torre0, 3);

    }

    window.onload = displayCreate();
    
    //FUNÇÃO DE MOVIMENTO
    const contador = document.querySelector('.contador');
    let discoSelecionado = '';
    let discoTamanho = 0;
    let moves = 0;
    let clique = true;


    let moviment = (ev) => {


        if(clique){
            discoSelecionado = ev.currentTarget.lastChild;
            discoSelecionado.classList.add('selected');

            discoTamanho = discoSelecionado.offsetWidth;

            return clique = false;
        }
        else if(!clique){
            if(ev.currentTarget.lastChild === null || discoTamanho < ev.currentTarget.lastChild.clientWidth){
                let torre = ev.currentTarget;
            torre.appendChild(discoSelecionado);
            discoSelecionado.classList.remove('selected');
            
            clique = true;
            if(document.getElementById('torre2').childElementCount===3){
            location.replace('vitoria.html')
            
            }
            moves++;
            return  contador.innerText = 'Movimentos:' + moves;
            
        }else {
                discoSelecionado.classList.remove('selected');
                clique = true;
            }
            
        }  
    }

    document.querySelector('#torre0').addEventListener("click", moviment);
    document.querySelector('#torre1').addEventListener("click", moviment);
    document.querySelector('#torre2').addEventListener("click", moviment);


    //FUNÇÃO RESET
    let resetGame = () =>{
        const disco0 = document.querySelector('#disco0');
        const disco1 = document.querySelector('#disco1');
        const disco2 = document.querySelector('#disco2');

        const torre0 = document.querySelector('#torre0');

        torre0.appendChild(disco0);
        torre0.appendChild(disco1);
        torre0.appendChild(disco2);
    }
    const reset = document.querySelector('.reset');
    reset.onclick = resetGame;