use dbCONFE
go
SET IDENTITY_INSERT [dbo].unidad on;
insert into unidad(idUnidad,nombreUnidad,numeroUnidad,fechaCreacion)
values (1,'Crezco en todos los aspectos',1,getdate())
go
insert into juego.juego (idJuego,idUnidad,etiqueta) values ('C01ropero1', 1, 'Ropero1' )
insert into juego.juego (idJuego,idUnidad,etiqueta) values ('C02ropero2', 1, 'Ropero2' )
insert into juego.juego (idJuego,idUnidad,etiqueta) values ('J01granja', 1, 'Granja' )
insert into juego.juego (idJuego,idUnidad,etiqueta) values ('Avatar01', 1, 'Avatar' )