import SellerSteps from "./SellerSteps";
import SellerDashboardPreview from "./SellerDashboardPreview";

export default function SellerSection() {
  return (
    <section
      className="container-vendora py-20"
      id="sellers"
      aria-labelledby="seller-heaing"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <SellerSteps />
        <div className="hidden lg:block">
          <SellerDashboardPreview />
        </div>
      </div>
    </section>
  );
}
