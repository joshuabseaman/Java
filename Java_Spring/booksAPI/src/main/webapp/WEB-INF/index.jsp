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
<title>All Books</title>
</head>
<body style="margin: 24px">

	<h1>All Books</h1>
	<table class="table table-striped table-bordered">
    	<thead>
        	<tr>
            	<th>ID</th>
            	<th>Title</th>
            	<th>Language</th>
            	<th># Pages</th>
            	<th>Actions</th>
        	</tr>
    	</thead>
    	<tbody>
			<c:forEach var="book" items="${books}">
				<tr>
					<td><c:out value="${book.id}"></c:out></td>
					<td><a href="/books/${book.id}"><c:out value="${book.title}"></c:out></a></td>
					<td><c:out value="${book.language}"></c:out></td>
					<td><c:out value="${book.numberOfPages}"></c:out></td>
					<td> <a href="/books/${book.id}/edit" class="text-warning">Edit</a>
						<form:form action="/books/${book.id}" method="post">
    					<input type="hidden" name="_method" value="delete">
	    				<button class="text-danger">Delete</button>
						</form:form>
					</td>
					
				</tr>	
			</c:forEach>
    	</tbody>
	</table>

</body>
</html>