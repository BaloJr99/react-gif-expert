import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Marvel']);
    const onAddCategory = ( newCategory ) => {
        if( categories.includes(newCategory) ) return;
        setCategories([ ...categories, newCategory ]);
    }
    return (
        <>
        <h1>Gif Expert</h1>
        <AddCategory onNewCategory = { onAddCategory } />
        
        { 
            categories.map( category => (
                    <GifGrid key = { category } category = {category }/>
                )
            )
        }
        </>
    )
}
