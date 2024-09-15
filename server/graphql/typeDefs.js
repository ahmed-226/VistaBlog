const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull } = require('graphql');


const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    email: { type: GraphQLString },
    role: { type: GraphQLString },
    bio: { type: GraphQLString },
    profilePicture: { type: GraphQLString }
  })
});


const PostType = new GraphQLObjectType({
  name: 'Post',
  fields: () => ({
    id: { type: GraphQLID },
    userId: { type: GraphQLID },
    title: { type: GraphQLString },
    content: { type: GraphQLString },
    tags: { type: new GraphQLList(GraphQLString) },
    likes: { type: new GraphQLList(GraphQLID) },
    status: { type: GraphQLString },
    image: { type: GraphQLString }
  })
});


const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLID },
    postId: { type: GraphQLID },
    userId: { type: GraphQLID },
    parentCommentId: { type: GraphQLID },
    content: { type: GraphQLString },
    likes: { type: new GraphQLList(GraphQLID) }
  })
});


const AdvertisementType = new GraphQLObjectType({
  name: 'Advertisement',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    image: { type: GraphQLString },
    link: { type: GraphQLString },
    status: { type: GraphQLString }
  })
});

module.exports = { UserType, PostType, CommentType, AdvertisementType };
