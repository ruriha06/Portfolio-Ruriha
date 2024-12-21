
// スライドショー ////////////////////////////////////////

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
});





// 流れるテキスト ////////////////////////////////////////

function slideAnime(){
		$('.upAnime').each(function(){
            var elemPos = $(this).offset().top-50;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight){
            $(this).addClass("slideAnimeUpDown");
            $(this).children(".upAnimeInner").addClass("slideAnimeDownUp");
            }else{
            $(this).removeClass("slideAnimeUpDown");
            $(this).children(".upAnimeInner").removeClass("slideAnimeDownUp");
            }
            });
	}
	
	$(window).scroll(function (){
		slideAnime();
	});

	$(window).on('load', function(){
		slideAnime();
	});





// マップ ////////////////////////////////////////////////////////////////

// マップ本体

window.initMap = () => {

    let map;

    const mainArea = document.getElementById("map"); // マップを表示させるところ
    // マップの中心位置
    const mainCenter = {
      lat: 35.0927794,
      lng: 137.0471649
    };

    //マップ作成
    map = new google.maps.Map(mainArea, {
      center: mainCenter,
      zoom: 13.62,
      restriction: {
		latLngBounds: {
			north: 35.145153,
			south: 35.067894,
			west: 137.008044,
			east: 137.104141
		},
		strictBounds: false
	    },
        mapId: "ab4d61b45b02680"
    });


    // トッピィ参上
    const toppy = document.getElementById("toppy");
    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(toppy);





    // マーカーアイコン
    const eatIcon = {
        url: './images/eat-icon.png',
        scaledSize: new google.maps.Size(30, 50)
    };
    const playIcon = {
        url: './images/play-icon.png',
        scaledSize: new google.maps.Size(30, 50)
    };





    // マーカーデータ
    const markerData = [{
        "name": "Moff animal cafe ららぽーと愛知東郷店",
        "lat": 35.098829,
        "lng": 137.048181,
        "type": "playIcon",
        "address": "愛知県愛知郡東郷町東郷中央土地区画整理事業62街区1･3 ららぽーと愛知東郷3階",
        "open": "10:00 ～ 20:00(最終入園19:30)",
        "holiday": "ららぽーと愛知東郷の定休日に準ずる",
        "tel": "0561-56-3822",
        "img": "./images/mofu.jpg",
        "sub": "約40種類もの動物が出迎えてくれる本格アニマルカフェ",
        "ex": "4つのエリアに分かれた園内で、動物ガイドに参加したり、息遣いを感じるほど間近で動物を観察したり、実際に動物とふれあい、ごはんをあげて仲良くなる体験などを楽しむことができます。",
    },
    {
        "name": "VS PARK ららぽーと愛知東郷店",
        "lat": 35.099204,
        "lng": 137.045600,
        "type": "playIcon",
        "address": "愛知県愛知郡東郷町東郷中央土地区画整理事業62街区1･3 ららぽーと愛知東郷3階",
        "open": "10:00 ～ 21:00(最終入場20:30)",
        "holiday": "ららぽーと愛知東郷の定休日に準ずる",
        "tel": "0561-56-9661",
        "img": "./images/vs.jpg",
        "sub": "エンタメ要素盛沢山の“ヤバすぎ”スポーツを集めたバラエティスポーツ施設",
        "ex": "世界初の猛獣から逃げきる超短距離走アクティビティ「ニゲキル」や､ 回転する障害物をよけ続ける「Jump×Jump」など、25種類以上の“ヤバすぎ”スポーツが大集結。2時間遊び放題で友達やご家族一緒にお楽しみいただけます。",
    },
    {
        "name": "THE MANGA HOTEL TOGO ザマンガホテル 東郷",
        "lat": 35.092234,
        "lng": 137.033563,
        "type": "playIcon",
        "address": "愛知県愛知郡東郷町春木新池3922-114",
        "open": "24時間受付可能",
        "holiday": "年中無休",
        "tel": "0561-38-8013",
        "img": "./images/manga.jpg",
        "sub": "遊べる！泊まれる！2万冊以上のマンガ読み放題ホテル",
        "ex": "漫画ホテル東郷は2万冊を超えるマンガをご用意。他にも最新映画見放題、ゲーム機の貸し出しや食事のサービスも充実、ホテルですので宿泊もOK！⼀⽇中ホテル内で快適におくつろぎください",
    },
    {
        "name": "愛知池運動公園",
        "lat": 35.117747,
        "lng": 137.082161,
        "type": "playIcon",
        "address": "愛知県愛知郡東郷町諸輪百々51-236",
        "open": "24時間入園可能",
        "holiday": "年中無休",
        "tel": "0561-38-2323",
        "img": "./images/park.jpg",
        "sub": "球技もマラソンも！東郷町の健康増進拠点",
        "ex": "広大な愛知池のすぐ脇にある愛知池運動公園。野球場とグラウンドを有していて、すぐそばにはテニスコートもあります。近くの愛知池の周囲はウォーキングコースが整備されていて、水辺を気持ちよく散歩することができます。",
    },
    {
        "name": "和合ゴルフ練習場",
        "lat": 35.105483,
        "lng": 137.047945,
        "type": "playIcon",
        "address": "愛知県愛知郡東郷町和合神ノ木63-1",
        "open": "8:00～22:00",
        "holiday": "年中無休",
        "tel": "0561-38-0568",
        "img": "./images/golf.jpg",
        "sub": "2時間1,200円で打ち放題のゴルフ練習場",
        "ex": "会員制ではないので、誰でも気軽にゴルフが楽しめます。距離も200ヤードでしっかり打ち込めて、2時間打ち放題1200円と、とってもリーズナブル。",
    },{
        "name": "イタリアンジェラート RONO",
        "lat": 35.110254,
        "lng": 137.055608,
        "type": "eatIcon",
        "address": "愛知県愛知郡東郷町白鳥2丁目3-5",
        "open": "11:00 ～ 18:00",
        "holiday": "木曜日",
        "tel": "0561-38-7060",
        "img": "./images/rono.jpg",
        "sub": "オシャレで濃厚な手作りジェラート専門店",
        "ex": "ショーケースには、毎日日替わりで丹精込めて作られた6種類のジェラートが並びます。テイクアウトもOKなカップのジェラートも！",
    },{
        "name": "レストラン東郷",
        "lat": 35.084791,
        "lng": 137.038438,
        "type": "eatIcon",
        "address": "愛知県愛知郡東郷町春木新池140",
        "open": "11:00 ～ 20:30",
        "holiday": "火曜日/年末年始",
        "tel": "0561-38-1375",
        "img": "./images/togo.jpg",
        "sub": "人気メニューは万博協会も認めた『元祖味噌カツ』",
        "ex": "エビフライや唐揚げ、ステーキなどの定番メニュー・ランチ・がお楽しみいただけ、団体様のご利用も可能です。厳選された素材、こだわりの製法で、これぞ東郷町の味です。",
    },{
        "name": "らーめん 三平",
        "lat": 35.092125,
        "lng": 137.027863,
        "type": "eatIcon",
        "address": "愛知県愛知郡東郷町清水1丁目10-1",
        "open": "11:00 ～ 14:00/17:00 ～ スープ売り切れ次第終了",
        "holiday": "月曜日",
        "tel": "0561-38-5590",
        "img": "./images/sanpei.jpg",
        "sub": "無化調で作る旨いラーメンのお店",
        "ex": "無化調なのに味がしっかり濃いめのスープで、極細麺がよく絡んで思ったより美味しいです！味玉の出来が良く満足な一杯。チャーハンはパラパラで、味付けはバランスの取れた美味しさ！",
    },{
        "name": "小さな出汁巻専門店 高坂桜",
        "lat": 35.097965,
        "lng": 137.053492,
        "type": "eatIcon",
        "address": "愛知県愛知郡東郷町春木西羽根穴2235-9",
        "open": "10:00 ～ 17:00",
        "holiday": "土曜日～水曜日",
        "tel": "090-4445-5103",
        "img": "./images/dashimaki.png",
        "sub": "本格手取り出汁巻専門店",
        "ex": "素材を活かすために一本一本手巻きで巻いております。お買い上げ当日の味わいと翌日のお出汁の滲み込んだ味わいをお楽しみください。ご注文後に焼き上げます。作り置きはございませんので、お電話にてご予約をおすすめしております。",
    },{
        "name": "Bébé",
        "lat": 35.091996,
        "lng": 137.027418,
        "type": "eatIcon",
        "address": "愛知県愛知郡東郷町清水1丁目1−10",
        "open": "11:30 ～ 19:00",
        "holiday": "水木曜日",
        "tel": "0561-38-8826",
        "img": "./images/bebe.jpg",
        "sub": "洋酒香る大人のケーキ専門店",
        "ex": "素材へのこだわりが半端じゃない！洋酒を効かせた大人のケーキ屋です。フランス菓子や風味豊かな焼き菓子などを販売しています！名物エクレアはぜひご賞味ください！",
    },
    ]


    // マーカー格納配列
    const marker = [];

    // 情報ウィンドウ格納配列
    const infoWindow = [];



    // マーカーをクリックしたときのイベント登録
    const markerEvent = (i) => {
        marker[i].addListener('click', () => {
        for (const j in marker) {
            //マーカーをクリックしたときに他の情報ウィンドウを閉じる
            infoWindow[j].close(map, marker[j]);
        }
    
        //クリックされたマーカーの吹き出し（情報ウィンドウ）を表示
        infoWindow[i].open(map, marker[i]);





        // 詳細ガイドを表示

        // マップ未選択画面を非表示
        const still = document.getElementById("still");
        still.style.display = 'none';

        

        // 詳細ガイド内容切り替え表示
        const guideIcon = document.getElementById("guide-icon");

        if (markerData[i]['type'] === 'playIcon'){
            guideIcon.style.background = "url(./images/play-icon2.png)";
            guideIcon.style.backgroundSize = "cover";
            guideIcon.style.backgroundPosition = "center";
        }else{
            guideIcon.style.background = "url(./images/eat-icon2.png)";
            guideIcon.style.backgroundSize = "cover";
            guideIcon.style.backgroundPosition = "center";
        }


        const name = document.getElementById("guide-title");
        const sub = document.getElementById("guide-stitle");
        const ex = document.getElementById("ex");
        const address = document.getElementById("address");
        const open = document.getElementById("open");
        const holiday = document.getElementById("holiday");
        const tel = document.getElementById("tel");
        const guideImg = document.getElementById("guide-img");


        name.textContent = markerData[i]['name'];
        sub.textContent = markerData[i]['sub'];
        ex.textContent = markerData[i]['ex'];
        address.textContent = markerData[i]['address'];
        open.textContent = markerData[i]['open'];
        holiday.textContent = markerData[i]['holiday'];
        tel.textContent = markerData[i]['tel'];
        guideImg.style.background = "url(" + markerData[i]['img'] + ")";
        guideImg.style.backgroundSize = "cover";
        guideImg.style.backgroundPosition = "center";


        });
    }




    // マーカー毎の処理
    for (let i = 0; i < markerData.length; i++) {

        // 緯度経度のデータ作成
        const markerLatLng = new google.maps.LatLng({
        lat: markerData[i]['lat'],
        lng: markerData[i]['lng']
        });
    
        //マーカーオプション設定
        const markerOption = {
        position: markerLatLng, // マーカーを立てる位置を指定
        map: map, // マーカーを立てる地図を指定
        icon: eatIcon,
        animation: google.maps.Animation.DROP,
        }
    
        //playのときのマーカーアイコンを設定
        if (markerData[i]['type'] === 'playIcon') {
            markerOption.icon = playIcon
        }
    
        //各データごとにマーカーを作成
        marker[i] = new google.maps.Marker(markerOption);
    








        // 情報ウィンドウ
        const eatInfo =`<style>
                            .custom-info{
                                height: 200px;
                                width: 300px;
                                font-family: 'Kosugi Maru', sans-serif;
                            }
                            .name{
                                height: 30px;
                                margin: 10px 0;
                                line-height: 30px;
                                border-bottom: 8px solid #E4C900;
                                font-size: 1.3rem;
                                color: #333;
                            }
                            .img{
                                height: 150px;
                                background: url(${markerData[i]['img']});
                                background-size: cover; 
                                background-position: center;
                                border-radius: 25px;
                            }
                        

                        </style>
                        <div class="custom-info">
                            <h1 class="custom-info-item name">
                                ${markerData[i]['name']}
                            </h1>
                            <div class="custom-info-item img"></div>
                        </div>`





        const eatInfo2 =`<style>
                            .custom-info{
                                height: 200px;
                                width: 300px;
                                font-family: 'Kosugi Maru', sans-serif;
                            }
                            .name{
                                height: 30px;
                                margin: 10px 0;
                                line-height: 30px;
                                border-bottom: 8px solid #E4C900;
                                color: #333;
                            }
                            .img{
                                height: 150px;
                                background: url(${markerData[i]['img']});
                                background-size: cover; 
                                background-position: center;
                                border-radius: 25px;
                            }
                        

                        </style>
                        <div class="custom-info">
                            <h1 class="custom-info-item name">
                                ${markerData[i]['name']}
                            </h1>
                            <div class="custom-info-item img"></div>
                        </div>`
    


        const playInfo =`<style>
                            .custom-info{
                                height: 200px;
                                width: 300px;
                                font-family: 'Kosugi Maru', sans-serif;
                            }
                            .name{
                                height: 30px;
                                margin: 10px 0;
                                line-height: 30px;
                                border-bottom: 8px solid #78D2DB;
                                font-size: 1.3rem;
                                color: #333;
                            }
                            .img{
                                height: 150px;
                                background: url(${markerData[i]['img']});
                                background-size: cover; 
                                background-position: center;
                                border-radius: 25px;
                            }
                        

                        </style>
                        <div class="custom-info">
                            <h1 class="custom-info-item name">
                                ${markerData[i]['name']}
                            </h1>
                            <div class="custom-info-item img"></div>
                        </div>`
        

        
        const playInfo2 =`<style>
                            .custom-info{
                                height: 200px;
                                width: 300px;
                                font-family: 'Kosugi Maru', sans-serif;
                            }
                            .name{
                                height: 30px;
                                margin: 10px 0;
                                line-height: 30px;
                                border-bottom: 8px solid #78D2DB;
                                color: #333;
                            }
                            .img{
                                height: 150px;
                                background: url(${markerData[i]['img']});
                                background-size: cover; 
                                background-position: center;
                                border-radius: 25px;
                            }
                        

                        </style>
                        <div class="custom-info">
                            <h1 class="custom-info-item name">
                                ${markerData[i]['name']}
                            </h1>
                            <div class="custom-info-item img"></div>
                        </div>`
        
        
        
        if (markerData[i]['type'] === 'eatIcon' && markerData[i]['name'].length <= 20){
            infocontent = eatInfo
        }else if (markerData[i]['type'] === 'eatIcon' && markerData[i]['name'].length >= 20){
            infocontent = eatInfo2
        }else if (markerData[i]['type'] === 'playIcon' && markerData[i]['name'].length <= 20){
            infocontent = playInfo
        }else{
            infocontent = playInfo2
        }



        // 各データごとに吹き出し（情報ウィンドウ）を作成
        infoWindow[i] = new google.maps.InfoWindow({
            content: infocontent // 吹き出しに表示する内容
        });
    





        // 各マーカーにクリックイベントを追加
        markerEvent(i);
    }




















    // eatマーカー表示切替

    eatMarkerOn = function(){
        for (let i = 0; i < markerData.length; i++){
            if (markerData[i]['type'] === 'eatIcon'){
                marker[i].setMap(map);
                marker[i].setAnimation(google.maps.Animation.DROP);

            }
        }
    };

    eatMarkerOff = function(){
        for (let i = 0; i < markerData.length; i++){
            if (markerData[i]['type'] === 'eatIcon'){
                infoWindow[i].close(map, marker[i]);
                marker[i].setMap(null);
            }
        }
    };


    // playマーカー表示切替

    playMarkerOn = function(){
        for (let i = 0; i < markerData.length; i++){
            if (markerData[i]['type'] === 'playIcon'){
                marker[i].setMap(map);
                marker[i].setAnimation(google.maps.Animation.DROP);
            }
        }
    };

    playMarkerOff = function(){
        for (let i = 0; i < markerData.length; i++){
            if (markerData[i]['type'] === 'playIcon'){
                infoWindow[i].close(map, marker[i]);
                marker[i].setMap(null);
            }
        }
    };






// マップ切り替えボタン

// たべるボタン

const eatBtn = document.getElementById("eat-btn");

eatBtn.addEventListener("click", () => {
    if (eatBtn.classList.contains("eatOnBtn")){
        eatBtn.classList.remove("eatOnBtn");
        eatBtn.classList.add("eatOffBtn");
        eatMarkerOn();
    }else{
        eatBtn.classList.remove("eatOffBtn");
        eatBtn.classList.add("eatOnBtn");
        eatMarkerOff();
    }
});


// あそぶボタン

const playBtn = document.getElementById("play-btn");

playBtn.addEventListener("click", () => {
    if (playBtn.classList.contains("playOnBtn")){
        playBtn.classList.remove("playOnBtn");
        playBtn.classList.add("playOffBtn");
        playMarkerOn();
    }else{
        playBtn.classList.remove("playOffBtn");
        playBtn.classList.add("playOnBtn");
        playMarkerOff();
    }
});











// マップ境界線(GoogleEarth)

const polygonCoords = [
    { lat: 35.11433488374954, lng: 137.0310064845694 },
    { lat: 35.11275958481327, lng: 137.0326264586118 },
    { lat: 35.11254488312979, lng: 137.0310071061713 },
    { lat: 35.11125604290566, lng: 137.0292269094469 },
    { lat: 35.11132798961949, lng: 137.0286887369304 },
    { lat: 35.10955088248777, lng: 137.0274700524575 },
    { lat: 35.10890565635433, lng: 137.0275877176463 },
    { lat: 35.10843704333863, lng: 137.0251049283355 },
    { lat: 35.10814929585293, lng: 137.0251098636891 },
    { lat: 35.10797021880551, lng: 137.0238923698634 },
    { lat: 35.10864668908225, lng: 137.0236472523441 },
    { lat: 35.10976634316069, lng: 137.0212867175844 },
    { lat: 35.10607679269655, lng: 137.0223768248638 },
    { lat: 35.10474889490375, lng: 137.0222811126882 },
    { lat: 35.1027259877777, lng: 137.023541237237 },
    { lat: 35.10181795084256, lng: 137.0232147958424 },
    { lat: 35.10141605893429, lng: 137.0222736662777 },
    { lat: 35.1002032095986, lng: 137.022230624713 },
    { lat: 35.09930952445963, lng: 137.0222801399273 },
    { lat: 35.09620886585959, lng: 137.0197073533445 },
    { lat: 35.09310289425542, lng: 137.0214005418729 },
    { lat: 35.0910137636092, lng: 137.0212727164907 },
    { lat: 35.08891901054265, lng: 137.0229500052172 },
    { lat: 35.08929396467317, lng: 137.0247290255824 },
    { lat: 35.09106490504462, lng: 137.0274792871779 },
    { lat: 35.09059520246807, lng: 137.0283037685801 },
    { lat: 35.09006210101617, lng: 137.0275216794551 },
    { lat: 35.08816134931938, lng: 137.0271432853613 },
    { lat: 35.08692208634726, lng: 137.0266092108685 },
    { lat: 35.08608662925105, lng: 137.0272247919903 },
    { lat: 35.08516370951448, lng: 137.0274025551092 },
    { lat: 35.08506127471948, lng: 137.0287001540074 },
    { lat: 35.08399801735683, lng: 137.0290841733336 },
    { lat: 35.08422585607207, lng: 137.0305902281559 },
    { lat: 35.08444461420729, lng: 137.0319991495302 },
    { lat: 35.08446521037475, lng: 137.0320089873436 },
    { lat: 35.0840119668126, lng: 137.0335640780806 },
    { lat: 35.08416346505701, lng: 137.0344251124773 },
    { lat: 35.0839141635013, lng: 137.0351667783975 },
    { lat: 35.08344303728646, lng: 137.0354523651891 },
    { lat: 35.08259955087857, lng: 137.0359870353743 },
    { lat: 35.08223335571533, lng: 137.0365486430573 },
    { lat: 35.08093863180647, lng: 137.0370486088607 },
    { lat: 35.07956544658291, lng: 137.0392266945149 },
    { lat: 35.07914941306125, lng: 137.041252370739 },
    { lat: 35.07759480336117, lng: 137.0404102274203 },
    { lat: 35.07647039189532, lng: 137.0414147622665 },
    { lat: 35.07574574978243, lng: 137.0393535063219 },
    { lat: 35.07529268610818, lng: 137.0394733109247 },
    { lat: 35.07471123872173, lng: 137.0424312647439 },
    { lat: 35.0739221056478, lng: 137.0424529320584 },
    { lat: 35.07297334170509, lng: 137.0408533244815 },
    { lat: 35.07174750218904, lng: 137.0414985170941 },
    { lat: 35.07145965008519, lng: 137.0426909638401 },
    { lat: 35.07095765626933, lng: 137.0428774547504 },
    { lat: 35.07057178586793, lng: 137.0432206326072 },
    { lat: 35.06988640730615, lng: 137.0428139237039 },
    { lat: 35.0685205952063, lng: 137.0426648213193 },
    { lat: 35.06790918282027, lng: 137.0432168985823 },
    { lat: 35.06865831713661, lng: 137.0442638746668 },
    { lat: 35.06922660591778, lng: 137.0456467560753 },
    { lat: 35.07084908814595, lng: 137.0473479534654 },
    { lat: 35.07527947387818, lng: 137.0497363218822 },
    { lat: 35.08166213139501, lng: 137.0521680357796 },
    { lat: 35.08719927829548, lng: 137.0549558767029 },
    { lat: 35.08996436999632, lng: 137.055521127709 },
    { lat: 35.09089536990371, lng: 137.0555415823235 },
    { lat: 35.09314006894157, lng: 137.0598963542996 },
    { lat: 35.09663510399744, lng: 137.0663200308203 },
    { lat: 35.0953866827025, lng: 137.0683884996983 },
    { lat: 35.09621050389423, lng: 137.0704319977622 },
    { lat: 35.09555063932646, lng: 137.0712186580061 },
    { lat: 35.09716324389783, lng: 137.073491362234 },
    { lat: 35.09723360505564, lng: 137.0750942041553 },
    { lat: 35.0986675322747, lng: 137.0768175844801 },
    { lat: 35.09837177820479, lng: 137.0792407386105 },
    { lat: 35.09727110126785, lng: 137.0816732936544 },
    { lat: 35.0992453175997, lng: 137.0849429726044 },
    { lat: 35.09900684211659, lng: 137.085822853651 },
    { lat: 35.09912405681983, lng: 137.0866850563887 },
    { lat: 35.10113160906815, lng: 137.088211116693 },
    { lat: 35.103400703418, lng: 137.0882003603876 },
    { lat: 35.10453053392116, lng: 137.0875890204152 },
    { lat: 35.10491715015875, lng: 137.0852748067491 },
    { lat: 35.10858438684303, lng: 137.0869023540609 },
    { lat: 35.11041055693817, lng: 137.0864387859914 },
    { lat: 35.11298813791817, lng: 137.0875266404801 },
    { lat: 35.11562799926197, lng: 137.0876399374883 },
    { lat: 35.11755155258729, lng: 137.0883453690759 },
    { lat: 35.11998669888815, lng: 137.0885440253144 },
    { lat: 35.12326934793255, lng: 137.0893248756677 },
    { lat: 35.12533438241203, lng: 137.0878943206586 },
    { lat: 35.12497517420983, lng: 137.08496247435 },
    { lat: 35.12389732533711, lng: 137.0848959066084 },
    { lat: 35.12368327492602, lng: 137.0854774106085 },
    { lat: 35.12269622379421, lng: 137.0845322817092 },
    { lat: 35.12166969599746, lng: 137.0842119118411 },
    { lat: 35.12048681810703, lng: 137.0835996406482 },
    { lat: 35.11912785683129, lng: 137.0838066708586 },
    { lat: 35.12027243440551, lng: 137.0814477158163 },
    { lat: 35.1196274766219, lng: 137.0807741876286 },
    { lat: 35.11901917920521, lng: 137.0808011513406 },
    { lat: 35.11915824226686, lng: 137.0788386126964 },
    { lat: 35.11845601694331, lng: 137.0785241439079 },
    { lat: 35.11736142737036, lng: 137.078833879642 },
    { lat: 35.11703706102013, lng: 137.0792424214025 },
    { lat: 35.11506297974863, lng: 137.0772943422033 },
    { lat: 35.11878947516686, lng: 137.0719803660945 },
    { lat: 35.1218232215659, lng: 137.0698495577173 },
    { lat: 35.12144014250459, lng: 137.0678902313325 },
    { lat: 35.12129626243529, lng: 137.0668733575447 },
    { lat: 35.11955034912137, lng: 137.0649482919727 },
    { lat: 35.11943588627942, lng: 137.0623934859963 },
    { lat: 35.11623377946275, lng: 137.0625471523981 },
    { lat: 35.1156100705893, lng: 137.0608113750473 },
    { lat: 35.11594496012835, lng: 137.0573449476512 },
    { lat: 35.11609240982803, lng: 137.0532255863274 },
    { lat: 35.1140581651719, lng: 137.051908632967 },
    { lat: 35.11205828039267, lng: 137.049708344269 },
    { lat: 35.11207810648091, lng: 137.0485714880773 },
    { lat: 35.11344932697556, lng: 137.0474225588848 },
    { lat: 35.11405166026668, lng: 137.0461769706149 },
    { lat: 35.11358164123622, lng: 137.0444501961434 },
    { lat: 35.11274009675185, lng: 137.0444323326659 },
    { lat: 35.11193518201573, lng: 137.0414836582461 },
    { lat: 35.11134753952474, lng: 137.0416881236561 },
    { lat: 35.11111935379745, lng: 137.0426725156844 },
    { lat: 35.10848208796973, lng: 137.0394248176635 },
    { lat: 35.1142823797808, lng: 137.031011617202 },
  ];
  

  const customPolygon = new google.maps.Polygon({
    paths: polygonCoords,
    strokeColor: "#fd7e00", // 枠線の色
    strokeOpacity: 0.8,
    strokeWeight: 2, // 枠線の太さ
    fillOpacity: 0, // 塗りつぶしの透明度
  });
  
  // マップにポリゴンを表示
  customPolygon.setMap(map);
  








  for (let i = 0; i < markerData.length; i++) {
    // マーカーの上にカーソルが乗ったとき
    marker[i].addListener('mouseover', function() {
        marker[i].setAnimation(google.maps.Animation.BOUNCE); // アニメーション開始
    });

    // マーカーの上からカーソルが離れたとき
    marker[i].addListener('mouseout', function() {
        marker[i].setAnimation(null); // アニメーション停止
    });
  }











// 周辺検索 //////////////////////////////////////



  
let nearMap;

const area = document.getElementById("near-map"); // マップを表示させるところ
// マップの中心位置
const center = {
  lat: 35.0927794,
  lng: 137.0471649
};

//マップ作成
nearMap = new google.maps.Map(area, {
  center: center,
  zoom: 13.62,
  restriction: {
    latLngBounds: {
        north: 35.145153,
        south: 35.067894,
        west: 137.008044,
        east: 137.104141
    },
    strictBounds: false
    },
  mapId: "ab4d61b45b02680"
});

const customPolygon2 = new google.maps.Polygon({
    paths: polygonCoords,
    strokeColor: "#9A85BE", // 枠線の色
    strokeOpacity: 0.8,
    strokeWeight: 2, // 枠線の太さ
    fillOpacity: 0, // 塗りつぶしの透明度
  });
  
  // マップにポリゴンを表示
  customPolygon2.setMap(nearMap);








// 周辺検索

cafe = document.getElementById("cafe");
restaurant = document.getElementById("restaurant");
meal_takeaway = document.getElementById("meal_takeaway");
convenience_store = document.getElementById("convenience_store");
grocery_or_supermarket = document.getElementById("grocery_or_supermarket");
atm = document.getElementById("atm");
post_office = document.getElementById("post_office");
gas_station = document.getElementById("gas_station");
train_station = document.getElementById("train_station");
bus_station = document.getElementById("bus_station");



cafe.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 1000,      // 探索範囲の半径
        types: ['cafe']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



restaurant.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 1000,      // 探索範囲の半径
        types: ['restaurant']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



meal_takeaway.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 1000,      // 探索範囲の半径
        types: ['meal_takeaway']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



convenience_store.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 1000,      // 探索範囲の半径
        types: ['convenience_store']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



grocery_or_supermarket.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 1000,      // 探索範囲の半径
        types: ['grocery_or_supermarket']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



atm.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 1000,      // 探索範囲の半径
        types: ['atm']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



post_office.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 5000,      // 探索範囲の半径
        types: ['post_office']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



gas_station.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 5000,      // 探索範囲の半径
        types: ['gas_station']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



train_station.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 5000,      // 探索範囲の半径
        types: ['train_station']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})



