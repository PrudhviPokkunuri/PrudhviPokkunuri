sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller, Filter, FilterOperator, MessageToast) {
    "use strict";

    return Controller.extend("ui.firstapp.list1.controller.Nextview", {
        onInit: function () {

        },
        onPressBack:function(){
            var oRouter=sap.ui.core.UIComponent.getRouter(this);
            oRouter.navTo("RouterMyFifthView");
        }
    });
});