const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { CommentType } = require('../typeDefs.js');
const Comment = require('../../models/comment.model.js');


const createComment = {
    type: CommentType,
    args: {
        postId: { type: GraphQLID },
        userId: { type: GraphQLID },
        parentCommentId: { type: GraphQLID },
        content: { type: GraphQLString }
    },
    resolve(parent, args) {
        let comment = new Comment({
            postId: args.postId,
            userId: args.userId,
            parentCommentId: args.parentCommentId,
            content: args.content
        });
        return comment.save();
    }
};



module.exports = {
    createComment
};
