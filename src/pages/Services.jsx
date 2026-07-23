import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../api";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    api
      .get("services/")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching services:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-pink-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-3">
          Our Services
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Choose from our professional beauty services.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3">
                {service.name}
              </h2>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <div className="flex justify-between items-center">
                <span className="text-pink-600 font-bold text-xl">
                  KSh {Number(service.price).toLocaleString()}
                </span>

                <Link
                  to="/booking"
                  className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {services.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            Loading services...
          </p>
        )}
      </div>
    </div>
  );
}

export default Services;