var year = "";

var currentYear = new Date().getFullYear();

for (y = 1920; y <= currentYear; y++) {
  year += "<option>" + y + "</option>";
  if (y === 2020) {
    break;
  }
}
document.getElementById("selectyear").innerHTML = year;

var date = "";

for (d = 1; d <= 31; d++) {
  date += "<option>" + d + "</option>";
}
document.getElementById("selectdate").innerHTML = date;

// var newelement =
//   '<select class="pronoun" name="" class="form-dropdown"><option value="">Select your pronoun</option><option value="">She: "Wish her a happy birthday!"</option><option value="">He: "Wish him a happy birthday!"</option><option value="">They: "Wish them a happy birthday!"</option></select><br><br><span>Your pronoun is visible to everyone.</span><input class="allinput" placeholder="Gender (option)" type="text"/>';

function addElement() {
  document.getElementById("addcustom").style.display = "block";
}

function hideElement() {
  document.getElementById("addcustom").style.display = "none";
}
hideElement();
