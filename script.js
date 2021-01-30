document.getElementById('login-button').addEventListener('click', function(){

    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';


    const transictionArea = document.getElementById('transiction-area');
    transictionArea.style.display = 'block';
})


//   deposite button event listener             

const depositBtn = document.getElementById('deposit-button');
depositBtn.addEventListener('click', function(){

    const deposit = parseFloat(document.getElementById('deposit-ammount').value) ;

    
    spanTextCorrection('current-deposit' , deposit);
    spanTextCorrection('current-balance' , deposit);
            
    document.getElementById('deposit-ammount').value = '';

});

function spanTextCorrection(id, depositAmmount){
    const currentAmmount = parseFloat( document.getElementById(id).innerText);

    let totalAmmount = currentAmmount + depositAmmount;

    document.getElementById(id).innerText = totalAmmount ;

}