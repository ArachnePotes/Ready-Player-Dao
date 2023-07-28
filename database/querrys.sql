--Current endowment of user
SELECT ID, Nombre, Apellido, Wallet
FROM Usuario;

--Amount of deployed funds:
SELECT SUM(Amount) AS Total_Deployed_Funds
FROM Inversiones;


-- Games invested in:
SELECT DISTINCT g.ID, g.Nombre
FROM Game g
JOIN Inversiones i ON g.ID = i.Game_ID;

--Category of the games:
SELECT ID, Género AS Category
FROM Game;


--Distribution of investment by game category:
SELECT g.Género AS Category, SUM(i.Amount) AS Total_Investment
FROM Game g
JOIN Inversiones i ON g.ID = i.Game_ID
GROUP BY g.Género;

--Price of the game's token:
SELECT g.ID, g.Nombre, c.Value AS Token_Price
FROM Game g
JOIN Coin c ON g.ID_Coin = c.ID_Coin;


/*  Pendiente
-- Para los últimos 7 días
SELECT Value, Fecha
FROM Coin
WHERE Fecha >= DATE_SUB(NOW(), INTERVAL 7 DAY);

-- Para los últimos 14 días
SELECT Value, Fecha
FROM Coin
WHERE Fecha >= DATE_SUB(NOW(), INTERVAL 14 DAY);

-- Para los últimos 30 días
SELECT Value, Fecha
FROM Coin
WHERE Fecha >= DATE_SUB(NOW(), INTERVAL 30 DAY);


-- Para los últimos 7 días
SELECT Value, Fecha
FROM NFT
WHERE Fecha >= DATE_SUB(NOW(), INTERVAL 7 DAY);

-- Para los últimos 14 días
SELECT Value, Fecha
FROM NFT
WHERE Fecha >= DATE_SUB(NOW(), INTERVAL 14 DAY);

-- Para los últimos 30 días
SELECT Value, Fecha
FROM NFT
WHERE Fecha >= DATE_SUB(NOW(), INTERVAL 30 DAY)
*/