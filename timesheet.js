var TW = {};
TW.TimeAndExpenses = new function(){
	this.loadExpenses = function(){		
		if (document.URL == "https://te.thoughtworks.com/expense_reports/clone_selected/133597"){
			this.weeklyExpenses();
		} else if (document.URL == "https://te.thoughtworks.com/expense_reports/clone_selected/145408"){
			this.phoneExpense();
		}
		if (document.URL == "https://te.thoughtworks.com/expense_reports"){
		 if (document.getElementById("flash_notice").innerHTML.match(/Successfully created expense report/)){
		   location.href = document.forms[0].action + "/edit";
		 } 
		}		
	};
	this.weeklyExpenses = function(){
		this.addDateFunctions();				
		
		var mondayString = prompt("Enter the beginning Monday date in mm/dd/yy", this.lastMonday().ddMmYyString());
		var d = new Date(mondayString);

		//Monday = 3 meals (Breakfast + Lunch + Dinner)
		document.getElementById("activities_0_items_0_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_1_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_2_item_date_string").value = d.teString();

		//Tuesday = 2 meals (Lunch + Dinner)
		d.nextDay();
		document.getElementById("activities_0_items_3_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_4_item_date_string").value = d.teString();

		//Wednesday = 2 meals (Lunch + Dinner)
		d.nextDay();
		document.getElementById("activities_0_items_5_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_6_item_date_string").value = d.teString();

		//Thursday = 2 meals (Lunch + Dinner)
		d.nextDay();
		document.getElementById("activities_0_items_7_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_8_item_date_string").value = d.teString();

		//Friday = 2 meals (Lunch + Dinner)
		d.nextDay();
		document.getElementById("activities_0_items_9_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_10_item_date_string").value = d.teString();

		//Saturday = 2 meals (Lunch + Dinner)
		d.nextDay();
		document.getElementById("activities_0_items_11_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_12_item_date_string").value = d.teString();

		//Sunday = 2 meals (Lunch + Dinner)
		d.nextDay();
		document.getElementById("activities_0_items_13_item_date_string").value = d.teString();
		document.getElementById("activities_0_items_14_item_date_string").value = d.teString();	
		document.forms[0].submit();
	};
	this.phoneExpense = function(){
		this.addDateFunctions();				
		var today = new Date();
		var todayString = prompt("Enter phone expense date in mm/dd/yy", today.ddMmYyString());
		var today = new Date(todayString);
		
		document.getElementById("activities_0_items_0_item_date_string").value = today.teString();
		document.forms[0].submit();		
	};

	this.lastMonday = function(){
		var monday = new Date();
		if (monday.getDay() != 0){
			monday.setDate(monday.getDate() - (monday.getDay() -1) );		
			return monday;
		} else {
			monday.setDate(monday.getDate() - 6);		
			return monday;		
		}
	};
	this.addDateFunctions = function(){
		Date.prototype.nextDay = function(){this.setDate(this.getDate()+1)};	
		Date.prototype.ddMmYyString = function(){
			return (this.getMonth()+1) + "/" + this.getDate() + "/" + this.getFullYear();
		};

		Date.prototype.teString = function(){
			var month=new Array(12);
			month[0]="Jan";
			month[1]="Feb";
			month[2]="Mar";
			month[3]="Apr";
			month[4]="May";
			month[5]="Jun";
			month[6]="Jul";
			month[7]="Aug";
			month[8]="Sep";
			month[9]="Oct";
			month[10]="Nov";
			month[11]="Dec";
			return this.getDate() + " " + month[this.getMonth()] + " " + this.getFullYear();		
		};		
	};
	this.loadExpenses();
}


