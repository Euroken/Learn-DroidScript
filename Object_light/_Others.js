


var list_val_wall = [0,0,0,0], index_list_chk_size_wallpaper = 0;
var LWp = [];
function calcWallpaper(slide) {
    Exit = 'wallpaper';
    lay_wallpaper = app.CreateLayout("linear", "FillXY");
    var title_ = app.CreateTitle('Подсчет обоев');
    lay_wallpaper.AddChild(title_);
    LWp.unshift(lay_wallpaper);
//    lay_wallpaper.SetBackGradient(COLORS[BG][0], COLORS[BG][1]);
    lay_wallpaper.SetBackground('Img/bg'+BG+'.png', 'repeat');
    var scroll = app.CreateScroller(1,  1-BTNHEIGHT-GET_TOP-0.005);
    scroll.SetMargins(0, 0, 0, 0.005);
    var layScroll = app.CreateLayout("Linear", "fillxy,top"); 
    scroll.AddChild( layScroll );
    lay_wallpaper.AddChild(scroll);
/*    var line = app.CreateText('', 1, 2/HEIGHT);
    line.SetBackColor('#999999');
    layScroll.AddChild(line);*/
    var objs = [];
    var lay_chk = app.CreateLayout('linear', 'left');
    var name = ['0.53 × 10 m', '0.53 × 15 m', '0.7 × 10 m', '1.06 × 10 m', '1.06 × 25 m'];
    for (var i in name) {
      var lc = app.CreateList((name[i] + ':Img/' + (i==index_list_chk_size_wallpaper ? 'rbon' : 'rboff') + '.png'), 1, -1);
      lc.SetTextColor(TC[BG]);
      lc.objs = objs;
      objs.push(lc);
      lc.ind = i;
      lc.SetOnTouch(set_val_wal2);
      lc.SetOnLongTouch(set_val_wal2);
      lay_chk.AddChild(lc);
      line = app.CreateText('', 1, 2/HEIGHT);
      line.SetBackColor(i==4 ? '#0088aa' : '#999999');
      lay_chk.AddChild(line);
    }
    layScroll.AddChild(lay_chk);
    var l = app.CreateLayout("Linear", "Horizontal,FillX,vcenter");
    var item = app.CreateList('Периметр  помещения‚ м.*', 0.72, -1);
    item.SetFontFile('fonts/DroidSerif-Regular.ttf');
    item.SetTextSize(TextSize);
    item.SetTextColor(TC[BG]);
    item.SetTextMargins(0.01, 0.006, 0, 0.006);
    item.SetOnTouch(set_val_wal);
    item.SetOnLongTouch(set_val_wal);
    l.AddChild(item);
    var btn = app.CreateText(list_val_wall[0], 0.23, -1);
    item.obj = ['Периметр  помещения‚ м.', btn, 0];
    btn.SetTextSize(TextSize);
    btn.SetTextColor(TC[BG]);
    btn.obj = ['Периметр  помещения‚ м.', btn, 0];
    btn.scale = true;
    btn.SetOnTouchUp(set_val_wal);
    btn.SetMargins(0, 0, 0.016, 0);
    l.AddChild(btn);
    layScroll.AddChild(l);
    var line = app.CreateText('', 1, 2/HEIGHT);
    line.SetBackColor('#777777');
    layScroll.AddChild(line);
    var l = app.CreateLayout("Linear", "Horizontal,FillX,vcenter");
    var item = app.CreateList('Общая ширина участков‚ вычитаемых из периметра (окна‚ двери итп)‚ м.', 0.72, -1);
    item.SetFontFile('fonts/DroidSerif-Regular.ttf');
    item.SetTextSize(TextSize);
    item.SetTextColor(TC[BG]);
    item.SetTextMargins(0.01, 0.006, 0, 0.006);
    item.SetOnTouch(set_val_wal);
    item.SetOnLongTouch(set_val_wal);
    l.AddChild(item);
    var btn = app.CreateText(list_val_wall[1], 0.23, -1);
    item.obj = ['Общая ширина участков‚ вычитаемых из перимета‚ м.', btn, 1];
    btn.SetTextSize(TextSize);
    btn.SetTextColor(TC[BG]);
    btn.obj = ['Общая ширина участков‚ вычитаемых из перимета‚ м.', btn, 1];
    btn.SetOnTouchUp(set_val_wal);
    btn.scale = true;
    btn.SetMargins(0, 0, 0.016, 0);
    l.AddChild(btn);
    layScroll.AddChild(l);
    var line = app.CreateText('', 1, 2/HEIGHT);
    line.SetBackColor('#777777');
    layScroll.AddChild(line);
    var l = app.CreateLayout("Linear", "Horizontal,FillX,vcenter");
    var item = app.CreateList('Высота стен‚ м.*', 0.72, -1);
    item.SetFontFile('fonts/DroidSerif-Regular.ttf');
    item.SetTextSize(TextSize);
    item.SetTextColor(TC[BG]);
    item.SetTextMargins(0.01, 0.006, 0, 0.006);
    item.SetOnTouch(set_val_wal);
    item.SetOnLongTouch(set_val_wal);
    l.AddChild(item);
    var btn = app.CreateText(list_val_wall[2], 0.23, -1);
    item.obj = ['Высота стен‚ м.', btn, 2];
    btn.SetTextSize(TextSize);
    btn.SetTextColor(TC[BG]);
    btn.scale = true;
    btn.obj = ['Высота стен‚ м.', btn, 2];
    btn.SetOnTouchUp(set_val_wal);
    btn.SetMargins(0, 0, 0.016, 0);
    l.AddChild(btn);
    layScroll.AddChild(l);
    var line = app.CreateText('', 1, 2/HEIGHT);
    line.SetBackColor('#777777');
    layScroll.AddChild(line);
    var l = app.CreateLayout("Linear", "Horizontal,FillX,vcenter");
    var item = app.CreateList('Шаг рисунка обоев‚ м.', 0.72, -1);
    item.SetFontFile('fonts/DroidSerif-Regular.ttf');
    item.SetTextSize(TextSize);
    item.SetTextColor(TC[BG]);
    item.SetTextMargins(0.01, 0.006, 0, 0.006);
    item.SetOnTouch(set_val_wal);
    item.SetOnLongTouch(set_val_wal);
    l.AddChild(item);
    var btn = app.CreateText(list_val_wall[3], 0.23, -1);
    item.obj = ['Шаг рисунка обоев‚ м.', btn, 3];
    btn.SetTextSize(TextSize);
    btn.SetTextColor(TC[BG]);
    btn.obj = ['Шаг рисунка обоев‚ м.', btn, 3];
    btn.SetOnTouchUp(set_val_wal);
    btn.SetMargins(0, 0, 0.016, 0);
    btn.scale = true;
    l.AddChild(btn);
    layScroll.AddChild(l);
    var line = app.CreateText('', 1, 2/HEIGHT);
    line.SetBackColor('#777777');
    layScroll.AddChild(line);
    var btn = app.CreateText('* обязательные к заполнению поля', -1, -1, 'multiline,left');
    btn.SetTextSize(TextSize*0.9);
    btn.SetTextColor(TC[BG]);
    btn.SetMargins(0, 0, 0.016, 0);
    layScroll.AddChild(btn);
    resultWall = app.CreateText('', 0.95, -1, "Multiline");
    resultWall.SetBackGradient('#77'+COLORS[BG][1].slice(1), '#77'+COLORS[BG][0].slice(1));
    resultWall.SetTextSize(TextSize);
    resultWall.SetTextColor(TC[BG]);
    resultWall.SetMargins(0, 0.02, 0, 0.02);
    layScroll.AddChild(resultWall);
    if (slide) lay_wallpaper.SetVisibility("Hide");
  var ltit = app.CreateLayout("Linear", "Horizontal,FillX,right");
    var exit = app.CreateButton('[fa-power-off]', 0.25, BTNHEIGHT, "FontAwesome, custom");
    exit.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
    exit.SetTextColor('#bb0000');
    exit.SetTextSize(TextButtonsSize, 'px');
    exit.SetOnTouch(_exitOnTouch);
    ltit.AddChild(exit);
  var k = app.CreateButton('[fa-calculator]', 0.25, BTNHEIGHT, "FontAwesome, custom");
  k.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
  k.SetTextSize(TextButtonsSize, 'px');
  k.SetTextColor(TC2[BG]);
  k.SetOnTouch(wallShowCalculator);
  ltit.AddChild(k);
  var help = app.CreateButton('[fa-info-circle]', 0.25, BTNHEIGHT, "FontAwesome, custom");
  help.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
  help.SetTextColor(TC2[BG]);
  help.SetTextSize(TextButtonsSize, 'px');
  help.SetOnTouch(infoWall);
  ltit.AddChild(help);
  k$ = app.CreateButton('[fa-close]', 0.25, BTNHEIGHT, "FontAwesome, custom");
  k$.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
  k$.SetTextSize(TextButtonsSize, 'px');
  k$.SetTextColor(JSON.stringify(list_val_wall) == '[0,0,0,0]' ? '#80333333' : '#bb0000');
  k$.SetOnTouch(Reset);
  ltit.AddChild(k$);
    lay_wallpaper.AddChild(ltit);
    app.AddLayout( lay_wallpaper);
    if (slide) lay_wallpaper.Animate('ScaleFromLeft');
    showResultWallpaper(index_list_chk_size_wallpaper);
    if (LWp.length > 1) {
        var n = LWp.length;
        for (var i = 1; i < n; i++)
            app.DestroyLayout(LWp.pop());
    }
}


