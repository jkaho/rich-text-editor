let textbox;

function init() {
  textbox = document.getElementById("textbox");
}

function formatText(command, value) {
  document.execCommand(command, false, value);
  textbox.focus();
}

document.getElementById("bold").addEventListener("click", () => formatText("bold"));
document.getElementById("italic").addEventListener("click", () => formatText("italic"));
document.getElementById("underline").addEventListener("click", () => formatText("underline"));
document.getElementById("insertUnorderedList").addEventListener("click", () => formatText("insertUnorderedList"));
document.getElementById("insertOrderedList").addEventListener("click", () => formatText("insertOrderedList"));
