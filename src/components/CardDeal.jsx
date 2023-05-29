import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Connect With <br className="sm:block hidden" /> Business Advisors.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We understand the importance of guidance and support when it comes to financial matters.
        Connect Now, With Financial Advisors, Lawyers and accountants, 
        Providing Valuable Business Support and Guidance.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
