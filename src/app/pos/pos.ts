import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pos',
  styleUrl: './pos.css',
  templateUrl: './pos.html',
})
export class POS {
  private router = inject(Router);

  // ---------- screen state ----------
  page = 'home'; // home | catalog | reports | saved | orders
  category = 'All';
  search = '';
  sortLow = false;

  showPay = false;
  showQR = false; // false = bank list, true = QR popup
  justPaid = false; // true = show the 'Payment Successful' screen
  showSettings = false;
  method = ''; // bank id chosen in the payment popup
  receipt: any = null;

  banks = [
    {
      id: 'aba',
      name: 'ABA KHQR',
      title: 'ABA KHQR',
      short: 'ABA',
      desc: 'Scan to pay with any banking app',
      scan: 'ABA Mobile',
      qr: 'image/qr-aba.png',
    },
    {
      id: 'acleda',
      name: 'ACLEDA',
      title: 'ACLEDA KHQR',
      short: 'ACLEDA',
      desc: 'Scan to pay with ACLEDA Unity',
      scan: 'ACLEDA Unity',
      qr: 'image/qr-acleda.png',
    },
  ];

  // ---------- data ----------
  // all products (Order = how many are in the cart)
  arrList = [
    {
      id: 1,
      img: 'image/1.jpg',
      itemName: 'Margherita Classica',
      cat: 'Pizza',
      Price: 9.5,
      Dis: 10,
      Order: 0,
    },
    {
      id: 2,
      img: 'image/2.jpg',
      itemName: 'Double Pepperoni Feast',
      cat: 'Pizza',
      Price: 12.0,
      Dis: 15,
      Order: 0,
    },
    {
      id: 3,
      img: 'image/3.jpg',
      itemName: 'BBQ Smoked Chicken',
      cat: 'Pizza',
      Price: 13.5,
      Dis: 10,
      Order: 0,
    },
    {
      id: 4,
      img: 'image/4.png',
      itemName: 'Truffle Mushroom Melt',
      cat: 'Pizza',
      Price: 14.0,
      Dis: 15,
      Order: 0,
    },
    {
      id: 5,
      img: 'image/5.jpg',
      itemName: 'Four Cheese Quattro',
      cat: 'Pizza',
      Price: 11.5,
      Dis: 10,
      Order: 0,
    },
    {
      id: 6,
      img: 'image/6.jpg',
      itemName: 'Spicy Diablo Beef',
      cat: 'Pizza',
      Price: 13.0,
      Dis: 15,
      Order: 0,
    },
    {
      id: 7,
      img: 'image/7.jpg',
      itemName: 'Classic Hawaiian Ham',
      cat: 'Pizza',
      Price: 10.5,
      Dis: 10,
      Order: 0,
    },
    {
      id: 8,
      img: 'image/8.jpg',
      itemName: 'Garden Veggie Supreme',
      cat: 'Pizza',
      Price: 10.0,
      Dis: 15,
      Order: 0,
    },
    {
      id: 9,
      img: 'image/9.jpg',
      itemName: 'Garlic Seafood Medley',
      cat: 'Pizza',
      Price: 15.0,
      Dis: 10,
      Order: 0,
    },
    {
      id: 10,
      img: 'image/10.jpg',
      itemName: 'Meat Lovers Deluxe',
      cat: 'Pizza',
      Price: 14.5,
      Dis: 15,
      Order: 0,
    },
    {
    id: 11,
    img: 'image/C001.jpg',
    itemName: 'Espresso Intenso',
    cat: 'Coffee',
    Price: 15.28,
    Dis: 15,
    Order: 0,
  },
  {
    id: 12,
    img: 'image/C002.jpg',
    itemName: 'Caramel Macchiato',
    cat: 'Coffee',
    Price: 14.50,
    Dis: 10,
    Order: 0,
  },
  {
    id: 13,
    img: 'image/C003.jpg',
    itemName: 'Caffè Latte',
    cat: 'Coffee',
    Price: 13.75,
    Dis: 15,
    Order: 0,
  },
  {
    id: 14,
    img: 'image/C004.jpg',
    itemName: 'Classic Cappuccino',
    cat: 'Coffee',
    Price: 14.00,
    Dis: 10,
    Order: 0,
  },
  {
    id: 15,
    img: 'image/C005.jpg',
    itemName: 'Caffè Mocha',
    cat: 'Coffee',
    Price: 16.00,
    Dis: 15,
    Order: 0,
  },
  {
    id: 16,
    img: 'image/C006.jpg',
    itemName: 'Caffè Americano',
    cat: 'Coffee',
    Price: 12.50,
    Dis: 10,
    Order: 0,
  },
  {
    id: 17,
    img: 'image/C007.jpg',
    itemName: 'Vanilla Sweet Cream Cold Brew',
    cat: 'Coffee',
    Price: 15.50,
    Dis: 15,
    Order: 0,
  },
  {
    id: 18,
    img: 'image/C008.jpg',
    itemName: 'Flat White',
    cat: 'Coffee',
    Price: 14.25,
    Dis: 10,
    Order: 0,
  },
  {
    id: 19,
    img: 'image/C009.jpg',
    itemName: 'Spanish Latte',
    cat: 'Coffee',
    Price: 15.00,
    Dis: 15,
    Order: 0,
  },
  {
    id: 20,
    img: 'image/C010.jpg',
    itemName: 'Hazelnut Iced Coffee',
    cat: 'Coffee',
    Price: 13.50,
    Dis: 10,
    Order: 0,
  },
    {
    id: 21,
    img: 'image/I001.jpg',
    itemName: 'Madagascar Vanilla Bean',
    cat: 'Ice Cream',
    Price: 15.28,
    Dis: 15,
    Order: 0,
  },
  {
    id: 22,
    img: 'image/I002.jpg',
    itemName: 'Dark Belgian Chocolate',
    cat: 'Ice Cream',
    Price: 14.50,
    Dis: 10,
    Order: 0,
  },
  {
    id: 23,
    img: 'image/I003.jpg',
    itemName: 'Wild Strawberry Ribbon',
    cat: 'Ice Cream',
    Price: 13.75,
    Dis: 15,
    Order: 0,
  },
  {
    id: 24,
    img: 'image/I004.jpg',
    itemName: 'Mint Chocolate Chip',
    cat: 'Ice Cream',
    Price: 14.00,
    Dis: 10,
    Order: 0,
  },
  {
    id: 25,
    img: 'image/I005.jpg',
    itemName: 'Salted Caramel Crunch',
    cat: 'Ice Cream',
    Price: 16.00,
    Dis: 15,
    Order: 0,
  },
  {
    id: 26,
    img: 'image/I006.jpg',
    itemName: 'Roasted Sicilian Pistachio',
    cat: 'Ice Cream',
    Price: 16.50,
    Dis: 10,
    Order: 0,
  },
  {
    id: 27,
    img: 'image/I007.jpg',
    itemName: 'Cookies and Cream Delight',
    cat: 'Ice Cream',
    Price: 14.25,
    Dis: 15,
    Order: 0,
  },
  {
    id: 28,
    img: 'image/I008.jpg',
    itemName: 'Uji Matcha Green Tea',
    cat: 'Ice Cream',
    Price: 15.00,
    Dis: 10,
    Order: 0,
  },
  {
    id: 29,
    img: 'image/I009.jpg',
    itemName: 'Mango Passion Fruit Swirl',
    cat: 'Ice Cream',
    Price: 13.50,
    Dis: 15,
    Order: 0,
  },
  {
    id: 30,
    img: 'image/I010.jpg',
    itemName: 'Espresso Mocha Fudge',
    cat: 'Ice Cream',
    Price: 15.50,
    Dis: 10,
    Order: 0,
  },
    {
      id: 31,
      img: 'image/P001.jpg',
      itemName: 'Almond Croissant',
      cat: 'Pastry',
      Price: 15.28,
      Dis: 15,
      Order: 0,
    },
    {
      id: 32,
      img: 'image/P002.jpg',
      itemName: 'Pain au Chocolat',
      cat: 'Pastry',
      Price: 12.5,
      Dis: 10,
      Order: 0,
    },
    {
      id: 33,
      img: 'image/P003.jpg',
      itemName: 'Cinnamon Swirl Roll',
      cat: 'Pastry',
      Price: 11.0,
      Dis: 15,
      Order: 0,
    },
    {
      id: 34,
      img: 'image/P004.jpg',
      itemName: 'Blueberry Danish Cream',
      cat: 'Pastry',
      Price: 13.75,
      Dis: 10,
      Order: 0,
    },
    {
      id: 35,
      img: 'image/P005.jpg',
      itemName: 'Raspberry Mille-Feuille',
      cat: 'Pastry',
      Price: 16.5,
      Dis: 15,
      Order: 0,
    },
    {
      id: 36,
      img: 'image/P006.jpg',
      itemName: 'Vanilla Cream Éclair',
      cat: 'Pastry',
      Price: 10.9,
      Dis: 10,
      Order: 0,
    },
    {
      id: 37,
      img: 'image/P007.jpg',
      itemName: 'Apple Cinnamon Turnover',
      cat: 'Pastry',
      Price: 12.0,
      Dis: 15,
      Order: 0,
    },
    {
      id: 38,
      img: 'image/P008.jpg',
      itemName: 'Caramel Pecan Tart',
      cat: 'Pastry',
      Price: 14.25,
      Dis: 10,
      Order: 0,
    },
    {
      id: 39,
      img: 'image/P009.jpg',
      itemName: 'Strawberry Choux Craquelin',
      cat: 'Pastry',
      Price: 13.5,
      Dis: 15,
      Order: 0,
    },
    {
      id: 40,
      img: 'image/P010.jpg',
      itemName: 'Pistachio Cannoli',
      cat: 'Pastry',
      Price: 11.75,
      Dis: 10,
      Order: 0,
    },
  ];

