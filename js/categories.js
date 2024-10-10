


const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch((error) => console.log(error))
}



const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('categories-container')
    for (const category of categories) {
        // console.log(category.category)
        const buttonContainer = document.createElement('div')
        // buttonContainer.classList ='btn text-xl font-medium';
        buttonContainer.innerHTML = `
            <button id="btn-${category.category_id}" onclick="selectCategoryVideos(${category.category_id})" class="btn category-btn">
                ${category.category}
            </button>
        `
        categoriesContainer.appendChild(buttonContainer)

    }
}



loadCategories()