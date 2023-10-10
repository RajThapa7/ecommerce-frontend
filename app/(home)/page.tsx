import FlashCard from "@/components/FlashCard/FlashCard";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import { IProductCard } from "@/types";

export const data: IProductCard[] = [
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    // reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    // reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
  {
    img: "https://transvelo.github.io/electro-html/2.0/assets/img/150X140/img1.jpg",
    price: 999,
    reducedPrice: 800,
    title: "Ipad Pro 2023",
    tag: "Latest",
  },
];

export default function Page() {
  return (
    <div className="flex flex-col pt-10">
      {/* card  */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-4">
        <FlashCard />
        <FlashCard />
        <FlashCard />
        <FlashCard />
      </div>

      <ProductSlider
        title="Related Products"
        breakpoints={{
          540: {
            slidesPerView: 2,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
          840: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
        }}
        data={data}
      />
    </div>
  );
}
