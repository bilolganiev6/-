'use strict';

/* ============================================
   AutoParts Pro — B2B портал автозапчастей
   Основной JavaScript модуль
   ============================================ */

/**
 * Данные товаров (имитация базы данных)
 * @type {Array}
 */
const PRODUCTS_DATA = [
    {
        id: 1,
        name: 'Фильтр масляный Premium',
        brand: 'Bosch',
        oem: 'F026407013',
        category: 'consumables',
        vin_compat: ['WVWZZZ3CZWE123456', 'WAUZZZ8K9AA123456'],
        moq: 10,
        prices: [
            { qty: 10, price: 450 },
            { qty: 50, price: 420 },
            { qty: 100, price: 390 }
        ],
        stock: 500,
        image: '🛢️',
        cross_numbers: ['MANN W712/95', 'KNECHT OX185D'],
        compatibility: ['VW Passat B5', 'Audi A4 B8', 'Skoda Octavia A5']
    },
    {
        id: 2,
        name: 'Колодки тормозные передние',
        brand: 'TRW',
        oem: 'GDB1534',
        category: 'brakes',
        vin_compat: ['WBA3A5C50CF123456', 'WBA8E9C50HK123456'],
        moq: 5,
        prices: [
            { qty: 5, price: 2800 },
            { qty: 20, price: 2650 },
            { qty: 50, price: 2500 }
        ],
        stock: 150,
        image: '🛑',
        cross_numbers: ['TEXTAR 2360101', 'BREMBO P83058'],
        compatibility: ['BMW 3 Series F30', 'BMW 5 Series G30']
    },
    {
        id: 3,
        name: 'Амортизатор передний газовый',
        brand: 'KYB',
        oem: '339015',
        category: 'suspension',
        vin_compat: ['JN1TBNT31Z0012345', 'JN1CV5AP5BM123456'],
        moq: 4,
        prices: [
            { qty: 4, price: 5200 },
            { qty: 16, price: 4900 },
            { qty: 40, price: 4600 }
        ],
        stock: 80,
        image: '🔧',
        cross_numbers: ['SACHS 313559', 'MONROE E4506'],
        compatibility: ['Infiniti FX35', 'Nissan Skyline']
    },
    {
        id: 4,
        name: 'Свеча зажигания иридиевая',
        brand: 'NGK',
        oem: 'LFR5AIX-11',
        category: 'engine',
        vin_compat: ['KMHDN46D07U123456', 'KMHC85LC5KU123456'],
        moq: 20,
        prices: [
            { qty: 20, price: 680 },
            { qty: 100, price: 640 },
            { qty: 500, price: 600 }
        ],
        stock: 1000,
        image: '⚡',
        cross_numbers: ['DENSO IKH20', 'CHAMPION REC10WMPB4'],
        compatibility: ['Hyundai Solaris', 'Kia Rio', 'Genesis G90']
    },
    {
        id: 5,
        name: 'Фара передняя левая LED',
        brand: 'HELLA',
        oem: '8LD278140-001',
        category: 'electric',
        vin_compat: ['WVWZZZ3CZDE123456', 'TMBJJ7NE0F0123456'],
        moq: 2,
        prices: [
            { qty: 2, price: 18500 },
            { qty: 10, price: 17500 },
            { qty: 25, price: 16500 }
        ],
        stock: 25,
        image: '💡',
        cross_numbers: ['VALEO 745632', 'OSRAM LEDriving'],
        compatibility: ['VW Passat B8', 'Skoda Superb III']
    },
    {
        id: 6,
        name: 'Бампер передний',
        brand: 'TYG',
        oem: 'VW1000189',
        category: 'body',
        vin_compat: ['WVWZZZ6RZFE123456'],
        moq: 2,
        prices: [
            { qty: 2, price: 8900 },
            { qty: 8, price: 8400 },
            { qty: 20, price: 7900 }
        ],
        stock: 40,
        image: '🚙',
        cross_numbers: ['API VW1000189', 'JOHNS 500189'],
        compatibility: ['VW Tiguan II']
    },
    {
        id: 7,
        name: 'Ремень ГРМ комплект',
        brand: 'ContiTech',
        oem: 'CT1137WP1',
        category: 'engine',
        vin_compat: ['VF1RFD00654123456', 'VF1KZB00553123456'],
        moq: 5,
        prices: [
            { qty: 5, price: 4200 },
            { qty: 20, price: 3950 },
            { qty: 50, price: 3700 }
        ],
        stock: 200,
        image: '⚙️',
        cross_numbers: ['DAYCO KTB926', 'GATES K015631XS'],
        compatibility: ['Renault Logan', 'Renault Duster', 'Nissan Almera']
    },
    {
        id: 8,
        name: 'Радиатор охлаждения',
        brand: 'NISSENS',
        oem: '67345',
        category: 'engine',
        vin_compat: ['WBAVB13506P123456', 'WBAVA13507N123456'],
        moq: 3,
        prices: [
            { qty: 3, price: 6800 },
            { qty: 12, price: 6400 },
            { qty: 30, price: 6000 }
        ],
        stock: 60,
        image: '🌡️',
        cross_numbers: ['BEHR 8MK376734541', 'AVA QUALITY COOLING BM5058'],
        compatibility: ['BMW X5 E70', 'BMW X6 E71']
    },
    {
        id: 9,
        name: 'Генератор 14V 120A',
        brand: 'VALEO',
        oem: '439675',
        category: 'electric',
        vin_compat: ['VF1RFD00654123456', 'SU10R1234567890'],
        moq: 2,
        prices: [
            { qty: 2, price: 12500 },
            { qty: 8, price: 11800 },
            { qty: 20, price: 11000 }
        ],
        stock: 35,
        image: '⚡',
        cross_numbers: ['BOSCH 0986082340', 'DELPHI DKA10045'],
        compatibility: ['Renault Megane III', 'Suzuki SX4']
    },
    {
        id: 10,
        name: 'Диск тормозной вентилируемый',
        brand: 'BREMBO',
        oem: '09.B334.11',
        category: 'brakes',
        vin_compat: ['ZFF56MMA5G0123456', 'ZFF91MLA5H0123456'],
        moq: 4,
        prices: [
            { qty: 4, price: 8900 },
            { qty: 16, price: 8400 },
            { qty: 40, price: 7900 }
        ],
        stock: 120,
        image: '🛑',
        cross_numbers: ['TEXTAR 92123400', 'ZIMMERMANN 20014'],
        compatibility: ['Ferrari 488 GTB', 'Ferrari F12']
    },
    {
        id: 11,
        name: 'Насос топливный электрический',
        brand: 'BOSCH',
        oem: '0580464070',
        category: 'engine',
        vin_compat: ['WVWZZZ1JZ3W123456', 'WAUZZZ8L93A123456'],
        moq: 5,
        prices: [
            { qty: 5, price: 3200 },
            { qty: 20, price: 3000 },
            { qty: 50, price: 2800 }
        ],
        stock: 180,
        image: '⛽',
        cross_numbers: ['PIERBURG 7.21440.51.0', 'DELPHI FG1024'],
        compatibility: ['VW Golf IV', 'Audi A6 C5']
    },
    {
        id: 12,
        name: 'Зеркало боковое правое с подогревом',
        brand: 'VAN WEZEL',
        oem: '5826834',
        category: 'body',
        vin_compat: ['WVWZZZ5NZHE123456'],
        moq: 4,
        prices: [
            { qty: 4, price: 4500 },
            { qty: 16, price: 4250 },
            { qty: 40, price: 4000 }
        ],
        stock: 70,
        image: '🪞',
        cross_numbers: ['PRASCO FO5826834', 'JOHNS 8005826834'],
        compatibility: ['Ford Focus III']
    },
    {
        id: 13,
        name: 'Воздушный фильтр',
        brand: 'MANN-FILTER',
        oem: 'C29038',
        category: 'consumables',
        vin_compat: ['WBA3A5C50CF123456', 'WBA8E9C50HK123456'],
        moq: 10,
        prices: [
            { qty: 10, price: 890 },
            { qty: 50, price: 840 },
            { qty: 150, price: 790 }
        ],
        stock: 400,
        image: '💨',
        cross_numbers: ['KNECHT LX1666', 'MAHLE LX1666'],
        compatibility: ['BMW 3 Series F30', 'BMW 5 Series G30']
    },
    {
        id: 14,
        name: 'Стартер 12V 1.4kW',
        brand: 'DENSO',
        oem: 'DST0804',
        category: 'electric',
        vin_compat: ['JTDBR32E050123456', 'JTNBU46E070123456'],
        moq: 2,
        prices: [
            { qty: 2, price: 9800 },
            { qty: 8, price: 9200 },
            { qty: 20, price: 8600 }
        ],
        stock: 45,
        image: '🔋',
        cross_numbers: ['BOSCH 0986018540', 'VALEO D8GE53'],
        compatibility: ['Toyota Camry', 'Toyota RAV4']
    },
    {
        id: 15,
        name: 'Подушка двигателя передняя',
        brand: 'LEMFOERDER',
        oem: '3606501',
        category: 'suspension',
        vin_compat: ['WDD2040011R123456', 'WDD2050011N123456'],
        moq: 4,
        prices: [
            { qty: 4, price: 3800 },
            { qty: 16, price: 3550 },
            { qty: 40, price: 3300 }
        ],
        stock: 90,
        image: '🔩',
        cross_numbers: ['CORTECO 122034', 'FEBI BILSTEIN 14589'],
        compatibility: ['Mercedes C-Class W204', 'Mercedes C-Class W205']
    }
];

