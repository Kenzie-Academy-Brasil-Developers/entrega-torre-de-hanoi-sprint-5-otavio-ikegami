const corpo = document.querySelector('main');
const button = document.getElementById('btn');


     let createDiv = (classe, destino, quantidade) => {
        
        for(let i = 0; i < quantidade; i++){
            
            const div = document.createElement('div');
    
            div.classList.add(classe)
    
            div.setAttribute('id', classe + i)
        
            destino.appendChild(div);
        }
     }


    let displayCreate = () => {
    createDiv('contador', corpo, 1);
    createDiv('resultado', corpo, 1);
    createDiv('reset', corpo, 1);
    createDiv('torre', corpo, 3);

    const torre0 = document.querySelector('#torre0');
    torre0.innerHTML = 'Torre 1';

    const torre1 = document.querySelector('#torre1');
    torre1.innerHTML = 'Torre 2';

    const torre2 = document.querySelector('#torre2');
    torre2.innerHTML = 'Torre 3';

    createDiv('disco',torre0, 3);

    }


    button.addEventListener('click', displayCreate);