function infoWall() {
    var hlp = "  Этот раздел предназначен для ориентировочного подсчёта количества обоев для помещения.\nОбратите внимание, что вычитаемые участки - двери, окна, и т. п. - это те участки, где не требуется оклейка листами в полную высоту. Возможно, над и/или под этими участками также требуется оклейка, но это Вы должны учесть сами, исходя из остающихся обрезков от рулонов (если обои требуют подгонки по рисунку, то длина обрезков высчитывается приблизительно, из-за разного начала рисунка в рулонах).\n  При указании размера высоты стен, зачастую требуется добавить несколько сантиметров для нахлёста и последующей прирезки к багету, плинусу, и т. п.\n  Помните, что программа выполняет лишь ориентировочный подсчет и не может учесть всевозможных нюансов. Окончательное решение за Вами, исходя из конкретной ситуации и Вашего опыта.";
    Alert2(hlp, '<img src="Img/about.png"> Info', 'Ясно', 1);
}


function wallShowCalculator() {
    Exit = 'calc_show_wall';
    showCalculator();
}

function Reset() {
    list_val_wall = [0, 0, 0, 0];
    calcWallpaper();
}

function set_val_wal(v) {
        if (this.scale) resizeButton(this, 1, 0.85);
        Exit = 'inputwall';
        itemobjw = this.obj;
        var title = itemobjw[0], value = itemobjw[1].GetText();
        inputDigital(setwal2, 'float', title, value);
}

function setwal2(v) {
    Exit = 'wallpaper';
    itemobjw[1].SetText(v);
    list_val_wall[itemobjw[2]] = v;
    k$.SetTextColor(JSON.stringify(list_val_wall) == '[0,0,0,0]' ? '#80555555' : '#bb0000');
    showResultWallpaper(index_list_chk_size_wallpaper);
}

function set_val_wal2(c) {
  var objs = this.objs;
  var ind = this.ind;
  if (index_list_chk_size_wallpaper == ind) return;
  for(var i in objs) {
    var p = objs[i].GetList()[0];
    if (p.image == 'Img/rbon.png') 
    {
        var n = p.title;
        objs[i].SetItem(n, n, null, 'Img/rboff.png');
    }
  }
  this.SetItem(c, c, null, 'Img/rbon.png');
  index_list_chk_size_wallpaper = ind;
  showResultWallpaper(index_list_chk_size_wallpaper);
}

function showResultWallpaper(check) {
            var check = check || 0;
            var text = [];
            var p = list_val_wall[0];
            var pm = list_val_wall[1];
            var h = list_val_wall[2];
            var step = list_val_wall[3];
                var per = Round(p - pm);
                var w_roll = [0.53, 0.53, 0.7, 1.06, 1.06][check];
                var l_roll = [10, 15, 10, 10, 25][check];
                if (!p || h < 0.1)  text.push('Недостаточно данных.');
                else if (per <= 0) text.push('Некорректные данные: ширина проёмов должна быть меньше, чем периметр стен.');
                else if (step > 0.99)  text.push('Слишком большой шаг рисунка.')
                else if (p > 500)  text.push('Слишком большой периметр стен.')
                else if (l_roll < h + step) text.push('Слишком большая высота стен.');
                else {
  var ltit = app.CreateLayout("Linear", "Horizontal,FillX,right");
  var mn = app.CreateButton('[fa-ellipsis-v]', 0.5, BTNHEIGHT, "FontAwesome, custom");
  mn.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
  mn.SetTextColor(TC2[BG]);
  mn.ID = 'mn';
  mn.SetTextSize(TextButtonsSize, 'px');
  mn.SetOnTouch(ccFormMenuOnTouch);
  ltit.AddChild(mn);
  var ok = app.CreateButton('[fa-share]', 0.5, BTNHEIGHT, "FontAwesome, custom");
  ok.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
  ok.SetTextColor('#009000');
  ok.SetTextSize(TextButtonsSize, 'px')
  ok.ID = 'ok';
  ok.SetOnTouch(inputSaveCalculation);
  ltit.AddChild(ok);
  lay_priceForm.AddChild(ltit);                    if (step) h_leat = Round(step * Math.ceil(h / step));
                    else  h_leat = Round(h);
                    var n = [Math.floor(l_roll/h_leat), l_roll%h_leat];
                    var n_roll = Math.ceil(per / (n[0] * w_roll));
                    var n_leat = Math.ceil(per / w_roll);
                    var t_leat = n_roll * n[0];
                    text.push('Обои: ' + ['0.53×10m', '0.53×15m', '0.7×10m', '1.06×10m', '1.06×25m'][check])
                    var tmp = [];
                    for (var k = 11; k < 20; k++) tmp.push(k);
                    if (tmp.indexOf(n_leat % 100) != -1 || 4 < (n_leat % 10) || !(n_leat % 10)) end = 'ов';
                    else if (1 < (n_leat % 10) && (n_leat % 10) < 5)  end = 'а';
                    else  end = '';
                    text.push('Количество рулонов: ' + n_roll + ' шт. [' + n_leat + ' лист' + end + ' × ' +h_leat  + ' м];' );
                    text.push('Обрезки:')
                    var wo = Round(w_roll - (per % w_roll ? per % w_roll : w_roll));
                    var q = 0;
                    if (h_leat - h > 0.049 && n_leat > 1) {
                        q = 1;
                        text.push('≈ ' + Math.round((h_leat - h) * 100) + ' см - ' +  (n_leat-1) + 'шт. (обрезки с листов при подгонке рисунка);');
                        }
                    if (n[1] > 0.049 || n_roll == 1) {
                        if (n_roll > 1 && n[1]) {
                            q = 1
                            text.push((step ? '≈ ' : '') + Round(n[1]) + ' м - ' + Round(n_roll - (n_leat==t_leat ? 0 : 1)) + ' шт. (остатки с каждого рулона' + (n_leat==t_leat ? '' : ', кроме последнего') + ');');
                            }
                        else {
                            o = Round(l_roll-n_leat*h_leat);
                            if (o > 0.049) {
                                q = 1
                                text.push('Остаток с рулона: ' + o + ' м;')
                                }
                            }
                        }
                    if (n_leat < t_leat && n_roll > 1) {
                        var o = Round(l_roll-(n[0]-t_leat+n_leat)*h_leat);
                        if (o > 0.049) {
                            q = 1;
                            text.push('Остаток с последнего рулона: '+ (step ? '≈ ' : '') + o + ' м;' );
                            }
                        }
                    if (wo > 0.049) {
                        q = 1
                        text.push(h_leat + ' × ' + wo + ' м - продольный отрезок с ' + (n_leat>1 ? 'последнего ' : '') + 'листа.');
                        }
                    if (! q) text.push('нет обрезков.');
                }
                resultWall.SetText(text.join('\n'));
}




