import SectionTitle from "../../components/SectionTitle.jsx/SectionTitle";

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to eat"
      ></SectionTitle>
      <div>
        <h2 className="text-center text-2xl">your total payment is here</h2>
      </div>
    </div>
  );
};

export default Payment;
