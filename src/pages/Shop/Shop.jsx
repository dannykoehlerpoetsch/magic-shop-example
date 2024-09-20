import React from 'react'
import styles from "./Shop.module.css"

const magicShopItems = [
  {
    id: 1,
    name: "Ebony Wand",
    description: "An elegant ebony wand with a phoenix feather core. Ideal for experienced wizards.",
    price: 120,
    stock: 5,
    src: "https://alivans.com/wp-content/uploads/2016/02/EBONY_THUMB.jpg", // Add the image source here
  },
  
  {
    id: 2,
    name: "Nimbus 2000 Flying Broom",
    description: "The Nimbus 2000 is a fast and agile broom, perfect for Quidditch players.",
    price: 250,
    stock: 3,
    src: "https://m.media-amazon.com/images/I/41QGEeIkCOL.jpg", // Add the image source here
  },
  {
    id: 3,
    name: "Healing Potion",
    description: "A powerful healing potion that can quickly mend wounds. Essential for dangerous adventures.",
    price: 40,
    stock: 15,
    src: "https://steamuserimages-a.akamaihd.net/ugc/1491208263877771882/A3CB56DF732E34AC887664B8F02A706597D9732D/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false", // Add the image source here
  },
  {
    id: 4,
    name: "Book of Spells",
    description: "An ancient book filled with powerful spells and magical formulas.",
    price: 60,
    stock: 7,
    src: "https://www.hp-lexicon.org/wp-content/uploads/2014/06/BookofSpells_cover.jpg", // Add the image source here
  },
  
  
  {
    id: 5,
    name: "Transformation Amulet",
    description: "An amulet that allows the wearer to change their appearance. Very rare and powerful.",
    price: 200,
    stock: 1,
    src: "https://www.closetchildren.com/cdn/shop/products/4_2048x2048.jpg?v=1681210958", // Add the image source here
  },
  {
    id: 6,
    name: "Dragonhide Gloves",
    description: "High-quality gloves made from dragonhide, perfect for handling dangerous creatures.",
    price: 75,
    stock: 6,
    src: "https://i.ebayimg.com/images/g/emEAAOSwQ0Zh638O/s-l1200.jpg", // Add the image source here
  },
  {
    id: 7,
    name: "Philosopher's Stone",
    description: "A legendary stone that promises infinite life and wealth. Extremely rare.",
    price: 1000,
    stock: 1,
    src: "https://noblecollection.co.uk/wp-content/uploads/2018/07/Sorcerers-Stone-Display-Stone-990x991.png", // Add the image source here
  },
 
  {
    id: 8,
    name: "Magical Candle",
    description: "A candle that never goes out and provides light even in the deepest darkness.",
    price: 20,
    stock: 20,
    src: "https://www.offthewagonshop.com/cdn/shop/products/paladone-first-logistics-home-decor-harry-potter-candle-light-with-wand-funny-gag-gifts-35807375589537.jpg?v=1667605763", // Add the image source here
  },

  {
    id: 9,
    name: "Crystal Ball",
    description: "A clear crystal ball for divination. It shows possible visions of the future.",
    price: 90,
    stock: 4,
    src: "https://cdn.selection-prestige.de/media/catalog/product/cache/image/1024x/a4e40ebdc3e371adff845072e1c73f37/I/M/IMQ323410_crystal-ball-gin-light-up-gp-07l-375-vol.jpg", // Replace with a matching crystal ball image URL
  },
];




export default function Shop() {
  return (
    <section className={styles.shop}>
      <h2 className={styles.shopHeader}>Shop</h2>
      <section className={styles.cardWrapper}>

      {magicShopItems.map((item) => (
        <div key={item.id} className={styles.shopCard}>
          <h3 className={styles.productTitle}>{item.name}</h3>
          <p className={styles.productInfo}>{item.description}</p>
          <div className={styles.productImage}>

          <img src={item.src} alt="product-image"  />
          </div>
          <div className={styles.productPrice}>

          <span>{item.price}€</span>
          <button>add to cart</button>
          </div>
        </div>
      ))}
      </section>
    </section>
  )
}
