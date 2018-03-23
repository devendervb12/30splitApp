sap.ui.controller("smax.batch30.A3.controller.ProductList", {

	
	onInit : function(){
		
		var oList = this.getView().byId("idList");
		
		oList.attachUpdateFinished(function(){
			
			this.getView().byId("idList").getItems()[0].firePress();
		},this)
	},
	onItemSelection : function(oEvent){
		
		var productId = oEvent.getSource().getTitle();
		this.getOwnerComponent().getRouter().navTo("detail", { pid : productId});
	}

});