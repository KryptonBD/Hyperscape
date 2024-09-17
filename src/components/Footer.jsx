import { communityLinks, platformLinks, resourcesLinks } from "../constants";

export const Footer = () => {
  return (
    <footer
      className="mt-20 border-t py-10 border-neutral-700"
      aria-label="Footer"
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <section aria-labelledby="resources-heading">
          <h3 id="resources-heading" className="text-md font-semibold mb-4">
            Resources
          </h3>
          <nav aria-label="Resources">
            <ul className="space-y-2">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="platform-heading">
          <h3 id="platform-heading" className="text-md font-semibold mb-4">
            Platform
          </h3>
          <nav aria-label="Platform">
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="community-heading">
          <h3 id="community-heading" className="text-md font-semibold mb-4">
            Community
          </h3>
          <nav aria-label="Community">
            <ul className="space-y-2">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-white"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </footer>
  );
};
