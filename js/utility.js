// donation handle funtion block 

function handleDonation(inputId, balanceId, donateAmountId , titleId) {
    const balanceText = document.getElementById(balanceId).innerText;
    let balance = parseInt(balanceText);

    const donation = parseInt(document.getElementById(inputId).value);
    if (isNaN(donation) || donation === null || donation <= 0) {
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
    const modal = document.getElementById('my_modal_1')
    modal.showModal();

    const title = getTitle(titleId);
    const historyDiv = document.getElementById('history-section');
    const newDiv = document.createElement('div')
    newDiv.innerHTML =
        `
            <div class="p-8 border rounded-2xl">
                <h1 class="font-bold text-xl leading-8">${donation} Taka is ${title}</h1>
                <p>Date : ${new Date().toString()}</p>
            </div>
    `
    historyDiv.appendChild(newDiv);
}


// function for getting title 

function getTitle(id){
    const text = document.getElementById(id).innerText;
    return text;
}