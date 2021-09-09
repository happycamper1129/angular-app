import { Ingredient } from "../shared/ingredient.model"

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('apples', 5),
        new Ingredient('coockie', 15),
    ]
    getIngredients(){
        return this.ingredients.slice()
    }
    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient)
    }
}