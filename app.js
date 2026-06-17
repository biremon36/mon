// Initialize default menu seed data
const DEFAULT_MENU = [
  {
    id: "pho_mien",
    name: "Phở - Miến",
    items: [
      { id: "pm_thapcam", name: "Thập Cẩm / Mix", prices: { thuong: 100, lon: 130 } },
      { id: "pm_ngocke", name: "Ngọc Kê", prices: { thuong: 100, lon: 130 } },
      { id: "pm_duikhongda", name: "Đùi Không Da", prices: { thuong: 90, lon: 110 } },
      { id: "pm_dui", name: "Đùi", prices: { thuong: 80, lon: 100 } },
      { id: "pm_trungnon", name: "Trứng Non", prices: { thuong: 80, lon: 100 } },
      { id: "pm_canh", name: "Cánh", prices: { thuong: 70, lon: 90 } },
      { id: "pm_lung", name: "Lưng", prices: { thuong: 70, lon: 90 } },
      { id: "pm_luon", name: "Lườn", prices: { thuong: 60, lon: 80 } },
      { id: "pm_long", name: "Lòng", prices: { thuong: 60, lon: 80 } }
    ]
  },
  {
    id: "xoi_xeo",
    name: "Xôi Xéo",
    items: [
      { id: "xx_dacbiet", name: "Xôi Đặc Biệt", price: 130 },
      { id: "xx_gamixcha", name: "Xôi Gà Mix + Chả", price: 110 },
      { id: "xx_mix", name: "Xôi Mix", price: 100 },
      { id: "xx_duikhongda", name: "Xôi Đùi Không Da", price: 90 },
      { id: "xx_dui", name: "Xôi Đùi", price: 80 },
      { id: "xx_chahanoi", name: "Xôi Chả Hà Nội", price: 80 },
      { id: "xx_canh", name: "Xôi Cánh", price: 70 },
      { id: "xx_lung", name: "Xôi Lưng", price: 70 },
      { id: "xx_luon", name: "Xôi Lườn", price: 60 },
      { id: "xx_khongthit", name: "Xôi (Không Thịt)", price: 40 }
    ]
  },
  {
    id: "do_an_them",
    name: "Đồ Ăn Thêm",
    items: [
      { id: "at_ngocke", name: "Chén Ngọc Kê", price: 80 },
      { id: "at_duikhongda", name: "Chén Đùi Không Da", price: 70 },
      { id: "at_dui", name: "Chén Đùi", price: 60 },
      { id: "at_trungnon", name: "Chén Trứng Non", price: 60 },
      { id: "at_canh", name: "Chén Cánh", price: 50 },
      { id: "at_lung", name: "Chén Lưng", price: 50 },
      { id: "at_luon", name: "Chén Lườn", price: 40 },
      { id: "at_long", name: "Chén Lòng", price: 40 },
      { id: "at_trungchan1", name: "Chén Trứng Chần 1 Quả", price: 10 },
      { id: "at_trungchan2", name: "Chén Trứng Chần 2 Quả", price: 15 },
      { id: "at_changa", name: "Chân Gà", price: 10 },
      { id: "at_quay", name: "Quẩy", price: 5 }
    ]
  },
  {
    id: "do_uong",
    name: "Đồ Uống",
    items: [
      { id: "du_suoi", name: "Nước Suối", price: 10 },
      { id: "du_coca", name: "Coca / Pepsi", price: 20 },
      { id: "du_mosau", name: "Nước Mơ/Sấu", price: 30 },
      { id: "du_atisodautam", name: "Nước Atiso/Dâu Tằm", price: 30 },
      { id: "du_ken_tiger", name: "Bia Heineken / Tiger", price: 30 }
    ]
  }
];

// Initialize default configurations for fast tapping
const DEFAULT_CONFIGS = {
  quickTables: ["Bàn 1", "Bàn 2", "Bàn 3", "Bàn 5", "Bàn 10"],
  zones: ["Khu Trong Nhà", "Khu Ngoài Sân", "Khu Tầng 2"],
  serviceTypes: ["Tại bàn", "Mang về"],
  onions: ["Có hành", "Không hành"],
  phoPopularOptions: ["Nước béo", "Nước trong", "Ít bánh phở", "Quẩy giòn", "Nhiều hành", "Ít hành"],
  ricePopularOptions: ["Nhiều hành phi", "Ít mỡ hành", "Nhiều đỗ", "Ít đỗ", "Thêm pate", "Không pate"],
  paymentTypes: ["Tiền mặt", "Chuyển khoản"],
  kitchenNotes: ["Làm trước", "Không cay", "Cay nhiều", "Để riêng nước dùng", "Ít mì chính"],
  orderPriorities: ["Bình thường", "Gấp!", "Rất gấp!!!"],
  itemPriorities: ["Bình thường", "Làm trước", "Làm sau"]
};

// State Variables
let menu = [];
let configs = {};
let history = [];

let currentTableState = {
  tableNum: "",
  desc: "",
  zone: "",
  service: "",
  priority: "Bình thường",
  payment: "Tiền mặt",
  kitchenNotes: []
};

let cart = [];
let activeItemForCustomization = null;
let currentCustomOnion = "Có hành";
let currentCustomPopular = [];
let currentCustomPriority = "Bình thường";

