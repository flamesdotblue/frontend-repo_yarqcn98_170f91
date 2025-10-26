import { Rocket, Star, Shield } from 'lucide-react';

const features = [
  {
    title: 'Blazing fast setup',
    description: 'Spin up projects with sensible defaults, modern tooling, and zero configuration headaches.',
    icon: Rocket,
    color: 'from-blue-500 to-indigo-500',
  },
  {
    title: 'Polished UI kit',
    description: 'Pre-built components with accessible patterns, motion, and thoughtful defaults.',
    icon: Star,
    color: 'from-amber-500 to-pink-500',
  },
  {
    title: 'Secure by default',
    description: 'Best practices baked in so you can ship with confidence from day one.',
    icon: Shield,
    color: 'from-emerald-500 to-teal-500',
  },
];

function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need</h2>
          <p className="mt-3 text-gray-600">A complete toolkit that helps you move fast without breaking things.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-lg transition-shadow">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-tr ${f.color} text-white flex items-center justify-center shadow-sm`}>
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.description}</p>
              <div className="mt-4 text-sm font-medium text-gray-900 inline-flex items-center gap-1">
                Learn more
                <span aria-hidden>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
