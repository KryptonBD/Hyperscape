import { testimonials } from "../constants";

export const Testimonials = () => {
  return (
    <section
      className="testimonials mt-20 tracking-wide"
      aria-labelledby="testimonials-heading"
    >
      <h2
        id="testimonials-heading"
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20"
      >
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="testimonial w-full sm:w-1/2 lg:w-1/3 px-4 py-2"
          >
            <blockquote className="bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <footer className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt={`${testimonial.user}'s profile picture`}
                />
                <div>
                  <cite className="block not-italic">{testimonial.user} </cite>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </footer>
            </blockquote>
          </article>
        ))}
      </div>
    </section>
  );
};
