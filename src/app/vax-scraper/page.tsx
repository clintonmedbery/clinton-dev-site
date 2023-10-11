import { IconBrandGithub } from "@tabler/icons-react";
import { PageWrapper } from "../components/PageWrapper";
import { IconLink } from "../components/IconLink";
import { GradientBorder } from "../components/GradientBorder";

export default function VaxScraper() {
  return (
    <PageWrapper>
      <GradientBorder padding="pb-1 pr-1">
        <div className="text-4xl">Vax Scraper SC</div>
        <div className="pt-5 pb-5">
          In the beginning days of the Covid vaccine, I knew many elderly and
          high exposure workers who had trouble finding a vaccine appointment. I
          created this puppeteer script to help them find appointments. You
          could enter a phone number and zip code into Firebase and the script
          would text you when an appointment was available using Twilio.
        </div>

        <div className="flex flex-col md:flex-row pb-4">
          <div className="flex-none pr-4 mb-4 md:mb-0">
            <IconLink
              url="https://github.com/clintonmedbery/vax-scraper-sc"
              icon={<IconBrandGithub className="w-6 h-6" />}
            >
              GitHub
            </IconLink>
          </div>
        </div>
      </GradientBorder>
    </PageWrapper>
  );
}
