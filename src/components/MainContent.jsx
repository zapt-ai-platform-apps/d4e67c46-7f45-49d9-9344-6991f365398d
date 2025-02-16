import React from 'react';

export default function MainContent() {
  return (
    <>
      <section className="py-16 px-6">
        <h3 className="text-4xl font-bold text-center mb-8">The Evolution of Innovation</h3>
        <p className="text-center text-xl max-w-3xl mx-auto">
          Before humans could read and write, our understanding was limited by basic survival instincts.
          When writing was discovered, it revolutionized human progress.
          Today, even with lifetimes of innovation, technology remains the privilege of a few.
          ZAPT breaks that barrier by empowering anyone to create powerful apps without writing code.
        </p>
      </section>

      <section className="py-16 bg-gray-100 px-6">
        <h3 className="text-4xl font-bold text-center mb-8">ZAPT: A Complete Ecosystem</h3>
        <p className="text-center text-xl max-w-3xl mx-auto">
          Unlike platforms that merely generate code, ZAPT automatically integrates databases, back-end functions, error monitoring,
          web analytics, customer support, monthly app subscriptions, and so so more.
          This isn’t just about writing code—it’s about delivering a fully product‐ready experience.
        </p>
      </section>

      <section className="py-16 px-6">
        <h3 className="text-4xl font-bold text-center mb-8">Our Pitch Journey</h3>
        <ol className="list-decimal list-inside space-y-4 text-xl max-w-4xl mx-auto">
          <li>
            <strong>The Limitation:</strong> Recognize how traditional tech creation confines innovation.
          </li>
          <li>
            <strong>The Breakthrough:</strong> Embrace the shift from manual coding to AI-powered app creation.
          </li>
          <li>
            <strong>The Ecosystem:</strong> Leverage ZAPT’s built-in integrations that cover every aspect of app development.
          </li>
          <li>
            <strong>The Future:</strong> Join us in a movement where every visionary can build transformative technology.
          </li>
        </ol>
      </section>

      <section className="py-16 bg-gradient-to-r from-purple-100 to-purple-200 text-center">
        <h3 className="text-4xl font-bold mb-4">Early Visionaries Speak</h3>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border p-6 rounded shadow">
            <p className="italic mb-2">
              "ZAPT is a radical shift in the way we think about app creation. It’s the catalyst for the next industrial revolution."
            </p>
            <p className="font-semibold">Visionary Investor</p>
          </div>
          <div className="border p-6 rounded shadow">
            <p className="italic mb-2">
              "A platform that democratizes innovation. ZAPT isn’t just an app builder—it’s a revolution in digital creativity."
            </p>
            <p className="font-semibold">Industry Leader</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200 text-center">
        <h3 className="text-4xl font-bold mb-4">Join the Revolution</h3>
        <p className="mb-6 text-xl">
          Transform the landscape of innovation. Whether you’re a visionary, investor, or creator, ZAPT empowers you to redefine technology.
        </p>
        <button
          onClick={() => console.log('Get Started clicked')}
          className="cursor-pointer px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition"
        >
          Get Started
        </button>
      </section>

      <footer className="bg-white py-4 text-center shadow-inner">
        <a
          href="https://www.zapt.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-semibold select-none"
        >
          Made on ZAPT
        </a>
      </footer>
    </>
  );
}