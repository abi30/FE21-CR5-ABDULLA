"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("hello");
var myTravels = [];
var Locations = /** @class */ (function () {
    function Locations(place_type, PlaceName, city, article, zip, adress, img) {
        if (place_type === void 0) { place_type = "places"; }
        this.place_type = place_type;
        this.placeName = PlaceName;
        this.city = city;
        this.article = article;
        this.zip_code = zip,
            this.adress = adress;
        this.img = img;
        this.id = Math.floor(Math.random() * 1000000);
        myTravels.push(this);
    }
    Locations.prototype.display = function () {
        return "<p><span style=\"color:#353427;font-size:22px;font-weight: bold;\" >" + this.placeName + "</span> <br>City : " + this.city + ".<br> ZIP code: " + this.zip_code + " <br>Adress :" + this.adress + "</p>";
    };
    return Locations;
}());
// console.log(p1.id);
// console.log(p1.display());
console.log(myTravels);
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(place_type, PlaceName, res_type, city, article, zip, adress, img, url, telNum) {
        if (place_type === void 0) { place_type = "Restaurant"; }
        if (url === void 0) { url = "NOT AVAILABLE"; }
        if (telNum === void 0) { telNum = "NO AVAILABLE"; }
        var _this = _super.call(this, place_type, PlaceName, city, article, zip, adress, img) || this;
        _this.res_type = res_type;
        _this.urlAdd = url;
        _this.telNumber = telNum;
        return _this;
    }
    // restype(){
    //     return`${this.res_type}`;
    // }
    Restaurants.prototype.display = function () {
        return _super.prototype.display.call(this) + "<p>Contact : " + this.telNumber + "<br/>URL :<a> " + this.urlAdd + "</a></p>";
    };
    return Restaurants;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(place_type, PlaceName, city, article, zip, adress, img, url, telNum, event_date, event_time, tick_price) {
        if (place_type === void 0) { place_type = "Event"; }
        if (url === void 0) { url = "NOT AVAILABLE"; }
        if (telNum === void 0) { telNum = "NO AVAILABLE"; }
        var _this = _super.call(this, place_type, PlaceName, city, article, zip, adress, img) || this;
        _this.urlAdd = url;
        _this.telNumber = telNum;
        _this.event_date = event_date;
        _this.event_time = event_time;
        _this.ticket_price = tick_price;
        return _this;
    }
    Events.prototype.display = function () {
        return _super.prototype.display.call(this) + "<p>Contact : " + this.telNumber + "<br/>URL :<a> " + this.urlAdd + "</a><br/>Event:" + this.event_date + " " + this.event_time + "</p>";
    };
    return Events;
}(Locations));
new Locations("place", "turkish mosque ", "turkey", "The Hagia Sophia has just opened to receive Sunni Muslim worshippers for the first time since 1931.", 34122, "Sultan Ahmet, Atmeydan", "../img/places1.jpg");
// console.log(myTravels)
new Locations("place", "Eiffel Tower", "Paris", "The Eiffel Tower is 1,063 feet (324 meters) tall, including the antenna at the top. Without the antenna, it is 984 feet 300 m.", 75007, "Champ de Mars, 5 Avenue Anatole France", "../img/places3.jpg");
new Locations("place", "time Square", "new york", "Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City", 10036, "Manhattan, NY ", "../img/places4.jpg");
new Restaurants("Restaurent", "Medusa Restaurant & Club", "Viennese", "Vinna", "f there’s anybody who’s fit to navigate Vienna’s approximately 4,000 restaurants, it’s Lukas Hittinger", 1010, "Neuer Markt 8", "../img/restaurants1.jpg", "http://www.medusarestaurant.at", "+43 676 3094176");
new Restaurants("Restaurent", "Eater At Home", "Chinese", "Chaina", "When traveling through China, you may have trouble finding your most beloved beverages from back home,", 43280, "Haizingergasse 13,", "../img/restaurants4.jpg", "https://www.eater.com/contact", "+43654321");
new Restaurants("Restaurent", "Tawa Indian Restaurant", "Indian", "vienna", "If you love Indian food, you’re probably familiar with chicken tikka masala, which appears on most Indian restaurant menus", 1120, "Am Hauptbahnhof 1", "../img/restaurants5.jpg", "https://www.viennawurstelstand.com/guide/best-indian-restaurants-in-vienna/", "+436546721");
new Events("Events", "concert stadthalle", "Vienna", "In 1956, Vienna acquired the Vienna Stadthalle, thanks to architect Roland Rainer, as a flagship for modern concerts and shows", 1150, "Roland-Rainer-Platz 1", "../img/events1.jpg", "www.google.com", "+4343123", "2020.11.02", "20:00", 45);
new Events("Events", "stadium dhaka", "dhaka", "After concerts in both Dhaka and Sylhet, it was time for Chittagong’s turn in the limelight.", 1216, "shawrapara 456", "../img/events4.jpg", "www.google.com", "+880343123", "2019.11.02", "20:00", 15);
new Events("Events", "convention hall", "New york", "A convention center is a large building that is designed to hold a convention, where individuals and groups gather to promote and share common interests.", 4324, "michail man road 34/3", "../img/events2.jpg", "www.google.com", "+4343123", "2018.11.02", "17:00", 50);
console.log(myTravels);
var content = "";
myTravels.forEach(function (travel) { return content += createCard(travel); });
document.querySelector("[data-meta=\"entry\"]").innerHTML = content;
myAllFunc();
function createCard(travel) {
    var allVal = "<div class=\"col\">\n    <div class=\"card h-100 own_card \" style=\"background-color: #ae9b;\">\n    \n      <img class=\"img-fluid own\" src=\"" + travel.img + "\" class=\"card-img-top\" alt=\"...\">\n      <div class=\"card-body text-center\">\n        <h2 class=\"card-title\">" + travel.place_type + "</h2>";
    if (travel instanceof Restaurants) {
        allVal += "  <h5 class=\"list-group-item\"><b>origin:</b>" + travel.res_type + "</h5>";
    }
    allVal += "\n        <p class=\"card-text\" data-meta=\"display\" data-id=\"" + travel.id + "\">" + travel.article + "</p>\n        <button type=\"button\" class=\"btn btn-outline-success\"data-meta=\"button\" data-id=\"" + travel.id + "\" >info</button>\n        <p data-meta=\"price\" data-id=\"" + travel.id + "\">hello</p>\n        \n      </div>\n      <div class=\"card-footer\">";
    if (travel instanceof Events) {
        allVal += "<small class=\"text-muted\">event : " + travel.event_date + " " + travel.event_time + "</small>\n         <small class=\"text-muted\">price : " + travel.ticket_price + " \u20AC </small>";
    }
    allVal += "</div>\n            </div>\n        </div>";
    return allVal;
}
console.log("hello");
function myAllFunc() {
    document.querySelectorAll("[data-meta=\"button\"]").forEach(function (button) { return button.addEventListener("click", info); });
}
function info() {
    console.log("hell");
    for (var _i = 0, myTravels_1 = myTravels; _i < myTravels_1.length; _i++) {
        var travel = myTravels_1[_i];
        if (travel.id == this.dataset.id) {
            document.querySelector("[data-meta=\"display\"][data-id=\"" + this.dataset.id + "\"]").innerHTML = "" + travel.display();
        }
    }
}
