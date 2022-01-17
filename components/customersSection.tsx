import CustomersLogo from "components/customersLogo";
import Testimonials from "components/testimonials";

export default function CustomersSection() {
  return (
    <>
      <h6 className="pb-6 text-teal-600">kunden</h6>
      <Testimonials />
      <div className="mt-14">
        <CustomersLogo />
      </div>
    </>
  );
}
