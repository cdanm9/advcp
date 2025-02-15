sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ns.advcomp.Main", {
		onInit: function () {
			var oComponent = this.getOwnerComponent(),
				oParameters = oComponent.card.getCombinedParameters(),
				sCity = oParameters.city;

			this.byId("cityValue").setText(sCity);
		}
	});
});