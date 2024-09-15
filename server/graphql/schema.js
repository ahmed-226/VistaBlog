const { GraphQLSchema, GraphQLObjectType, GraphQLID } = require('graphql');
const { UserType, PostType, CommentType, AdvertisementType } = require('./typeDefs.js');
const Mutation = require('./Mutations/index.js');
const User= require('../models/user.model.js');
const Post= require('../models/post.model.js');
const Comment= require('../models/comment.model.js');
const Advertisement= require('../models/advertisement.model.js');


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Post.findById(args.id);
            }
        },
        comment: {
            type: CommentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Comment.findById(args.id);
            }
        },
        advertisement: {
            type: AdvertisementType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Advertisement.findById(args.id);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
