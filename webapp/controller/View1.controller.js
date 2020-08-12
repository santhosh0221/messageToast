sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("toDelete.toDelete.controller.View1", {
		onInit: function () {

		},
		message: function () {
			MessageToast.show("Hai");
		},
		message1: function () {
			MessageToast.show("Hai all");
		}
	});
});