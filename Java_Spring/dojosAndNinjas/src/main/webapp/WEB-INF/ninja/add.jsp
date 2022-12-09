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
<title>Add Ninja</title>
</head>
<body style="margin:10vw;">

	<h1>New Ninja</h1><a href="/">Go back</a>
	<form:form action="/addNinja" method="post" modelAttribute="ninja">
		<div>
			<form:label path="creator">Dojo: </form:label><br>
			<form:select path="creator">
				<c:forEach var="dojo" items="${dojos}">
					<form:option value="${dojo.id}">
						<c:out value="${dojo.name}"/>
					</form:option>
				</c:forEach>
			</form:select>
		</div>
		<div>
			<form:label path="firstName">First Name: </form:label><br>
			<form:errors path="firstName" class="text-danger"/>
			<form:input path="firstName" style="width:250px;"/>
		</div>
		<div>
			<form:label path="lastName">Last Name: </form:label><br>
			<form:errors path="lastName" class="text-danger"/>
			<form:input path="lastName" style="width:250px;"/>
		</div>
		<div>
			<form:label path="age">Age: </form:label><br>
			<form:errors path="age" class="text-danger"/>
			<form:input path="age" type="number" min="0" style="width:250px;"/>
		</div>
		<button>Submit</button>
	</form:form>

</body>
</html>