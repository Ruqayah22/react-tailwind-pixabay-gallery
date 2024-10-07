# this  article introduces to Tailwind CSS by Blessing Krofegha

[Tailwind CSS article](https://www.smashingmagazine.com/2020/02/tailwindcss-react-project/)


~ npm i -D tailwindcss postcss-cli autoprefixer ~

- postcss-cli : is a tool for transforming CSS with JavaScript plugins. is the command-line interface for PostCSS, which allows you to process your CSS files using PostCSS plugins (like Tailwind CSS or Autoprefixer). Tailwind CSS is a PostCSS plugin, and you need postcss-cli to compile your Tailwind styles.It gives you control to run PostCSS as part of your build process.
- autoprefixer :  Autoprefixer is a PostCSS plugin that automatically adds vendor prefixes to your CSS to ensure compatibility across different browsers (like -webkit-, -moz-, etc.). It reads your CSS and ensures that properties requiring prefixes for cross-browser support are added automatically, improving browser compatibility.

~ npx tailwind init tailwind.js --full ~

 - it’s used to generate a tailwind config file, This command creates a tailwind.js in your project’s base directory; the file contains the configuration, such as our colors, themes, media queries, and so on. It’s a useful file that helps with predefined sets of properties which will aid the need to re-brand certain conventions or properties if the need arises.

## Create a PostCSS configuration file in your base directory manually or using the command:

~ touch postcss.config.js ~

- “PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.”

- It’s necessary to install Autoprefixer alongside Tailwind CSS because Autoprefixer usually tracks caniuse.com to see which CSS properties need to be prefixed. Hence, Tailwind CSS does not provide any vendor prefixing. If you’re curious as a cat in regards to PostCSS navigate to their documentation.   

## add those to the package.json file (and change the start and build to ):

 ` “scripts": {
    "start": "npm run watch:css && react-scripts start",
    "build": "npm run build:css && react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "build:css": "postcss src/assets/tailwind.css -o src/assets/main.css",
    "watch:css": "postcss src/assets/tailwind.css -o src/assets/main.css"
  },
`
