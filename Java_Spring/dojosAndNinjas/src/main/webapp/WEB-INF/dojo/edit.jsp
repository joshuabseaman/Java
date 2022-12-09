<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" import="java.util.Date"%>
<!-- New line below to use the JSP Standard Tag Library -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- for Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
<!-- YOUR own local CSS -->
<!-- <link rel="stylesheet" href="/css/main.css"/> -->
<!-- For any Bootstrap that uses JS or jQuery-->
<!-- <script src="/webjars/jquery/jquery.min.js"></script> -->
<!-- <script src="/webjars/bootstrap/js/bootstrap.min.js"></script> -->
<title>Edit Dojo</title>
</head>
<body style="margin:10vw;">

	<h1>Edit Dojo</h1><a href="/">Go back</a>
	<form:form action="/edit/${dojo.id}/dojos" medthod="post" modelAttribute="dojo">
		<input type="hidden" name="_method" value="put">
		<div>
			<form:label path="name">Dojo Name: </form:label><br>
			<form:errors path="name" class="text-danger"/>
			<form:input path="name" style="width:250px"/>
		</div>
		<button>Submit</button>
	</form:form>

</body>
</html>