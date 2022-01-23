# SCRUNCHIES CAROLINA
La aplicación es un E-commerce de scrunchies

# Tecnologia utilizada
+CSS
+JS
+HTML

# Clonar repositorio
+git clone *URL del Proyecto*

# Instalar dependencias
+npm install

# Ejecutar proyecto
+npm start

# BackEnd
El backend esta desarrollado en firestore, en la misma se alojan 2 tipos de archivos:
- /items: en esta dirección se guarda un archivo con todos los datos del producto:

		1. id: String(autogenerado por firestore)
		2. category: String
		3. description: String
		4. img: String
        5. name: String
		6. price: Number
		7. stock: Number

- /orders: en esta dirección se guardan los datos de las órdenes realizadas:

		1. id: String(autogenerado por firestore)
		2. buyer: object [email:String, name:String, phone:Number]
		3. items: ArrayProducts
		4. total: Number

# Componentes
Los componentes de la aplicación están divididos en diferentes carpetas ubicadas en la raiz "Components":

- Cart: contiene 3 componentes: -"Cart" en el se desarrolla el carrito de compras del usuario; -"Form" en el se desarrolla un formulario se le pide el ingreso de datos necesarios para crear la orden; -"CartWidget" es un contador para poder agregar mas productos ya agregarlos al Cart.

- Count: contiene el componente "ItemCount" se encarga de validar el stock del producto y permite contar la cantidad de productos a agregar.

- ItemDetail: contiene 2 componentes: -"ItemDetail", se encarga de renderizar los datos otorgados por el ItemDetailContainer, este componente implementa el ItemCount; -"ItemDetailContainer" que se encarga de obtener toda la información necesaria para renderizar el detalle de un producto, este componente pasa dicha información al componente ItemDetail.

- ItemList: contiene 3 componentes: -"ItemList" que requiere un array de productos, se encarga de hacer un map y pasarle los datos al Item; -"ItemListContainer", se encarga de consultar todos los productos y pasarlos al ItemList; -"Item", recibe todos los datos requeridos para renderizar un producto en pantalla (previsualización del producto).

- NavBar: contiene el componente "NavBar".

# Context
En el proyecto se realizaron 2 contextos alojados en src/Components/Context:

 CartContext: se guardan los datos necesarios de los productos para realizar la orden del cliente:

		1. itemsCart: se exporta el array de productos que el cliente sumo al carrito
        2. isInCart: se puede saber si un producto ya se encuentra en el carrito
		3. addItem: permite agregar un item al contexto
		4. removeItem: permite remover un item específico del contexto
		5. clear: borra todos los datos del contexto
		6. getQuantityCart: devuelve la cantidad de productos 		

		
# Servicios
Solo hay un servicio alojado en src/service/firebase, en el mismo se inicializa la conexión con firebase.