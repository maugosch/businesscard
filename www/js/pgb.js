function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function bCard() {
	
	var personalInfo = {
		
		name: "Malgorzata",
		surname: "Kindrat",
		email: "yolo@swag.com",
		website: "emo.com",
		dean: "KrDUIs1011",
		field: "Applied Informatics - master"
	};
	
	navigator.notification.alert("Name and surname: " + personalInfo.name 
	+ personalInfo.surname + "\n Email: " + personalInfo.email + "\n Website: " 
	+ personalInfo.website + "\n Dean\'s group number: " + personalInfo.dean 
	+ "\n Field of study: " + personalInfo.field);
	
}