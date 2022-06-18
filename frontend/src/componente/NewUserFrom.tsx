import { FormEvent, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { GET_USER } from "../App";

const CREAT_USER = gql`
   mutation($name: String!) {
      createUser(name:$name){
        id,
        name
      }
   }
`;

export function NewUserFrom() {
  const [name, setName] = useState("");
  const [createUser, { data, loading, error }] = useMutation(CREAT_USER);
  async function newUser(event: FormEvent) {
    event.preventDefault();
    if (!name) {
      return alert("Digite algum nome!");
    }
    await createUser({
      variables: {
        name,
      },
      refetchQueries:[GET_USER]
    });
    console.log(data, loading, error);
  }
  return(
    <>
      <form onSubmit={newUser}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br/>
        <button type="submit">Enviar</button>
      </form>
    </>);
}
