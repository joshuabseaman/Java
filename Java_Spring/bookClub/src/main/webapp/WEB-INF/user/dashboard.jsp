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
<title>Read Share</title>
</head>
<body style="margin:5vw;">

	<div class="container">
		<div class="row justify-content-between">
			<div class="col-4">
				<div class="mb-3">
					<h1>Welcome, <c:out value="${user.userName}"/>!</h1>	
				</div>
			</div>
			<div class="col-3">
				<div class="mb-3">
					<h4><a href="/">Logout</a></h4>
				</div>
			</div>
		</div>
		
		<div class="row justify-content-between">
			<div class="col-4">
				<div class="mb-3">
					<p>Books from everyone's shelves:</p>	
				</div>
			</div>
			<div class="col-3">
				<div class="mb-3">
					<p><a href="/books/new">+ Add a book to my shelf!</a></p>
				</div>
			</div>
		</div>
		
		<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th>ID</th>
				<th>Title</th>
				<th>Author Name</th>
				<th>Posted By</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="book" items="${books}">
				<tr>
					<td><c:out value="${book.id}"></c:out></td>
					<td><a href="/books/${book.id}"> <c:out value="${book.title}"></c:out></a></td>
					<td><c:out value="${book.author}"/></td>
					<td><c:out value="${book.creator.userName}"/></td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	</div>

</body>
</html>