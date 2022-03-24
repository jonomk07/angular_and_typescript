import { User, Message } from "./interfaces";

const userData = {
    name: "Jono",
    lastname: "Muamba",
    age: 30,
    greet: function () {
        return `Wecome ${this.name}`;
    }
};

const registerUser = (user: User): void => {
    // ADD USER TO DB
    console.log(`ADD ${user.name}, ${user.lastname}, ${user.age} TO DB`);

    // PRINT MESSAGE
    console.log(user.greet());
}

registerUser(userData);

const alertMessage = (message: Message): void => {
    console.log(message.show());
};

alertMessage({
    // you can also do it this way but it is not recommended
    // show: function() {
    //     return `Hello World`;
    // }

    show() {
        return `Hello World`;
    }
})

// CLASS and MODIFIERS // calss  Inheritance

// @protected means that a property can only be used within the containing class, and all derived subclasses, 
// but not on dissimilar instances of the containing class.

class MusicInstrument {
    private strings: number = 6;

    protected sound() {
        console.log("Classic sound " + `${this.strings} strings`);
    }
}

// @private means that a property can only be used within the containing class.
class Instruments {

    // the child class will not be able to access this class
    private strings: number = 6;
    private sound() {
        console.log("Private Classic sound " + `${this.strings} strings`);
    }

    public play(): void {
        this.sound();
    }

}

// @public is always implied and can be left off, but means that a property can be reached from anywhere.

class Instrument {
    public strings: number = 6;

    public sound() {
        console.log("Classic sound " + `${this.strings} strings`);
    }
}

class Guitar extends Instrument {
    sound() {
        console.log("Guitar class Modern sound " + `${this.strings} strings`);
    }
}

class Bass extends Instrument {
    sound() {
        console.log("method class Heavy sound " + `${this.strings} strings`);
    }
}

const guitar = new Guitar();
const bass = new Bass();
const instrument = new Instrument();

guitar.sound();
bass.sound();
instrument.sound();