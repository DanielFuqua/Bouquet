export const Retailer = (retailerObj, distributorObj, nurseries, flowers) => {
  return `
              <div id="retailer">
                <header class="retailer_name">
                  <h2>${retailerObj.name}</h2>
                </header>
                <section class="retailer_location">
                  <p>Location: ${retailerObj.city}, ${retailerObj.state}</p>
                  <p>Address: ${retailerObj.address}</p>
                </section>
                <section class="distributor_name">
                  <p>Distributor: ${distributorObj.name}</p>
                </section>
                <section class="source-nurseries">
                  We source our flowers from these nurseries:
                    <ul>
                    ${nurseries
                      .map((nursery) => `<li>${nursery.name}</li>`)
                      .join("")}
                    </ul>
                </section>
                <section class="flowers-available">
                  Flowers currently available:
                  <ul>
                  ${flowers
                    .map(
                      (flower) =>
                        `<li>${flower.commonName} - ${flower.color}</li>`
                    )
                    .join("")}
                  </ul>
                </section>
              </div>
          `;
};
