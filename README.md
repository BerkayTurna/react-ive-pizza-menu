React-ive Pizza Menu

Welcome to React-ive Pizza Menu, a simple and interactive pizza menu web app built with React. This app showcases a list of pizzas with their ingredients, prices, and availability, allowing users to explore various pizza options from a virtual menu.

Features
	•	Pizza Menu: Displays a list of pizzas with images, ingredients, and prices.
	•	Sold Out Indicator: Marks items as “Sold Out” if they are unavailable.
	•	Opening Hours: Displays the operating hours and allows users to order when the app is open.
	•	Responsive Design: The app is designed to be responsive, adjusting to different screen sizes.

Technologies Used
	•	React: A JavaScript library for building user interfaces.
	•	ReactDOM: For rendering React components into the DOM.
	•	CSS: For styling the app.

Installation

To get started with this app, follow the steps below:
	1.	Clone the repository to your local machine:
git clone https://github.com/BerkayTurna/react-ive-pizza-menu.git
 	2.	Navigate to the project directory:
cd react-ive-pizza-menu
  3.	Install dependencies:
npm install
	4.	Run the app:
npm start

The app will open in your browser at http://localhost:3000.

How It Works
	•	The app displays a list of pizzas, which includes the name, ingredients, price, and availability (sold out or not).
	•	A header section with the title “React-ive Pizza Co.” is shown at the top.
	•	The main section features a list of pizzas and provides detailed information about each pizza.
	•	The footer displays the business hours and a call to action for ordering, depending on whether the restaurant is open or closed.

File Structure

The main files in this project are:
/src
  /index.css           - Main styling for the app.
  /index.js            - Entry point for the React app.

Main Components
	•	App: The root component of the application.
	•	Header: Contains the app’s title.
	•	Menu: Displays the list of pizzas and their details.
	•	Pizza: Represents each pizza in the menu with a photo, name, ingredients, price, and availability.
	•	Footer: Displays the hours of operation and the option to order.
	•	Order: Displays a message when the restaurant is open and provides an order button.

Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. You can also open an issue if you encounter any bugs or have feature requests.