bus_station.addEventListener("click", () => {
    var mapOptions = {
        center : nearMap.getCenter(),
        zoom: 13.62,
        restriction: {
          latLngBounds: {
              north: 35.145153,
              south: 35.067894,
              west: 137.008044,
              east: 137.104141
          },
          strictBounds: false
          },
        mapId: "ab4d61b45b02680"
    };
    // マップ再生成
    nearMap = new google.maps.Map(area, mapOptions);
    customPolygon2.setMap(nearMap);



    var request = {
        location: nearMap.getCenter(),
        radius: 5000,      // 探索範囲の半径
        types: ['bus_station']    // 施設タイプ
    };
    var service = new google.maps.places.PlacesService(nearMap);    
    service.search(request, Result_place);
})






// 検索結果を受け取る
function Result_place(results, status){
    // 探索に成功したか確認
    if(status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            // 検索結果をplaceに格納
            var place = results[i];



            // 画像取得


            try{
                imageUrl = place.photos[0].getUrl({
                    maxWidth: 200,
                    maxHeight: 200
                });
                var contant = '<style>#placename{font-family: "Kosugi Maru", sans-serif; padding:5px 0;}</style><h1 id="placename">'+ place.name +'</h1>'+'<img src="' + imageUrl + '" alt="施設の画像">';
            }catch{
                var contant = '<style>#placename{font-family: "Kosugi Maru", sans-serif; padding:5px 0;} #noimage{width:200px; height:150px; background-color:#ddd; color:#fff; text-align:center; padding:70px 0;}</style>'+'<h1 id="placename">'+ place.name +'</h1>'+ '<div id="noimage"><p>Not Image.</p></div>';
            }





            createMarker({
                text : contant,
                position : place.geometry.location,
                icon : './images/spot-icon.png',
                animation: google.maps.Animation.DROP,
            });
        }
    }
}





var openWnd = null;


// マーカー表示
function createMarker(options) {
    options.map = nearMap;
    var marker = new google.maps.Marker(options);
    // 情報ウィンドウ
    var infoWnd = new google.maps.InfoWindow();
    infoWnd.setContent(options.text);
    // マーカークリック
    google.maps.event.addListener(marker, 'click', function(){
        if(openWnd !== null){
            openWnd.close(nearMap, marker)
        };
        infoWnd.open(nearMap, marker);
        openWnd = infoWnd;
    });


    // マーカーの上にカーソルが乗ったとき
    marker.addListener('mouseover', function() {
        marker.setAnimation(google.maps.Animation.BOUNCE); // アニメーション開始
    });

    // マーカーの上からカーソルが離れたとき
    marker.addListener('mouseout', function() {
        marker.setAnimation(null); // アニメーション停止
    });
    return marker;
}









}