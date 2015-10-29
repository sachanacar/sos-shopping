//Inject JQuery Dependency
var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-1.11.1.min.js';
jquery.type = 'text/javascript';
jquery.async = true;
document.getElementsByTagName('head')[0].appendChild(jquery);

//Inject CryptoJS Dependency
var crypto1 = document.createElement('script');
crypto1.src = 'https://crypto-js.googlecode.com/svn/tags/3.1.2/build/rollups/hmac-sha1.js';
crypto1.type = 'text/javascript';
crypto1.async = true;
document.getElementsByTagName('head')[0].appendChild(crypto1);

//Inject CryptoJS Dependency
setTimeout(function() {
var crypto2 = document.createElement('script');
crypto2.src = 'https://crypto-js.googlecode.com/svn/tags/3.1.2/build/components/enc-base64-min.js';
crypto2.type = 'text/javascript';
crypto2.async = true;
document.getElementsByTagName('head')[0].appendChild(crypto2);

}, 100);

//Inject JSSIP Dependency
var jssip = document.createElement('script');
jssip.src = 'https://webrtc.voxbone.com/js/jssip-0.3.0.js';
jssip.type = 'text/javascript';
jssip.async = true;
document.getElementsByTagName('head')[0].appendChild(jssip);

//Inject VoxboneJS dependency
var voxbone = document.createElement('script');
voxbone.src = 'https://webrtc.voxbone.com/js/voxbone-0.0.2.js';
voxbone.type = 'text/javascript';
voxbone.async = true;
document.getElementsByTagName('head')[0].appendChild(voxbone);

//Get user IP address to be used in voxbone.WebRTC.configuration.uri
var ip = document.createElement('script');
ip.src = 'https://l2.io/ip.js?var=userip';
ip.type = 'text/javascript';
ip.async = true;
document.getElementsByTagName('head')[0].appendChild(ip);


