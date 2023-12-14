const gql = require("graphql-tag");

const typeDefs = gql`
  type Track {
    id: ID!
    title: String
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
    description: String
    # url:String
    numberOfViews: Int
    modules: [Module!]!
  }
  type Module {
    id: ID!
    title: String
    length: Int
  }
  
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    track(id: ID!): Track
    tracksForHome: [Track!]!
    tracksForHomeFetch: TrackFetchResponse!
  }

  type TrackFetchResponse {
    data: [Track!]!
  }
`;

module.exports = typeDefs;
