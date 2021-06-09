let textbox;

function init() {
  textbox = document.getElementById("textbox");
}

function formatText(event, command, value) {
  if (event.target.value) {
    if (event.target.value === "off") {
      event.target.value = "on";
      event.target.classList.add("format-on");
    } else {
      event.target.value = "off";
      event.target.classList.remove("format-on");
    }
  }

  textbox.focus();
  document.execCommand(command, false, value);
  textbox.focus();
}

document.getElementById("bold").addEventListener("click", (event) => formatText(event, "bold"));
document.getElementById("italic").addEventListener("click", (event) => formatText(event, "italic"));
document.getElementById("underline").addEventListener("click", (event) => formatText(event, "underline"));
document.getElementById("insertUnorderedList").addEventListener("click", (event) => formatText(event, "insertUnorderedList"));
document.getElementById("insertOrderedList").addEventListener("click", (event) => formatText(event, "insertOrderedList"));
