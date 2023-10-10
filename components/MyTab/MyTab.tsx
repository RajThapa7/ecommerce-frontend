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
        className="!z-0 flex justify-center gap-6 rounded-none border-blue-gray-50 bg-transparent p-0"
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
                  ? "font-semibold text-gray-900"
                  : "font-medium"
              } w-fit pb-2 text-lg`}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="-mt-[2px] !p-0">
        {data.map(({ value, desc }) => (
          <TabPanel
            key={value}
            value={value}
            className="rounded-lg border-[1px] border-gray-300 p-10 !font-medium !text-black"
          >
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
