document.addEventListener("DOMContentLoaded", function () {
  const headerText = document.getElementById("header-text");
  const copyInput = document.getElementById("copy-input");
  const copyButton = document.getElementById("copy-button");

  const urlParams = new URLSearchParams(window.location.search);
  const type = urlParams.get("type");
  let value = urlParams.get("value");

  if (type) {
    headerText.textContent = `Copy ${type} to clipboard`;
  }

  if (value) {
    // Decode the entire URI component
    value = decodeURIComponent(value);
    copyInput.value = value;
  }

  copyButton.addEventListener("click", function () {
    copyInput.select();
    document.execCommand("copy");
    copyButton.textContent = "Copied!";
    setTimeout(function () {
      copyButton.textContent = "Copy";
    }, 1500);
  });
});
