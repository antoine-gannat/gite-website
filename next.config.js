module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/kerhere",
        permanent: true,
      },
    ];
  },
};
