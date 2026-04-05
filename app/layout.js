export const metadata = {
  title: "American Alliance",
  description:
    "A movement to unify disenfranchised voters from the right, left, and middle around the big issues.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
