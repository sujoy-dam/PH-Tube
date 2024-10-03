const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))
}
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container')
    for (const category of categories){
        // console.log(category.category)
        const button = document.createElement('button')
        button.classList ='btn text-xl font-medium';
        button.innerText = category.category;
        categoriesContainer.appendChild(button)

    }
}



loadCategories()