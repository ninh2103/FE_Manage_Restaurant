import dishApiRequest from "@/apiRequest/dish";
import DishDetail from "@/app/(public)/dishes/[id]/dish-detail";
import { wrapServerApi } from "@/lib/utils";

export default async function DishPage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const data = await wrapServerApi(() => dishApiRequest.getDish(Number(id)));
  const dish = data?.payload?.data;
  return <DishDetail dish={dish} />;
}
