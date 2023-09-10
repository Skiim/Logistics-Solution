class Storage {
    items = [];

    constructor(items) {
        this.items = items;
    }

    getItems() {
        return this.items;
    }

    setItems(arg) {
        this.items = arg;
    }
}

class Box extends Storage {
    calcWeight() {
        return this.items.reduce((partialSum, a) => partialSum + a, 0);
    }
}

class Truck extends Storage {

    constructor(items) {
        super(items);
    }

    calcWeight(arg) {
        return arg.reduce((partialSum, a) => partialSum + a, 0);
    }

    sortArray(arr, LtG) {
        return(
            arr.sort(function(a,b){
                if(LtG == null || LtG)
                    return a - b;
                else
                    return b - a;
            })
        );
    }

    //Sorts the contents of the boxes from smallest to largest value
    sortBoxContents() {
        for (const [key, value] of Object.entries(this.items)) {
            let currentBox = value;

            let sortedBox = currentBox.items.sort(function(a,b){
                return a - b;
            });
            sortedBox = this.sortArray(currentBox.items);

            this.items[key].items = sortedBox;
        }
    }

    //Sorts boxes by sum of weight smallest to largest
    sortBoxes() {
        this.items.sort((a, b) => (
            this.calcWeight(a.getItems()) < this.calcWeight(b.getItems())
        ) ? 1 : -1);
    }

    totalWeight() {
        let sum = 0;
        this.items.forEach(box => {
            box.items.forEach(item => sum += item);
        });

        return sum;
    }
}

class TruckYard extends Storage {
    constructor(items) {
        super(items);
    }

    totalWeight() {
        let sum = 0;
        this.items.forEach(truck => sum += truck.totalWeight());
        return sum;
    }
}

let box1 = new Box([53, 324, 41, -5]);
let box2 = new Box([3, 1, 2]);
let box3 = new Box([85, 4]);
let box4 = new Box([4, 243, 341, 45]);
let truck1 = new Truck([box1, box2, box3, box4]);
let truck2 = new Truck([box1, box2, box2]);
let truck3 = new Truck([box1]);
let truckyard = new TruckYard([truck1, truck2, truck3]);

//truck1.sortBoxContents();
//console.log(truck1.getItems());
truck1.sortBoxes();
truck2.sortBoxes();
console.log(truck1.getItems());
console.log(`Truck Weight: ${truck1.totalWeight()}\n`);
console.log(truck2.getItems());
console.log(`Truck Weight: ${truck2.totalWeight()}\n`);
console.log(truck3.getItems());
console.log(`Truck Weight: ${truck3.totalWeight()}\n`);

console.log(`Total Weight: ${truckyard.totalWeight()}`);
