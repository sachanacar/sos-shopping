//Credentials -- TODO: add your own
var username = "your_username";
var secret = "your_secret_key";

//Phone number/SIP Endpoint to call -- TODO: add your own
var number = "your_phone_number";

//Authentication mechanism
setTimeout(function(){
var script = document.createElement("script");
script.type = "text/javascript";

/**
 ** The Voxbone WebRTC init() script is injected below.
 ** voxbone.WebRTC.configuration.uri is replaced with IP address of calling browser generated in script loader
 ** voxbone.WebRTC.configuration.display_name is replaced with "user" but can be replaced dynamically
 ** voxbone.WebRTC.context is dynamically replaced with the URL visited using document.URL
 **/
script.text = "var userip;function init(){voxbone.WebRTC.authServerURL='http://webrtc.voxbone.com/rest/authentication/createToken',voxbone.WebRTC.useSecureSocket=!1,voxbone.WebRTC.customEventHandler=eventHandlers,voxbone.WebRTC.configuration.uri=userip+'@voxbone.com',voxbone.WebRTC.configuration.display_name='user',voxbone.WebRTC.context= document.URL,voxbone.WebRTC.init(voxrtc_config)}var cleanHmacDigest=function(e){for(;e.length%4!=0;)e+='=';return e=e.replace('/ /g','+')},createKey=function(e){self.username='"+ username +"',self.secret='"+ secret +"';var n=CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA1,self.secret);self.expires=Math.round(Date.now()/1e3)+100;var t=self.expires+':'+self.username;n.update(t),hmac=n.finalize(),self.key=cleanHmacDigest(hmac.toString(CryptoJS.enc.Base64));var a={};return a.key=self.key,a.expires=self.expires,a.username=self.username,a},voxrtc_config=createKey(),eventHandlers={progress:function(e){document.getElementById('status_message').innerHTML='Calling..'},failed:function(e){document.getElementById('status_message').innerHTML='Failed to Connect: '+e.data.cause},started:function(e){document.getElementById('status_message').innerHTML='In call'},ended:function(e){document.getElementById('status_message').innerHTML='Call ended'}};init();";
document.getElementsByTagName('head')[0].appendChild(script);
}, 1000);

/**
 ** Launch call using the "number" input by you!
 ** setTimeout is used to incur delay so authentication happens before calling
 **/
setTimeout(function(){
var caller = document.createElement('script');
caller.type = 'text/javascript';
caller.text = "voxbone.WebRTC.call('"+ number +"')";
caller.async = true;
document.getElementsByTagName('head')[0].appendChild(caller);
}, 2000);
