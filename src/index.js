import React from "react";
import ReactDOM from "react-dom/client"
import './index.css';
const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
}

function Header() {
    return <header className="header">
        <h1>React-ive Pizza Co.</h1>
    </header>
}

function Menu() {
    const pizzas = pizzaData
    return <main className="menu">
        <h2>Our Pizzas</h2>
        {pizzas.length > 0 ? (
            <>
                <p>
                    Authentic Italian cuisine, made with love and passion.
                    Our pizzas are made with the finest ingredients, and baked in a traditional wood-fired oven.
                </p>
                <ul className="pizzas">
                    {pizzas.map(pizza => <Pizza pizzaObj={pizza} key={pizza.name} />)}
                </ul>
            </>
        ) : (<p>We are still working on the menu :)</p>)}
    </main>
}

function Pizza(props) {

    return <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
        <div>
            <h3>{props.pizzaObj.name}</h3>
            <p>{props.pizzaObj.ingredients}</p>
            <span>{props.pizzaObj.soldOut ? 'SOLD OUT' : props.pizzaObj.price}</span>
        </div>
    </li>
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 20;
    const closeHour = 23;
    const isOpen = hour >= openHour && hour <= closeHour;

    return <footer className="footer">
        {isOpen ? <Order closeHour={closeHour} /> : (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)}
    </footer >
}

function Order(props) {
    return <div className="order">
        <p>We're open until {props.closeHour}:00. Come visit us order online.</p>
        <button className="btn">Order</button>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);