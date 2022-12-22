import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}

export async function loader() {
  return redirect("/courses", { status: 200 });
}

export default function Index() {
  return (
    <div className="grid grid-cols-4 text-cyan-600 dark:text-cyan-200">
   
    </div>
  );
}
