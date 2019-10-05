use dbCONFE
go

/*Inbstruccion para resetear el autoincrement
DBCC CHECKIDENT('dbCONFE.juego.objetos', RESEED, 0) 
*/

insert into juego.objetos(  etiqueta) values ('Sandalias')
insert into juego.objetos(  etiqueta) values ( 'Estrella' )
insert into juego.objetos(  etiqueta) values ( 'Cruz')
insert into juego.objetos(  etiqueta) values ( 'Paloma')
insert into juego.objetos(  etiqueta) values ( 'AguaAceite')
insert into juego.objetos(  etiqueta) values ( 'Fuego')
