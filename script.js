const button = document.getElementById('button')

const customAlert = (message) => {
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    document.body.append(overlay);

    const contentDiv = document.createElement('div');
    contentDiv.className = 'content';
    overlay.append(contentDiv);

    const messageH1 = document.createElement('h1');
    messageH1.textContent = message;
    contentDiv.append(messageH1);

    const closeButton = document.createElement('button');
    closeButton.className = 'closeBtn';
    closeButton.textContent = 'ok';
    contentDiv.append(closeButton);

    closeButton.addEventListener('click', () => {
        overlay.remove();
    })

    overlay.addEventListener('click', (event) => {
        if (event.target.className === 'overlay'){
            overlay.remove();
        }
})
}
button.addEventListener('click', () => {
    customAlert('lern frontend')
})

button2.addEventListener('click', () => {
    customAlert('Do homework')
})

button3.addEventListener('click', () => {
    customAlert('Go to cinema')
})
