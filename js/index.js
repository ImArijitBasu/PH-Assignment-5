//* noakhali 

document.getElementById('firstDonate').addEventListener('click', function () {
    handleDonation('firstInput', 'balance', 'firstDonateAmount');
});
document.getElementById('secondDonate').addEventListener('click', function () {
    handleDonation('secondInput', 'balance', 'secondDonateAmount');
});
document.getElementById('thirdDonate').addEventListener('click', function () {
    handleDonation('thirdInput', 'balance', 'thirdDonateAmount');
});