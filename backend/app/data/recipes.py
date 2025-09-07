from app.models.dinner import Dish, Category

# Turkish home meals - simple, everyday dishes
TURKISH_MEALS = [
    # Main Courses (Ana Yemekler)
    Dish(
        id=1,
        name="Kuru Fasulye",
        category=Category.MAIN_COURSE,
        description="Classic Turkish white bean stew",
        cooking_time="45 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=2,
        name="Nohut",
        category=Category.MAIN_COURSE,
        description="Chickpea stew with meat",
        cooking_time="50 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=3,
        name="Taze Fasulye",
        category=Category.MAIN_COURSE,
        description="Green bean stew with tomatoes",
        cooking_time="40 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=4,
        name="Patates Yemeği",
        category=Category.MAIN_COURSE,
        description="Potato stew with meat",
        cooking_time="35 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=5,
        name="Mercimek Köftesi",
        category=Category.MAIN_COURSE,
        description="Lentil balls with bulgur",
        cooking_time="30 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
    Dish(
        id=6,
        name="Karnıyarık",
        category=Category.MAIN_COURSE,
        description="Stuffed eggplant with meat",
        cooking_time="45 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
    Dish(
        id=7,
        name="İmam Bayıldı",
        category=Category.MAIN_COURSE,
        description="Stuffed eggplant with vegetables",
        cooking_time="50 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
    Dish(
        id=8,
        name="Etli Biber Dolması",
        category=Category.MAIN_COURSE,
        description="Stuffed peppers with meat",
        cooking_time="40 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
    Dish(
        id=9,
        name="Köfte",
        category=Category.MAIN_COURSE,
        description="Turkish meatballs",
        cooking_time="30 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=10,
        name="Tavuk Sote",
        category=Category.MAIN_COURSE,
        description="Chicken sauté with vegetables",
        cooking_time="25 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=11,
        name="Et Sote",
        category=Category.MAIN_COURSE,
        description="Beef sauté with vegetables",
        cooking_time="30 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=12,
        name="Kıymalı Makarna",
        category=Category.MAIN_COURSE,
        description="Pasta with ground meat",
        cooking_time="20 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=13,
        name="Mantı",
        category=Category.MAIN_COURSE,
        description="Turkish dumplings with yogurt",
        cooking_time="60 minutes",
        difficulty="Hard",
        cuisine_type="Turkish"
    ),
    Dish(
        id=14,
        name="Lahmacun",
        category=Category.MAIN_COURSE,
        description="Turkish flatbread with meat",
        cooking_time="30 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
    Dish(
        id=15,
        name="Pide",
        category=Category.MAIN_COURSE,
        description="Turkish flatbread with various toppings",
        cooking_time="25 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
    
    # Soups (Çorbalar)
    Dish(
        id=16,
        name="Mercimek Çorbası",
        category=Category.SOUP,
        description="Red lentil soup",
        cooking_time="25 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=17,
        name="Yayla Çorbası",
        category=Category.SOUP,
        description="Yogurt soup with rice",
        cooking_time="20 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=18,
        name="Tavuk Çorbası",
        category=Category.SOUP,
        description="Chicken soup with noodles",
        cooking_time="30 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=19,
        name="Ezogelin Çorbası",
        category=Category.SOUP,
        description="Red lentil and bulgur soup",
        cooking_time="25 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=20,
        name="İşkembe Çorbası",
        category=Category.SOUP,
        description="Tripe soup",
        cooking_time="60 minutes",
        difficulty="Hard",
        cuisine_type="Turkish"
    ),
    
    # Rice & Pilaf (Pilavlar) - moved to side dishes
    Dish(
        id=21,
        name="Pilav",
        category=Category.SIDE_DISH,
        description="Plain rice pilaf",
        cooking_time="20 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=22,
        name="Bulgur Pilavı",
        category=Category.SIDE_DISH,
        description="Bulgur pilaf",
        cooking_time="25 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=23,
        name="Etli Pilav",
        category=Category.SIDE_DISH,
        description="Rice pilaf with meat",
        cooking_time="30 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    
    # Side Dishes (Yan Yemekler)
    Dish(
        id=24,
        name="Patates Kızartması",
        category=Category.SIDE_DISH,
        description="French fries",
        cooking_time="15 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=25,
        name="Patates Salatası",
        category=Category.SIDE_DISH,
        description="Potato salad",
        cooking_time="20 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=26,
        name="Pilaki",
        category=Category.SIDE_DISH,
        description="White bean salad",
        cooking_time="30 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    
    # Salads (Salatalar)
    Dish(
        id=27,
        name="Çoban Salatası",
        category=Category.SALAD,
        description="Shepherd's salad with tomatoes and cucumbers",
        cooking_time="10 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=28,
        name="Gavurdağı Salatası",
        category=Category.SALAD,
        description="Tomato and walnut salad",
        cooking_time="15 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=29,
        name="Roka Salatası",
        category=Category.SALAD,
        description="Arugula salad",
        cooking_time="10 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    
    # Desserts (Tatlılar)
    Dish(
        id=30,
        name="Sütlaç",
        category=Category.DESSERT,
        description="Rice pudding",
        cooking_time="30 minutes",
        difficulty="Easy",
        cuisine_type="Turkish"
    ),
    Dish(
        id=31,
        name="Aşure",
        category=Category.DESSERT,
        description="Noah's pudding with grains and fruits",
        cooking_time="60 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
    Dish(
        id=32,
        name="Baklava",
        category=Category.DESSERT,
        description="Layered pastry with nuts",
        cooking_time="90 minutes",
        difficulty="Hard",
        cuisine_type="Turkish"
    ),
    Dish(
        id=33,
        name="Künefe",
        category=Category.DESSERT,
        description="Shredded pastry with cheese",
        cooking_time="45 minutes",
        difficulty="Hard",
        cuisine_type="Turkish"
    ),
    Dish(
        id=34,
        name="Revani",
        category=Category.DESSERT,
        description="Semolina cake with syrup",
        cooking_time="40 minutes",
        difficulty="Medium",
        cuisine_type="Turkish"
    ),
]

