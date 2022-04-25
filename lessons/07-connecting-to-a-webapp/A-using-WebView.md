We need to render an `AndroidView` to connect classic Android UI controls with a composable, such as Webview. 

## WebView composable

```kotlin
@Composable
fun WebView() {
    // Declare a string that contains a url
    val url = "https://firtman.github.io/coffeemasters/webapp"

    // Adding a WebView inside AndroidView
    // with layout as full screen
    AndroidView(factory = {
        WebView(it).apply {
            layoutParams = ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
            )
            webViewClient = WebViewClient()
            loadUrl(url)
        }
    }, update = {
        it.loadUrl(url)
    })
}
```

## InfoPage
Now we just use it in `InfoPage`

```kotlin
@Composable
fun InfoPage() {
    WebView()
}
```