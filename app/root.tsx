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
import styles from "~/css/index.css";
import styles_blog from "~/css/blog.css";
Object.defineProperty(Array.prototype, "at", {
  value: function(i:any) {
      if (i < 0)
          i += this.length
      return this[i]
  },
  enumerable: false
})
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links(): LinkDescriptor[] {
  return [{
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  },
  {
    rel: "stylesheet",
    href: styles_blog
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Material+Icons",
  },
  {
    rel: "stylesheet",
    href: "https://rsms.me/inter/inter.css"
  },
  {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
  },
  {
    rel: "stylesheet",
    href: styles
  }, {
    rel: 'prefetch',
    crossOrigin: "anonymous",
    as:"script",
    href: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7861960382823701"
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
        <div className="logo_container">
          <Link to={'/blog'}>
            <img className="logo" src="assets/logo.ico" />
          </Link>
          <p>Cossci</p>
          <a href="https://www.cossci.com/">Parent website</a>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        
        <LiveReload />
      </body>
    </html>
  );
}
