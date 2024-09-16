import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

export const Workflow = () => {
  return (
    <section className="workflow mt-20" aria-labelledby="workflow-heading">
      <h2
        id="workflow-heading"
        className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
      >
        Accelerate your{" "}
        <span className="primary-gradient text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <figure className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Visual representation of coding workflow" />
        </figure>
        <div className="pt-12 w-full lg:w-1/2">
          <ul className="checklist list-none p-0">
            {checklistItems.map((item, index) => (
              <li key={index} className="flex mb-12">
                <div
                  className="checklist-icon text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full"
                  aria-hidden="true"
                >
                  <CheckCircle2 />
                </div>
                <div>
                  <h3 className="mt-1 mb-2 text-xl">{item.title}</h3>
                  <p className="text-md text-neutral-500">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
