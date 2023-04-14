// Welcome to Shep's Backend Project. Super Organzied. Everything Commented. Super Readable.

//!-----IMPORTS-----!


//!-----Collecting the User Data to be stored in the future-----!
const userInfo = document.getElementById('user-info');
const purchaseButton = document.getElementById('submit');

purchaseButton.addEventListener("click", (e) =>{
    //Prevents the page from autoreloading
    e.preventDefault();
    const email = userInfo.email.value;
    const name = userInfo.name.value;
    const phoneNumber = userInfo.phone.value;
    const ccNum = userInfo.ccnum.value;
    const cvv = userInfo.cvv.value;
    const expireDate = userInfo.exp.value;


    console.log(email);
});

