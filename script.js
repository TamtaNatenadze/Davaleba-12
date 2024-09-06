function movieBooking() {
  let age = Number(prompt("Enter your age (between 10 and 64):"));
  if (isNaN(age) || age < 10 || age >= 65) {
    alert("ასაკი უნდა იყოს 10-წლიდან 65-წლამდე");
    return; 
  }
  let movieType = prompt("Enter movie type (3D):").trim().toLowerCase();
  if (movieType !== "3d") {
    alert("მხოლოდ '3D' ფილმი შეგიძლიათ აირჩიოთ");
    return; 
  }
  let timeOfDay = prompt("Enter time of day (evening):").trim().toLowerCase();
  if (timeOfDay !== "evening") {
    alert("მხოლოდ საღამოს სეანსი შეგიძლიათ აირჩიოთ");
    return; 
}
  let price = 25;
  let discount = false;
  switch (true) {
    case age <= 30: 
      discount = true;
      break;
    case age >= 60: 
      discount = true;
      break;
    default: 
      discount = false;
      break;
  }
  if (discount) {
    price -= 5; 
    alert("თქვენ გეკუთვნით 5%-იანი ფასდაკლება. ბილეთის ფასი თქვენთვის არის: 20 ლარი.");
  } else {
    alert("ბილეთის ფასი თქვენთვის არის: 25 ლარი.");
  } 
}
movieBooking();
