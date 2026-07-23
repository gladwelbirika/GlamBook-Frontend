import { useEffect, useState } from "react";
import api from "./api";

function App() {
  const [services, setServices] = useState([]);

  const [booking, setBooking] = useState({
    customer_name: "",
    customer_email: "",
    date: "",
    time: "",
    service: "",
    stylist: 1,
  });

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

  const handleBooking = (e) => {
    e.preventDefault();

    api
      .post("bookings/", booking)
      .then(() => {
        alert("Booking submitted successfully!");

        setBooking({
          customer_name: "",
          customer_email: "",
          date: "",
          time: "",
          service: "",
          stylist: 1,
        });
      })
      .catch((error) => {
        console.error("Booking error:", error.response?.data || error);
        alert("Booking failed. Check console.");
      });
  };

  return (
    <div className="min-h-screen bg-pink-50">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 bg-white shadow">
        <h1 className="text-2xl font-bold text-pink-600">
          GlamBook
        </h1>

        <button className="bg-pink-600 text-white px-5 py-2 rounded-lg">
          Book Now
        </button>
      </nav>


      {/* Hero Section */}
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


      {/* Services */}
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

              <h3 className="text-xl font-bold mb-2">
                {service.name}
              </h3>


              <p className="text-gray-600">
                {service.description}
              </p>


              <p className="mt-3 font-bold text-pink-600">
                Ksh {service.price}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* Booking Form */}
      <section className="bg-white py-12 px-10">

        <h2 className="text-3xl font-bold text-center mb-8">
          Book an Appointment
        </h2>


        <form
          onSubmit={handleBooking}
          className="max-w-xl mx-auto space-y-4"
        >

          <input
            className="w-full border p-3 rounded"
            placeholder="Your name"
            value={booking.customer_name}
            onChange={(e) =>
              setBooking({
                ...booking,
                customer_name: e.target.value,
              })
            }
          />


          <input
            className="w-full border p-3 rounded"
            placeholder="Email address"
            type="email"
            value={booking.customer_email}
            onChange={(e) =>
              setBooking({
                ...booking,
                customer_email: e.target.value,
              })
            }
          />


          <select
            className="w-full border p-3 rounded"
            value={booking.service}
            onChange={(e) =>
              setBooking({
                ...booking,
                service: e.target.value,
              })
            }
          >

            <option value="">
              Select service
            </option>


            {services.map((service) => (

              <option
                key={service.id}
                value={service.id}
              >
                {service.name}
              </option>

            ))}

          </select>


          <input
            type="date"
            className="w-full border p-3 rounded"
            value={booking.date}
            onChange={(e) =>
              setBooking({
                ...booking,
                date: e.target.value,
              })
            }
          />


          <input
            type="time"
            className="w-full border p-3 rounded"
            value={booking.time}
            onChange={(e) =>
              setBooking({
                ...booking,
                time: e.target.value,
              })
            }
          />


          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg"
          >
            Submit Booking
          </button>


        </form>

      </section>


    </div>
  );
}

export default App;