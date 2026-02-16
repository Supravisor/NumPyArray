
// Basic NumPy arrays
let array = document.getElementById("array");
let regex = /\s*,\s*/g;
let variable = document.getElementById("variable");
let index = document.getElementById("index");
let start = document.getElementById("start");
let end = document.getElementById("end");
let step = document.getElementById("step");

const np = () => {
  if (array.value === "") {
      return alert("Please enter a comma separated array in the 'array' field, in the 'Basic NumPy arrays' section.");
  } else if (variable.value === "") {
     document.editor.textbox.value+= "\nnp.array([" + array.value.replaceAll(regex, ", ").split(",") + "])";
  } else if (Math.abs(Number(variable.value[0])) >= 0) {
      return alert("Please do not start with a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + " = np.array([" + array.value.replaceAll(regex, ", ").split(",") + "])";
  }
}

const copy = (arg) => {
  if (array.value === "") {
      return alert("Please enter a comma separated array in the 'array' field, in the 'Basic NumPy arrays' section.");
  } else if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value[0])) >= 0) {
      return alert("Please do not start with a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else {
     document.editor.textbox.value+= "\n" + array.value.replaceAll(regex, ", ") + " = np." + arg + "(" + variable.value + ")";
  }
}

const access = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value[0])) >= 0) {
      return alert("Please do not start with a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (index.value == "") {
      return alert("Please enter a number in the 'index' field, in the 'Indexing and slicing of matrices' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + index.value + "]";
  }
}

const range = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (step.value === "") {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + "]";
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + ":" + step.value + "]";
  }
}

// Array types
const dtype = (type) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (!type) {
      document.editor.textbox.value+= "\n" + variable.value + ".dtype";
  } else if (array.value === "") {
      return alert("Please enter a comma separated array in the 'array' field, in the 'Basic NumPy arrays' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + " = np.array([" + array.value.replaceAll(regex, ", ") + "], dtype=np." + type + ")";
  }
}

// Dimensions and shapes
const dimensionShape = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg;
  }
}

const memorySize = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else {
      document.editor.textbox.value+="\nprint('%d bytes' % (" + variable.value + ".size * " + variable.value + ".itemsize))";
  }
}

// Indexing and slicing of matrices
let indexMatrix = document.getElementById("indexMatrix");
let subIndexMatrix = document.getElementById("subIndexMatrix");
let start1Matrix = document.getElementById("start1Matrix");
let end1Matrix = document.getElementById("end1Matrix");
let start2Matrix = document.getElementById("start2Matrix");
let end2Matrix = document.getElementById("end2Matrix");
let startMatrix = document.getElementById("startMatrix");
let endMatrix = document.getElementById("endMatrix");
let beforeMatrix = document.getElementById("beforeMatrix");

const accessMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (indexMatrix.value == "") {
      return alert("Please enter a number in the 'index' field, in the 'Indexing and slicing of matrices' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + indexMatrix.value + "]";
  }
}

const accessSubMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (indexMatrix.value === "") {
      return alert("Please enter a number in the 'index' field, in the 'Indexing and slicing of matrices' section.");
  } else if (subIndexMatrix.value === "") {
      return alert("Please enter a number in the 'sub index' field, in the 'Indexing and slicing of matrices' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + indexMatrix.value + ", " + subIndexMatrix.value + "]";
  }
}

const accessMiddleMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (start1Matrix.value === "") {
      return alert("Please enter a number in the 'start 1' field, in the 'Indexing and slicing of matrices' section.");
  } else if (end1Matrix.value === "") {
      return alert("Please enter a number in the 'end 1' field, in the 'Indexing and slicing of matrices' section.");
  } else if (start2Matrix.value === "") {
      return alert("Please enter a number in the 'start 2' field, in the 'Indexing and slicing of matrices' section.");
  } else if (end2Matrix.value === "") {
      return alert("Please enter a number in the 'end 2' field, in the 'Indexing and slicing of matrices' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start1Matrix.value + ":" + end1Matrix.value + ", " + start2Matrix.value + ":" + end2Matrix.value + "]";
  }
}

const rangeMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + startMatrix.value + ":" + endMatrix.value + "]";
  }
}

const sliceMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (startMatrix.value === "" && endMatrix.value) {
      if (endMatrix.value && beforeMatrix.value) {
        document.editor.textbox.value+= "\n" + variable.value + "[" + endMatrix.value + ":, " + beforeMatrix.value + ":]";
      } else {
          document.editor.textbox.value+= "\n" + variable.value + "[" + endMatrix.value + ":, " + beforeMatrix.value + ":]";
      }
  } else if (startMatrix.value && endMatrix.value) {
      document.editor.textbox.value+= "\n" + variable.value + "[:" + startMatrix.value + ", :" + endMatrix.value + "]";
  }
}

const rangeMatrixReverse = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[::-1]";
  }
}

const rangeMatrixOdd = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[::2]";
  }
}

const assignArray = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (array.value === '') {
      return alert("Please enter a comma separated array in the 'array' field, in the 'Basic NumPy arrays' section.");
  } else if (indexMatrix.value == "") {
      return alert("Please enter a number in the 'index' field, in the 'Indexing and slicing of matrices' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + indexMatrix.value + "] = np.array([" + array.value.replaceAll(regex, ", ").split(",") + "])";
  }
}

const assignValue = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (array.value === '') {
      return alert("Please enter a value in the 'array' field, in the 'Basic NumPy arrays' section.");
  } else if (indexMatrix.value == "") {
      return alert("Please enter a number in the 'index' field, in the 'Indexing and slicing of matrices' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + indexMatrix.value + "] = " + array.value;
  }
}

const assignSubMatrixValue = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (array.value === '') {
      return alert("Please enter a value in the 'array' field, in the 'Basic NumPy arrays' section.");
  } else if (startMatrix.value === "") {
      return alert("Please enter a number in the 'start' field, in the 'Indexing and slicing of matrices' section.");
  } else if (endMatrix.value === "") {
      return alert("Please enter a number in the 'end' field, in the 'Indexing and slicing of matrices' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + startMatrix.value + ", " + endMatrix.value + "] = " + array.value;
  }
}

// Summary statistics
let axis = document.getElementById("axis");

const statistics = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (!axis.value) {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "()";
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "(axis=" + axis.value + ")";
  }
}

// Broadcasting and vectorised operations
let broadcastNumber = document.getElementById("broadcastNumber");

const broadcast = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (broadcastNumber.value === "") {
      return alert("Please enter a number in the 'value' field, in the 'Broadcasting and vectorised operations' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = np.arange(" + broadcastNumber.value + ")";
  }
}

const operation = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (broadcastNumber.value === "") {
      return alert("Please enter a number in the 'value' field, in the 'Broadcasting and vectorised operations' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " " + arg + " " + broadcastNumber.value;
  }
}

// Boolean arrays (masks)
let valueA = document.getElementById("valueA");
let valueB = document.getElementById("valueB");

const boolean = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'Basic NumPy arrays' section.");
  } else if (valueA.value === "") {
      return alert("Please enter a value in the 'value A' field, in the 'Boolean arrays (masks)' section.");
  } else if (valueB.value === "") {
      return alert("Please enter a value in the 'value B' field, in the 'Boolean arrays (masks)' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "[" + valueA.value + " " + arg + " " + valueB.value + "]";
  }
}
