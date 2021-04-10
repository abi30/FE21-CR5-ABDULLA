// console.log("hello");


    var myTravels:Array<Locations>=[];

    var newMyTravels:Array<Locations>=[]; 

    // ##################### MAIN CLASS OR LOCATION CLASS #########################


    class Locations{
        id:number;
        event_date:Date;
        place_type:string;
        placeName:string;
        city:string;
        article:string;
        zip_code:number;
        adress:string;
        img:string;

        constructor(place_type:string="places",PlaceName:string,city:string,article:string,zip:number,adress:string,img:string,event_date:Date){
        
            this.place_type=place_type;
            this.placeName=PlaceName;
            this.city=city;
            this.article=article;
            this.zip_code=zip,
            this.adress=adress;
            this.img=img;
            this.event_date=event_date;
            this.id = Math.floor(Math.random()*1000000);
            myTravels.push(this);


        }

        display(){
            return `<p><span style="color:#353427;font-size:22px;font-weight: bold;" >${this.placeName}</span> <br>City : ${this.city}.<br> ZIP code: ${this.zip_code} <br>Adress :${this.adress}</p>`;

        }


    }

    // console.log(p1.id);
    // console.log(p1.display());
    // console.log(myTravels);

    // ###################### RESTAURANT CLASS#########################


    class Restaurants extends Locations {

        urlAdd:string;
        telNumber:String;
        res_type:string;

        constructor(place_type:string="Restaurant",PlaceName:string,res_type:string,city:string,article:string,zip:number,adress:string,img:string,event_date:Date,url:string="NOT AVAILABLE",telNum:string="NO AVAILABLE"){
            super(place_type,PlaceName,city,article,zip,adress,img,event_date);
            this.res_type=res_type;
            this.urlAdd=url;
            this.telNumber=telNum;
        


        }
    
        display(){
            return `${super.display()}<p>Contact : ${this.telNumber}<br/>URL :<a> ${this.urlAdd}</a></p>`;
        }

        
    }

    // ######################EVENT CLASS#########################

    class Events extends  Locations{

    
        ticket_price:number;
        urlAdd:string;
        telNumber:string;

        constructor(place_type:string="Event",PlaceName:string,city:string,article:string,zip:number,adress:string,img:string,url:string="NOT AVAILABLE",telNum:string="NO AVAILABLE",event_date:Date,tick_price:number){
            super(place_type,PlaceName,city,article,zip,adress,img,event_date);
            this.urlAdd=url;
            this.telNumber=telNum;
            this.event_date=event_date;
            this.ticket_price=tick_price;
        


        }



        
        display(){
            return `${super.display()}<p>Contact : ${this.telNumber}<br/>URL :<a> ${this.urlAdd}</a><br/>Event:${this.event_date}</p>`;
        }




    }

    // ----------------------3 objects from Locations---------------------


    new Locations("place","turkish mosque ","turkey","The Hagia Sophia has just opened to receive Sunni Muslim worshippers for the first time since 1931.",34122,"Sultan Ahmet, Atmeydan","places1.jpg",new Date("Fri Jan 18 2015 13:30:50"));
    // console.log(myTravels)
    new Locations("place","Eiffel Tower","Paris","The Eiffel Tower is 1,063 feet (324 meters) tall, including the antenna at the top. Without the antenna, it is 984 feet 300 m.",75007,"Champ de Mars, 5 Avenue Anatole France","places3.jpg",new Date("Fri Jan 08 2013 12:44:57"));

    new Locations("place","time Square","new york","Times Square is a major commercial intersection, tourist destination, entertainment center, and neighborhood in the Midtown Manhattan section of New York City",10036,"Manhattan, NY ","places4.jpg",new Date("Fri Feb 28 2012 07:44:57"));





    // ----------------------3 objects from Restaurants---------------------
    

    new Restaurants("Restaurant","Medusa Restaurant & Club","Viennese","Vienna","there’s anybody who’s fit to navigate Vienna’s approximately 4,000 restaurants, it’s Lukas Hittinger",1010,"Neuer Markt 8","restaurants1.jpg",new Date("Fri Jan 05 2021 09:44:57"),"http://www.medusarestaurant.at","+43 676 3094176");

    new Restaurants("Restaurant","Eater At Home","Chinese","Chaina","When traveling through China, you may have trouble finding your most beloved beverages from back home,",43280,"Haizingergasse 13,","restaurants4.jpg",new Date("Fri Dec 11 2014 21:44:57"),"https://www.eater.com/contact","+43654321");

    new Restaurants("Restaurant","Tawa Indian Restaurant","Indian","vienna","If you love Indian food, you’re probably familiar with chicken tikka masala, which appears on most Indian restaurant menus",1120,"Am Hauptbahnhof 1","restaurants5.jpg",new Date("Sat Oct 20 2017 07:44:57"),"https://www.viennawurstelstand.com/guide/best-indian-restaurants-in-vienna/","+436546721");



    // ----------------------3 objects from events---------------------


    new Events("Events","concert stadthalle","Vienna","In 1956, Vienna acquired the Vienna Stadthalle, thanks to architect Roland Rainer, as a flagship for modern concerts and shows",1150,"Roland-Rainer-Platz 1","events1.jpg","www.google.com","+4343123",new Date("Fri Dec 08 2020 07:44:57"),45);




    new Events("Events","stadium dhaka","dhaka","It was hard to get the tickets, but a kindly young chap from Singapore had helped this stranger buy the tickets.",1216,"shawrapara 456","events4.jpg","www.google.com","+880343123",new Date("Fri Dec 08 2019 07:44:57"),15);

    new Events("Events","convention hall","New york","A convention center is a large building that is designed to hold a convention, where individuals and groups gather to promote and share common interests.",4324,"michail man road 34/3","events2.jpg","www.google.com","+4343123",new Date("Sun Dec 08 2018 18:30:00"),50);




    // console.log(myTravels);


   

        var content:string="";
        myTravels.forEach(travel=>content+=createCard(travel));
        document.querySelector(`[data-meta="entry"]`).innerHTML=content;


        // var content:string=document.querySelector(`[data-meta="entry"]`).innerHTML;

    // ###################### myAllFunc #########################

        myAllFunc();


    function createCard(travel:Locations):string{
    
        var allVal:string=`<div class="col card">

        <div class="card h-100 own_card " style="background-color:">
            <img class="img-fluid own card-img-top" src="img/${travel.img}"  alt="...">


            <div class="card-body text-center">
            <h2 class="card-title">${travel.place_type}</h2>`;

        if(travel instanceof Restaurants){ 
            allVal +=`<h5 class="list-group-item"><b>origin:</b>${(travel as Restaurants).res_type}</h5>`;
        }


        allVal+=`
            <p class="card-text" data-meta="display" data-id="${travel.id}">${travel.article}</p>
            
        </div> 
        <div class="card-footer infofooter"><button type="button" class="btn  btn-outline-success"data-meta="button" data-id="${travel.id}" >info</button></div>

        <div class="card-footer">
            <small class="text-muted">Time&Date : ${(travel as Events).event_date}<br/></small>`;

        if(travel instanceof Events){ 
            allVal+=` <small class="text-muted">price : ${(travel as Events).ticket_price} € </small>`;
        }
        
        
        allVal +=`</div>
                </div>
            </div>`;

                
    return allVal;


    }



    function myAllFunc() : void{
        document.querySelectorAll(`[data-meta="button"]`).forEach(button => button.addEventListener("click", info));

        document.getElementById("asc")?.addEventListener("click", sorting_asc);

        document.getElementById("desc")?.addEventListener("click" ,sorting_desc);
        document.getElementById("search")?.addEventListener("click" ,search);


    }
  
    function info() : void {
     
    for (let travel of myTravels) {
        if (travel.id == this.dataset.id) {

     // ######################invoke Display mathods #########################
            document.querySelector(`[data-meta="display"][data-id="${this.dataset.id}"]`).innerHTML = `${travel.display()}`;
        }
     } 
    }


       // ###################### Ascending sorting #########################

    function sorting_asc() :void{
     
        if(newMyTravels!=""){

            newMyTravels.sort(function(a:any,b:any){
                var c:any= new Date(a.event_date);
                var d:any= new Date(b.event_date);
                return c - d;
            });
            // console.log(newMyTravels);

            var content:string="";
            newMyTravels.forEach(travel=>content+=createCard(travel));
            document.querySelector(`[data-meta="entry"]`).innerHTML=content;

        }else{

                myTravels.sort(function(a:any, b:any){
                var c:any= new Date(a.event_date);
                var d:any= new Date(b.event_date);
                return c - d;
             });
    
         console.log(myTravels);

            var content:string="";
            myTravels.forEach(travel=>content+=createCard(travel));
            document.querySelector(`[data-meta="entry"]`).innerHTML=content;
        }
   
        

     
        
        myAllFunc();

        
    }

     // ###################### Descending sorting #########################
    function sorting_desc() :void{
        
        if(newMyTravels!=""){
    
            newMyTravels.sort(function(a:any, b:any){
            var c:any= new Date(b.event_date);
            var d:any= new Date(a.event_date);
            return c - d;
        });
        var content:string="";
        newMyTravels.forEach(travel=>content+=createCard(travel));
        document.querySelector(`[data-meta="entry"]`).innerHTML=content;
        }

         else{

            myTravels.sort(function(a:any, b:any){
            var c:any= new Date(b.event_date);
            var d:any= new Date(a.event_date);
            return c - d;
        });
    

        var content:string="";
        myTravels.forEach(travel=>content+=createCard(travel));
        document.querySelector(`[data-meta="entry"]`).innerHTML=content;

    }  

    
    myAllFunc();

    
    // console.log("Hello")

    }

    // ###################### extra search function #########################

    function search():any{
        
        //  newMyTravels="";

        var searchText=document.getElementById('search_text').value;
        console.log("hello")
        newMyTravels=[];
        for(let i=0; i<myTravels.length;i++)
        {
            var entireText1=myTravels[i].placeName;
            var entireText2=myTravels[i].place_type;
            var entireText3=myTravels[i].city;


        if((entireText1.toLowerCase().indexOf(searchText.toLowerCase()) > -1)|| (entireText2.toLowerCase().indexOf(searchText.toLowerCase()) > -1) ||   (entireText3.toLowerCase().indexOf(searchText.toLowerCase()) > -1)){
            
        // newMyTravels="";
        newMyTravels.push(myTravels[i]);
           // console.log("well done");
        }

        

        }



             if (newMyTravels==""){
                document.querySelector(`[data-meta="entry"]`).innerHTML="";
                
                document.getElementById("error").innerHTML=`<h1>Sorry nothing Found !</h1>`;

                }else{
                var content:string="";
                document.getElementById("error").innerHTML="";

                newMyTravels.forEach(travel=>content+=createCard(travel));
                document.querySelector(`[data-meta="entry"]`).innerHTML=content;
                // document.getElementById("contact").innerHTML;

                myAllFunc();

                document.getElementById("contact").innerHTML;

                }

            
        

    } 



console.log("hello");









   
    
