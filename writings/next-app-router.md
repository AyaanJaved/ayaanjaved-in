# Plugging Into Next.js App Router

Next.js ships with an opinionated layout that does most of the heavy lifting for us. The App Router plants a fixed skeleton made of the `app/` directory, route folders, and convention-driven files like `layout.tsx`, `page.tsx`, and `loading.tsx`. That framework structure boots before any of our code runs, so we inherit routing, streaming, metadata handling, and server/client component segregation out of the box.

Because the framework shapes the request lifecycle, our work is mostly assembling blocks inside its slots:

- drop screens into `app/route/page.tsx` and the router wires them to URLs;
- declare shared chrome in `layout.tsx` and Next stitches it around every branch;
- opt into async or client behaviour by switching between server components, client components, or nested layouts.

The upside: we focus on feature code instead of plumbing. As long as we respect the folder conventions, the App Router composes our React pieces, streams HTML when possible, and handles navigation states. Building in this project means recognising those predefined spaces and fitting our component blocks where they belong.
