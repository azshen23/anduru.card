import Card from "./components/Card";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <>
      <Card />
      <Analytics />
    </>
  );
}

export default App;
