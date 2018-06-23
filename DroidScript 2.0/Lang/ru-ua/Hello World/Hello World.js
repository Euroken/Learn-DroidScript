
//Запускается при старте программы.
function OnStart() {
	//Создадим вертикальный макет для объектов.
	lay = app.CreateLayout("linear", "VCenter,FillXY");	

	//Создадим картинку размером 1/5 от ширины экрана и соотношением сторон 1:1.
	img = app.CreateImage("Img/Hello World.png", 0.2, -1);
	lay.AddChild(img);
	
	//Создадим кнопку шириной 1/3 ширины экрана и высотой 1/10 от высоты экрана.
	btn = app.CreateButton("Нажми на меня", 1/3, 0.1);
	btn.SetMargins(0, 0.05, 0, 0);
	lay.AddChild(btn);
	
	//Установим функцию, вызываемую при нажатии на кнопку.
	btn.SetOnTouch(btn_OnTouch);
	
	//Добавляем макет в приложение.	
	app.AddLayout(lay);
}

//Вызывается, когда пользователь нажимает на кнопку.
function btn_OnTouch() {
	//Показываем всплывающее сообщение.
	app.ShowPopup("Привет мир!");
	
	//Вибрируем по шаблону (в миллисекундах).
	//пауза,вибро,пауза,вибро...
	app.Vibrate("0,100,30,100,50,300");
}
