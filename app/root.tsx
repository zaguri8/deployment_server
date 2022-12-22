import type { LinksFunction, LinkDescriptor, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Toolbar from "./components/toolbar";
import styles from "./styles/app.css";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links(): LinkDescriptor[] {
  return [
    {
      rel: "stylesheet",
      href: styles
    },
    {
      rel: "icon",
      href: "assets/logo.ico"
    },
    {
      rel: 'preload',
      href: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7861960382823701",
      as: "script"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons"
    }
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Toolbar />
        <div className="lg:w-9/12 lg:self-end">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
