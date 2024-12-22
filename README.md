# Expo Android Crash on Remote Data Fetch

This repository demonstrates a bug where an Expo app crashes on Android when fetching data from a remote API. The app functions correctly on iOS.

## Description

The app uses `fetch` to retrieve character data from the Rick and Morty API.  The Android version crashes, while the iOS version works without issue. The crash is related to how the image is loaded in the FlatList.

## Steps to Reproduce

1. Clone this repository.
2. Run `expo start`.
3. Observe the behavior on both Android and iOS emulators or devices.

## Expected Behavior

The app should load and display character data from the API on both Android and iOS without crashing.

## Actual Behavior

The app crashes on Android with a native error. iOS works fine.

## Solution

The provided solution addresses the image loading issue and ensures compatibility across platforms by using a more robust error handling technique. This change prevents the crash, while keeping the original functionality in place.