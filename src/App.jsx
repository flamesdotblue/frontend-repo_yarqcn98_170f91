import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <section id="pricing" className="py-16 sm:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple pricing</h2>
              <p className="mt-3 text-gray-600">Start free. Upgrade when you need more power.</p>
            </div>
            <div className="mt-10 grid lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">Starter</h3>
                <p className="mt-1 text-sm text-gray-600">Perfect for trying things out</p>
                <div className="mt-4 text-3xl font-bold">$0<span className="text-base font-medium text-gray-500">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Basic components</li>
                  <li>Community support</li>
                  <li>Unlimited projects</li>
                </ul>
                <button className="mt-6 w-full px-4 py-2 rounded-md bg-gray-900 text-white font-medium hover:bg-black">Get started</button>
              </div>

              <div className="rounded-2xl border-2 border-gray-900 bg-white p-6 relative">
                <span className="absolute -top-3 left-6 px-2 py-1 text-xs font-semibold rounded-full bg-gray-900 text-white">Popular</span>
                <h3 className="text-lg font-semibold text-gray-900">Pro</h3>
                <p className="mt-1 text-sm text-gray-600">For builders who ship</p>
                <div className="mt-4 text-3xl font-bold">$19<span className="text-base font-medium text-gray-500">/mo</span></div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Full component library</li>
                  <li>Priority support</li>
                  <li>Unlimited collaborators</li>
                </ul>
                <button className="mt-6 w-full px-4 py-2 rounded-md bg-gray-900 text-white font-medium hover:bg-black">Upgrade</button>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-gray-900">Enterprise</h3>
                <p className="mt-1 text-sm text-gray-600">Custom solutions at scale</p>
                <div className="mt-4 text-3xl font-bold">Contact</div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Advanced security</li>
                  <li>Dedicated support</li>
                  <li>Custom integrations</li>
                </ul>
                <button className="mt-6 w-full px-4 py-2 rounded-md bg-white text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">Talk to us</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
