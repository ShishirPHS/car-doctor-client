import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="container mx-auto my-56">
      <div>
        <h6 className="text-center text-[#FF3811] font-bold text-xl">
          Service
        </h6>
        <h2 className="text-[#151515] text-center font-bold text-5xl my-5">
          Our Service Area
        </h2>
        <p className="text-[#737373] text-center max-w-[680px] mx-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
