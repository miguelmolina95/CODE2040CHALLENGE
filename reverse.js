function reversed(input_string){
	var reversed = "";

	if (input_string === "") return input_string;

	for(var i = input_string.length - 1; i >= 0; --i)
	{
		reversed = reversed + input_string[i];
	}
	return reversed
};

$(document).ready(function() {
	var input_string = "";

	$.ajax({
				method: "post",
				url: "http://challenge.code2040.org/api/reverse",
				contentType: "application/json",
				data: JSON.stringify({
					token: "9bda8ddfccaecd94037ff799077d4870"
				}),
				success: function(data){
					input_string = data;

					$.ajax({
								method: "post",
								contentType: "application/json",
								url: "http://challenge.code2040.org/api/reverse/validate",
								dataType: 'json',
								data: JSON.stringify({
									token: "9bda8ddfccaecd94037ff799077d4870",
									string: reversed(input_string)
								})
					});
				},
				error: function(data) {
					console.log(data);
				}
			});
});
