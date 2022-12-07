import React from "react";

function newAnimalForm() {
    return (
        <div className="new-animal-form">
            <h2>New Animal</h2>
                <form>
                    <label for='animals' class='form-label'>New Animal</label>
                    <input type='text' name='name' placeholder='Animal Name' class='form-control-sm'/>
                    <input type='image' name='image' placeholder='Image URL'class='form-control-sm'/>
                    <label for='zoo' class='zoo-label'>Select Zoo</label>
                    <select id='zoos' name='zoos'>
                        <option value='zoo1'>San Francisco Zoo</option>
                        <option value='zoo2'>Berlin Zoo</option>
                        <option value='zoo3'>Sao Paulo Zoo</option>
                    </select>
                    <button>Submit</button>
                </form>
        </div>
    );   
}

export default newAnimalForm()