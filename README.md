# SafeRes

A reservation app to help restaurants responsibly contact trace there guests

<a href="https://safe-res-client.vercel.app/">Live Site</a>

<a href="https://github.com/ajbates2/SafeRes-api">Server Repo</a>

Demo account: {
    email: 'foo@bar.com'
    password: 'password'
}

## summary

SafeRes is a reservation app for retaurants to not just handle reservations, but also for contact tracing and return customer information. In Minnesota, current state mandates require a 'reservation', I wanted to make something that can handle day-of reservations as well as walk-in reservations.

Also uses SMS to contact customers when they make a reservation or if they're late.

<img src="/SafeRes_screenshot.png">

Log into the demo account

## inspiration

I decided I wanted to make this app because the reservation app we were using at my restaurant was horrible. Slow, buggy, and not very enjoyable to use. My restaurant does not typically take reservations, but COVID-19 state mandates changed that.

I wanted a way to contact everyone that was at our restaurant on a day they may have come into contact with somebody with COVID-19. We have had people call and tell us they tested positive two days after coming in, and I think it's our duty to let people know.

## future iterations

*   Find better ways to display daily, weekly, monthly and yearly analytics.
*   Implement easy way to contact all people from a single day
*   Add other SMS features to this app for better customer engagement

## tech used

#### Front End

* React with hooks
  * Create React App
  * React Router
* Moment.js
* HTML5
* Vanilla CSS3
* FontAwesome (icons)
* React spring

#### Testing

* Jest (smoke tests)

#### Production

* Deployed via Vercel

## Getting Started

Clone repo to you machine
`npm install` to load dependencies
`npm test` to ensure build is stable
`npm start` to run the app in dev mode