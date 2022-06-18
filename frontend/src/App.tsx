import { gql, useQuery } from "@apollo/client"; 
import { NewUserFrom } from "./componente/NewUserFrom";

type User = {
  id:string | null,
  name:string | null
}

export const GET_USER = gql`
  query {
    users{
      id,
      name
    }     
  }
`;

function App() {
  const {data,loading} = useQuery<{users:User}>(GET_USER);

  if(loading){
    return <h3>Carregando......</h3>
  }
  return (
    <>
      <h1>Api(GazinTech) - GraphQL</h1>
      <ul>
        {data?.users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
      <NewUserFrom/>
    </>
  )
}

export default App
