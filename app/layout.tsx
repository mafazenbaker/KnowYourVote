import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KnowYourVote — Find the candidates who match your values",
  description:
    "Answer a short, neutral survey about your background, economic situation, values, and priorities. KnowYourVote compares your answers to candidates on your ballot and explains why each match was suggested.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
