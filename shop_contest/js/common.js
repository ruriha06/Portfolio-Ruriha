
// チョコレートの波紋表現 

$(document).ready(function() {
    $('header').ripples({ //波紋をつけたい要素の指定
        resolution: 1200, //波紋の広がりの速度（値が大きいほど遅くなる。）
        dropRadius: 20, //波紋の大きさ（値が大きいほど大きくなる。）
        perturbance: 0.04 //波紋による屈折量（値が大きいほどブレる。）
    });
});


$(document).ready(function() {
    $('li').ripples({ //波紋をつけたい要素の指定
        resolution: 512, //波紋の広がりの速度（値が大きいほど遅くなる。）
        dropRadius: 10, //波紋の大きさ（値が大きいほど大きくなる。）
        perturbance: 0.04 //波紋による屈折量（値が大きいほどブレる。）
    });
});

$(document).ready(function() {
    $('#lineup').ripples({ //波紋をつけたい要素の指定
        resolution: 2000, //波紋の広がりの速度（値が大きいほど遅くなる。）
        dropRadius: 30, //波紋の大きさ（値が大きいほど大きくなる。）
        perturbance: 0.04 //波紋による屈折量（値が大きいほどブレる。）
    });
});

$(document).ready(function() {
    $('footer').ripples({ //波紋をつけたい要素の指定
        resolution: 1200, //波紋の広がりの速度（値が大きいほど遅くなる。）
        dropRadius: 20, //波紋の大きさ（値が大きいほど大きくなる。）
        perturbance: 0.04 //波紋による屈折量（値が大きいほどブレる。）
    });
});


// chocoクリックイベント

//// 初期設定(choco_ex off/on)

const choco_ex = document.getElementById('choco_ex');

off_style = function(){  
    choco_ex.style.zIndex = 0;
    choco_ex.style.display = "none";
};
off_style();


on_style = function(){
    choco_ex.style.zIndex = 200;
    choco_ex.style.display = "block";
};


//// クリックイベント

const areas = document.querySelectorAll('area');
const choco1 = document.getElementById('choco1');
const choco2 = document.getElementById('choco2');
const choco3 = document.getElementById('choco3');
const choco4 = document.getElementById('choco4');
const choco5 = document.getElementById('choco5');
const choco6 = document.getElementById('choco6');
const choco7 = document.getElementById('choco7');
const choco8 = document.getElementById('choco8');
const choco9 = document.getElementById('choco9');
const choco10 = document.getElementById('choco10');
const choco11 = document.getElementById('choco11');
const choco12 = document.getElementById('choco12');
const choco13 = document.getElementById('choco13');
const choco14 = document.getElementById('choco14');
const choco15 = document.getElementById('choco15');
const choco16 = document.getElementById('choco16');
const choco17 = document.getElementById('choco17');
const choco18 = document.getElementById('choco18');
const choco19 = document.getElementById('choco19');
const choco20 = document.getElementById('choco20');
const choco21 = document.getElementById('choco21');
const choco22 = document.getElementById('choco22');
const choco23 = document.getElementById('choco23');
const choco24 = document.getElementById('choco24');
const choco25 = document.getElementById('choco25');
const choco26 = document.getElementById('choco26');

let ex_name = document.getElementById('ex_name');
let ex_img = document.getElementById('ex_img');
let ex_p = document.getElementById('ex_p');

let con_img1 = document.getElementById('con_img1');
let con_img2 = document.getElementById('con_img2');
let con_img3 = document.getElementById('con_img3');


