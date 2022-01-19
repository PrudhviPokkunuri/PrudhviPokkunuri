/*global QUnit*/

sap.ui.define([
	"uisecondproject./project2/controller/Project2.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Project2 Controller");

	QUnit.test("I should test the Project2 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
