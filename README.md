# Tic-Tac-Toe React Native App

## INSTALLATION

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


Detox tests:

* Make sure <a href="https://wix.github.io/Detox/docs/introduction/getting-started">Detox</a> is set up on your machine

---> iOS

* Start a simulator (iPhone 13 Pro) and run the app on it
* Build iOS tests: `detox build --configuration ios.sim.debug`
* Run iOS detox tests: `detox test --configuration ios.sim.debug`

---> Android

* Start an emulator (Pixel 4 API 30) and run the app on it
* Build Android tests: `detox build --configuration android.emu.debug`
* Run Android detox tests: `detox test --configuration android.emu.debug`