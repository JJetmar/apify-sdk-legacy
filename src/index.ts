import Apify, { Actor } from 'apify';

// Hack for support libraries for using older version of Apify SDK
declare module 'apify' {
    export const openKeyValueStore: typeof Actor.openKeyValueStore;
    export const isAtHome: typeof Actor.isAtHome;
    export const getEnv: typeof Actor.getEnv;
}

Object.assign(Apify, {
    openKeyValueStore: Actor.openKeyValueStore,
    isAtHome: Actor.isAtHome,
    getEnv: Actor.getEnv
});
