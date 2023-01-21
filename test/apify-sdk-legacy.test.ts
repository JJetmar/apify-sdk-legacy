jest.mock('apify', () => {
    const originalModule = jest.requireActual('apify');

    return {
        ...originalModule,
        Actor: {
            openKeyValueStore: jest.fn(),
            isAtHome: jest.fn(),
            getEnv: jest.fn()
        }
    }
});

import '../src/index';
import Apify from 'apify';

describe("Testing Apify legacy", () => {

    test("Calling Apify.openKeyValueStore should call Actor.openKeyValueStore", () => {
        Apify.openKeyValueStore("test");
        expect(Apify.Actor.openKeyValueStore).toBeCalledTimes(1);
    });

    test("Calling Apify.isAtHome: Actor.isAtHome", () => {
        Apify.isAtHome();
        expect(Apify.Actor.isAtHome).toBeCalledTimes(1);
    });

    test("Calling Apify.getEnv: Actor.getEnv", () => {
        Apify.getEnv();
        expect(Apify.Actor.getEnv).toBeCalledTimes(1);
    });
});
