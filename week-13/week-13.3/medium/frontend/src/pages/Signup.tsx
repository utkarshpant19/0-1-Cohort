import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";

export const Signup = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="signup ">
          <Auth type="signup" />
        </div>
        <div className="quote hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
};
