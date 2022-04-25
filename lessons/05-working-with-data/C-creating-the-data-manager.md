We will create a set of classes responsible for managing the data of our app, a DataManager class in a new file `DataManager.kt`.


```kotlin
class DataManager {
    var menu: List<Category> by mutableStateOf(listOf())
    var cart: List<ItemInCart> by mutableStateOf(listOf())

    fun cartAdd(product: Product) {
        var found = false
        cart.forEach {
            if (product.id==it.product.id) {
                it.quantity++
                found = true
            }
        }
        // IMPORTANT: it's a state, we have to change the whole list, not mutate its contents
        if (!found) {
            cart = listOf(*cart.toTypedArray(), ItemInCart(product, 1))
        }
    }

    fun cartRemove(product: Product) {
        val aux = cart.toMutableList()
        aux.removeAll { it.product.id == product.id }
        // IMPORTANT: it's a state, we have to change the whole list, not mutate its contents
        cart = listOf(*aux.toTypedArray())
    }

    fun cartClear() {
        // IMPORTANT: it's a state, we have to change the whole list, not mutate its contents
        cart = listOf()
    }

    fun cartTotal(): Double {
        var sum = 0.0
        for (item in cart) {
            sum += item.quantity*item.product.price
        }
        return sum
    }
}
```
