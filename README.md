

# Project -  **`Laptop City`**


## **Live Site** - (https://laptop-city-3d932.web.app/ “Laptop City”)








## Site features

1. Laptop City sales refurbished laptops around the world.
2. There can be 3 types of user in this suite.While registering by default users will be give buyers role option, or they can choose seller role.
3. Users with buyer role can purchase products and pay for its. Stripe is used for payment integration.
4. Users with seller role can add products, delete the products added by them, or can advertise their product. If product is advertise it will appear in home page, as soon the product is unavailable or sold out it will disappear. If a product is sold out, user can delete that product from database.
5. Third type of user is admin.Amin can see all types of users including sellers and buyers.Buyers get a **report to admin** button, is a product is reported admin can see it and delete the product.
6. Users have to sign up or login to go to dashboard
7. Routes of dashboard will change automatically based on the user role.
8. In order to purchase a laptop, user have to book first, then that product will appear in My orders route.From that route user can pay for it.As soon as price is paid for the products it will disappear from categories and home.
9. JWT is used which will expire in 1 day (**If the data doest not load that means yours JWT token has expired, so if you ever face such problems just log out and login again**)
10. Users can toggle between light and dark mode
11. If admin deletes a user with **seller** role, next time when the user logs in again, he/she will have buyer role.

#

## Packages and Technologies used (Client Side)

1. Tailwind CSS , daisyui (Tailwind component library)
2. React router dom to route through components
3. React (JS library)
4. react-icons --> used as it is easier to work with
5. react-spinner --> more fancier than normal ones and easily customizable
6. firebase-authentication ---> firebase allows users to register or login to the app
7. axios --> to make http requests
8. react-hot-toast -->to show a toast (success / error)
9. react-helmet-async --> to make the page title dynamic and different for every pages
10. react-photo-view --> to preview an image
11. AOS LIBRARY --> for animation
12. react-scroll-to-top ---> scroll to the top of the page
13. Stripe --> for payment integration

#

## Packages and Technologies used (Server Side)

1. Nodemon --> to monitor changes while updating
2. Express js (Node js framework)
3. Cors --> supports data transfer between servers
4. Stripe --> for payment integration
5. jsonwebtoken --> to securing information sharing between server and client
6. dotenv --> to separate secrets from my code
