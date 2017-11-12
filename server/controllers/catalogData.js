function saveRecord(formattedRequest) {
	console.log(formattedRequest);
	console.log('save data');
	return;
}

module.exports = {
	url:'/save',
	method:'post',
	handler: saveRecord
}