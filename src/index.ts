import Apify, { Actor } from 'apify';
import Crawlee from 'crawlee';

declare module 'apify' {
    // Methods
    export const call: typeof Actor.call;
    export const createProxyConfiguration: typeof Actor.createProxyConfiguration;
    export const getEnv: typeof Actor.getEnv;
    export const getInput: typeof Actor.getInput;
    export const getValue: typeof Actor.getValue;
    export const isAtHome: typeof Actor.isAtHome;
    export const openDataset: typeof Actor.openDataset;
    export const openKeyValueStore: typeof Actor.openKeyValueStore;
    export const openRequestQueue: typeof Actor.openRequestQueue;
    export const pushData: typeof Actor.pushData;
    export const setValue: typeof Actor.setValue;
    export const utils: typeof Crawlee.utils;

    // Events
    export const events: {
        on: typeof Actor.on
        off: typeof Actor.off
    }

    // Crawlers
    export const PuppeteerCrawler: typeof Crawlee.PuppeteerCrawler;
}

// Hack for support libraries for using older version of Apify SDK
Object.assign(Apify, {
    // Methods
    call: Actor.call,
    createProxyConfiguration: Actor.createProxyConfiguration,
    getEnv: Actor.getEnv,
    getInput: Actor.getInput,
    getValue: Actor.getValue,
    isAtHome: Actor.isAtHome,
    openDataset: Actor.openDataset,
    openKeyValueStore: Actor.openKeyValueStore,
    openRequestQueue: Actor.openRequestQueue,
    pushData: Actor.pushData,
    setValue: Actor.setValue,
    utils: Crawlee.utils,

    // Events
    events: {
        on: Actor.on,
        off: Actor.off
    },

    // Crawlers
    PuppeteerCrawler: Crawlee.PuppeteerCrawler,
});
