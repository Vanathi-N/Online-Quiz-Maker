function registerUser() {
    fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
    }).then(response => response.text()).then(alert);
}
function loginUser() {
    fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value
        })
    }).then(response => response.text()).then(alert);
}
fetch('http://localhost:8080/api/quizzes')
    .then(response => response.json())
    .then(data => {
        let list = document.getElementById("quizList");
        data.forEach(quiz => {
            let li = document.createElement("li");
            li.textContent = quiz.title;
            list.appendChild(li);
        });
    });
