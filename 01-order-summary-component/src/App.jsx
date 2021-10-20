function App() {
  return (
    <div className="bg-primary-pale relative flex items-center justify-center min-h-screen">
      {/* Background SVG */}
      <picture className="absolute inset-0">
        {/* Desktop design */}
        <source
          media="(min-width: 1280px)"
          srcSet="/assets/pattern-background-desktop.svg"
        />

        {/* Default / fallback image (mobile-first) */}
        <img
          src="/assets/pattern-background-mobile.svg"
          className="w-full pointer-events-none select-none"
        />
      </picture>

      {/* Card */}
      <div className="rounded-2xl font-primary xl:max-w-sm z-10 max-w-xs overflow-hidden bg-white shadow-xl">
        {/* Image */}
        {/* Image original size: 450x220 */}
        <div className="bg-neutral-dark flex items-center justify-center h-48">
          <img
            src="/assets/illustration-hero.svg"
            // src="https://dummyimage.com/450x220"
            alt="dummy"
            className="object-cover object-center w-full h-full"
          />
        </div>

        {/* Content */}
        <div className="p-9 flex flex-col items-center">
          <h3 className="text-neutral-dark mb-4 text-3xl font-black text-center">
            Order Summary
          </h3>
          <p className="text-neutral-desaturated mb-10 text-center">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          {/* Pricing plan */}
          <div className="flex w-full mb-10 space-x-4">
            {/* Harmony icon */}
            <div className="w-12 h-12">
              <img
                alt="Harmony icon"
                src="/assets/icon-music.svg"
                className="w-full h-full"
              />
            </div>

            {/* Plan and pricing */}
            <div>
              <p className="text-neutral-dark font-semibold">Annual Plan</p>
              <p className="text-neutral-desaturated">$59.99/year</p>
            </div>

            {/* Change action */}
            <div className="flex items-center justify-end flex-grow pr-4">
              <a
                href="#change"
                className="hover:no-underline hover:text-indigo-500 text-primary-bright text-sm underline">
                Change
              </a>
            </div>
          </div>

          {/* Proceed to Payment button */}
          <a
            href="#proceed-to-payment"
            className="bg-primary-bright text-primary-pale hover:bg-indigo-500 block w-full py-3 mb-8 text-sm font-semibold text-center rounded-lg shadow-2xl">
            Proceed to Payment
          </a>

          {/* Cancel Order */}
          <a
            href="#cancel-order"
            className="hover:text-neutral-dark inline-block text-sm font-semibold text-gray-500">
            Cancel Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
