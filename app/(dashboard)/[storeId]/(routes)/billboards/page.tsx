import prismadb from "@/lib/prisma";
import BillboardClient from "./components/client";
import { BillboardsColumn } from "./components/columns";
import { format } from "date-fns";
const BillboardPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedBillboards: BillboardsColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createdAt: format(item.updatedAt, "MMM do, yyyy"),
  }));

  return (
    <div className="flex-cols">
      <div className="flex-1 space-y-4 pt-6 p-8">
        <BillboardClient data={formattedBillboards} />
      </div>
    </div>
  );
};

export default BillboardPage;
