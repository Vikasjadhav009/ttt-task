angular.module('testapp',[]);

angular.module('testapp').controller('MainController',mainCtrl);


function mainCtrl($scope,$http) {
	var test;

	function action(){
		


		if($('.tb').children().length > 0)
		{
			$(".table").empty();
			$("#ttt").empty();
		}

		test = Number(document.getElementById('noInput').value);

		if(test !== '' && !isNaN(test) && test > 0){
				
					//use angular http get method to catch api send by nodeJS server
					
					$http.get('http://127.0.0.1:5000/resultapi').then(function(res){

						
						 if(test > res.data.unique.length){

						 	alert(`max limit is ${res.data.unique.length} ,therefor showing result for ${res.data.unique.length} words`);
						 	test = res.data.unique.length;


						 }

						var note = 'Data fetched from <kbd>http://terriblytinytales.com/test.txt</kbd> ,Showing Result for Input &nbsp;<kbd> '+test+' </kbd>';
						document.querySelector('#ttt').insertAdjacentHTML('beforeend',note);
						$('#ttt').show();

						var htm = '<thead><tr><th>Rank</th><th>Word</th><th>Repeat Count</th></tr></thead>' 
						document.querySelector('.table').insertAdjacentHTML('beforeend',htm);

						for(i=0;i<test;i++){


						var  html = '<tbody class="tb"><tr><td>%rank</td><td>%word</td><td>%repeatcount</td></tr></tbody>';
			
						var newHtml = html.replace('%rank',i+1);
						var newHtml = newHtml.replace('%word',res.data.unique[res.data.topN[i]]);
						var newHtml= newHtml.replace('%repeatcount',res.data.sortArr[i]);

						document.querySelector('.table').insertAdjacentHTML('beforeend',newHtml);		
						

				}
			});


		}
		else{
			alert('Please Enter Valid Input!!!!');
			clearField();
		}
		
	}	

	function clearField(){

		document.getElementById('noInput').value = '';
		document.getElementById('noInput').focus();
	}


	document.getElementById('subBtn').addEventListener('click',function(){
			
			action();
			clearField();
	});

	document.addEventListener('keypress',function(event){


			if(event.keyCode === 13){ 

					action();
					clearField();
				
			}

	});


	document.getElementById('trybtn').addEventListener('click',function(){
		$(".table").empty();
		$("#ttt").empty();
		clearField();
		$('#ttt').hide();			

	});

	
}