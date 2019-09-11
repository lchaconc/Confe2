use dbCONFE
go
SET IDENTITY_INSERT [dbo].unidad on;

insert into unidad(idUnidad,nombreUnidad,numeroUnidad,fechaCreacion)
values (1,'Crezco en todos los aspectos',1,getdate())
go
insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('C01ropero1', 1, 'Ropero1' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('C02ropero2', 1, 'Ropero2' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('J01granja', 1, 'Granja' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('Avatar01', 1, 'Avatar' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('R01emociones', 1, 'Emociones' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('J02top10', 2, 'Top 10' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('R02seleccion', 2, 'Cercanía con Jesús' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('J02mandela', 2, 'Mandela' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('R02bienaventuranzas', 2, 'Bienaventuranzas' )

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('J02flappybird', 2, 'Lógralo si puedes'

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('R02exitofracaso', 2, 'Éxito Fracaso'

insert into juego.juego (idJuego,idUnidad,etiqueta) 
values ('J02acompanajesus', 2, 'Acompaña a jesús'

