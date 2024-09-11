//@ui5-bundle ns/advcomp/Component-preload.js
sap.ui.require.preload({
	"ns/advcomp/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent"],function(e){"use strict";var n=e.extend("ns.advcomp.Component",{onCardReady:function(e){this.card=e;e.getCombinedParameters();e.getManifestEntry("/sap.card")}});return n});
},
	"ns/advcomp/Main.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("ns.advcomp.Main",{onInit:function(){var e=this.getOwnerComponent(),t=e.card.getCombinedParameters(),n=t.city;this.byId("cityValue").setText(n)}})});
},
	"ns/advcomp/View.view.xml":'<mvc:View xmlns:core="sap.ui.core"\n          xmlns:mvc="sap.ui.core.mvc"\n          xmlns="sap.m"\n          xmlns:html="http://www.w3.org/1999/xhtml"\n          width="100%"\n          displayBlock="true"\n          controllerName="ns.advcomp.Main"><VBox class="sapUiSmallMargin"><Label text="Value for parameter \'city\' is:" /><Text id="cityValue"/></VBox></mvc:View>\n',
	"ns/advcomp/manifest.json":'{"_version":"1.15.0","sap.app":{"id":"ns.advcomp","type":"card","title":"Advanced Card","subTitle":"","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"phone":true,"tablet":true},"icons":{"icon":"sap-icon://technical-object"}},"sap.ui5":{"rootView":{"viewName":"ns.advcomp.View","type":"XML","async":true,"id":"app"},"dependencies":{"minUI5Version":"1.38","libs":{"sap.m":{}}}},"sap.card":{"type":"Component","designtime":"dt/configuration","configuration":{"parameters":{"city":{"value":"Berlin"}}},"header":{"title":"Visit our workshop"}},"sap.platform.mobilecards":{"compatible":false}}'
});
//# sourceMappingURL=Component-preload.js.map
