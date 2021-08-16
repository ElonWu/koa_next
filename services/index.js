const getPostService = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 1000);
  });

module.exports = {
  getPostService,
};
