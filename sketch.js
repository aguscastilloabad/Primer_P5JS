function setup() {
    createCanvas(755, 590);
  }
  
  function draw() {
    background("#f2ede7");
    
    //Marco
    noFill();
    strokeWeight(10);
    rect(10, 10, 355, 570);
    rect(390, 10, 355, 570);
  
    
    /////Figura 1
    
    //Cabeza
    fill("#dbae7e");
    strokeWeight(0)
    arc(187, 114, 66, 80, radians(70), radians(220), OPEN)
    
    
    fill("#020001")
    strokeWeight(1)
    arc(165, 125, 66, 80, radians(258), radians(30), OPEN)
    
    //Piernas
    fill("#020001")
    strokeWeight(0)
    triangle(165,352,205,352,205,482)
    
    fill("#dbae7e")
    strokeWeight(0)
    triangle(250,318,205,318,205,482)
    
    //Cintura
    fill("#020001");
    strokeWeight(0)
    arc(205, 297, 100, 130, radians(270), radians(90), OPEN)
    
    fill("#dbae7e");
    strokeWeight(0)
    arc(205, 323, 90, 130, radians(90), radians(270), OPEN)
    
    //Torso
    fill("#dbae7e")
    strokeWeight(0)
    triangle(205,138,257,125,203,247)
    
    fill("#020001")
    strokeWeight(0)
    triangle(205,153,154,181,205,263)
    
    //Brazo
    fill("#020001")
    strokeWeight(0)
    triangle(275,142,295,100,312,148)
    
    fill("#dbae7e")
    strokeWeight(0)
    arc(291,169,60,60, radians(225), radians(315))
    
    fill("#020001")
    strokeWeight(0)
    triangle(257,125,300,160,275,190)
    
    //Suelo
    fill("#061b08")
    strokeWeight(0)
    arc(205,525,90,90,radians(270),radians(90))
    
    fill("#07156d")
    strokeWeight(0)
    arc(205,525,80,80,radians(90),radians(270))
    
    //Pies
    fill("#020001")
    strokeWeight(0)
    triangle(205,526,205,470,230,526)
    
    fill("#dbae7e")
    strokeWeight(0)
    rect(190,480,15,52)
    
    fill("#07156d")
    strokeWeight(0)
    arc(205,505,20,40,radians(90),radians(270))
    
    
    /////Figura 2
    
    //Cabeza
    fill("#dbae7e");
    strokeWeight(0)
    arc(592, 126, 66, 80, radians(340), radians(110), OPEN)
    
    
    fill("#020001")
    strokeWeight(1)
    arc(615, 145, 66, 80, radians(160), radians(290), OPEN)
    
    //Torso
    fill("#020001")
    strokeWeight(0)
    beginShape();
      vertex(540, 143);
      vertex(535, 212);
      vertex(550, 240);
      vertex(585, 240);
      vertex(625, 187);
    endShape();
    
    fill("#dbae7e")
    strokeWeight(0)
    triangle(517, 172, 540, 143, 535, 212);
    
    //Brazo
    fill("#020001")
    strokeWeight(0)
    triangle(495, 258, 517, 172, 535, 212);
    
    fill("#020001")
    strokeWeight(0)
    triangle(483, 162, 470, 215, 510, 211);  
    
    fill("#dbae7e")
    strokeWeight(0)
    arc(495, 258, 100, 100, radians(240), radians(285));
    
    //Cintura
    fill("#dbae7e")
    strokeWeight(0)
    arc(557, 315, 160, 160, radians(263), radians(62), OPEN);
    
    fill("#dbae7e")
    strokeWeight(0)
    ellipse(563, 299, 60, 70);
    
    fill("#020001")
    strokeWeight(0)
    triangle(557, 267, 533, 401, 599, 401);
    
    //Piernas
    fill("#dbae7e")
    strokeWeight(0)
    triangle(533, 401, 582, 401, 582, 480);
    
    fill("#020001")
    strokeWeight(0)
    arc(570, 438, 60, 70, radians(290), radians(70), OPEN);
    
    //Suelo
    fill("#255d37")
    strokeWeight(0)
    arc(582,525,90,90,radians(90),radians(270))
    
    fill("#011881")
    strokeWeight(0)
    arc(582,525,70,70,radians(270),radians(90))
    
    //Pies
    fill("#020001")
    strokeWeight(0)
    triangle(582, 480, 548, 522, 582, 522);
    
    fill("#dbae7e")
    strokeWeight(0)
    rect(582, 480, 20, 52);
    
    fill("#011881")
    strokeWeight(0)
    arc(578,506,30,40,radians(280),radians(80), OPEN)
  }