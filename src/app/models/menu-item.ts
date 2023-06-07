export class MenuItem {
    sku: string;
    groupId: number;
    // todo: add the rest of the properties

    constructor(sku: string, groupId: number) {
        this.sku = sku,
        this.groupId = groupId
    }
}