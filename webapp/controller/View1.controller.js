sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("toDelete.toDelete.controller.View1", {
		onInit: function () {

		},
		message: function () {
			var name = this.getView().byId("inputBox").getValue();
			MessageToast.show("Hai" + name);
		},
		message1: function () {
			MessageToast.show("Hai all");
		}
	});
});