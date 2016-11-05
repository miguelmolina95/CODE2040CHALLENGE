function time_solver(input_dictionary){
	var datestamp = input_dictionary.datestamp
	var interval = input_dictionary.interval

	var d = new Date(datestamp);
	var n_d = new Date(d.getTime() + interval*1000);

	return n_d.toISOString().substring(0,19) + n_d.toISOString()[23];
};

$(document).ready(function() {
	var input_dictionary;

	$.ajax({
				method: "post",
				url: "http://challenge.code2040.org/api/dating",
				contentType: "application/json",
				data: JSON.stringify({
					token: "9bda8ddfccaecd94037ff799077d4870"
				}),
				success: function(data){
					input_dictionary = data;

					$.ajax({
								method: "post",
								contentType: "application/json",
								url: "http://challenge.code2040.org/api/dating/validate",
								dataType: 'json',
								data: JSON.stringify({
									token: "9bda8ddfccaecd94037ff799077d4870",
									datestamp: time_solver(input_dictionary)
								})
					});
				},
				error: function(data) {
					console.log(data);
				}
			});
});
