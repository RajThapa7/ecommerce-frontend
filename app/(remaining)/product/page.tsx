import { data } from "@/app/(home)/page";
import ImageSlider from "@/components/ImageSlider/ImageSlider";
import { MyTab } from "@/components/MyTab/MyTab";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import ProductShortDescription from "@/components/ProductShortDescription";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
import ReviewSection from "@/features/ReviewSection/ReviewSection";

const tabData = [
  {
    label: "Description",
    value: "description",
    desc: <ProductDetail />,
  },

  {
    label: "Review",
    value: "review",
    desc: <ReviewSection />,
  },
];

export default function ProductPage() {
  return (
    <div className="relative flex flex-col gap-16">
      <div className="flex flex-col justify-center gap-x-10 gap-y-10 md:flex-row">
        <div
          id="portal"
          className="absolute left-[520px] top-0 z-10 bg-gray-100"
        ></div>
        <div className="w-full md:w-[50%] lg:w-[40%]">
          <ImageSlider className="max-w-md" />
        </div>
        <ProductShortDescription className="w-full md:w-[50%] lg:w-[60%]" />
      </div>
      <MyTab data={tabData} />
      <ProductSlider
        title="Related Products"
        data={data}
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
      />
    </div>
  );
}
