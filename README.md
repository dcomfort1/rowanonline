# Rowan Online Project
This project is to create the static assets and site that support the product, Rowan Online.

## Setup
Being a fairly typical install of a modern web framework, Rowan Online uses the same tools developers already trust and understand.

1. Install [NodeJS](https://nodejs.org/en/)
2. Run a `git clone` on the repository into the environment
3. Run `npm install` from the root of the repo directory
4. Once the changes are all set, just run a simple `npm run build` and the rest will automagically happen

## Under the Hood
The Rowan Online code is designed to be fairly robust and flexible, whilst remaining opinionated. Certain decisions like packages, structure, and frameworks were all designed for a specific purpose.

- [GulpJS](https://gulpjs.com/docs/en/getting-started/quick-start) begins the build and it's infinitely expandable to make automation easier
    - [Nunjucks](https://mozilla.github.io/nunjucks/) allows for DRY markup by using templating and partials
    - This is all passed off to our bundler
- [WebPackJS](https://webpack.js.org/guides/getting-started/#basic-setup) handles the complexity of build rules using a straighforward configuration
    - For Styles, several features are used:
        - [PostCSS](https://postcss.org/) is used as there aren't any preprocessors are used as of this writing
            - [CSS Nano](https://github.com/cssnano/cssnano) acts to minify the code
            - [Autoprefixer](https://github.com/postcss/autoprefixer) ensures that older, modern browsers have the prefixes to support the styles
            - [TailwindCSS](https://tailwindcss.com/docs) enables atomic styling
        - [MiniCSS Extract](https://github.com/webpack-contrib/mini-css-extract-plugin) splits the code into files for bundling
    - For Interactivity and scripts, some features are added:
        - [BabelJS](https://babeljs.io/) enables backwards compatibility when writing ES6
        - Terser helps to minify by renaming functions from developer-friendly formats to a concise name.
        - More features will be added as the project grows