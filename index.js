// -------Récupération des données html-------------
const form = document.querySelector("#form");
const userName = document.querySelector("#username");
const email = document.querySelector("#email");
const passWord = document.querySelector("#password");
const passWord2 = document.querySelector("#password2");

// ----------------Les événements------------------

form.addEventListener("submit", (e) => {
  e.preventDefault;

  form_verify();
});

// ----les fonctions de vérifications des données saisies par l'utilisateur----
const setError = (elem, message) => {
  const formControl = elem.parentElement;
  const small = form.querySelector("small");
  // message d'erreur
  small.textContent = message;

  // ajour=t class error
  formControl.className = "form-control error";
};

const setSucess = (elem) => {
  const formControl = elem.parentElement;
  formControl.className = "form-control success";
};

const emailVerify = (email) => {
  return /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/.test(email);
};

const passVerify = (passWord) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,12}$/.test(
    passWord
  );
};

const form_verify = () => {
  // Valeurs des inputs
  const userValue = userName.value.trim();
  const emailValue = email.value.trim();
  const passValue = passWord.value.trim();
  const passValue2 = passWord2.value.trim();

  // Vérifier validité username
  if (userValue === "") {
    let message = "le champ ne peut pas être vide";
    setError(userName, message);
  } else if (!userValue.match(/^[a-zA-Z]/)) {
    let message = "User name doit commencer par une lettre";
    setError(userName, message);
  } else {
    let letter = userValue.length;
    if (letter < 3) {
      let message = "Username doit avoir au moins 3 caractères";
      setError(userName, message);
    } else {
      setSucess(userName);
    }
  }

  // Validité email
  if (emailValue === "") {
    let message = "Email ne peut pas etre vide";
    setError(email, message);
  } else if (!emailVerify(email)) {
    let message = "Email non valide";
    setError(email, message);
  } else {
    setSucess(email);
  }

  // password verify
  if (passValue === "") {
    let message = "le password ne peut pas être vide";
    setError(passWord, message);
  } else if (!passVerify(passValue)) {
    let message =
      "Le mot de pass est trop faible (8 à 12 caractères avec des caractères speciaux)";
    setError(passWord, message);
  } else {
    setSucess(passWord);
  }

  // password confirm
  if (passValue2 === "") {
    let message = "Le pass word ne peut pas être vide";
    setError(passWord2, message);
  } else if (passValue !== passValue2) {
    let message = "les mots de passent ne correspondent pas";
    setError(passWord2, message);
  } else{
    setSucess(passWord2)
  }
};

