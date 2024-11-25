import { IProduct } from "../interfaces/product.interface"
import { SectionRowCard } from "./SectionRowCard"

interface ISectionRowProps {
  tag: string
  title: string
  products: IProduct[]
}

export const SectionRow = ({ tag, title, products }: ISectionRowProps) => {
  return (
    <div className="container mx-auto my-8">
      <div className="flex gap-4 items-center mb-3">
        <span className="w-5 h-10 inline-block rounded-md bg-red-500" />
        <p className="text-xl font-medium text-red-500">{tag || "Today’s"}</p>
      </div>

      <h2 className="text-3xl font-medium my-6">{title || "Flash Sales"}</h2>


      <div className="flex gap-4">
        <SectionRowCard  />
        <SectionRowCard  />
        <SectionRowCard  />
        <SectionRowCard  />
        <SectionRowCard  />
        <SectionRowCard  />

      </div>
    </div>
  )
}