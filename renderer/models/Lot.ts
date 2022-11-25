export class Lot {
    
    private _id: string;
    green_coffe_lot: string
    green_coffe_weight: number
    roasted_coffee_lot: string
    roasted_coffee_weight: number
    orders: Array<object>

    constructor(gf:string, gfw:number, rf: string, rfw:number) {
        this._id = this.uniqueId()
        this.green_coffe_lot = gf
        this.green_coffe_weight = gfw
        this.roasted_coffee_lot = rf
        this.roasted_coffee_weight = rfw
        this.orders = [{}]
    }

    private uniqueId () {
        const dateString = Date.now().toString(36)
        const randomness = Math.random().toString(36).substring(2)
        return dateString + randomness
    };

}