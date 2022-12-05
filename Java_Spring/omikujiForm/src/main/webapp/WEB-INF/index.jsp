<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.Date"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
<head>
<!-- for Bootstrap CSS -->
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<!-- YOUR own local CSS -->
<link rel="stylesheet" href="/css/style.css"/>
<!-- For any Bootstrap that uses JS or jQuery-->
<script src="/webjars/jquery/jquery.min.js"></script>
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<title>Omikuji</title>
</head>
<body>

	<div class="card" style="width: 30rem;">
	<h1>Send an Omikuji!</h1>
		<form action="/" method="post">
	  	<div class="form-group">
	    	<label for="number">Pick any number from 5 to 25</label>
	    	<input type="number" class="form-control" name="number">
	  	</div>
	  
	   	<div class="form-group">
	    	<label for="city">Enter the name of any city.</label>
	    	<input type="text" class="form-control" name="city">
	    </div>
	  
	   	<div class="form-group">
	    	<label for="exampleInputEmail1">Enter the name of any real person.</label>
	    	<input type="text" class="form-control" name="person">
	  	</div>
	  
	   	<div class="form-group">
	    	<label for="exampleInputEmail1">Enter professional endeavor or hobby:</label>
	    	<input type="text" class="form-control" name="hobby">
	  	</div>
	  
	   	<div class="form-group">
	    	<label for="exampleInputEmail1">Enter any type of living thing.</label>
	    	<input type="text" class="form-control" name="thing">
	  	</div>
	  
	  	<div class="form-group">
	    	<label for="exampleFormControlTextarea1">Say something nice to someone:</label>
	    	<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="nice"></textarea>
	  	</div>
	  
	  	<p class="form-group">Send and show a friend</p>
	  
	  	<input type="submit" value="Send" class="btn btn-primary"/>
		</form>
	</div>

</body>
</html>