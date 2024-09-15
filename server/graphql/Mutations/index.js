const { GraphQLObjectType } = require('graphql');
const { createUser } = require('./userMutations.js');
const { createPost } = require('./postMutations.js');
const { createComment } = require('./commentMutations.js');

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields:{
        createComment,
        createUser,
        createPost
    }
})

module.exports = Mutation;
