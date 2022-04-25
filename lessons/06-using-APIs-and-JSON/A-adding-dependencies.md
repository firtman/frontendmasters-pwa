It's time to call our web service using HTTP(s). Unfortunately, Android SDK doesn't include an easy way to fetch HTTP content, so we will need to use libraries.

We will use RetroFit, OkHttp and JsonConverter. Also, we will use AsyncImage from Coil to download images from the web. To add dependencies, open `build.grade (module)` in Android Studio and within `dependencies`, add the following lines

```
// Retrofit
implementation 'com.squareup.retrofit2:retrofit:2.7.1'
// OkHttp
implementation("com.squareup.okhttp3:okhttp:5.0.0-alpha.2")
// JSON Converter
implementation 'com.squareup.retrofit2:converter-gson:2.7.1'

// AsyncImage
implementation("io.coil-kt:coil-compose:2.0.0-rc03")
```

In the top of this file there is a warning line asking you to sync the project. Do that, so these libraries will be ready to use.