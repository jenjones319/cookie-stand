'use strict';
console.log('app.js is connected.');

var storeHours = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: '];

function randomCustomerNumbers (minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust + 1)) + minCust;
}

//Constructor Function    Instance of an Object 
function Store (name, minCust, maxCust, avgPerCust) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
};

var storeOne = new Store('seattle', 23, 65, 6.3);
var storeTwo = new Store('tokyo', 3, 24, 1.2);
var storeThree = new Store('dubai', 11, 38, 3.7);
var storeFour = new Store('paris', 20, 38, 2.3);
var storeFive = new Store('lima', 2, 16, 4.6);

var allStores = [storeOne, storeTwo, storeThree, storeFour, storeFive];

Store.prototype.render = function () {
  this.calccookiesPerHour();
  var tableRow = document.createElement('tr');
  var tableElement = document.createElement('table');
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableRow.appendChild(tableData);

  for (var i = 0; i < storeHours.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(tableData);
  }
  var tableDailyTotal = document.createElement('th');
  tableDailyTotal.textContent = this.totalCookiesDaily;

  tableRow.appendChild(tableDailyTotal);
  tableElement.appendChild(tableRow);
};

Store.prototype.getCustomerPerHour = function() {
  for (var i = 0; i < storeHours.length; i++) {
    this.customerPerHour.push(randomCustomerNumbers(this.minCust, this.maxCust));
  }
};

Store.prototype.getCookiesPerHour = function () {
  this.setcustomerPerHour();
  var oneHour = 0;
  for (var i = 0; i < storeHours.length; i++) {
    oneHour = Math.ceil(this.customerPerHour[i] * this.avgPerCust)
    this.cookiesPerHour.push(oneHour);
  }
};

Store.prototype.setTotalHourlyCookies = function () {
  this.cookiesPerHour();
  var cookies = 0
  for (var i = 0; i < storeHours.length; i++) {
    cookies = cookies + this.cookiesPerHour[i];
  }
  return cookies;
}

function makeFooterRow () {
  var newFooter = document.createElement('tfoot');
  newFooter.textContent='Total Hourly';
  newTable.appendChild(newFooter);
  footerText.textContent='Total Hourly';
  footerRow.appendChild(footerText);

  var totalOfHours = 0;
  var hourlyTotals = 0;

  for(var i = 0; i < storeHours.length; i++){
    hourlyTotals = 0

    for var j = 0; j < allStores.length; j++){
      hourlyTotals += allStores[j].cookiesPerHour[i];
      totalOfHours +- allStores[j].cookiesPerHour[i];
    }
   footerText = document.createElement('th');
   footerText.textContent = totalOfHours;
   footerRow.appendChild(footerText);
  }

function renderAllData () {
  // makeHeaderRow();

  for (var i = 0; i < allStores.length; i++) {
    allStores[i].render();
  }
  makeFooterRow();
}
renderAllData();
function handleFormSubmitted(event){
  var nameInput = document.getElementById('name');
  var nameValue = nameInput['value'];

  var phoneInput = document.getElementById('phone')
  var phoneValue = phoneInput['value'];

  var emailInput = document.getElementById('email')
  var emailValue = emailInput['value'];

  var commentInput = document.getElementById('comment')
  var commentValue = commentInput['value'];

}

var formElement = document.getElementById('contact-us');
formElement.addEventListener('submit', handleFormSubmitted);

var newComment = [nameValue, phoneValue, emailValue, commentValue];