import { useEffect, useState } from "react";
import api from "./api";

function App() {
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
    <div className="min-h-screen bg-pink-50">
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-pink-600">
          GlamBook
        </h1>

        <button className="bg-pink-600 text-white px-5 py-2 rounded-lg">
          Book Now
        </button>
      </nav>

      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-5">
          Beauty Appointments Made Easy
        </h2>

        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Browse salon services, choose your preferred treatment,
          and book your appointment online with GlamBook.
        </p>

        <button className="mt-8 bg-pink-600 text-white px-8 py-3 rounded-lg">
          Explore Services
        </button>
      </section>


      <section className="px-10 pb-20">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {service.name}
              </h3>

              <p className="text-gray-600 mb-3">
                {service.description}
              </p>

              <p className="font-bold text-pink-600">
                Ksh {service.price}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default App;