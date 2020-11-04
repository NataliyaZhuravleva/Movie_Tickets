//Business Logic

//Function that returns ticketPrice1 with the additional cost for the new-released movie +$7
function movieRelease(userTicket) {
  let ticketPrice1 = 0;
  let movies = [["Braveheart", 0], ["Tenet", 7], ["The Mandalorian", 7], ["Joker", 0]];
  movies.forEach(function (movie) {
    if (userTicket.movieName === movie[0]) {
      ticketPrice1 = movie[1];
    } else {
      return false;
    }
  });
};

//Function that returns ticketPrice2 with the additional cost for the evening movie +$2
function timeOfDay(userTicket) {
  let ticketPrice2=0;
  let timeOfDay = [["12:00", 0], ["3:30", 0], ["5:15", 2], ["7:45", 2], ["9:00", 2]];
  timeOfDay.forEach(function (time) {
    console.log(userTicket.movieTime);
    console.log(time[0]);
    if (userTicket.movieTime === time[0]) {
      ticketPrice2 = time[1];//after 5.00 p.m. (full price)
    }
  });
}

function userAge(age) {
  let ages = ["Child", "Student", "Adult", "Senior"];
  ages.forEach(function (age) {
    if (userTicket.age === ages[1] || userTicket.age === ages[3]) {
      ticketPrice3 = -2;
    }
  });
}

//Ticket business logic

function Ticket(movieName, movieTime, userAge) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.userAge = userAge;
}
let ticket1 = new Ticket("Braveheart", "12:00", 10);
let ticket2 = new Ticket("Tenet", "04:00", 35);
let ticket3 = new Ticket("The Mandalorian", "05:00", 14);
let ticket4 = new Ticket("Joker", "09:00", 65);

let totalTicketPrice = 0;
let ticketPrice1 = 0;
let ticketPrice2 = 0;
let ticketPrice3 = 0;

Ticket.prototype.calculateTicketPrice(function (ticket) {
  movieRelease(userTicket);
  timeOfDay(userTicket);
  userAge(userTicket);
  totalTicketPrice = ticketPrice1 + ticketPrice2 + ticketPrice3;
});
