CREATE DATABASE clon_twitter;
USE clon_twitter;


CREATE TABLE Usuarios (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    NombreCompleto VARCHAR(255) NOT NULL,
    NombreUsuario VARCHAR(50) UNIQUE NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL,
    Pass VARCHAR(255) NOT NULL
);

CREATE TABLE Tweets (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Contenido VARCHAR(280) NOT NULL,
    UsuarioID INT,
    FechaCreacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UsuarioID) REFERENCES Usuarios(ID)
);

CREATE TABLE Seguidores (
    SeguidorID INT,
    SeguidoID INT,
    FOREIGN KEY (SeguidorID) REFERENCES Usuarios(ID),
    FOREIGN KEY (SeguidoID) REFERENCES Usuarios(ID),
    PRIMARY KEY (SeguidorID, SeguidoID)
);
