import React, { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeViewer from "./RecipeViewer";


function RecipeCreate({recipes, setRecipes}) {

 
  const initialFormState = {  //Our Variable to hold our App information
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [form,setForm] = useState({...initialFormState}) //Creating our UseState hook. Creates the form variable and a setForm function


  const handleChange = ({target}) => { // Creates a handle change function
    setForm({...form,
      [target.name]: target.value})
  }

  const handleSubmit = (event) => { //Creates the handleSubmit function
    event.preventDefault() //The event to prevent default
    console.log(form)
    setRecipes([...recipes, form]) //Calling the setRecipes using the form variable and the (spread op) for recipies
    setForm({...initialFormState}) //Uses setForm to use the spread opp to call on initial form state
  }


  return ( // This form creates the format for the App
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="row">
            <td>
              <label htmlFor="name"></label> 
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                required={true}
                onChange={handleChange}
                value={form.name}
              />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                required={true}
                onChange={handleChange}
                value={form.cuisine}
              />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                name="photo"
                type="url"
                placeholder="URL"
                required={true}
                onChange={handleChange}
                value={form.photo}
              />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                type="text"
                placeholder="Ingredients"
                required={true}
                onChange={handleChange}
                value={form.ingredients}
                autoFocus= "on"
              />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="preparation"
                required={true}
                onChange={handleChange}
                value={form.preparation}
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;