for (let area of areas) {

    //// ホバー
    area.addEventListener('mouseover', () => {
        if (area.id == 'imagemap') {
            choco1.style.zIndex = 100;
            choco1.style.scale = 1.1;
        } else if (area.id == 'imagemap2') {
            choco2.style.zIndex = 100;
            choco2.style.scale = 1.1;
        } else if (area.id == 'imagemap3') {
            choco3.style.zIndex = 100;
            choco3.style.scale = 1.1;
        } else if (area.id == 'imagemap4') {
            choco4.style.zIndex = 100;
            choco4.style.scale = 1.1;
        } else if (area.id == 'imagemap5') {
            choco5.style.zIndex = 100;
            choco5.style.scale = 1.1;
        } else if (area.id == 'imagemap6') {
            choco6.style.zIndex = 100;
            choco6.style.scale = 1.1;
        } else if (area.id == 'imagemap7') {
            choco7.style.zIndex = 100;
            choco7.style.scale = 1.1;
        } else if (area.id == 'imagemap8') {
            choco8.style.zIndex = 100;
            choco8.style.scale = 1.1;
        } else if (area.id == 'imagemap9') {
            choco9.style.zIndex = 100;
            choco9.style.scale = 1.1;
        } else if (area.id == 'imagemap10') {
            choco10.style.zIndex = 100;
            choco10.style.scale = 1.1;
        } else if (area.id == 'imagemap11') {
            choco11.style.zIndex = 100;
            choco11.style.scale = 1.1;
        } else if (area.id == 'imagemap12') {
            choco12.style.zIndex = 100;
            choco12.style.scale = 1.1;
        } else if (area.id == 'imagemap13') {
            choco13.style.zIndex = 100;
            choco13.style.scale = 1.1;
        } else if (area.id == 'imagemap14') {
            choco14.style.zIndex = 100;
            choco14.style.scale = 1.1;
        } else if (area.id == 'imagemap15') {
            choco15.style.zIndex = 100;
            choco15.style.scale = 1.1;
        } else if (area.id == 'imagemap16') {
            choco16.style.zIndex = 100;
            choco16.style.scale = 1.1;
        } else if (area.id == 'imagemap17') {
            choco17.style.zIndex = 100;
            choco17.style.scale = 1.1;
        } else if (area.id == 'imagemap18') {
            choco18.style.zIndex = 100;
            choco18.style.scale = 1.1;
        } else if (area.id == 'imagemap19') {
            choco19.style.zIndex = 100;
            choco19.style.scale = 1.1;
        } else if (area.id == 'imagemap20') {
            choco20.style.zIndex = 100;
            choco20.style.scale = 1.1;
        } else if (area.id == 'imagemap21') {
            choco21.style.zIndex = 100;
            choco21.style.scale = 1.1;
        } else if (area.id == 'imagemap22') {
            choco22.style.zIndex = 100;
            choco22.style.scale = 1.1;
        } else if (area.id == 'imagemap23') {
            choco23.style.zIndex = 100;
            choco23.style.scale = 1.1;
        } else if (area.id == 'imagemap24') {
            choco24.style.zIndex = 100;
            choco24.style.scale = 1.1;
        } else if (area.id == 'imagemap25') {
            choco25.style.zIndex = 100;
            choco25.style.scale = 1.1;
        } else if (area.id == 'imagemap26') {
            choco26.style.zIndex = 100;
            choco26.style.scale = 1.1;
        };
    });

    area.addEventListener('mouseout', () => {
        if (area.id == 'imagemap') {
            choco1.style.zIndex = 0;
            choco1.style.scale = 1;
        } else if (area.id == 'imagemap2') {
            choco2.style.zIndex = 0;
            choco2.style.scale = 1;
        } else if (area.id == 'imagemap3') {
            choco3.style.zIndex = 0;
            choco3.style.scale = 1;
        } else if (area.id == 'imagemap4') {
            choco4.style.zIndex = 0;
            choco4.style.scale = 1;
        } else if (area.id == 'imagemap5') {
            choco5.style.zIndex = 0;
            choco5.style.scale = 1;
        } else if (area.id == 'imagemap6') {
            choco6.style.zIndex = 0;
            choco6.style.scale = 1;
        } else if (area.id == 'imagemap7') {
            choco7.style.zIndex = 0;
            choco7.style.scale = 1;
        } else if (area.id == 'imagemap8') {
            choco8.style.zIndex = 0;
            choco8.style.scale = 1;
        } else if (area.id == 'imagemap9') {
            choco9.style.zIndex = 0;
            choco9.style.scale = 1;
        } else if (area.id == 'imagemap10') {
            choco10.style.zIndex = 0;
            choco10.style.scale = 1;
        } else if (area.id == 'imagemap11') {
            choco11.style.zIndex = 0;
            choco11.style.scale = 1;
        } else if (area.id == 'imagemap12') {
            choco12.style.zIndex = 0;
            choco12.style.scale = 1;
        } else if (area.id == 'imagemap13') {
            choco13.style.zIndex = 0;
            choco13.style.scale = 1;
        } else if (area.id == 'imagemap14') {
            choco14.style.zIndex = 0;
            choco14.style.scale = 1;
        } else if (area.id == 'imagemap15') {
            choco15.style.zIndex = 0;
            choco15.style.scale = 1;
        } else if (area.id == 'imagemap16') {
            choco16.style.zIndex = 0;
            choco16.style.scale = 1;
        } else if (area.id == 'imagemap17') {
            choco17.style.zIndex = 0;
            choco17.style.scale = 1;
        } else if (area.id == 'imagemap18') {
            choco18.style.zIndex = 0;
            choco18.style.scale = 1;
        } else if (area.id == 'imagemap19') {
            choco19.style.zIndex = 0;
            choco19.style.scale = 1;
        } else if (area.id == 'imagemap20') {
            choco20.style.zIndex = 0;
            choco20.style.scale = 1;
        } else if (area.id == 'imagemap21') {
            choco21.style.zIndex = 0;
            choco21.style.scale = 1;
        } else if (area.id == 'imagemap22') {
            choco22.style.zIndex = 0;
            choco22.style.scale = 1;
        } else if (area.id == 'imagemap23') {
            choco23.style.zIndex = 0;
            choco23.style.scale = 1;
        } else if (area.id == 'imagemap24') {
            choco24.style.zIndex = 0;
            choco24.style.scale = 1;
        } else if (area.id == 'imagemap25') {
            choco25.style.zIndex = 0;
            choco25.style.scale = 1;
        } else if (area.id == 'imagemap26') {
            choco26.style.zIndex = 0;
            choco26.style.scale = 1;
        }
    });


    //// クリック
    area.addEventListener('click', () => {
        if (area.id == 'imagemap') {
            choco1.style.zIndex = 0;
            ex_name.textContent = 'メルティーWキャラメルワッフル';
            ex_img.src = 'images/choco_v5_m1-removebg-preview.png';
            ex_p.innerText = 'キャラメル風味のガナッシュにクランブルの食感が楽しいキャラメルムースを重ね、ミルクチョコレートで包み、ワッフル形のミルクチョコレートを飾りました。ワッフルのかわいさとミルクチョコレートのやさしい甘さ、そしてキャラメルの香ばしさに心もとろける至福のひと粒。';
            con_img1.src = 'images/choco_v5_1_m.jpg';
        } else if (area.id == 'imagemap2') {
            choco2.style.zIndex = 0;
            ex_name.textContent = 'クラシックチョコレートワッフル';
            ex_img.src = 'images/choco_v5_m2-removebg-preview.png';
            ex_p.innerText = 'ベルギー伝統のリエージュシロップとふわふわのアーモンドクリームをたっぷりかけたチョコレートワッフルをイメージしたひと粒。洋ナシとリンゴ風味のリエージュシロップにクランブルが入ったアーモンドムースを重ね、ダークチョコレートで包み、ワッフル形のダークチョコレートを飾りました。ベルギースイーツを味わえるような楽しいひと粒。';
            con_img1.src = 'images/choco_v5_1_m.jpg';
        } else if (area.id == 'imagemap3') {
            choco3.style.zIndex = 0;
            ex_name.textContent = '一杯のコーヒー';
            ex_img.src = 'images/choco_v5_m3-removebg-preview.png';
            ex_p.innerText = 'ワッフルと相性のよい１杯のコーヒーをイメージしたひと粒。コーヒー粒入りのほろ苦いコーヒームースをダークチョコレートで包み、パウダーシュガーとミルクチョコレートのラインで飾りました。コーヒーの豊かな香りが広がる、コーヒー好きにはたまらないひと粒。';
            con_img1.src = 'images/choco_v5_1_m.jpg';
        } else if (area.id == 'imagemap4') {
            choco4.style.zIndex = 0;
            ex_name.textContent = 'G キューブ ホワイトチョコレートプラリネ';
            ex_img.src = 'images/choco_v10_m4-removebg-preview.png';
            ex_p.innerText = 'Gsweets伝統のなめらかなヘーゼルナッツプラリネをホワイトチョコレートで包みました。';
            con_img1.src = 'images/choco_v10_2_m.jpg';
        } else if (area.id == 'imagemap5') {
            choco5.style.zIndex = 0;
            ex_name.textContent = 'G キューブ ミルク';
            ex_img.src = 'images/choco_v10_m2-removebg-preview.png';
            ex_p.innerText = '口どけのよいミルクチョコレートガナッシュをカカオ分31%のミルクチョコレートで包みました。';
            con_img1.src = 'images/choco_v10_2_m.jpg';
        } else if (area.id == 'imagemap6') {
            choco6.style.zIndex = 0;
            ex_name.textContent = 'G キューブ ブロンドソルテッドキャラメル';
            ex_img.src = 'images/choco_v10_m5-removebg-preview.png';
            ex_p.innerText = 'フランス・ゲランドの塩がアクセントのキャラメルガナッシュをブロンドチョコレートで包みました。';
            con_img1.src = 'images/choco_v10_2_m.jpg';
        } else if (area.id == 'imagemap7') {
            choco7.style.zIndex = 0;
            ex_name.textContent = 'G キューブ ダーク';
            ex_img.src = 'images/choco_v10_m3-removebg-preview.png';
            ex_p.innerText = ' カカオ分72%のダークチョコレートガナッシュにココアパウダーを加え、50%のダークチョコレートで包みました。';
            con_img1.src = 'images/choco_v10_2_m.jpg';
        } else if (area.id == 'imagemap8') {
            choco8.style.zIndex = 0;
            ex_name.textContent = 'アルティザン キャラメル';
            ex_img.src = 'images/choco_g59_m2-removebg-preview.png';
            ex_p.innerText = '香ばしいキャラメルで風味付けしたGsweetsならではのミルクチョコレートムースを、なめらかなミルクチョコレートで包み、GsweetsのイニシャルGで飾りました。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
        } else if (area.id == 'imagemap9') {
            choco9.style.zIndex = 0;
            ex_name.textContent = 'トリュフ マチルダ';
            ex_img.src = 'images/choco_g9_m3-removebg-preview.png';
            ex_p.innerText = ' 1999年にフィリップ国王とマチルダ王妃のロイヤルウェディングのお祝いとして生まれたトリュフ。「M」のハンドデコレーションが象徴的です。';
            con_img1.src = 'images/choco_g9_2_m.jpg';
        } else if (area.id == 'imagemap10') {
            choco10.style.zIndex = 0;
            ex_name.style.fontSize = '2rem';
            ex_name.textContent = 'ソルティークリームチーズ＆ハニーガナッシュ';
            ex_img.src = 'images/choco_v4_m2-removebg-preview.png';
            ex_p.innerText = 'はちみつガナッシュに、ほんのり塩気がアクセントのクリームチーズ風味のムースを重ね、ピンク色のカップで包み、ハート形のブロンドチョコレートを飾りました。ブロンドチョコレートの香ばしさと、はちみつのほろ苦い甘さ、塩味の効いたムースのバランスが絶妙で、奥深い味わい。';
            con_img1.src = 'images/choco_v5_1_m.jpg';
        } else if (area.id == 'imagemap11') {
            choco11.style.zIndex = 0;
            ex_name.textContent = 'クール ノア ウィズ レッドハート';
            ex_img.src = 'images/choco_v4_m1-removebg-preview.png';
            ex_p.innerText = '深みのあるダークチョコレートガナッシュを、コクのあるダークチョコレートでコーティング。';
            con_img1.src = 'images/choco_v5_1_m.jpg';
        } else if (area.id == 'imagemap12') {
            choco12.style.zIndex = 0;
            ex_name.textContent = 'アモンド マルキーズ';
            ex_img.src = 'images/choco_g59_m1-removebg-preview.png';
            ex_p.innerText = ' 香り高くローストしたアーモンドを、甘美で贅沢なアーモンドペーストで包み込み、クリーミーなミルクチョコレートでコーティングしました。 ※「マルキーズ Marquise 」はフランス語で「侯爵夫人」の意味です。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
        } else if (area.id == 'imagemap13') {
            choco13.style.zIndex = 0;
            ex_name.textContent = 'シグネチャー レ';
            ex_img.src = 'images/choco_g59_m4-removebg-preview.png';
            ex_p.innerText = '香り高いコーヒーフレーバーのダークチョコレートガナッシュを包み込んだミルクチョコレート。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
        } else if (area.id == 'imagemap14') {
            choco14.style.zIndex = 0;
            ex_name.textContent = 'クルスティン';
            ex_img.src = 'images/choco_g59_m3-removebg-preview.png';
            ex_p.innerText = ' ショートブレッドビスケットをソフトプラリネで優しく包みホワイトチョコレートでコーティング。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
        } else if (area.id == 'imagemap15') {
            choco15.style.zIndex = 0;
            ex_name.textContent = 'トリュフ ドラップス プラリネ';
            ex_img.src = 'images/choco_g9_m4-removebg-preview.png';
            ex_p.innerText = '1950年に、ドラップスによって開発されたGsweetsで最初のプラリネトリュフ。プラリネムースをダークチョコレートで包み、チョコレートフレークで飾りました。';
            con_img1.src = 'images/choco_g9_2_m.jpg';
            con_img2.src = 'images/choco_g59_2_m.jpg';
        } else if (area.id == 'imagemap16') {
            choco16.style.zIndex = 0;
            ex_name.textContent = 'トリュフ ドラップス オリジナル';
            ex_img.src = 'images/choco_g9_m2-removebg-preview.png';
            ex_p.innerText = '1946年に、最初のショコラティエであるドラップスによって開発されたトリュフ。ダークチョコレートクリームをダークチョコレートで包んだトリュフです。';
            con_img1.src = 'images/choco_g9_2_m.jpg';
            con_img2.src = 'images/choco_g59_2_m.jpg';
        } else if (area.id == 'imagemap17') {
            choco17.style.zIndex = 0;
            ex_name.textContent = 'トルビヨン プラリネ';
            ex_img.src = 'images/choco_g21_m4-removebg-preview.png';
            ex_p.innerText = 'Gsweets伝統のなめらかなへーゼルナッツプラリネをミルクチョコレートで包みました。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
        } else if (area.id == 'imagemap18') {
            choco18.style.zIndex = 0;
            ex_name.textContent = 'G マカダミア';
            ex_img.src = 'images/choco_g21_m3-removebg-preview.png';
            ex_p.innerText = 'キャラメルがけしたマカダミアナッツと、サクサクとしたショートブレッドビスケットの組み合わせが魅力的なヘーゼルナッツプラリネを、甘美なミルクチョコレートで包みました。 *製品中マカダミアナッツ3.8%使用';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
        } else if (area.id == 'imagemap19') {
            choco19.style.zIndex = 0;
            ex_name.textContent = 'クール';
            ex_img.src = 'images/choco_g21_m2-removebg-preview.png';
            ex_p.innerText = '繊細な風味のヘーゼルナッツプラリネをミルクチョコレートでコーティング。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
        } else if (area.id == 'imagemap20') {
            choco20.style.zIndex = 0;
            ex_name.textContent = 'トルビヨン 85';
            ex_img.src = 'images/choco_g21_m1-removebg-preview.png';
            ex_p.innerText = 'カカオ分85％のダークチョコレートガナッシュをダークチョコレートで包んだ濃厚な一粒。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
        } else if (area.id == 'imagemap21') {
            choco21.style.zIndex = 0;
            ex_name.textContent = 'クール ブラン';
            ex_img.src = 'images/choco_g7_m2-removebg-preview.png';
            ex_p.innerText = 'まろやかなヘーゼルナッツプラリネをホワイトチョコレートで優しくコーティング。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
        } else if (area.id == 'imagemap22') {
            choco22.style.zIndex = 0;
            ex_name.textContent = 'ルーン プラリネ';
            ex_img.src = 'images/choco_g7_m4-removebg-preview.png';
            ex_p.innerText = 'まろやかなヘーゼルナッツプラリネをミルクチョコレートでコーティング。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
            con_img3.src = 'images/choco_g7_2_m.jpg';
        } else if (area.id == 'imagemap23') {
            choco23.style.zIndex = 0;
            ex_name.textContent = 'レディ ノア II';
            ex_img.src = 'images/choco_g7_m3-removebg-preview.png';
            ex_p.innerText = 'エキゾチックなマダガスカルブルボンバニラが香る、クリーミーなホワイトチョコレートガナッシュを、繊細なダークチョコレートで包みました。 *製品中マダガスカル産ブルボンバニラ0.01%使用';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
            con_img3.src = 'images/choco_g7_2_m.jpg';
        } else if (area.id == 'imagemap24') {
            choco24.style.zIndex = 0;
            ex_name.textContent = 'ヴォルプテ レ';
            ex_img.src = 'images/choco_g7_m1-removebg-preview.png';
            ex_p.innerText = 'ミルクチョコレートガナッシュがたっぷり詰まった口どけが優しいミルクチョコレート。';
            con_img1.src = 'images/choco_g59_2_m.jpg';
            con_img2.src = 'images/choco_g21_2_m.jpg';
            con_img3.src = 'images/choco_g7_2_m.jpg';
        }
        on_style();
    });
};


//// closeイベント

const close = document.getElementById('close');

close.addEventListener('click', () => {
    ex_name.style.fontSize = '2rem';
    off_style();
})






// topbtn