import {Truck} from 'logistics-challenge/@main/Logistics/Classes/Truck.js';

export class UnloadableTruck extends Truck {
    constructor(items){
        super(items);
    }

    giveItems(givingObj, receivingObj, loadRange)
    {
        let leftOverItems = givingObj.getItems();
        let unloadedItems = leftOverItems.splice(...loadRange);

        givingObj.setItems(leftOverItems);

        if(receivingObj.getItems() != undefined)
            unloadedItems.push(receivingObj.getItems());
        
        receivingObj.setItems(unloadedItems);
    }

    unloadItems(object, loadRange = [0])
    {
        this.giveItems(this, object, loadRange);
    }

    loadItems(object, loadRange = [0])
    {
        this.giveItems(object, this, loadRange);
    }
}