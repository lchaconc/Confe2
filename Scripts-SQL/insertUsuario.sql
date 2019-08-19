insert into persona (nombre,apellido1,apellido2,fechaNacimiento,cedula,sexo,correo,
imgPerfil,idRol,activo,fechaCreacion,fechaUltimaAct,motivo,intereses,contrasena)
values ('Luis','Chacon','Campos',GETDATE(),'34890454','M','@correo.de','1017.JPEG',1,'S',GETDATE(),GETDATE(),'ser siervo de dios','hacer amigos','hola123')
insert into catequizando (idPersona,idGrupo,idParroquia)
select max(idPersona),1021,14 from persona