SOS Shopping Chrome Extensions
=========================

This app is a code sample that features how the Voxbone WebRTC SDK can be used to create a chrome extension that can be used to call an agent when visit a shopping website and having questions at checkout. When pressing on the Click2Call extension button, the IP, URL, and name of the person calling are sent to a remote agent that can assist the user directly in the browser.

![SOS Shopping Screenshot](http://blog.voxbone.com/wp-content/uploads/2015/10/soso-shopping-1.png)

##How to run

Chrome extensions have the benefit of being easily portable. Follow the steps to implement this app to your browser:

1. Download the source code

2. Get a Voxbone phone number and link it to a SIP URI

3. Get your Voxboen WebRTC credentials

4. Add your credentials and Voxbone phone number

    In js/authentication.js add your credentials:

    ```
        //Credentials -- TODO: add your own
        var username = "your_username";
        var secret = "your_secret";

        //Phone number/SIP Endpoint to call -- TODO: add your own
        var number = "320000000";

    ```
5. Package the extension
    Open the extension page in chrome (chrome://extensions/) and click on "load unpacked extension", then select this source code.

6. Click on the extension icon whenever you want!

## More Resources
* [Voxbone WebRTC API Documentation](https://developers.voxbone.com/docs/webrtc/overview/)
* [Voxbone Github](https://github.com/voxbone)

## License

[MIT](LICENSE)
