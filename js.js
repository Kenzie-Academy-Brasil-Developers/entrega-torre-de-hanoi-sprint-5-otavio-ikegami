const corpo = document.querySelector('main');
const button = document.getElementById('btn');


     let createDiv = (classe, destino) => {
        
        for(let i = 0; i < 3; i++){
            
            const div = document.createElement('div');
    
            div.classList.add(classe)
    
            div.setAttribute('id', classe + i)
        
            destino.appendChild(div);
        }
     }

     window.onload = createDiv('torre', corpo);

    let displayCreate = () => {

    const torre0 = document.querySelector('torre0');
    createDiv('disco',torre0);

    }


    button.addEventListener('click', createDiv);
