import AuthBrandPanel from "./AuthBrandPanel";
import RegisterForm from "./RegisterForm";
import { REGISTER_FEATURES } from "@/constants";

export default function Register() {
  // alert(
  //   "Form Validation is done but, new registration not stored use: email:buyer@vendora.in , password:Buyer@123",
  // );

  return (
    <div
      className="
      min-h-screen bg-bg
      md:bg-forest
      lg:h-screen lg:overflow-hidden
      lg:grid lg:grid-cols-2
    "
    >
      <AuthBrandPanel
        heading={
          <>
            Find more.
            <br />
            Sell better.
            <br />
            <span className="text-forest-light">Zero commission.</span>
          </>
        }
        subheading="Join thousands of buyers and sellers on India's only AI-powered marketplace with zero commission."
        features={REGISTER_FEATURES}
      />

      <div
        className="
        md:flex md:items-start md:justify-center
        md:py-10 md:px-6
        lg:min-h-0 lg:overflow-y-auto lg:bg-bg
        lg:block lg:py-0 lg:px-0
      "
      >
        <div
          className="
          w-full
          md:max-w-md md:bg-bg md:rounded-2xl md:shadow-2xl
          lg:shadow-none lg:rounded-none
          lg:max-w-none lg:bg-transparent
        "
        >
          <div className="flex items-center gap-2.5 px-8 py-4 border-b border-line lg:hidden">
            <div className="w-7 h-7 rounded-lg bg-forest flex items-center justify-center text-white text-xs font-bold font-head flex-shrink-0">
              V
            </div>
            <span className="font-head text-lg font-bold text-ink">
              Vend<span className="text-forest-light">ora</span>
            </span>
          </div>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
