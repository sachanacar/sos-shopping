//Create dialog box
var modal = document.createElement('div');
modal.id = "modal-one";
modal.setAttribute("class", "modal");

var modal_dialog = document.createElement('div');
modal_dialog.setAttribute("class", "modal-dialog");

var modal_header = document.createElement('div');
modal_header.setAttribute("class", "modal-header");

//Create title and append to header
var modal_header_title = document.createElement('h2');
var modal_header_title_node = document.createTextNode("SOS Shopping");
modal_header_title.appendChild(modal_header_title_node);
modal_header.appendChild(modal_header_title);

//Create close button and append to header
var modal_close = document.createElement('button');
modal_close.setAttribute('class', 'btn-close');
modal_close.setAttribute("onclick", "voxbone.WebRTC.hangup()");
var modal_close_node = document.createTextNode('x');
modal_close.appendChild(modal_close_node);
modal_header.appendChild(modal_close);

//Create body and call status message
var modal_body = document.createElement('div');
modal_body.setAttribute("class", "modal-body");
var modal_body_status = document.createElement('p');
modal_body_status.id = "status_message";
var modal_body_status_node = document.createTextNode("connecting...");
modal_body_status.appendChild(modal_body_status_node);
modal_body.appendChild(modal_body_status);

//Create hangup button and append to footer
var modal_footer = document.createElement('div');
modal_footer.setAttribute("class", "modal-footer");
var hangup = document.createElement('button');
hangup.setAttribute("class", "btn");
hangup.setAttribute("onclick", "voxbone.WebRTC.hangup()");
var hangup_node = document.createTextNode("Hang up");
hangup.appendChild(hangup_node);
modal_footer.appendChild(hangup);

//Append elements to modal window
modal_dialog.appendChild(modal_header);
modal_dialog.appendChild(modal_body);
modal_dialog.appendChild(modal_footer);
modal.appendChild(modal_dialog);

//Append modal to body
document.getElementsByTagName('body')[0].appendChild(modal);