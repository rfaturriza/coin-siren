import { ProfileType } from "@/pages/api/dashboard";
import { ProfileCard } from "../atoms/profile_card";
import CardCarousel from "../molecules/profile_card_carousel";

export interface UserProfileSectionProps {
  data: ProfileType[];
}

export const UserProfileSection = ({ data }: UserProfileSectionProps) => {
  const cards = data.map((profile) => (
    <ProfileCard key={profile.id} {...profile} />
  ));
  return (
    <>
      <CardCarousel cards={cards} />
    </>
  );
};
