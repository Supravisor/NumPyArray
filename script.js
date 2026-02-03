
// basic NumPy arrays
let array = document.getElementById("array");
let variable = document.getElementById("variable");

const np = () => {
  if (array.value === "") {
      return alert("Please enter a comma separated array in the 'array' field.");
  } else if (variable.value === "") {
     document.editor.textbox.value+= "\nnp.array([" + array.value.replaceAll(",", ", ").split(",") + "])";
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field.");
  } else {
     document.editor.textbox.value+= "\n" + variable.value + " = np.array([" + array.value.replaceAll(",", ", ").split(",") + "])";
  }
}
