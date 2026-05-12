const TEXTS_DATA = { grades: [
  {
    grade: 7, label: "國一（七年級）",
    volumes: [
      {
        vol: 1, label: "第一冊（七年級上學期）",
        lessons: [
          { no: 1,  title: "夏夜",                            author: "楊喚",             type: "新詩" },
          { no: 2,  title: "絕句選",                          author: "王之渙、李白、張繼", type: "古典詩" },
          { no: 3,  title: "紙船印象",                        author: "",                 type: "散文" },
          { no: 4,  title: "老師的十二樣見面禮",               author: "",                 type: "散文" },
          { no: 5,  title: "吃冰的滋味",                      author: "古蒙仁",            type: "散文" },
          { no: 6,  title: "牛背上的呀喝",                    author: "",                 type: "散文" },
          { no: 7,  title: "鮭魚產卵，力爭上游",               author: "",                 type: "說明文" },
          { no: 8,  title: "論語選",                          author: "孔子",             type: "古文" },
          { no: 9,  title: "飛翔的舞者",                      author: "",                 type: "新詩" },
          { no: 10, title: "值得記憶的小事：日記",             author: "",                 type: "應用文" }
        ]
      },
      {
        vol: 2, label: "第二冊（七年級下學期）",
        lessons: [
          { no: 1,  title: "負荷",                            author: "吳晟",             type: "新詩" },
          { no: 2,  title: "律詩選",                          author: "",                 type: "古典詩" },
          { no: 3,  title: "背影",                            author: "朱自清",            type: "散文" },
          { no: 4,  title: "土芭樂的生存之道",                 author: "",                 type: "說明文" },
          { no: 5,  title: "兒時記趣",                        author: "沈復",             type: "古文" },
          { no: 6,  title: "溪頭的竹子",                      author: "",                 type: "散文" },
          { no: 7,  title: "謝天",                            author: "陳之藩",            type: "散文" },
          { no: 8,  title: "視力與偏見",                      author: "",                 type: "議論文" },
          { no: 9,  title: "劉墉寓言作品選",                   author: "劉墉",             type: "寓言" },
          { no: 10, title: "跨時空的對望：淺談文言文翻譯",      author: "",                 type: "說明文" }
        ]
      }
    ]
  },
  {
    grade: 8, label: "國二（八年級）",
    volumes: [
      {
        vol: 3, label: "第三冊（八年級上學期）",
        lessons: [
          { no: 1,  title: "新詩選（傘、風箏）",               author: "",                 type: "新詩" },
          { no: 2,  title: "聲音鐘",                          author: "",                 type: "散文" },
          { no: 3,  title: "我所知道的康橋",                   author: "",                 type: "散文" },
          { no: 4,  title: "五柳先生傳",                      author: "陶淵明",            type: "古文" },
          { no: 5,  title: "差不多先生傳",                     author: "胡適",             type: "小說" },
          { no: 6,  title: "張釋之執法",                      author: "司馬遷",            type: "古文" },
          { no: 7,  title: "蜜蜂的讚美",                      author: "",                 type: "散文" },
          { no: 8,  title: "愛蓮說",                          author: "周敦頤",            type: "古文" },
          { no: 9,  title: "棒球靈魂學",                      author: "",                 type: "散文" },
          { no: 10, title: "指尖上的故事：簡報",               author: "",                 type: "說明文" }
        ]
      },
      {
        vol: 4, label: "第四冊（八年級下學期）",
        lessons: [
          { no: 1,  title: "歲月跟著",                        author: "",                 type: "新詩" },
          { no: 2,  title: "古詩選",                          author: "",                 type: "古典詩" },
          { no: 3,  title: "鳥",                              author: "梁實秋",            type: "散文" },
          { no: 4,  title: "田園之秋選",                      author: "陳冠學",            type: "散文" },
          { no: 5,  title: "木蘭詩",                          author: "古樂府",            type: "古典詩" },
          { no: 6,  title: "深藍的憂鬱",                      author: "",                 type: "散文" },
          { no: 7,  title: "運動家的風度",                     author: "梁實秋",            type: "議論文" },
          { no: 8,  title: "談交友",                          author: "",                 type: "議論文" },
          { no: 9,  title: "為學一首示子姪",                   author: "彭端淑",            type: "古文" },
          { no: 10, title: "舌尖上的思路：演講",               author: "",                 type: "說明文" }
        ]
      }
    ]
  },
  {
    grade: 9, label: "國三（九年級）",
    volumes: [
      {
        vol: 5, label: "第五冊（九年級上學期）",
        lessons: [
          { no: 1,  title: "余光中詩選",                author: "余光中",          type: "新詩" },
          { no: 2,  title: "詞選",                      author: "李清照、辛棄疾",   type: "古典詞" },
          { no: 3,  title: "黑與白—虎鯨",               author: "廖鴻基",          type: "記敘文" },
          { no: 4,  title: "與宋元思書",                author: "吳均",            type: "古文" },
          { no: 5,  title: "雲和",                      author: "楊佳嫻",          type: "散文" },
          { no: 6,  title: "山中書",                    author: "陳列",            type: "散文" },
          { no: 7,  title: "生於憂患，死於安樂",         author: "孟子",            type: "古文" },
          { no: 8,  title: "在錯誤中學習",              author: "黃永武",           type: "說明文" },
          { no: 9,  title: "寄弟墨書",                  author: "鄭燮",            type: "古文" },
          { no: 10, title: "知識與表達的盛宴：專題報告", author: "謝其濬",           type: "說明文" }
        ]
      },
      {
        vol: 6, label: "第六冊（九年級下學期）",
        lessons: [
          { no: 1, title: "一棵開花的樹", author: "席慕蓉",          type: "新詩" },
          { no: 2, title: "曲選",         author: "馬致遠、白樸",     type: "古典散曲" },
          { no: 3, title: "人間情分",     author: "張曼娟",           type: "散文" },
          { no: 4, title: "項鍊",         author: "莫泊桑",           type: "小說" },
          { no: 5, title: "湖心亭看雪",   author: "張岱",             type: "古文" },
          { no: 6, title: "水神的指引",   author: "亞榮隆‧撒可努",    type: "記敘文" },
          { no: 7, title: "常保好奇心",   author: "何飛鵬",           type: "議論文" },
          { no: 8, title: "買賣人生",     author: "林良",             type: "散文" }
        ]
      }
    ]
  }
]};

