sap.ui.controller("smax.batch30.A3.controller.ProductDetail", {

	onInit : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.getRoute("detail").attachPatternMatched(function(oEvent){
		
			var prodId = oEvent.getParameters().arguments.pid;
			
			this.getView().bindElement("/ProductSet('"+prodId+"')"); 
		}, this);
		
	},
	onCreate : function(){
		// dialog
		
		var odialog = new sap.m.Dialog({
			title : "Product Create",
			content : [
				
				new sap.m.Label({ text : "Product ID"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Name"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Category"}),
				new sap.m.Input(),
				new sap.m.Label({ text : "Supplier ID"}),
				new sap.m.Input()
			],
			buttons : [
				new sap.m.Button({ text : "Create and close", press : function(oEvent){
					//save the data in SAP
					var oModel = oEvent.getSource().getParent().getModel();
					
					var data = {
							ProductID : oEvent.getSource().getParent().getContent()[1].getValue(),
							Name : oEvent.getSource().getParent().getContent()[3].getValue(),
							Category :oEvent.getSource().getParent().getContent()[5].getValue()
						
					}
					
					oModel.create("/ProductSet", data, { 
						success : function(){
							sap.m.MessageToast.show("Data created");
						}, 
						error : function(){
							sap.m.MessageToast.show("Data not  created");
						}
						
					});
					
					
					oEvent.getSource().getParent().close();
					
				}})
				
			]
		});
		odialog.setModel(this.getOwnerComponent().getModel());
		odialog.open();
	}
});