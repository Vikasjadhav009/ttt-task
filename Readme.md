
1.INTRO
	-This is Simple application which accept input N from user and return Top N frequently occuring words form 	 text file which is stored at remote server

2.CODE COMPONETS
	-Angular Js is used to design Front-end which accept input N from user.
	-At Backend NodeJS is used which fetch file from remote server.
	-at back-end text file is converted to array by using JS split method.
	-Some compare and sorting oprations perform on array to find out unique words and repeat words
	-then Object is crated to store this arrays,and this object is then converted to JSON to create API
	-This API catched in fronted by http-get request,performed some operation required and display output

3.LIBRARIES USED
	-in Front-end 'Bootstrap' and 'Jquery' is used for some styling
	-in Back-end 
		-'Express' is used for API and routing
		-'Request' module use for fetching data from remote server
		-'ejs' is used for server-side templating		


