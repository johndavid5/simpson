var JUtils = {

	// http://stackoverflow.com/questions/5416920/timestamp-to-human-readable-format
	getFormattedDate: function getFormattedDate() {

		var date = new Date();

		var month = date.getMonth() + 1;
		var day = date.getDate();
		var hour = date.getHours();
		var min = date.getMinutes();
		var sec = date.getSeconds();
		
		month = (month < 10 ? "0" : "") + month;
		day = (day < 10 ? "0" : "") + day;
		hour = (hour < 10 ? "0" : "") + hour;
		min = (min < 10 ? "0" : "") + min;
		sec = (sec < 10 ? "0" : "") + sec;
		
		var str = date.getFullYear() + "-" + month + "-" + day + " " +  hour + ":" + min + ":" + sec;
		
		/*alert(str);*/
		
		return str;
	},/* getFormattedDate() */

	
	logIt: function logIt() {
		let args = Array.prototype.slice.call(arguments);
		args = ["[" + JUtils.getFormattedDate() + "]: "].concat(args); 
		console.log.apply(console, args);
		//console.log("[" + JUtils.getFormattedDate() + "]: ", args...);
	},/* logIt() */

	// http://stackoverflow.com/questions/2141520/javascript-variable-number-of-arguments-to-function
	//
	// log() {
	//    let args = Array.prototype.slice.call(arguments);
	//    args = ['MyObjectName', this.id_].concat(args);
	//    console.log.apply(console, args);
	// }

}

module.exports = JUtils;