// Retrieve references to DOM elements
const el = {
  tableScreen: document.getElementById("tableScreen"),
  orderScreen: document.getElementById("orderScreen"),
  
  tableInput: document.getElementById("tableInput"),
  customerDescInput: document.getElementById("customerDescInput"),
  quickTableChips: document.getElementById("quickTableChips"),
  zoneChips: document.getElementById("zoneChips"),
  serviceChips: document.getElementById("serviceChips"),
  startOrderBtn: document.getElementById("startOrderBtn"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),
  ordersHistoryStart: document.getElementById("ordersHistoryStart"),
  ordersHistoryMain: document.getElementById("ordersHistoryMain"),
  
  currentTableLabel: document.getElementById("currentTableLabel"),
  changeTableBtn: document.getElementById("changeTableBtn"),
  customizeBtn: document.getElementById("customizeBtn"),
  cartToggleBtn: document.getElementById("cartToggleBtn"),
  cartCount: document.getElementById("cartCount"),
  
  categoryTabs: document.getElementById("categoryTabs"),
  menuList: document.getElementById("menuList"),
  
  customItemName: document.getElementById("customItemName"),
  customItemPrice: document.getElementById("customItemPrice"),
  customItemNote: document.getElementById("customItemNote"),
  addCustomItemBtn: document.getElementById("addCustomItemBtn"),
  
  cartPanel: document.getElementById("cartPanel"),
  cartTableTitle: document.getElementById("cartTableTitle"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  serviceLabel: document.getElementById("serviceLabel"),
  zoneLabel: document.getElementById("zoneLabel"),
  priorityLabel: document.getElementById("priorityLabel"),
  cartItems: document.getElementById("cartItems"),
  orderRequestInput: document.getElementById("orderRequestInput"),
  cartTotal: document.getElementById("cartTotal"),
  clearCartBtn: document.getElementById("clearCartBtn"),
  sendOrderBtn: document.getElementById("sendOrderBtn"),
  
  itemDialog: document.getElementById("itemDialog"),
  modalItemName: document.getElementById("modalItemName"),
  modalItemPrice: document.getElementById("modalItemPrice"),
  baseTypeBlock: document.getElementById("baseTypeBlock"),
  baseTypeOptions: document.getElementById("baseTypeOptions"),
  onionOptions: document.getElementById("onionOptions"),
  popularOptions: document.getElementById("popularOptions"),
  popularCustomInput: document.getElementById("popularCustomInput"),
  addPopularOptionBtn: document.getElementById("addPopularOptionBtn"),
  itemPriorityOptions: document.getElementById("itemPriorityOptions"),
  confirmAddBtn: document.getElementById("confirmAddBtn"),
  
  settingsDialog: document.getElementById("settingsDialog"),
  settingsTableInput: document.getElementById("settingsTableInput"),
  settingsCustomerDescInput: document.getElementById("settingsCustomerDescInput"),
  quickTableEditor: document.getElementById("quickTableEditor"),
  zoneEditor: document.getElementById("zoneEditor"),
  settingsServiceChips: document.getElementById("settingsServiceChips"),
  serviceEditor: document.getElementById("serviceEditor"),
  onionEditor: document.getElementById("onionEditor"),
  popularEditor: document.getElementById("popularEditor"),
  ricePopularEditor: document.getElementById("ricePopularEditor"),
  paymentChips: document.getElementById("paymentChips"),
  paymentEditor: document.getElementById("paymentEditor"),
  kitchenNoteChips: document.getElementById("kitchenNoteChips"),
  kitchenNoteEditor: document.getElementById("kitchenNoteEditor"),
  priorityChips: document.getElementById("priorityChips"),
  orderPriorityEditor: document.getElementById("orderPriorityEditor"),
  itemPriorityEditor: document.getElementById("itemPriorityEditor"),
  newMenuCategory: document.getElementById("newMenuCategory"),
  newMenuName: document.getElementById("newMenuName"),
  newMenuPrice: document.getElementById("newMenuPrice"),
  newMenuLargePrice: document.getElementById("newMenuLargePrice"),
  addMenuItemBtn: document.getElementById("addMenuItemBtn"),
  saveSettingsBtn: document.getElementById("saveSettingsBtn"),
  
  successDialog: document.getElementById("successDialog"),
  successSummary: document.getElementById("successSummary"),
  newOrderBtn: document.getElementById("newOrderBtn")
};

// Create a mobile backdrop element for the cart slide-over overlay
let cartBackdrop = document.createElement("div");
cartBackdrop.className = "cart-backdrop";
document.body.appendChild(cartBackdrop);

// Click backdrop to close mobile cart
cartBackdrop.addEventListener("click", () => {
  el.cartPanel.classList.remove("active");
  cartBackdrop.classList.remove("active");
});

// Load App Data from localStorage
function initData() {
  // Load Menu
  const storedMenu = localStorage.getItem("ORDER_APP_MENU");
  if (storedMenu) {
    menu = JSON.parse(storedMenu);
  } else {
    menu = JSON.parse(JSON.stringify(DEFAULT_MENU));
    localStorage.setItem("ORDER_APP_MENU", JSON.stringify(menu));
  }

  // Load Configs
  const storedConfigs = localStorage.getItem("ORDER_APP_CONFIGS");
  if (storedConfigs) {
    configs = JSON.parse(storedConfigs);
    // Ensure all default keys exist
    for (const key in DEFAULT_CONFIGS) {
      if (!configs[key]) configs[key] = [...DEFAULT_CONFIGS[key]];
    }
  } else {
    configs = JSON.parse(JSON.stringify(DEFAULT_CONFIGS));
    localStorage.setItem("ORDER_APP_CONFIGS", JSON.stringify(configs));
  }

  // Load History
  const storedHistory = localStorage.getItem("ORDER_APP_HISTORY");
  if (storedHistory) {
    history = JSON.parse(storedHistory);
  } else {
    history = [];
    localStorage.setItem("ORDER_APP_HISTORY", JSON.stringify(history));
  }

  // Load last session Table details if any
  const storedSession = localStorage.getItem("ORDER_APP_CURRENT_SESSION");
  if (storedSession) {
    currentTableState = JSON.parse(storedSession);
  } else {
    resetTableState();
  }
}

function saveMenu() {
  localStorage.setItem("ORDER_APP_MENU", JSON.stringify(menu));
}

function saveConfigs() {
  localStorage.setItem("ORDER_APP_CONFIGS", JSON.stringify(configs));
}

function saveHistory() {
  localStorage.setItem("ORDER_APP_HISTORY", JSON.stringify(history));
}

function saveSession() {
  localStorage.setItem("ORDER_APP_CURRENT_SESSION", JSON.stringify(currentTableState));
}

function resetTableState() {
  currentTableState = {
    tableNum: "",
    desc: "",
    zone: configs.zones && configs.zones[0] ? configs.zones[0] : "Khu A",
    service: configs.serviceTypes && configs.serviceTypes[0] ? configs.serviceTypes[0] : "Tại bàn",
    priority: "Bình thường",
    payment: "Tiền mặt",
    kitchenNotes: []
  };
  saveSession();
}

/* RENDERING MODULES */

// Helper: build a selectable+deletable chip-wrapper
function makeEditableChip(label, isActive, onSelect, onDelete) {
  const wrapper = document.createElement("div");
  wrapper.className = "chip-wrapper" + (isActive ? " active" : "");

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "chip-btn";
  btn.textContent = label;
  btn.addEventListener("click", onSelect);

  const del = document.createElement("button");
  del.type = "button";
  del.className = "chip-delete";
  del.textContent = "×";
  del.title = "Xóa";
  del.addEventListener("click", (e) => { e.stopPropagation(); onDelete(); });

  wrapper.appendChild(btn);
  wrapper.appendChild(del);
  return wrapper;
}

// Render Start Screen Chips
function renderStartScreenChips() {
  // Quick Table Chips — with select + delete
  el.quickTableChips.innerHTML = "";
  configs.quickTables.forEach((t, idx) => {
    const isActive = currentTableState.tableNum === t;
    const wrapper = makeEditableChip(
      t,
      isActive,
      () => {
        el.tableInput.value = t;
        currentTableState.tableNum = t;
        saveSession();
        el.quickTableChips.querySelectorAll(".chip-wrapper").forEach(c => c.classList.remove("active"));
        wrapper.classList.add("active");
      },
      () => {
        configs.quickTables.splice(idx, 1);
        saveConfigs();
        renderStartScreenChips();
      }
    );
    el.quickTableChips.appendChild(wrapper);
  });

  // Wire up Add-quick-table input + button (once per render)
  const addInput = document.getElementById("quickTableAddInput");
  const addBtn   = document.getElementById("quickTableAddBtn");
  if (addInput && addBtn) {
    // Remove old listeners cleanly by replacing nodes
    const newAddBtn = addBtn.cloneNode(true);
    addBtn.parentNode.replaceChild(newAddBtn, addBtn);
    const newAddInput = addInput.cloneNode(true);
    addInput.parentNode.replaceChild(newAddInput, addInput);

    const doAdd = () => {
      const val = newAddInput.value.trim();
      if (val && !configs.quickTables.includes(val)) {
        configs.quickTables.push(val);
        saveConfigs();
        renderStartScreenChips();
      }
      newAddInput.value = "";
    };
    newAddBtn.addEventListener("click", doAdd);
    newAddInput.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); doAdd(); } });
  }

  // Zone Chips
  el.zoneChips.innerHTML = "";
  configs.zones.forEach(z => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (currentTableState.zone === z ? " active" : "");
    chip.textContent = z;
    chip.addEventListener("click", () => {
      currentTableState.zone = z;
      saveSession();
      el.zoneChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
    el.zoneChips.appendChild(chip);
  });

  // Service Chips
  el.serviceChips.innerHTML = "";
  configs.serviceTypes.forEach(s => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (currentTableState.service === s ? " active" : "");
    chip.textContent = s;
    chip.addEventListener("click", () => {
      currentTableState.service = s;
      saveSession();
      el.serviceChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
    el.serviceChips.appendChild(chip);
  });
}

// Render Menu Section
function renderMenu() {
  el.menuList.innerHTML = "";
  
  menu.forEach(cat => {
    if (cat.items.length === 0) return; // Skip empty categories
    
    const section = document.createElement("section");
    section.className = "category-section";
    section.id = `cat-${cat.id}`;
    
    const title = document.createElement("h2");
    title.className = "category-title";
    title.textContent = cat.name;
    section.appendChild(title);
    
    const grid = document.createElement("div");
    grid.className = "items-grid";
    
    cat.items.forEach(item => {
      const card = document.createElement("div");
      card.className = "menu-card";
      
      const info = document.createElement("div");
      info.className = "item-info";
      
      const name = document.createElement("div");
      name.className = "item-title";
      name.textContent = item.name;
      info.appendChild(name);
      card.appendChild(info);
      
      const actions = document.createElement("div");
      
      // Dual size selector for Phở - Miến
      if (cat.id === "pho_mien" && item.prices) {
        actions.className = "item-actions-dual";
        
        const btnThuong = document.createElement("button");
        btnThuong.type = "button";
        btnThuong.className = "size-button";
        btnThuong.innerHTML = `
          <span>Thường</span>
          <span class="price">${item.prices.thuong}k</span>
        `;
        btnThuong.addEventListener("click", () => {
          openCustomizationPopup(item, "pho_mien", "Thường");
        });
        
        const btnLon = document.createElement("button");
        btnLon.type = "button";
        btnLon.className = "size-button";
        btnLon.innerHTML = `
          <span>Lớn</span>
          <span class="price">${item.prices.lon}k</span>
        `;
        btnLon.addEventListener("click", () => {
          openCustomizationPopup(item, "pho_mien", "Lớn");
        });
        
        actions.appendChild(btnThuong);
        actions.appendChild(btnLon);
      } else {
        // Single price button for Xôi, Đồ ăn thêm, Đồ uống
        actions.className = "item-actions-single";
        
        const btnAdd = document.createElement("button");
        btnAdd.type = "button";
        btnAdd.className = "add-button";
        btnAdd.innerHTML = `
          <span>+ Thêm</span>
          <span class="price">${item.price}k</span>
        `;
        btnAdd.addEventListener("click", () => {
          if (cat.id === "xoi_xeo") {
            // Xôi opens custom dialog
            openCustomizationPopup(item, "xoi_xeo", "Thường");
          } else {
            // Drinks and Extras are added directly to the cart
            addToCartDirectly(item, cat.id);
          }
        });
        actions.appendChild(btnAdd);
      }
      
      card.appendChild(actions);
      grid.appendChild(card);
    });
    
    section.appendChild(grid);
    el.menuList.appendChild(section);
  });
}

// Render Top Category Tabs Scroll bar
function renderCategoryTabs() {
  el.categoryTabs.innerHTML = "";
  menu.forEach((cat, index) => {
    if (cat.items.length === 0) return;
    
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "category-tab-btn" + (index === 0 ? " active" : "");
    btn.textContent = cat.name;
    btn.addEventListener("click", () => {
      el.categoryTabs.querySelectorAll(".category-tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      const target = document.getElementById(`cat-${cat.id}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
    el.categoryTabs.appendChild(btn);
  });
}

// Open Customization Popup for Pho/Mien/Xoi
function openCustomizationPopup(item, categoryId, size) {
  activeItemForCustomization = { item, categoryId, size };
  
  // Set dialog text headers
  el.modalItemName.textContent = `${item.name} (${size})`;
  const itemPrice = categoryId === "pho_mien" ? item.prices[size === "Lớn" ? "lon" : "thuong"] : item.price;
  el.modalItemPrice.textContent = `${itemPrice}k`;
  
  // Base Type selection (Only applicable for Pho - Mien)
  let activeBaseType = "Phở";
  if (categoryId === "pho_mien") {
    el.baseTypeBlock.classList.remove("hidden");
    el.baseTypeOptions.innerHTML = "";
    
    const types = ["Phở", "Miến"];
    types.forEach(t => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = (t === activeBaseType) ? "active" : "";
      btn.textContent = t;
      btn.addEventListener("click", () => {
        activeBaseType = t;
        el.baseTypeOptions.querySelectorAll("button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
      el.baseTypeOptions.appendChild(btn);
    });
  } else {
    el.baseTypeBlock.classList.add("hidden");
  }

  // Onion Selection
  currentCustomOnion = categoryId === "xoi_xeo" ? "Có hành phi" : "Có hành";
  el.onionOptions.innerHTML = "";
  const onionsList = categoryId === "xoi_xeo" 
    ? ["Có hành phi", "Không hành phi"] 
    : ["Có hành", "Không hành"];
    
  onionsList.forEach(on => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = (on === currentCustomOnion) ? "active" : "";
    btn.textContent = on;
    btn.addEventListener("click", () => {
      currentCustomOnion = on;
      el.onionOptions.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    el.onionOptions.appendChild(btn);
  });

  // Popular Requests Multi-select Chips
  currentCustomPopular = [];
  renderPopularChipsInModal();
  
  // Item Priority Selection
  currentCustomPriority = "Bình thường";
  el.itemPriorityOptions.innerHTML = "";
  configs.itemPriorities.forEach(prio => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = (prio === currentCustomPriority) ? "active" : "";
    btn.textContent = prio;
    btn.addEventListener("click", () => {
      currentCustomPriority = prio;
      el.itemPriorityOptions.querySelectorAll("button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    el.itemPriorityOptions.appendChild(btn);
  });
  
  // Clear the inline add input field
  el.popularCustomInput.value = "";
  
  // Open dialog modal HTML5 way
  el.itemDialog.showModal();
}

// Render popular requests inside custom modal dialog — with toggle + delete
function renderPopularChipsInModal() {
  el.popularOptions.innerHTML = "";
  const categoryId = activeItemForCustomization.categoryId;
  const sourceList = categoryId === "xoi_xeo" ? configs.ricePopularOptions : configs.phoPopularOptions;

  sourceList.forEach((opt, idx) => {
    const isActive = currentCustomPopular.includes(opt);
    const wrapper = makeEditableChip(
      opt,
      isActive,
      () => {
        if (currentCustomPopular.includes(opt)) {
          currentCustomPopular = currentCustomPopular.filter(x => x !== opt);
          wrapper.classList.remove("active");
        } else {
          currentCustomPopular.push(opt);
          wrapper.classList.add("active");
        }
      },
      () => {
        // Remove from saved config
        if (categoryId === "xoi_xeo") {
          configs.ricePopularOptions.splice(idx, 1);
        } else {
          configs.phoPopularOptions.splice(idx, 1);
        }
        // Also remove from current selection if it was selected
        currentCustomPopular = currentCustomPopular.filter(x => x !== opt);
        saveConfigs();
        renderPopularChipsInModal();
      }
    );
    el.popularOptions.appendChild(wrapper);
  });
}

// Add directly to cart (for drinks and extra items that don't need popups)
function addToCartDirectly(item, categoryId) {
  const cartItem = {
    id: item.id + "_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    itemId: item.id,
    name: item.name,
    size: "Thường",
    price: item.price,
    details: "",
    priority: "Bình thường",
    quantity: 1
  };
  
  // Check if identical item already exists in cart to increment count
  const existing = cart.find(x => x.itemId === cartItem.itemId && x.size === cartItem.size && x.details === cartItem.details && x.priority === cartItem.priority);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push(cartItem);
  }
  
  updateCart();
}

// Confirm Add Custom item from dialog
el.confirmAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!activeItemForCustomization) return;
  
  const { item, categoryId, size } = activeItemForCustomization;
  const isPho = categoryId === "pho_mien";
  
  // Get base type (Phở / Miến)
  let baseTypeLabel = "";
  if (isPho) {
    const activeBtn = el.baseTypeOptions.querySelector("button.active");
    baseTypeLabel = activeBtn ? activeBtn.textContent : "Phở";
  }
  
  // Create detail description string
  let detailSegments = [];
  if (isPho) {
    detailSegments.push(baseTypeLabel);
  }
  detailSegments.push(currentCustomOnion);
  
  if (currentCustomPopular.length > 0) {
    detailSegments.push(currentCustomPopular.join(", "));
  }
  
  const detailStr = detailSegments.join(" | ");
  const itemPrice = categoryId === "pho_mien" ? item.prices[size === "Lớn" ? "lon" : "thuong"] : item.price;
  
  const cartItem = {
    id: item.id + "_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    itemId: item.id,
    name: item.name,
    size: size,
    price: itemPrice,
    details: detailStr,
    priority: currentCustomPriority,
    quantity: 1
  };
  
  // Match duplicate item configs
  const existing = cart.find(x => x.itemId === cartItem.itemId && x.size === cartItem.size && x.details === cartItem.details && x.priority === cartItem.priority);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push(cartItem);
  }
  
  el.itemDialog.close();
  activeItemForCustomization = null;
  updateCart();
});

// Inline Save Popular option button click inside Custom Popup
el.addPopularOptionBtn.addEventListener("click", () => {
  const val = el.popularCustomInput.value.trim();
  if (!val || !activeItemForCustomization) return;
  
  const categoryId = activeItemForCustomization.categoryId;
  if (categoryId === "xoi_xeo") {
    if (!configs.ricePopularOptions.includes(val)) {
      configs.ricePopularOptions.push(val);
      saveConfigs();
    }
  } else {
    if (!configs.phoPopularOptions.includes(val)) {
      configs.phoPopularOptions.push(val);
      saveConfigs();
    }
  }
  
  // Select it automatically
  if (!currentCustomPopular.includes(val)) {
    currentCustomPopular.push(val);
  }
  
  // Redraw chips
  renderPopularChipsInModal();
  el.popularCustomInput.value = "";
});

// Custom Non-Menu Item adding
el.addCustomItemBtn.addEventListener("click", () => {
  const name = el.customItemName.value.trim();
  const priceVal = el.customItemPrice.value.trim();
  const note = el.customItemNote.value.trim();
  
  if (!name) {
    alert("Vui lòng nhập tên món tự nhập!");
    return;
  }
  
  const price = priceVal !== "" ? parseFloat(priceVal) : 0;
  
  const cartItem = {
    id: "custom_" + Date.now() + "_" + Math.random().toString(36).substr(2, 5),
    itemId: "custom",
    name: name,
    size: "Tùy chọn",
    price: price,
    details: note ? `Ghi chú: ${note}` : "",
    priority: "Bình thường",
    quantity: 1
  };
  
  cart.push(cartItem);
  updateCart();
  
  // Clear inputs
  el.customItemName.value = "";
  el.customItemPrice.value = "";
  el.customItemNote.value = "";
});

// Update & Render Cart Side panel
function updateCart() {
  el.cartItems.innerHTML = "";
  
  // Render labels
  el.cartTableTitle.textContent = currentTableState.tableNum ? currentTableState.tableNum : "Chưa chọn bàn";
  el.serviceLabel.textContent = currentTableState.service;
  el.zoneLabel.textContent = currentTableState.zone;
  el.priorityLabel.textContent = currentTableState.priority;
  
  if (currentTableState.priority === "Gấp!" || currentTableState.priority === "Rất gấp!!!") {
    el.priorityLabel.style.backgroundColor = "var(--danger-glow)";
    el.priorityLabel.style.color = "var(--danger-color)";
    el.priorityLabel.style.borderColor = "var(--danger-color)";
  } else {
    el.priorityLabel.style.backgroundColor = "";
    el.priorityLabel.style.color = "";
    el.priorityLabel.style.borderColor = "";
  }

  let total = 0;
  let itemsCount = 0;
  
  if (cart.length === 0) {
    el.cartItems.innerHTML = `
      <div class="cart-item-empty">
        <span>🛒</span>
        <p>Giỏ hàng đang trống</p>
      </div>
    `;
  } else {
    cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      itemsCount += item.quantity;
      
      const card = document.createElement("div");
      card.className = "cart-item";
      
      const prioBadge = item.priority !== "Bình thường" 
        ? `<span class="chip active" style="padding: 2px 6px; font-size: 0.7rem; background-color: var(--danger-color); color: #fff; margin-left: 6px;">${item.priority}</span>` 
        : "";
        
      card.innerHTML = `
        <div class="cart-item-head">
          <div>
            <div class="cart-item-title">${item.name} (${item.size})${prioBadge}</div>
            ${item.details ? `<div class="cart-item-desc">${item.details}</div>` : ""}
          </div>
          <button class="cart-item-remove" type="button" title="Xóa">x</button>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-controls">
            <button class="qty-btn dec" type="button">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn inc" type="button">+</button>
          </div>
          <div class="cart-item-price">${itemTotal}k</div>
        </div>
      `;
      
      // Wire up Quantity clickers
      card.querySelector(".qty-btn.dec").addEventListener("click", () => {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          cart = cart.filter(x => x.id !== item.id);
        }
        updateCart();
      });
      
      card.querySelector(".qty-btn.inc").addEventListener("click", () => {
        item.quantity++;
        updateCart();
      });
      
      card.querySelector(".cart-item-remove").addEventListener("click", () => {
        cart = cart.filter(x => x.id !== item.id);
        updateCart();
      });
      
      el.cartItems.appendChild(card);
    });
  }
  
  el.cartTotal.textContent = `${total}k`;
  el.cartCount.textContent = itemsCount;
}

// Clear Cart Button Action
el.clearCartBtn.addEventListener("click", () => {
  cart = [];
  el.orderRequestInput.value = "";
  updateCart();
});

// Submit/Send Order Button Action
el.sendOrderBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Giỏ hàng rỗng, vui lòng thêm món trước!");
    return;
  }
  
  const table = currentTableState.tableNum.trim() || "Chưa chọn bàn";
  const desc = currentTableState.desc.trim();
  const zone = currentTableState.zone;
  const service = currentTableState.service;
  const priority = currentTableState.priority;
  const payment = currentTableState.payment;
  const orderNote = el.orderRequestInput.value.trim();
  
  // Calc totals
  let total = cart.reduce((sum, x) => sum + (x.price * x.quantity), 0);
  
  const newOrder = {
    id: "ord_" + Date.now(),
    tableName: table,
    description: desc,
    zone: zone,
    service: service,
    priority: priority,
    payment: payment,
    items: JSON.parse(JSON.stringify(cart)),
    note: orderNote,
    totalPrice: total,
    timestamp: Date.now(),
    status: "active" // active means table is eating, not paid yet
  };
  
  history.push(newOrder);
  saveHistory();
  
  // Populate success summary dialog
  let summaryHtml = `<strong>Bàn: ${table}</strong><br>`;
  if (desc) summaryHtml += `Mô tả: ${desc}<br>`;
  summaryHtml += `Tổng cộng: <strong>${total}k</strong><br><br>`;
  summaryHtml += `Danh sách món:<br>`;
  cart.forEach(it => {
    summaryHtml += `- ${it.quantity}x ${it.name} (${it.size})${it.details ? ` (${it.details})` : ""}<br>`;
  });
  el.successSummary.innerHTML = summaryHtml;
  
  // Clear cart & input notes
  cart = [];
  el.orderRequestInput.value = "";
  updateCart();
  
  // Close mobile cart panel and backdrop
  el.cartPanel.classList.remove("active");
  cartBackdrop.classList.remove("active");
  
  // Trigger UI changes
  renderHistory();
  el.successDialog.showModal();
});

