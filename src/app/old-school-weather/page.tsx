import { IconBrandGithub, IconUmbrella } from "@tabler/icons-react";
import { IconLink } from "../components/IconLink";
import Image from "next/image";
import { PageWrapper } from "../components/PageWrapper";

export default function OldWeather() {
  return (
    <PageWrapper>
      <div className="text-4xl">Old School Weather</div>
      <div className="pt-5 pb-5">
        Simple weather app inspired by the old school weather channel and
        similar other weather apps. A little walk into nostalgia for those of us
        who remember.
      </div>

      <div className="flex flex-col md:flex-row pb-4">
        <div className="flex-none pr-4 mb-4 md:mb-0">
          <IconLink
            url="https://github.com/clintonmedbery/weather-client"
            icon={<IconBrandGithub className="w-6 h-6" />}
          >
            GitHub
          </IconLink>
        </div>

        <div className="flex-1">
          <IconLink
            url="https://www.oldschoolweather.com"
            icon={<IconUmbrella className="w-6 h-6" />}
          >
            OldSchoolWeather.com
          </IconLink>
        </div>
      </div>
      <Image
        src="/oldSchoolWeather.png"
        width={1920}
        height={1080}
        alt="Screenshot of old school weather app."
      />
    </PageWrapper>
  );
}
