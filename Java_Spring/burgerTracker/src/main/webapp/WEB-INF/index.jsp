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
<title>Insert title here</title>
</head>
<body style="margin:10vw;">

	<h1>Burger Tracker</h1>
	<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th>Burger Name</th>
				<th>Restaurant Name</th>
				<th>Rating (out of 5)</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="burger" items="${burgers}">
				<tr>
					<td><c:out value="${burger.name}"/></td>
					<td><c:out value="${burger.restaurant}"/></td>
					<td><c:out value="${burger.rating}"/></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<br>
	<h2>Add new burger</h2>
	<form:form action="/addBurger" mode="post" modelAttribute="burger">
		<div>
			<form:label path="name">Burger Name: </form:label><br>
			<form:errors path="name" class="text-danger"/>
			<form:input path="name" style="width:250px;"/>
		</div>
		<div>
			<form:label path="restaurant">Restaurant Name: </form:label><br>
			<form:errors path="restaurant" class="text-danger"/>
			<form:input path="restaurant" style="width:250px;"/>
		</div>
		<div>
			<form:label path="rating">Rating: </form:label><br>
			<form:errors path="rating" class="text-danger"/>
			<form:input path="rating" style="width:250px;"/>
		</div>
		<div>
			<form:label path="notes">Notes: </form:label><br>
			<form:errors path="notes" class="text-danger"/>
			<form:textarea path="notes" rows="3" style="width:250px;"/>
		</div>
		<button>Submit</button>
	</form:form>
</body>
</html>