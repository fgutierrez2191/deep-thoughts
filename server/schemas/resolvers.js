const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        thoughts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Thought.find().sort({ createdAt: -1 });
        },

        thought: async (parent, { _id }) => {
            return Thought.findOne({ _id });
          }

    }
}

module.exports = resolvers;