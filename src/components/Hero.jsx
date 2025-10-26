import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Now in beta
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Build beautiful apps, faster
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">
            Design, iterate, and launch stunning experiences with an AI-assisted workflow.
            A modern toolkit that helps you move from idea to production at lightspeed.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#features" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black">
              Explore features
            </a>
            <a href="#showcase" className="inline-flex justify-center items-center px-5 py-3 rounded-md bg-white text-gray-900 font-medium border border-gray-200 hover:bg-gray-50">
              See it in action
            </a>
          </div>
        </div>

        <div id="showcase" className="relative h-[360px] sm:h-[420px] lg:h-[520px] rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-100 to-blue-100">
          <Spline 
            scene="https://prod.spline.design/Yf8iVgYxJm0S4oWd/scene.splinecode" 
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/30" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45rem_25rem_at_80%_10%,rgba(99,102,241,0.15),transparent)]" />
    </section>
  );
}

export default Hero;
