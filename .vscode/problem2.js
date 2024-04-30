document.getElementById('currencyconverter').addEventListener('submit', function(event) {
    event.preventDefault();

    const input = document.getElementById('input').value;
    const output = document.getElementById('output').value;
    const amount = document.getElementById('amount').value;

    convertCurrency(input, output, amount);
});

function convertCurrency(input, output, amount) {
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${input}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[output];
            const convertedAmount = amount * exchangeRate;

            displayResult(amount, input, convertedAmount, output, exchangeRate);
        })
}

function displayResult(amount, input, convertedAmount, output, exchangeRate) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${amount} ${input} equals ${convertedAmount.toFixed(2)} ${output}</p>
                           <p>Exchange rate: 1 ${input} = ${exchangeRate.toFixed(4)} ${output}</p>`;
}
