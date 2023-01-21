# Apify SDK legacy

Package for Crawlee that should allows to import and use packages, that are using older version of Apify SDK.

## Installation

```
npm install apify-sdk-legacy
```

## Usage

```javascript
import { apifyGoogleAuth } from 'apify-google-auth'; // package using Apify SDK 2

// Now the packages may call older SDK functions.
import 'apify-sdk-legacy';
```

## Development
Most of the information related to the backward compatibility maybe found at [Upgrading to v3](https://sdk.apify.com/docs/upgrading/upgrading-to-v3).

New features are added on-the-go as needed, feel free to create pull-request with your own changes.
