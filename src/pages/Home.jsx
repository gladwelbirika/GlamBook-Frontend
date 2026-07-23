import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-pink-50">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Beauty Appointments
          <span className="block text-pink-600">Made Easy</span>
        </h1>

        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-8">
          Welcome to <span className="font-semibold text-pink-600">GlamBook</span>.
          Browse our salon services, choose your preferred treatment, and
          book your appointment online in just a few clicks.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <Link
            to="/services"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg shadow hover:bg-pink-700 transition"
          >
            Explore Services
          </Link>

          <Link
            to="/booking"
            className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg hover:bg-pink-600 hover:text-white transition"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose GlamBook?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-5xl mb-4">💇‍♀️</div>
            <h3 className="text-xl font-bold mb-3">Professional Services</h3>
            <p className="text-gray-600">
              Experienced stylists offering high-quality beauty treatments.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-5xl mb-4">📅</div>
            <h3 className="text-xl font-bold mb-3">Easy Booking</h3>
            <p className="text-gray-600">
              Schedule appointments online quickly without making phone calls.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 text-center">
            <div className="text-5xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-3">Modern Experience</h3>
            <p className="text-gray-600">
              Browse services, select a stylist, and manage bookings with ease.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;