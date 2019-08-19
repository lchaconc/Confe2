use dbCONFE
go
-- ================================================
-- Template generated from Template Explorer using:
-- Create Trigger (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- See additional Create Trigger templates for more
-- examples of different Trigger statements.
--
-- This block of comments will not be included in
-- the definition of the function.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		<Author,,Name>
-- Create date: <Create Date,,>
-- Description:	<Description,,>
-- =============================================
CREATE TRIGGER asignaEstadosDeLosJuegos
ON  [dbo].[persona]
AFTER INSERT AS
BEGIN
	 DECLARE @idPersona INTEGER

	 SELECT @idPersona=MAX(idPersona) 
	   FROM persona

 INSERT INTO juego.estadoDeLosJuegos 
 (idJuego,
 idUsuario,
 avance,
 terminado)
 SELECT idJuego,@idPersona,1,0
   FROM juego.juego

END
GO