const courses = [
    { code: "WDD 230", name: "Web Frontend Development", completed: true, credits: 3 },
    { code: "CSE 121b", name: "JavaScript Language", completed: false, credits: 3 }
];

function displayCourses(filter) {
    let courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = "";
    let filteredCourses = filter ? courses.filter(c => c.code.startsWith(filter)) : courses;
    
    filteredCourses.forEach(course => {
        let courseCard = document.createElement("div");
        courseCard.textContent = `${course.code}: ${course.name} (${course.credits} credits)`;
        courseCard.style.background = course.completed ? "lightgreen" : "lightcoral";
        courseContainer.appendChild(courseCard);
    });

    let totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    let creditDisplay = document.createElement("p");
    creditDisplay.textContent = `Total Credits: ${totalCredits}`;
    courseContainer.appendChild(creditDisplay);
}

document.getElementById("allCourses").addEventListener("click", () => displayCourses(null));
document.getElementById("wddCourses").addEventListener("click", () => displayCourses("WDD"));
document.getElementById("cseCourses").addEventListener("click", () => displayCourses("CSE"));

// Mostrar todos los cursos al cargar la página
displayCourses(null);