const TYPE_CLASS = {
  '新詩': 'poem',
  '散文': 'prose', '記敘文': 'prose', '說明文': 'prose',
  '議論文': 'prose', '應用文': 'prose', '寓言': 'prose',
  '小說': 'fiction',
  '古典詩': 'classic', '古典詞': 'classic', '古典散曲': 'classic', '古文': 'classic',
};

function init() {
  renderAll(TEXTS_DATA.grades);
  setupTabs(TEXTS_DATA.grades);
}

function renderAll(grades) {
  const container = document.getElementById('content');
  grades.forEach((grade, i) => {
    const section = document.createElement('section');
    section.className = 'grade-section' + (i === 0 ? ' visible' : '');
    section.dataset.grade = grade.grade;

    const h2 = document.createElement('h2');
    h2.className = 'grade-title';
    h2.textContent = grade.label;
    section.appendChild(h2);

    grade.volumes.forEach(vol => {
      const card = document.createElement('div');
      card.className = 'volume-card';

      const header = document.createElement('div');
      header.className = 'volume-header';
      header.textContent = vol.label;
      card.appendChild(header);

      const ul = document.createElement('ul');
      ul.className = 'lesson-list';

      vol.lessons.forEach(lesson => {
        const tc = TYPE_CLASS[lesson.type] || 'prose';
        const li = document.createElement('li');
        li.className = 'lesson-item';
        li.innerHTML = `
          <a class="lesson-link" href="lesson.html?vol=${vol.vol}&no=${lesson.no}">
            <span class="lesson-no">${lesson.no}</span>
            <span class="lesson-title">${lesson.title}</span>
            <span class="lesson-author">${lesson.author || '—'}</span>
            <span class="lesson-type ${tc}">${lesson.type}</span>
          </a>`;
        ul.appendChild(li);
      });

      card.appendChild(ul);
      section.appendChild(card);
    });

    container.appendChild(section);
  });
}

function setupTabs(grades) {
  const tabBar = document.getElementById('grade-tabs');
  grades.forEach((grade, i) => {
    const btn = document.createElement('button');
    btn.className = 'tab-btn' + (i === 0 ? ' active' : '');
    btn.textContent = grade.label;
    btn.dataset.grade = grade.grade;
    btn.addEventListener('click', () => switchTab(+grade.grade));
    tabBar.appendChild(btn);
  });
}

function switchTab(grade) {
  document.querySelectorAll('.grade-section').forEach(s =>
    s.classList.toggle('visible', +s.dataset.grade === grade));
  document.querySelectorAll('.tab-btn').forEach(b =>
    b.classList.toggle('active', +b.dataset.grade === grade));
}

init();
