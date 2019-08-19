SELECT oj.idObjeto,idUsuario ,activo,o.etiqueta
		  FROM  juego.objetosJuego oj inner join juego.objetos o on oj.idObjeto=o.idObjeto
		  WHERE idUsuario=1026