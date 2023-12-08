const resolvers = {
    Query: {
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        track:async (_, {id}, {dataSources}) => {
            const track = dataSources.trackAPI.getTrack(id)
            const modules = await dataSources.trackAPI.getTrackModules(id)
            return {...track, modules};
        },
        tracksForHomeFetch: {
            data: async () => {
                const baseUrl = "https://odyssey-lift-off-rest-api.herokuapp.com/";
                const res = await fetch(`${baseUrl}/tracks`);
                return res.json();
            },
        },
    },
    
    Track: {
        author: async ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        },
        id: ({ id }) => id,

    },
   
};

module.exports = resolvers;
