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
    // Replace spaces with %2B and decode URI component
    value = decodeURIComponent(value.replace(/\+/g, '%20').replace(/ /g, '%2B'));
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
