class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const aamir = new Support ('Amir Khan', 'BD');
const salman = new Support ('Solaiman Khan', 'BD');
const sharuk = new Support ('SRK Khan', 'BD');
const akshay = new Support ('Akshay Kumar', 'BD');

aamir.startSession();
Salman.startSession();
console.log(aamir, salman, sharuk, akshay);

// console.log(salman);