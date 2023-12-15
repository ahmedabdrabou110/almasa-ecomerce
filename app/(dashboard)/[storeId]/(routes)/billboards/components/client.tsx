"use client";

import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

const BillboardClient = () => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title="Billboard(0)"
          description="Manage Billboards for you sale"
        />
        <Button
          onClick={() =>
            router.push(`/${params.storeId}/billboards/${params.storeId}`)
          }
        >
          <Plus className="w-4 h-4" />
          Add New
        </Button>
      </div>
    </>
  );
};

export default BillboardClient;
