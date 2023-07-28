Create database ReadyPlayerDao;
Use ReadyPlayerDao;


CREATE TABLE TSX (
    tsx_id INT PRIMARY KEY,
    user_wallet VARCHAR(50),
    coin_id INT,
    User_ID INT,
    FOREIGN key (User_ID) REFERENCES User_Table(User_ID),
    FOREIGN KEY (user_wallet) REFERENCES User_Table(Wallet),
    FOREIGN KEY (coin_id) REFERENCES Coin(coin_id)
);

CREATE TABLE User_Table (
    User_ID INT PRIMARY KEY,
    User_Name VARCHAR(50),
    Last_Name VARCHAR(50),
    Wallet VARCHAR(50),
    User_Mail VARCHAR(50),
    User_Country INT,
    FOREIGN KEY (User_Country) REFERENCES Countries(Country_id)
);


CREATE Table Chart (
    chart_id INT PRIMARY KEY,
    high_val FLOAT,
    low_val float,
    close_val FLOAT,
    date_val TIMESTAMP,
    Liquity FLOAT,
    chain_id INT,
    FOREIGN KEY (chain_id) REFERENCES Chain(chain_id)
);


CREATE TABLE Coin (
    coin_id INT PRIMARY KEY,
    coin_symbol VARCHAR(5),
    coin_address BIGINT,
    chart_id INT,
    chain_id INT,
    FOREIGN KEY (chain_id) REFERENCES Chain(chain_id),
    FOREIGN KEY (chart_id) REFERENCES Chart(chart_id)
);



CREATE TABLE Game (
    game_id int PRIMARY KEY,
    game_name VARCHAR(50),
    game_category VARCHAR(50),
    coin_id INT,
    FOREIGN KEY (coin_id) REFERENCES Coin(coin_id)
);


CREATE TABLE Stats (
    stats_id int PRIMARY KEY,
    game_id INT,
    dev_activity_id INT,
    countries_played_id INT,
    comunity_id INT,
    FOREIGN KEY (game_id) REFERENCES Game(game_id),
    FOREIGN KEY (dev_activity_id) REFERENCES DevActivity(dev_activity_id),
    FOREIGN KEY (countries_played_id) REFERENCES countries_played(countries_played_id),
    FOREIGN KEY (comunity_id) REFERENCES Comunity(comunity_id)
);


CREATE TABLE Countries (
    Country_id int PRIMARY key,
    Country_name VARCHAR(50)
);

CREATE TABLE countries_played (
    countries_played_id INT PRIMARY key,
    Country_id INT,
    FOREIGN KEY (Country_id) REFERENCES Countries(Country_id)
);


CREATE TABLE DevActivity (
    dev_activity_id INT PRIMARY KEY,
    last_update TIMESTAMP,
    launch_date TIMESTAMP,
    is_active  BINARY
);


CREATE TABLE  Comunity(
    comunity_id INT PRIMARY KEY,
    twitter VARCHAR(255),
    Discord VARCHAR(255),
    webPage VARCHAR(255)
);

CREATE TABLE Chain (
    chain_id int PRIMARY KEY,
    chain_name VARCHAR(50),
    chain_blocksize BIGINT,
    chain_lastblock BIGINT,
    chain_release TIMESTAMP
);




