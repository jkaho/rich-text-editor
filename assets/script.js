let textbox;

function init() {
  textbox = document.getElementById("textbox");
}

function formatText(event, command, commandValue) {
  if (event.target.matches("button") && event.target.classList.contains("toggle")) {
    if (document.queryCommandState(event.target.id)) {
      event.target.classList.remove("format-on");
    } else {
      event.target.classList.add("format-on");
    }
  } 

  textbox.focus();
  document.execCommand(command, false, commandValue);
  textbox.focus();
}

function formatButtons() {
  const formats = ["bold", "italic", "underline"];
  formats.forEach(format => {
    if (document.queryCommandState(format)) {
      document.getElementById(format).classList.add("format-on");
    } else {
      document.getElementById(format).classList.remove("format-on");
    }
  });
}

document.getElementById("textbox").addEventListener("input", formatButtons);
document.getElementById("fontName").addEventListener("change", (event) => formatText(event, "fontName", event.target[event.target.selectedIndex].value));
document.getElementById("bold").addEventListener("click", (event) => formatText(event, "bold"));
document.getElementById("italic").addEventListener("click", (event) => formatText(event, "italic"));
document.getElementById("underline").addEventListener("click", (event) => formatText(event, "underline"));
document.getElementById("insertUnorderedList").addEventListener("click", (event) => formatText(event, "insertUnorderedList"));
document.getElementById("insertOrderedList").addEventListener("click", (event) => formatText(event, "insertOrderedList"));
