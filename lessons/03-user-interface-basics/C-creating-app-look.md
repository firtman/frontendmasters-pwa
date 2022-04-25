## Creating the App Look & Feel

Delete the greeting composable created by the template, import the logo vector graphic from assets and create the following composables in the Activity kotlin class.

```kotlin
@Composable
fun AppTitle() {
    Box(modifier = Modifier.fillMaxWidth(),
        contentAlignment = Alignment.Center) {
        Image(
            painter = painterResource(id = R.drawable.logo),
            contentDescription = "Coffee Masters Logo"
        )
    }
}
```

```kotlin
@Composable
fun App() {
    Scaffold(
        topBar = { TopAppBar {
            AppTitle()
        }},
        content = {
            OffersPage()
        }
    )
}
```

## Updating the App

Now reference our new `App` composable and preview it.

