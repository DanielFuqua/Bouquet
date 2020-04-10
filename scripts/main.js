import { getFlowers } from "./flowers/FlowersProvider.js";
import { FlowersList } from "./flowers/FlowersList.js";
import { getRetailers } from "./retailers/RetailersProvider.js";
import { RetailersList } from "./retailers/RetailersList.js";
import { getDistributors } from "./DistributorsProvider.js";
import { getdistributorNurseries } from "./DistributorNurseriesProvider.js";
import { getNurseries } from "./NurseriesProvider.js";
import { getNurseryFlowers } from "./NurseryFlowersProvider.js";

getFlowers().then(FlowersList);
getRetailers()
  .then(getDistributors)
  .then(getdistributorNurseries)
  .then(getNurseries)
  .then(getNurseryFlowers)
  .then(getFlowers)
  .then(RetailersList);
