export const Retailer = (retailerObj) => {
  return `
              <div id="retailer">
                  <h4>${retailerObj.name}</h4>
                  <p>Location: ${retailerObj.city}, ${retailerObj.state}</p>
                  <p>Address: ${retailerObj.address}</p>
              </div>
          `;
};
