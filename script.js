// script.js
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const input = document.getElementById('input-text');
const output = document.getElementById('output-text');

function encrypt(text) {
    let encryptedText = window.btoa(text);
    return encryptedText;
}

function decrypt(text) {
    let decryptedText = window.atob(text);
    return decryptedText;
}

encryptButton.addEventListener('click', () => {
    let encryptedText = encrypt(input.value);
    output.innerHTML = encryptedText;
});

decryptButton.addEventListener('click', () => {
    let decryptedText = decrypt(input.value);
    output.innerHTML = decryptedText;
});

const copyButton = document.getElementById('copy-button');

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(output.textContent)
        .then(() => {
            alert('Text copied to clipboard');
        })
        .catch(err => {
            console.error('Could not copy text: ', err);
        });
});