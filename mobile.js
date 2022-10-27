let Mobile = function(battery, composeMemory, inboxMemory, sentMemory, status) {
    this.battery = battery;
    this.composeMemory = composeMemory;
    this.inboxMemory = inboxMemory;
    this.sentMemory = sentMemory;
    this.status = status;

    this.isOn = function () {
        return this.status ? true : false;
    }

    this.turnOn = function () {
        if (!this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.battery--;
                this.status = true;
            }
        }
    }

    this.turnOff = function () {
        if (this.isOn()) {
            if (this.battery > 0 && this.battery <= 100) {
                this.battery--;
                this.status = false;
            }
        }
    }

    this.chargeBattery = function () {
        if (this.battery < 100)
            this.battery++;
    }

    this.composeMemory = function (message) {
        if (this.isOn()) {
            this.battery--;
            this.composeMemory = message;
        }
    }

    this.sendMessage = function (toMobile) {
        if (this.isOn()) {
            this.battery--;
            this.sentMemory = this.composeMemory;
            toMobile.inboxMemory = this.composeMemory;
        }
    }

    this.receiveMessage = function (){
        if (this.isOn()) {
            this.battery--;
            return "You're have a new message!";
        }
    }

    this.readMessage = function () {
        if (this.isOn()) {
            this.battery--;
            return this.inboxMemory;
        }
    }
}

function main() {
    let nokia = new Mobile(80, "", "", "", true);
    let iPhone = new Mobile(90, "", "", "", true);

    let composingMessage = prompt("Enter your message: ");
    nokia.composeMemory(composingMessage);
    nokia.sendMessage(iPhone);

    let isCheck = iPhone.receiveMessage();
    if (isCheck != "") {
        alert("Message is: " + iPhone.readMessage());
    }
}
main();