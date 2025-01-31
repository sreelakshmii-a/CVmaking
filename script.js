document.getElementById("createResume").addEventListener("click", function() {
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const qualifications = document.getElementById("qualifications").value;
    const experience = document.getElementById("experience").value;
    const softSkills = document.getElementById("softSkills").value;
    const technicalSkills = document.getElementById("technicalSkills").value;
    const whyHire = document.getElementById("whyHire").value;

    const resumeContent = `
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Qualifications:</strong> ${qualifications}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>Soft Skills:</strong> ${softSkills}</p>
        <p><strong>Technical Skills:</strong> ${technicalSkills}</p>
        <p><strong>Why Hire Me:</strong> ${whyHire}</p>
    `;

    document.getElementById("resumeContent").innerHTML = resumeContent;
    document.getElementById("resumePreview").classList.remove("hidden");
});

document.getElementById("downloadPDF").addEventListener("click", function() {
    const resume = document.getElementById("resumeContent").innerHTML;
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.write('<html><head><title>Resume</title></head><body>');
    printWindow.document.write(resume);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
});
