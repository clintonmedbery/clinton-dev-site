import { GradientCard } from "./components/GradientCard";
import { PageWrapper } from "./components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <GradientCard>
        <div className="text-7xl">Hello there.</div>
        <div className="pt-5">
          My name is Clinton Medbery. I am a seasoned full stack developer with
          a flair for creating great and fun software using React, Kubernetes,
          WebGL and any other cutting-edge tech. Take a look around to discover
          what I have been up to lately.
        </div>
      </GradientCard>
    </PageWrapper>
  );
}
