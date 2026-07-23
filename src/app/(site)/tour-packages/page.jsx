import BreadcrumbServiceDetails from "../../../components/service-detailed/BreadcrumbServiceDetails";
import TourPackagesContent from "../../../components/tour-packages/TourPackagesContent";

export const metadata = {
  title: "Tour Packages | Eurovest",
  description:
    "Explore our exclusive tour packages to top destinations worldwide. Premium travel experiences curated by Eurovest for unforgettable adventures.",
  keywords:
    "tour packages, travel, vacation packages, holiday tours, eurovest tours, international travel",
  robots: "index, follow",
};

export default function TourPackagesPage() {
  return (
    <>
      <BreadcrumbServiceDetails title="Tour Packages" />
      <TourPackagesContent />
    </>
  );
}
