import SectionContainer from "@/app/_components/Layout/SectionContainer";
import ColumnsContainer from "../_components/Layout/ColumnsContainer";
import TeamCard from "../_components/TeamCard/TeamCard";

import { MOCK_TEAM_MEMBERS } from "../_mock/mock";

export default async function TimePage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="flex-1">
      <SectionContainer title="Quem Somos">
        <ColumnsContainer>
          {MOCK_TEAM_MEMBERS.map((member) => (
            <TeamCard {...member} key={member.author} />
          ))}
        </ColumnsContainer>
      </SectionContainer>
    </div>
  );
}
