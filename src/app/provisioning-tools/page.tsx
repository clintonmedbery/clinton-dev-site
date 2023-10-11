import { IconBrandGithub, IconCloudPlus } from "@tabler/icons-react";
import { IconLink } from "../components/IconLink";
import { PageWrapper } from "../components/PageWrapper";
import { GradientBorder } from "../components/GradientBorder";

export default function ProvisioningTools() {
  return (
    <PageWrapper>
      <GradientBorder padding="pb-1 pr-1">
        <div className="text-4xl">Multi Cloud Provisioning Tools</div>
        <div className="pt-5 pb-5">
          This library aims to help users get form options for provisioning
          clusters in different cloud providers. It is a work in progress and
          currently only supports vSphere and Azure. Users can input their cloud
          credentials and get a list of available options for provisioning a
          cluster.
        </div>

        <div className="flex flex-col md:flex-row pb-4">
          <div className="flex-none pr-4 mb-4 md:mb-0">
            <IconLink
              url="https://github.com/clintonmedbery/multi-cloud-provisioning-tools"
              icon={<IconBrandGithub className="w-6 h-6" />}
            >
              GitHub
            </IconLink>
          </div>

          <div className="flex-1">
            <IconLink
              url="https://cluster-api.sigs.k8s.io/"
              icon={<IconCloudPlus className="w-6 h-6" />}
            >
              Kubernetes Cluster API
            </IconLink>
          </div>
        </div>
      </GradientBorder>
    </PageWrapper>
  );
}
