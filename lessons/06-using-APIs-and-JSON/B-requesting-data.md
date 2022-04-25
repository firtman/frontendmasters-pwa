With these libraries, fetching the data and parsing it is simple. But we have to find a solution to do this within composables. A composable should not have side effects inside, or should not be responsible for doing things like fetching data, so we will change our DataManager to conform to an Android architectural pattern: ViewModel.

## Creating API.kt

```kotlin
interface CoffeeMastersApiService {
    @GET("menu.json")
    suspend fun fetchMenu(): List<Category>
}

object API {
    private val retrofit: Retrofit = Retrofit.Builder()
        .baseUrl("https://firtman.github.io/coffeemasters/api/")
        .addConverterFactory(GsonConverterFactory.create())
        .build()

    val menuService: CoffeeMastersApiService by lazy {
        retrofit.create(CoffeeMastersApiService::class.java)
    }
}
```


## Change the signature of DataManager

```kotlin
class DataManager(app: Application) : AndroidViewModel(app)
```

## Add the fetchData method

```kotlin
    private fun fetchData() {
        try {
            viewModelScope.launch {
                menu = API.menuService.fetchMenu()
            }
        } catch (ex: Exception) {
            //TODO: create other state variable for error 
        }
    }

    init {
        fetchData()
    }
```

## Create and Connect the DataManager in the App

```kotlin
// In the Activity
override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    var dataManager = ViewModelProvider(this).get(DataManager::class.java)

    setContent {
        CoffeMastersDemoTheme {
            // A surface container using the 'background' color from the theme
            Surface(
                modifier = Modifier.fillMaxSize(),
                color = MaterialTheme.colors.background
            ) {
                App(dataManager)
            }
        }
    }
}
```

Receive the Data Manager in `App`, `MenuPage` and `OrderPage`
```kotlin
fun App(dataManager: DataManager)

fun MenuPage(dataManager: DataManager)

fun OrderPage(dataManager: DataManager)
```

Pass the object from App

```kotlin
 when (selectedRoute.value) {
    Routes.MenuPage.route -> MenuPage(dataManager)
    Routes.OffersPage.route -> OffersPage()
    Routes.OrderPage.route -> OrderPage(dataManager)
    Routes.InfoPage.route -> InfoPage()
}
```