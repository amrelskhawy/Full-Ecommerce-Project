import { SectionRow } from "../../components/SectionRow";
import Hero from "./components/Hero";

export interface HomeProps {
  
}

export function Home({}: HomeProps) {
  return (
    <div className="grid gap-8">
      <Hero />
      <SectionRow tag={""} title={""} products={[]} />
    </div>
  );
}
