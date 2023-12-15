"use client";

import BillboardClient from "./components/client";

const BillboardPage = () => {
  return (
    <div className="flex-cols">
      <div className="flex-1 space-y-4 pt-6 p-8">
        <BillboardClient />
      </div>
    </div>
  );
};

export default BillboardPage;
