sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ui.List.project1.controller.List", {
            onInit: function () {
                var oEmpData={

                    "Employee":{

                        "FName":"Prudhvi",

                        "LName":"P", 

                        "Email":"prudhvipokkunuri@gmail.com",

                        "MobileNumber":"9876543210",

                        "Gender":true,

                        "H.No":"767/990",

                        "LandMark":"hhngbnkiu",

                        "Pincode":"543559"

 

                    },
                    "DialogEmployeeDetails" : {},

                    "EmployeeValueState":

                    {

                        "FName_VS":"Error",

                        "FName_VST":"please enter the first name",

                        "LName_VS":"None",

                        "LName_VST":""

                    },

                    "EmployeeList":[

                        {

                         "Employee_id":"501",

                         "FName":"JACK",

                         "LName":"Samuel",

                         "Email":"huoashoau@njn",

                         "MobileNumber":"8976543210",

                         "Gender":"Male",

                         "H.No":"878/98",

                         "LandMark":"uyhk",

                         "Pincode":"786990"

                        },

                        {

                            "Employee_id":"502",

                            "FName":"VIDYA",

                            "LName":"K",

                            "Email":"iaisjashoau@njn",

                            "MobileNumber":"8796543210",

                            "Gender":"Female",

                            "H.No":"878/00",

                            "LandMark":"ghlkjhk",

                            "Pincode":"78696788"

                        },

                    ]

 

                    };

                    var oModel=new sap.ui.model.json.JSONModel(oEmpData);

                    this.getView().setModel(oModel,"EmpModel");

            },

           onPressSave:function()

           {

               var oEmpModel=this.getView().getModel("EmpModel");

               var oEmpData=oEmpModel.getProperty("/Employee");

               if(!oEmpData.FName && !oEmpData.LName || oEmpData,Email){
                   var msg = 'Enter Mandatory fields';
        MessageToast.show(msg);
               }

               else{
                   var emplist = oEmpModel.getProperty("/EmployeeList");
                   emplist.push(oEmpData);
                   oEmpModel.setProperty("/EmployeeList", emplist);
                   var msgs = 'Record inserted';
                   MessageToast.show(msgs);

                  
               }

            },

           onPressClear:function(){

 

           },

           onChangeFName:function(oEvent)

           {

               var sValue=oEvent.getSource().getValue();

               if(sValue.length>=15)

               {

                   oEvent.getSource().EmployeeValueState("Error");

                   oEvent.getSource().EmployeeValueStateText(" length should be 15");

               }

               else{

                   oEvent.getSource().EmployeeValueState("none");

                   oEvent.getSource().EmployeeValueStateText("");

               }

           },

           onChangeMobileNumber:function(oEvent)

           {

               var sValue=oEvent.getSource().getValue();

               if(sValue.length!=10)

               {

                oEvent.getSource().EmployeeValueState("Error");

                oEvent.getSource().EmployeeValueStateText(" length should be 10");

               }

               else{

 

                oEvent.getSource().EmployeeValueState("none");

                oEvent.getSource().EmployeeValueStateText("");

               }

           },

           onSelectGender:function(oEvent)

           {

               var oEmpModel=this.getView().getModel("EmpModel");

               var sSelectedData=oEvent.getSource().getSelectedButton().getText();

               oEmpModel.setProperty("/Employee/Gender",sSelectedData);

           },

            MyFormatter:function(FName,LName,Gender){

               var sValue;

               if(Gender=="Male")

               {

                   sValue="Mr." + FName  + " " + LName;

                   //sValue="Mr.";

               }

               else if(Gender=="Female")

               {

                   sValue="Mrs." + FName + " " + LName ;

                   //sValue="Mrs.";

               }

               return sValue;

            },

            ValidateMobileNum:function(MobileNumber)

            {

                if(MobileNumber.length==10){

                    return 'Success';

                }

                else if (MobileNumber.length <10 || MobileNumber.length> 10)

                {

                    return 'Error';

                }

            },
            onPressShow:function(oEvent){

                var that=this;

                let sSelectedPath=oEvent.getSource().getBindingContext("EmpModel").getPath();

                let oModel=this.getView().getModel("EmpModel");

                let oSelectedData=oModel.getProperty(sSelectedPath);

                oModel.setProperty("/DialogEmployeeDetails",oSelectedData);

                if(!that._oDialogEmployeeDetails)

                {

                    that._oDialogEmployeeDetails=sap.ui.xmlfragment(

                        this.getView().getId(),

                        "ui.List.project1.fragment.DetailEmployee",

                        this

                    );

                }

                that.getView().addDependent(that._oDialogEmployeeDetails);

                that._oDialogEmployeeDetails.open();

            },

            onclose:function(){

                var that=this;

                if(that._oDialogEmployeeDetails){

                    that.getView().removeDependent(that._oDialogEmployeeDetails);

                    that._oDialogEmployeeDetails.close();

                }
            }
        });
    });
