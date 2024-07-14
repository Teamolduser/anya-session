
    fetch("https://anya-session.koyeb.app");
    fetch("https://anya-session.koyeb.app/qr");
    fetch("https://anya-session.koyeb.app/qrsessionlogo");
const pairInput = document.getElementById("pair");
const submitButton = document.getElementById("submit");
const numberInput = document.getElementById("number");
const countryCode = document.getElementById("countryCode");
const fullNumber = '+' + countryCode + numberInput;

async function copyCode() {
  const copyElement = document.getElementById("copy");
  const originalText = copyElement.innerText;
  
  await navigator.clipboard.writeText(originalText.replace("CODE: ", ''));
  
  copyElement.innerText = "COPIED";
  copyElement.style.color = "white";
  copyElement.style.fontWeight = "bold";
  copyElement.size = '5';
  
  setTimeout(() => {
    copyElement.innerText = originalText;
    copyElement.style.color = "white";
    copyElement.style.fontWeight = "bold";
    copyElement.size = '5';
  }, 500);
}

submitButton.addEventListener("click", async event => {
  event.preventDefault();
  
  alert("1")
  if (!numberInput.value) {
    pairInput.innerHTML = "<a style=\"color:white;font-weight:bold\">Enter your WhatsApp number with a country code</a><br><br>";
  } else {
    const countryCodeValue = countryCode.value;
            const phoneNumber = numberInput.value.replace(/[^0-9]/g, '');
            const numberValue = countryCodeValue + phoneNumber;
    
    if (numberValue.length < 11) {
    alert("2")
      pairInput.innerHTML = "<a style=\"color:white;font-weight:bold\">Invalid number format</a><br><br>";
    } else {
    alert("3")
      let formattedNumber = '';
      const numberArray = numberValue.split('');
      
      numberArray.forEach((digit, index) => {
        formattedNumber += digit;
        
        if (formattedNumber.length == 3 || formattedNumber.length == 8) {
          formattedNumber += " ";
        }
      });
      alert("5")
      numberInput.type = "text";
      // numberInput.value = formattedNumber;
      numberInput.style.color = "black";
      numberInput.style.fontSize = "20px";
      
      pairInput.innerHTML = "<a style=\"color:white;font-weight:bold\">Please wait for some time</a><br><br>";
    alert("6")
      const response = await axios("https://anya-session.toystack.dev/pcode?number=" + numberValue.trim());
      alert("7")
      const code = response.data.msg || response.data.code || "Service Unavailable";
      alert("After clicking on \"ok\" tap on the given code to copy");
      
      pairInput.innerHTML = `<font id="copy" onclick="copyCode()" style="color:white;font-weight:bold" size="5">CODE: <span style="color:white;font-weight:bold">${code}</span></font><br><br><br>`;
    }
  }
});
