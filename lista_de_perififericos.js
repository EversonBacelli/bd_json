const lista_de_produtos = [
        {
            "Codigo": "001",
            "Nome": "Teclado Viper",
            "Preco": 259.99,
            "Descricao": "Teclado da marca Viper, modelo 80%",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "002",
            "Nome": "Mouse Razor Claw",
            "Preco": 189.90,
            "Descricao": "Mouse gamer com 16000 DPI, RGB personalizável",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "003",
            "Nome": "Monitor HawkVision 24''",
            "Preco": 799.00,
            "Descricao": "Monitor Full HD de 24 polegadas, 144Hz",
            "Categoria": "Monitores"
        },
        {
            "Codigo": "004",
            "Nome": "Placa de Vídeo RTX 4060 8GB",
            "Preco": 2399.00,
            "Descricao": "Placa de vídeo NVIDIA GeForce RTX 4060 com 8GB GDDR6",
            "Categoria": "Placas de Vídeo"
        },
        {
            "Codigo": "005",
            "Nome": "Memória RAM 16GB DDR4 3200MHz",
            "Preco": 329.99,
            "Descricao": "Memória RAM DDR4 com 16GB e frequência de 3200MHz",
            "Categoria": "Memórias"
        },
        {
            "Codigo": "006",
            "Nome": "HD 1TB Seagate",
            "Preco": 249.90,
            "Descricao": "HD interno Seagate de 1TB, 7200 RPM",
            "Categoria": "Armazenamento"
        },
        {
            "Codigo": "007",
            "Nome": "SSD NVMe 512GB",
            "Preco": 379.90,
            "Descricao": "SSD NVMe Gen3 com 512GB de armazenamento",
            "Categoria": "Armazenamento"
        },
        {
            "Codigo": "008",
            "Nome": "Fonte 650W 80 Plus Bronze",
            "Preco": 399.99,
            "Descricao": "Fonte ATX 650W com certificação 80 Plus Bronze",
            "Categoria": "Fontes"
        },
        {
            "Codigo": "009",
            "Nome": "Gabinete Mid Tower Glass RGB",
            "Preco": 449.00,
            "Descricao": "Gabinete com lateral de vidro temperado e RGB frontal",
            "Categoria": "Gabinetes"
        },
        {
            "Codigo": "010",
            "Nome": "Cooler Master Air RGB",
            "Preco": 219.00,
            "Descricao": "Cooler a ar com iluminação RGB e alto desempenho térmico",
            "Categoria": "Coolers"
        },
        {
            "Codigo": "011",
            "Nome": "Mousepad Gamer XL",
            "Preco": 89.90,
            "Descricao": "Mousepad estendido para teclado e mouse, superfície speed",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "012",
            "Nome": "Placa-mãe B550M Pro",
            "Preco": 749.99,
            "Descricao": "Placa-mãe B550M compatível com Ryzen 3ª e 5ª geração",
            "Categoria": "Placas-mãe"
        },
        {
            "Codigo": "013",
            "Nome": "Processador Ryzen 5 5600",
            "Preco": 999.00,
            "Descricao": "Processador AMD Ryzen 5 5600 com 6 núcleos e 12 threads",
            "Categoria": "Processadores"
        },
        {
            "Codigo": "014",
            "Nome": "Webcam Full HD 1080p",
            "Preco": 199.00,
            "Descricao": "Webcam com resolução 1080p para videoconferências",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "015",
            "Nome": "Headset Gamer SonicBass",
            "Preco": 289.00,
            "Descricao": "Headset com microfone removível e som surround",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "016",
            "Nome": "Cabo HDMI 2.1 2m",
            "Preco": 49.99,
            "Descricao": "Cabo HDMI 2.1 com suporte a 4K/120Hz e 8K/60Hz",
            "Categoria": "Cabos"
        },
        {
            "Codigo": "017",
            "Nome": "Adaptador Wi-Fi USB 1200Mbps",
            "Preco": 89.00,
            "Descricao": "Adaptador Wi-Fi dual band com 1200Mbps",
            "Categoria": "Redes"
        },
        {
            "Codigo": "018",
            "Nome": "Switch Gigabit 8 portas",
            "Preco": 199.99,
            "Descricao": "Switch de rede com 8 portas Gigabit Ethernet",
            "Categoria": "Redes"
        },
        {
            "Codigo": "019",
            "Nome": "Leitor de Cartões USB 3.0",
            "Preco": 59.90,
            "Descricao": "Leitor de cartões SD, microSD e outros via USB 3.0",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "020",
            "Nome": "Estabilizador 600VA",
            "Preco": 219.00,
            "Descricao": "Estabilizador de tensão 600VA para computadores",
            "Categoria": "Energia"
        },
        {
            "Codigo": "021",
            "Nome": "No-break 1200VA",
            "Preco": 799.00,
            "Descricao": "No-break com 1200VA de potência e autonomia de 30min",
            "Categoria": "Energia"
        },
        {
            "Codigo": "022",
            "Nome": "Teclado Mecânico Redragon",
            "Preco": 289.90,
            "Descricao": "Teclado mecânico com switches vermelhos e RGB",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "023",
            "Nome": "Mouse Vertical Ergonômico",
            "Preco": 139.00,
            "Descricao": "Mouse com design ergonômico vertical para conforto prolongado",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "024",
            "Nome": "Monitor UltraWide 29''",
            "Preco": 1299.00,
            "Descricao": "Monitor UltraWide com resolução 2560x1080",
            "Categoria": "Monitores"
        },
        {
            "Codigo": "025",
            "Nome": "SSD SATA 1TB",
            "Preco": 449.00,
            "Descricao": "SSD SATA III com 1TB de capacidade e alta velocidade",
            "Categoria": "Armazenamento"
        },
        {
            "Codigo": "026",
            "Nome": "Placa de Vídeo RX 6600 8GB",
            "Preco": 1999.00,
            "Descricao": "Placa de vídeo AMD Radeon RX 6600 com 8GB GDDR6",
            "Categoria": "Placas de Vídeo"
        },
        {
            "Codigo": "027",
            "Nome": "Water Cooler 240mm",
            "Preco": 499.99,
            "Descricao": "Water Cooler com radiador duplo e RGB sincronizável",
            "Categoria": "Coolers"
        },
        {
            "Codigo": "028",
            "Nome": "Memória RAM 8GB DDR4 2666MHz",
            "Preco": 189.99,
            "Descricao": "Módulo de memória RAM com 8GB de capacidade",
            "Categoria": "Memórias"
        },
        {
            "Codigo": "029",
            "Nome": "Controle Bluetooth Gamepad",
            "Preco": 199.90,
            "Descricao": "Controle sem fio compatível com PC, Android e iOS",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "030",
            "Nome": "Cadeira Gamer Shadow",
            "Preco": 1199.00,
            "Descricao": "Cadeira ergonômica com design gamer e apoio de lombar",
            "Categoria": "Mobília"
        },
        {
            "Codigo": "031",
            "Nome": "Hub USB 4 portas 3.0",
            "Preco": 79.90,
            "Descricao": "Hub com 4 portas USB 3.0 para alta velocidade de transferência",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "032",
            "Nome": "Pendrive 128GB USB 3.1",
            "Preco": 79.99,
            "Descricao": "Pendrive com alta taxa de leitura e escrita",
            "Categoria": "Armazenamento"
        },
        {
            "Codigo": "033",
            "Nome": "Controladora ARGB",
            "Preco": 49.90,
            "Descricao": "Controladora para fitas e fans ARGB 5V",
            "Categoria": "Acessorios"
        },
        {
            "Codigo": "034",
            "Nome": "Fan 120mm RGB",
            "Preco": 59.90,
            "Descricao": "Cooler de gabinete com iluminação RGB",
            "Categoria": "Coolers"
        },
        {
            "Codigo": "035",
            "Nome": "Filtro de linha 5 tomadas",
            "Preco": 39.90,
            "Descricao": "Filtro de linha com proteção contra surtos",
            "Categoria": "Energia"
        },
        {
            "Codigo": "036",
            "Nome": "Placa de som USB 7.1",
            "Preco": 99.00,
            "Descricao": "Placa de som externa com suporte a áudio 7.1",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "037",
            "Nome": "Dock Station para SSD",
            "Preco": 139.90,
            "Descricao": "Dock para conectar SSDs e HDs via USB 3.0",
            "Categoria": "Acessorios"
        },
        {
            "Codigo": "038",
            "Nome": "Switch HDMI 3x1",
            "Preco": 59.99,
            "Descricao": "Comutador HDMI com 3 entradas e 1 saída",
            "Categoria": "Acessorios"
        },
        {
            "Codigo": "039",
            "Nome": "Limpador de Contato Spray 300ml",
            "Preco": 29.90,
            "Descricao": "Spray para limpeza de componentes eletrônicos",
            "Categoria": "Manutenção"
        },
        {
            "Codigo": "040",
            "Nome": "Adaptador USB para PS2",
            "Preco": 19.99,
            "Descricao": "Permite conectar teclados/mouses PS2 via USB",
            "Categoria": "Acessorios"
        },
        {
            "Codigo": "041",
            "Nome": "Mini teclado sem fio com touch",
            "Preco": 119.90,
            "Descricao": "Teclado compacto com touchpad integrado, wireless",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "042",
            "Nome": "Webcam 4K Ultra HD",
            "Preco": 499.90,
            "Descricao": "Webcam com resolução 4K e microfone embutido",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "043",
            "Nome": "Mouse Gamer sem fio RGB",
            "Preco": 219.90,
            "Descricao": "Mouse com sensor de alta precisão e RGB customizável",
            "Categoria": "Perifericos"
        },
        {
            "Codigo": "044",
            "Nome": "Extensor USB 10 metros",
            "Preco": 69.90,
            "Descricao": "Cabo extensor USB com amplificador de sinal",
            "Categoria": "Cabos"
        },
        {
            "Codigo": "045",
            "Nome": "Controlador de ventoinhas PWM",
            "Preco": 89.00,
            "Descricao": "Controlador para até 5 ventoinhas PWM 4 pinos",
            "Categoria": "Acessorios"
        },
        {
            "Codigo": "046",
            "Nome": "Thermal Paste Pro 5g",
            "Preco": 39.90,
            "Descricao": "Pasta térmica com alta condutividade",
            "Categoria": "Manutenção"
        },
        {
            "Codigo": "047",
            "Nome": "Limpador de tela antirresíduo",
            "Preco": 24.90,
            "Descricao": "Spray com pano de microfibra para limpeza de monitores",
            "Categoria": "Manutenção"
        },
        {
            "Codigo": "048",
            "Nome": "Organizador de cabos em velcro",
            "Preco": 14.90,
            "Descricao": "Kit com 10 fitas de velcro para gerenciamento de cabos",
            "Categoria": "Acessorios"
        },
        {
            "Codigo": "049",
            "Nome": "Tampa de slot PCI",
            "Preco": 9.99,
            "Descricao": "Tampa metálica para slots PCI não utilizados",
            "Categoria": "Acessorios"
        },
        {
            "Codigo": "050",
            "Nome": "Riser PCI-E x16",
            "Preco": 129.90,
            "Descricao": "Extensor PCI Express x16 com cabo flexível",
            "Categoria": "Placas-mãe"
        }
]
export {lista_de_produtos}