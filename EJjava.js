function getRandomNumbers(range, count) {
    const numbers = [];
    while (numbers.length < count) {
        const randomNumber = Math.floor(Math.random() * range) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.sort((a, b) => a - b);
}

document.getElementById('generateButton').addEventListener('click', () => {
    const randomNumbers1to50 = getRandomNumbers(50, 5);
    const randomNumbers1to12 = getRandomNumbers(12, 2);

    document.getElementById('numbers1to50').textContent = `Prvih 5 brojeva: ${randomNumbers1to50.join(', ')}`;
    document.getElementById('numbers1to12').textContent = `Druga 2 broja: ${randomNumbers1to12.join(', ')}`;
});
