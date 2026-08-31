import AuthBrandPanel from "./AuthBrandPanel";
import LoginForm from "./LoginForm";
import { LOGIN_FEATURES } from "@/constants";

export default function Login() {
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
        subheading="Good to have you back. Shop smarter with AI search, or head straight to your seller dashboard."
        features={LOGIN_FEATURES}
      />

      <div
        className="
            md:flex md:items-start md:justify-center
            md:py-10 md:px-6
            lg:min-h-0 lg:overflow-y-auto lg:bg-bg
            lg:flex lg:justify-center lg:items-center lg:py-0 lg:px-0
          "
      >
        <div
          className="
              w-full
              md:max-w-md md:bg-bg md:rounded-2xl md:shadow-2xl
              lg:shadow-none lg:rounded-none
              lg:max-w-md lg:bg-transparent
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
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
