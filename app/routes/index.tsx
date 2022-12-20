import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";



interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Link to="/blog">Courses</Link>
      <Link to="/auth">Login</Link>
   
    </div>
  );
}
