Open the file at `ui.theme/Color.kt` and add the following colors:

## Color declarations

```kotlin
// Colors are in ARGB format (A for Alpha, so FF is full opaque)
val Primary = Color(0xFF43281C)
val Secondary = Color(0xFF333D29)
val Ternary = Color(0xFF7F4F24)
val Alternative1 = Color(0xFFB08968)
val Alternative2 = Color(0xFFDDB892)
val CardBackground = Color(0xFFEDE0D4)
val SurfaceBackground = Color(0xFFEFEFEF)
```

## Use the colors

Now change the `Offer` composable white background color with the `CardBackground` color just declared, and the same for the two `Text` composables.