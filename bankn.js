accountDetails1 = {
    accNumber: 987654321,
    balance: 100000,
    withDraw: function name(amountToBeWithdraw) {
        if (amountToBeWithdraw > 0) {
            if (this.balance > 0 && this.balance >= amountToBeWithdraw) {
                this.balance = this.balance - amountToBeWithdraw
            } else {
                alert("Insufficient Balance")
            }
        }
        else {
            alert("Please Enter Valid Amount")
        }
    },
    deposit: function name(amountToBeDeposit) {
        if (amountToBeDeposit > 0) {
            this.balance = this.balance + parseInt(amountToBeDeposit)
        } else {
            alert("Please Enter Valid Amount")
        }
    }
}
AccountDetails2 = {
    accNumber: 987654321,
    balance: 200000,
    withDraw: function name(amountToBeWithdraw) {
        if (this.balance > 0 && this.balance >= amountToBeWithdraw) {
            this.balance = this.balance - amountToBeWithdraw
        } else {
            alert("Insufficient Balance")
        }
    }
}
accountHolder = {
    name: "SAYEED",
    phoneNumber: 987654321,
    email: "sayeed@gmail.com",
    account1: accountDetails1,
    account2: AccountDetails2
}
var getbalanceButton = document.getElementById("button")
getbalanceButton.onclick = function name() {
    document.getElementById("balance").innerHTML = "Hi " + accountHolder.name + " Your Balance Is " + accountHolder.account1.balance
}
var withdrawButton = document.getElementById('withdraw');
withdrawButton.onclick = function () {
    var withdrwalAmount = document.getElementById('amtwdr').value;
    accountHolder.account1.withDraw(withdrwalAmount);
    document.getElementById("balance").innerHTML = "Hi " + accountHolder.name + " Your Balance Is " + accountHolder.account1.balance;
}
var depositButton = document.getElementById("deposit");
depositButton.onclick = function name(params) {
    var amountToBeDeposit = document.getElementById("amtdpst").value;
    accountHolder.account1.deposit(amountToBeDeposit);
    document.getElementById("balance").innerHTML = "Hi " + accountHolder.name + " Your Balance Is " + accountHolder.account1.balance;
}