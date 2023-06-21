USE dj_market;

DELIMITER //

CREATE PROCEDURE CONTRATACION(
	IN _id_persona INT,
    IN _nombre VARCHAR(50),
    IN _app VARCHAR(50),
    IN _apm VARCHAR(50),
    IN _tel VARCHAR(12),
    IN _email VARCHAR(100),
    IN _calle_numero VARCHAR(100),
    IN _colonia VARCHAR(100),
    IN _id_municipio INT,
    IN _cp VARCHAR(5),
    IN _curp VARCHAR(18),
    IN _id_contratacion VARCHAR(50),
    IN _id_tipo_evento INT,
    IN _id_evento INT,
    IN _id_dj INT,
    IN _id_salon INT,
    IN _no_personas INT,
    IN _costo_total INT,
    IN _fecha DATE,
    IN _hora_inicio TIME,
    IN _opcion VARCHAR(50),
    IN _hora_fin TIME,
	IN _estatus TINYINT,
  IN _otro_evento VARCHAR(50)
)
BEGIN
	DECLARE _ID_INSERTADO_PERSONA INT;
    DECLARE _ID_INSERTADO_EVENTO INT;
    DECLARE _AUX_COSTO_1 INT;
    DECLARE _AUX_COSTO_2 INT;
    
    IF _opcion = 'alta_contratacion' THEN
    	INSERT INTO `persona` (`nombre`, `app`, `apm`, `tel`, `email`, `calle_numero`, `colonia`, `id_municipio`, `cp`, `curp`)
    	VALUES (_nombre, _app, _apm, _tel, _email, _calle_numero, _colonia, _id_municipio, _cp, _curp);
    
    	SET _ID_INSERTADO_PERSONA = (SELECT id_persona FROM `persona` ORDER BY id_persona DESC LIMIT 1);
        
        INSERT INTO `tipo_evento` (`id_evento`, `otro_evento`) VALUES (_id_evento, _otro_evento);
        
        SET _ID_INSERTADO_EVENTO = (SELECT id_tipo_evento FROM `tipo_evento` ORDER BY id_tipo_evento DESC LIMIT 1);
    
    	INSERT INTO `contratacion` (`id_contratacion`, `id_tipo_evento`, `id_persona`, `id_dj`, `id_salon`, `no_personas`, `costo_total`, `fecha`, `hora_inicio`, `hora_fin`, `estatus`)
    	VALUES (_id_contratacion, _ID_INSERTADO_EVENTO, _ID_INSERTADO_PERSONA, _id_dj, _id_salon, _no_personas, _costo_total, _fecha, _hora_inicio, _hora_fin, _estatus);
    END IF;
    
    IF _opcion = 'regresa_costos' THEN
    	SET _AUX_COSTO_1 = CASE WHEN _id_dj = 0 THEN 0 ELSE (SELECT costo FROM `dj` WHERE id_dj = _id_dj) END;
    	SET _AUX_COSTO_2 = CASE WHEN _id_salon = 0 THEN 0 ELSE (SELECT costo FROM `salon` WHERE id_salon = _id_salon) END;
    	SELECT (_AUX_COSTO_1 + _AUX_COSTO_2) AS 'COSTO_TOTAL';
    END IF;
    
    IF _opcion = 'regresa_datos_contratacion' THEN
    	SELECT p.nombre, p.app, p.apm, p.tel, p.email, p.calle_numero, p.colonia, p.id_municipio, m.id_estado, p.cp, p.curp, te.id_evento, te.otro_evento, c.id_dj, c.id_salon, c.no_personas, c.costo_total, c.fecha, c.hora_inicio FROM `contratacion` AS c
        INNER JOIN `persona` AS p ON c.id_persona = p.id_persona
       	INNER JOIN `tipo_evento`AS te ON c.id_tipo_evento = te.id_tipo_evento
        INNER JOIN `municipio`AS m ON p.id_municipio = m.id_municipio
        WHERE c.id_contratacion = _id_contratacion;
    END IF;
    
    IF _opcion = 'actualiza_contratacion' THEN
    	UPDATE `contratacion` SET 
        id_dj = _id_dj,
        id_salon = _id_salon,
        no_personas = _no_personas,
        costo_total = _costo_total,
        hora_inicio = _hora_inicio,
        hora_fin = _hora_fin
        WHERE id_contratacion = _id_contratacion;
        
        UPDATE `tipo_evento` 
        SET id_evento = _id_evento,
        otro_evento = _otro_evento
        WHERE id_tipo_evento = (SELECT id_tipo_evento FROM `contratacion` WHERE id_contratacion = _id_contratacion);
        
        UPDATE `persona` 
        SET nombre = _nombre,
        app = _app,
        apm = _apm,
        tel = _tel,
        email = _email,
        calle_numero = _calle_numero,
        colonia = _colonia,
        id_municipio = _id_municipio,
        cp = _cp
        WHERE id_persona = (SELECT id_persona FROM `contratacion` WHERE id_contratacion = _id_contratacion);
    END IF;
END //

DELIMITER ;

