Jetpack Compose doesn't offer any built-in navigation system, so we will build own own. Let's create a new file: `BottomNavigation.kt`.

## Data model for route-based navigation

Create the following elements in this file; they will represent our structure

```kotlin
data class NavPage(var name: String, var icon: ImageVector, var route: String)

object Routes {
    var MenuPage = NavPage("Menu", Icons.Outlined.Menu, "menu")
    var OffersPage = NavPage("Offers", Icons.Outlined.Star, "offers")
    var OrderPage =  NavPage("My Order", Icons.Outlined.ShoppingCart, "order")
    var InfoPage =  NavPage("Info", Icons.Outlined.Info, "info")

    val pages = listOf(MenuPage, OffersPage, OrderPage, InfoPage)
}
```

