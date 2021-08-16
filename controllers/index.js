const { getPostService } = require('../services');

const getPosts = async (ctx) => {
  const list = await getPostService();

  ctx.body = list;
};

module.exports = {
  getPosts,
};
