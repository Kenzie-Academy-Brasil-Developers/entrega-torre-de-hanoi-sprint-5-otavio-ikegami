const corpo = document.querySelector('main');

    let divCreate = () => {
    
    for(let i = 0; i < 3; i++){
        const div = document.createElement('div');

        div.classList.add('torre')

        corpo.appendChild(div);
    }

    }

    divCreate();

