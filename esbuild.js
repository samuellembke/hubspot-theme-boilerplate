const path = require('path');
const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

console.log("Starting watcher...");

esbuild.build({
    entryPoints: ["website-theme/scss/blog-post/index.scss", "website-theme/scss/boilerplate/index.scss", "website-theme/ts/boilerplate.ts"],
    bundle: true,
    metafile: true,
    color: true,
    minify: true,
    sourcemap: false,
    splitting: false,
    logLevel: "info",
    format: 'esm',
    platform: 'browser',
    outdir: "website-theme/dist",
    incremental: true,
    watch: {
        onRebuild(error, result) {
            if (error) console.error('watch build failed:', error)
            else console.log('watch build succeeded:'/*, esbuild.analyzeMetafileSync(result.metafile, {
                verbose: false
            })*/)
        },
    },
    plugins: [
        sassPlugin(
            {
                cache: true,
                cssImports: false
            },
        ),
        {
            name: "temp",
            setup(build) {
                build.onResolve({filter: /\.(ttf|webp)$/}, args => {
                    let absPath = require('path').resolve(args.resolveDir, args.path)
                    return {
                        path: absPath.split("WebstormProjects/hubspot-theme-boilerplate/")[1],
                        external: true,
                    }
                })
            }
        },
        {
            name: 'perf',
            setup(build) {
                build.onStart(() => {
                    console.time('Time:')
                })
                build.onEnd((result) => {
                    console.timeEnd('Time:')
                })
            }
        }
    ]
}).then(r => {
    /*console.log("Build:", esbuild.analyzeMetafileSync(r.metafile, {
        verbose: false
    }))*/
    console.log('watching...')
}).catch((err) => {
    console.log(err)
})