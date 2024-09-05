import {
  Card,
  CardTitle,
  SiteConfigurationSurface,
  SiteGeneralConfigurationSurface,
} from "@netlify/sdk/ui/react/components";

import { useNetlifySDK } from "@netlify/sdk/ui/react";

export const SiteConfigurationOld = () => {
  const sdk = useNetlifySDK();

  return (
    <SiteGeneralConfigurationSurface>
      <Card>
        <CardTitle>Example Section for {sdk.extension.name}</CardTitle>
        <p>This is an example site configuration.</p>
      </Card>
    </SiteGeneralConfigurationSurface>
  );
};
