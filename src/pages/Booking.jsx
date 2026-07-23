import { useEffect, useState } from "react";
import api from "../api";

function Booking() {
  const [services, setServices] = useState([]);
  const [stylists, setStylists] = useState([]);

  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    service: "",
    stylist: "",
    date: "",
    time: "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("services/")
      .then((response) => {
        setServices(response.data);
      })
      .catch((error) => {
        console.error("Error loading services:", error);
      });

    api.get("stylists/")
      .then((response) => {
        setStylists(response.data);
      })
      .catch((error) => {
        console.error("Error loading stylists:", error);
      });
  }, []);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("bookings/", formData);

      setMessage("Booking submitted successfully!");

      setFormData({
        customer_name: "",
        customer_email: "",
        service: "",
        stylist: "",
        date: "",
        time: "",
      });

    } catch (error) {
      console.error("Booking error:", error);
      setMessage("Booking failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-pink-50 py-16 px-6">

      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">

        <h1 className="text-3xl font-bold text-center text-pink-600 mb-8">
          Book Appointment
        </h1>

        {message && (
          <p className="text-center mb-5 font-semibold text-pink-600">
            {message}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="customer_name"
            placeholder="Your Name"
            value={formData.customer_name}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <input
            type="email"
            name="customer_email"
            placeholder="Email Address"
            value={formData.customer_email}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          >
            <option value="">
              Select Service
            </option>

            {services.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>


          <select
            name="stylist"
            value={formData.stylist}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          >
            <option value="">
              Select Stylist
            </option>

            {stylists.map((stylist) => (
              <option key={stylist.id} value={stylist.id}>
                {stylist.name}
              </option>
            ))}
          </select>


          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />


          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
            required
          />


          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition"
          >
            Submit Booking
          </button>

        </form>

      </div>

    </div>
  );
}

export default Booking;