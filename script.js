const encrypt = document.getElementById("encrypt");
const decrypt = document.getElementById("decrypt");
const copy = document.getElementById("copy");

const textDefault = document.querySelector(".default-text-container");
const textResult = document.querySelector(".result-text-container");
const text = document.querySelector(".result-message-text");

// replaces vowels with specific patterns when button clicked.
encrypt.addEventListener("click", () => {
  let input = document.getElementById("encrypt-input").value;
  const isValid = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
  if (!isValid && input.length > 0) {
    const obj = {
      e: "enter",
      i: "imes",
      a: "ai",
      o: "ober",
      u: "ufat",
    };
    input = input.replace(/e|i|a|o|u/gm, (matched) => {
      return obj[matched];
    });

    exitAlert();
    showResult();

    text.textContent = input;
  } else {
    showAlert();
  }
});

// text decryption, reverses the process of the previous function.
decrypt.addEventListener("click", () => {
  let input = document.getElementById("encrypt-input").value;
  const isValid = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(input);
  if (!isValid && input.length > 0) {
    const obj = {
      enter: "e",
      imes: "i",
      ai: "a",
      ober: "o",
      ufat: "u",
    };
    input = input.replace(/enter|imes|ai|ober|ufat/gm, (matched) => {
      return obj[matched];
    });

    exitAlert();
    showResult();

    text.textContent = input;
  } else {
    showAlert();
  }
});

// copy text to device clipboard.
copy.addEventListener("click", () => {
  let copied = text.textContent;

  navigator.clipboard.writeText(copied).then(() => {
    copy.textContent = "Copiado";
    copy.classList.add("btn-copied");

    window.setTimeout(() => {
      copy.textContent = "Copiar";
      copy.classList.remove("btn-copied");
    }, 1000);
  });
});

// hides the default container and displays the result container.
const showResult = () => {
  textDefault.style.display = "none";
  textResult.style.display = "flex";
};

// hides the validation alert and removes the error class from the text field.
const exitAlert = () => {
  const alert = document.querySelector(".alert-disabled");
  const alertText = document.querySelector(".encrypt-text");
  alertText.classList.remove("encrypt-text-alert");
  alert.classList.remove("alert-actived");
};

// displays the validation alert and adds the error class to the text field.
const showAlert = () => {
  const alertText = document.querySelector(".encrypt-text");
  const alert = document.querySelector(".alert-disabled");
  alert.classList.add("alert-actived");
  alertText.classList.add("encrypt-text-alert");
};
