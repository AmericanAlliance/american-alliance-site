export const metadata = {
  title: "American Alliance",
  description: "A movement to unify disenfranchised voters from the right, left, and middle around the big issues."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
