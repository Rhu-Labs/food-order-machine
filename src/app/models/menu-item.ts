export class MenuItem {
    sku: string;
    name: string;
    description: string;
    price: number;
    groupId: number;
    calorieCount: number;
    upgrades: [];


    constructor(sku: string, name: string, description:string, price:number, groupId: number, calorieCount: number, upgrades:[]) {
        this.sku = sku,
        this.name = name,
        this.description = description,
        this.price = price,
        this.groupId = groupId
        this.calorieCount = calorieCount,
        this.upgrades =[]
    }
}