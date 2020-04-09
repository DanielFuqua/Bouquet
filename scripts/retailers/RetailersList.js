import { useRetailers } from "./RetailersProvider.js";
import { Retailer } from "./Retailer.js";
import { useDistributors } from "../DistributorsProvider.js";

const contentTarget = document.querySelector(".retailers");

export const RetailersList = () => {
  const retailers = useRetailers();
  const distributors = useDistributors();

  const render = () => {
    contentTarget.innerHTML = retailers
      .map((retailer) => {
        const relatedDistributor = distributors.find(
          (dist) => dist.id === retailer.distributorId
        );

        const html = Retailer(retailer, relatedDistributor);
        return html;
      })
      .join("");
  };

  render();
};
