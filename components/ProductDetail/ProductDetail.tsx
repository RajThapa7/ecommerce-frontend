import classNames from "@/utils/classNames";

const data = {
  brand: "asus",
  "Dimension (WxHxB)":
    "10x20x30 sdsadasdasd asdasdfdsfsadfasd df fsd fsdfsadf sdf f asdsa",
  brandy: "fdsfjsdlf\nsdfsdfsd\ndsdfds",
  "Product Dimensions": "10x20x30",
  brandq: "asus",
};

export default function ProductDetail({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        className,
        "px-10 border-[1px] border-gray-300 rounded-lg pt-6 pb-10"
      )}
    >
      <h2 className="font-semibold text-gray-900 mb-6">
        Product description of HP Victus 15, i5 12th gen, 512GB SSD, 16GB RAM
      </h2>

      <table className="w-full border-collapse">
        <tbody className="">
          {Object.entries(data).map(([key, value]) => (
            <tr
              key={key}
              className="border-b-2 border-gray-300 hover:bg-gray-200 text-gray-900 text-sm"
            >
              <td className="pb-2 pt-3 w-[40%] px-5 break-words font-semibold">
                {key}
              </td>
              <td className="pb-2 pt-3 w-[60%] px-5 break-words">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
