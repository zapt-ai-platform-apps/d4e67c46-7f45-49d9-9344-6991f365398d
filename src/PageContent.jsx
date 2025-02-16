import React from 'react';

export default function PageContent() {
  return (
    <>
      <main className="flex-grow">
        <section className="text-center py-16 bg-gradient-to-r from-blue-100 to-blue-200">
          <h2 className="text-4xl font-extrabold mb-4">Bring Your Ideas to Life</h2>
          <p className="text-xl mb-6">Create Apps in Minutes. No Coding Required</p>
          <button
            onClick={() => console.log('Get Started clicked')}
            className="cursor-pointer px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition"
          >
            Get Started
          </button>
        </section>
        <section className="py-16 px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Build Apps Like These</h3>
          <p className="text-center mb-12">
            Discover what's possible with ZAPT - from productivity tools to AI-powered solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-2">StatusPros</h4>
              <p className="mb-4">Professional Availability Made Simple</p>
              <button
                onClick={() => console.log('StatusPros Visit App clicked')}
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Visit App
              </button>
            </div>
            <div className="border p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-2">Parking Disputer</h4>
              <p className="mb-4">Fight Unfair Parking Tickets with AI Assistance</p>
              <button
                onClick={() => console.log('Parking Disputer Visit App clicked')}
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Visit App
              </button>
            </div>
            <div className="border p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-2">Administrate</h4>
              <p className="mb-4">A tool to help you manage your tasks efficiently</p>
              <button
                onClick={() => console.log('Administrate Visit App clicked')}
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Visit App
              </button>
            </div>
            <div className="border p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-2">Football Subs</h4>
              <p className="mb-4">A tool for managing a kids football team</p>
              <button
                onClick={() => console.log('Football Subs Visit App clicked')}
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Visit App
              </button>
            </div>
            <div className="border p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-2">UpGrade</h4>
              <p className="mb-4">Personalized revision timetable app for exam preparation</p>
              <button
                onClick={() => console.log('UpGrade Visit App clicked')}
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Visit App
              </button>
            </div>
            <div className="border p-6 rounded shadow hover:shadow-lg transition">
              <h4 className="text-2xl font-semibold mb-2">Risk Assist</h4>
              <p className="mb-4">AI-driven platform for risk identification and mitigation</p>
              <button
                onClick={() => console.log('Risk Assist Visit App clicked')}
                className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Visit App
              </button>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100 px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Why Everyone Loves ZAPT</h3>
          <p className="text-center text-lg max-w-2xl mx-auto">
            The simplest way to create powerful apps that grow with your needs - no tech skills required
          </p>
        </section>
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-2xl font-semibold mb-2">Smart AI That Understands You</h4>
              <p>
                Describe your app in plain English - our AI handles all the technical complexity behind the scenes
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Built-In Protection & Reliability</h4>
              <p>
                Automatic error monitoring and backups keep your app running smoothly 24/7
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Designed for Everyone</h4>
              <p>
                Create professional apps through our simple interface - no technical skills needed
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Everything Included</h4>
              <p>
                Get databases, user logins, payments, and analytics ready-to-use in your app
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Only Pay for What You Use</h4>
              <p>
                No subscriptions or hidden fees - simple pricing based on your actual usage
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-2">Launch Faster</h4>
              <p>
                Go from idea to live app in hours instead of months with our AI-powered platform
              </p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-r from-green-100 to-green-200 px-6">
          <h3 className="text-3xl font-bold text-center mb-8">How It Works</h3>
          <div className="max-w-4xl mx-auto">
            <ol className="list-decimal list-inside space-y-4 text-lg">
              <li>
                <strong>Describe Your Update:</strong> Provide the details of the features or changes you want in your app using our intuitive interface.
              </li>
              <li>
                <strong>AI Creates Your App:</strong> Our advanced AI processes your request and generates the updated code seamlessly.
              </li>
              <li>
                <strong>Launch with Confidence:</strong> Deploy your app effortlessly with all updates integrated and ready for use.
              </li>
            </ol>
          </div>
        </section>
        <section className="py-16 px-6">
          <h3 className="text-3xl font-bold text-center mb-8">What Our Users Say</h3>
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="border p-6 rounded shadow">
              <p className="italic mb-2">"Zapt is brilliant! I’ve built business and personal apps effortlessly. Highly recommend!"</p>
              <p className="font-semibold">Simon L. – Commercial Lawyer</p>
            </div>
            <div className="border p-6 rounded shadow">
              <p className="italic mb-2">"Created an app for student exam prep in minutes. Zapt handles everything perfectly!"</p>
              <p className="font-semibold">Mark P. – Startup Founder</p>
            </div>
            <div className="border p-6 rounded shadow">
              <p className="italic mb-2">"Built a health and safety app quickly and easily with Zapt. Exceptional!"</p>
              <p className="font-semibold">Claudia G. – Training and Compliance Manager</p>
            </div>
            <div className="border p-6 rounded shadow">
              <p className="italic mb-2">"Zapt revolutionized my workflow by enabling me to create custom solutions effortlessly, without any coding expertise."</p>
              <p className="font-semibold">Alex R. – Entrepreneur</p>
            </div>
          </div>
        </section>
        <section className="py-16 bg-gray-100 px-6">
          <h3 className="text-3xl font-bold text-center mb-8">The Vision for ZAPT</h3>
          <div className="max-w-4xl mx-auto text-lg">
            <p className="mb-4">
              Before humans could read and write they were limited. Afterwards they can do amazing things.
              We currently live in a world where most people can't build tech, but ZAPT will allow anyone to create their own apps, abstracting away all the code and technical requirements.
            </p>
            <p>
              Our differentiator is that we automatically add in extras like databases, back-end functions, error monitoring, web analytics, customer support, monthly app subscriptions, and more. We provide all the necessary features to transform your ideas into complete, product-ready applications.
            </p>
          </div>
        </section>
        <section className="py-16 bg-gradient-to-r from-purple-100 to-purple-200 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="mb-6 text-lg">
            Transform your ideas into powerful applications effortlessly, without any coding required.
          </p>
          <button
            onClick={() => console.log('Get Started clicked')}
            className="cursor-pointer px-6 py-3 bg-green-500 text-white rounded-full text-lg hover:bg-green-600 transition"
          >
            Get Started
          </button>
        </section>
      </main>
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