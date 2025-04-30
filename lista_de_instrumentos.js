const produtos_instrumentos = [
    {
      "codigo": "1",
      "nome": "Guitarra Elétrica Fender Stratocaster",
      "preco": "2500.00",
      "img_url": "https://dcdn-us.mitiendanube.com/stores/001/088/275/products/fender-blue-11-d8f387acf6471f426215762635201162-1024-1024.jpg",
      "descricao": "Guitarra elétrica de alta qualidade, corpo de alder, braço de maple",
      "categoria": "cordas"
    },
    {
      "codigo": "2",
      "nome": "Bateria Pearl Masterworks",
      "preco": "5000.00",
      "img_url": "https://pearldrumbrasil.com.br/wp-content/uploads/2019/04/Untitled-1.fw_.png",
      "descricao": "Bateria profissional, feita de madeira de alta qualidade",
      "categoria": "percussão"
    },
    {
      "codigo": "3",
      "nome": "Piano Digital Yamaha P-125",
      "preco": "3000.00",
      "img_url": "https://cdn.awsli.com.br/1874/1874008/produto/266033059f2f973798b.jpg",
      "descricao": "Piano digital com 88 teclas pesadas, som de alta qualidade",
      "categoria": "teclados"
    },
    {
      "codigo": "4",
      "nome": "Violão Acústico Taylor GS Mini",
      "preco": "1500.00",
      "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_gO2GpqKT9CbSzv7ay2jnbbwoCv3Ph__wjQ&s",
      "descricao": "Violão acústico compacto, fácil de tocar",
      "categoria": "cordas"
    },
    {
      "codigo": "5",
      "nome": "Microfone Shure SM57",
      "preco": "500.00",
      "img_url": "https://intermezzo.vteximg.com.br/arquivos/ids/162243-1000-1000/microfone-shure-sm57-lc-intermezzo-spina.png?v=638212361805570000",
      "descricao": "Microfone dinâmico, ideal para gravações e apresentações",
      "categoria": "acessórios"
    },
    {
      "codigo": "6",
      "nome": "Baixo Elétrico Fender Precision",
      "preco": "2000.00",
      "img_url": "https://images.tcdn.com.br/img/editor/up/414764/7355Cnz.jpg",
      "descricao": "Baixo elétrico de alta qualidade, corpo de alder, braço de maple",
      "categoria": "cordas"
    },
    {
      "codigo": "7",
      "nome": "Teclado Sintetizador Korg Minilogue",
      "preco": "1200.00",
      "img_url": "https://cdn.awsli.com.br/2462/2462538/arquivos/korg_10270404_1.png",
      "descricao": "Teclado sintetizador compacto, ideal para produção musical",
      "categoria": "teclados"
    },
    {
      "codigo": "8",
      "nome": "Cabo de Instrumento Mogami",
      "preco": "50.00",
      "img_url": "https://images.tcdn.com.br/img/img_prod/553565/cabo_p_instrumentos_1_5m_mogami_mcp_gt_05_coreplus_5301_1_e2451e34adcacc40d30c61646ce9764d.jpg",
      "descricao": "Cabo de instrumento de alta qualidade, blindado",
      "categoria": "acessórios"
    },
    {
      "codigo": "9",
      "nome": "Guitarra Clássica Cordoba C3M",
      "preco": "800.00",
      "img_url": "https://www.pmtonline.co.uk/media/catalog/product/cache/a1b28cf8fc4652b664c189b33cb20963/9/6/96628-162997-cordoba-c3m-classical-guitar-1.jpg",
      "descricao": "Guitarra clássica, corpo de cedro, braço de mogno",
      "categoria": "cordas"
    },
    {
      "codigo": "10",
      "nome": "Bateria Eletrônica Roland TD-1DMK",
      "preco": "2000.00",
      "img_url": "https://m.media-amazon.com/images/I/51oQwmSAILL.jpg",
      "descricao": "Bateria eletrônica, ideal para prática e estudo",
      "categoria": "percussão"
    },
    {
      "codigo": "11",
      "nome": "Violino Stradivarius",
      "preco": "10000.00",
      "img_url": "https://images.tcdn.com.br/img/img_prod/958595/violino_4_4_alemao_copia_antonius_stradivarius_profissional_ajustado_3953_1_cea94ba6274bffa1732626822f789ce5.jpg",
      "descricao": "Violino de alta qualidade, feito à mão",
      "categoria": "cordas"
    },
    {
      "codigo": "12",
      "nome": "Piano de Cauda Steinway & Sons",
      "preco": "50000.00",
      "img_url": "https://br.steinway.com/.imaging/mte/steinway-us-theme/Medium-4-3/dam/Special-Pianos/CrownJewel/Grands/SWS_18064_NewYork_CrownJewels_Kewazinga-Bubinga_Final.jpg/jcr:content/SWS_18064_NewYork_CrownJewels_Kewazinga%20Bubinga_Final.jpg",
      "descricao": "Piano de cauda de alta qualidade, feito à mão",
      "categoria": "teclados"
    },
    {
      "codigo": "13",
      "nome": "Guitarra Elétrica Gibson Les Paul",
      "preco": "2800.00",
      "img_url": "https://serenata.vteximg.com.br/arquivos/ids/3114406-1000-1000/GUIT-GIBSON-LP-TRIB-IT_IMG2.jpg?v=638657360415600000",
      "descricao": "Guitarra elétrica de alta qualidade, corpo de mogno, braço de mogno",
      "categoria": "cordas"
    },
    {
      "codigo": "14",
      "nome": "Bateria Acústica Yamaha Stage Custom",
      "preco": "3500.00",
      "img_url": "https://br.yamaha.com/pt/files/gallery_03_578231f3fc2a2774b34351d23e357ba7.jpg?impolicy=resize&imwid=735&imhei=735?imbypass=on",
      "descricao": "percussão"
    },
    {
        "codigo": "15",
        "nome": "Violão Acústico Fender CD-60S",
        "preco": "600.00",
        "img_url": "https://serenata.vteximg.com.br/arquivos/ids/3111526-1000-1000/VIOLAO-FENDER-CD60S-MH_IMG2.jpg?v=638588299539030000",
        "descricao": "Violão acústico, corpo de spruce, braço de mahogany",
        "categoria": "cordas"
      },
      {
        "codigo": "16",
        "nome": "Piano Digital Korg B1",
        "preco": "1800.00",
        "img_url": "https://musictirso.com/wp-content/uploads/2021/01/B2a.jpg",
        "descricao": "Piano digital com 88 teclas, som de alta qualidade",
        "categoria": "teclados"
      },
      {
        "codigo": "17",
        "nome": "Guitarra Elétrica Ibanez RG",
        "preco": "2200.00",
        "img_url": "https://akusticamusical.fbitsstatic.net/img/p/guitarra-ibanez-grg131dx-bkf-rg-gio-series-superstrato-black-flat-c-escala-escura-e-escudo-vermelho-308844/521321.jpg?w=900&h=900&v=202502260622&qs=ignore",
        "descricao": "Guitarra elétrica de alta qualidade, corpo de poplar, braço de maple",
        "categoria": "cordas"
      },
      {
        "codigo": "18",
        "nome": "Bateria Eletrônica Alesis Nitro Mesh",
        "preco": "2500.00",
        "img_url": "https://cdn.awsli.com.br/800x800/1920/1920376/produto/281064057/9560-1-glwcw5itv5.jpg",
        "descricao": "Bateria eletrônica, ideal para prática e estudo",
        "categoria": "percussão"
      },
      {
        "codigo": "19",
        "nome": "Microfone Rode NT1-A",
        "preco": "800.00",
        "img_url": "https://m.media-amazon.com/images/I/61LQiAP-xZL._AC_UF894,1000_QL80_.jpg",
        "descricao": "Microfone condensador, ideal para gravações de estúdio",
        "categoria": "acessórios"
      },
      {
        "codigo": "20",
        "nome": "Cabo de Instrumento Planet Waves",
        "preco": "30.00",
        "img_url": "https://static.mundomax.com.br/produtos/65069/1200/1.jpg",
        "descricao": "Cabo de instrumento de alta qualidade, blindado",
        "categoria": "acessórios"
      },
      {
        "codigo": "21",
        "nome": "Guitarra Clássica Yamaha CG122MS",
        "preco": "1000.00",
        "img_url": "https://images.tcdn.com.br/img/img_prod/757946/90_violao_classico_acustico_nylon_yamaha_cg122ms_natural_6563_1_ae09fb1db4f0cd7964543366f5e765a4.png",
        "descricao": "Guitarra clássica, corpo de cedro, braço de mahogany",
        "categoria": "cordas"
      },
      {
        "codigo": "22",
        "nome": "Piano Digital Casio Privia PX-870",
        "preco": "2500.00",
        "img_url": "https://www.casio.com/content/dam/casio/product-info/locales/us/en/emi/product/P/PX/PX8/PX-870BK/assets/PX-870BK_Seq3.jpg.transform/main-visual-pc/image.jpg",
        "descricao": "Piano digital com 88 teclas pesadas, som de alta qualidade",
        "categoria": "teclados"
      },
      {
        "codigo": "23",
        "nome": "Baixo Elétrico Music Man Stingray",
        "preco": "3000.00",
        "img_url": "https://static.mundomax.com.br/produtos/55738/550/1.webp",
        "descricao": "Baixo elétrico de alta qualidade, corpo de ash, braço de maple",
        "categoria": "cordas"
      },
      {
        "codigo": "24",
        "nome": "Bateria Acústica Pearl Export",
        "preco": "2800.00",
        "img_url": "https://lojaopenstage.com.br/upload/service/3E6udA5f6cXOyH2HzFyTrjcArTFb4wu0rhj1HRug.png",
        "descricao": "Bateria acústica, feita de madeira de alta qualidade",
        "categoria": "percussão"
      },
      {
        "codigo": "25",
        "nome": "Violão Acústico Epiphone DR-100",
        "preco": "400.00",
        "img_url": "https://www.lojaopenstage.com.br/upload/service/hPIFxW0nSvWTItF8GVzV9J0iJtw5VC3oo4BoBDEE.png",
        "descricao": "Violão acústico, corpo de spruce, braço de mahogany",
        "categoria": "cordas"
      },
      {
        "codigo": "26",
        "nome": "Guitarra Elétrica Fender Telecaster",
        "preco": "2000.00",
        "img_url": "https://cdn.iset.io/assets/53334/produtos/20076/462df3cb15c2ba84920e65b69c6f9db965e22869618a1.png",
        "descricao": "Guitarra elétrica de alta qualidade, corpo de alder, braço de maple",
        "categoria": "cordas"
      },
      {
        "codigo": "27",
        "nome": "Piano Digital Roland FP-10",
        "preco": "1500.00",
        "img_url": "https://roland.vtexassets.com/arquivos/ids/159472/FP-10-0-.jpg?v=638496497109830000",
        "descricao": "Piano digital com 88 teclas, som de alta qualidade",
        "categoria": "teclados"
      },
      {
        "codigo": "28",
        "nome": "Bateria Eletrônica Yamaha DTX532K",
        "preco": "2200.00",
        "img_url": "https://http2.mlstatic.com/D_NQ_NP_968190-MLB32791290537_112019-O.webp",
        "descricao": "Bateria eletrônica, ideal para prática e estudo",
        "categoria": "percussão"
      },
      {
        "codigo": "29",
        "nome": "Guitarra Clássica Taylor GS Mini-e",
        "preco": "1200.00",
        "img_url": "https://akusticamusical.fbitsstatic.net/img/p/violao-taylor-gs-mini-e-rosewood-eletrico-acustico-c-hard-bag-81185/268679.jpg?w=900&h=900&v=202502261125&qs=ignore",
        "descricao": "Guitarra clássica, corpo de spruce, braço de mahogany",
        "categoria": "cordas"
      },
      {
        "codigo": "30",
        "nome": "Piano Digital Kawai ES110",
        "preco": "1800.00",
        "img_url": "https://www.kawai-global.com/mgr/wp-content/uploads/2016/12/img_es110_slide_pc_3_982_logo.jpg",
        "descricao": "Piano digital com 88 teclas, som de alta qualidade",
        "categoria": "teclados"
      },
      {
        "codigo": "31",
        "nome": "Baixo Elétrico Fender Jazz Bass",
        "preco": "2500.00",
        "img_url": "https://m.media-amazon.com/images/I/61Jl7ax8JjL.jpg",
        "descricao": "Baixo elétrico de alta qualidade, corpo de alder, braço de maple",
        "categoria": "cordas"
      },
      {
        "codigo": "32",
        "nome": "Microfone Shure SM58",
        "preco": "400.00",
        "img_url": "https://cdn.awsli.com.br/2609/2609787/produto/2206791971cb4bda58c.jpg",
        "descricao": "Microfone dinâmico, ideal para apresentações ao vivo",
        "categoria": "acessórios"
      },
      {
        "codigo": "33",
        "nome": "Cabo de Instrumento Mogami Gold Studio",
        "preco": "80.00",
        "img_url": "https://americanas.vtexassets.com/arquivos/ids/1915563/7514328483_1_xlarge.jpg?v=638751000468770000",
        "descricao": "Cabo de instrumento de alta qualidade, blindado",
        "categoria": "acessórios"
      },
      {
        "codigo": "34",
        "nome": "Guitarra Elétrica Gibson SG",
        "preco": "2800.00",
        "img_url": "https://http2.mlstatic.com/D_NQ_NP_905147-MLA48762786052_012022-O.webp",
        "descricao": "Guitarra elétrica de alta qualidade, corpo de mogno, braço de mogno",
        "categoria": "cordas"
      },
      {
        "codigo": "35",
        "nome": "Bateria Acústica Ludwig Classic Maple",
        "preco": "3500.00",
        "img_url": "https://http2.mlstatic.com/D_NQ_NP_798727-MLB26210489284_102017-O-bateria-ludwig-classic-maple-champagne-sparkle-jazz-set-com.webp",
        "descricao": "Bateria acústica, feita de madeira de alta qualidade",
        "categoria": "percussão"
      },
      {
        "codigo": "36",
        "nome": "Piano Digital Yamaha P-515",
        "preco": "3000.00",
        "img_url": "https://br.yamaha.com/pt/files/detail05_9afb90cefb7423af68ba713d3cf497ca.jpg?impolicy=resize&imwid=735&imhei=735?imbypass=on",
        "descricao": "Piano digital com 88 teclas pesadas, som de alta qualidade",
        "categoria": "teclados"
      },
      {
        "codigo": "37",
        "nome": "Violão Acústico Taylor 214ce",
        "preco": "1800.00",
        "img_url": "https://harmoniamusical.com.br/media/catalog/product/cache/7c65d8a16c1a9fa15447e0ab5eeb833b/v/i/viol_o_taylor_gs_mini-e_bass_1.jpg",
        "descricao": "Violão acústico, corpo de spruce, braço de mahogany",
        "categoria": "cordas"
      },
      {
        "codigo": "38",
        "nome": "Guitarra Clássica Cordoba C5M",
        "preco": "1000.00",
        "img_url": "https://images.musicstore.de/images/1280/cordoba-c5-ce_1_GIT0057692-000.jpg",
        "descricao": "Guitarra clássica, corpo de cedro, braço de mogno",
        "categoria": "cordas"
      },
      {
        "codigo": "39",
        "nome": "Bateria Eletrônica Roland TD-17KVX",
        "preco": "2800.00",
        "img_url": "https://m.media-amazon.com/images/I/81ZZxvx5zOL._AC_UF350,350_QL80_.jpg",
        "descricao": "Bateria eletrônica, ideal para prática e estudo",
        "categoria": "percussão"
      },
      {
        "codigo": "40",
        "nome": "Piano Digital Casio Privia PX-870",
        "preco": "2500.00",
        "img_url": "https://www.casio.com/content/dam/casio/product-info/locales/us/en/emi/product/P/PX/PX8/PX-870BK/assets/PX-870BK_Seq3.jpg.transform/main-visual-pc/image.jpg",
        "descricao": "teclados"
      },
      {
        "codigo": "41",
        "nome": "Guitarra Elétrica Fender Jaguar",
        "preco": "2200.00",
        "img_url": "https://http2.mlstatic.com/D_722376-MLB82248318818_022025-C.jpg",
        "descricao": "Guitarra elétrica de alta qualidade, corpo de alder, braço de maple",
        "categoria": "cordas"
      },
      {
        "codigo": "42",
        "nome": "Baixo Elétrico Music Man Stingray 5",
        "preco": "3200.00",
        "img_url": "https://m.media-amazon.com/images/I/71t4JBxfJuL._AC_UF894,1000_QL80_.jpg",
        "descricao": "Baixo elétrico de alta qualidade, corpo de ash, braço de maple",
        "categoria": "cordas"
      },
      {
        "codigo": "43",
        "nome": "Piano Digital Korg B1",
        "preco": "1500.00",
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4yMXtzKf6BNS6kBhNvJ8pTZ9t1Z-ZHdQGHw&s",
        "descricao": "Piano digital com 88 teclas, som de alta qualidade",
        "categoria": "teclados"
      },
      {
        "codigo": "44",
        "nome": "Bateria Acústica Pearl Reference",
        "preco": "4000.00",
        "img_url": "https://cdnbatera.bateraclube.com.br/files/122/bateria-pearl-reference-pure-glacier-blue-sparkle-2210121416-shell-pack-thin-shells-254202218301.jpg",
        "descricao": "Bateria acústica, feita de madeira de alta qualidade",
        "categoria": "percussão"
      },
      {
        "codigo": "45",
        "nome": "Violão Acústico Epiphone DR-500MCE",
        "preco": "600.00",
        "img_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1eCgkQupm8Cj67fIPtUtFUeBTL9SV2hG6A&s",
        "descricao": "Violão acústico, corpo de spruce, braço de mahogany",
        "categoria": "cordas"
      },
      {
        "codigo": "46",
        "nome": "Guitarra Clássica Yamaha CG122MS",
        "preco": "1000.00",
        "img_url": "https://images.tcdn.com.br/img/img_prod/757946/90_violao_classico_acustico_nylon_yamaha_cg122ms_natural_6563_1_ae09fb1db4f0cd7964543366f5e765a4.png",
        "descricao": "Guitarra clássica, corpo de cedro, braço de mahogany",
        "categoria": "cordas"
      },
      {
        "codigo": "47",
        "nome": "Microfone Rode NT-USB",
        "preco": "600.00",
        "img_url": "https://cdn.awsli.com.br/61/61454/produto/294065892/captura-de-tela-2024-08-15-145417-cpvm5swtkn.jpg",
        "descricao": "Microfone condensador, ideal para gravações de estúdio",
        "categoria": "acessórios"
      },
      {
        "codigo": "48",
        "nome": "Cabo de Instrumento Planet Waves PW-G",
        "preco": "50.00",
        "img_url": "https://cdn.awsli.com.br/1920/1920376/produto/111814853bc79a3a4e5.jpg",
        "descricao": "Cabo de instrumento de alta qualidade, blindado",
        "categoria": "acessórios"
      },
      {
        "codigo": "49",
        "nome": "Bateria Eletrônica Alesis Nitro MK2",
        "preco": "2000.00",
        "img_url": "https://images.tcdn.com.br/img/img_prod/414764/90_kit_bateria_eletronica_alesis_nitro_max_acessorios_11587_1_0c05dea4d67bc48ab00c374c9de24ad5.jpg",
        "descricao": "Bateria eletrônica, ideal para prática e estudo",
        "categoria": "percussão"
      },
      {
        "codigo": "50",
        "nome": "Piano Digital Roland FP-30",
        "preco": "2000.00",
        "img_url": "https://www.prostarsom.com.br/image/cache/catalog/www.prostarsom.com.br/1453240429000_1217629-1450x1450.jpg",
        "descricao": "Piano digital com 88 teclas, som de alta qualidade",
        "categoria": "teclados"
      }
    ];

    export {produtos_instrumentos}