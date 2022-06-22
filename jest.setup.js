import * as ReactNative from 'react-native';

// React Native
jest.doMock('react-native', () => {
    const {
        Platform,
        StyleSheet,
        PermissionsAndroid,
        ImagePickerManager,
        requireNativeComponent,
        Alert: RNAlert,
        InteractionManager: RNInteractionManager,
        NativeModules: RNNativeModules,
        Linking: RNLinking,
    } = ReactNative;

    const Alert = {
        ...RNAlert,
        alert: jest.fn(),
    };

    const InteractionManager = {
        ...RNInteractionManager,
        runAfterInteractions: jest.fn((cb) => cb()),
    };

    const NativeModules = {
        ...RNNativeModules,
        UIManager: {
            RCTView: {
                directEventTypes: {},
            },
        },
        // BlurAppScreen: () => true,
        PlatformConstants: {
            forceTouchAvailable: false,
        },
        StatusBarManager: {
            getHeight: jest.fn(),
        },
    };

    const Linking = {
        ...RNLinking,
        openURL: jest.fn().mockImplementation(
            () => Promise.resolve(''),
        ),
    };

    return Object.setPrototypeOf({
        Platform: {
            ...Platform,
            OS: 'ios',
            Version: 12,
        },
        StyleSheet,
        PermissionsAndroid,
        ImagePickerManager,
        requireNativeComponent,
        Alert,
        InteractionManager,
        NativeModules,
        Linking,
    }, ReactNative);
});



jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');


let logs = [];
let warns = [];
let errors = [];
beforeAll(() => {
    console.originalLog = console.log;
    console.log = jest.fn((...params) => {
        console.originalLog(...params);
        logs.push(params);
    });

    console.originalWarn = console.warn;
    console.warn = jest.fn((...params) => {
        console.originalWarn(...params);
        warns.push(params);
    });

    console.originalError = console.error;
    // console.error = jest.fn((...params) => {
    //     console.originalError(...params);
    //     errors.push(params);
    // });
});

beforeEach(() => {
    logs = [];
    warns = [];
    errors = [];
});

global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};


jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');


