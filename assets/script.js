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
  const formats = ["bold", "italic", "underline", "justifyLeft", "justifyCenter", "justifyRight", "subscript", "superscript"];
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
document.getElementById("fontSize").addEventListener("change", (event) => formatText(event, "fontSize", event.target[event.target.selectedIndex].value));
document.getElementById("foreColor").addEventListener("change", (event) => formatText(event, "foreColor", event.target[event.target.selectedIndex].value));
document.getElementById("bold").addEventListener("click", (event) => formatText(event, "bold"));
document.getElementById("italic").addEventListener("click", (event) => formatText(event, "italic"));
document.getElementById("underline").addEventListener("click", (event) => formatText(event, "underline"));
document.getElementById("insertUnorderedList").addEventListener("click", (event) => formatText(event, "insertUnorderedList"));
document.getElementById("insertOrderedList").addEventListener("click", (event) => formatText(event, "insertOrderedList"));
document.getElementById("justifyLeft").addEventListener("click", (event) => formatText(event, "justifyLeft"));
document.getElementById("justifyCenter").addEventListener("click", (event) => formatText(event, "justifyCenter"));
document.getElementById("justifyRight").addEventListener("click", (event) => formatText(event, "justifyRight"));
document.getElementById("subscript").addEventListener("click", (event) => formatText(event, "subscript"));
document.getElementById("superscript").addEventListener("click", (event) => formatText(event, "superscript"));
document.getElementById("mathChars").addEventListener("change", (event) => {
  formatText(event, "insertText", event.target[event.target.selectedIndex].value);
  event.target.selectedIndex = 0;
});
document.getElementById("createLink").addEventListener("click", (event) => {
  if (!window.getSelection().anchorNode) {
    alert("You must select a range of text to convert it to a link.");
    return;
  } else {
    let hyperlink = prompt("Enter a link for the selected text:");
    formatText(event, "insertHTML", `<a href="http://${hyperlink}" target="_blank">${window.getSelection()}</a>`)
  }
});
