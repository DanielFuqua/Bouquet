export const Retailer = (retailerObj, distributorObj) => {
  return `
              <div id="retailer">
                <header class="retailer_name">
                  <h4>${retailerObj.name}</h4>
                </header>
                <section class="retailer_location"
                  <p>Location: ${retailerObj.city}, ${retailerObj.state}</p>
                  <p>Address: ${retailerObj.address}</p>
                </section>
                <section class="distributor_name"
                  <p>Distributor: ${distributorObj.name}</p>
                </section>
              </div>
          `;
};
