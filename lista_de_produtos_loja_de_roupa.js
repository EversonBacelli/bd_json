const lista_de_produtos = [
    {
      "codigo": "001",
      "nome": "Camiseta Oversized Preta",
      "descricao": "Camiseta oversized na cor preta, ideal para um visual urbano e confortável.",
      "url_img": "https://exemplo.com/imagens/camiseta_oversized_preta.jpg",
      "preco": 59.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "002",
      "nome": "Moletom Cinza Estonado",
      "descricao": "Moletom com capuz, tecido felpado e estampa frontal estilosa.",
      "url_img": "https://exemplo.com/imagens/moletom_cinza_estonado.jpg",
      "preco": 119.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "003",
      "nome": "Calça Cargo Verde Militar",
      "descricao": "Calça cargo com bolsos laterais e ajuste na barra, ideal para o dia a dia.",
      "url_img": "https://exemplo.com/imagens/calca_cargo_verde.jpg",
      "preco": 139.99,
      "categoria": "Roupas"
    },
    {
      "codigo": "004",
      "nome": "Regata Cavada Branca",
      "descricao": "Regata estilo musculação com corte cavado e tecido leve.",
      "url_img": "https://exemplo.com/imagens/regata_branca.jpg",
      "preco": 39.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "005",
      "nome": "Shorts Tactel Preto",
      "descricao": "Shorts de tactel com bolso e cordão, ideal para treino ou lazer.",
      "url_img": "https://exemplo.com/imagens/shorts_tactel_preto.jpg",
      "preco": 49.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "006",
      "nome": "Jaqueta Corta Vento Azul Marinho",
      "descricao": "Jaqueta leve, resistente ao vento e à chuva com fechamento em zíper.",
      "url_img": "https://exemplo.com/imagens/corta_vento_azul.jpg",
      "preco": 159.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "007",
      "nome": "Camisa Social Slim Branca",
      "descricao": "Camisa social com modelagem slim e tecido leve.",
      "url_img": "https://exemplo.com/imagens/camisa_social_branca.jpg",
      "preco": 89.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "008",
      "nome": "Blusa Cropped Preta",
      "descricao": "Blusa cropped básica em tecido canelado.",
      "url_img": "https://exemplo.com/imagens/cropped_preta.jpg",
      "preco": 39.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "009",
      "nome": "Saia Jeans Destroyed",
      "descricao": "Saia jeans com lavagem clara e detalhes destroyed.",
      "url_img": "https://exemplo.com/imagens/saia_jeans.jpg",
      "preco": 79.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "010",
      "nome": "Macacão Pantacourt Preto",
      "descricao": "Macacão pantacourt em tecido leve, com alças reguláveis.",
      "url_img": "https://exemplo.com/imagens/macacao_preto.jpg",
      "preco": 149.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "011",
      "nome": "Bermuda Jeans Masculina",
      "descricao": "Bermuda jeans básica com lavagem escura.",
      "url_img": "https://exemplo.com/imagens/bermuda_jeans.jpg",
      "preco": 69.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "012",
      "nome": "Top Esportivo Rosa",
      "descricao": "Top de alta sustentação com alças largas e bojo removível.",
      "url_img": "https://exemplo.com/imagens/top_esportivo_rosa.jpg",
      "preco": 49.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "013",
      "nome": "Legging Preta de Compressão",
      "descricao": "Legging com compressão ideal para treinos intensos.",
      "url_img": "https://exemplo.com/imagens/legging_compressao.jpg",
      "preco": 89.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "014",
      "nome": "Blazer Masculino Slim Fit",
      "descricao": "Blazer com modelagem ajustada, ideal para eventos formais.",
      "url_img": "https://exemplo.com/imagens/blazer_slim.jpg",
      "preco": 199.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "015",
      "nome": "Vestido Tubinho Vermelho",
      "descricao": "Vestido justo com tecido elástico e gola canoa.",
      "url_img": "https://exemplo.com/imagens/vestido_vermelho.jpg",
      "preco": 129.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "016",
      "nome": "Camisa Polo Azul Royal",
      "descricao": "Camisa polo em algodão com gola tradicional.",
      "url_img": "https://exemplo.com/imagens/polo_azul.jpg",
      "preco": 69.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "017",
      "nome": "Calça Jeans Skinny Feminina",
      "descricao": "Calça skinny com elastano e cintura média.",
      "url_img": "https://exemplo.com/imagens/jeans_skinny_fem.jpg",
      "preco": 109.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "018",
      "nome": "Cropped Canelado Branco",
      "descricao": "Cropped básico em ribana, ideal para dias quentes.",
      "url_img": "https://exemplo.com/imagens/cropped_branco.jpg",
      "preco": 34.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "019",
      "nome": "Camisa Estampada Tropical",
      "descricao": "Camisa de viscose com estampa floral vibrante.",
      "url_img": "https://exemplo.com/imagens/camisa_tropical.jpg",
      "preco": 89.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "020",
      "nome": "Jaqueta Jeans Oversized",
      "descricao": "Jaqueta jeans larga com lavagem vintage.",
      "url_img": "https://exemplo.com/imagens/jaqueta_jeans.jpg",
      "preco": 179.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "021",
      "nome": "Conjunto Moletom Unissex",
      "descricao": "Conjunto confortável com moletom e calça.",
      "url_img": "https://exemplo.com/imagens/conjunto_moletom.jpg",
      "preco": 189.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "022",
      "nome": "Calça Jogger Preta",
      "descricao": "Calça jogger com elástico na cintura e punhos.",
      "url_img": "https://exemplo.com/imagens/jogger_preta.jpg",
      "preco": 99.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "023",
      "nome": "Vestido Longo Estampado",
      "descricao": "Vestido com estampa floral e alças finas.",
      "url_img": "https://exemplo.com/imagens/vestido_longo.jpg",
      "preco": 139.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "024",
      "nome": "Camiseta Tie Dye Colorida",
      "descricao": "Camiseta em algodão com tingimento tie dye.",
      "url_img": "https://exemplo.com/imagens/tie_dye.jpg",
      "preco": 54.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "025",
      "nome": "Short Jeans Cintura Alta",
      "descricao": "Short com barra desfiada e cintura alta.",
      "url_img": "https://exemplo.com/imagens/short_jeans_alta.jpg",
      "preco": 64.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "026",
      "nome": "Terno Slim Preto Masculino",
      "descricao": "Terno com corte slim, elegante e moderno.",
      "url_img": "https://exemplo.com/imagens/terno_preto.jpg",
      "preco": 349.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "027",
      "nome": "Camisa Xadrez Vermelha",
      "descricao": "Camisa casual com estampa xadrez em flanela.",
      "url_img": "https://exemplo.com/imagens/xadrez_vermelha.jpg",
      "preco": 79.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "028",
      "nome": "Biquíni Cortininha Liso",
      "descricao": "Biquíni cortininha com amarração no pescoço.",
      "url_img": "https://exemplo.com/imagens/biquini_liso.jpg",
      "preco": 49.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "029",
      "nome": "Maiô Cavado Preto",
      "descricao": "Maiô com decote profundo e costas abertas.",
      "url_img": "https://exemplo.com/imagens/maio_preto.jpg",
      "preco": 89.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "030",
      "nome": "Camisa Básica Gola V",
      "descricao": "Camisa básica em algodão com gola em V.",
      "url_img": "https://exemplo.com/imagens/camisa_gola_v.jpg",
      "preco": 44.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "031",
      "nome": "Calça Legging Estampada",
      "descricao": "Legging com estampa moderna e tecido elástico.",
      "url_img": "https://exemplo.com/imagens/legging_estampada.jpg",
      "preco": 79.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "032",
      "nome": "Camisa Manga Longa Branca",
      "descricao": "Camisa social manga longa em algodão leve.",
      "url_img": "https://exemplo.com/imagens/camisa_manga_longa.jpg",
      "preco": 89.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "033",
      "nome": "Conjunto Fitness Feminino",
      "descricao": "Top + legging de alta performance para treinos intensos.",
      "url_img": "https://exemplo.com/imagens/conjunto_fitness.jpg",
      "preco": 159.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "034",
      "nome": "Jaqueta Puffer Masculina",
      "descricao": "Jaqueta acolchoada com capuz removível.",
      "url_img": "https://exemplo.com/imagens/jaqueta_puffer.jpg",
      "preco": 229.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "035",
      "nome": "Saia Longa Plissada",
      "descricao": "Saia longa com pregas e elástico na cintura.",
      "url_img": "https://exemplo.com/imagens/saia_plissada.jpg",
      "preco": 99.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "036",
      "nome": "Camiseta Básica Branca",
      "descricao": "Camiseta 100% algodão, confortável e versátil.",
      "url_img": "https://exemplo.com/imagens/camiseta_basica.jpg",
      "preco": 29.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "037",
      "nome": "Cardigan Listrado Feminino",
      "descricao": "Cardigan leve com listras horizontais.",
      "url_img": "https://exemplo.com/imagens/cardigan_listrado.jpg",
      "preco": 109.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "038",
      "nome": "Short Saia Esportivo",
      "descricao": "Short com sobreposição de saia para treinos femininos.",
      "url_img": "https://exemplo.com/imagens/short_saia.jpg",
      "preco": 59.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "039",
      "nome": "Pijama de Algodão Masculino",
      "descricao": "Conjunto de pijama com camiseta e calça.",
      "url_img": "https://exemplo.com/imagens/pijama_masculino.jpg",
      "preco": 74.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "040",
      "nome": "Kimono Estampado Feminino",
      "descricao": "Kimono leve com estampa floral e mangas amplas.",
      "url_img": "https://exemplo.com/imagens/kimono_feminino.jpg",
      "preco": 94.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "041",
      "nome": "Moletom Cropped Feminino",
      "descricao": "Moletom com modelagem cropped e estampa frontal.",
      "url_img": "https://exemplo.com/imagens/moletom_cropped.jpg",
      "preco": 89.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "042",
      "nome": "Calça de Alfaiataria Masculina",
      "descricao": "Calça social com corte reto e acabamento elegante.",
      "url_img": "https://exemplo.com/imagens/alfaiataria_masc.jpg",
      "preco": 139.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "043",
      "nome": "Top Canelado com Bojo",
      "descricao": "Top estilo cropped com tecido canelado e bojo embutido.",
      "url_img": "https://exemplo.com/imagens/top_canelado.jpg",
      "preco": 44.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "044",
      "nome": "Camisa Jeans Masculina",
      "descricao": "Camisa em jeans com botões frontais e bolso no peito.",
      "url_img": "https://exemplo.com/imagens/camisa_jeans.jpg",
      "preco": 99.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "045",
      "nome": "Vestido Chemise Feminino",
      "descricao": "Vestido estilo camisa, ideal para look casual chic.",
      "url_img": "https://exemplo.com/imagens/chemise.jpg",
      "preco": 124.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "046",
      "nome": "Bermuda de Moletom Masculina",
      "descricao": "Bermuda casual com cordão ajustável e bolsos laterais.",
      "url_img": "https://exemplo.com/imagens/bermuda_moletom.jpg",
      "preco": 59.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "047",
      "nome": "Cropped de Tricô Colorido",
      "descricao": "Cropped em tricô com listras coloridas.",
      "url_img": "https://exemplo.com/imagens/cropped_trico.jpg",
      "preco": 69.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "048",
      "nome": "Colete Jeans Desfiado",
      "descricao": "Colete jeans com gola e acabamento destroyed.",
      "url_img": "https://exemplo.com/imagens/colete_jeans.jpg",
      "preco": 84.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "049",
      "nome": "Body com Decote V",
      "descricao": "Body com manga longa e decote profundo.",
      "url_img": "https://exemplo.com/imagens/body_decote.jpg",
      "preco": 74.90,
      "categoria": "Roupas"
    },
    {
      "codigo": "050",
      "nome": "Poncho com Franjas",
      "descricao": "Poncho de lã sintética com detalhe de franjas.",
      "url_img": "https://exemplo.com/imagens/poncho_franjas.jpg",
      "preco": 119.90,
      "categoria": "Roupas"
    }

]  
  
export{lista_de_produtos}