// Close Mobile Cart Button
el.closeCartBtn.addEventListener("click", () => {
  el.cartPanel.classList.remove("active");
  cartBackdrop.classList.remove("active");
});

// Toggle Mobile Cart pill
el.cartToggleBtn.addEventListener("click", () => {
  el.cartPanel.classList.toggle("active");
  cartBackdrop.classList.toggle("active");
});

/* ORDER HISTORY & GROUPING BY TABLE */

// Render Grouped Order History in lists
function renderHistory() {
  const startList = el.ordersHistoryStart;
  const mainList = el.ordersHistoryMain;
  
  startList.innerHTML = "";
  mainList.innerHTML = "";
  
  // Filter active table orders in history
  const activeOrders = history.filter(o => o.status === "active");
  
  if (activeOrders.length === 0) {
    const emptyStart = document.createElement("div");
    emptyStart.className = "history-card-empty";
    emptyStart.textContent = "Không có đơn hàng hoạt động nào.";
    startList.appendChild(emptyStart);
    
    const emptyMain = document.createElement("div");
    emptyMain.className = "history-card-empty";
    emptyMain.textContent = "Không có đơn hàng hoạt động nào.";
    mainList.appendChild(emptyMain);
    return;
  }
  
  // Group active orders by normalized table name
  const groups = {};
  
  activeOrders.forEach(order => {
    const tableKey = order.tableName.trim().toLowerCase();
    if (!groups[tableKey]) {
      groups[tableKey] = {
        tableName: order.tableName.trim(),
        descriptions: new Set(),
        zones: new Set(),
        services: new Set(),
        payments: new Set(),
        priorities: new Set(),
        notes: [],
        items: [], // combined list of item models
        totalPrice: 0,
        orderIds: []
      };
    }
    
    const g = groups[tableKey];
    g.orderIds.push(order.id);
    if (order.description) g.descriptions.add(order.description);
    if (order.zone) g.zones.add(order.zone);
    if (order.service) g.services.add(order.service);
    if (order.payment) g.payments.add(order.payment);
    if (order.priority) g.priorities.add(order.priority);
    if (order.note) g.notes.push(order.note);
    
    // Merge or accumulate items in this group
    order.items.forEach(item => {
      // Find matching item in grouped lists with same specs
      const match = g.items.find(x => x.name === item.name && x.size === item.size && x.details === item.details && x.priority === item.priority);
      if (match) {
        match.quantity += item.quantity;
      } else {
        g.items.push(JSON.parse(JSON.stringify(item)));
      }
    });
    
    g.totalPrice += order.totalPrice;
  });
  
  // Draw cards for each table group
  for (const key in groups) {
    const g = groups[key];
    
    const cardStart = createHistoryGroupCard(g);
    const cardMain = createHistoryGroupCard(g);
    
    startList.appendChild(cardStart);
    mainList.appendChild(cardMain);
  }
}

