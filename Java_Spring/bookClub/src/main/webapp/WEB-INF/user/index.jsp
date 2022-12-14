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

	<h1>Book Club</h1>
	<br />
	<p>A place for friends to share thoughts on books.</p>
	<hr />
	<div class="container">
		<div class="row justify-content-around">
			<div class="col-4">
				<h2>Register</h2>
				<form:form action="/register" method="post" modelAttribute="user">
					<div class="mb-3">
						<form:label path="userName" class="form-label">User Name: </form:label>
						<form:errors path="userName" class="text-danger"/>
						<form:input path="userName" type="text" class="form-control"/>
					</div>
					<div class="mb-3">
						<form:label path="email" class="form-label">Email: </form:label>
						<form:errors path="email" class="text-danger"/>
						<form:input path="email" type="email" class="form-control" placeholder="name@example.com"/>
					</div>
					<div class="mb-3">
						<form:label path="password" class="form-label">Password: </form:label>
						<form:errors path="password" class="text-danger"/>
						<form:input path="password" type="password" class="form-control"/>
					</div>
					<div class="mb-3">
						<form:label path="confirm" class="form-label">Confirm PW: </form:label>
						<form:errors path="confirm" class="text-danger"/>
						<form:input path="confirm" type="password" class="form-control"/>
					</div>
					<button>Submit</button>
				</form:form>
			</div>
			
			<div class="col-md-auto"></div>
			
			<div class="col-4">
				<h2>Log In</h2>
				<form:form action="/login" method="post" modelAttribute="loginUser">
					<div class="mb-3">
						<form:label path="email" class="form-label">Email: </form:label>
						<form:errors path="email" class="text-danger"/>
						<form:input path="email" type="email" class="form-control" placeholder="name@example.com"/>
					</div>
					<div class="mb-3">
						<form:label path="password" class="form-label">Password: </form:label>
						<form:errors path="password" class="text-danger"/>
						<form:input path="password" type="password" class="form-control"/>
					</div>
					<button>Submit</button>
				</form:form>
			</div>
		</div>
	</div>

</body>
</html>