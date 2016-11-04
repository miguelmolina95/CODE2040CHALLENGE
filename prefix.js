String.prototype.beginsWith = function (string) {
    return(this.indexOf(string) === 0);
};

function prefix_solver(input_dictionary){
	var prefix = input_dictionary.prefix
	var array = input_dictionary.array
	var rArray = new Array();

	for(var i = 0; i < array.length-1; ++i)
	{
		if(!array[i].beginsWith(prefix)) rArray.push(array[i]);
	}
	return rArray;
};

$(document).ready(function() {
	var input_dictionary;

	$.ajax({
				method: "post",
				url: "http://challenge.code2040.org/api/prefix",
				contentType: "application/json",
				data: JSON.stringify({
					token: "9bda8ddfccaecd94037ff799077d4870"
				}),
				success: function(data){
					input_dictionary = data;

					$.ajax({
								method: "post",
								contentType: "application/json",
								url: "http://challenge.code2040.org/api/prefix/validate",
								dataType: 'json',
								data: JSON.stringify({
									token: "9bda8ddfccaecd94037ff799077d4870",
									array: prefix_solver(input_dictionary)
								})
					});
				},
				error: function(data) {
					console.log(data);
				}
			});
});
