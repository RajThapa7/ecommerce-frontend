import OverallRating from "@/components/OverallRating/OverallRating";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import ReviewItem from "@/components/ReviewItem/ReviewItem";

export default function ReviewSection() {
  return (
    <div className="flex flex-col gap-16 border-gray-300 border-[1px] px-10 pt-6 pb-10 rounded-lg">
      <div className="flex flex-col lg:flex-row justify-between">
        <OverallRating />
        <ReviewForm />
      </div>

      <div className="">
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
        <ReviewItem />
      </div>
    </div>
  );
}
