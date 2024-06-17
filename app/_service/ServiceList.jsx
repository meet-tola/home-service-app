import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceList = ({ services }) => {
  return (
    <div>
      {services && services.length === 0 ? (
        <p>No services available.</p>
      ) : (
        <div className="mt-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
            {services.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceList;
