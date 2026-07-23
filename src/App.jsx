function App() {
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

      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">
            Hair Styling
          </h3>
          <p className="text-gray-600">
            Professional hair treatments and styling.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">
            Nail Care
          </h3>
          <p className="text-gray-600">
            Beautiful manicures and nail services.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">
            Makeup
          </h3>
          <p className="text-gray-600">
            Professional makeup for every occasion.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App