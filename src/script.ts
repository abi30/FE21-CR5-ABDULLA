console.log("hello");


var myTravels:Array<Locations>=[];

class Locations{
    id:number;
    place_type:string;
    placeName:string;
    city:string;
    article:string;
    zip_code:number;
    adress:string;
    img:string;

    constructor(place_type:string="places",PlaceName:string,city:string,article:string,zip:number,adress:string,img:string){
        this.place_type=place_type;
        this.placeName=PlaceName;
        this.city=city;
        this.article=article;
        this.zip_code=zip,
        this.adress=adress;
        this.img=img;
        this.id = Math.floor(Math.random()*1000000);
        myTravels.push(this);


    }

    display(){
        return `<p><span style="color:#353427;font-size:22px;font-weight: bold;" >${this.placeName}</span> <br>City : ${this.city}.<br> ZIP code: ${this.zip_code} <br>Adress :${this.adress}</p>`;

    }


}

// console.log(p1.id);
// console.log(p1.display());
console.log(myTravels);

class Restaurants extends Locations {

    urlAdd:string;
    telNumber:String;
    res_type:string;

    constructor(place_type:string="Restaurant",PlaceName:string,res_type:string,city:string,article:string,zip:number,adress:string,img:string,url:string="NOT AVAILABLE",telNum:string="NO AVAILABLE"){
        super(place_type,PlaceName,city,article,zip,adress,img);
        this.res_type=res_type;
        this.urlAdd=url;
        this.telNumber=telNum;
       


    }
    // restype(){
    //     return`${this.res_type}`;
    // }
    display(){
        return `${super.display()}<p>Contact : ${this.telNumber}<br/>URL :<a> ${this.urlAdd}</a></p>`;
    }

    
}


class Events extends  Locations{

    event_date:string;
    event_time:string;
    ticket_price:number;
    urlAdd:string;
    telNumber:string;

    constructor(place_type:string="Event",PlaceName:string,city:string,article:string,zip:number,adress:string,img:string,url:string="NOT AVAILABLE",telNum:string="NO AVAILABLE",event_date:string,event_time:string,tick_price:number){
        super(place_type,PlaceName,city,article,zip,adress,img);
        this.urlAdd=url;
        this.telNumber=telNum;
        this.event_date=event_date;
        this.event_time=event_time;
        this.ticket_price=tick_price;
       


    }



    
    display(){
        return `${super.display()}<p>Contact : ${this.telNumber}<br/>URL :<a> ${this.urlAdd}</a><br/>Event:${this.event_date} ${this.event_time}</p>`;
    }




}


new Locations("place","turkish mosque ","turkey","The Hagia Sophia has just opened to receive Sunni Muslim worshippers for the first time since 1931.",34122,"Sultan Ahmet, Atmeydan","../img/places1.jpg");
// console.log(myTravels)
new Locations("place","Eiffel Tower","Paris","The Eiffel Tower is 1,063 feet (324 meters) tall, including the antenna at the top. Without the antenna, it is 984 feet 300 m.",75007,"Champ de Mars, 5 Avenue Anatole France","../img/places3.jpg");
new Locations("place","time Square","new york","Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City",10036,"Manhattan, NY ","../img/places4.jpg");





 

new Restaurants("Restaurent","Medusa Restaurant & Club","Viennese","Vinna","f there’s anybody who’s fit to navigate Vienna’s approximately 4,000 restaurants, it’s Lukas Hittinger",1010,"Neuer Markt 8","../img/restaurants1.jpg","http://www.medusarestaurant.at","+43 676 3094176");

new Restaurants("Restaurent","Eater At Home","Chinese","Chaina","When traveling through China, you may have trouble finding your most beloved beverages from back home,",43280,"Haizingergasse 13,","../img/restaurants4.jpg","https://www.eater.com/contact","+43654321");

new Restaurants("Restaurent","Tawa Indian Restaurant","Indian","vienna","If you love Indian food, you’re probably familiar with chicken tikka masala, which appears on most Indian restaurant menus",1120,"Am Hauptbahnhof 1","../img/restaurants5.jpg","https://www.viennawurstelstand.com/guide/best-indian-restaurants-in-vienna/","+436546721");





new Events("Events","concert stadthalle","Vienna","In 1956, Vienna acquired the Vienna Stadthalle, thanks to architect Roland Rainer, as a flagship for modern concerts and shows",1150,"Roland-Rainer-Platz 1","../img/events1.jpg","www.google.com","+4343123","2020.11.02","20:00",45);




new Events("Events","stadium dhaka","dhaka","After concerts in both Dhaka and Sylhet, it was time for Chittagong’s turn in the limelight.",1216,"shawrapara 456","../img/events4.jpg","www.google.com","+880343123","2019.11.02","20:00",15);

new Events("Events","convention hall","New york","A convention center is a large building that is designed to hold a convention, where individuals and groups gather to promote and share common interests.",4324,"michail man road 34/3","../img/events2.jpg","www.google.com","+4343123","2018.11.02","17:00",50);











console.log(myTravels);

let content:string="";

myTravels.forEach(travel=>content+=createCard(travel));

document.querySelector(`[data-meta="entry"]`).innerHTML=content;

myAllFunc();

function createCard(travel:Locations):string{
 
    let allVal:string=`<div class="col">
    <div class="card h-100 own_card " style="background-color: #ae9b;">
    
      <img class="img-fluid own" src="${travel.img}" class="card-img-top" alt="...">
      <div class="card-body text-center">
        <h2 class="card-title">${travel.place_type}</h2>`;

if(travel instanceof Restaurants){
allVal+=`  <h5 class="list-group-item"><b>origin:</b>${(travel as Restaurants).res_type}</h5>`;


}
      allVal+=`
        <p class="card-text" data-meta="display" data-id="${travel.id}">${travel.article}</p>
        <button type="button" class="btn btn-outline-success"data-meta="button" data-id="${travel.id}" >info</button>
        <p data-meta="price" data-id="${travel.id}">hello</p>
        
      </div>
      <div class="card-footer">`;
      if(travel instanceof Events){
        allVal+=`<small class="text-muted">event : ${(travel as Events).event_date} ${(travel as Events).event_time}</small>
         <small class="text-muted">price : ${(travel as Events).ticket_price} € </small>`;
        }
      
    
        allVal +=`</div>
            </div>
        </div>`;
            








  return allVal;


}


console.log("hello")


function myAllFunc() : void{
    document.querySelectorAll(`[data-meta="button"]`).forEach(button => button.addEventListener("click", info));
  }
  
  function info() : void {
      console.log("hell")
    for (let travel of myTravels) {
        if (travel.id == this.dataset.id) {
            document.querySelector(`[data-meta="display"][data-id="${this.dataset.id}"]`).innerHTML = `${travel.display()}`;
        }
    } 
  }
