let startTime;

function startTest() {
    startTime = new Date();
    const userInput = document.getElementById('userInput');
    userInput.value = '';
    userInput.disabled = false;
    userInput.focus();
    document.getElementById('startButton').disabled = true;
}

document.getElementById('userInput').addEventListener('input', function() {
    const userInput = document.getElementById('userInput').value;
    const testText = document.getElementById('testText').innerText;
    const testTextArray = testText.split('');
    const userInputArray = userInput.split('');

    let isError = false;

    for (let i = 0; i < userInputArray.length; i++) {
        if (userInputArray[i] !== testTextArray[i]) {
            isError = true;
            break;
        }
    }

    if (isError) {
        this.classList.add('error');
    } else {
        this.classList.remove('error');
    }

    if (userInput === testText) {
        const endTime = new Date();
        const timeTaken = (endTime - startTime) / 60000; // Time in minutes
        document.getElementById('hiddenUserInput').value = userInput;
        document.getElementById('hiddenTimeTaken').value = timeTaken.toFixed(2);
        document.getElementById('resultForm').submit();
    }
});

window.addEventListener('load', function() {
    document.getElementById('userInput').disabled = true;
});