// Factory function for active table history card
function createHistoryGroupCard(group) {
  const card = document.createElement("div");
  card.className = "history-group-card";
  
  const descsStr = Array.from(group.descriptions).join("; ");
  const zonesStr = Array.from(group.zones).join(", ");
  const servicesStr = Array.from(group.services).join(", ");
  const prioritiesStr = Array.from(group.priorities).join(", ");
  const paymentsStr = Array.from(group.payments).join(", ");
  
  const notesStr = group.notes.join(" | ");
  
  // Check if priority is urgent
  let borderStyle = "";
  if (prioritiesStr.includes("Gấp!") || prioritiesStr.includes("Rất gấp!!!")) {
    borderStyle = "border-left: 4px solid var(--danger-color);";
  }
  card.style = borderStyle;
  
  let headerHtml = `
    <div class="history-group-header">
      <div>
        <div class="history-group-title">
          <span>📍 ${group.tableName}</span>
          ${prioritiesStr ? `<span class="chip active" style="padding: 2px 6px; font-size: 0.7rem; background-color: var(--danger-color); color: #fff;">${prioritiesStr}</span>` : ""}
        </div>
        ${descsStr ? `<div class="history-group-desc">Khách: ${descsStr}</div>` : ""}
        <div class="muted" style="font-size: 0.75rem; margin-top: 4px;">
          ${zonesStr ? `<span>${zonesStr}</span>` : ""}
          ${servicesStr ? ` • <span>${servicesStr}</span>` : ""}
          ${paymentsStr ? ` • <span>Thanh toán: ${paymentsStr}</span>` : ""}
        </div>
      </div>
    </div>
  `;
  
  let itemsHtml = `<div class="history-items-list">`;
  group.items.forEach(it => {
    const priorityBadge = it.priority !== "Bình thường" 
      ? `<span class="chip active" style="padding: 1px 4px; font-size: 0.65rem; background-color: var(--danger-color); color: #fff; margin-left: 4px;">${it.priority}</span>` 
      : "";
      
    itemsHtml += `
      <div class="history-item-row">
        <div class="history-item-left">
          <div class="history-item-name">${it.quantity}x ${it.name} (${it.size})${priorityBadge}</div>
          ${it.details ? `<div class="history-item-options">${it.details}</div>` : ""}
        </div>
        <div class="history-item-right">
          <div>${it.price * it.quantity}k</div>
        </div>
      </div>
    `;
  });
  
  if (notesStr) {
    itemsHtml += `
      <div style="border-top: 1px dashed var(--border-color); padding-top: 6px; font-size: 0.8rem; color: var(--brand-color);">
        Ghi chú bếp: ${notesStr}
      </div>
    `;
  }
  itemsHtml += `</div>`;
  
  let footerHtml = `
    <div class="history-group-footer">
      <div class="history-group-total">Tổng: <span>${group.totalPrice}k</span></div>
      <button class="primary-button compact complete-group-btn" type="button" style="background-color: var(--success-color); color: #fff; box-shadow: 0 2px 6px var(--success-glow);">
        ✓ Hoàn thành
      </button>
    </div>
  `;
  
  card.innerHTML = headerHtml + itemsHtml + footerHtml;
  
  // Wire up "Hoàn thành" check button to archive this table
  card.querySelector(".complete-group-btn").addEventListener("click", () => {
    if (confirm(`Thanh toán & hoàn thành phục vụ bàn "${group.tableName}"?`)) {
      // Set all associated order models status to completed
      history.forEach(order => {
        if (group.orderIds.includes(order.id)) {
          order.status = "completed";
        }
      });
      saveHistory();
      renderHistory();
    }
  });
  
  return card;
}

