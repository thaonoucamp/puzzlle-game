class Battery {
    constructor(energy) {
        this._energy = energy;
    }

    get energy() {
        return this._energy;
    }

    set energy(value) {
        this._energy = value;
    }
    toEnergy() {
        if (this._energy >=  100) {
            return this._energy + 'Da day rut sac ngay !';
        }else if (this._energy >= 0){
            this._energy++;
        }
    }
    checkEnergy() {
        if (this._energy < 10 && this._energy > 0) {
            return this._energy + 'Pin yeu..Hay cam sac ngay !';
        }
    }
}
let pin = new Battery(100);