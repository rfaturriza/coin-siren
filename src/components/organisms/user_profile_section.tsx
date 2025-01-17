import { ProfileCard } from "../atoms/profile_card";
import CardCarousel from "../molecules/profile_card_carousel";

export const UserProfileSection = () => {
  const cards = [
    <ProfileCard key={0} name="Abhishek Gupta" />,
    <ProfileCard key={1} name="Gupta Abhishek" />,
    <ProfileCard key={2} name="Uptag Shekabhi" />,
  ];
  return (
    <>
      <CardCarousel cards={cards} />
    </>
  );
};
