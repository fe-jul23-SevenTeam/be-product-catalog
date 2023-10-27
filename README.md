# /products - get all the products present in database

# /products/"id" - get product by id

products example:

```
    {
        "id": 1,
        "category": "phones",
        "itemId": "apple-iphone-7-32gb-black",
        "name": "Apple iPhone 7 32GB Black",
        "fullPrice": 400,
        "price": 375,
        "screen": "4.7' IPS",
        "capacity": "32GB",
        "color": "black",
        "ram": "2GB",
        "year": 2016,
        "image": "http://localhost:443/images/img/phones/apple-iphone-7/black/00.jpg"
    }
```

# /images/"path-to-image-on-be" - get the image

# /products-info/"category" - get information about device by category

Categories: phones, tablets, accessories

# /products-info/find/"id" - get a device by id

tablets example:

```
  {
    "id": "apple-ipad-pro-11-2021-256gb-spacegray",
    "namespaceId": "apple-ipad-pro-11-2021",
    "name": "Apple iPad Pro 11 (2021) 256GB Space Gray",
    "capacityAvailable": ["128GB", "256GB", "512GB", "1TB", "2TB"],
    "capacity": "256GB",
    "priceRegular": 829,
    "priceDiscount": 799,
    "colorsAvailable": ["spacegray", "silver"],
    "color": "spacegray",
    "images": [
      "img/tablets/apple-ipad-pro-11-2021/spacegray/00.webp",
      "img/tablets/apple-ipad-pro-11-2021/spacegray/01.webp",
      "img/tablets/apple-ipad-pro-11-2021/spacegray/02.webp"
    ],
    "description": [
      {
        "title": "Powerful Performance",
        "text": [
          "Experience incredible power and performance with the Apple iPad Pro 11. With the M1 chip, it delivers a new level of performance, making it faster and more efficient than ever before.",
          "Whether you're editing photos, designing artwork, or multitasking with demanding apps, the iPad Pro 11 handles it all with ease."
        ]
      },
      {
        "title": "Stunning Liquid Retina Display",
        "text": [
          "Enjoy a vibrant and immersive visual experience on the iPad Pro 11's Liquid Retina display. With ProMotion technology and True Tone, the display adapts to your environment, providing smooth scrolling, precise color accuracy, and incredible detail.",
          "From watching movies to editing videos, the iPad Pro 11's display brings your content to life with stunning clarity."
        ]
      },
      {
        "title": "Versatile Camera System",
        "text": [
          "Capture stunning photos and videos with the iPad Pro 11's advanced camera system. Featuring a 12MP Ultra Wide front camera and a 12MP Wide rear camera with LiDAR scanner, you can take high-quality shots and enjoy augmented reality experiences.",
          "Whether you're video calling, scanning documents, or recording 4K videos, the iPad Pro 11's camera system delivers exceptional performance."
        ]
      }
    ],
    "screen": "11' Liquid Retina",
    "resolution": "2388x1668",
    "processor": "Apple M1",
    "ram": "8GB",
    "camera": "12MP + 12MP",
    "zoom": "Digital zoom up to 5x",
    "cell": ["Not applicable"]
  }

```