// Clear Entire History Button
el.clearHistoryBtn.addEventListener("click", () => {
  if (confirm("Bạn có chắc chắn muốn xóa toàn bộ lịch sử đơn hàng? Việc này sẽ xóa vĩnh viễn dữ liệu.")) {
    history = [];
    saveHistory();
    renderHistory();
  }
});

/* SETTINGS MODAL / CONFIGURATIONS PANEL */

// Open settings Modal
el.customizeBtn.addEventListener("click", () => {
  // Sync current table configurations
  el.settingsTableInput.value = currentTableState.tableNum;
  el.settingsCustomerDescInput.value = currentTableState.desc;
  
  // Populate category options in the select item add dropdown
  el.newMenuCategory.innerHTML = "";
  menu.forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat.id;
    opt.textContent = cat.name;
    el.newMenuCategory.appendChild(opt);
  });
  
  // Hide large price input if it is not Pho Category
  el.newMenuLargePrice.style.display = el.newMenuCategory.value === "pho_mien" ? "block" : "none";
  el.newMenuCategory.addEventListener("change", () => {
    el.newMenuLargePrice.style.display = el.newMenuCategory.value === "pho_mien" ? "block" : "none";
  });

  // Render quick chips for metadata adjustments
  renderSettingsChips();
  
  // Render Config Editors
  renderConfigEditors();
  
  el.settingsDialog.showModal();
});

