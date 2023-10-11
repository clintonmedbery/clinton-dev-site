import { GradientBorder } from "./components/GradientBorder";
import { PageWrapper } from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <GradientBorder padding="pb-1 pr-1">
        <div className="text-7xl">Hello there.</div>
        <div className="pt-5">
          My name is Clinton Medbery. I am a seasoned full stack developer with
          a flair for creating great and fun software using React, Kubernetes,
          WebGL and any other cutting-edge tech. Take a look around to discover
          what I have been up to lately.
        </div>
      </GradientBorder>
    </PageWrapper>
  );
}
