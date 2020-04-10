import { useRetailers } from "./RetailersProvider.js";
import { Retailer } from "./Retailer.js";
import { useDistributors } from "../DistributorsProvider.js";
import { useNurseries } from "../NurseriesProvider.js";
import { useFlowers } from "../flowers/FlowersProvider.js";
import { usedistributorNurseries } from "../DistributorNurseriesProvider.js";
import { useNurseryFlowers } from "../NurseryFlowersProvider.js";

const contentTarget = document.querySelector(".retailers");

export const RetailersList = () => {
  const retailers = useRetailers();
  const distributors = useDistributors();
  const nurseries = useNurseries();
  const flowers = useFlowers();
  const distributorNurseries = usedistributorNurseries();
  const nurseryFlowers = useNurseryFlowers();

  const render = () => {
    contentTarget.innerHTML = retailers
      ///
      .map((retailer) => {
        const relatedDistributor = distributors.find(
          (dist) => dist.id === retailer.distributorId
        );

        const relatedDistributorNurseries = distributorNurseries.filter(
          (dn) => dn.distributorId === relatedDistributor.id
        );

        const relatedNurseries = relatedDistributorNurseries.map((rdn) => {
          const foundNursery = nurseries.find(
            (nursery) => nursery.id === rdn.nurseryId
          );
          return foundNursery;
        });

        let relatedFlowers = relatedNurseries
          .map((rn) => {
            return nurseryFlowers.filter((nf) => nf.nurseryId === rn.id);
          })
          .flat();
        relatedFlowers = relatedFlowers.map((rf) => {
          return flowers.find((fl) => fl.id === rf.flowerId);
        });

        const html = Retailer(
          retailer,
          relatedDistributor,
          relatedNurseries,
          relatedFlowers
        );

        return html;
      })
      .join("");
  };

  render();
};
