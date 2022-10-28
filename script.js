function calculate() {
  const textArea = document.getElementById("textarea").value;
  const result = textArea.split(" ").length;
  document.getElementById("result").innerHTML = `You have ${result} words.`;
}
