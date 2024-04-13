sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
  "use strict";

  return Controller.extend("com.udo.zproducts2.controller.BaseController", {
    // getResourceBundle() {
    //   return this.getOwnerComponent().getModel("i18n").getResourceBundle();
    // },

    setModel: function (oModel, sName) {
      return this.getView().setModel(oModel, sName);
    },

    getModel: function (sName) {
      return this.getView().getModel(sName);
    },

    getRouter: function () {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    navTo: function (sRoute, oParameters, oComponentTargetInfo, bReplace) {
      this.getRouter().navTo(
        sRoute,
        oParameters,
        oComponentTargetInfo,
        bReplace
      );
    },
  });
});
