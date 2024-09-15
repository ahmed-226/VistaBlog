const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { PostType } = require('../typeDefs.js');
const Post = require('../../models/post.model.js');


const createPost = {
    type: PostType,
    args: {
        userId: { type: GraphQLID },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        tags: { type: new GraphQLList(GraphQLString) },
        status: { type: GraphQLString },
        image: { type: GraphQLString }
    },
    resolve(parent, args) {
        let post = new Post({
            userId: args.userId,
            title: args.title,
            content: args.content,
            tags: args.tags,
            status: args.status,
            image: args.image
        });
        return post.save();
    }
};

module.exports = {
    createPost
};
