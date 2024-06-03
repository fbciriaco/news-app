import SectionContainer from "@/app/_components/Layout/SectionContainer";
import ColumnsContainer from "../_components/Layout/ColumnsContainer";

import { ColunistaType } from "@/app/_types/types";
import { ColunistaCard } from "../_components/ColunistaCard/ColunistaCard";

import { MOCK_COLUNISTAS } from "@/app/_mock/mock";

export default async function ColunistasPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="flex-1">
      <SectionContainer>
        <ColumnsContainer>
          {MOCK_COLUNISTAS?.map((colunista: ColunistaType) => (
            <ColunistaCard key={colunista.title} colunista={colunista} />
          ))}
        </ColumnsContainer>
      </SectionContainer>
    </div>
  );
}
