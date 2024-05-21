

export const metadata = {
  manifest : '/manifest.json',
  title: "Projects Manager",
  description: "PWA Projects Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>  
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#333333"/>
        <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.4.2/css/all.css"></link>
      </head>
      <body >{children}</body>
    </html>
  );
}
