sap.ui.define([
    'sap/ui/core/UIComponent',
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
    // "sap/ui/model/resource/ResourceModel"
], (UIComponent, JSONModel, Device)=>{
    "use strict";
    return UIComponent.extend("ui5.walkthrough.Component",{
        metadata:{
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        // metadata:{
        //     "interfaces":["sap.ui.core.IAsyncContentCreation"],
        //     "rootView":{
        //         "viewName": "ui5.walkthrough.view.App",
        //         "type": "XML",
        //         "id": "app"
        //     }
        // },
        init(){
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            // set data model
            const oData = {
                recipient : {
                name : "World Step10"
                }
            };
            const oModel = new JSONModel(oData);
            this.setModel(oModel);

            // set device mode
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");
            
			// create the views based on the url/hash
			this.getRouter().initialize();

            // // set i18n model
            // const i18nModel = new ResourceModel({
            //     bundleName: "ui5.walkthrough.i18n.i18n"
            // });
            // this.setModel(i18nModel, "i18n");
        },
        getContentDensityClass(){
            return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
        }
    });
});