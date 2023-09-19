import OverallRating from "@/components/OverallRating/OverallRating";
import ReviewForm from "@/components/ReviewForm/ReviewForm";
import ReviewItem from "@/components/ReviewItem/ReviewItem";

export default function ReviewSection() {
  return (
    <div className="flex flex-col gap-16 ">
      <div className="flex flex-col lg:flex-row justify-between gap-12 gap-x-8">
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
