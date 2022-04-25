## Assets

We will need to add a new asset in our project, so we will import our first asset in SVG. Right click on `res/drawable` folder and select *New* > *Vector Asset*. Import from the workshop assets `background_pattern.svg`. We will call it `background_pattern`.

## OfferPage

Create the OffersPage as a new Kotlin file, and use the following code as a base:

```kotlin
package com.example.coffemastersdemo

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.layout.ContentScale
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp

@Preview
@Composable
private fun OfferPreview() {
    Offer("This is a title", "Description of the offer")
}

@Composable
fun Offer(title: String, description: String = "") {
    Box(
        modifier = Modifier.padding(16.dp)
    ) {
        Image(painter = painterResource(id = R.drawable.background_pattern),
            contentDescription = "Background Pattern",
            contentScale = ContentScale.FillWidth,
            modifier = Modifier.matchParentSize()
        )
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier
                .padding(16.dp)
                .fillMaxWidth()
        ) {
            Text(
                text = title,
                style = MaterialTheme.typography.h5,
                modifier = Modifier
                    .padding(16.dp)
                    .background(Color.Cyan)
                    .padding(16.dp)
            )
            Text(
                text = description,
                style = MaterialTheme.typography.h6,
                modifier = Modifier
                    .padding(16.dp)
                    .background(Color.Cyan)
                    .padding(16.dp)
            )

        }
    }

}
```

<b>Remember to add all the imports</b>

Now create the OffersPage composable that should look like:

```kotlin
NavigationView {
    VStack {
        List {
            Offer(title: "Early Coffee", description: "10% off. Offer valid from 6am to 9am.")
            Offer(title: "Welcome Gift", description: "25% off on your first order.")
        }.listStyle(.plain)
            .listRowSeparator(.hidden)
    }.navigationTitle("Offers")
}
```

## OffersPage

Create a new composable: `OffersPage`

```kotlin
@Composable
fun OffersPage() {
    Column(modifier = Modifier
        .verticalScroll(rememberScrollState())
    ) {
        for (i in 0..5) {
            Offer(title = "Offer $i", description = "Description $i")
        }
    }
}
```

The final code with real Offers is:

```kotlin
@Composable
fun OffersPage() {
    Column(modifier = Modifier
        .verticalScroll(rememberScrollState())
    ) {
        Offer(title = "Early Coffe", description = "10% off. Offer valid from 6am to 9am.")
        Offer(title = "Welcome Gift", description = "25% off on your first order.")
    }
}
```