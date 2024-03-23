// sap.ui.define([], () => {
// 	"use strict";
// 	alert("UI5 is ready");
// });
sap.ui.define([
    'sap/m/Text',
], (Text) =>{
    "use strict";
    new Text({
        text: "Hello world Step03"
    }).placeAt("content")
});