"use client";

import ReviewSection from "@/features/ReviewSection/ReviewSection";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import React from "react";
import ProductDetail from "../ProductDetail/ProductDetail";

export function MyTab() {
  const [activeTab, setActiveTab] = React.useState("description");
  const data = [
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
  return (
    <Tabs value={activeTab}>
      <TabsHeader
        className="rounded-none flex justify-center gap-6 border-blue-gray-50 bg-transparent p-0 !z-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`
              ${
                activeTab === value
                  ? "text-gray-900 font-semibold"
                  : "font-medium"
              } text-lg pb-2 w-fit`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="!p-0 -mt-[3px]">
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="!p-0 !font-medium !text-black"
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
