if (typeof jQuery == 'undefined') {
	var jQ = document.createElement('script');
	jQ.type = 'text/javascript';
	jQ.onload=runthis;
	jQ.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js';
	document.body.appendChild(jQ);	
} else {
	runthis();
}
var lastMonday = function(){
	var monday = new Date();
	if (monday.getDay() != 0){
		monday.setDate(monday.getDate() - (monday.getDay() -1) );		
		return monday;
	} else {
		monday.setDate(monday.getDate() - 6);		
		return monday;		
	}
};
var runthis = function(){
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
	var mondayString = prompt("Enter the beginning Monday date in mm/dd/yy", lastMonday().ddMmYyString());
	var d = new Date(mondayString);

	
	$("#activities_0_items_0_item_date_string").val(d.teString());
	$("#activities_0_items_1_item_date_string").val(d.teString());
	$("#activities_0_items_2_item_date_string").val(d.teString());

	d.nextDay();
	$("#activities_0_items_3_item_date_string").val(d.teString());
	$("#activities_0_items_4_item_date_string").val(d.teString());

	d.nextDay();
	$("#activities_0_items_5_item_date_string").val(d.teString());
	$("#activities_0_items_6_item_date_string").val(d.teString());

	d.nextDay();
	$("#activities_0_items_7_item_date_string").val(d.teString());
	$("#activities_0_items_8_item_date_string").val(d.teString());

	d.nextDay();
	$("#activities_0_items_9_item_date_string").val(d.teString());
	$("#activities_0_items_10_item_date_string").val(d.teString());

	d.nextDay();
	$("#activities_0_items_11_item_date_string").val(d.teString());
	$("#activities_0_items_12_item_date_string").val(d.teString());

	d.nextDay();
	$("#activities_0_items_13_item_date_string").val(d.teString());
	$("#activities_0_items_14_item_date_string").val(d.teString());	
  $("form").submit();
};
