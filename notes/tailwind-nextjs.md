# Quick notes on setting up Tailwind CSS with NextJS

Based on [NextJS with Global Stylesheet](https://github.com/zeit/next.js/tree/canary/examples/with-global-stylesheet) and [NextJS with Tailwind](https://github.com/joecohens/next-with-tailwindcss).

## Basic Setup

### Step 1: Install all the things

`npm install autoprefixer babel-plugin-module-resolver babel-plugin-wrap-in-js postcss-loader raw-loader tailwindcss`

`yarn add autoprefixer babel-plugin-module-resolver babel-plugin-wrap-in-js postcss-loader raw-loader tailwindcss`

### Step 2: Generate Tailwind config file

`./node_modules/.bin/tailwind init tailwind.js`

### Step 3: Copy the following config files to root:

.babelrc
next.config.js
postcss.config.js

### Step 4: Create styles folder & file

In root, create styles folder. Copy styles.css into it.

That's it! Import your style sheet as shown in index.js and you should be good to go.