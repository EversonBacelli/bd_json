const produtosFarmacia = [
  {
    codigo: "1",
    nome: "Dipirona Sódica 500mg",
    url: "https://example.com/dipirona-sodica-500mg",
    img: "https://example.com/images/dipirona-sodica-500mg.jpg",
    descricao: "Descrição genérica para Dipirona Sódica 500mg.",
    preco: 5.99,
    categoria: "Medicamento"
  },
  {
    codigo: "2",
    nome: "Paracetamol 750mg",
    url: "https://example.com/paracetamol-750mg",
    img: "https://example.com/images/paracetamol-750mg.jpg",
    descricao: "Descrição genérica para Paracetamol 750mg.",
    preco: 6.45,
    categoria: "Medicamento"
  },
  {
    codigo: "3",
    nome: "Ibuprofeno 400mg",
    url: "https://example.com/ibuprofeno-400mg",
    img: "https://example.com/images/ibuprofeno-400mg.jpg",
    descricao: "Descrição genérica para Ibuprofeno 400mg.",
    preco: 7.30,
    categoria: "Medicamento"
  },
  {
    codigo: "4",
    nome: "Vitamina C Efervescente",
    url: "https://example.com/vitamina-c-efervescente",
    img: "https://example.com/images/vitamina-c-efervescente.jpg",
    descricao: "Descrição genérica para Vitamina C Efervescente.",
    preco: 9.90,
    categoria: "Suplementos"
  },
  {
    codigo: "5",
    nome: "Multivitamínico Centrum",
    url: "https://example.com/multivitaminico-centrum",
    img: "https://example.com/images/multivitaminico-centrum.jpg",
    descricao: "Descrição genérica para Multivitamínico Centrum.",
    preco: 39.90,
    categoria: "Suplementos"
  },
  {
    codigo: "6",
    nome: "Protetor Solar Neutrogena FPS 50",
    url: "https://example.com/protetor-solar-neutrogena-fps-50",
    img: "https://example.com/images/protetor-solar-neutrogena-fps-50.jpg",
    descricao: "Descrição genérica para Protetor Solar Neutrogena FPS 50.",
    preco: 59.90,
    categoria: "Cuidados com a Pele"
  },
  {
    codigo: "7",
    nome: "Sabonete Líquido Dove",
    url: "https://example.com/sabonete-liquido-dove",
    img: "https://example.com/images/sabonete-liquido-dove.jpg",
    descricao: "Descrição genérica para Sabonete Líquido Dove.",
    preco: 14.90,
    categoria: "Higiene"
  },
  {
    codigo: "8",
    nome: "Shampoo Anticaspa Head & Shoulders",
    url: "https://example.com/shampoo-anticaspa-head-shoulders",
    img: "https://example.com/images/shampoo-anticaspa-head-shoulders.jpg",
    descricao: "Descrição genérica para Shampoo Anticaspa Head & Shoulders.",
    preco: 19.90,
    categoria: "Higiene"
  },
  {
    codigo: "9",
    nome: "Condicionador Pantene 400ml",
    url: "https://example.com/condicionador-pantene-400ml",
    img: "https://example.com/images/condicionador-pantene-400ml.jpg",
    descricao: "Descrição genérica para Condicionador Pantene 400ml.",
    preco: 17.99,
    categoria: "Higiene"
  },
  {
    codigo: "10",
    nome: "Desodorante Rexona Aerosol",
    url: "https://example.com/desodorante-rexona-aerosol",
    img: "https://example.com/images/desodorante-rexona-aerosol.jpg",
    descricao: "Descrição genérica para Desodorante Rexona Aerosol.",
    preco: 11.50,
    categoria: "Higiene"
  },
  {
    codigo: "11",
    nome: "Creme Dental Colgate Total 12",
    url: "https://example.com/creme-dental-colgate-total-12",
    img: "https://example.com/images/creme-dental-colgate-total-12.jpg",
    descricao: "Descrição genérica para Creme Dental Colgate Total 12.",
    preco: 6.90,
    categoria: "Higiene Bucal"
  },
  {
    codigo: "12",
    nome: "Escova de Dente Oral-B Indicator",
    url: "https://example.com/escova-de-dente-oral-b-indicator",
    img: "https://example.com/images/escova-de-dente-oral-b-indicator.jpg",
    descricao: "Descrição genérica para Escova de Dente Oral-B Indicator.",
    preco: 8.50,
    categoria: "Higiene Bucal"
  },
  {
    codigo: "13",
    nome: "Fio Dental Oral-B Essential",
    url: "https://example.com/fio-dental-oral-b-essential",
    img: "https://example.com/images/fio-dental-oral-b-essential.jpg",
    descricao: "Descrição genérica para Fio Dental Oral-B Essential.",
    preco: 4.99,
    categoria: "Higiene Bucal"
  },
  {
    codigo: "14",
    nome: "Álcool em Gel 70%",
    url: "https://example.com/alcool-em-gel-70",
    img: "https://example.com/images/alcool-em-gel-70.jpg",
    descricao: "Descrição genérica para Álcool em Gel 70%.",
    preco: 7.90,
    categoria: "Higiene"
  },
  {
    codigo: "15",
    nome: "Esparadrapo Impermeável",
    url: "https://example.com/esparadrapo-impermeavel",
    img: "https://example.com/images/esparadrapo-impermeavel.jpg",
    descricao: "Descrição genérica para Esparadrapo Impermeável.",
    preco: 4.99,
    categoria: "Primeiros Socorros"
  },
  {
    codigo: "16",
    nome: "Termômetro Digital Infravermelho",
    url: "https://example.com/termometro-digital-infravermelho",
    img: "https://example.com/images/termometro-digital-infravermelho.jpg",
    descricao: "Descrição genérica para Termômetro Digital Infravermelho.",
    preco: 89.00,
    categoria: "Aparelhos"
  },
  {
    codigo: "17",
    nome: "Aparelho de Pressão Digital",
    url: "https://example.com/aparelho-de-pressao-digital",
    img: "https://example.com/images/aparelho-de-pressao-digital.jpg",
    descricao: "Descrição genérica para Aparelho de Pressão Digital.",
    preco: 119.90,
    categoria: "Aparelhos"
  },
  {
    codigo: "18",
    nome: "Pomada Nebacetin",
    url: "https://example.com/pomada-nebacetin",
    img: "https://example.com/images/pomada-nebacetin.jpg",
    descricao: "Descrição genérica para Pomada Nebacetin.",
    preco: 12.99,
    categoria: "Primeiros Socorros"
  },
  {
    codigo: "19",
    nome: "Curativo Band-Aid",
    url: "https://example.com/curativo-band-aid",
    img: "https://example.com/images/curativo-band-aid.jpg",
    descricao: "Descrição genérica para Curativo Band-Aid.",
    preco: 6.75,
    categoria: "Primeiros Socorros"
  },
  {
    codigo: "20",
    nome: "Luvas Descartáveis Vinil",
    url: "https://example.com/luvas-descartaveis-vinil",
    img: "https://example.com/images/luvas-descartaveis-vinil.jpg",
    descricao: "Descrição genérica para Luvas Descartáveis Vinil.",
    preco: 16.50,
    categoria: "Primeiros Socorros"
  },
  {
    codigo: "21",
    nome: "Glicose 50%",
    url: "https://example.com/glicose-50",
    img: "https://example.com/images/glicose-50.jpg",
    descricao: "Descrição genérica para Glicose 50%.",
    preco: 3.80,
    categoria: "Medicamento"
  },
  {
    codigo: "22",
    nome: "Spray Antisséptico Nexcare",
    url: "https://example.com/spray-antisseptico-nexcare",
    img: "https://example.com/images/spray-antisseptico-nexcare.jpg",
    descricao: "Descrição genérica para Spray Antisséptico Nexcare.",
    preco: 14.50,
    categoria: "Primeiros Socorros"
  },
  {
    codigo: "23",
    nome: "Inalador Nebulizador G-Tech",
    url: "https://example.com/inalador-gtech",
    img: "https://example.com/images/inalador-gtech.jpg",
    descricao: "Descrição genérica para Inalador Nebulizador G-Tech.",
    preco: 129.90,
    categoria: "Aparelhos"
  },
  {
    codigo: "24",
    nome: "Creme para Assaduras Bepantol Baby",
    url: "https://example.com/bepantol-baby",
    img: "https://example.com/images/bepantol-baby.jpg",
    descricao: "Descrição genérica para Creme para Assaduras Bepantol Baby.",
    preco: 22.99,
    categoria: "Infantil"
  },
  {
    codigo: "25",
    nome: "Fralda Pampers Confort Sec G",
    url: "https://example.com/fralda-pampers-g",
    img: "https://example.com/images/fralda-pampers-g.jpg",
    descricao: "Descrição genérica para Fralda Pampers Confort Sec G.",
    preco: 59.90,
    categoria: "Infantil"
  },
  {
    codigo: "26",
    nome: "Leite NAN Comfor 800g",
    url: "https://example.com/leite-nan-comfor",
    img: "https://example.com/images/leite-nan-comfor.jpg",
    descricao: "Descrição genérica para Leite NAN Comfor 800g.",
    preco: 69.90,
    categoria: "Infantil"
  },
  {
    codigo: "27",
    nome: "Lenço Umedecido Huggies",
    url: "https://example.com/lenco-umedecido-huggies",
    img: "https://example.com/images/lenco-umedecido-huggies.jpg",
    descricao: "Descrição genérica para Lenço Umedecido Huggies.",
    preco: 11.99,
    categoria: "Infantil"
  },
  {
    codigo: "28",
    nome: "Sabonete Granado Bebê",
    url: "https://example.com/sabonete-granado-bebe",
    img: "https://example.com/images/sabonete-granado-bebe.jpg",
    descricao: "Descrição genérica para Sabonete Granado Bebê.",
    preco: 4.50,
    categoria: "Infantil"
  },
  {
    codigo: "29",
    nome: "Água Oxigenada 10 Volumes",
    url: "https://example.com/agua-oxigenada-10v",
    img: "https://example.com/images/agua-oxigenada-10v.jpg",
    descricao: "Descrição genérica para Água Oxigenada 10 Volumes.",
    preco: 3.25,
    categoria: "Higiene"
  },
  {
    codigo: "30",
    nome: "Sabonete Antisséptico Protex",
    url: "https://example.com/sabonete-antisseptico-protex",
    img: "https://example.com/images/sabonete-antisseptico-protex.jpg",
    descricao: "Descrição genérica para Sabonete Antisséptico Protex.",
    preco: 3.99,
    categoria: "Higiene"
  },
  {
    codigo: "31",
    nome: "Repelente Off! Family",
    url: "https://example.com/repelente-off-family",
    img: "https://example.com/images/repelente-off-family.jpg",
    descricao: "Descrição genérica para Repelente Off! Family.",
    preco: 17.90,
    categoria: "Cuidados com a Pele"
  },
  {
    codigo: "32",
    nome: "Gel Antisséptico Asseptgel",
    url: "https://example.com/gel-antisseptico-asseptgel",
    img: "https://example.com/images/gel-antisseptico-asseptgel.jpg",
    descricao: "Descrição genérica para Gel Antisséptico Asseptgel.",
    preco: 6.99,
    categoria: "Higiene"
  },
  {
    codigo: "33",
    nome: "Lenço de Papel Kleenex",
    url: "https://example.com/lenco-de-papel-kleenex",
    img: "https://example.com/images/lenco-de-papel-kleenex.jpg",
    descricao: "Descrição genérica para Lenço de Papel Kleenex.",
    preco: 3.49,
    categoria: "Higiene"
  },
  {
    codigo: "34",
    nome: "Colírio Moura Brasil",
    url: "https://example.com/colirio-moura-brasil",
    img: "https://example.com/images/colirio-moura-brasil.jpg",
    descricao: "Descrição genérica para Colírio Moura Brasil.",
    preco: 12.50,
    categoria: "Medicamento"
  },
  {
    codigo: "35",
    nome: "Antiácido Eno",
    url: "https://example.com/antiacido-eno",
    img: "https://example.com/images/antiacido-eno.jpg",
    descricao: "Descrição genérica para Antiácido Eno.",
    preco: 5.50,
    categoria: "Medicamento"
  },
  {
    codigo: "36",
    nome: "Dorflex Comprimidos",
    url: "https://example.com/dorflex-comprimidos",
    img: "https://example.com/images/dorflex-comprimidos.jpg",
    descricao: "Descrição genérica para Dorflex Comprimidos.",
    preco: 7.99,
    categoria: "Medicamento"
  },
  {
    codigo: "37",
    nome: "Omeprazol 20mg",
    url: "https://example.com/omeprazol-20mg",
    img: "https://example.com/images/omeprazol-20mg.jpg",
    descricao: "Descrição genérica para Omeprazol 20mg.",
    preco: 10.99,
    categoria: "Medicamento"
  },
  {
    codigo: "38",
    nome: "Loratadina 10mg",
    url: "https://example.com/loratadina-10mg",
    img: "https://example.com/images/loratadina-10mg.jpg",
    descricao: "Descrição genérica para Loratadina 10mg.",
    preco: 8.90,
    categoria: "Medicamento"
  },
  {
    codigo: "39",
    nome: "Cloridrato de Sertralina 50mg",
    url: "https://example.com/sertralina-50mg",
    img: "https://example.com/images/sertralina-50mg.jpg",
    descricao: "Descrição genérica para Cloridrato de Sertralina 50mg.",
    preco: 21.00,
    categoria: "Medicamento"
  },
  {
    codigo: "40",
    nome: "Creme Hidratante Nivea Soft",
    url: "https://example.com/creme-nivea-soft",
    img: "https://example.com/images/creme-nivea-soft.jpg",
    descricao: "Descrição genérica para Creme Hidratante Nivea Soft.",
    preco: 13.90,
    categoria: "Cuidados com a Pele"
  },
  {
    codigo: "41",
    nome: "Creme para os Pés Baruel",
    url: "https://example.com/creme-pes-baruel",
    img: "https://example.com/images/creme-pes-baruel.jpg",
    descricao: "Descrição genérica para Creme para os Pés Baruel.",
    preco: 11.49,
    categoria: "Cuidados com a Pele"
  },
  {
    codigo: "42",
    nome: "Máscara Cirúrgica Descartável",
    url: "https://example.com/mascara-cirurgica",
    img: "https://example.com/images/mascara-cirurgica.jpg",
    descricao: "Descrição genérica para Máscara Cirúrgica Descartável.",
    preco: 18.00,
    categoria: "Higiene"
  },
  {
    codigo: "43",
    nome: "Chá de Camomila Leão",
    url: "https://example.com/cha-camomila-leao",
    img: "https://example.com/images/cha-camomila-leao.jpg",
    descricao: "Descrição genérica para Chá de Camomila Leão.",
    preco: 4.60,
    categoria: "Natural"
  },
  {
    codigo: "44",
    nome: "Pastilha Vick Mel",
    url: "https://example.com/pastilha-vick-mel",
    img: "https://example.com/images/pastilha-vick-mel.jpg",
    descricao: "Descrição genérica para Pastilha Vick Mel.",
    preco: 5.90,
    categoria: "Medicamento"
  },
  {
    codigo: "45",
    nome: "Soro Fisiológico 100ml",
    url: "https://example.com/soro-fisiologico-100ml",
    img: "https://example.com/images/soro-fisiologico-100ml.jpg",
    descricao: "Descrição genérica para Soro Fisiológico 100ml.",
    preco: 2.99,
    categoria: "Medicamento"
  },
  {
    codigo: "46",
    nome: "Clorexidina Spray",
    url: "https://example.com/clorexidina-spray",
    img: "https://example.com/images/clorexidina-spray.jpg",
    descricao: "Descrição genérica para Clorexidina Spray.",
    preco: 9.99,
    categoria: "Primeiros Socorros"
  },
  {
    codigo: "47",
    nome: "Óleo de Amêndoas Paixão",
    url: "https://example.com/oleo-amendoas-paixao",
    img: "https://example.com/images/oleo-amendoas-paixao.jpg",
    descricao: "Descrição genérica para Óleo de Amêndoas Paixão.",
    preco: 12.90,
    categoria: "Cuidados com a Pele"
  },
  {
    codigo: "48",
    nome: "Esmalte Risqué Nude",
    url: "https://example.com/esmalte-risque-nude",
    img: "https://example.com/images/esmalte-risque-nude.jpg",
    descricao: "Descrição genérica para Esmalte Risqué Nude.",
    preco: 4.99,
    categoria: "Beleza"
  },
  {
    codigo: "49",
    nome: "Removedor de Esmalte Farmax",
    url: "https://example.com/removedor-esmalte-farmax",
    img: "https://example.com/images/removedor-esmalte-farmax.jpg",
    descricao: "Descrição genérica para Removedor de Esmalte Farmax.",
    preco: 5.50,
    categoria: "Beleza"
  },
  {
    codigo: "50",
    nome: "Protetor Labial Nivea",
    url: "https://example.com/protetor-labial-nivea",
    img: "https://example.com/images/protetor-labial-nivea.jpg",
    descricao: "Descrição genérica para Protetor Labial Nivea.",
    preco: 9.90,
    categoria: "Cuidados com a Pele"
  }
];

export {produtosFarmacia};

