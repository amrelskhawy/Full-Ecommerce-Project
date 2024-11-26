import { SectionRow } from "../../components/SectionRow";
import { Banner } from "./components/banner";
import Hero from "./components/Hero";

export interface HomeProps {
  
}

export function Home({}: HomeProps) {
  return (
    <div className="grid">
      <Hero />
      <SectionRow tag={"Today's"} title={"Flash Sales"} products={[]} />
      <SectionRow tag={"categories"} title={"Browse By Category"} products={[]} />
      <SectionRow tag={"This Month"} title={"Best Selling Products"} products={[]} />

      <Banner />
    </div>
  );
}