  OrderList: any[] = []; // current cart
  PaidList: any[] = []; // paid orders
  SavedList: any[] = []; // saved orders
  taxRate = 10;

  // ---------- products ----------
  getList() {
    let list = this.arrList.filter(
      (p) =>
        (this.category === 'All' || p.cat === this.category) &&
        p.itemName.toLowerCase().includes(this.search.toLowerCase()),
    );
    if (this.sortLow) {
      list = [...list].sort((a, b) => this.getPrice(a) - this.getPrice(b));
    }
    return list;
  }

  countOf(cat: string) {
    return this.arrList.filter((p) => p.cat === cat).length;
  }

  pickCategory(cat: string) {
    this.category = cat;
    this.page = 'home';
  }

  money(n: number) {
    return '$' + n.toFixed(2);
  }

  // ---------- cart ----------
  addOrder(pro: any) {
    pro.Order += 1;
    if (!this.OrderList.includes(pro)) {
      this.OrderList.push(pro);
    }
  }

  removeOrder(pro: any) {
    if (pro.Order > 0) {
      pro.Order -= 1;
    }
    if (pro.Order === 0) {
      this.removeFromOrder(pro.id);
    }
  }

  removeFromOrder(productId: number) {
    const item = this.arrList.find((x) => x.id === productId);
    if (item) {
      item.Order = 0;
    }
    const index = this.OrderList.findIndex((x) => x.id === productId);
    if (index !== -1) {
      this.OrderList.splice(index, 1);
    }
  }

