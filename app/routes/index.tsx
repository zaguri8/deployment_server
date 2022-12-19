import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";



interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

export async function loader({ request} : {request: Request}) {
  const results = await fetch("https://swapi.dev/api/people/").then(to => to.json()).then(d => d.results)
  return json(
    results
  ) 
}


export default function Index() {
  const data = useLoaderData<Character[]>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to="/about">About</Link>
      <Link to="/auth">Login</Link>
      {data.map((character) => (
        <div key={character.name}>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair Color: {character.hair_color}</p>
          </div>
      ))}
    </div>
  );
}
