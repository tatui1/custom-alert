const button = document.getElementById('button')

const customAlert = (message) => {
    const overlay = document.createElement('div')
    overlay.className = 'overlay';

    document.body.append(overlay);

}

button.addEventListener('click', () => {
    customAlert('lern frontend')
})