let distributorNurseries = [];

export const usedistributorNurseries = () => distributorNurseries.slice();

export const getdistributorNurseries = () =>
  fetch("http://localhost:8088/distributorNurseries")
    .then((res) => res.json())
    .then((data) => (distributorNurseries = data));
