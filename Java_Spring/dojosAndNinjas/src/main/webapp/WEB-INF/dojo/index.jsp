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
<title>Dojos</title>
</head>
<body style="margin:10vw;">

	<h1>Dojos</h1>
	<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th>Name</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="dojo" items="${dojos}">
				<tr>
					<td><a href="/dojos/${dojo.id}"><c:out value="${dojo.name}"></c:out></a></td>
					<td><a href="/edit/${dojo.id}/dojos" class="text-warning">Edit</a>
						<%-- <form:form action="/delete/${dojo.id}/dojos" method="post">
    					<input type="hidden" name="_method" value="delete">
	    				<button class="text-danger">Delete</button>
	    				</form:form> --%>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<br>
	<h2>New Dojo</h2>
	<form:form action="/addDojo" mode="post" modelAttribute="dojo">
		<div>
			<form:label path="name">Name: </form:label><br>
			<form:errors path="name" class="text-danger"/>
			<form:input path="name" style="width:250px;"/>
		</div>
		<button>Submit</button>
	</form:form>
	<br>
	<h2><a href="/addNinja">Add a New Ninja!</a></h2>

</body>
</html>