$.ajax({
				method: "post",
				contentType: "application/json",
				url: url_for("http://challenge.code2040.org/api/register"),
				dataType: 'json',
				data: JSON.stringify({
					token: "9bda8ddfccaecd94037ff799077d4870",
					github: "https://github.com/miguelmolina95/CODE2040CHALLENGE"
				});
