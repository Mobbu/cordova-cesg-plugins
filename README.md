# Mobbu Cordova CESG Plugins

A collection of plugins to help Cordova/Phonegap iOS and BB10 apps to conform to the [CESG app development guidelines](https://www.gov.uk/government/publications/end-user-devices-security-guidance-apple-ios-application-development/end-user-devices-security-guidance-apple-ios-application-security-guidance). Any developer concerned with security should consider these guidelines.

For these plugins no setup is required, there is no JS code to write, just package the app with the plugin to get the feature enabled.

## Pasteboard

The CESG guideline state your application must manage the pasteboard effectively by doing one (or more) of the following:

* Clear the pasteboard when the application exits (crashes may still result in data leakage).
* Implement a private pasteboard within your application; do not use the system pasteboard.
* Encrypt the pasteboard with a key stored in the Developer’s keychain. This also allows pasting between the same Developer’s applications.

The clearpasteboard plugin automatically clears the pasteboard when the app goes into the background, so no pasting is allowed outside of the app. You may paste into the app, but not out of the app.

Install the plugin with:

    cordova plugin add com.mobbu.cordova.cesg.clearpasteboard

## Masking the screen in background mode

The CESG guidelines state that your app must mask off all protectively marked data on screen when the application receives notifications that it will enter the background state to ensure that the screenshot taken of the application does not contain sensitive information.

Our masking plugin automatically replaces the iOS snapshot and BB10 window cover when going into background mode with the splash screen, thus preventing secure data from being stored.

Install the plugin with:

    cordova plugin add com.mobbu.cordova.cesg.masksnapshot
