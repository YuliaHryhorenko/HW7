var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    // метод для обчислення суми послуг
    price() {
      let total = 0;
      // Перебираємо всі властивості об'єкта
      for (let service in this) {
        // Перевіряємо, чи значення властивості можна конвертувати у число
        if (!isNaN(parseInt(this[service]))) {
          // Додаємо ціну до загальної вартості
          total = total + parseInt(this[service]);
        }
      }
      return total;
    },
      
    // метод для знаходження мін ціни послуги
    minPrice() {
      let min = Infinity;
      // Перебираємо всі властивості об'єкта
      for (let service in this) {
        // Перевіряємо, чи значення властивості можна конвертувати у число
        if (!isNaN(parseInt(this[service]))) {
          // Оновлюємо мінімальну ціну, якщо поточна ціна менша за попередню найменшу
          min = Math.min(min, parseInt(this[service]));
        }
      }
      return min;
    },  
      
    // метод для знаходження макс ціни послуги
    maxPrice() {
      let max = -Infinity;
      // Перебираємо всі властивості об'єкта
      for (let service in this) {
        // Перевіряємо, чи значення властивості можна конвертувати у число
        if (!isNaN(parseInt(this[service]))) {
          // Оновлюємо максимальну ціну, якщо поточна ціна більша за попередню найбільшу
          max = Math.max(max, parseInt(this[service]));
        }
      }
      return max;
    }
  };
  
  
  services['Розбити скло'] = "200 грн";
  
  console.log("Загальна вартість послуг, грн: " + services.price());
  console.log("Мінімальна ціна послуги, грн: " + services.minPrice());
  console.log("Максимальна ціна послуги, грн: " + services.maxPrice());
  