module.exports = {
  purge: ["src/**/*.js", "public/**/*.html"],
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer"),
  ],
};
