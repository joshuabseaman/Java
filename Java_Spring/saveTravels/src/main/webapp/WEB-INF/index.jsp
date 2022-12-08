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
<body style="margin:10vw;">

	<h1>Save Travels</h1>
	<table class="table table-striped table-bordered">
		<thead>
			<tr>
				<th>Expense</th>
				<th>Vendor</th>
				<th>Amount</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="expense" items="${expenses}">
				<tr>
					<td><a href="/expenses/${expense.id}"><c:out value="${expense.name}"></c:out></a></td>
					<td><c:out value="${expense.vendor}"></c:out></td>
					<td>$<c:out value="${expense.amount}"></c:out></td>
					<td><a href="/edit/${expense.id}" class="text-warning">Edit</a>
						<form:form action="/delete/${expense.id}" method="post">
    					<input type="hidden" name="_method" value="delete">
	    				<button class="text-danger">Delete</button>
	    				</form:form>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<br>
	<h2>Add an expense:</h2>
	<form:form action="/addExpense" mode="post" modelAttribute="expense">
		<div>
			<form:label path="name">Expense Name: </form:label><br>
			<form:errors path="name" class="text-danger"/>
			<form:input path="name" style="width:250px;"/>
		</div>
		<div>
			<form:label path="vendor">Vendor: </form:label><br>
			<form:errors path="vendor" class="text-danger"/>
			<form:input path="vendor" style="width:250px;"/>
		</div>
		<div>
			<form:label path="amount">Amount: </form:label><br>
			<form:errors path="amount" class="text-danger"/>
			<form:input path="amount" type="double" min="0" style="width:250px;"/>
		</div>
		<div>
			<form:label path="description">Description: </form:label><br>
			<form:errors path="description" class="text-danger"/>
			<form:textarea path="description" style="width:250px;"/>
		</div>
		<button>Submit</button>
	</form:form>

</body>
</html>