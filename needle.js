function needle_finder(input_dictionary){
	var needle = input_dictionary.needle
	var haystack = input_dictionary.haystack

	for(var i = 0; i < haystack.length-1; ++i)
	{
		if(haystack[i] === needle) return i;
	}
	return -1
};

$(document).ready(function() {
	var input_dictionary;

	$.ajax({
				method: "post",
				url: "http://challenge.code2040.org/api/haystack",
				contentType: "application/json",
				data: JSON.stringify({
					token: "9bda8ddfccaecd94037ff799077d4870"
				}),
				success: function(data){
					input_dictionary = data;

					$.ajax({
								method: "post",
								contentType: "application/json",
								url: "http://challenge.code2040.org/api/haystack/validate",
								dataType: 'json',
								data: JSON.stringify({
									token: "9bda8ddfccaecd94037ff799077d4870",
									needle: needle_finder(input_dictionary)
								})
					});
				},
				error: function(data) {
					console.log(data);
				}
			});
});