function readJson(file)
{
    var mo = file.match(/^.+?Object_light calculation 20[1-2]\d_[0-1]\d_[0-3]\d [0-2]\d-[0-5]\d-[0-5]\d.json$/);
    if (!mo)
    {
        Alert('Файл ' + file + ' не является расчетом.', '<img src="Img/alert.png"> Oops!', 'Ясно', false, _Exit);
        return;
    }
    try {
        var dct = JSON.parse(app.ReadFile(file));
        var hist = JSON.parse(HISTORY);
        var i = 0, ii = 0;
        outer: for (var k in dct)
        {
            var value = dct[k];
            try {
                for (var j=0; j<value.length; j++) {
                    var v = value[j];
                    for (var y in v) {
                        var end = y.slice(-1);
                        if ('SL10MV'.indexOf(end) == -1)
                            continue outer;
                    }
                }
            }
            catch (er) {continue outer}
            i += 1;
            if (k in hist) ii += 1;
            hist[k] = value;
        }
        if (! i)
        {
            Alert('Файл ' + file + ' не является расчетом.', '<img src="Img/alert.png"> Oops!', 'Ясно', false, _Exit);
            return;
        }
        var g = '';
        if (ii)
            g = ' (' + ii + (ii > 1 ? ' заменят ' : ' заменит ') + (ii > 1 ? ' имеющиеся ' : ' имеющийся ') + (ii > 1 ? ' расчеты' : ' расчет') + ')'; 
        var r;
        var s1 = (i + '').slice(-1), s2 = (i+ '').slice(-2);
        if (s2 > 4 && s2 < 21 || s1 > 4 || s1 == 0)  r = ' расчетов';
        else if (s1 == 1) r = ' расчет';
        else if (s1 < 5)  r = ' расчета';
        var query = 'Файл ' + file + ' содержит ' + i + r + g + '. Импортировать файл?';
        readJson.hist = hist;
        readJson.file = file;
        YesNoDialog(readJson2, query, '<img src="Img/help.png"> Подтвердите:');
    } catch (err) {
        Alert('Файл ' + file + ' не является расчетом.', '<img src="Img/alert.png"> Oops!', 'Ясно', false, _Exit);
    }
}

function readJson2(p) 
{
    Dialog.Dismiss();
    app.DestroyLayout(layDlg);
    if(this.ID == 'Yes')
    {
        HISTORY = JSON.stringify(readJson.hist);
        ComplexCalculation1.hist.SetTextColor(TC2[BG]);
        app.SaveText('History', HISTORY);
        YesNoDialog(Reboot, 'Файл расчетов импортирован', '<img src="Img/about.png"> Сделано.', 'Ребут', 'Выход');
    }
    else _Exit();
}


function Reboot()
{
    Dialog.Dismiss();
    app.DestroyLayout(layDlg);
    if (this.ID == 'Yes')
    {
        var now = new Date().getTime();
        app.SetAlarm( "Set", 1234, null, now + 2000 );
        _Exit();
    }
    else if (this.ID == 'No')
        _Exit();
}

function OnResume()
{
    var file = app.GetSharedFiles();
    if (file) {
    	if (file[0].slice(-6) == '.items')
    		return readItems(file[0]);
        readJson(file[0]);
    }
}



function sendItems() {
	var d = new Date();
    var date = d.getFullYear() + "_" + Format(d.getMonth()+1) + "_" + Format(d.getDate()) + " " + Format(d.getHours()) + "-" + Format(d.getMinutes()) + "-" + Format(d.getSeconds());
     app.MakeFolder('/sdcard/.Object_light');
    var path = '/sdcard/.Object_light/Object_light items ' + date + '.items';
    var crypt = app.CreateCrypt();
	var items = crypt.Encrypt(params_cc1.join('\n'), 'd'); 
    app.WriteFile(path, items);
    app.SendFile(path, 'Object_light items ' + date, 'Send File');
}



function readItems(file) {
	if (file=='No' || file=='Cancel') return;
	else if (file=='Yes') {
		app.SaveText('cc1', readItems.lst2.join('\n'));
		ComplexCalculation1();
		YesNoDialog(Reboot, 'Файл пунктов работ импортирован', '<img src="Img/about.png"> Сделано.', 'Ребут', 'Выход');
		return;
	}
   var mo = file.match(/^.+?Object_light items 20[1-2]\d_[0-1]\d_[0-3]\d [0-2]\d-[0-5]\d-[0-5]\d.items$/);
    if (!mo) {
        Alert('Файл ' + file + ' не является списком пунктов или испорчен.', '<img src="Img/alert.png"> Oops!', 'Ясно', false, _Exit);
        return;
    }
    var crypt = app.CreateCrypt();
	var items = crypt.Decrypt(app.ReadFile(file), 'd'); 
	try {
		var lst = items.split('\n');
		var lst2 = [], x, z, mo;
		for (var i in lst) {
			x = lst[i];
			z = x.slice(-1);
			if ('VSL10M$'.indexOf(z) == -1) {
				Alert('Файл ' + file + ' не является списком пунктов или испорчен.', '<img src="Img/alert.png"> Oops!', 'Ясно', false, _Exit);
				return;
			}
			lst2.push(x);
		}
		} catch(e) {
		Alert('Файл ' + file + ' не является списком пунктов или испорчен.', '<img src="Img/alert.png"> Oops!', 'Ясно', false, _Exit);
		return;
	}
		arguments.callee.lst2 = lst2;
		var t = '';
		for (var i in lst2) 
			t += lst2[i].slice(0, -1) + '\n';
		YesNoDialog2(readItems, 'Принятый файл содержит следующие пункты:\n\n'.bold() +  t + '\nВы согласны заменить имеющиеся пункты на вышеуказанные?'.bold(), '<img src="Img/help.png"> Подтвердите:', true);

}


function sendBTtxt() {
	var d = new Date();
    var date = d.getFullYear() + "_" + Format(d.getMonth()+1) + "_" + Format(d.getDate()) + " " + Format(d.getHours()) + "-" + Format(d.getMinutes()) + "-" + Format(d.getSeconds());
     app.MakeFolder('/sdcard/.Object_light');
    var path = '/sdcard/.Object_light/Object_light calculation ' + date + '.txt';
    app.WriteFile(path, ShowCopy.txt);
    app.SendFile(path, 'Object_light calculation ' + date, 'Send File');
    cancelShowCheck(); 
}




function sendBT() {
	var d = new Date();
    var date = d.getFullYear() + "_" + Format(d.getMonth()+1) + "_" + Format(d.getDate()) + " " + Format(d.getHours()) + "-" + Format(d.getMinutes()) + "-" + Format(d.getSeconds());
    var obj = {}, hist = JSON.parse(HISTORY);
    for (var i=0; i<showCheck.length; i++) {
        var k = showCheck[i].split('^n^')[0].slice(10);
        if (hist[k]) obj[k] = hist[k];
    }
    app.MakeFolder('/sdcard/.Object_light');
    var path = '/sdcard/.Object_light/Object_light calculation ' + date + '.json';
    app.WriteFile(path, JSON.stringify(obj));
    app.SendFile(path, 'Object_light calculation ' + date, 'Send File');
    cancelShowCheck(); 
}





