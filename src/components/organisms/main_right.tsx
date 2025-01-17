import { Card } from "../atoms/card";
import CardCarousel from "../molecules/card_carousel";

export const HeaderRight = () => {
  const cards = [
    <Card key={0} name="Abhishek Gupta" />,
    <Card key={1} name="Gupta Abhishek" />,
    <Card key={2} name="Uptag Shekabhi" />,
  ];
  return (
    <>
      <CardCarousel cards={cards} />
    </>
  );
};
