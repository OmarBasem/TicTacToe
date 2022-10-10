# Tic-Tac-Toe React Native App

## Install App

* iOS: https://app.bitrise.io/artifact/133150725/p/74e646b014b6116afefe26e427407a5d
* Android: https://app.bitrise.io/artifact/133150722/p/fe81b1a272bd819f8469dff0548c07fe

## Local Installation

* run `git clone https://github.com/OmarBasem/TicTacToe`
* run `cd TicTacToe && npm install`

### iOS
* run `cd ios && pod install && cd ..`
* run `react-native run-ios`


### Android

* Open Android studio and make sure JDK 11 or higher is set for the project
* Start an emulator
* run `react-native run-android`

## Running Tests

Jest tests: run `npm test`


Detox e2e tests:

* Make sure <a href="https://wix.github.io/Detox/docs/introduction/getting-started">Detox</a> is set up on your machine

---> iOS

* Start a simulator (iPhone 13 Pro) and run the app on it
* Build iOS tests: `detox build --configuration ios.sim.debug`
* Run iOS detox tests: `detox test --configuration ios.sim.debug`

---> Android

* Start an emulator (Pixel 4 API 30) and run the app on it
* Build Android tests: `detox build --configuration android.emu.debug`
* Run Android detox tests: `detox test --configuration android.emu.debug`
