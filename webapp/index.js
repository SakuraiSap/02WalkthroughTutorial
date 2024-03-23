sap.ui.define([
    'sap/ui/core/mvc/XMLView',
], (XMLView)=>{
    "use strict";
    XMLView.create({
        viewName: "ui5.walkthrough.view.App"
    }).then(
        (oView)=>oView.placeAt("content")
    );
});




// ========== Step02 ========================
// sap.ui.define([
//     'sap/m/Text',
// ], (Text) =>{
//     "use strict";
//     new Text({
//         text: "Hello world Step03"
//     }).placeAt("content")
// });

// ========== Step01 ========================-
// sap.ui.define([], () => {
// 	"use strict";
// 	alert("UI5 is ready");
// });
