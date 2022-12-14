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
<title>Book Share</title>
</head>
<body style="margin:5vw;">

	<div class="container">
		<div class="row justify-content-between">
			<div class="col-4">
				<div class="mb-3">
					<h2>Change your Entry</h2>	
				</div>
			</div>
			<div class="col-3">
				<div class="mb-3">
					<p><a href="/books">Back to the shelves</a></p>
				</div>
			</div>
		</div>
		<hr />
		<div class="row justify-content-around">
			<div class="col-6">
				<form:form action="/books/${book.id}/edit" method="put" modelAttribute="book">
				<form:hidden path="creator" value="${id}"/>
					<div class="mb-3">
						<form:label path="title" class="form-label">Title: </form:label>
						<form:errors path="title" class="text-danger"/>
						<form:input path="title" type="text" class="form-control"/>
					</div>
					<div class="mb-3">
						<form:label path="author" class="form-label">Author: </form:label>
						<form:errors path="author" class="text-danger"/>
						<form:input path="author" type="text" class="form-control"/>
					</div>
					<div class="mb-3">
						<form:label path="thoughts" class="form-label">Thoughts: </form:label>
						<form:errors path="thoughts" class="text-danger"/>
						<form:textarea path="thoughts" type="textarea" class="form-control"/>
					</div>
					<button>Submit</button>
					</form:form>
			</div>
		</div>
	</div>

</body>
</html>