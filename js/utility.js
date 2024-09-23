// donation handle funtion block 

function handleDonation(inputId, balanceId, donateAmountId) {
    const balanceText = document.getElementById(balanceId).innerText;
    let balance = parseInt(balanceText);

    const donation = parseInt(document.getElementById(inputId).value);
    if (isNaN(donation) || donation === null || donation < 0) {
        alert('Input a valid donation amount');
        return;
    }
    if (balance < donation) {
        alert('Not enough money');
        return;
    }
    balance = balance - donation;
    document.getElementById(balanceId).innerText = balance;
    const donateAmount = parseInt(document.getElementById(donateAmountId).innerText);
    const newAmount = donateAmount + donation;
    document.getElementById(donateAmountId).innerText = newAmount;
}

