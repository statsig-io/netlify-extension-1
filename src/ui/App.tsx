import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SurfaceRoute, SurfaceRouter } from "@netlify/sdk/ui/react/components";
import { Surfaces, useNetlifyExtensionUIFetch } from "@netlify/sdk/ui/react";

import { SiteConfiguration } from "./surfaces/SiteConfiguration.jsx";
import { TeamConfiguration } from "./surfaces/TeamConfiguration.jsx";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "./trpc.js";
import { useState } from "react";

export const App = () => {
  const fetch = useNetlifyExtensionUIFetch();
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
          fetch,
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <SurfaceRouter>
          <SurfaceRoute surface={Surfaces.SiteGeneralConfiguration}>
            <SiteConfiguration />
          </SurfaceRoute>

          <SurfaceRoute surface={Surfaces.TeamConfiguration}>
            <TeamConfiguration />
          </SurfaceRoute>
          
          
        </SurfaceRouter>
      </QueryClientProvider>
    </trpc.Provider>
  );
};
