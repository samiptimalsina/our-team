$(document).ready(() =>{
	$('searchForm').on('submit',(e) =>{
		let sarchText= $('searchForm').val();
		getMovies(searchText);
		e.preventDefault();
	});
});
function getMovies(searchText){
	axios.get('http://www.omdbapi.com?s='+searchText)
	.then((respose)=>{
		consol.log(response);
		let movies=response.data.Search;
		let output='';
		$.each(movies,(index,movie)=> {
			output +=`

			<div class="col-md-3">
                 <div class="well text-center">
                 <img src="${movie.Poster}">
                 <h5>${movie.Title}<h5>
                 <a onclick="movieSelected('${movie.imdid}')" class="btn btn-primary" href="#">Movie Details</a>
                 </div>
			<div>`;
		

		});

		$('movies').html(output);
	});
}