//prices2

function clearAllPrices(p) {
    if (typeof this.ID == 'string') {
        Dialog.Dismiss();
        app.DestroyLayout(layDlg);
        if (this.ID=='Yes') {
            for (var i in defaultPrices) defaultPrices[i] = 0;
            app.SaveText('defaultPrices', JSON.stringify(defaultPrices));
            app.ShowPopup('Выполнено', 'Short');
            return setPricesDefault();
        }
    }
    else 
    {
        
        if (!isPrice()) return app.ShowPopup("Нечего обнулять.", "short");
        YesNoDialog(clearAllPrices, 'Обнулить все заданные расценки?', '<img src="Img/help.png"> Подтвердите:');
    }
}

lstLP = [];

function isPrice()
{
    for (var i in defaultPrices)
    {
        if (defaultPrices[i]) return 1;
    }
    return 0;
}

function setPricesDefault(slide) {
  Exit = 'price2';
  lay_prices = app.CreateLayout("Linear", "Top,FillXY");
  var title_ = app.CreateTitle('Расценки по-умолчанию');
  lay_prices.AddChild(title_);
  lstLP.unshift(lay_prices);
  lay_prices.SetBackground('Img/bg'+BG+'.png', 'repeat');
  var scroll = app.CreateScroller(1,  1-BTNHEIGHT-GET_TOP-0.005);
  scroll.SetMargins(0, 0, 0, 0.005); 
  lay_prices.AddChild(scroll);
  var layScroll = app.CreateLayout("Linear", "fillxy,top"); 
  scroll.AddChild( layScroll );
  var btn0;
  for (var i in params_cc1) {
     var name_ = params_cc1[i];
     var l = app.CreateLayout("Linear", "Horizontal,FillX,vcenter");
     var dct = {'S': '/м².', 'L': '/м.п.', '1': '/ед.', 'V': '/м³', 'M': '/кг.', '0': ''};
     var price = defaultPrices[name_] ? defaultPrices[name_] : 0;
     var text = name_.slice(0, -1);
     if (text.charAt(0) != '<') 
     {
         text += ('‚ ' + Currency + dct[name_.slice(-1)]);
         var item = app.CreateText(text, 0.69, -1, 'multiline,left');
         item.SetFontFile('fonts/DroidSerif-Regular.ttf');
     }
     else var item = app.CreateText(text, 1, -1, 'html,multiline');
     item.SetMargins(0.01, 0.02, 0.01, 0.02);
     item.SetTextSize(TextSize);
     item.SetTextColor(TC[BG]);
     l.AddChild(item);
     if (text.charAt(0) != '<')
     {
         var btn = app.CreateTextEdit(+price||'', 0.29, -1, 'number,left,singleline');
         if (!btn0) btn0 = btn;
         item.obj = [name_, i, btn];
         btn.SetTextColor(TC[BG]);
         btn.SetHint('0');
         btn.SetCursorColor('#0088aa');
         btn.obj = [name_, i, btn];
         btn.SetOnChange(setPrice2_1);
         l.AddChild(btn);
     }
     layScroll.AddChild(l);
     var line = app.CreateText('', 1, 2/HEIGHT);
     line.SetBackColor('#888888');
     layScroll.AddChild(line);
    }  
  if (slide) lay_prices.SetVisibility("Hide");
   var ltit = app.CreateLayout("Linear", "Horizontal,FillX,right");
    var exit = app.CreateButton('[fa-power-off]', 0.33, BTNHEIGHT, "FontAwesome, custom");
    exit.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
    exit.SetTextColor('#bb0000');
    exit.SetTextSize(TextButtonsSize, 'px');
    exit.SetOnTouch(_exitOnTouch);
    ltit.AddChild(exit);
  var clear = app.CreateButton('[fa-close]', 0.33, BTNHEIGHT, "FontAwesome, custom");
  clear.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
  clear.SetTextColor(['#80'+TC2[BG].slice(1), '#bb0000'][isPrice()]);
  clear.SetTextSize(TextButtonsSize, 'px')
  clear.SetOnTouch(clearAllPrices);
  setPricesDefault.clear = clear;
  ltit.AddChild(clear);
    var ok = app.CreateButton('[fa-check]', 0.33, BTNHEIGHT, "FontAwesome, custom");
    ok.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
    ok.SetTextColor('#00aa00');
    ok.SetTextSize(TextButtonsSize, 'px');
    ok.SetOnTouch(OnBack);
    ltit.AddChild(ok);
    lay_prices.AddChild(ltit);
  app.AddLayout(lay_prices);
  app.SimulateTouch(btn0);
  btn0.SetCursorPos(btn0.GetText().length);
  if (slide) lay_prices.Animate('ScaleFromLeft');
  if (lstLP.length>1)  {
     var n = lstLP.length;
     for (var i = 1; i < n; i++)
          app.DestroyLayout(lstLP.pop());
  }
}




function setPrice2_1(v) {
	var r = /^\d{0,5}\.?\d{0,2}$/g;
	var t = this.GetText();
	if (t===null)
		return app.ShowPopup('Не торопитесь', 'short');
	if (t == '.') {
		this.SetText('0.');
		t = '0.';
		this.SetCursorPos(2);
	}
	else if (!t.match(r)) {
		this.Undo();
	}
	t = Round(t || 0);
	defaultPrices[this.obj[0]] = t;
	app.SaveText('defaultPrices', JSON.stringify(defaultPrices));
	setPricesDefault.clear.SetTextColor(["#80"+TC2[BG].slice(1), '#bb0000'][isPrice()]);
}





