jest.mock('apify', () => {
    const originalModule = jest.requireActual('apify');

    return {
        ...originalModule,
        Actor: {
            call: jest.fn(),
            createProxyConfiguration: jest.fn(),
            getEnv: jest.fn(),
            getInput: jest.fn(),
            getValue: jest.fn(),
            isAtHome: jest.fn(),
            openKeyValueStore: jest.fn(),
            openDataset: jest.fn(),
            openRequestQueue: jest.fn(),
            pushData: jest.fn(),
            setValue: jest.fn(),
            on: jest.fn(),
            off: jest.fn(),
        }
    }
});

jest.mock('crawlee', () => {
    const originalModule = jest.requireActual('crawlee');

    return {
        ...originalModule,
        utils: {
            log: {
                setLevel: jest.fn()
            },
            sleep: jest.fn()
        },
        PuppeteerCrawler: jest.fn()
    }
});

import '../src/index';
import Apify, { Actor } from "apify";
import Crawlee from "crawlee";

describe("Testing Apify legacy", () => {

    test("Calling Apify.call should call Actor.call", () => {
        Apify.call("actorName");
        expect(Apify.Actor.call).toBeCalledTimes(1);
    });

    test("Calling Apify.createProxyConfiguration should call Actor.createProxyConfiguration", () => {
        Apify.createProxyConfiguration();
        expect(Apify.Actor.createProxyConfiguration).toBeCalledTimes(1);
    });

    test("Calling Apify.getEnv should call Actor.getEnv", () => {
        Apify.getEnv();
        expect(Apify.Actor.getEnv).toBeCalledTimes(1);
    });

    test("Calling Apify.getInput should call Actor.getInput", () => {
        Apify.getInput();
        expect(Apify.Actor.getInput).toBeCalledTimes(1);
    });

    test("Calling Apify.getValue should call Actor.getValue", () => {
        Apify.getValue("valueKey");
        expect(Apify.Actor.getValue).toBeCalledTimes(1);
    });

    test("Calling Apify.isAtHome should call Actor.isAtHome", () => {
        Apify.isAtHome();
        expect(Apify.Actor.isAtHome).toBeCalledTimes(1);
    });

    test("Calling Apify.openDataset should call Actor.openDataset", () => {
        Apify.openDataset();
        expect(Apify.Actor.openDataset).toBeCalledTimes(1);
    });

    test("Calling Apify.openKeyValueStore should call Actor.openKeyValueStore", () => {
        Apify.openKeyValueStore();
        expect(Apify.Actor.openKeyValueStore).toBeCalledTimes(1);
    });

    test("Calling Apify.openRequestQueue should call Actor.openRequestQueue", () => {
        Apify.openRequestQueue();
        expect(Apify.Actor.openRequestQueue).toBeCalledTimes(1);
    });

    test("Calling Apify.pushData should call Actor.pushData", () => {
        Apify.pushData({});
        expect(Apify.Actor.pushData).toBeCalledTimes(1);
    });

    test("Calling Apify.setValue should call Actor.setValue", () => {
        Apify.setValue("key", "value");
        expect(Actor.setValue).toBeCalledTimes(1);
    });

    test("Calling Apify.utils.log should call Crawlee.utils.log", () => {
        Apify.utils.log.setLevel(1);
        expect(Crawlee.utils.log.setLevel).toBeCalledTimes(1);
    });

    test("Calling Apify.utils.sleep should call Crawlee.utils.sleep", () => {
        Apify.utils.sleep();
        expect(Crawlee.utils.sleep).toBeCalledTimes(1);
    });

    // Events
    test("Calling Apify.events.on should call Actor.on", () => {
        Apify.events.on('persistState', () => {});
        expect(Actor.on).toBeCalledTimes(1);
    });

    test("Calling Apify.events.off should call Actor.off", () => {
        Apify.events.off('persistState', () => {});
        expect(Actor.off).toBeCalledTimes(1);
    });

    // Crawlers
    test("Calling Apify.PuppeteerCrawler.off should call Actor.off", () => {
        new Apify.PuppeteerCrawler();
        expect(Crawlee.PuppeteerCrawler).toBeCalledTimes(1);
    });
});
