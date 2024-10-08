DROP TABLE IF EXISTS Commande_Article,Favori,Note,Commentaire,Commande,Article,Utilisateur,Pays,Groupe,Stand,Categorie,Role;

CREATE TABLE Role(
   id_role INT auto_increment not null ,
   Nom VARCHAR(50),
   PRIMARY KEY(id_role)
);

CREATE TABLE Categorie(
   id_categorie INT auto_increment not null ,
   Nom VARCHAR(50),
   PRIMARY KEY(id_categorie)
);

CREATE TABLE Stand(
   id_stand INT auto_increment not null,
   pos_stand VARCHAR(50),
   PRIMARY KEY(id_stand)
);

CREATE TABLE Groupe(
   id_groupe INT auto_increment not null ,
   Nom_Groupe VARCHAR(50),
   photo_groupe VARCHAR(50),
   id_stand INT,
   PRIMARY KEY(id_groupe),
   FOREIGN KEY(id_stand) REFERENCES Stand(id_stand)
);

CREATE TABLE Pays(
   id_pays int auto_increment,
   Nom_Pays VARCHAR(50) UNIQUE,
   Continent VARCHAR(50),
   PRIMARY KEY(id_pays)
);

CREATE TABLE Utilisateur(
   id_user INT auto_increment NOT NULL ,
   Nom VARCHAR(50),
   Prénom VARCHAR(255),
   mail VARCHAR(50),
   password VARCHAR(255),
   id_groupe INT,
   id_role INT,
   PRIMARY KEY(id_user),
   FOREIGN KEY(id_groupe) REFERENCES Groupe(id_groupe),
   FOREIGN KEY(id_role) REFERENCES Role(id_role)
);

CREATE TABLE Article(
   id_article INT NOT NULL AUTO_INCREMENT,
   Nom VARCHAR(50),
   Prix decimal(6,2),
   Description TEXT,
   Quantité INT not null default 0,
   image VARCHAR(255),
   id_pays INT NOT NULL,
   id_categorie INT NOT NULL,
   id_groupe INT NOT NULL,
   PRIMARY KEY(id_article),
   FOREIGN KEY(id_pays) REFERENCES Pays(id_pays),
   FOREIGN KEY(id_categorie) REFERENCES Categorie(id_categorie),
   FOREIGN KEY(id_groupe) REFERENCES Groupe(id_groupe)
);

CREATE TABLE Commande(
   id_commande INT auto_increment not null ,
   Status INT default 0,
   id_user INT NOT NULL,
   PRIMARY KEY(id_commande),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user)
);

CREATE TABLE Commentaire(
   id_commentaire INT auto_increment,
   commentaire text,
   date_heure_commentaire DATETIME,
   id_user INT NOT NULL,
   id_article INT NOT NULL,
   PRIMARY KEY(id_commentaire),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user),
   FOREIGN KEY(id_article) REFERENCES Article(id_article) on delete cascade
);

CREATE TABLE Note(
   id_note INT not null auto_increment,
   note INT,
   id_article INT NOT NULL,
   PRIMARY KEY(id_note),
   FOREIGN KEY(id_article) REFERENCES Article(id_article) on delete cascade
);

CREATE TABLE Favori(
   id_user INT not null ,
   id_article INT not null ,
   PRIMARY KEY(id_user, id_article),
   FOREIGN KEY(id_user) REFERENCES Utilisateur(id_user),
   FOREIGN KEY(id_article) REFERENCES Article(id_article) on delete cascade
);

CREATE TABLE Commande_Article(
   id_commande_article INT AUTO_INCREMENT NOT NULL,
   id_commande INT NOT NULL,
   id_article INT NOT NULL,
   Quantité INT NOT NULL DEFAULT 1,
   id_groupe INT NOT NULL,
   PRIMARY KEY(id_commande_article),
   FOREIGN KEY(id_commande) REFERENCES Commande(id_commande),
   FOREIGN KEY(id_article) REFERENCES Article(id_article) on delete cascade ,
   FOREIGN KEY(id_groupe) REFERENCES Groupe(id_groupe)
);


-- Table Role
INSERT INTO Role (Nom) VALUES
('Administrateur'),
('Utilisateur');

-- Table Categorie
INSERT INTO Categorie (Nom) VALUES
('Électroniques'),
('Vêtements'),
('Alimentation');

-- Table Stand
INSERT INTO Stand (pos_stand) VALUES
('Stand 1'),
('Stand 2'),
('Stand 3');

-- Table Groupe
INSERT INTO Groupe (Nom_Groupe, photo_groupe, id_stand) VALUES
('Groupe 1', 'groupe1.jpg', 1),
('Groupe 2', 'groupe2.jpg', 2),
('Groupe 3', 'groupe3.jpg', 3);



-- Table Utilisateur
INSERT INTO Utilisateur (Nom, Prénom, mail, password, id_groupe, id_role) VALUES
('Smith', 'John', 'john.smith@email.com', 'password1', 1, 1),
('Johnson', 'Sarah', 'sarah.johnson@email.com', 'password2', 2, 2),
('Davis', 'Michael', 'michael.davis@email.com', 'password3', 3, 2);

-- Table Article
INSERT INTO Article (Nom, Prix, Description, Quantité, id_pays, id_categorie, id_groupe, image) VALUES
('Smartphone', 599.99, 'Un smartphone puissant', 50, 1, 1, 1, 'img1.jpg'),
('T-shirt', 19.99, 'T-shirt en coton', 100, 1, 2, 2, 'img1.jpg'),
('Chocolat', 4.99, 'Chocolat belge artisanal', 200, 2, 3, 3, 'img1.jpg');


-- Table Commande
INSERT INTO Commande (Status, id_user) VALUES
(0, 1),
(0, 2),
(1, 3);


-- Table Commentaire
INSERT INTO Commentaire (commentaire, date_heure_commentaire, id_user, id_article) VALUES
('Très bon produit !', '2023-01-15 10:30:00', 1, 1),
('J\'adore ce t-shirt', '2023-02-20 14:45:00', 2, 2),
('Délicieux chocolat', '2023-03-10 16:20:00', 3, 3);

-- Table Note
INSERT INTO Note (note, id_article) VALUES
(5, 1),
(4, 2),
(5, 3);

-- Table Favori
INSERT INTO Favori (id_user, id_article) VALUES
(1, 1),
(2, 2),
(3, 3);

-- Table Commande_Article
INSERT INTO Commande_Article (id_commande, id_article, Quantité, id_groupe) VALUES
(1, 1, 2, 1),
(2, 2, 3, 2),
(3, 3, 1, 3);