var lstFinLay = [];
function finOnTouch(a, slide, scrollY) {
    if (!a && Pass[1] && !PASS) 
        return inputPassword(OnTouchPassword, 'Вход в раздел:');
    try {
        Dialog.Hide();
        app.DestroyLayout(layDlg);
    }
    catch(e) {}
    if (a && !PASS) PASS = true;
    if (String(Exit).indexOf('fin') < 0) OldExit = Exit;
    Exit = 'finance';
    FinCheck = [];
    lay_ccFin = app.CreateLayout("Linear", "Top,FillXY");
    var title_ = app.CreateTitle(['Учет доходов', 'Учет расходов'][FinFlag]);
    lay_ccFin.AddChild(title_);
    lstFinLay.unshift(lay_ccFin);
    lay_ccFin.SetBackground('Img/bg'+BG+'.png', 'repeat');
    arguments.callee.scroll = app.CreateScroller(1,  1-BTNHEIGHT-GET_TOP-0.005); 
    arguments.callee.scroll.SetMargins(0, 0, 0, 0.005);
    lay_ccFin.AddChild(arguments.callee.scroll);
    var layScroll = app.CreateLayout("Linear", "fillxy,top"); 
    arguments.callee.scroll.AddChild( layScroll );
    FinListList = []; 
    var temp = [], temp2 = JSON.parse(JSON.stringify([FIN, FIN2][FinFlag])),  c = 0;
    temp2.reverse();
    for (var t in temp2) {
      var tx = temp2[t];
      var v = tx.split(' ')[0];
      c = Round(c+(+v));
      if (c > v) {
          temp.unshift(v + '  [' + c + ']' + tx.slice(v.length));
          }
      else temp.unshift(tx);
     }
     for (var i in temp) {
      tx = temp[i] ;
      var l = app.CreateLayout("Linear", "FillX");
      var lst = app.CreateList(tx, 1, -1);
      lst.SetFontFile('fonts/DroidSerif-Regular.ttf');
      lst.SetTextColor(TC[BG]);
      lst.SetOnTouch(FinOnTouchList);
      lst.SetOnLongTouch(FinOnTouchListLong);
      FinListList.push(lst);
      lst.SetTextSize(TextSize);
      l.AddChild(lst);
      layScroll.AddChild(l);
      var line = app.CreateText('', 1, 2/HEIGHT);
      line.SetBackColor('#999999');
      layScroll.AddChild(line);
    } 
    if (!temp.length) {
      var t = app.CreateText('Пока нет записей', 1, -1, 'multiline');
      t.SetFontFile('fonts/DroidSerif-Regular.ttf');
      t.SetTextSize(TextSize);
      t.SetTextColor(TC[BG]);
      t.SetMargins(0, 0.2, 0, 0);
      layScroll.AddChild(t);
      add = app.CreateButton('&#160;<img src="Img/edit1.png"> ', -1, -1, "html");
      add.SetBackColor('#00000000');
      add.SetOnTouch(FinOnTouchButton);
      add.ID = 'add2';
      add.SetMargins(0, 0.1, 0, 0);
      add.SetTextSize(TextButtonsSize*1.5, 'px')
      layScroll.AddChild(add);
    }
    if (!slide) lay_ccFin.SetVisibility("Hide");
    var ltit = app.CreateLayout("Linear", "Horizontal,FillX, right");
    finButton = [];
    var menu = app.CreateButton('[fa-ellipsis-v]', 0.25, BTNHEIGHT, "FontAwesome, custom");
    menu.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
    finButton.push(menu);
    menu.SetTextColor(TC2[BG]);
    menu.ID = 'menu';
    menu.SetTextSize(TextButtonsSize, 'px');
    menu.SetOnTouch(FinOnTouchButton);
    ltit.AddChild(menu);
    var rotate = app.CreateButton('[fa-refresh]', 0.25, BTNHEIGHT, "FontAwesome, custom");
    rotate.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
    rotate.SetTextColor(TC2[BG]);
    finButton.push(rotate);
    rotate.SetTextSize(TextButtonsSize, 'px');
    rotate.SetOnTouch(
        function(p){finMenu('Учет')});
    ltit.AddChild(rotate);
    var calc = app.CreateButton('[fa-calculator]', 0.25, BTNHEIGHT, "FontAwesome, custom");
    calc.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
    calc.SetTextColor(TC2[BG]);
    finButton.push(calc)
    calc.ID = 'calc';
    calc.SetTextSize(TextButtonsSize, 'px');
    calc.SetOnTouch(FinOnTouchButton);
    ltit.AddChild(calc);
    var add = app.CreateButton('[fa-pencil]', 0.25, BTNHEIGHT, "FontAwesome, custom");
    add.SetStyle(COLORS[BG][1], COLORS[BG][1], 4, '#888888', 1, 0);
    add.SetTextColor(TC2[BG]);
    finButton.push(add)
    add.ID = 'add';
    add.SetTextSize(TextButtonsSize, 'px');
    add.SetOnTouch(FinOnTouchButton);
    ltit.AddChild(add);
    lay_ccFin.AddChild(ltit);
    app.AddLayout(lay_ccFin);
    if (!slide) lay_ccFin.Animate('ScaleFromLeft');
    setTimeout(function(){
      if (lstFinLay.length > 1) {
        var n = lstFinLay.length;
        for (var i = 1; i < n; i++)
            app.DestroyLayout(lstFinLay.pop());
      }
    }, 1000);
    if (scrollY != null) arguments.callee.scroll.ScrollTo(0, scrollY);
}

