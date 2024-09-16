import { features } from "../constants";

export const FeatureSection = () => {
  return (
    <section
      className="feature-section relative mt-20 border-b border-neutral-800 min-h-[800px]"
      aria-labelledby="feature-heading"
    >
      <div className="text-center">
        <span
          className="bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase"
          aria-hidden="true"
        >
          Feature
        </span>
        <h2
          id="feature-heading"
          className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide"
        >
          Easily build{" "}
          <span className="primary-gradient text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>
      <ul className="feature-list flex flex-wrap mt-10 lg:mt-20 list-none p-0">
        {features.map((feature, index) => (
          <li key={index} className="feature-item w-full sm:w-1/2 lg:w-1/3">
            <article
              className="feature flex"
              aria-labelledby={`feature-heading-${index}`}
            >
              <div
                className="feature-icon flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3
                  id={`feature-heading-${index}`}
                  className="mt-1 mb-6 text-xl"
                >
                  {feature.text}
                </h3>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
