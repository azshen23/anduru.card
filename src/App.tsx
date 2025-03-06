import { Analytics } from "@vercel/analytics/react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Card />
      <Analytics />
    </>
  );
}

export default App;
