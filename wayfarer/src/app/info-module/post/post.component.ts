import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  cities = [
    {
      name: 'New York',
      country: 'United States',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/NYC_Downtown_Manhattan_Skyline_seen_from_Paulus_Hook_2019-12-20_IMG_7347_FRD_%28cropped%29.jpg',
      posts: [
        {
          title: 'New York Midtown Hotels',
          content: "Hi There, I'm looking for some sound guidance on places to stay in Midtown. Wanting Value for money and a big'ish room with a view of the city. We are looking to go Sept 2022 and have looked at lots of different hotels all much of a muchness. I've favored the New Yorker at the min but just thought i would ask the Trip Advisor community. What ever i go for i obviously know about the stupid resort fees !! on top. Any Help Guidance or Advice is welcome !! Many Thanks all !! Dave"
        }, 
      ],
    },
    {
      name: 'London',
      country: 'United Kingdom',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg',
      posts: [
        {
          title: 'Vaccine???',
          content: "In the US we are learning that the UK has a vaccine and it will be using it soon. First of all, is this true? And how might this fact impact travel. A very eager traveler would like to know!",
        }, 
        {
          title: 'Traveling by train in the UK',
          content: "My family and I will be flying into Edinburgh in June. We want to travel to Northumberland to visit Alnwick Castle then travel down to Oxford then London. Wondering best way to get to Northumberland? Should we take a train to Northumberland and stay a night there before continuing on OR stay one more night in Edinburgh and just take a day tour to Alnwick Castle? Any advice would be much appreciated",
        }, 
        {
          title: 'Long term car rental in United Kingdom?',
          content: "I will be volunteering in Hampshire mid June through mid September this year. Anyone had experience with renting a car for a couple months? I'll be volunteering in the countryside and have been advised to have a car. Thanks!!"
        }, 
      ],
    },
    {
      name: 'Sidney',
      country: 'Australia',
      image: 'https://www.cunard.com/content/dam/cunard/inventory-assets/ports/SYD/yqy.jpg.1538745208398.image.750.563.low.jpg',
      posts: [
        {
          title: 'Sydney domestic airport',
          content: 'Are the cafes open in T2? We are flying out Monday and trying to sort out if we need to eat before we get there or if we can have breakfast at the terminal.',
        }, 
        {
          title: 'London to Townsville via Sydney',
          content: 'Australians returning Christmas Day. Arriving in Sydney from London, just a refuel in Darwin. Destination is Townsville where we have a rental house waiting. Flight arrives in Sydney at night but first flight to Townsville is not until 7am. 2 adults fully vaccinated, 12yr old with 1 vaccination (all you can get for them in UK) and a 9yr old. What do we. Anyone know?',
        }, 
      ],
    },
    {
      name: 'San Francisco',
      country: 'United States',
      image: 'https://a.cdn-hotels.com/gdcs/production92/d1580/9a28fc70-9bea-11e8-a1b5-0242ac110053.jpg',
      posts: [
        {
          title: 'Club Quarters Hotel Financial District',
          content: 'Looking at this place for a 3 night visit to see SF. Anybody have thoughts or experience with this place? TIA',
        }, 
      ],
    },
    {
      name: 'Seattle',
      country: 'United States',
      image: 'https://a.cdn-hotels.com/gdcs/production105/d405/a6a349a5-4c01-4262-ae54-3d7bbfb24b10.jpg?impolicy=fcrop&w=800&h=533&q=medium',
      posts: [
        {
          title: "Seattle first time 7 night help",
          Content:"Flying into Seattle and want to spend a few nights. there. What else do you suggest we visit? We will have a rental car. Leavinworth? San Juan islands? Any info is helpful. We aren't big into hiking, but would if its easy. ha! ",
        }, 
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
