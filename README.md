City Travels

It is a simple react based and Firebase authorized site developed by using react, bootstrap, custom CSS, JavaScript and html. For design purpose I have used Font Awesome icons and to maintain operational route and private route I also used react router. Mainly I have used Firebase authorization for email and password as well as google sign in.

Functionality:
1.	At the home page this site displays a Navbar on the top that can be used to redirect user and   there are four different categories of transport on the middle of the page.
2.	Each transport category is displayed on a card that contain a transport image and name of that transport. After clicking on the card, it will redirect to the private route 3  
    page called booking.
3.	As booking is a private route that’s why it first checks user authentication. So, it redirects to the login page.
4.	In login page user can create account or can make simple login if already have an account. Beside that user can also login by using google account.
5.	In the bottom of the login card there is an option toggler that can change the card based on user type.
6.	If user try to login or create any unauthorized account/ if any wrong password issues happened or if there occurred any error it will show the error message on the bottom of 
    the card.
7.	After successfully login to the site it will redirect user to desire booking page. Where user must need to select pickup places, date and time. there is also a google map 
    deployed by fetching google API.
8.	After that user can see the transport type that changes dynamically, transport images, available seats and ticket price on the card. And user can also see the location on 
    google map.
9.	There is another private route path called Destination, that page also first check authentication.
10.	And finally, this site is mainly focused react private routing, that dynamically changed according to users operate, and user authentication.

Live Site Link: [City Travels](https://city-travel.netlify.app/)

