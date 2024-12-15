/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  semi: false,
  singleQuote: true,
  bracketSpacing: false,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
