sap.ui.define(
  ["com/udo/zproducts2/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return BaseController.extend("com.udo.zproducts2.controller.Home", {
      onInit: function () {
        this.getResourceBundle().getText("tableColumnProductId");
      },
    });
  }
);
