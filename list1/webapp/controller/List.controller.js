sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Filter, FilterOperator, MessageToast) {
        "use strict";

        return Controller.extend("ui.firstapp.list1.controller.List", {
            onInit: function () {

            },
            onSearch:function (oEvent){
                var aFilters=[];
                var sQuery=oEvent.getSource().getValue();
                if (sQuery && sQuery.length > 0 ) {
                    var filter=new Filter("Name", FilterOperator.Contains,sQuery);
                    aFilters.push(filter);
                }
                var oList=this.byId("idList");
                var oBinding=oList.getBinding("items");
                oBinding.filter(aFilters, "Application");
            },
            OnPressNext:function()
            {
                var oRouter=sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetNextView");
            },
            onPressData:function()
            {
                MessageToast.show(moment().format('MMM Do YYYY,h:mm:ss a'));
            }
        });
    });
