sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], (Controller, JSONModel, formatter, Filter, FilterOperator) => {
	"use strict";

	return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
		formatter: formatter,
        onInit() {
			const oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
        onFilterInvoices(oEvent){
            // build filter array
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if(sQuery){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }
            // filter binding
            const oList = this.byId("invoiceList");
            const oBingding = oList.getBinding("items");
            oBingding.filter(aFilter);

        }
        ,
        onPress(oEvent){
            const oItem = oEvent.getSource();
            const oRouter = this.getOwnerComponent().getRouter();
            const oContext = oItem.getBindingContext("invoice").getPath().substr(1);
            oRouter.navTo("detail",{
                invoicePath: window.encodeURIComponent(oContext)
            });
        }
	});
});