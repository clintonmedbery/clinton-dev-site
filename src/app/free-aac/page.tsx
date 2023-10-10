import { IconBrandGithub, IconUmbrella } from "@tabler/icons-react";
import { IconLink } from "../components/IconLink";
import Image from "next/image";
import { PageWrapper } from "../components/PageWrapper";
import { GradientCard } from "../components/GradientCard";

export default function FreeAAC() {
  return (
    <PageWrapper>
      <GradientCard>
        <div className="text-4xl">Free AAC</div>
        <div className="pt-5 pb-5">
          I first learned about Augmentative and Alternative Communication (AAC)
          when I was in college and working in a group home for young adults
          with developmental disabilities. I noticed that many of the AAC tools
          were quite expensive. This was my attempt to correct that using React
          Native.
        </div>

        <div className="flex flex-col md:flex-row pb-4">
          <div className="flex-none pr-4 mb-4 md:mb-0">
            <IconLink
              url="https://github.com/clintonmedbery/FreeAAC"
              icon={<IconBrandGithub className="w-6 h-6" />}
            >
              GitHub
            </IconLink>
          </div>

          <div className="flex-1">
            <IconLink
              url="https://www.assistiveware.com/learn-aac/what-is-aac"
              icon={<IconUmbrella className="w-6 h-6" />}
            >
              What is AAC?
            </IconLink>
          </div>
        </div>
        <Image
          src="/freeAAC.png"
          width={1920}
          height={1080}
          alt="Screenshot of Free AAC app."
        />
      </GradientCard>
    </PageWrapper>
  );
}
