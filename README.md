# Hubspot theme boilerplate

## Technical Specifications
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
Connect hubspot with the theme
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
or if you want to upload the theme before watching
```bash
./hs-up-watch.sh
```
