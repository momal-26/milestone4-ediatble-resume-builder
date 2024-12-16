const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;  

const handleSubmit = (event: Event): void => {  
    event.preventDefault();  

    const name = (document.getElementById('name') as HTMLInputElement).value;  
    const email = (document.getElementById('email') as HTMLInputElement).value;  
    const contact = (document.getElementById('phone') as HTMLInputElement).value;  
    const graduation = (document.getElementById('graduation') as HTMLInputElement).value;  
    const intermediate = (document.getElementById('intermediate') as HTMLInputElement).value;  
    const matriculation = (document.getElementById('matriculation') as HTMLInputElement).value;  
    const experience1 = (document.getElementById('experience1') as HTMLInputElement).value;  
    const experience2 = (document.getElementById('experience2') as HTMLInputElement).value;  
    const experience3 = (document.getElementById('experience3') as HTMLInputElement).value;  
    const skill1 = (document.getElementById('skill1') as HTMLInputElement).value;  
    const skill2 = (document.getElementById('skill2') as HTMLInputElement).value;  
    const skill3 = (document.getElementById('skill3') as HTMLInputElement).value;  

    const resumeOutput: string = `  
        <h2>Resume</h2>  
        <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>  
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>  
        <p><strong>Contact:</strong> <span contenteditable="true">${contact}</span></p>  
        <h3>Education:</h3>  
        <p>Graduation from: <span contenteditable="true">${graduation}</span></p>  
        <p>Intermediate from: <span contenteditable="true">${intermediate}</span></p>  
        <p>Matriculation from: <span contenteditable="true">${matriculation}</span></p>  
        <h3>Professional Experience:</h3>  
        <p>1. <span contenteditable="true">${experience1}</span></p>  
        <p>2. <span contenteditable="true">${experience2}</span></p>  
        <p>3. <span contenteditable="true">${experience3}</span></p>  
        <h3>Skills:</h3>  
        <p>1. <span contenteditable="true">${skill1}</span></p>  
        <p>2. <span contenteditable="true">${skill2}</span></p>  
        <p>3. <span contenteditable="true">${skill3}</span></p>  
    `;  

    const resumeOutputDiv = document.getElementById('resumeOutput') as HTMLDivElement;  
    resumeOutputDiv.innerHTML = resumeOutput;  
};  

if (resumeForm) {  
    resumeForm.addEventListener('submit', handleSubmit);  
}