
# Understanding Metadata in Next.js App Router

In a Next.js project that uses the **App Router** (`app/` directory),
you may have noticed an export like this in your `layout.tsx` file:

``` tsx
export const metadata = {
  title: 'My Site',
  description: 'A short description of my site',
};
```

## What is this `metadata`?

The `metadata` export is a **special convention** in the Next.js App
Router.\
You do not import or call it anywhere yourself --- **Next.js
automatically detects and uses it**.

At build time and request time, Next.js reads the `metadata` (or a
`generateMetadata` function if you export one) from your layouts and
pages. This data is then used to generate `<head>` tags in the final
HTML sent to the browser.

------------------------------------------------------------------------

## How Next.js Uses Metadata

-   **Root Layout** (`app/layout.tsx`)\
    Defines site-wide defaults for `<title>`, `<meta>`, icons, etc.

-   **Nested Layouts**\
    You can export metadata in nested layouts to override or extend
    parent values.

-   **Page Components** (`page.tsx`)\
    Pages can also export metadata. These get merged with layout
    metadata.

The merging order is: 1. Root layout metadata 2. Nested layout metadata
3. Page metadata

The result is what appears in the document `<head>`.

------------------------------------------------------------------------

## Example

 `src/app/layout.tsx` includes:

``` tsx
export const metadata = {
  title: 'Ayaan Javed - Creative Developer',
  description: 'Software Developer, Electronic Musician, Global Traveler',
  icons: {
    icon: '/Devanagari_Letter_à¤….svg',
    shortcut: '/Devanagari_Letter_à¤….svg',
    apple: '/Devanagari_Letter_à¤….svg',
  },
};
```

Next.js automatically turns this into:

``` html
<head>
  <title>Ayaan Javed - Creative Developer</title>
  <meta name="description" content="Software Developer, Electronic Musician, Global Traveler">
  <link rel="icon" href="/Devanagari_Letter_à¤….svg">
  <link rel="shortcut icon" href="/Devanagari_Letter_à¤….svg">
  <link rel="apple-touch-icon" href="/Devanagari_Letter_à¤….svg">
</head>
```