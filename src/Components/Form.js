import React from "react";

function Order() {
    return (
        <div>
            <form>
                <label htmlFor = "name">
                    Name:
                    <input 
                        id = "name"
                        type = "text"
                        name = "name"
                    />
                </label><br />

                <label htmlFor = "pizzaSize">
                    Select pizza size:
                    <select id="pizzaSize" name="pizzaSize">
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </label><br />

                <label htmlFor="pizzaTopping"> Select desired toppings:<br />
                    <input 
                        name="pepperoni"
                        type="checkbox"
                    /> Pepperoni <br />
                    <input 
                        name="cheese"
                        type="checkbox"
                    /> Cheese <br />
                    <input 
                        name="sausage"
                        type="checkbox"
                    /> Sausage <br />
                    <input 
                        name="pineapple"
                        type="checkbox"
                    /> Pineapple(gross) <br />

                </label><br />

                <label htmlFor="instructions">
                    Any special requests?:<br />
                    <input 
                        name="intructions"
                        type="text"
                    />
                </label><br />

                <label>
                    <button>Submit Order!</button>
                </label>
            </form>
        </div>
    )
}

export default Order;