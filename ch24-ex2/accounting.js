class Account{
    constructor(name) {
        this.name = name
        this.balance = 0
    }
    credit(p) {
        this.balance = p
    }
    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}

module.exports = Account 