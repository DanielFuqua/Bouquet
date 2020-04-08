import { getFlowers } from "./flowers/FlowersProvider.js";
import { FlowersList } from "./flowers/FlowersList.js";
import { getRetailers } from "./retailers/RetailersProvider.js";
import { RetailersList } from "./retailers/RetailersList.js";

getFlowers().then(FlowersList);
getRetailers().then(RetailersList);
