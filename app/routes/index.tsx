import { json, redirect } from "@remix-run/node";
import { Link, useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
}


export default function Index() {
  const router = useNavigate()
  useEffect(() => router('/courses'),[])
  return null
}
