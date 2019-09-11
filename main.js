const subredditsTemplate = Handlebars.compile(document.getElementById('subreddits-template').innerHTML);

Handlebars.registerHelper('format-number', function(number) {
	return number.toLocaleString();
});

$('form').on('submit', async function(e) {
	e.preventDefault();

	$('#results').html('<div class="loader">Loading...</div>');

	let subreddits = await $.ajax({
		type: 'GET',
		url: 'https://www.reddit.com/r/' + $('#search').val() + '.json'
	});

	let sanitizedHtml = subredditsTemplate({ subreddits: subreddits.data.children });
	console.log(sanitizedHtml);
	$('#results').html(sanitizedHtml);
});