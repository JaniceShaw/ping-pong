import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SearchTool = () => {
    
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("");
    const [zipcode, setZIPCode] = useState("");

    
    const navigate = useNavigate();

    const handleSearchRequest = (event) => {
        event.preventDefault();
        navigate("/listing/helpers")
    }

    const handleKeywordInput = (event) => {
        setKeyword(event.target.value);
    };
    
    const handleCategoryInput = (event) => {
        setCategory(event.target.value);
    };
    
    const handleZIPCode = (event) => {
        setZIPCode(event.target.value);
    };

    return (
    <form>
    <input onChange={handleKeywordInput} type="text" placeholder="Search..."/>
    <select onChange={handleCategoryInput} id="categories" name="categories">
      <option value="Selector" selected>Select a category</option>
      <option value="cat1">Category 1</option>
      <option value="cat2">Category 2</option>
      <option value="cat3">Category 3</option>
      <option value="cat4">Category 4</option>
    </select>
    <input onChange={handleZIPCode} type="text" placeholder="Enter your ZIP Code"/>
    <input onClick={handleSearchRequest} type="submit" placeholder="GO"/>
  </form>
  )
}