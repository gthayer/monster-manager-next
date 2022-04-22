import Card from "./card";
import { useMonsters } from "../lib/helpers";

export default function Archive() {
  const { filteredMonsters: monsters } = useMonsters();
console.log('archive', monsters);
  return (
    <div className="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {monsters
        ? monsters.map((monster, i) => <Card key={i} monster={monster} />)
        : null}
    </div>
  );
}
