// ブレイクポイント定義
const mq = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
  // 各要素取得
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const closeBtn = document.querySelector('.close-btn');
  const nav = document.querySelector('nav');
  const ul = document.querySelector('ul');
  const wrap = document.querySelector('.wrap');
  const side = document.querySelector('.side');
  const sideWrap = document.querySelector('.side-wrap');
  const content = document.querySelector('.content');
  const mainContentWrap = document.querySelector('.main-content-wrap');
  const mainInfo = document.querySelector('.main-info'); 
  const detailBtn = document.querySelector('.detail-button');
  const infoMenuTitle = document.querySelector('.info-menu-title');
  const infoItem = document.querySelector('.info-item');
  const infoItemBox = document.querySelectorAll('.info-item-box');
  const infoItemBoxArray = [...infoItemBox];
  const arrow = document.querySelectorAll('.arrow');
  const arrowArray = [...arrow];

  // ==========ハンバーガーメニュー開く==========
  hamburgerIcon.addEventListener('click',function(){
    hamburgerIcon.style.display = 'none';
    closeBtn.style.display = 'block';
    nav.classList.add('nav-sp');
    ul.classList.add('ul-sp');
    ul.style.display = 'block';
  });

  // ==========ハンバーガーメニュー閉じる==========
  closeBtn.addEventListener('click',function(){
    closeBtn.style.display = 'none';
    nav.classList.remove('nav-sp');
    ul.style.display = 'none';
    hamburgerIcon.style.display = 'block';
  });

  // ==========ウィンドウ幅判定==========
  if(e.matches) {
    console.log('media');
    // ==========SP用スタイル==========
    // ヘッダー
    hamburgerIcon.style.display = 'block';
    hamburgerIcon.classList.add('hamburger-menu');
    ul.style.display = 'none';

    // メイン
    wrap.classList.remove('wrap-pc')
    // メイン＞サイドメニュー
    side.classList.add('side-sp');
    side.classList.remove('side-pc');
    sideWrap.classList.add('side-wrap-sp');
    // メイン＞コンテンツ(診療詳細)
    mainContentWrap.style.marginBottom = '20px';
    content.classList.remove('content-pc');
    content.classList.add('content-sp');
    detailBtn.classList.add('detail-button-sp');
    mainInfo.classList.add('main-info-sp');
    // メイン＞診療科目
    infoMenuTitle.classList.add('info-menu-title-sp');
    infoItemBoxArray.forEach(function(e){
      e.classList.add('info-item-box-sp');
    });
    // メイン＞診療科目＞アローボタン非表示
    arrowArray.forEach(function(e){
      e.classList.add('arrow-sp');
    });

  } else {
    // ==========PC用スタイル==========
    // ヘッダー
    hamburgerIcon.style.display= 'none';
    // ヘッダー＞ナビゲーションメニュー
    ul.classList.remove('ul-sp');
    ul.style.display = 'block';
    ul.style.display = 'flex';
    // メイン
    wrap.classList.add('wrap-pc');
    // メイン＞サイドメニュー
    sideWrap.classList.remove('side-wrap-sp');
    side.classList.add('side-pc');
    side.classList.remove('side-sp');
    // メイン＞コンテンツ(診療詳細)
    content.classList.add('content-pc');
    content.classList.remove('content-sp');
    mainContentWrap.style.marginBottom = '20px';
    mainInfo.classList.remove('main-info-sp');
    detailBtn.classList.remove('detail-button-sp');
    // メイン＞診療科目
    infoMenuTitle.classList.remove('info-menu-title-sp');
    infoItemBoxArray.forEach(function(e){
      e.classList.remove('info-item-box-sp');
    });

    //メイン＞診療科目＞アローボタン非表示
    arrowArray.forEach(function(e){
      e.classList.remove('arrow-sp');
    });
  }
}

// ブレイクポイントに達した時にイベント発火
mq.addEventListener('change',handleTabletChange);

// 初期表示
handleTabletChange(mq);