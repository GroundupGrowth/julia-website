import {
  HomeHero,
  HomeStory,
  HomeMood,
  HomeHowItWorks,
  HomeServices,
  HomeTherapists,
  HomeArticles,
  HomeBookCTA,
} from "@/components/home/home-sections";
import Assessment from "@/components/assessment";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeStory />
      <HomeMood />
      <HomeHowItWorks />
      <HomeServices />
      <HomeTherapists />
      <Assessment />
      <HomeArticles />
      <HomeBookCTA />
    </>
  );
}
