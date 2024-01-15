// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import { injectSpeedInsights } from '@vercel/speed-insights';


import path from "path";
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RunPod Documentation",
  tagline: "Globally distributed GPU cloud built for production. Develop, train, and scale AI applications.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.runpod.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "runpod", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/runpod/docs",
        },
        /*
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        */
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        debug: Boolean(process.env.DEBUG || process.env.CI),
        config: path.join(__dirname, "redocly.yaml"),
        specs: [
          {
            id: "using-single-yaml",
            spec: "docs/references/spec/openapi.yaml",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
        },
      },
    ],
  ],

  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
        // Replace with your project's social card
        image: "img/docusaurus-social-card.jpg",
        navbar: {
          title: "RunPod",

          logo: {
            alt: "RunPod Logo",
            src: "img/logo.svg",
          },
          items: [
            {
              type: "docSidebar",
              position: "left",
              sidebarId: "docsSidebar",
              collapsed: false,
              label: "Documentation",
            },
            {
              type: "docSidebar",
              position: "left",
              sidebarId: "apiSidebar",
              collapsed: false,
              label: "API Endpoints",
            },
            {
              type: "docSidebar",
              position: "left",
              sidebarId: "tutorialsSidebar",
              collapsed: false,
              label: "Tutorials",
            },

            { href: "https://blog.runpod.io", label: "Blog", position: "left" },
            {
              href: "https://github.com/facebook/docusaurus",
              label: "GitHub",
              position: "right",
            },
          ],
        },
        footer: {
          style: "dark",
          links: [
            {
              title: "Docs",
              items: [
                {
                  label: "Overview",
                  to: "/docs/get-started/overview",
                },
              ],
            },
            {
              title: "Community",
              items: [
                /*
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              */
                {
                  label: "Discord",
                  href: "https://discord.gg/runpod",
                },
                /*
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              */
              ],
            },
            {
              title: "More",
              items: [
                {
                  label: "Blog",
                  href: "https://blog.runpod.io",
                },
                {
                  label: "GitHub",
                  href: "https://github.com/runpod",
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} RunPod`,
        },
        prism: {
          theme: prismThemes.github,
          darkTheme: prismThemes.dracula,
        },
        docs: {
          sidebar: {
            hideable: true,
          },
        },
      }
    ),
  scripts: [
    {
      src: "https://widget.kapa.ai/kapa-widget.bundle.js",
      "data-website-id": "d8e25089-cadd-4c1c-9010-7e83cd99a2a5",
      "data-project-name": "RunPod",
      "data-project-color": "#070D27",
      "data-project-logo": "https://avatars.githubusercontent.com/u/95939477?s=200&v=4",
      async: true,
    },
    {
      src: "https://scripts.simpleanalyticscdn.com/latest.js",
      async: true,
      defer: true,
    },
  ],
  plugins: [],
};

export default config;
injectSpeedInsights();