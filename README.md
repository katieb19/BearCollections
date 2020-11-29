# bear-collections

README.md

# BearCollections

## What It Is

BearCollections is a website that allows users to submit book and movie recommendations. This information would then be inputted in a larger database where the owner can manipulate and analyze the data. The targeted audience for this website is Brown University students and has been made as a way to pool a list of recommendations from Brown students.

## Structure of the Repository

Our code is structured into a series of static html and css files for the "Home" "Submit a Book" "Submit a Movie" and "Rankings" pages. These files are found in the views folder. Additionally, in the views folder we've included the css code for our "Thanks" endpoint and three php files allowing each submission to be entered into the database. Within the views folder, the files for our home page are nested within the home folder. The rest of the files for our other endpoints are nested within the log folder within views. We've included our dependencies for this project within our package.json file. Finally, we included an index.js file to load each endpoint on the webpage.

## How to Run the Code

Download the github repository and run 
```bash
npm install
```
in the command line to install the dependencies required for this project. The dependencies are ejs, express, nodemon, php-express, and body-parser.

You also need to install MAMP, WAMP, LAMP, or XAMPP depending on your OS.

After that, change the database username and password fields to your own MysSQL username and password.

Start the Apache web server and MySQL server. Open phpMyAdmin through the Webstart Page of MAMP, LAMP, etc and make a database called 'bear_collections' with two tables 'books' and 'movies'. The books table has two columns: 'id' and 'book_title', and the movies table has two columns: 'id' and 'movie_title'.

Run 
```bash
node index.js
```
in your terminal.
Finally, open localhost:3000 on your browser.

## Project Contributors

The project contributors were Katie Baumgarten, Sophia Liu, and Taishi Nishizawa. 
All three planned and proposed the project.

Katie Baumgarten worked on the frontend design, including the prototyping and code implementation of all four of the web pages.

Sophia Liu worked on the frontend design and set up and implemented the MYSQL database.

Taishi Nishizawa worked on index.js, set up the Github repository, and did research for the backend.