/**
 * Приложение AutoParts Pro
 */
const App = {
    // Состояние приложения
    state: {
        products: [...PRODUCTS_DATA],
        filteredProducts: [...PRODUCTS_DATA],
        cart: [],
        currentProduct: null,
        theme: 'light',
        mode: 'wholesale',
        searchQuery: ''
    },

    // DOM элементы
    elements: {},

    /**
     * Инициализация приложения
     */
    init() {
        this.cacheElements();
        this.loadFromStorage();
        this.bindEvents();
        this.renderCatalog();
        this.renderBrandsFilter();
        this.updateCartBadge();
        this.applyTheme();
        this.applyMode();
    },

    /**
     * Кэширование DOM элементов
     */
    cacheElements() {
        this.elements = {
            // Шапка
            header: document.getElementById('header'),
            headerNav: document.getElementById('headerNav'),
            searchInput: document.getElementById('searchInput'),
            searchSuggestions: document.getElementById('searchSuggestions'),
            searchBtn: document.getElementById('searchBtn'),
            themeToggle: document.getElementById('themeToggle'),
            modeToggle: document.getElementById('modeToggle'),
            cartBtn: document.getElementById('cartBtn'),
            cartBadge: document.getElementById('cartBadge'),
            userBtn: document.getElementById('userBtn'),
            burgerBtn: document.getElementById('burgerBtn'),
            
            // Каталог
            catalogGrid: document.getElementById('catalogGrid'),
            catalogEmpty: document.getElementById('catalogEmpty'),
            filterBrand: document.getElementById('filterBrand'),
            filterCategory: document.getElementById('filterCategory'),
            sortBy: document.getElementById('sortBy'),
            resetFilters: document.getElementById('resetFilters'),
            
            // Модальные окна
            productModal: document.getElementById('productModal'),
            cartModal: document.getElementById('cartModal'),
            
            // Детали товара
            modalProductImage: document.getElementById('modalProductImage'),
            modalProductName: document.getElementById('modalProductName'),
            modalProductOEM: document.getElementById('modalProductOEM'),
            modalProductBrand: document.getElementById('modalProductBrand'),
            modalProductStock: document.getElementById('modalProductStock'),
            modalProductPrices: document.getElementById('modalProductPrices'),
            modalProductMOQ: document.getElementById('modalProductMOQ'),
            modalQuantity: document.getElementById('modalQuantity'),
            quantityError: document.getElementById('quantityError'),
            modalTotalPrice: document.getElementById('modalTotalPrice'),
            addToCartBtn: document.getElementById('addToCartBtn'),
            modalCrossNumbers: document.getElementById('modalCrossNumbers'),
            modalCompatibility: document.getElementById('modalCompatibility'),
            qtyDecrease: document.getElementById('qtyDecrease'),
            qtyIncrease: document.getElementById('qtyIncrease'),
            
            // Корзина
            cartContent: document.getElementById('cartContent'),
            cartEmpty: document.getElementById('cartEmpty'),
            cartFilled: document.getElementById('cartFilled'),
            cartItems: document.getElementById('cartItems'),
            summarySubtotal: document.getElementById('summarySubtotal'),
            summaryDiscount: document.getElementById('summaryDiscount'),
            summaryTotal: document.getElementById('summaryTotal'),
            checkoutBtn: document.getElementById('checkoutBtn'),
            
            // Уведомления
            notification: document.getElementById('notification'),
            
            // Категории
            categoryCards: document.querySelectorAll('.category-card')
        };
    },

    /**
     * Загрузка данных из LocalStorage
     */
    loadFromStorage() {
        try {
            const savedCart = localStorage.getItem('autoparts_cart');
            const savedTheme = localStorage.getItem('autoparts_theme');
            const savedMode = localStorage.getItem('autoparts_mode');
            
            if (savedCart) {
                this.state.cart = JSON.parse(savedCart);
            }
            if (savedTheme) {
                this.state.theme = savedTheme;
            }
            if (savedMode) {
                this.state.mode = savedMode;
            }
        } catch (e) {
            console.error('Ошибка загрузки из хранилища:', e);
        }
    },

    /**
     * Сохранение в LocalStorage
     */
    saveToStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Ошибка сохранения в хранилище:', e);
        }
    },

    /**
     * Привязка событий
     */
    bindEvents() {
        // Поиск
        this.elements.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        this.elements.searchBtn.addEventListener('click', () => this.performSearch());
        this.elements.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.performSearch();
        });
        
        // Переключатели
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());
        this.elements.modeToggle.addEventListener('click', () => this.toggleMode());
        
        // Корзина
        this.elements.cartBtn.addEventListener('click', () => this.openCartModal());
        
        // Бургер меню
        this.elements.burgerBtn.addEventListener('click', () => this.toggleMobileMenu());
        
        // Фильтры
        this.elements.filterBrand.addEventListener('change', () => this.filterProducts());
        this.elements.filterCategory.addEventListener('change', () => this.filterProducts());
        this.elements.sortBy.addEventListener('change', () => this.sortProducts());
        this.elements.resetFilters.addEventListener('click', () => this.resetFilters());
        
        // Категории
        this.elements.categoryCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                const category = card.dataset.category;
                this.elements.filterCategory.value = category;
                this.filterProducts();
                document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
            });
        });
        
        // Модальные окна - закрытие по клику на overlay
        document.querySelectorAll('[data-close-modal]').forEach(el => {
            el.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) this.closeModal(modal);
            });
        });
        
        // Закрытие по ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
        
        // Детали товара
        this.elements.qtyDecrease.addEventListener('click', () => this.adjustQuantity(-1));
        this.elements.qtyIncrease.addEventListener('click', () => this.adjustQuantity(1));
        this.elements.modalQuantity.addEventListener('input', () => this.validateQuantity());
        this.elements.addToCartBtn.addEventListener('click', () => this.addCurrentToCart());
        
        // Оформление заказа
        this.elements.checkoutBtn.addEventListener('click', () => this.checkout());
        
        // Делегирование событий для каталога
        this.elements.catalogGrid.addEventListener('click', (e) => this.handleCatalogClick(e));
    },

    /**
     * Обработка кликов в каталоге
     */
    handleCatalogClick(e) {
        const viewBtn = e.target.closest('.product-card__btn--view');
        const cartBtn = e.target.closest('.product-card__btn--cart');
        
        if (viewBtn) {
            const productId = parseInt(viewBtn.dataset.id);
            this.openProductModal(productId);
        } else if (cartBtn) {
            const productId = parseInt(cartBtn.dataset.id);
            this.quickAddToCart(productId);
        }
    },

    /**
     * Обработка поиска
     */
    handleSearch(e) {
        const query = e.target.value.trim();
        this.state.searchQuery = query;
        
        if (query.length >= 2) {
            this.showSearchSuggestions(query);
        } else {
            this.hideSearchSuggestions();
        }
        
        if (query.length === 0 || query.length >= 2) {
            this.filterProducts();
        }
    },

    /**
     * Показ подсказок поиска
     */
    showSearchSuggestions(query) {
        const suggestions = this.state.products.filter(product => 
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.oem.toLowerCase().includes(query.toLowerCase()) ||
            product.brand.toLowerCase().includes(query.toLowerCase()) ||
            product.vin_compat.some(vin => vin.toLowerCase().includes(query.toLowerCase()))
        ).slice(0, 5);
        
        if (suggestions.length > 0) {
            const html = suggestions.map(product => `
                <div class="suggestion-item" data-id="${product.id}">
                    <div class="suggestion-item__name">${this.escapeHtml(product.name)}</div>
                    <div class="suggestion-item__oem">${this.escapeHtml(product.oem)} • ${this.escapeHtml(product.brand)}</div>
                </div>
            `).join('');
            
            this.elements.searchSuggestions.innerHTML = html;
            this.elements.searchSuggestions.classList.add('search__suggestions--active');
            
            // Клик по подсказке
            this.elements.searchSuggestions.querySelectorAll('.suggestion-item').forEach(item => {
                item.addEventListener('click', () => {
                    const productId = parseInt(item.dataset.id);
                    this.openProductModal(productId);
                    this.hideSearchSuggestions();
                    this.elements.searchInput.value = '';
                });
            });
        } else {
            this.hideSearchSuggestions();
        }
    },

    /**
     * Скрытие подсказок поиска
     */
    hideSearchSuggestions() {
        this.elements.searchSuggestions.classList.remove('search__suggestions--active');
        this.elements.searchSuggestions.innerHTML = '';
    },

    /**
     * Выполнение поиска
     */
    performSearch() {
        this.hideSearchSuggestions();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    },

    /**
     * Рендеринг каталога
     */
    renderCatalog() {
        const products = this.state.filteredProducts;
        
        if (products.length === 0) {
            this.elements.catalogGrid.style.display = 'none';
            this.elements.catalogEmpty.style.display = 'block';
            return;
        }
        
        this.elements.catalogGrid.style.display = 'grid';
        this.elements.catalogEmpty.style.display = 'none';
        
        const html = products.map(product => {
            const mainPrice = this.getMainPrice(product);
            const stockClass = this.getStockClass(product.stock);
            const stockText = this.getStockText(product.stock);
            const isDisabled = product.stock === 0;
            
            return `
                <article class="product-card">
                    <div class="product-card__image">
                        <span class="product-card__placeholder">${product.image}</span>
                        <span class="product-card__badge">Опт</span>
                        <span class="product-card__stock product-card__stock--${stockClass}">${stockText}</span>
                    </div>
                    <div class="product-card__content">
                        <div class="product-card__brand">${this.escapeHtml(product.brand)}</div>
                        <h3 class="product-card__name">${this.escapeHtml(product.name)}</h3>
                        <div class="product-card__oem">Артикул: ${this.escapeHtml(product.oem)}</div>
                        <div class="product-card__moq">Мин. партия: ${product.moq} шт.</div>
                        <div class="product-card__prices">
                            ${product.prices.map(tier => `
                                <div class="price-tier">
                                    <span class="price-tier__qty">от ${tier.qty} шт.</span>
                                    <span class="price-tier__value">${this.formatPrice(tier.price)}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="product-card__price-main">${this.formatPrice(mainPrice)}</div>
                        <div class="product-card__actions">
                            <button class="product-card__btn product-card__btn--view" data-id="${product.id}">
                                Подробнее
                            </button>
                            <button class="product-card__btn product-card__btn--cart ${isDisabled ? 'product-card__btn--disabled' : ''}" 
                                    data-id="${product.id}" 
                                    ${isDisabled ? 'disabled' : ''}>
                                В корзину
                            </button>
                        </div>
                    </div>
                </article>
            `;
        }).join('');
        
        this.elements.catalogGrid.innerHTML = html;
    },

    /**
     * Рендеринг фильтра брендов
     */
    renderBrandsFilter() {
        const brands = [...new Set(this.state.products.map(p => p.brand))].sort();
        const html = brands.map(brand => 
            `<option value="${this.escapeHtml(brand)}">${this.escapeHtml(brand)}</option>`
        ).join('');
        
        this.elements.filterBrand.innerHTML = '<option value="">Все бренды</option>' + html;
    },

    /**
     * Фильтрация товаров
     */
    filterProducts() {
        let filtered = [...this.state.products];
        
        // Поиск
        if (this.state.searchQuery) {
            const query = this.state.searchQuery.toLowerCase();
            filtered = filtered.filter(product => 
                product.name.toLowerCase().includes(query) ||
                product.oem.toLowerCase().includes(query) ||
                product.brand.toLowerCase().includes(query) ||
                product.vin_compat.some(vin => vin.toLowerCase().includes(query))
            );
        }
        
        // Бренд
        const brandFilter = this.elements.filterBrand.value;
        if (brandFilter) {
            filtered = filtered.filter(p => p.brand === brandFilter);
        }
        
        // Категория
        const categoryFilter = this.elements.filterCategory.value;
        if (categoryFilter) {
            filtered = filtered.filter(p => p.category === categoryFilter);
        }
        
        this.state.filteredProducts = filtered;
        this.sortProducts();
    },

    /**
     * Сортировка товаров
     */
    sortProducts() {
        const sortBy = this.elements.sortBy.value;
        let sorted = [...this.state.filteredProducts];
        
        switch (sortBy) {
            case 'price-asc':
                sorted.sort((a, b) => this.getMainPrice(a) - this.getMainPrice(b));
                break;
            case 'price-desc':
                sorted.sort((a, b) => this.getMainPrice(b) - this.getMainPrice(a));
                break;
            case 'name':
                sorted.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'stock':
                sorted.sort((a, b) => b.stock - a.stock);
                break;
        }
        
        this.state.filteredProducts = sorted;
        this.renderCatalog();
    },

    /**
     * Сброс фильтров
     */
    resetFilters() {
        this.elements.filterBrand.value = '';
        this.elements.filterCategory.value = '';
        this.elements.sortBy.value = 'default';
        this.elements.searchInput.value = '';
        this.state.searchQuery = '';
        this.state.filteredProducts = [...this.state.products];
        this.renderCatalog();
        document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
    },

    /**
     * Открытие модального окна товара
     */
    openProductModal(productId) {
        const product = this.state.products.find(p => p.id === productId);
        if (!product) return;
        
        this.state.currentProduct = product;
        
        // Заполнение данных
        this.elements.modalProductImage.innerHTML = `<span class="product-emoji">${product.image}</span>`;
        this.elements.modalProductName.textContent = product.name;
        this.elements.modalProductOEM.textContent = product.oem;
        this.elements.modalProductBrand.textContent = product.brand;
        this.elements.modalProductMOQ.textContent = product.moq;
        
        // Статус наличия
        const stockClass = this.getStockClass(product.stock);
        const stockText = this.getStockText(product.stock);
        this.elements.modalProductStock.className = `product-detail__stock product-detail__stock--${stockClass}`;
        this.elements.modalProductStock.textContent = stockText;
        
        // Цены
        this.elements.modalProductPrices.innerHTML = product.prices.map((tier, index) => `
            <div class="price-tier-row ${index === 0 ? 'price-tier-row--highlight' : ''}">
                <span>от ${tier.qty} шт.</span>
                <span>${this.formatPrice(tier.price)}</span>
            </div>
        `).join('');
        
        // Количество
        this.elements.modalQuantity.value = product.moq;
        this.elements.modalQuantity.min = product.moq;
        this.elements.quantityError.textContent = '';
        
        // Кросс-номера
        if (product.cross_numbers && product.cross_numbers.length > 0) {
            this.elements.modalCrossNumbers.innerHTML = `
                <h4>Кросс-номера:</h4>
                <div class="cross-list">
                    ${product.cross_numbers.map(cn => `<span class="cross-item">${this.escapeHtml(cn)}</span>`).join('')}
                </div>
            `;
            this.elements.modalCrossNumbers.style.display = 'block';
        } else {
            this.elements.modalCrossNumbers.style.display = 'none';
        }
        
        // Совместимость
        if (product.compatibility && product.compatibility.length > 0) {
            this.elements.modalCompatibility.innerHTML = `
                <h4>Совместимость:</h4>
                <div class="compat-list">
                    ${product.compatibility.map(c => `<span class="compat-item">${this.escapeHtml(c)}</span>`).join('')}
                </div>
            `;
            this.elements.modalCompatibility.style.display = 'block';
        } else {
            this.elements.modalCompatibility.style.display = 'none';
        }
        
        // Обновление итоговой цены
        this.calculateTotal();
        
        // Открытие модального окна
        this.elements.productModal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
    },

    /**
     * Быстрое добавление в корзину
     */
    quickAddToCart(productId) {
        const product = this.state.products.find(p => p.id === productId);
        if (!product || product.stock === 0) {
            this.showNotification('Товар отсутствует на складе', 'error');
            return;
        }
        
        this.addToCart(product, product.moq);
        this.showNotification(`Добавлено: ${product.name}`, 'success');
    },

    /**
     * Добавление текущего товара в корзину
     */
    addCurrentToCart() {
        const product = this.state.currentProduct;
        if (!product) return;
        
        const quantity = parseInt(this.elements.modalQuantity.value);
        
        if (quantity < product.moq) {
            this.elements.quantityError.textContent = `Минимальная партия: ${product.moq} шт.`;
            this.elements.modalQuantity.classList.add('shake');
            setTimeout(() => this.elements.modalQuantity.classList.remove('shake'), 300);
            return;
        }
        
        if (quantity > product.stock) {
            this.elements.quantityError.textContent = `Недостаточно на складе. В наличии: ${product.stock} шт.`;
            this.elements.modalQuantity.classList.add('shake');
            setTimeout(() => this.elements.modalQuantity.classList.remove('shake'), 300);
            return;
        }
        
        this.addToCart(product, quantity);
        this.closeModal(this.elements.productModal);
        this.showNotification(`Добавлено в корзину: ${product.name} (${quantity} шт.)`, 'success');
    },

    /**
     * Добавление товара в корзину
     */
    addToCart(product, quantity) {
        const existingItem = this.state.cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
            if (existingItem.quantity > product.stock) {
                existingItem.quantity = product.stock;
            }
        } else {
            this.state.cart.push({
                id: product.id,
                name: product.name,
                oem: product.oem,
                brand: product.brand,
                image: product.image,
                moq: product.moq,
                prices: product.prices,
                stock: product.stock,
                quantity: quantity
            });
        }
        
        this.saveToStorage('autoparts_cart', this.state.cart);
        this.updateCartBadge();
    },

    /**
     * Удаление из корзины
     */
    removeFromCart(productId) {
        this.state.cart = this.state.cart.filter(item => item.id !== productId);
        this.saveToStorage('autoparts_cart', this.state.cart);
        this.updateCartBadge();
        this.renderCart();
    },

    /**
     * Обновление бейджа корзины
     */
    updateCartBadge() {
        const totalItems = this.state.cart.reduce((sum, item) => sum + item.quantity, 0);
        
        if (totalItems > 0) {
            this.elements.cartBadge.textContent = totalItems;
            this.elements.cartBadge.classList.remove('cart-badge--hidden');
        } else {
            this.elements.cartBadge.classList.add('cart-badge--hidden');
        }
    },

    /**
     * Открытие модального окна корзины
     */
    openCartModal() {
        this.renderCart();
        this.elements.cartModal.classList.add('modal--active');
        document.body.style.overflow = 'hidden';
    },

    /**
     * Рендеринг корзины
     */
    renderCart() {
        if (this.state.cart.length === 0) {
            this.elements.cartEmpty.style.display = 'block';
            this.elements.cartFilled.style.display = 'none';
            return;
        }
        
        this.elements.cartEmpty.style.display = 'none';
        this.elements.cartFilled.style.display = 'block';
        
        let subtotal = 0;
        let totalDiscount = 0;
        
        const html = this.state.cart.map(item => {
            const price = this.getPriceForQuantity(item, item.quantity);
            const itemTotal = price * item.quantity;
            const basePrice = this.getPriceForQuantity(item, item.moq);
            const discount = (basePrice - price) * item.quantity;
            
            subtotal += itemTotal;
            totalDiscount += discount;
            
            return `
                <div class="cart-item">
                    <div class="cart-item__image">${item.image}</div>
                    <div class="cart-item__info">
                        <div class="cart-item__name">${this.escapeHtml(item.name)}</div>
                        <div class="cart-item__oem">${this.escapeHtml(item.oem)} • ${this.escapeHtml(item.brand)}</div>
                        <div class="cart-item__price">${this.formatPrice(price)} × ${item.quantity} = ${this.formatPrice(itemTotal)}</div>
                    </div>
                    <div class="cart-item__quantity">
                        <span class="cart-item__qty">${item.quantity}</span>
                        <button class="cart-item__remove" data-id="${item.id}" aria-label="Удалить">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
        
        this.elements.cartItems.innerHTML = html;
        
        // Обработчики удаления
        this.elements.cartItems.querySelectorAll('.cart-item__remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = parseInt(e.currentTarget.dataset.id);
                this.removeFromCart(productId);
            });
        });
        
        // Итоги
        const total = subtotal - totalDiscount;
        this.elements.summarySubtotal.textContent = this.formatPrice(subtotal);
        this.elements.summaryDiscount.textContent = `−${this.formatPrice(totalDiscount)}`;
        this.elements.summaryTotal.textContent = this.formatPrice(total);
    },

    /**
     * Получение цены для количества
     */
    getPriceForQuantity(item, quantity) {
        const sortedPrices = [...item.prices].sort((a, b) => b.qty - a.qty);
        
        for (const tier of sortedPrices) {
            if (quantity >= tier.qty) {
                return tier.price;
            }
        }
        
        return item.prices[0].price;
    },

    /**
     * Расчёт общей суммы в модальном окне товара
     */
    calculateTotal() {
        const product = this.state.currentProduct;
        if (!product) return;
        
        const quantity = parseInt(this.elements.modalQuantity.value) || 0;
        const price = this.getPriceForQuantity(product, quantity);
        const total = price * quantity;
        
        this.elements.modalTotalPrice.textContent = this.formatPrice(total);
    },

    /**
     * Изменение количества в модальном окне
     */
    adjustQuantity(delta) {
        const product = this.state.currentProduct;
        if (!product) return;
        
        const input = this.elements.modalQuantity;
        let value = parseInt(input.value) || product.moq;
        value += delta;
        
        if (value < product.moq) value = product.moq;
        if (value > product.stock) value = product.stock;
        
        input.value = value;
        this.validateQuantity();
        this.calculateTotal();
    },

    /**
     * Валидация количества
     */
    validateQuantity() {
        const product = this.state.currentProduct;
        if (!product) return;
        
        const quantity = parseInt(this.elements.modalQuantity.value) || 0;
        
        if (quantity < product.moq) {
            this.elements.quantityError.textContent = `Минимальная партия: ${product.moq} шт.`;
        } else if (quantity > product.stock) {
            this.elements.quantityError.textContent = `Недостаточно на складе. В наличии: ${product.stock} шт.`;
        } else {
            this.elements.quantityError.textContent = '';
        }
        
        this.calculateTotal();
    },

    /**
     * Оформление заказа
     */
    checkout() {
        if (this.state.cart.length === 0) {
            this.showNotification('Корзина пуста', 'error');
            return;
        }
        
        const companyName = document.getElementById('companyName').value.trim();
        const companyInn = document.getElementById('companyInn').value.trim();
        
        if (!companyName || !companyInn) {
            this.showNotification('Заполните реквизиты организации', 'error');
            return;
        }
        
        // Имитация отправки заказа
        this.showNotification('Заказ формируется... Ожидайте счёт', 'info');
        
        setTimeout(() => {
            this.state.cart = [];
            this.saveToStorage('autoparts_cart', this.state.cart);
            this.updateCartBadge();
            this.closeModal(this.elements.cartModal);
            this.showNotification('Счёт отправлен на вашу почту', 'success');
        }, 2000);
    },

    /**
     * Переключение темы
     */
    toggleTheme() {
        this.state.theme = this.state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('autoparts_theme', this.state.theme);
        this.applyTheme();
    },

    /**
     * Применение темы
     */
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.state.theme);
    },

    /**
     * Переключение режима
     */
    toggleMode() {
        this.state.mode = this.state.mode === 'wholesale' ? 'retail' : 'wholesale';
        localStorage.setItem('autoparts_mode', this.state.mode);
        this.applyMode();
        
        if (this.state.mode === 'retail') {
            this.showNotification('Режим розницы: цены могут отличаться', 'info');
        }
    },

    /**
     * Применение режима
     */
    applyMode() {
        document.documentElement.setAttribute('data-mode', this.state.mode);
        const textElement = this.elements.modeToggle.querySelector('.mode-toggle__text');
        textElement.textContent = this.state.mode === 'wholesale' ? 'Опт' : 'Розница';
    },

    /**
     * Переключение мобильного меню
     */
    toggleMobileMenu() {
        this.elements.headerNav.classList.toggle('header__nav--active');
        this.elements.burgerBtn.classList.toggle('burger-btn--active');
    },

    /**
     * Закрытие модального окна
     */
    closeModal(modal) {
        modal.classList.remove('modal--active');
        document.body.style.overflow = '';
        
        if (modal === this.elements.productModal) {
            this.state.currentProduct = null;
        }
    },

    /**
     * Закрытие всех модальных окон
     */
    closeAllModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('modal--active');
        });
        document.body.style.overflow = '';
        this.state.currentProduct = null;
    },

    /**
     * Показ уведомления
     */
    showNotification(message, type = 'info') {
        const icon = this.elements.notification.querySelector('.notification__icon');
        const messageEl = this.elements.notification.querySelector('.notification__message');
        
        this.elements.notification.className = `notification notification--${type}`;
        messageEl.textContent = message;
        
        this.elements.notification.classList.add('notification--active');
        
        setTimeout(() => {
            this.elements.notification.classList.remove('notification--active');
        }, 3000);
    },

    /**
     * Форматирование цены
     */
    formatPrice(price) {
        return new Intl.NumberFormat('ru-RU', {
            style: 'currency',
            currency: 'RUB',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    },

    /**
     * Получение основной цены (минимальной партии)
     */
    getMainPrice(product) {
        return product.prices[0].price;
    },

    /**
     * Класс статуса наличия
     */
    getStockClass(stock) {
        if (stock === 0) return 'out-of-stock';
        if (stock < 50) return 'low-stock';
        return 'in-stock';
    },

    /**
     * Текст статуса наличия
     */
    getStockText(stock) {
        if (stock === 0) return 'Нет в наличии';
        if (stock < 50) return `Мало: ${stock} шт.`;
        return `В наличии: ${stock} шт.`;
    },

    /**
     * Экранирование HTML
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

/**
 * Инициализация после загрузки DOM
 */
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});

// Service Worker регистрация (для PWA, опционально)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('SW registered:', reg))
        //     .catch(err => console.log('SW registration failed:', err));
    });
}
