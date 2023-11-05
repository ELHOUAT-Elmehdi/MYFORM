document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("MYFORM");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Récupérer les valeurs des champs du formulaire
        const title = document.getElementById("title").value;
        const lname = document.getElementById("lname").value;
        const fname = document.getElementById("fname").value;
        const age = document.getElementById("age").value;
        const birthdate = document.getElementById("birthdate").value;
        const adresse = document.getElementById("adresse").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const familiale = document.querySelector('input[name="familiale"]:checked').value;
        const diplome = document.getElementById("diplome").value;
        const competences = document.getElementById("competences").value;
        const objectifProfessionnel = document.getElementById("objectifProfessionnel").value;
        const autre = document.getElementById("autre").value;
        const compet = document.getElementById("compet").value;
        const formation = document.getElementById("formation").value;
        const profil = document.getElementById("profil").value;
        const int = document.getElementById("int").value;

        const cvHTML = `
        <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${title}</title>
            <link rel="stylesheet" href="result.css" type="text/css"> 
        </head>
        <body>
            <div class="cv-container">
                <div class="cv-column1">
        
                    <div>
                        <h1>${fname} ${lname}</h1>
                    </div>
                    <div>
                        <h2>INFORMATIONS PERSONNELLES:</h2>
                        <ul>
                            <li><b>Nom :</b> ${lname}</li>
                            <li><b>Prénom :</b> ${fname}</li>
                            <li><b>Date de naissance :</b> ${birthdate}</li>
                            <li><b>Age :</b> ${age}</li>
                            <li><b>La situation familiale :</b> ${familiale}</li>
                            <li><b>Adresse :</b> ${adresse}</li>
                            <li><b>Tél :</b> ${phone}</li>
                            <li><b>Email :</b> <a href="mailto:${email}">${email}</a></li>                      
                        </ul>
                    </div>
                    <div>
                        <h2>DIPLOME :</h2>
                        <ul>
                            <li>
                                <p>${diplome}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>PROFIL :</h2>
                        <ul>
                            <li>
                                <p>${profil}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>FORMATION :</h2>
                        <ul>
                            <li>
                                <p>${formation}</p>
                            </li>
                        </ul>
                    </div>
                </div>  
                <div class="cv-column2">
                    <div>
                        <h2>OBJECTIF PROFESSIONNEL :</h2>
                        <ul>
                            <li>
                                <p>${objectifProfessionnel}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>COMPÉTENCES :</h2>
                        <ul>
                            <li>${compet}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>COMPÉTENCES TECHNIQUES :</h2>
                        <ul>
                            <li>${competences}</li>
                        </ul>
                    </div>
                    <div>
                        <h2>INTÉRÊTS :</h2>
                        <ul>
                            <li>
                                <p>${int}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Autre :</h2>
                        <ul>
                            <li>${autre}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <footer>
                <div class="Footer">
                    <p><b>Édité par :</b> ${fname} ${lname}| <b>Dernière Mise à jour :</b> 21 septembre 2023 | &copy;</p>
                </div>
            </footer>
        </body>
        </html>
      
        `;
        const newWindow = window.open();
        newWindow.document.open();
        newWindow.document.write(cvHTML);
        newWindow.document.close();
    });
});

var titreCvInput = document.getElementById("title");
var submitBtn = document.getElementById("submitBtn");

