// const square = function(x) {
//     return x * x;
// };

// const square = (x) => {
//     return x * x;
// };

// const square = (x) => x * x;

// console.log(square(3));


const event = {
    name: 'Birthady Party',
    guestList: ['Christine', 'Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => { // arrow function dont bin its own this value
            console.log(guest + ' is attending ' + this.name)
        });
    }
};

event.printGuestList();