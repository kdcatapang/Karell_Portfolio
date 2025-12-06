 const btnLang = document.getElementById('btnLang');
    const btnTools = document.getElementById('btnTools');
    const skillsDisplay = document.getElementById('skillsDisplay');

    const languageSkills = `
      <div class='skill-item'><div class='dot'></div>HTML</div>
      <div class='skill-item'><div class='dot'></div>CSS</div>
      <div class='skill-item'><div class='dot'></div>Bootstrap</div>
      <div class='skill-item'><div class='dot'></div>JavaScript</div>
    `;

    const toolSkills = `
      <div class='skill-item'><div class='dot'></div>VS Code</div>
      <div class='skill-item'><div class='dot'></div>Affinity Designer</div>
      <div class='skill-item'><div class='dot'></div>Canva</div>
      <div class='skill-item'><div class='dot'></div>Figma</div>
    `;

    btnLang.addEventListener('click', () => {
      btnLang.classList.add('active');
      btnTools.classList.remove('active');
      skillsDisplay.innerHTML = languageSkills;
    });

    btnTools.addEventListener('click', () => {
      btnTools.classList.add('active');
      btnLang.classList.remove('active');
      skillsDisplay.innerHTML = toolSkills;
    });


//Certificate 1
document.getElementById('openCertificate1').addEventListener('click', () => {
  document.getElementById('view-certificate').showModal();
});
  
document.getElementById('close-button').addEventListener('click', () => {
  document.getElementById('view-certificate').close();
});

//Certificate 2
document.getElementById('openCertificate2').addEventListener('click', () => {
  document.getElementById('view-certificate-web').showModal();
});
  
document.getElementById('close-button2').addEventListener('click', () => {
  document.getElementById('view-certificate-web').close();
});

/*Pop up*/
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(result => {
        // Show Bootstrap popup
        const successModal = new bootstrap.Modal(document.getElementById("successModal"));
        successModal.show();

        form.reset(); // Clear the form
    })
    .catch(error => {
        alert("Something went wrong. Please try again.");
    });
});

