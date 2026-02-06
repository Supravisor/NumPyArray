
// Basic NumPy arrays
let array = document.getElementById("array");
let variable = document.getElementById("variable");
let index = document.getElementById("index");
let start = document.getElementById("start");
let end = document.getElementById("end");
let step = document.getElementById("step");

const np = () => {
  if (array.value === "") {
      return alert("Please enter a comma separated array in the 'array' field.");
  } else if (variable.value === "") {
     document.editor.textbox.value+= "\nnp.array([" + array.value.replaceAll(",", ", ").split(",") + "])";
  } else if (Math.abs(Number(variable.value[0])) >= 0) {
      return alert("Please do not start with a number in the 'variable' field.");
  } else {
     document.editor.textbox.value+= "\n" + variable.value + " = np.array([" + array.value.replaceAll(",", ", ").split(",") + "])";
  }
}

const copy = (arg) => {
  if (array.value === "") {
      return alert("Please enter a new variable name in the 'array' field.");
  } else if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field.");
  } else if (Math.abs(Number(variable.value[0])) >= 0) {
      return alert("Please do not start with a number in the 'variable' field.");
  } else {
     document.editor.textbox.value+= "\n" + array.value + " = np." + arg + "(" + variable.value + ")";
  }
}

const access = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field.");
  } else if (Math.abs(Number(variable.value[0])) >= 0) {
      return alert("Please do not start with a number in the 'variable' field.");
  } else if (index.value == "") {
      return alert("Please enter a number in the 'index' field.")
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + index.value + "]";
  }
}

const range = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field.");
  } else if (step.value === "") {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + "]";
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + ":" + step.value + "]";
  }
}

// Array types
const dtype = (type) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field.");
  } else if (!type) {
      document.editor.textbox.value+= "\n" + variable.value + ".dtype";
  } else if (array.value === "") {
      return alert("Please enter a comma separated array in the 'array' field.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + " = np.array([" + array.value + "], dtype=np." + type + ")";
  }
}

// Dimensions and shapes
const dimensionShape = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg;
  }
}