  clearOrder() {
    for (const item of this.OrderList) {
      item.Order = 0;
    }
    this.OrderList.length = 0;
  }

  // ---------- totals ----------
  round(n: number) {
    return Math.round(n * 100) / 100;
  }

  getPrice(item: any) {
    return this.round(item.Price * (1 - item.Dis / 100));
  }

  getCount() {
    let n = 0;
    for (const item of this.OrderList) n += item.Order;
    return n;
  }

  getSubtotal() {
    let sum = 0;
    for (const item of this.OrderList) sum += item.Price * item.Order;
    return this.round(sum);
  }

  getDiscount() {
    let sum = 0;
    for (const item of this.OrderList) sum += (item.Price - this.getPrice(item)) * item.Order;
    return this.round(sum);
  }

  getTax() {
    return this.round(((this.getSubtotal() - this.getDiscount()) * this.taxRate) / 100);
  }

  getTotal() {
    return this.round(this.getSubtotal() - this.getDiscount() + this.getTax());
  }

  getSales() {
    let sum = 0;
    for (const o of this.PaidList) sum += o.total;
    return this.round(sum);
  }

  // ---------- saved orders ----------
  saveOrder() {
    if (this.OrderList.length === 0) return;
    this.SavedList.unshift({
      date: new Date().toLocaleString(),
      items: this.OrderList.map((i) => ({ id: i.id, qty: i.Order })),
    });
    this.clearOrder();
  }

  resumeOrder(index: number) {
    this.clearOrder();
    for (const it of this.SavedList[index].items) {
      const pro = this.arrList.find((x) => x.id === it.id);
      if (pro) {
        pro.Order = it.qty;
        this.OrderList.push(pro);
      }
    }
    this.SavedList.splice(index, 1);
  }

  deleteSaved(index: number) {
    this.SavedList.splice(index, 1);
  }

  // ---------- payment ----------
  openPay() {
    if (this.OrderList.length === 0) return;
    this.method = ''; // nothing chosen yet
    this.showQR = false;
    this.justPaid = false;
    this.receipt = null;
    this.showPay = true;
  }

  selectBank(bankId: string) {
    this.method = bankId;
    this.showQR = true;
  }

  // Back (on the QR popup) -> return to the bank list
  backToBank() {
    this.showQR = false;
  }

  getBank() {
    return this.banks.find((b) => b.id === this.method);
  }

  canPay() {
    return this.OrderList.length > 0 && this.method !== '';
  }

  confirmPay() {
    if (!this.canPay()) return;

    const bank = this.getBank();
    const total = this.getTotal();
    const order = {
      id: 1001 + this.PaidList.length,
      date: new Date().toLocaleString(),
      items: this.OrderList.map((i) => ({
        name: i.itemName,
        qty: i.Order,
        price: this.getPrice(i),
      })),
      subtotal: this.getSubtotal(),
      discount: this.getDiscount(),
      tax: this.getTax(),
      total: total,
      method: bank ? bank.name : this.method,
    };

    this.PaidList.unshift(order);
    this.clearOrder(); // empty the cart (and save)
    this.receipt = order; // show the success screen
    this.justPaid = true;
  }

  closePay() {
    this.showPay = false;
    this.showQR = false;
    this.justPaid = false;
    this.receipt = null;
  }

  viewReceipt(order: any) {
    this.receipt = order;
    this.justPaid = false;
    this.showPay = true;
  }

  printReceipt() {
    window.print();
  }

  // ---------- other ----------
  setTax(value: string) {
    this.taxRate = Number(value) || 0;
  }

  signOut() {
    this.router.navigate(['/login']);
  }
}
