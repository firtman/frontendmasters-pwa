Now it's time to make it interactive, for that we will update our App composable:


```kotlin
@Composable
fun App() {
    val selectedRoute = remember {
        mutableStateOf("menu")
    }
    Scaffold(
        topBar = { TopAppBar {
            AppTitle()
        }},
        content = {
            when (selectedRoute.value) {
                Routes.MenuPage.route -> Text("Menu")
                Routes.OffersPage.route -> OffersPage()
                Routes.OrderPage.route -> Text("Orders")
                Routes.InfoPage.route -> Text("Info")
            }
        },
        bottomBar = {
            NavBar(
                selectedRoute = selectedRoute.value,
                onChange = {
                    selectedRoute.value = it
                })
        }
    )
}
```

## Rest of the pages

Now it's time to create our three missing pages as empty composables for now with just a text in three different files: `MenuPage`, `OrderPage` and `InfoPage` that we will be using over the next chapters of the course.