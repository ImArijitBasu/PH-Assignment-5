//* noakhali 
document.getElementById('firstDonate').addEventListener('click', function () {
    handleDonation('firstInput', 'balance', 'firstDonateAmount' , 'firstTitle');
});
//* feni 
document.getElementById('secondDonate').addEventListener('click', function () {
    handleDonation('secondInput', 'balance', 'secondDonateAmount' , 'secondTitle');
});
//* quota 
document.getElementById('thirdDonate').addEventListener('click', function () {
    handleDonation('thirdInput', 'balance', 'thirdDonateAmount', 'thirdTitle');
});

// history section 

document.getElementById('history').addEventListener('click', function () {
    document.getElementById('donationSection').classList.add('hidden')
    document.getElementById('history').classList.remove('bg-white')
    document.getElementById('history').classList.add('bg-accent')
    document.getElementById('donationBtn').classList.add('bg-white')
    document.getElementById('history-section').classList.remove('hidden')
})


document.getElementById('donationBtn').addEventListener('click', function () {
    document.getElementById('donationSection').classList.remove('hidden')
    document.getElementById('donationBtn').classList.remove('bg-white')
    document.getElementById('history').classList.add('bg-white')
    document.getElementById('history').classList.remove('bg-accent')
    document.getElementById('history-section').classList.add('hidden')
})
