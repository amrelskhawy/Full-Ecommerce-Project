import { SectionRow } from "../../components/SectionRow";
import { Banner } from "./components/banner";
import Hero from "./components/Hero";

export interface HomeProps {

}


const dummyProduct =
{
  id: 2,
  title: "aa",
  price: "120",
  category: "phones",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, culpa. Delectus eaque ex unde quia laboriosam repudiandae ut necessitatibus fugit nam, neque similique pariatur obcaecati id nobis reprehenderit distinctio cum.",
  image: ""
}

export function Home({ }: HomeProps) {
  return (
    <div className="grid">
      <Hero />
      <SectionRow tag={"Today's"} title={"Flash Sales"} products={ [dummyProduct,dummyProduct,dummyProduct,dummyProduct] } />
      <SectionRow tag={"categories"} title={"Browse By Category"} products={[dummyProduct,dummyProduct,dummyProduct,dummyProduct]} />
      <SectionRow tag={"This Month"} title={"Best Selling Products"} products={[dummyProduct,dummyProduct,dummyProduct,dummyProduct]} />
      <Banner />

      <SectionRow tag={"Our Products"} title={"Explore Our Products"} products={[dummyProduct,dummyProduct,dummyProduct,dummyProduct,dummyProduct,dummyProduct,dummyProduct,dummyProduct]} />


    </div>
  );
}
