## NavBarItem

Every tab-like item in the bottom bar navigation will need a composable receiving a page object, a selected boolean state and a modifier to pass to the root composable.

```kotlin
@Composable
fun NavBarItem(page: NavPage, selected: Boolean = false, modifier: Modifier = Modifier) {
    Column(horizontalAlignment = Alignment.CenterHorizontally,
         modifier = modifier.padding(horizontal = 12.dp)) {
        Image(
            imageVector = page.icon,
            contentDescription = page.name,
            colorFilter = ColorFilter.tint(
                if (selected) Alternative1 else OnPrimary
            ),
            modifier = Modifier
                .padding(bottom = 8.dp)
                .size(24.dp)
        )
        Text(page.name,
            fontSize = 12.sp,
            color = if (selected) Alternative1 else OnPrimary
        )
    }
}
```

## NavBar

Finally, our bottom navigation bar is ready to be created. It loops through all the routes available and render each NavBarItem listening for a click event, and calling the onChange lambda expression received.

```kotlin
@Preview(showBackground = true, widthDp = 400)
@Composable
fun NavBar(selectedRoute: String = Routes.MenuPage.route, onChange: (String)->Unit = {}) {
    Row(horizontalArrangement = Arrangement.SpaceEvenly,
        modifier = Modifier
        .background(Primary)
        .padding(12.dp)
        .fillMaxWidth()
    ) {
        for (page in Routes.pages) {
            NavBarItem(page,
                selected = selectedRoute == page.route,
                modifier = Modifier
                    .clickable {
                        onChange(page.route)
                    }
            )
        }
    }
}
```

