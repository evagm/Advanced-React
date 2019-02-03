const Mutations = {
  async createItem(parent, args, cxt, info){
    // TODO: check if they are logged in

    const item = await ctx.db.mutations.createItem({
      data: {
        ...args
      }
    }, info);
    return item;
  }
};

module.exports = Mutations;
