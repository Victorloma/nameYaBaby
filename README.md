# Victor's babyname generator

#### Video Demo: https://youtu.be/vpNtb8OP844

#### Description:

## What is it and why did I make it?

When my girlfriend got pregnant, we were having a hard time finding baby names. This made me think, that maybe, I could make a baby name generator that helps us create a list of favorite names. That is how this project got started.

## Where did I get the names?

I've found a open source database on Google's BigQuery which you can download here 'https://www.ssa.gov/OACT/babynames/names.zip'. It contains multiple .csv files starting from the year 1880, all the way up to the year 2019. Every .csv file contains all the names given to babies more than 5 times in a given year in the US. I've chosen to use the list of names from the year 2019 for my app as these are more actually relevant names.

## What technologies did I use?

The technologies used in the frontend are the Next.js framework, which is built on top of React. The CSS framework I used for styling the app is Tailwind CSS. The animations are done with Framer Motion and the icons come from Fortawesome/Fontaweson. I used the Redux Toolkit library for state management and Redux Toolkit Query for data fetching. The backend is a Supabase backend as a service, which uses a PostgreSQL database and provides a Authentication and Session management API.

## Software Design

When building this app I've tried to follow the DRY (Don't Repeat Yourself) principle, I applied this by writing code that I needed more than once in a seperate file that I could then import into other files where this code had to be used. Another principle I applied is called SOLID. The 'S' stands for Single responsibility, I've used this principle when defining the different states of the application with Redux Toolkit. Apart from these things I've also focussed on seperation of concerns and tried to abstract as much of the functionality and utilities away from the components into their own folders/files.

## How to use the app:

To use the app you first need to go to https://babynamer.netlify.app/, this will take you to the homepage where you will be asked to sign in, sign up or try the app out as a guest.

Once you made your choice you'll be forwarded to the respective page. When you chose sign up it will ask you for your e-mail address and a password, when you click register this e-mail address and your hashed password will be saved in the users table of the Supabase database. When logging in this data will be checked with the data stored in the database. If you chose 'Try it out as a guest' you will be automatically logged in with predefined user credentials that are stored in a environmental variable.

Once logged in you get access to the app and all its functionality. You can choose a gender specific filter or choose to search for all genders. If you swipe left the name is discarded and another name will be suggested, when swiping right the name is accepted and stored in the favorite_names table in the database. Alternatively you can also click the cross to discard or the checkmark to like and save the name.

When clicking on the three lines in the upper right corner you open a menu that gives you the option to see the favorite names or to log out. The favorite names page then queries your list of favorite names and displays them in a table, here you can also delete names you no longer want to have in your list by clicking the garbage can icon next to the name.

If you click the 'Sign out' in previously mentioned menu, you will log out and the user session will be ended. Now you need to log to be able to use the app again.
