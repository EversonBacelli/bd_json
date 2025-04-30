const lista_de_produtos =[
  {
    "codigo": 1,
    "nome": "Smartphone Galaxy S21",
    "descricao": "Smartphone de última geração com tela de 6.2 polegadas e câmera de 64MP",
    "url_img": "https://example.com/s21.jpg",
    "preco": 2999.99,
    "categoria": "Smartphones",
    "marca": "Samsung"
  },
  {
    "codigo": 2,
    "nome": "Notebook Dell Inspiron 15",
    "descricao": "Notebook com processador Intel Core i5, 8GB de RAM e 512GB de SSD",
    "url_img": "https://example.com/dell_inspiron.jpg",
    "preco": 3499.99,
    "categoria": "Notebooks",
    "marca": "Dell"
  },
  {
    "codigo": 3,
    "nome": "Fone de Ouvido JBL",
    "descricao": "Fone de ouvido Bluetooth com som de alta qualidade e bateria de até 20 horas",
    "url_img": "https://example.com/jbl_fone.jpg",
    "preco": 499.99,
    "categoria": "Acessórios",
    "marca": "JBL"
  },
  {
    "codigo": 4,
    "nome": "Câmera Canon EOS 90D",
    "descricao": "Câmera DSLR com lente 18-55mm e capacidade de gravação 4K",
    "url_img": "https://example.com/canon_eos.jpg",
    "preco": 8499.99,
    "categoria": "Câmeras",
    "marca": "Canon"
  },
  {
    "codigo": 5,
    "nome": "Smart TV LG OLED 55\"",
    "descricao": "TV OLED com qualidade 4K, som Dolby Atmos e inteligência artificial",
    "url_img": "https://example.com/lg_oled.jpg",
    "preco": 6999.99,
    "categoria": "TVs",
    "marca": "LG"
  },
  {
    "codigo": 6,
    "nome": "Smartphone iPhone 13",
    "descricao": "iPhone 13 com chip A15 Bionic, 128GB de armazenamento e tela Super Retina XDR",
    "url_img": "https://example.com/iphone_13.jpg",
    "preco": 5499.99,
    "categoria": "Smartphones",
    "marca": "Apple"
  },
  {
    "codigo": 7,
    "nome": "Caixa de Som Bluetooth Bose",
    "descricao": "Caixa de som compacta com som potente e resistência à água",
    "url_img": "https://example.com/bose_caixa.jpg",
    "preco": 1299.99,
    "categoria": "Acessórios",
    "marca": "Bose"
  },
  {
    "codigo": 8,
    "nome": "Roteador TP-Link AC750",
    "descricao": "Roteador Wi-Fi de 750Mbps com tecnologia de dupla banda",
    "url_img": "https://example.com/tp_link_roteador.jpg",
    "preco": 199.99,
    "categoria": "Redes",
    "marca": "TP-Link"
  },
  {
    "codigo": 9,
    "nome": "Console PlayStation 5",
    "descricao": "Console de videogame de última geração com controle DualSense e gráficos em 4K",
    "url_img": "https://example.com/ps5.jpg",
    "preco": 4999.99,
    "categoria": "Videogames",
    "marca": "Sony"
  },
  {
    "codigo": 10,
    "nome": "Tablet Samsung Galaxy Tab S7",
    "descricao": "Tablet com tela de 11\" e suporte a S Pen para escrita precisa",
    "url_img": "https://example.com/galaxy_tab_s7.jpg",
    "preco": 2999.99,
    "categoria": "Tablets",
    "marca": "Samsung"
  },
  {
    "codigo": 11,
    "nome": "Monitor LG 24MP59G",
    "descricao": "Monitor Full HD com tela IPS e taxa de atualização de 75Hz",
    "url_img": "https://example.com/lg_monitor.jpg",
    "preco": 899.99,
    "categoria": "Monitores",
    "marca": "LG"
  },
  {
    "codigo": 12,
    "nome": "Mouse Logitech G502",
    "descricao": "Mouse gamer com 11 botões programáveis e sensor de 16000 DPI",
    "url_img": "https://example.com/logitech_mouse.jpg",
    "preco": 299.99,
    "categoria": "Acessórios",
    "marca": "Logitech"
  },
  {
    "codigo": 13,
    "nome": "Teclado Mecânico Corsair K95",
    "descricao": "Teclado mecânico com RGB personalizável e switches Cherry MX",
    "url_img": "https://example.com/corsair_teclado.jpg",
    "preco": 799.99,
    "categoria": "Acessórios",
    "marca": "Corsair"
  },
  {
    "codigo": 14,
    "nome": "Câmera GoPro Hero 9",
    "descricao": "Câmera de ação 5K com estabilização de imagem e resistente à água",
    "url_img": "https://example.com/gopro_hero9.jpg",
    "preco": 2499.99,
    "categoria": "Câmeras",
    "marca": "GoPro"
  },
  {
    "codigo": 15,
    "nome": "Impressora HP DeskJet 2774",
    "descricao": "Impressora multifuncional com Wi-Fi integrado e impressão de qualidade",
    "url_img": "https://example.com/hp_deskjet.jpg",
    "preco": 399.99,
    "categoria": "Impressoras",
    "marca": "HP"
  },
  {
    "codigo": 16,
    "nome": "Smartphone Xiaomi Mi 11",
    "descricao": "Smartphone com processador Snapdragon 888 e câmera de 108MP",
    "url_img": "https://example.com/mi11.jpg",
    "preco": 2999.99,
    "categoria": "Smartphones",
    "marca": "Xiaomi"
  },
  {
    "codigo": 17,
    "nome": "Fone de Ouvido Sony WH-1000XM4",
    "descricao": "Fone de ouvido com cancelamento de ruído ativo e som de alta fidelidade",
    "url_img": "https://example.com/sony_wh1000.jpg",
    "preco": 1899.99,
    "categoria": "Acessórios",
    "marca": "Sony"
  },
  {
    "codigo": 18,
    "nome": "Smartwatch Garmin Forerunner 945",
    "descricao": "Smartwatch com GPS, monitoramento de saúde e resistência à água",
    "url_img": "https://example.com/garmin_forerunner.jpg",
    "preco": 2699.99,
    "categoria": "Wearables",
    "marca": "Garmin"
  },
  {
    "codigo": 19,
    "nome": "Console Xbox Series X",
    "descricao": "Console com 1TB de armazenamento, gráficos em 4K e suporte a ray tracing",
    "url_img": "https://example.com/xbox_series_x.jpg",
    "preco": 4999.99,
    "categoria": "Videogames",
    "marca": "Microsoft"
  },
  {
    "codigo": 20,
    "nome": "Fone de Ouvido Beats Studio3",
    "descricao": "Fone de ouvido com cancelamento de ruído e som de alta definição",
    "url_img": "https://example.com/beats_studio3.jpg",
    "preco": 1699.99,
    "categoria": "Acessórios",
    "marca": "Beats"
  },
  {
    "codigo": 21,
    "nome": "Caixa de Som Bluetooth Sony SRS-XB43",
    "descricao": "Caixa de som Bluetooth com extra bass e resistência à água e poeira",
    "url_img": "https://example.com/sony_xb43.jpg",
    "preco": 1499.99,
    "categoria": "Acessórios",
    "marca": "Sony"
  },
  {
    "codigo": 22,
    "nome": "Smartphone Motorola Edge 20",
    "descricao": "Smartphone com tela OLED de 6.7\" e câmera de 108MP",
    "url_img": "https://example.com/motorola_edge20.jpg",
    "preco": 3499.99,
    "categoria": "Smartphones",
    "marca": "Motorola"
  },
  {
    "codigo": 23,
    "nome": "Tablet Apple iPad Air 2020",
    "descricao": "Tablet com chip A14 Bionic e tela Liquid Retina",
    "url_img": "https://example.com/ipad_air.jpg",
    "preco": 4199.99,
    "categoria": "Tablets",
    "marca": "Apple"
  },
  {
    "codigo": 24,
    "nome": "Notebook Asus ROG Zephyrus G14",
    "descricao": "Notebook gamer com processador Ryzen 9, 16GB de RAM e RTX 3060",
    "url_img": "https://example.com/rog_zephyrus.jpg",
    "preco": 9999.99,
    "categoria": "Notebooks",
    "marca": "Asus"
  },
  {
    "codigo": 25,
    "nome": "Câmera Nikon D3500",
    "descricao": "Câmera DSLR com lente 18-55mm e ideal para iniciantes",
    "url_img": "https://example.com/nikon_d3500.jpg",
    "preco": 2999.99,
    "categoria": "Câmeras",
    "marca": "Nikon"
  },
  {
    "codigo": 26,
    "nome": "Fone de Ouvido Sennheiser Momentum 3",
    "descricao": "Fone de ouvido com cancelamento de ruído e som de alta qualidade",
    "url_img": "https://example.com/sennheiser_momentum.jpg",
    "preco": 2499.99,
    "categoria": "Acessórios",
    "marca": "Sennheiser"
  },
  {
    "codigo": 27,
    "nome": "Impressora Epson EcoTank L3150",
    "descricao": "Impressora multifuncional com tanque de tinta e impressão econômica",
    "url_img": "https://example.com/epson_l3150.jpg",
    "preco": 799.99,
    "categoria": "Impressoras",
    "marca": "Epson"
  },
  {
    "codigo": 28,
    "nome": "Smartwatch Apple Watch Series 7",
    "descricao": "Smartwatch com tela maior, monitoramento de saúde e resistência à água",
    "url_img": "https://example.com/apple_watch7.jpg",
    "preco": 3999.99,
    "categoria": "Wearables",
    "marca": "Apple"
  },
  {
    "codigo": 29,
    "nome": "Roteador ASUS RT-AC68U",
    "descricao": "Roteador Wi-Fi de alta performance com velocidade de até 1900 Mbps",
    "url_img": "https://example.com/asus_rt_ac68u.jpg",
    "preco": 399.99,
    "categoria": "Redes",
    "marca": "Asus"
  },
  {
    "codigo": 30,
    "nome": "Monitor Samsung Odyssey G7",
    "descricao": "Monitor curvo QHD de 240Hz, ideal para gamers",
    "url_img": "https://example.com/odyssey_g7.jpg",
    "preco": 3299.99,
    "categoria": "Monitores",
    "marca": "Samsung"
  },
  {
    "codigo": 31,
    "nome": "Console Nintendo Switch",
    "descricao": "Console híbrido que pode ser usado como portátil ou em dock",
    "url_img": "https://example.com/nintendo_switch.jpg",
    "preco": 2999.99,
    "categoria": "Videogames",
    "marca": "Nintendo"
  },
  {
    "codigo": 32,
    "nome": "Smartphone Realme 8 Pro",
    "descricao": "Smartphone com 108MP de câmera e tela Super AMOLED de 6.4\"",
    "url_img": "https://example.com/realme8pro.jpg",
    "preco": 2499.99,
    "categoria": "Smartphones",
    "marca": "Realme"
  },
  {
    "codigo": 33,
    "nome": "Fone de Ouvido Bose QuietComfort 35 II",
    "descricao": "Fone com cancelamento de ruído, som cristalino e conforto superior",
    "url_img": "https://example.com/bose_quietcomfort.jpg",
    "preco": 1799.99,
    "categoria": "Acessórios",
    "marca": "Bose"
  },
  {
    "codigo": 34,
    "nome": "Smartphone OnePlus 9 Pro",
    "descricao": "Smartphone com câmera Hasselblad, Snapdragon 888 e tela Fluid AMOLED",
    "url_img": "https://example.com/oneplus_9pro.jpg",
    "preco": 4399.99,
    "categoria": "Smartphones",
    "marca": "OnePlus"
  },
  {
    "codigo": 35,
    "nome": "Caixa de Som Ultimate Ears Boom 3",
    "descricao": "Caixa de som portátil com som 360 graus e resistência à água",
    "url_img": "https://example.com/ue_boom3.jpg",
    "preco": 899.99,
    "categoria": "Acessórios",
    "marca": "Ultimate Ears"
  },
  {
    "codigo": 36,
    "nome": "Câmera Sony Alpha A7 III",
    "descricao": "Câmera mirrorless full-frame com 24.2MP e vídeo 4K",
    "url_img": "https://example.com/sony_alpha_a7.jpg",
    "preco": 9999.99,
    "categoria": "Câmeras",
    "marca": "Sony"
  },
  {
    "codigo": 37,
    "nome": "Smartphone Oppo Find X3 Pro",
    "descricao": "Smartphone com processador Snapdragon 888 e tela AMOLED de 6.7\"",
    "url_img": "https://example.com/oppo_findx3.jpg",
    "preco": 4999.99,
    "categoria": "Smartphones",
    "marca": "Oppo"
  },
  {
    "codigo": 38,
    "nome": "Console Nintendo Switch Lite",
    "descricao": "Console portátil Nintendo Switch Lite com tela de 5.5\"",
    "url_img": "https://example.com/nintendo_switch_lite.jpg",
    "preco": 1999.99,
    "categoria": "Videogames",
    "marca": "Nintendo"
  },
  {
    "codigo": 39,
    "nome": "Monitor Acer Predator X34",
    "descricao": "Monitor ultrawide com resolução UWQHD, 100Hz e tecnologia G-Sync",
    "url_img": "https://example.com/acer_predator.jpg",
    "preco": 4999.99,
    "categoria": "Monitores",
    "marca": "Acer"
  },
  {
    "codigo": 40,
    "nome": "Smartphone Vivo V21",
    "descricao": "Smartphone com câmera de 44MP, 8GB de RAM e 128GB de armazenamento",
    "url_img": "https://example.com/vivo_v21.jpg",
    "preco": 2499.99,
    "categoria": "Smartphones",
    "marca": "Vivo"
  },
  {
    "codigo": 41,
    "nome": "Teclado Logitech G Pro X",
    "descricao": "Teclado mecânico modular com switches HOT-SWAPPABLE e RGB",
    "url_img": "https://example.com/logitech_gprox.jpg",
    "preco": 1299.99,
    "categoria": "Acessórios",
    "marca": "Logitech"
  },
  {
    "codigo": 42,
    "nome": "Fone de Ouvido HyperX Cloud II",
    "descricao": "Fone de ouvido gamer com som surround 7.1 e microfone destacável",
    "url_img": "https://example.com/hyperx_cloudii.jpg",
    "preco": 599.99,
    "categoria": "Acessórios",
    "marca": "HyperX"
  },
  {
    "codigo": 43,
    "nome": "Console Sega Genesis Mini",
    "descricao": "Versão mini do clássico console Sega Genesis com 42 jogos inclusos",
    "url_img": "https://example.com/sega_genesis_mini.jpg",
    "preco": 499.99,
    "categoria": "Videogames",
    "marca": "Sega"
  },
  {
    "codigo": 44,
    "nome": "Smartphone Lenovo Legion Phone Duel",
    "descricao": "Smartphone gamer com processador Snapdragon 865+, tela de 144Hz e 16GB de RAM",
    "url_img": "https://example.com/lenovo_legion_phone.jpg",
    "preco": 4999.99,
    "categoria": "Smartphones",
    "marca": "Lenovo"
  },
  {
    "codigo": 45,
    "nome": "Roteador Netgear Nighthawk X6",
    "descricao": "Roteador Wi-Fi tri-banda com velocidade de até 3200 Mbps",
    "url_img": "https://example.com/netgear_nighthawk.jpg",
    "preco": 799.99,
    "categoria": "Redes",
    "marca": "Netgear"
  },
  {
    "codigo": 46,
    "nome": "Câmera Sony RX100 VII",
    "descricao": "Câmera compacta premium com 20.1MP e capacidade de gravação em 4K",
    "url_img": "https://example.com/sony_rx100.jpg",
    "preco": 7499.99,
    "categoria": "Câmeras",
    "marca": "Sony"
  },
  {
    "codigo": 47,
    "nome": "Smartphone Motorola Edge 20 Pro",
    "descricao": "Smartphone com tela OLED de 6.7\" e Snapdragon 888",
    "url_img": "https://example.com/motorola_edge20pro.jpg",
    "preco": 4399.99,
    "categoria": "Smartphones",
    "marca": "Motorola"
  },
  {
    "codigo": 48,
    "nome": "Console PlayStation 4 Pro",
    "descricao": "Console PS4 Pro com 1TB de armazenamento e gráficos 4K",
    "url_img": "https://example.com/ps4_pro.jpg",
    "preco": 2999.99,
    "categoria": "Videogames",
    "marca": "Sony"
  },
  {
    "codigo": 49,
    "nome": "Teclado Razer Huntsman Mini",
    "descricao": "Teclado mecânico compacto com switches opto-mecânicos e RGB",
    "url_img": "https://example.com/razer_huntsman_mini.jpg",
    "preco": 899.99,
    "categoria": "Acessórios",
    "marca": "Razer"
  },
  {
    "codigo": 50,
    "nome": "Câmera Panasonic Lumix G7",
    "descricao": "Câmera mirrorless com gravação 4K e lente 14-42mm",
    "url_img": "https://example.com/panasonic_lumix.jpg",
    "preco": 3999.99,
    "categoria": "Câmeras",
    "marca": "Panasonic"
  }
]


export {lista_de_produtos}