titreCvInput.addEventListener("input", function () {
    var titreCvValue = titreCvInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("titreduCVError");
    
    if (!regex.test(titreCvValue)) {
        errorElement.textContent = "Le titre du CV ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});

var objectifProfessionnelInput = document.getElementById("objectifProfessionnel");
var submitBtn = document.getElementById("submitBtn");

objectifProfessionnelInput.addEventListener("input", function () {
    var objectifProfessionnelValue = objectifProfessionnelInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("objectifProfessionnelError");
    
    if (!regex.test(objectifProfessionnelValue)) {
        errorElement.textContent = "L'objectif professionnel ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});
var autreInput = document.getElementById("autre");
var submitBtn = document.getElementById("submitBtn");

autreInput.addEventListener("input", function () {
    var autreValue = autreInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("autre");
    
    if (!regex.test(autreValue)) {
        errorElement.textContent = "Autre ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});
var techniquesInput = document.getElementById("competences");
var submitBtn = document.getElementById("submitBtn");

techniquesInput.addEventListener("input", function () {
    var techniquesValue = techniquesInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("competencesError");
    
    if (!regex.test(techniquesValue)) {
        errorElement.textContent = "Compétences techniques ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});
var competInput = document.getElementById("compet");
var submitBtn = document.getElementById("submitBtn");

competInput.addEventListener("input", function () {
    var competValue = competInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("compet");
    
    if (!regex.test(competValue)) {
        errorElement.textContent = "Compétences ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});
var profilInput = document.getElementById("profil");
var submitBtn = document.getElementById("submitBtn");

profilInput.addEventListener("input", function () {
    var profilValue = profilInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("profil");
    
    if (!regex.test(profilValue)) {
        errorElement.textContent = "Profil ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});
var formationInput = document.getElementById("formation");
var submitBtn = document.getElementById("submitBtn");

formationInput.addEventListener("input", function () {
    var formationValue = formationInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("formation");
    
    if (!regex.test(formationValue)) {
        errorElement.textContent = "formation ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});
var intInput = document.getElementById("int");
var submitBtn = document.getElementById("submitBtn");

intInput.addEventListener("input", function () {
    var intValue = intInput.value;
    var regex = /^[a-zA-Z\s]+$/;
    var errorElement = document.getElementById("int");
    
    if (!regex.test(intValue)) {
        errorElement.textContent = "Intérêts ne doit pas contenir de chiffres ni des caractères spéciaux.";
        submitBtn.disabled = true; // Désactive le bouton de soumission
    } else {
        errorElement.textContent = "";
        submitBtn.disabled = false; // Active le bouton de soumission
    }
});
var emailInput = document.getElementById("email");
document.getElementById("MYFORM").addEventListener("submit", function (event) {
    var emailValue = emailInput.value;
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|fr)$/;
    if (!regex.test(emailValue)) {
        document.getElementById("emailError").textContent = "Veuillez saisir une adresse email valide.";
        event.preventDefault();
    } else {
        document.getElementById("emailError").textContent = "";
    }
});
var adresseInput = document.getElementById("adresse");
document.getElementById("MYFORM").addEventListener("submit", function (event) {
    var adresseValue = adresseInput.value;
    if (adresseValue.length > 100) {
        document.getElementById("adresseError").textContent = "L'adresse ne doit pas dépasser 100 caractères.";
        event.preventDefault();
    } else {
        var regex = /^[a-zA-Z0-9\s,.-]+$/;
        if (!regex.test(adresseValue)) {
            document.getElementById("adresseError").textContent = "L'adresse ne doit pas contenir de caractères spéciaux.";
            event.preventDefault();
        } else {
            document.getElementById("adresseError").textContent = "";
        }
    }
});
function sanitizeAndUpperCase(input) {
    var nomValue = input.value;
    nomValue = nomValue.replace(/[^a-zA-Z\s]/g, '');
    input.value = nomValue.toUpperCase();
}
var prenomInput = document.getElementById("fname");
document.getElementById("MYFORM").addEventListener("submit", function (event) {
    var prenomValue = prenomInput.value;
    var regex = /^[A-Z][a-zA-Z]*$/;
    if (!regex.test(prenomValue)) {
        document.getElementById("prenomError").textContent = "Le prénom doit commencer par une majuscule et ne doit pas contenir de chiffres ni de caractères spéciaux.";
        event.preventDefault();
    } else {
        document.getElementById("prenomError").textContent = "";
    }
});
function capitalizeFirstLetter(input) {
    var prenomValue = input.value;
    prenomValue = prenomValue.replace(/[^a-zA-Z]+/g, '');
    prenomValue = prenomValue.charAt(0).toUpperCase() + prenomValue.slice(1);
    input.value = prenomValue;
}






