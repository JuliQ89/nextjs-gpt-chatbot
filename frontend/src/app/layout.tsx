import type { Metadata } from "next";
import "../assets/styles/globals.css";
import "../assets/styles/main.css";
import ReduxProvider from "@/store/ReduxProvider";

export const metadata: Metadata = {
  title: "AI Chatbot",
  description: "Chat GPT Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="../../favicon/favicon.svg"
        />
        <link rel="shortcut icon" href="../../favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="AI Chatbot" />
        <link rel="manifest" href="../../favicon/site.webmanifest" />
      </head>
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
