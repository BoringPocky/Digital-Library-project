
// THIS IS THE FUCTION TO SHOW THE INFORMATION OF THE BOOK WHEN HOVER OVER

$('.button').hover(function(){
	//MOUSE ENTER 

	$('.popup').addClass('active');
	//ADD CLASS TO POPUP CLASS


	$idnumber = $(this).attr('data-id');
	// attr = attribute
	
	$book = data[$idnumber]
	$name = $book.name;
	$('.name').text($name);

	$author = $book.author;
	$('.author').text($author);

	$year = $book.year;
	$('.year').text($year);

	$callno = $book.callno;
	$('.callno').text($callno);

	$location = $book.location;
	$('.location').text($location);


},function(){
	//MOUSE EXIT
	$('.popup').removeClass('active')

	$('.name').text('')
	$('.author').text('')	
	$('.year').text('')
	$('.callno').text('')
	$('.location').text('')
});




