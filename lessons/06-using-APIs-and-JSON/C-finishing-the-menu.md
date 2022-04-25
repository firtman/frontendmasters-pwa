Now it's time to finish the menu so it can use dynamic data. We will start by changing the ProductItem

## ProductItem

```kotlin
@Composable
fun ProductItem(product: Product, onAdd: (Product)->Unit) {
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(Color.White)
    ) {

        AsyncImage(
            model = product.imageUrl,
            contentDescription = "Image for ${product.name}",
            contentScale = ContentScale.FillWidth,
            modifier = Modifier
                .fillMaxWidth()
                .height(180.dp)
        )
        Row(
            horizontalArrangement = Arrangement.SpaceBetween,
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth()
        ) {
            Column {
                Text(product.name, fontWeight = FontWeight.Bold)
                Text("$${product.price.format(2)} ea")
            }
            Button(
                colors = ButtonDefaults.buttonColors(
                    backgroundColor = Alternative1,
                    contentColor = Color.White
                ),
                onClick = {
                    onAdd(product)
                },
            ) {
                Text("Add")
            }
        }
    }
}
```

## MenuPage

```kotlin
@Composable
fun MenuPage(dataManager: DataManager) {
    CoffeMastersDemoTheme() {
        LazyColumn {
            items(dataManager.menu) {
                Text(it.name,
                    color = Primary,
                    modifier = Modifier
                        .padding(10.dp, 20.dp, 10.dp, 10.dp)
                )
                it.products.forEach {
                    Card(
                        elevation = 2.dp,
                        shape = RoundedCornerShape(12.dp),
                        modifier = Modifier
                            .background(CardBackground)
                            .padding(12.dp)
                    ) {
                        ProductItem(it) {
                            dataManager.cartAdd(it)
                        }
                    }
                }
            }
        }
    }
}
```

