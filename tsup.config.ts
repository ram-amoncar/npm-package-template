import { defineConfig } from 'tsup'
import type { NormalizedOptions, Format } from 'tsup'

interface Context {
    options: NormalizedOptions
    format: Format
    /** "type" field in project's package.json */
    pkgType?: string
}

interface Result {
    js?: string
}

function outputExtensions(ctx: Context): Result {
    if (ctx.format === 'cjs') return { js: '.js' }
    if (ctx.format === 'esm') return { js: '.mjs' }
    return { js: '.min.js' }
}

// You can put license here.
// Example
const license = '/* This is Unlicensed */'

export default defineConfig({
    splitting: false,
    entry: ['src/index.ts'],
    // Generate declaration file (.d.ts & .d.mts)
    // And adds banner
    dts: {
        banner: license
    },
    // Builds for commonJS, ESmodules & Browser
    format: ['cjs', 'esm', 'iife'],
    outExtension: outputExtensions,
    // Cleaning './dist/' before building
    clean: true,
    // Header/Banner
    banner: {
        js: license
    },
    // Minify Options
    minifyIdentifiers: false,
    minifySyntax: true,
    minifyWhitespace: true
})
