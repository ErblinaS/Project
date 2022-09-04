import gql from "graphql-tag";
export const GET_SPACE=gql`
query GetSpace($limit:Int!){
    launchesPast(limit:$limit){
        mission_name
        id
        launch_site{
            site_name_long
        }
        rocket{
            rocket_name
        }
        links{
            flickr_images
        }
        ships{
        image
        }
    }
}
`;