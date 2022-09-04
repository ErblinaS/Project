import {ApolloClient,InMemoryCache, resetApolloContext,HttpLink} from "@apollo/client";
import {GET_SPACE} from "./queries";

export const apolloClient=new ApolloClient({
    link: new HttpLink({
    uri:'https://api.spacex.land/graphql/',
    }),
    cache:new InMemoryCache(),
    fetchOptions: {
        mode: 'no-cors',
      }
});
class SpaceService{
    async getSpaceMission(limit=10){
        try{
            const response=await apolloClient.query({
            query:GET_SPACE,
            variables:{limit},
            });
            if(!response||!response.data) throw new Error("cannot get rockets");
            return response.data.launchesPast;
        }
        catch(err){
            throw err;
        }
    }
}
export default new SpaceService();