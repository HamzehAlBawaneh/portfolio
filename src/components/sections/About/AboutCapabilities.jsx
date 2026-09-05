import { capabilities } from "../../../data/about";
import CapabilityCard from "./CapabilityCard";

function AboutCapabilities() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {capabilities.map((capability) => (
        <CapabilityCard key={capability.title} {...capability} />
      ))}
    </div>
  );
}

export default AboutCapabilities;