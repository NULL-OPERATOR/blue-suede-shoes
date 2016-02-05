<!-- [![Build Status](https://travis-ci.org/NULL-OPERATOR/blue-suede-shoes.svg?branch=master)](https://travis-ci.org/NULL-OPERATOR/blue-suede-shoes) [![Code Climate](https://codeclimate.com/github/NULL-OPERATOR/blue-suede-shoes/badges/gpa.svg)](https://codeclimate.com/github/NULL-OPERATOR/blue-suede-shoes) [![Coverage Status](https://coveralls.io/repos/github/NULL-OPERATOR/blue-suede-shoes/badge.svg?branch=master)](https://coveralls.io/github/NULL-OPERATOR/blue-suede-shoes?branch=master) -->


# *BLUE SUEDE SHOES* (Shopping simulator)

![Image Alt](app/img/screenshot.png)


### Approach

I approached this task in the usual way, planning out the major features and structure, and then progressing through TDD to create a viable MVP, and iterating from that.
I tried to avoid using $scope, also attempting to use closures and immediately invoked functions as a stylistic preference. I feel this made some code more lengthly, but hopefully the benefits overcome this.

I used AngularJs, as I felt it would allow me to spend the most time building the front end, among other reasons: as it can handle and manipulate a lot of the data without a backend.

### Notable issues

Although all the tests still pass, they have not yet been refactored out to mirror the changes since splitting the majority of the logic into factories/services. There are also not as many protractor tests as I would have liked. As I was planning to re-do the html structure through BDD.

The app is working better in browser mode, but the menu prevails in mobile, as I was planning to extract the search/cart section into a mobile friendly setup.

All the features work, but I feel I could have invested more time planning out, or re-writing the logic into more readable and simple code.


### Next steps

I ideally wanted the cart/search/menu to be more minimal, and have extendable features, either through  modals, or drop down options. Also extracting some parts into a nav bar at the top of the page.

The major next steps however would be to work on the layout/css, and also refactor the tests.


### User stories

```
1. As a User,
 I can add a product to my shopping cart.
2. As a User,
 I can remove a product from my shopping cart.
3. As a User,
 I can view the total price for the products in my shopping
 cart.
4. As a User,
 I can apply a voucher to my shopping cart.
5. As a User,
 I can view the total price for the products in my shopping cart with discounts applied.
6. As a User,
 I am alerted when I apply an invalid voucher to my shopping
cart.
7. As a User,
 I am unable to Out of Stock products to the shopping cart.
```

There are also discount vouchers available that can be redeemed. The discount vouchers are as follows:
```
- £5.00 off your order
- £10.00 off when you spend over £50.00
- £15.00 off when you have bought at least one footwear item and spent over £75.00
```


node.js and npm required - get them from [http://nodejs.org/](http://nodejs.org/).

### To run

clone & cd into the repo
```
git clone https://github.com/NULL-OPERATOR/blue-suede-shoes.git
cd blue-suede-shoes
```
install dependencies
(npm install will run bower)
```
npm install
npm run update-webdriver
```

launch the server

```
http-server -a localhost -p 8000
```
now visit
```
http://localhost:8000/app
```


### File layout

```

app/ <------------------------ Root of the project
  css/ <---------------------- Stylesheets
    app.css
  img/ <---------------------- Public images
  js/
    controllers/
      MainController.js <---- The main app controller
    services/
      CartService.js <------- Main cart logic service
      DiscountService.js <--- Service that calculates discounts
      ItemsService.js <------ Service that gets all shop items
  app.js <------------------- App module
  views/
    main.html <-------------- The home HTML page
  index.html <--------------- Sets up scripts/Stylesheets and imports main.html
test/
  e2e/
    scenario.js <------------ e2e Protractor tests
  unit/ <-------------------- Jasmine unit tests
    controllerSpec.js
    servicesSpec.js
  karma-conf.js <------------ Karma config
  protractor-conf.js <------- Protractor config
bower.json <----------------- Bower config file
package.json <--------------- Installation/dependencies config
```

### Tests
are written in [Jasmine][jasmine], which will run with the [Karma Test Runner][karma].
```
npm test
```
### e2e
written in [Jasmine][jasmine]. These tests are run with the [Protractor][protractor]

```
npm run protractor
```





[git]: http://git-scm.com/
[bower]: http://bower.io
[npm]: https://www.npmjs.org/
[node]: http://nodejs.org
[protractor]: https://github.com/angular/protractor
[jasmine]: http://jasmine.github.io
[karma]: http://karma-runner.github.io
[travis]: https://travis-ci.org/
[http-server]: https://github.com/nodeapps/http-server
