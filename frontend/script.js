const apiBase = "http://localhost:3000";

let userToken = "";
let adminToken = "";

document.getElementById("user-signup-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const form = e.target;
	const data = {
		email: form.email.value,
		password: form.password.value,
		firstName: form.firstName.value,
		lastName: form.lastName.value
	};
	const res = await fetch(`${apiBase}/user/signup`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	});
	const result = await res.json();
	alert(result.message || result.error);
});

document.getElementById("user-signin-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const form = e.target;
	const data = {
		email: form.email.value,
		password: form.password.value
	};
	const res = await fetch(`${apiBase}/user/signin`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data)
	});
	const result = await res.json();
	if(result.token) {
		userToken = result.token;
		alert("User signed in");
	} else {
		alert(result.message || result.error);
	}
});

document.getElementById("load-courses-btn").addEventListener("click", async () => {
	const res = await fetch(`${apiBase}/course/preview`);
	const result = await res.json();
	const coursesDiv = document.getElementById("courses-list");
	coursesDiv.innerHTML = "";
	result.courses.forEach(course => {
		const div = document.createElement("div");
		div.textContent = `ID: ${course._id || course.id} - ${course.title} - $${course.price}`;
		coursesDiv.appendChild(div);
	});
});

document.getElementById("purchase-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const form = e.target;
	const data = { courseId: form.courseId.value };
	const res = await fetch(`${apiBase}/course/purchase`, {
		method: "POST",
		headers: { 
			"Content-Type": "application/json",
			"token": userToken
		},
		body: JSON.stringify(data)
	});
	const result = await res.json();
	alert(result.message || result.error);
});

document.getElementById("admin-signup-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const form = e.target;
	const data = {
		email: form.email.value,
		password: form.password.value,
		firstName: form.firstName.value,
		lastName: form.lastName.value
	};
	const res = await fetch(`${apiBase}/admin/signup`, {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	});
	const result = await res.json();
	alert(result.message || result.error);
});

document.getElementById("admin-signin-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const form = e.target;
	const data = {
		email: form.email.value,
		password: form.password.value
	};
	const res = await fetch(`${apiBase}/admin/signin`, {
		method: "POST",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	});
	const result = await res.json();
	if(result.token) {
		adminToken = result.token;
		alert("Admin signed in");
	} else {
		alert(result.message || result.error);
	}
});

document.getElementById("create-course-form").addEventListener("submit", async (e) => {
	e.preventDefault();
	const form = e.target;
	const data = {
		title: form.title.value,
		description: form.description.value,
		imageUrl: form.imageUrl.value,
		price: Number(form.price.value)
	};
	const res = await fetch(`${apiBase}/admin/course`, {
		method: "POST",
		headers: { 
			"Content-Type": "application/json",
			"token": adminToken
		},
		body: JSON.stringify(data)
	});
	const result = await res.json();
	alert(result.message || result.error);
});
