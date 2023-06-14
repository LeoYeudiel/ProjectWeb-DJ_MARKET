USE dj_market;

DELIMITER //

CREATE PROCEDURE CONTRATACION(
	_id_persona INT,
     _nombre VARCHAR(50),
     _app VARCHAR(50),
     _apm VARCHAR(50),
     _tel VARCHAR(12),
     _email VARCHAR(100),
     _calle_numero VARCHAR(100),
     _colonia VARCHAR(100),
     _id_municipio INT,
     _cp VARCHAR(5),
     _curp VARCHAR(18),
     _id_contratacion VARCHAR(50),
     _id_tipo_evento INT,
     _id_dj INT,
     _id_salon INT,
     _no_personas INT,
     _costo_total INT,
     _fecha DATE,
     _hora_inicio TIME,
     _opcion VARCHAR(50),
     _hora_fin TIME,
	 _estatus TINYINT
)
BEGIN
	DECLARE _ID_INSERTADO_PERSONA INT;
    DECLARE _ID_INSERTADO_EVENTO INT;
    
    IF _opcion = 'alta_contratacion' THEN
    	INSERT INTO `persona` (`nombre`, `app`, `apm`, `tel`, `email`, `calle_numero`, `colonia`, `id_municipio`, `cp`, `curp`)
    	VALUES (_nombre, _app, _apm, _tel, _email, _calle_numero, _colonia, _id_municipio, _cp, _curp);
    
    	SET _ID_INSERTADO_PERSONA = (SELECT id_persona FROM `persona` ORDER BY id_persona DESC LIMIT 1);
        
        INSERT INTO `tipo_evento` (`id_evento`, `otro_evento`) VALUES (_id_tipo_evento, '');
        
        SET _ID_INSERTADO_EVENTO = (SELECT id_tipo_evento FROM `tipo_evento` ORDER BY id_tipo_evento DESC LIMIT 1);
    
    	INSERT INTO `contratacion` (`id_contratacion`, `id_tipo_evento`, `id_persona`, `id_dj`, `id_salon`, `no_personas`, `costo_total`, `fecha`, `hora_inicio`, `hora_fin`, `estatus`)
    	VALUES (_id_contratacion, _ID_INSERTADO_EVENTO, _ID_INSERTADO_PERSONA, _id_dj, _id_salon, _no_personas, _costo_total, _fecha, _hora_inicio, _hora_fin, _estatus);
    END IF;
    
END //

DELIMITER ;