// Render quick select chips inside settings
function renderSettingsChips() {
  // Service Types
  el.settingsServiceChips.innerHTML = "";
  configs.serviceTypes.forEach(s => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (currentTableState.service === s ? " active" : "");
    chip.textContent = s;
    chip.addEventListener("click", () => {
      currentTableState.service = s;
      saveSession();
      el.settingsServiceChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
    el.settingsServiceChips.appendChild(chip);
  });

  // Payments
  el.paymentChips.innerHTML = "";
  configs.paymentTypes.forEach(p => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (currentTableState.payment === p ? " active" : "");
    chip.textContent = p;
    chip.addEventListener("click", () => {
      currentTableState.payment = p;
      saveSession();
      el.paymentChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
    el.paymentChips.appendChild(chip);
  });

  // Priorities
  el.priorityChips.innerHTML = "";
  configs.orderPriorities.forEach(prio => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (currentTableState.priority === prio ? " active" : "");
    chip.textContent = prio;
    chip.addEventListener("click", () => {
      currentTableState.priority = prio;
      saveSession();
      el.priorityChips.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
    });
    el.priorityChips.appendChild(chip);
  });

  // Kitchen Notes
  el.kitchenNoteChips.innerHTML = "";
  configs.kitchenNotes.forEach(note => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip" + (currentTableState.kitchenNotes.includes(note) ? " active" : "");
    chip.textContent = note;
    chip.addEventListener("click", () => {
      if (currentTableState.kitchenNotes.includes(note)) {
        currentTableState.kitchenNotes = currentTableState.kitchenNotes.filter(x => x !== note);
        chip.classList.remove("active");
      } else {
        currentTableState.kitchenNotes.push(note);
        chip.classList.add("active");
      }
      saveSession();
      
      // Auto sync kitchen notes into the orderRequestInput if active in cart
      el.orderRequestInput.value = currentTableState.kitchenNotes.join(" | ");
    });
    el.kitchenNoteChips.appendChild(chip);
  });
}

