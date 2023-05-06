import { discount } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className={`flex-1 ${styles.flexStart} flex-col x1:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-gradient font-bold">20%</span> Discount For{" "}
            <span className="text-gradient font-bold">1 MONTH</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation </span>
            Payment Method.
          </h1>
          <div className="ss:flex hidden md:mr-4 md-0">
            <GetStarted></GetStarted>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
