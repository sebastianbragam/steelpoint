
const products = [

    {
        id: 1,
        name: 'Placa Durlock Estándar 9,5mm',
        price: 11151,
        category: 'placas',
        img: './src/assets/images/products/placa-st.png',
        stock: 20,
        description: 'La placa ideal para renovar o construir paredes, cielorrasos y revestimientos interiores en ambientes secos, como estar/comedor, dormitorios, locales comerciales e inclusive en cielorrasos de baños.'
    },

    {
        id: 2,
        name: 'Placa Durlock Resistente a la Humedad',
        price: 18663,
        category: 'placas',
        img: './src/assets/images/products/placa-rh.png',
        stock: 7,
        description: 'La solución para aquellos ambientes que por su uso tienen mayor grado de humedad, tales como baños, vestuarios, etc.'
    },

    {
        id: 3,
        name: 'Placa Durlock Resistente al Fuego',
        price: 16942,
        category: 'placas',
        img: './src/assets/images/products/placa-rf.png',
        stock: 4,
        description: 'La solución para paredes, cielorrasos y revestimientos en ambientes con requisitos de alta resistencia al fuego tales como cocinas, salidas de emergencia, escuelas, universidades.La Placa Durlock® Estandar es la placa ideal para renovar o construir paredes, cielorrasos y revestimientos interiores en ambientes secos, como estar/comedor, dormitorios, locales comerciales e inclusive en cielorrasos de baños.'
    },

    {
        id: 4,
        name: 'Placa Durlock Anti-humedad',
        price: 20679,
        category: 'placas',
        img: './src/assets/images/products/placa-ah.png',
        stock: 12,
        description: 'Un revestimiento exclusivo que permite recuperar la superficie afectada por la humedad mientras la pared respira a través de la cámara de aire, sin que se generen hongos y bacterias. Es la opción ideal para volver a disfrutar de ambientes limpios, saludables y estéticos con el máximo confort que solo Durlock® te puede brindar.'
    },

    {
        id: 5,
        name: 'Solera 35mm',
        price: 2591,
        category: 'perfiles',
        img: './src/assets/images/products/solera-35.png',
        stock: 30,
        description: 'Las soleras se utilizan como guías superior e inferior de paneles y en el perímetro de los cielorrasos monolíticos, para fijar a los montantes en su posición.'
    },

    {
        id: 6,
        name: 'Solera 70mm',
        price: 3568,
        category: 'perfiles',
        img: './src/assets/images/products/solera-70.png',
        stock: 25,
        description: 'Las soleras se utilizan como guías superior e inferior de paneles y en el perímetro de los cielorrasos monolíticos, para fijar a los montantes en su posición.'
    },

    {
        id: 7,
        name: 'Montante 35mm',
        price: 3002,
        category: 'perfiles',
        img: './src/assets/images/products/montante-35.png',
        stock: 30,
        description: 'Los montantes se utilizan en tabiques como elemento vertical al cual se fijan las placas de yeso y como viga maestra en cielorrasos monolíticos.'
    },

    {
        id: 8,
        name: 'Montante 70mm',
        price: 3967,
        category: 'perfiles',
        img: './src/assets/images/products/montante-70.png',
        stock: 25,
        description: 'Los montantes se utilizan en tabiques como elemento vertical al cual se fijan las placas de yeso y como viga maestra en cielorrasos monolíticos.'
    },

    {
        id: 9,
        name: 'Cinta Microperforada Durlock',
        price: 6217,
        category: 'accesorios',
        img: './src/assets/images/products/cinta-microperforada.png',
        stock: 10,
        description: 'Se utiliza para realizar el tomado de juntas entre placas y para resolver los ángulos formados por el encuentro entre dos superficies construidas con placas Durlock®.'
    },

    {
        id: 10,
        name: 'Masilla Durlock 32kg',
        price: 39247,
        category: 'accesorios',
        img: './src/assets/images/products/masilla.png',
        stock: 10,
        description: 'Es la solución práctica, en pasta, para realizar todos los pasos del tomado de juntas y masillado completo de placas Durlock®.'
    },

    {
        id: 11,
        name: 'Tornillo Tel Dry T1 Aguja',
        price: 20.7,
        category: 'accesorios',
        img: './src/assets/images/products/tel-dry-t1-aguja.png',
        stock: 550,
        description: 'Su utilizacion habitual es la vinculacion de montantes y soleras, y para fijar distintos tipos de flejes, como en el caso de las cruces de san Andres y los "strappings". Como criterio de uso estos tornillos se utilizan en lugares donde iran atornilladas placas, sean interiores o exteriores, teniendo en cuenta que su cabeza minimiza la separación de la placa atornillada sobre ellos.'
    },

    {
        id: 12,
        name: 'Tornillo Tel Dry T1 Mecha',
        price: 22.54,
        category: 'accesorios',
        img: './src/assets/images/products/tel-dry-t1-mecha.png',
        stock: 570,
        description: 'Esta línea de tornillos se utilizan en industria y construcción para vincular perfiles de espesores mayores a 0.90 mm.'
    },

    {
        id: 13,
        name: 'Tornillo Tel Dry T2 Mecha',
        price: 24.79,
        category: 'accesorios',
        img: './src/assets/images/products/tel-dry-t2-mecha.png',
        stock: 540,
        description: 'Esta línea de tornillos se utilizan en industria y construcción para vincular perfiles de espesores mayores a 0.90 mm.'
    },

    {
        id: 14,
        name: 'Tornillo Tel Dry T3 Aguja',
        price: 25.17,
        category: 'accesorios',
        img: './src/assets/images/products/tel-dry-t3-aguja.png',
        stock: 500,
        description: 'Su utilizacion habitual es la vinculacion de montantes y soleras, y para fijar distintos tipos de flejes, como en el caso de las cruces de san Andres y los "strappings". Como criterio de uso estos tornillos se utilizan en lugares donde iran atornilladas placas, sean interiores o exteriores, teniendo en cuenta que su cabeza minimiza la separación de la placa atornillada sobre ellos.'
    }

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId));
        }, 500);
    });
}