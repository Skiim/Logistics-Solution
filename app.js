import { createRequire } from "module";
const require = createRequire(import.meta.url);
import { Box, Truck, Terminal, LogisticsUtils } from "./node_modules/logistics-challenge/@main/Logistics/index.js";

import {UnloadableTruck} from "./@main/Logistics/index.js";

let terminalA = new Terminal([0, 1, 2, 3, 4]);
let terminalB = new Terminal([11,12,13]);

let warehouse = new Terminal([4,5,6]);

let truck1 = new UnloadableTruck();
let truck2 = new UnloadableTruck();

console.log("TerminalA: " + terminalA.getItems());
console.log();

truck1.loadItems(terminalA, [2,2]);
console.log("TerminalA: " + terminalA.getItems());
console.log("Truck1: " + truck1.getItems());
console.log();

truck1.unloadItems(warehouse);
console.log("Truck1: " + truck1.getItems());
console.log("Warehouse: " + warehouse.getItems());
console.log();

truck2.loadItems(warehouse, [1, 4]);
console.log("Warehouse: " + warehouse.getItems());
console.log("Truck2: " + truck2.getItems());
console.log();


truck2.unloadItems(terminalB, [2,3]);
console.log("Truck2: " + truck2.getItems());
console.log("Terminal B: " + terminalB.getItems());
console.log();