function finNote() {
    this.SetBackColor('#33aacc');
    app.Wait(0.1);
    Dialog.Dismiss();
    var txt = this.text.GetText().replace(/,/g, '‚')
      .replace(/:/g, ' -')
      .replace(/\n/g, ' ')
      .replace(/\t/g, ' ')
      .replace(/\"/g, '″')
      .replace(/\</g, '❮')
      .replace(/\>/g, '❯')
      .replace(/\\/g, '/') ;
    var i = [FIN, FIN2][FinFlag][FinListList.indexOf(finobj)];
    i = i.split('\n')[0] + '\n' + i.split('\n')[1].slice(0, 20) + ' ' + txt;
    var ind = FinListList.indexOf(finobj);
    [FIN, FIN2][FinFlag].splice(ind, 1, i);
    app.SaveText(['FIN', "FIN2"][FinFlag], JSON.stringify([FIN, FIN2][FinFlag]));
    app.DestroyLayout(layDlg);
    finOnTouch(0, 1, finOnTouch.scroll.GetScrollY());
}



function delFinItem() {
    Dialog.Dismiss();
    app.DestroyLayout(layDlg);
    if (this.ID == 'Yes') {
        [FIN, FIN2][FinFlag].splice(FinListList.indexOf(finobj), 1);
        app.SaveText(['FIN', 'FIN2'][FinFlag], JSON.stringify([FIN, FIN2][FinFlag]));
        app.ShowPopup('Запись удалена', 'Short');
        finOnTouch(0, 1, finOnTouch.scroll.GetScrollY());
        }
}

function FinCopy(i) {
    i = '' + i;
    app.SetClipboardText(i);
    var ind = Clipboard.indexOf(i);
        if (~ind) Clipboard.splice(ind, 1);
    Clipboard.unshift(i);
    app.ShowPopup('Скопировано в буфер.', 'Short');
}


function FinOnTouchListLong() {
    var temp = FinListList.slice(0, FinListList.indexOf(this)+1);
    temp.reverse();
    var c = 0, f = [], lst = [];
    for (var i in temp) 
    {
        var item = [FIN, FIN2][FinFlag][FinListList.indexOf(temp[i])];
        var s = item.match(/(\d+\.?\d*)/g)[0];
        var date = item.split('\n')[1];
        c += +s;
        if (c > s)
            lst.unshift(s + ' [' + Round(c) + '] ' + Currency + '\n' + date);
        else 
            lst.unshift(s + ' ' + Currency + '\n' + date);
    }
    Alert2(lst.join('\n\n'), '<img src="Img/about.png"> Отсчет с выбранного пункта (снизу вверх):');
}


function FinOnTouchList(item) {
    if (item == 'Удалить') {
        yn = YesNoDialog(delFinItem, 'Удалить запись ' + [FIN, FIN2][FinFlag][FinListList.indexOf(finobj)].split('\n')[0] + '?', '<img src="Img/help.png"> Подтвердите:');
        }
    else if (item == 'Копировать в буфер') {
        var mo = FinOnTouchList.item.split('^n^')[0].match(/(\d+\.?\d*) \[(\d+\.?\d*)\]/g);
        if (!mo)
            mo = FinOnTouchList.item.split('^n^')[0].match(/(\d+\.?\d*)/g);
        mo.push(FinOnTouchList.item.replace(/\^n\^/, '  '));
        CreateListDialog(FinCopy, '<img src="Img/grey.png"> Что копировать:', mo);
        }
    else if (item == 'Заметка') {
        Dialog = app.CreateDialog("", 'NoTitle');
        layDlg = app.CreateLayout("linear", "vertical,fillxy" );
        layDlg.SetBackGradient(COLORS[BG][0], COLORS[BG][1]);
        Dialog.AddLayout(layDlg);
    var titl = app.CreateText('<img src="Img/edit1.png"> <big><b>Заметка:</b></big>', 
            0.9, -1, 'multiline,html,left');
        titl.SetTextColor('#3098ba');
        titl.SetMargins(0, 0.02, 0, 0.02);
        layDlg.AddChild(titl);
        var line = app.CreateText('', 0.95, 2/app.GetScreenHeight());
        line.SetBackColor('#3088aa');
        layDlg.AddChild(line);
        var i = [FIN, FIN2][FinFlag][FinListList.indexOf(finobj)].split('\n')[1].slice(21);
        var edt = app.CreateTextEdit(i, 0.9, -1);
        edt.SetCursorColor('#ff8800');;
        edt.SetTextColor(TC[BG]);
        edt.SetCursorPos(i.length);
        var line = app.CreateText('', 1, 2/HEIGHT);
        line.SetMargins(0, 0.02, 0, 0);
        line.SetBackColor('#aaaaaa');
        var btn = app.CreateButton("OK", 0.475, -1, 'html');
        btn.SetTextColor(TC[BG]);
        btn.SetBackColor('#00000000')
        btn.SetOnTouch(finNote);
        edt.SetOnChange(correction);
        btn.text = edt;
        layDlg.AddChild(edt);
        layDlg.AddChild(line);
    var o = app.CreateLayout("linear", 'horizontal');
    layDlg.AddChild(o);
    var b = app.CreateButton("Отмена", 0.475, -1, 'html');
    b.SetBackColor('#00000000')
    b.SetOnTouch(dlgCancel2);
    b.SetTextColor(TC[BG]);
    o.AddChild(b);
    var l = app.CreateText('', 1.5/WIDTH, -1, 'filly');
    l.SetBackColor('#aaaaaa');
    o.AddChild(l);
        o.AddChild(btn);
        Dialog.Show();
        Dialog.SetOnCancel(dlgCancel);
        }
    else if (item == 'Редактировать сумму') {
        Exit = 'input_fin';
        
        inputDigital(setFin2, 'float', 'Редактирование:', [FIN, FIN2][FinFlag][FinListList.indexOf(finobj)].split(' ')[0]);
        }
    else if (item == 'Редактировать дату записи') {
        var i = [FIN, FIN2][FinFlag][FinListList.indexOf(finobj)].split('\n')[1];
        var t = new Date(
            i.slice(0, 4), 
            +(i.slice(5, 7))-1, 
            i.slice(8, 10), 
            i.slice(12, 14), 
            i.slice(15, 17), 
            i.slice(18, 20), 0);
        setDate(editFinTime, t.getTime(), 'Новая дата и время:');
    }
    else {
        FinOnTouchList.item = item;
        CreateListDialog(FinOnTouchList, '<img src="Img/grey.png"> Действия с записью:', ['Заметка', 'Редактировать сумму', 'Редактировать дату записи', 'Копировать в буфер', 'Удалить']);
        finobj = this;
        }
}

function editFinTime(time) {
    var d = new Date(time);
    var date = d.getFullYear() + "." + Format(d.getMonth()+1) + "." + Format(d.getDate()) + "; " + Format(d.getHours()) + "-" + Format(d.getMinutes()) + "-" + Format(d.getSeconds());
    var l = [FIN, FIN2][FinFlag][FinListList.indexOf(finobj)].split('\n');
    if (l[1].slice(0, 17) == date.slice(0, 17))
        return app.ShowPopup("Без изменений");
    var t = l[0] + '\n' + date + l[1].slice(20);
    [FIN, FIN2][FinFlag].splice(FinListList.indexOf(finobj), 1, t);
    [FIN, FIN2][FinFlag].sort(function (a, b) {
            var x = a.split('\n')[1], y = b.split('\n')[1];
            if (x > y) return -1;
            else if (x < y) return 1;
            else return 0;
        });
    app.SaveText(['FIN', 'FIN2'][FinFlag], JSON.stringify([FIN, FIN2][FinFlag]));
    finOnTouch(0, 1);
    app.ShowPopup("Изменения сохранены", "short")
}


function setFin2(v) {
        if (!v) return finOnTouch(0, 1);
        var i = FinListList.indexOf(finobj);
        [FIN, FIN2][FinFlag].splice(i, 1, v + [FIN, FIN2][FinFlag][i].slice([FIN, FIN2][FinFlag][i].indexOf(' ')));
        app.SaveText(['FIN', 'FIN2'][FinFlag], JSON.stringify([FIN, FIN2][FinFlag]));
        finOnTouch(0, 1);
}


function FinOnTouchButton(v) {
    var id = this.ID || "menu";
    if (id == 'add' || id == 'add2') {
        if (id == 'add2' ) {
            this.SetBackColor('#880088aa');
            app.Wait(0.05);
            this.SetBackColor('#00000000');
        }
        Exit = 'input_fin';
        inputDigital(setFin, 'float', ['Получено, ', 'Затрачено, '][FinFlag] + Currency + ':', 0);
        }
    else if (id == 'menu') {
    	var list = [['Учет расходов','Учет доходов'][FinFlag]] ;
    	if ([FIN, FIN2][FinFlag].length)
    		list.push('Удалить все записи');
    	list.push('Выход');
    	CreateListDialog(finMenu, '<img src="Img/grey.png"> Выбор:', list);
    }
    else  if (id == 'calc') {
        Exit = 'calc_input_fin';
        showCalculator();
        }
}


function finMenu(t) {
	if (~t.indexOf('Учет')) {
		FinFlag = Math.abs(FinFlag-1);
		finOnTouch(0, 0);
	}
	else if (t=='Удалить все записи') {
		var yn = YesNoDialog(FinOnTouchButton2, 'Удалить все записи?', '<img src="Img/help.png"> Подтвердите:');
	}
	else if (t=='Выход') _Exit();
}

function FinOnTouchButton2(v) {
    Dialog.Dismiss();
    app.DestroyLayout(layDlg);
         if (this.ID == 'Yes') {
        [FIN, FIN2][FinFlag].splice(0, [FIN, FIN2][FinFlag].length);
        app.SaveText(['FIN', 'FIN2'][FinFlag], JSON.stringify([FIN, FIN2][FinFlag]));
        finOnTouch(0, 1);
        }
}

function setFin(v) {
    if (!v) return app.ShowPopup('Нулевая сумма, не сохранено', 'Short'), finOnTouch(0, 1);
    var d = new Date();
    var date = d.getFullYear() + "." + Format(d.getMonth()+1) + "." + Format(d.getDate()) + "; " + Format(d.getHours()) + "-" + Format(d.getMinutes()) + "-" + Format(d.getSeconds());
    var text = v + ' ' + Currency + '\n' + date;
    [FIN, FIN2][FinFlag].unshift(text);
    app.SaveText(['FIN', 'FIN2'][FinFlag], JSON.stringify([FIN, FIN2][FinFlag]));
    finOnTouch(0, 1);
}

//#####################settings###################
function Settings(scrollY) {
  Exit = 'sett';
  lay_sett = app.CreateLayout("linear", "FillXY");
  //lay_sett.SetBackGradient(COLORS[BG][0], COLORS[BG][1]);
  lay_sett.SetBackground('Img/bg'+BG+'.png', 'repeat');
  var title_ = app.CreateTitle('Настройки');
  lay_sett.AddChild(title_);
  arguments.callee.scroll = app.CreateScroller(1, -1); 
  var lay_sett2 = app.CreateLayout("linear", "FillXY");
  lay_sett2.SetSize(1, -1);
  arguments.callee.scroll.AddChild(lay_sett2);
  lay_sett.AddChild(arguments.callee.scroll);
  var tit = app.CreateText('<big>Валюта:</big>', 0.95, -1, "multiline,html,left");
  tit.SetTextColor(TC[BG]);
  tit.SetMargins(0, 0.02, 0, 0.01);
  lay_sett2.AddChild(tit);
  var name = ['Рубль (руб)', 'Гривна (грн)', 'Евро (€)', 'Доллар ($)'];
  var ind = ['руб', 'грн', '€', '$'].indexOf(Currency);
  var objs = [];
  for (var i in name) {
      var lc = app.CreateList((name[i] + ':Img/' + (i==ind ? 'rbon' : 'rboff') + '.png'), 0.9, -1);
      lc.SetFontFile('fonts/DroidSerif-Regular.ttf');
      lc.SetTextColor(TC[BG]);
      lc.objs = objs;
      objs.push(lc);
      lc.ind = i;
      lc.SetOnTouch(CurrencyOnTouch);
      lc.SetOnLongTouch(CurrencyOnTouch);
      lay_sett2.AddChild(lc);
      line = app.CreateText('', i==3 ? 0.98 : 0.9, (i==3?2.8:1.9)/HEIGHT);
      line.SetBackColor(i==3 ? '#009700' : '#999999');
      lay_sett2.AddChild(line);
  }
  var tit = app.CreateText('<big>Сумму за выполненные работы:</big>', 0.95, -1, "multiline,html,left");
  tit.SetTextColor(TC[BG]);
  tit.SetMargins(0, 0.02, 0, 0.01);
  lay_sett2.AddChild(tit);
  var name = ['Не округлять', 'Округлять к ближайшему целому', 'Округлять к меньшему целому', 'Округлять к большему целому'];
  var ind = app.LoadNumber('ROUNDING', 0);
  var objs = [];
  for (var i in name) {
      var lc = app.CreateList((name[i] + ':Img/' + (i==ind ? 'rbon' : 'rboff') + '.png'), 0.9, -1);
      lc.SetFontFile('fonts/DroidSerif-Regular.ttf');
      lc.SetTextColor(TC[BG]);
      lc.objs = objs;
      objs.push(lc);
      lc.ind = i;
      lc.SetOnTouch(RoundOnTouch);
      lc.SetOnLongTouch(RoundOnTouch);
      lay_sett2.AddChild(lc);
      line = app.CreateText('', i==3 ? 0.98 : 0.9, (i==3?2.8:1.9)/HEIGHT);
      line.SetBackColor(i==3 ? '#009700' : '#999999');
      lay_sett2.AddChild(line);
  }
  var tit = app.CreateText('<big>Дисплей:</big>', 0.95, -1, "multiline,html,left");
  tit.SetTextColor(TC[BG]);
  tit.SetMargins(0, 0.02, 0, 0.01);
  lay_sett2.AddChild(tit);
  SetScreenBrightnessButton = app.CreateList('Максимальная яркость дисплея:Img/' + (SetScreenBrightness ? 'select' : 'unselect') + '.png' , 0.9, -1);
  SetScreenBrightnessButton.SetTextColor(TC[BG]);
  SetScreenBrightnessButton.SetFontFile('fonts/DroidSerif-Regular.ttf');
  SetScreenBrightnessButton.SetOnTouch(setBrightness);
  SetScreenBrightnessButton.SetOnLongTouch(setBrightness);
  lay_sett2.AddChild(SetScreenBrightnessButton);
  line = app.CreateText('', 0.9, 2/HEIGHT);
  line.SetBackColor('#999999');
  lay_sett2.AddChild(line);
  SleepButton = app.CreateList('Не давать дисплею спать:Img/' + (SetScreenSleep ? 'select' : 'unselect') + '.png' , 0.9, -1);
  SleepButton.SetFontFile('fonts/DroidSerif-Regular.ttf');
  SleepButton.SetTextColor(TC[BG]);
  SleepButton.SetOnTouch(setSleep);
  SleepButton.SetOnLongTouch(setSleep);
  lay_sett2.AddChild(SleepButton);
  line = app.CreateText('', 0.98, 3/HEIGHT);
  line.SetBackColor('#009700');
  lay_sett2.AddChild(line);

  var tit = app.CreateText('<big>Выход из программы:</big>', 0.95, -1, "multiline,html,left");
  tit.SetTextColor(TC[BG]);
  tit.SetMargins(0, 0.02, 0, 0.01);
  lay_sett2.AddChild(tit);
  CloseButton = app.CreateList('Уточнять^c^ закрыть программу?:Img/' + (SetClose ? 'select' : 'unselect') + '.png' , 0.9, -1);
  CloseButton.SetFontFile('fonts/DroidSerif-Regular.ttf');
  CloseButton.SetTextColor(TC[BG]);
  CloseButton.SetOnTouch(setClose);
  CloseButton.SetOnLongTouch(setClose);
  lay_sett2.AddChild(CloseButton);
  line = app.CreateText('', 0.98, 3/HEIGHT);
  line.SetBackColor('#009700');
  lay_sett2.AddChild(line);

  if (Pass[1]==null) var s = 'Еще не задан';
  else if (Pass[1]==0) var s = "Не активирован";
  else if (Pass[1]==1) var s = "Активирован";
  passbutton = app.CreateList('Пароль на вход в раздел учета финансов:' + s + ":Img/key_edit.png", 0.9, -1);
  passbutton.SetFontFile('fonts/DroidSerif-Regular.ttf');
  passbutton.SetTextColor1(TC[BG]);
  passbutton.SetTextColor2(TC[BG]);
  passbutton.SetOnTouch(setPassword);
  passbutton.SetOnLongTouch(setPassword);
  passbutton.SetMargins(0, 0.01, 0, 0.01);
  lay_sett2.AddChild(passbutton);
  line = app.CreateText('', 0.98, 3/HEIGHT);
  line.SetBackColor('#009700');
  lay_sett2.AddChild(line);
  var lskb = app.CreateLayout("linear", "FillX");
  text_settings = app.CreateText('Размер шрифта ('+TextSize+' dp)', 0.95, -1, 'Multiline');
  text_settings.SetMargins(0, 0.02, 0, 0.01);
  text_settings.SetTextSize(TextSize);
  text_settings.SetTextColor(TC[BG]);
  lskb.AddChild(text_settings);
  var skb = app.CreateSeekBar(0.9);
  skb.SetMargins(0, 0.01, 0, 0.01);
  skb.SetOnTouch(skb_OnTouch);
  //skb.AdjustColor( -180, 100, 100 );
  skb.SetRange(33.0);
  skb.SetValue(TextSize - 8);
  lskb.AddChild(skb);
  lay_sett2.AddChild(lskb);
  lskb.SetMargins(0.05, 0.01, 0.05, 0.01);
  line = app.CreateText('', 0.98, 3/HEIGHT);
  line.SetBackColor('#009700');
  lay_sett2.AddChild(line);
  var tit = app.CreateText('<big>Тема приложения:</big>', 0.95, -1, "multiline,html,left");
  tit.SetTextColor(TC[BG]);
  tit.SetMargins(0, 0.02, 0, 0.01);
  lay_sett2.AddChild(tit);
  BGB = [];
  for (var i=0; i<2; i++) {
      var b = app.CreateList((i ? 'Светлая' : 'Темная') + ':Img/' + ((i == BG) ? 'rbon' : 'rboff') + '.png' , 0.9, -1);
      b.SetFontFile('fonts/DroidSerif-Regular.ttf');
      lay_sett2.AddChild(b);
      if (!i)
      {
          line = app.CreateText('', 0.9, 2/HEIGHT);
          line.SetBackColor('#999999');
          lay_sett2.AddChild(line);
      }
      else b.SetMargins(0, 0, 0, 0.02);
      b.ID = i;
      b.SetTextColor(TC[BG]);
      b.SetOnTouch(setBGD);
      b.SetOnLongTouch(setBGD);
      BGB.push(b);
  }

  lay_sett.SetVisibility('Hide');
  app.AddLayout(lay_sett); 
  lay_sett.Animate( "ScaleFromLeft" );
  arguments.callee.Flag = false;
}




function setPassword()
{
    if (Pass[1]==null) inputPassword(OnTouchPassword, 'Создать:', 'Create');
    else
    {
        var list = [(Pass[1] ? 'Деактивировать' : 'Активировать'), 'Изменить'];
        CreateListDialog(SetPassword2, '<img src="Img/key_edit.png"> Пароль:', list);
    }
}

function SetPassword2(i)
{
    inputPassword(OnTouchPassword, i+':', i=='Изменить' ? 'Edit' : 'OnOff');
}

function setBGD() {
    if (BG != this.ID) 
    {
        app.ShowPopup('Тема будет применена после выхода из раздела настроек', 'Short');
        BGB[BG].SetItem(BGB[BG].GetList()[0].title, BGB[BG].GetList()[0].title, null, 'Img/rboff.png');
        BG = this.ID;
        this.SetItem(this.GetList()[0].title, this.GetList()[0].title, null, 'Img/rbon.png');
        app.SaveNumber('BG', BG);
        Settings.Flag = true;
    }
}


function setBrightness(i) {
    var v = this.GetList()[0].image!='Img/select.png';
    app.SaveBoolean('SetScreenBrightness', v);
    if (!v && SetScreenBrightness) 
    {
        app.ShowPopup('Яркость восстановится после перезапуска приложения.', 'short');
    }
    else if (v) 
    {
        app.SetScreenBrightness( 1 );
    }
    SetScreenBrightness = v;
    this.SetItem(i, i, null, v ? 'Img/select.png' : 'Img/unselect.png');
    Settings.Flag = true;
}


function setSleep(i) {
    var v = (this.GetList()[0].image != 'Img/select.png');
    app.SaveBoolean('SetScreenSleep', v);
    SetScreenSleep = v;
    this.SetItem(i, i, null, v ? 'Img/select.png' : 'Img/unselect.png');
    Settings.Flag = true;
}


function setClose(i) {
    var v = (this.GetList()[0].image != 'Img/select.png');
    app.SaveBoolean('SetClose', v);
    SetClose = v;
    this.SetItem(i, i, null, v ? 'Img/select.png' : 'Img/unselect.png');
    Settings.Flag = true;
}



function setEmail(p)
{
    if (typeof p != 'string')
    {
        var list = JSON.parse(app.LoadText('Emails', JSON.stringify([])));
        if (list.length)
        {
            list.unshift('Ввести новый адрес');
            CreateListDialog(setEmail, '<img src="Img/sites.png"> Отослать расчет(ы):', list);
        }
        else setEmail1();
    }
    else
    {
        if (p == 'Ввести новый адрес') setEmail1();
        else
        {
            addEmail(p);
            app.SendMail(p, 'Программа для калькуляции строительных объектов "Object_light"', sendTextEmail);
        }
    }
}


function changeEmail() {
    var txt = this.GetText();
    if (txt.indexOf('\n') > -1 || txt.length > 100) return this.Undo();
    var reg = /^[^@]+@[^@]+\.[^@]+$/gi;
    if (!txt || /^\s+$/.test(txt) || !txt.match(reg)) {
        if (this.b.GetVisibility() == 'Show') {
            this.b.SetVisibility('hide');
        //    this.l.SetVisibility('hide');
        }
    } else {
        if (this.b.GetVisibility() == 'Hide') {
            this.b.SetVisibility('show');
        //    this.l.SetVisibility('show');
        }
    }
}


function setEmail1(mode) {
    emailMode = mode;
    Dialog = app.CreateDialog("", 'NoTitle');
    layDlg = app.CreateLayout("linear", "vertical,fillxy" );
    layDlg.SetBackGradient(COLORS[BG][0], COLORS[BG][1]);
    Dialog.AddLayout(layDlg);
    var titl = app.CreateText('<img src="Img/sites.png"> <big><b>E-mail:</b></big>', 
            0.9, -1, 'multiline,html,left');
        titl.SetTextColor('#3098ba');
        titl.SetMargins(0, 0.02, 0, 0.02);
        layDlg.AddChild(titl);
        var line = app.CreateText('', 0.95, 2/app.GetScreenHeight());
        line.SetBackColor('#3088aa');
        layDlg.AddChild(line);
    edt_email = app.CreateTextEdit('', 0.8, -1);
    edt_email.SetCursorColor('#ff8800');;
    edt_email.SetOnChange(changeEmail);
    edt_email.SetHint('Введите адрес');
    edt_email.SetTextColor(TC[BG]);
    layDlg.AddChild(edt_email);
    var line = app.CreateText('', 1, 2/HEIGHT);
    line.SetMargins(0, 0.02, 0, 0);
   // line.SetVisibility('hide');
    line.SetBackColor('#aaaaaa');
    layDlg.AddChild(line);
    var o = app.CreateLayout("linear", 'horizontal');
    layDlg.AddChild(o);
    var b = app.CreateButton("Отмена", 0.475, -1, 'html');
    b.SetBackColor('#00000000')
    b.SetOnTouch(dlgCancel2);
    b.SetTextColor(TC[BG]);
    o.AddChild(b);
    var l = app.CreateText('', 1.5/WIDTH, -1, 'filly');
    l.SetBackColor('#aaaaaa');
    o.AddChild(l);
    var btn = app.CreateButton("OK", 0.475, -1, 'html');
    btn.SetBackColor('#00000000')
    btn.SetOnTouch(setEmail2);
    btn.SetTextColor(TC[BG]);
    btn.SetVisibility('hide');
    edt_email.b = btn;
    edt_email.l = line;
    o.AddChild(btn);
    Dialog.Show();
    Dialog.SetOnCancel(dlgCancel);
}


function addEmail(addr)
{
    var addr = addr.toLowerCase();
    var list = JSON.parse(app.LoadText('Emails', JSON.stringify([])));
    if (list.indexOf(addr) == -1) list.unshift(addr);
    if (list.length > 20) list.pop();
    app.SaveText('Emails', JSON.stringify(list))
}

function setEmail2() {
    this.SetBackColor('#33aacc');
    Dialog.Dismiss();
    textemail = edt_email.GetText();
    addEmail(textemail);
    app.SendMail(textemail, 'Программа для калькуляции строительных объектов "Object_light"', sendTextEmail);
}


function RoundOnTouch(c) {
  var objs = this.objs;
  var ind = 0 + this.ind;
  if (ROUNDING == ind) return;
  for(var i in objs) {
    var p = objs[i].GetList()[0];
    if (p.image == 'Img/rbon.png') 
    {
        var n = p.title;
        objs[i].SetItem(n, n, null, 'Img/rboff.png');
    }
  }
  this.SetItem(c, c, null, 'Img/rbon.png');
  ROUNDING = ind;
  app.SaveNumber('ROUNDING', ind);
  Settings.Flag = true;
}



function CurrencyOnTouch(c) {
  var objs = this.objs;
  var ind = this.ind;
  var arr = ['руб', 'грн', '€', '$'];
  if (Currency == arr[ind]) return;
  Currency = arr[ind];
  for(var i in objs) {
    var p = objs[i].GetList()[0];
    if (p.image == 'Img/rbon.png') 
    {
        var n = p.title;
        objs[i].SetItem(n, n, null, 'Img/rboff.png');
    }
  }
  this.SetItem(c, c, null, 'Img/rbon.png');
  app.SaveText('Currency', Currency);
  Settings.Flag = true;
}


function skb_OnTouch(val) {
  val = Math.round(val + 8);
  if(val != TextSize){
    text_settings.SetText('Размер шрифта (' +val+ ' dp)');
    text_settings.SetTextSize(val);
    TextSize = val;
    fontSizeShow = TextSize;
    app.SaveNumber("TextSize", val);
    Settings.Flag = true;
  }
}



