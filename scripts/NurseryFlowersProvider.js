let nurseryFlowers = [];

export const useNurseryFlowers = () => nurseryFlowers.slice();

export const getNurseryFlowers = () =>
  fetch("http://localhost:8088/nurseryFlowers")
    .then((res) => res.json())
    .then((data) => (nurseryFlowers = data));
