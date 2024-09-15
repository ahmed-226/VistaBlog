const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const { UserType } = require('../typeDefs.js');
const User = require('../../models/user.model.js');



const createUser = {
    type: UserType,
    args: {
        username: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        role: { type: GraphQLString },
        bio: { type: GraphQLString },
        profilePicture: { type: GraphQLString }
    },
    resolve(parent, args) {
        let user = new User({
            username: args.username,
            email: args.email,
            password: args.password,
            role: args.role,
            bio: args.bio,
            profilePicture: args.profilePicture
        });
        return user.save();
    }
};

module.exports = {
    createUser
};
