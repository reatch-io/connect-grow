import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { breadcrumbSchema } from "@/utils/structuredData";

const SpeedInsightsGuide = () => {
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Speed Insights Guide", url: "/speed-insights-guide" }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Getting started with Speed Insights — Reatch.io"
        description="Learn how to enable and use Vercel Speed Insights on your project. Complete guide with framework-specific instructions for Next.js, React, Vue, Svelte, and more."
        keywords="speed insights, vercel speed insights, web performance, performance monitoring, next.js performance, react performance"
        canonical="/speed-insights-guide"
        structuredData={breadcrumbs}
      />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Documentation
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Getting started with Speed Insights
            </h1>
            <p className="text-xl text-muted-foreground">
              This guide will help you get started with using Vercel Speed Insights on your project, 
              showing you how to enable it, add the package to your project, deploy your app to Vercel, 
              and view your data in the dashboard.
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Prerequisites</h2>
              <ul className="text-muted-foreground space-y-2">
                <li>A Vercel account. If you don't have one, you can <a href="https://vercel.com/signup" className="text-primary hover:underline">sign up for free</a>.</li>
                <li>A Vercel project. If you don't have one, you can <a href="https://vercel.com/new" className="text-primary hover:underline">create a new project</a>.</li>
                <li>The Vercel CLI installed. Install it using your preferred package manager:</li>
              </ul>
              
              <div className="bg-card rounded-lg border border-border p-6 my-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">pnpm:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">pnpm i vercel</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">yarn:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">yarn add vercel</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">npm:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">npm i vercel</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">bun:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">bun i vercel</code>
                    </pre>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Step 1: Enable Speed Insights in Vercel</h2>
              <p className="text-muted-foreground mb-4">
                On the <a href="https://vercel.com/dashboard" className="text-primary hover:underline">Vercel dashboard</a>, 
                select your Project followed by the <strong>Speed Insights</strong> tab. Then, select <strong>Enable</strong> from the dialog.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  💡 <strong>Note:</strong> Enabling Speed Insights will add new routes (scoped at <code className="text-sm bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">/_vercel/speed-insights/*</code>) after your next deployment.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Step 2: Add @vercel/speed-insights to your project</h2>
              <p className="text-muted-foreground mb-4">
                Using the package manager of your choice, add the <code className="text-sm bg-muted px-1 py-0.5 rounded">@vercel/speed-insights</code> package to your project:
              </p>
              
              <div className="bg-card rounded-lg border border-border p-6 my-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">pnpm:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">pnpm i @vercel/speed-insights</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">yarn:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">yarn add @vercel/speed-insights</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">npm:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">npm i @vercel/speed-insights</code>
                    </pre>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">bun:</p>
                    <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                      <code className="text-sm">bun i @vercel/speed-insights</code>
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  💡 <strong>Note:</strong> When using the HTML implementation, there is no need to install the <code className="text-sm bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">@vercel/speed-insights</code> package.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Step 3: Add the SpeedInsights component</h2>
              
              <div className="space-y-8">
                {/* Next.js Pages Router */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Next.js (Pages Router)</h3>
                  <p className="text-muted-foreground mb-4">
                    The <code className="text-sm bg-muted px-1 py-0.5 rounded">SpeedInsights</code> component is a wrapper around the tracking script, offering more seamless integration with Next.js.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Add the following component to your main app file:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`// pages/_app.tsx
import type { AppProps } from 'next/app';
import { SpeedInsights } from '@vercel/speed-insights/next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;`}</code>
                  </pre>
                  <p className="text-muted-foreground text-sm mt-4">
                    For versions of Next.js older than 13.5, import from <code className="text-sm bg-muted px-1 py-0.5 rounded">@vercel/speed-insights/react</code> and pass the pathname:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`import { SpeedInsights } from "@vercel/speed-insights/react";
import { useRouter } from "next/router";

export default function Layout() {
  const router = useRouter();
  return <SpeedInsights route={router.pathname} />;
}`}</code>
                  </pre>
                </div>

                {/* Next.js App Router */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Next.js (App Router)</h3>
                  <p className="text-muted-foreground mb-4">
                    Add the following component to the root layout:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`// app/layout.tsx
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</code>
                  </pre>
                </div>

                {/* Create React App / Vite React */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">React (Create React App / Vite)</h3>
                  <p className="text-muted-foreground mb-4">
                    The <code className="text-sm bg-muted px-1 py-0.5 rounded">SpeedInsights</code> component is a wrapper around the tracking script, offering more seamless integration with React.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Add the following component to the main app file:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`// App.tsx
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function App() {
  return (
    <div>
      {/* Your app content */}
      <SpeedInsights />
    </div>
  );
}`}</code>
                  </pre>
                </div>

                {/* Remix */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Remix</h3>
                  <p className="text-muted-foreground mb-4">
                    Add the following component to your root file:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`// app/root.tsx
import { SpeedInsights } from '@vercel/speed-insights/remix';

export default function App() {
  return (
    <html lang="en">
      <body>
        {/* Your app content */}
        <SpeedInsights />
      </body>
    </html>
  );
}`}</code>
                  </pre>
                </div>

                {/* SvelteKit */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">SvelteKit</h3>
                  <p className="text-muted-foreground mb-4">
                    Add the following to your root layout file:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`// src/routes/+layout.ts
import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";

injectSpeedInsights();`}</code>
                  </pre>
                </div>

                {/* Vue */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Vue</h3>
                  <p className="text-muted-foreground mb-4">
                    Add the following component to the main app template:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`<!-- src/App.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</code>
                  </pre>
                </div>

                {/* Nuxt */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Nuxt</h3>
                  <p className="text-muted-foreground mb-4">
                    Add the following component to the default layout:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`<!-- layouts/default.vue -->
<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/vue';
</script>

<template>
  <SpeedInsights />
</template>`}</code>
                  </pre>
                </div>

                {/* Astro */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Astro</h3>
                  <p className="text-muted-foreground mb-4">
                    Speed Insights is available for both static and SSR Astro apps. Declare the component near the bottom of your layout:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`---
// BaseHead.astro
import SpeedInsights from '@vercel/speed-insights/astro';
const { title, description } = Astro.props;
---
<title>{title}</title>
<meta name="title" content={title} />
<meta name="description" content={description} />

<SpeedInsights />`}</code>
                  </pre>
                </div>

                {/* HTML */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">HTML</h3>
                  <p className="text-muted-foreground mb-4">
                    Add the following scripts before the closing <code className="text-sm bg-muted px-1 py-0.5 rounded">&lt;/body&gt;</code> tag:
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`<script>
  window.si = window.si || function () { 
    (window.siq = window.siq || []).push(arguments); 
  };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>`}</code>
                  </pre>
                </div>

                {/* Other Frameworks */}
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Other Frameworks</h3>
                  <p className="text-muted-foreground mb-4">
                    Import the <code className="text-sm bg-muted px-1 py-0.5 rounded">injectSpeedInsights</code> function, which will add the tracking script to your app. 
                    This should only be called once in your app, and must run in the client.
                  </p>
                  <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                    <code className="text-sm">{`import { injectSpeedInsights } from "@vercel/speed-insights";

injectSpeedInsights();`}</code>
                  </pre>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Step 4: Deploy your app to Vercel</h2>
              <p className="text-muted-foreground mb-4">
                You can deploy your app to Vercel's global CDN by running the following command from your terminal:
              </p>
              <pre className="bg-muted p-4 rounded-md overflow-x-auto my-4">
                <code className="text-sm">vercel deploy</code>
              </pre>
              <p className="text-muted-foreground mb-4">
                Alternatively, you can connect your project's git repository, which will enable Vercel to deploy your latest pushes and merges to main.
              </p>
              <p className="text-muted-foreground mb-4">
                Once your app is deployed, it's ready to begin tracking performance metrics.
              </p>
              <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-lg p-4 my-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">
                  💡 <strong>Note:</strong> If everything is set up correctly, you should be able to find the{' '}
                  <code className="text-sm bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">/_vercel/speed-insights/script.js</code>{' '}
                  script inside the body tag of your page.
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Step 5: View your data in the dashboard</h2>
              <p className="text-muted-foreground mb-4">
                Once your app is deployed, and users have visited your site, you can view the data in the dashboard.
              </p>
              <p className="text-muted-foreground mb-4">
                To do so, go to your dashboard, select your project, and click the <strong>Speed Insights</strong> tab.
              </p>
              <p className="text-muted-foreground mb-4">
                After a few days of visitors, you'll be able to start exploring your metrics.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Privacy and Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Learn more about how Vercel supports privacy and data compliance standards with Vercel Speed Insights.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Next Steps</h2>
              <p className="text-muted-foreground mb-4">
                Now that you have Vercel Speed Insights set up, you can explore the following topics to learn more:
              </p>
              <ul className="text-muted-foreground space-y-2 list-disc pl-6">
                <li>Learn how to use the <code className="text-sm bg-muted px-1 py-0.5 rounded">@vercel/speed-insights</code> package</li>
                <li>Learn about metrics</li>
                <li>Read about privacy and compliance</li>
                <li>Explore pricing</li>
                <li>Troubleshooting</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SpeedInsightsGuide;
