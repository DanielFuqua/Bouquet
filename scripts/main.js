import { getFlowers } from "./flowers/FlowersProvider.js";
import { FlowersList } from "./flowers/FlowersList.js";

getFlowers().then(FlowersList);
