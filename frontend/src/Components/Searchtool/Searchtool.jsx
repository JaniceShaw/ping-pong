export const SearchTool = () => {
    return (
    <form>
    <input type="text" placeholder="Search..."/>
    <select id="categories" name="categories">
      <option value="Selector" selected>Select a category</option>
      <option value="cat1">Category 1</option>
      <option value="cat2">Category 2</option>
      <option value="cat3">Category 3</option>
      <option value="cat4">Category 4</option>
    </select>
    <input type="text" placeholder="Enter your ZIP Code"/>
    <input type="submit" placeholder="GO"/>
  </form>
  )
}