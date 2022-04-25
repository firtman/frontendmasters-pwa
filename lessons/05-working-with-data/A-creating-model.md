It's time to start working with data. Let's create a Model file called DataModel.kt with the following basic data classes

## Product.kt

```kotlin
class Product(var id: Int, var name: String, var price: Double, var image: String) {
    val imageUrl get() = "https://firtman.github.io/coffeemasters/api/images/${this.image}"

}

class Category(var name: String, var products: MutableList<Product>)

class ItemInCart(var product: Product, var quantity: Int)

```
