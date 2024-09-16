import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

export const Pricing = () => {
  return (
    <section className="pricing mt-20" aria-labelledby="pricing-heading">
      <h2
        id="pricing-heading"
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide"
      >
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <article
            key={index}
            className="pricing-option w-full sm:w-1/2 lg:w-1/3 p-2"
          >
            <div className="p-10 border border-neutral-700 rounded-xl">
              <h3 className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && (
                  <span
                    className="primary-gradient text-transparent bg-clip-text text-xl mb-4 ml-2"
                    aria-label="Most Popular option"
                  >
                    (Most Popular)
                  </span>
                )}
              </h3>
              <p className="mb-8">
                <span
                  className="text-5xl mt-6 mr-2"
                  aria-label={`${option.price} per month`}
                >
                  {option.price}
                </span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul className="feature-list list-none p-0">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 aria-hidden="true" />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                aria-label={`Subscribe to ${option.title} plan`}
              >
                Subscribe
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
