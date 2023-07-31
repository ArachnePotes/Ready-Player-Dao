Create database ReadyPlayerDao;
Use ReadyPlayerDao;


CREATE TABLE TSX (
    /*
    Tabla de transacciones, esta tabla salio de la normalizacion con usuario y coin ,
     al ser constante mente en uso, solo se necesita tener los campos:
    Id del usuario y moneda,Billetera del usuario y la cantidad que se transfiere
    El id de la transaccion se tiene como entero por almacenamiento, 
    hash de transaccion es tsx_hash en texto por que las transacciones tienen caractenes no numericos aveces
    */
    tsx_id INT PRIMARY KEY,
    coin_id INT,
    User_ID INT,
    tsx_hash VARCHAR(50), 
    user_wallet VARCHAR(50),
	amount BIGINT,
    FOREIGN key (User_ID) REFERENCES User_Table(User_ID),
    FOREIGN KEY (user_wallet) REFERENCES User_Table(Wallet),
    FOREIGN KEY (coin_id) REFERENCES Coin(coin_id)
);

CREATE TABLE User_Table (
    /*
    Tabla que almacena informacion requerida del ususario de la DAO
    nombre completo , billetera , email, la id es un identificador simple , no documento.
    El pais es una id por que se conecta con la tabla de los paises (se implementa con un dropdown)
    */
    User_ID INT PRIMARY KEY,
    User_Name VARCHAR(50),
    Last_Name VARCHAR(50),
    Wallet VARCHAR(50),
    User_Mail VARCHAR(50),
    User_Country INT,
    FOREIGN KEY (User_Country) REFERENCES Countries(Country_id)
);

CREATE Table Chart (
    /*
    tabla Utilizada para visualizar el valor de una moneda,
    Chart_id es un identificador simple y unico en la bd que esta conectado a coin
    para almacenar el valor de la moneda en determinado momento o dia esta fecha date_val
    high_val es el valor techo de la moneda o valor de venta
    low_val es el valor piso de la moneda o valor de compra
    close_val es el valor en el que queda la moneda en ese determinado momento
    Liquity es la quidez de la moneda en ese determinado momento

    chain_id,coin_id son para especificar en que cadena tiene ese valor y moneda
    */
    chart_id INT PRIMARY KEY,
    date_val TIMESTAMP,
    high_val FLOAT,
    low_val float,
    close_val FLOAT,
    Liquity FLOAT,
    chain_id INT,
    coin_id int,
	FOREIGN KEY (coin_id) REFERENCES Coin(coin_id),
	FOREIGN KEY (chain_id) REFERENCES Chain(chain_id)
);

CREATE TABLE Chain (
    /*
    Tabla para especificar detalles de la cadena de la moneda
    Por ejemplo Etherium 
    chain_id identificador unico en la bd
    chain_name Etherium
    chain_blocksize 17814024
    chain_lastblock 17814023
    chain_release  2015-05-05
    asu vez, eth tiene varias cadenas como sepolia goreli etc..
    entonces es mejor usar eth como moneda y las demas como cadenas
    por que cada una tiene un valor distinto
    */
    chain_id int PRIMARY KEY,
    chain_name VARCHAR(50),
    chain_blocksize BIGINT,
    chain_lastblock BIGINT,
    chain_release TIMESTAMP
);


CREATE TABLE Coin (
    /*
    Tabla para almacenar toda la informacion de la moneda
    coin_id identificador unico en la bd
	coin_Name el nombre de la moneda,
	coin_slug algunas APIS tienen slug aparte del nombre y es el nombre en lowercase y - para identificarlas,
    coin_symbol el simbolo de la moneda,
    coin_address la direccio del contrato de creacio de la moneda,
    chart_id identificador de su tabla chart (la visualizacion del valor en el tiempo
    */
    coin_id INT PRIMARY KEY,
	coin_Name VARCHAR(30),
	coin_slug VARCHAR(50),
    coin_symbol VARCHAR(5),
    coin_address VARCHAR(50),
    chart_id INT,
    FOREIGN KEY (chain_id) REFERENCES Chain(chain_id),
);



CREATE TABLE Game (
    /*
    Esta tabla almacena toda la informacikon requerida de los juegos web3 
    el  nombre, la categoria, cuando salio, que moneda usa (si tiene varias se usa con chain)
    dev_activity_id es para identificar su tabla de historial de actualizaciones
    */
    game_id int PRIMARY KEY,
    game_name VARCHAR(50),
    game_category VARCHAR(50),
    coin_id INT,
	launch_date TIMESTAMP,
	dev_activity_id INT,
	FOREIGN KEY (dev_activity_id) REFERENCES DevActivity(dev_activity_id),
    FOREIGN KEY (coin_id) REFERENCES Coin(coin_id)
);


CREATE TABLE Stats (
    /*
    esta tabla esta primaria mente para almacenar datos 
    que solo se van usar para monitoreo de la cominudad del juego
    no son indispensables para juego
    esto evita tener columnas vacias  por datos no importantes
    comunity_id INT redes sociales del juego
    countries_played_id relaciona con los paises en que se juega
    */
    stats_id int PRIMARY KEY,
    game_id INT,
    countries_played_id INT,
    comunity_id INT,
    FOREIGN KEY (game_id) REFERENCES Game(game_id),
    FOREIGN KEY (countries_played_id) REFERENCES countries_played(countries_played_id),
    FOREIGN KEY (comunity_id) REFERENCES Comunity(comunity_id)
);


CREATE TABLE Countries (
    /*
    Esta tabla es para optimizar la saleccion , almacenamiento y busqueda de paises
    poner "Colombia"  y "colombia" , o paises que no existen es un fastidio para arreglar 
    */
    Country_id int PRIMARY key,
    Country_name VARCHAR(50)
);

CREATE TABLE countries_played (
    /*
    Misma idea que tabla de paises
    Game_id identificador del juego
    Country_id pais en el que se juega
    esto puede almacenar cualquier pais y cualquier juego , el mismo juego puede tener todos los paises
    y todos los paises otro juego
    */
	countries_played_id INT PRIMARY KEY,
    Game_id INT,
    Country_id INT,
    FOREIGN KEY (Country_id) REFERENCES Countries(Country_id),
	FOREIGN KEY (Game_id) REFERENCES Game(game_id)
);


CREATE TABLE DevActivity (
    /*
    Tabla que almacena el historial de actuualizaciones
    Una actualizacion tiene 
    Fecha de actualizacion
    Tipo de actualizacion "Bug fix", "new items", "new characters" , etc ...
    y una pequenia descripcion
    */
    dev_activity_id INT PRIMARY KEY,
    last_update TIMESTAMP,
    TypeUpdate VARCHAR(30),
	short_Description VARCHAR(240),
);


CREATE TABLE  Comunity(
    /*
    Tabla para almacenar las paginas del juego
    estas se pueden usar para webscrap (opcionalmente)
    y si en algun momento cambian de dominio se modifica esta  y no community
    */
    comunity_id INT PRIMARY KEY,
    twitter VARCHAR(255),
    Discord VARCHAR(255),
    webPage VARCHAR(255)
);