// Renders the editor blocks inside Settings
function renderConfigEditors() {
  const syncFunc = () => {
    renderStartScreenChips();
    renderSettingsChips();
  };
  
  renderConfigEditor("quickTableEditor", "quickTables", syncFunc);
  renderConfigEditor("zoneEditor", "zones", syncFunc);
  renderConfigEditor("serviceEditor", "serviceTypes", syncFunc);
  renderConfigEditor("onionEditor", "onions", syncFunc);
  renderConfigEditor("popularEditor", "phoPopularOptions", syncFunc);
  renderConfigEditor("ricePopularEditor", "ricePopularOptions", syncFunc);
  renderConfigEditor("paymentEditor", "paymentTypes", syncFunc);
  renderConfigEditor("kitchenNoteEditor", "kitchenNotes", syncFunc);
  renderConfigEditor("orderPriorityEditor", "orderPriorities", syncFunc);
  renderConfigEditor("itemPriorityEditor", "itemPriorities", syncFunc);
}

// Helper generic inline config editor
function renderConfigEditor(containerId, configKey, onUpdate) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";
  
  const listWrapper = document.createElement("div");
  listWrapper.style.display = "flex";
  listWrapper.style.flexDirection = "column";
  listWrapper.style.gap = "6px";
  listWrapper.style.marginBottom = "8px";
  
  configs[configKey].forEach((item, index) => {
    const row = document.createElement("div");
    row.className = "editable-item";
    row.innerHTML = `
      <span>${item}</span>
      <button type="button" data-index="${index}" style="border:none; background:transparent;">x</button>
    `;
    row.querySelector("button").addEventListener("click", () => {
      configs[configKey].splice(index, 1);
      saveConfigs();
      renderConfigEditor(containerId, configKey, onUpdate);
      if (onUpdate) onUpdate();
    });
    listWrapper.appendChild(row);
  });
  
  const addWrapper = document.createElement("div");
  addWrapper.className = "inline-add";
  addWrapper.innerHTML = `
    <input type="text" placeholder="Thêm mới..." style="padding: 6px 12px; font-size: 0.9rem;" />
    <button type="button" class="ghost-button compact" style="padding: 4px 10px;">+</button>
  `;
  
  const input = addWrapper.querySelector("input");
  const addBtn = addWrapper.querySelector("button");
  
  const addAction = () => {
    const val = input.value.trim();
    if (val && !configs[configKey].includes(val)) {
      configs[configKey].push(val);
      saveConfigs();
      renderConfigEditor(containerId, configKey, onUpdate);
      if (onUpdate) onUpdate();
    }
    input.value = "";
  };
  
  addBtn.addEventListener("click", addAction);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addAction();
    }
  });
  
  container.appendChild(listWrapper);
  container.appendChild(addWrapper);
}

