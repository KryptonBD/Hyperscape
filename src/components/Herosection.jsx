import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export const HeroSection = () => {
  return (
    <article className="hero mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Hyperscape build tools
        <span className="primary-gradient text-transparent bg-clip-text">
          {" "}
          for developers
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-auto">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="cta-container flex justify-center my-10">
        <a
          href="#"
          className="primary-gradient py-3 px-4 mx-3 rounded-md"
          aria-label="Start for Free"
        >
          Start for free
        </a>
        <a
          href="#"
          className="py-3 px-4 mx-3 rounded-md border"
          aria-label="Documentation"
        >
          Documentation
        </a>
      </div>
      <section className="video-showcase flex mt-10 justify-center">
        <figure className="w-1/2 mx-2 my-4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
        <figure className="w-1/2 mx-2 my-4">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border border-orange-700 shadow-sm shadow-orange-400"
          >
            <source src={video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </figure>
      </section>
    </article>
  );
};
