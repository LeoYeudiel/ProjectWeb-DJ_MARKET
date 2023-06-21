<?php
    include("fpdf/fpdf.php");

    class PDF extends FPDF{
        //Cabecera de mi documento
        function header(){
            //Agregamos un banner, imagen o logo
            $this->SetFillColor(36,38,41);
            $this->Rect(-20,0,240,45,'F');
            $this->Image('img/icon.png',9,5,60);
            $this->SetTextColor(255,255,255);
            $this->SetFont('helvetica','B',12);
            $this->Cell(0,3,utf8_decode('Contáctanos'),0,0,'R');
            $this->SetFont('helvetica','B',9);
            $this->Cell(0,13,'Correo: djmarket@gmail.com',0,0,'R');
            $this->Cell(0,22,utf8_decode('Teléfono: 55 6461 8752'),0,0,'R');
            $this->Cell(0,31,'Instagram: @dj_market_oficial',0,0,'R');
            $this->Ln(20);
            $this->SetFont('helvetica','B',20);
            $this->Write(5, utf8_decode('Comprobante de Contratación'));
            $this->Ln(20);
        }

        function footer(){
            $this->SetFillColor(36,38,41);
            $this->Rect(-20,280,240,20,'F');
            $this->SetTextColor(255,255,255);
            $this->SetY(281);
            $this->SetFont('helvetica','I','10');
            $this->Cell(0,15,'Pagina '.$this->PageNo().'/{nb}',0,0,'C');
        }
    }

    $folio = $_GET['folio'];
    $conexion = mysqli_connect("localhost","root","","dj_market");
    $sql = "SELECT c.id_contratacion, c.no_personas, c.costo_total, c.fecha, c.hora_inicio, c.hora_fin, 
    p.nombre, p.app, p.apm, p.tel, p.email, p.calle_numero, p.colonia, p.cp, p.curp,
    d.nombre,d.descripcion,d.ruta_imagen,
    e.otro_evento,
    s.nombre_salon,s.descripcion,s.ruta_imagen
    
    FROM contratacion c 
    INNER JOIN persona p ON (c.id_persona = p.id_persona)
    INNER JOIN dj d ON (c.id_dj = d.id_dj)
    INNER JOIN tipo_evento e ON (c.id_tipo_evento = e.id_tipo_evento)
    INNER JOIN salon s ON (c.id_salon = s.id_salon) 
    WHERE c.id_contratacion = '$folio'";
    $res = mysqli_query($conexion,$sql);
    $contratacion = mysqli_fetch_array($res);
    $precio = number_format(intval($contratacion[2]));

    $pdf = new PDF();
    $pdf->SetTitle($contratacion[0].'.pdf');
    $pdf->AliasNBPages();
    $pdf->AddPage();
    $pdf->SetFillColor(255,255,255);
    $pdf->SetFont('helvetica','B',16);
    $pdf->SetTextColor(36,38,41);
    $pdf->Write(5, 'Datos del Cliente               Folio:  '.$contratacion[0]);
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, '    Nombre:      ');
    $pdf->SetFont('helvetica','',12); 
    $pdf->Write(5, utf8_decode($contratacion[6].' '.$contratacion[7].' '.$contratacion[8]));
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, '    CURP:          ');
    $pdf->SetFont('helvetica','',12); 
    $pdf->Write(5, utf8_decode($contratacion[14]));
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, utf8_decode('    Dirección:    '));
    $pdf->SetFont('helvetica','',12);
    $pdf->Write(5, utf8_decode($contratacion[11].', '.$contratacion[12].', '.$contratacion[13]));
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, '    Correo:         ');
    $pdf->SetFont('helvetica','',12);
    $pdf->Write(5, $contratacion[10]);
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, utf8_decode('    Teléfono:   '));
    $pdf->SetFont('helvetica','',12);
    $pdf->Write(5, $contratacion[9]);
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',16);
    $pdf->Write(5, 'Datos del Evento');
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, '    Tipo de Evento:');
    $pdf->SetFont('helvetica','',12);
    $pdf->Write(5, utf8_decode('    '.$contratacion[18]));
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, '    No. Personas:');
    $pdf->SetFont('helvetica','',12);
    $pdf->Write(5, '    '.$contratacion[1]);
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, '    Fecha:');
    $pdf->SetFont('helvetica','',12);
    $pdf->Write(5, utf8_decode('    '.$contratacion[3]));
    $pdf->SetFont('helvetica','B',12);
    $pdf->Write(5, '    Hora:');
    $pdf->SetFont('helvetica','',12);
    $pdf->Write(5, '    '.$contratacion[4].' - '.$contratacion[5]);
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','B',16);
    $pdf->Cell(135,10, 'DJ  '.$contratacion[15],0,0);
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','',12);
    $pdf->SetLeftMargin(15);
    $pdf->MultiCell(130,10, utf8_decode($contratacion[16]),0,'J');
    $pdf->SetLeftMargin(10);
    $pdf->Image('img/'.$contratacion[17], 150, 135, 50, 50); //Cambiar la ruta de la imagen
    $pdf->SetY(190);
    $pdf->SetFont('helvetica','B',16);
    $pdf->Cell(135,10, utf8_decode('Salón  '.$contratacion[19]),0,0);
    $pdf->Ln(10);
    $pdf->SetFont('helvetica','',12);
    $pdf->SetLeftMargin(15);
    $pdf->MultiCell(130,10, utf8_decode($contratacion[20]),0,'J');
    $pdf->SetLeftMargin(10);
    $pdf->Image('img/'.$contratacion[21], 150, 200, 50); 
    $pdf->Ln(10);
    $pdf->SetY(260);
    $pdf->SetFont('helvetica','B',16);
    $pdf->Cell(0,10, 'Total a Pagar: $'.$precio,0,0,'R');
    $pdf->Output($contratacion[0].'.pdf','I');//cambiar nombre del archivo
?>