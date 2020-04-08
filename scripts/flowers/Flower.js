export const Flower = (flowerObj) => {
  return `
            <div id="flower">
                <h4>${flowerObj.commonName}</h4>
                <p>Color: ${flowerObj.color}</p>
            </div>
        `;
};
