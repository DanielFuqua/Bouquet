import { useRetailers } from "./RetailersProvider.js";
import { Retailer } from "./Retailer.js";

const contentTarget = document.querySelector(".retailers");

export const RetailersList = () => {
  const retailers = useRetailers();

  const render = () => {
    contentTarget.innerHTML = retailers
      .map((retailer) => {
        const html = Retailer(retailer);
        return html;
      })
      .join("");
  };

  render();
};
