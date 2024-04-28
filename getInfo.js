let userInfo = {
  name: "Yuliia",
  surname: "Hryhorenko",
  favMusic: "Rock",

  // додаємо метод getInfo, який виводить всі властивості
  getInfo: function () {
    // перебираємо властивості та виводимо їх
    for (let key in this) {
      if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
        console.log(`${key}: ${this[key]}`);
      }
    }
  },
};

userInfo.getInfo();
userInfo.children = false;
userInfo.getInfo();