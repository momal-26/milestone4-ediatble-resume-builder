var resumeForm = document.getElementById('resumeForm');
var handleSubmit = function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contact = document.getElementById('phone').value;
    var graduation = document.getElementById('graduation').value;
    var intermediate = document.getElementById('intermediate').value;
    var matriculation = document.getElementById('matriculation').value;
    var experience1 = document.getElementById('experience1').value;
    var experience2 = document.getElementById('experience2').value;
    var experience3 = document.getElementById('experience3').value;
    var skill1 = document.getElementById('skill1').value;
    var skill2 = document.getElementById('skill2').value;
    var skill3 = document.getElementById('skill3').value;
    var resumeOutput = "  \n        <h2>Resume</h2>  \n        <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name, "</span></p>  \n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>  \n        <p><strong>Contact:</strong> <span contenteditable=\"true\">").concat(contact, "</span></p>  \n        <h3>Education:</h3>  \n        <p>Graduation from: <span contenteditable=\"true\">").concat(graduation, "</span></p>  \n        <p>Intermediate from: <span contenteditable=\"true\">").concat(intermediate, "</span></p>  \n        <p>Matriculation from: <span contenteditable=\"true\">").concat(matriculation, "</span></p>  \n        <h3>Professional Experience:</h3>  \n        <p>1. <span contenteditable=\"true\">").concat(experience1, "</span></p>  \n        <p>2. <span contenteditable=\"true\">").concat(experience2, "</span></p>  \n        <p>3. <span contenteditable=\"true\">").concat(experience3, "</span></p>  \n        <h3>Skills:</h3>  \n        <p>1. <span contenteditable=\"true\">").concat(skill1, "</span></p>  \n        <p>2. <span contenteditable=\"true\">").concat(skill2, "</span></p>  \n        <p>3. <span contenteditable=\"true\">").concat(skill3, "</span></p>  \n    ");
    var resumeOutputDiv = document.getElementById('resumeOutput');
    resumeOutputDiv.innerHTML = resumeOutput;
};
if (resumeForm) {
    resumeForm.addEventListener('submit', handleSubmit);
}
