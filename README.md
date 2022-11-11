# Hubspot theme boilerplate

## Technical Specifications
 - Esbuild
 - Nodejs
 - Typescript
 - SCSS (Pre installed, Bootstrap 5)
 - node-modules support (Pre installed, GSAP, JQuery)
 - Webpack
``` 
This theme uses esbuild to compile scss and typescript code.
It has a simple and efficient structure and supports node_modules and bundling.
This is probably one of the most modern ways of building a hubspot theme with minimal overhead.
```

## Setup
### Clone them with
```bash
git clone https://github.com/samuellembke/hubspot-theme-boilerplate.git
```

### NPM Install
```bash
npm i
```

### Change project name in:
Change the project name from: hubspot-theme-boilerplate, to your theme name. Only use lowercase letters and no spaces no special symbols.
Basically a slug/path compliant name

 - hs-watch.sh
 - hs-up-watch.sh
 - website-theme/theme.json
 - esbuild.js
 - package.json

### Hubspot init
Connect hubspot with the hubspot account you want to publish on
```bash
hs init
```

### Copy .npmrc for gsap premium modules
Copy your .npmrc in the root folder of the project if you want to use GSAP's premium features.

if you don't have a GSAP premium subscription please remove the gsap-shockingly modules and other gsap premium features from the package.json and the ts/main.ts

## Start Coding :)
### Run typescript and scss watcher
```bash 
npm run dev
```

### Run hubspot upload watcher
```bash
./hs-watch.sh
```
or if you want to upload the theme before watching (Recommended for initial project run)
```bash
./hs-up-watch.sh
```

### Create new template
 - Copy boilerplate template file from /website-theme/templates/boilerplate.html and paste into /website-theme/templates/[Name Of Template].html
 - Copy boilerplate scss folder in /website-theme/scss/boilerplate and paste into /website-theme/scss/[Name Of Template]
 - On line 1 in [Name Of Template].html change the template label to your preferred label: ```label: [Label Of Template]```
 - On line 7 in [Name Of Template].html correct SCSS path for your template: ```{{ require_css(get_asset_url('../dist/scss/[Name Of Template]/index.css')) }}```
#### Add new SCSS to filewatcher:
On line 8 in /esbuild.js add your new SCSS path to the array:
```js
entryPoints: ["website-theme/scss/[Name Of Template]/index.scss", .../*rest of array*/]
```
After that restart the filewatcher...

## Helpful links:
 - [Hubspot tags docs - https://developers.hubspot.com/docs/cms/hubl/tags](https://developers.hubspot.com/docs/cms/hubl/tags)
 - [Hubspot blog template docs - https://developers.hubspot.com/docs/cms/building-blocks/templates/blog](https://developers.hubspot.com/docs/cms/building-blocks/templates/blog)
 - [Hubspot exportToContext docs (Helpful for blog listing pages) - https://developers.hubspot.com/docs/cms/building-blocks/modules/export-to-template-context](https://developers.hubspot.com/docs/cms/building-blocks/modules/export-to-template-context)
 - [Hubspot functions docs - https://developers.hubspot.com/docs/cms/hubl/functions](https://developers.hubspot.com/docs/cms/hubl/functions)
 - [Hubspot module docs - https://developers.hubspot.com/docs/cms/building-blocks/modules/files](https://developers.hubspot.com/docs/cms/building-blocks/modules/files)
 - [Hubspot CLI docs - https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli](https://developers.hubspot.com/docs/cms/developer-reference/local-development-cli)
