const bank = owner => {
    balance = 0;
    return amount =>{
    //balance = balance + amount;
    balance += amount;
    return balance;
    }
}

const MofijBank = bank('Mofij');
console.log(MofijBank(100));
console.log(MofijBank(300));
console.log(MofijBank(50));
console.log(MofijBank.balance);
console.log(MofijBank(50));