// Add New Menu Item inside settings
el.addMenuItemBtn.addEventListener("click", () => {
  const categoryId = el.newMenuCategory.value;
  const name = el.newMenuName.value.trim();
  const priceVal = el.newMenuPrice.value.trim();
  const priceLargeVal = el.newMenuLargePrice.value.trim();
  
  if (!name) {
    alert("Vui lòng nhập tên món!");
    return;
  }
  if (priceVal === "") {
    alert("Vui lòng nhập đơn giá!");
    return;
  }
  
  const price = parseFloat(priceVal);
  const targetCategory = menu.find(c => c.id === categoryId);
  if (!targetCategory) return;
  
  const newItem = {
    id: "pm_custom_" + Date.now(),
    name: name
  };
  
  if (categoryId === "pho_mien") {
    const priceLarge = priceLargeVal !== "" ? parseFloat(priceLargeVal) : price;
    newItem.prices = {
      thuong: price,
      lon: priceLarge
    };
  } else {
    newItem.price = price;
  }
  
  targetCategory.items.push(newItem);
  saveMenu();
  
  // Re-render menu
  renderMenu();
  renderCategoryTabs();
  
  // Reset inputs
  el.newMenuName.value = "";
  el.newMenuPrice.value = "";
  el.newMenuLargePrice.value = "";
  
  alert(`Đã thêm món "${name}" vào menu!`);
});

// Save Settings Button Action
el.saveSettingsBtn.addEventListener("click", (e) => {
  e.preventDefault();
  
  // Update state details
  currentTableState.tableNum = el.settingsTableInput.value.trim();
  currentTableState.desc = el.settingsCustomerDescInput.value.trim();
  saveSession();
  
  // Update start screen fields in case they changed
  el.tableInput.value = currentTableState.tableNum;
  el.customerDescInput.value = currentTableState.desc;
  
  // Rehighlight chips
  renderStartScreenChips();
  updateCart();
  
  el.settingsDialog.close();
});


/* NAVIGATION & FLOW ACTIONS */

// Table Input Typing synchronizer
el.tableInput.addEventListener("input", () => {
  currentTableState.tableNum = el.tableInput.value.trim();
  saveSession();
  
  // Sync chip active styles
  el.quickTableChips.querySelectorAll(".chip").forEach(c => {
    if (c.textContent === currentTableState.tableNum) {
      c.classList.add("active");
    } else {
      c.classList.remove("active");
    }
  });
});

el.customerDescInput.addEventListener("input", () => {
  currentTableState.desc = el.customerDescInput.value.trim();
  saveSession();
});

// Start Order click -> transitions screens
el.startOrderBtn.addEventListener("click", () => {
  const table = el.tableInput.value.trim();
  currentTableState.tableNum = table;
  currentTableState.desc = el.customerDescInput.value.trim();
  saveSession();
  
  // Switch visibility
  el.tableScreen.classList.add("hidden");
  el.orderScreen.classList.remove("hidden");
  
  // Set headers
  el.currentTableLabel.textContent = table ? table : "Không bàn / Khách lẻ";
  
  // Render Menu & Cart
  renderMenu();
  renderCategoryTabs();
  updateCart();
  renderHistory();
});

// Change Table button -> Back to Start screen
el.changeTableBtn.addEventListener("click", () => {
  // Update start screen fields
  el.tableInput.value = currentTableState.tableNum;
  el.customerDescInput.value = currentTableState.desc;
  renderStartScreenChips();
  
  el.orderScreen.classList.add("hidden");
  el.tableScreen.classList.remove("hidden");
  
  renderHistory();
});

// Create new order from Success Dialog Modal
el.newOrderBtn.addEventListener("click", () => {
  el.successDialog.close();
  
  // Reset table inputs and go back to start screen
  resetTableState();
  el.tableInput.value = "";
  el.customerDescInput.value = "";
  
  renderStartScreenChips();
  
  // Ensure cart panels and backdrop are closed/hidden
  el.cartPanel.classList.remove("active");
  cartBackdrop.classList.remove("active");
  
  el.orderScreen.classList.add("hidden");
  el.tableScreen.classList.remove("hidden");
  renderHistory();
});


/* RUN INITIALIZATION ON BOOT */
document.addEventListener("DOMContentLoaded", () => {
  initData();
  renderStartScreenChips();
  renderHistory();
  
  // Sync inputs with session data
  el.tableInput.value = currentTableState.tableNum;
  el.customerDescInput.value = currentTableState.desc;
  
  // If tableNum was already selected, we can directly show menu?
  // Let's stay on start screen to let them verify or click start order.
});
