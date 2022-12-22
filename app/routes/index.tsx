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
    <div className="grid grid-cols-4 text-cyan-600 dark:text-cyan-200">
      <label className="text-sky-500 bg-slate-600">
        Hello
      </label>
      <label className="text-sky-500">
        Hello
      </label>
      <label className="text-sky-500">
        Hello
      </label>
    </div>
  );
}
