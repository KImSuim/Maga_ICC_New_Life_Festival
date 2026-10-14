const POSTER = "poster.jpg";
const T = {
  rest: {
    kw: "쉼",
    name: "숨 돌릴 틈이 필요한 사람",
    desc: "요즘 마음이 쉼을 찾고 있어요. 열심히 달려온 만큼 잠시 숨을 돌릴 시간이 필요한 때예요.",
    verse:
      "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라",
    ref: "마태복음 11:28",
  },
  with: {
    kw: "동행",
    name: "함께 걷고 싶은 사람",
    desc: "함께 나눌 사람이 소중하게 느껴지는 때예요. 이야기를 들어주고 곁을 지켜 주는 누군가가 큰 힘이 돼요.",
    verse: "내가 세상 끝날까지 너희와 항상 함께 있으리라",
    ref: "마태복음 28:20",
  },
  comfort: {
    kw: "위로",
    name: "따뜻한 한마디가 필요한 사람",
    desc: "말하지 못한 마음이 조금 남아 있어요. 따뜻한 공감과 위로가 힘이 되는 때예요.",
    verse: "우리의 모든 환난 중에서 우리를 위로하사",
    ref: "고린도후서 1:4",
  },
  love: {
    kw: "사랑",
    name: "있는 그대로 인정받고 싶은 사람",
    desc: "나는 어떤 사람인지, 잘하고 있는지 마음이 가끔 묻고 있어요. 조건 없이 받아들여지는 경험이 필요해요.",
    verse:
      "내가 너를 지명하여 불렀나니 너는 내 것이라 너는 내 눈에 보배롭고 존귀하며",
    ref: "이사야 43:1, 4",
  },
  guide: {
    kw: "인도하심",
    name: "방향을 찾고 있는 사람",
    desc: "더 나은 길을 찾고 싶은 때예요. 속도보다 어디로 가는지가 중요하게 느껴져요.",
    verse: "내가 곧 길이요 진리요 생명이니",
    ref: "요한복음 14:6",
  },
  peace: {
    kw: "평안",
    name: "마음이 바쁜 사람",
    desc: "생각이 많고 마음이 분주한 편이에요. 잠잠히 머무를 수 있는 평안이 필요해요.",
    verse: "모든 지각에 뛰어난 하나님의 평강이 너희 마음과 생각을 지키시리라",
    ref: "빌립보서 4:7",
  },
  hope: {
    kw: "소망",
    name: "내일을 기대하는 사람",
    desc: "지금도 괜찮지만 더 깊은 기쁨과 희망을 바라고 있어요. 내일을 기대할 이유를 찾는 마음이에요.",
    verse:
      "너희를 향한 나의 생각을 내가 아나니 평안이요 너희에게 미래와 희망을 주는 것이니라",
    ref: "예레미야 29:11",
  },
};
const QS = [
  {
    q: "주말에 가장 하고 싶은 것은?",
    o: [
      ["아무 일정 없이 푹 쉬기", "rest"],
      ["좋아하는 사람들과 시간 보내기", "with"],
      ["혼자 조용히 음악을 들으며 생각 정리하기", "comfort"],
      ["새로운 것을 배우거나 도전해 보기", "guide"],
      ["밀린 일을 정리하며 마음 가다듬기", "peace"],
    ],
  },
  {
    q: "최근 가장 자주 한 생각은?",
    o: [
      ["요즘 좀 바쁘고 피곤하다", "rest"],
      ["앞으로 뭘 하면 좋을지 생각이 많다", "guide"],
      ["나는 잘하고 있는 걸까", "love"],
      ["대체로 괜찮은데 뭔가 더 있으면 좋겠다", "hope"],
      ["말 못 한 감정이 마음에 조금 남아 있다", "comfort"],
    ],
  },
  {
    q: "친구가 힘들다고 하면 나는?",
    o: [
      ["곁에 있어 주려고 한다", "with"],
      ["따뜻한 말을 건넨다", "comfort"],
      ["일단 좀 쉬라고 권한다", "rest"],
      ["해결 방법을 같이 찾아본다", "guide"],
      ["잘될 거라고 힘을 준다", "hope"],
    ],
  },
  {
    q: "내가 에너지를 얻는 때는?",
    o: [
      ["충분히 쉬었을 때", "rest"],
      ["누군가 내 이야기를 들어줄 때", "with"],
      ["인정받고 칭찬받을 때", "love"],
      ["목표 하나를 이뤘을 때", "guide"],
      ["마음이 차분하고 평온할 때", "peace"],
    ],
  },
  {
    q: "처음 가는 모임에서 나는?",
    o: [
      ["어색해도 금방 적응한다", "with"],
      ["처음엔 조용히 지켜본다", "peace"],
      ["어떻게 보일지 신경이 쓰인다", "love"],
      ["새로운 사람을 만나는 게 설렌다", "hope"],
      ["사람이 많아도 가끔 쓸쓸할 때가 있다", "comfort"],
    ],
  },
  {
    q: "SNS를 보고 나면 드는 마음은?",
    o: [
      ["재밌지만 가끔 나와 비교하게 된다", "love"],
      ["시간이 훅 지나가서 피곤하다", "rest"],
      ["다들 바빠 보여 내 방향을 점검하게 된다", "guide"],
      ["누군가의 아픈 이야기에 마음이 쓰인다", "comfort"],
      ["별 감흥은 없고 가끔 허전하다", "hope"],
    ],
  },
  {
    q: "앞으로의 일(진로, 관계, 미래)을 생각하면?",
    o: [
      ["기대되는 마음이 크다", "hope"],
      ["막연해서 방향을 잡고 싶다", "guide"],
      ["걱정이 먼저 든다", "peace"],
      ["함께 걸어갈 사람이 있으면 든든하겠다", "with"],
      ["지금 이대로도 충분하다고 느낀다", "love"],
    ],
  },
  {
    q: "지칠 때 나는 주로?",
    o: [
      ["잠을 자거나 아무것도 안 한다", "rest"],
      ["누군가에게 털어놓는다", "with"],
      ["혼자 삭이며 버틴다", "comfort"],
      ["마음을 다잡으려고 기도하거나 명상한다", "peace"],
      ["더 열심히 하며 나를 증명하려 한다", "love"],
    ],
  },
  {
    q: "누군가에게 가장 듣고 싶은 말은?",
    o: [
      ['"고생 많았어, 좀 쉬어"', "rest"],
      ['"내가 곁에 있을게"', "with"],
      ['"많이 힘들었겠다"', "comfort"],
      ['"너는 있는 그대로 괜찮아"', "love"],
      ['"다 잘될 거야"', "hope"],
    ],
  },
  {
    q: "지금 나에게 가장 필요한 것을 고른다면?",
    o: [
      ["여유와 휴식", "rest"],
      ["믿고 기댈 수 있는 사람", "with"],
      ["마음의 평안", "peace"],
      ["분명한 방향과 확신", "guide"],
      ["변하지 않는 기쁨과 희망", "hope"],
    ],
  },
];
const view = document.getElementById("view"),
  nT = document.getElementById("nTest"),
  nC = document.getElementById("nComm");
const st = { i: 0, ans: [], type: null, tab: "test", filter: "all" };
let FB = null,
  posts = [],
  unsub = null,
  loaded = false;
const $ = (s, r = view) => r.querySelector(s);
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}
function toast(m) {
  const t = el("div", "toast", m);
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}
function tab(n) {
  st.tab = n;
  nT.setAttribute("aria-current", n === "test");
  nC.setAttribute("aria-current", n === "comm");
  if (n === "comm") comm();
  else if (st.type) invite();
  else intro();
  window.scrollTo({ top: 0 });
}
nT.onclick = () => tab("test");
nC.onclick = () => tab("comm");

function intro() {
  st.i = 0;
  st.ans = [];
  st.type = null;
  view.innerHTML = `<section class="intro">
    <img class="poster" alt="그들은 모두 주가 필요해 포스터" src="${POSTER}">
    <div>
      <div class="small">2026.10.25 SUN 2:30 · 마가의다락방교회 청년부</div>
      <h1>요즘 내 마음은<br>어떤 모습인가요?</h1>
      <p class="lead">열 가지 질문에 편하게 답하고, 마지막으로 요즘 마음에 남는 생각을 적어 주세요. 지금 내 마음에 가까운 유형을 알려드려요.</p>
      <button class="pill" id="go">테스트 시작하기</button>
      <p class="fine">약 3분 걸려요. 정답은 없고, 특별한 고민이 없어도 괜찮아요. 적은 내용은 내가 허락한 경우에만 익명으로 공유돼요.</p>
    </div></section>`;
  $("#go").onclick = ask;
}
function ask() {
  const it = QS[st.i];
  view.innerHTML = `<section class="q"><div class="bar"><i style="width:${(st.i / (QS.length + 1)) * 100}%"></i></div>
    <div class="count">${st.i + 1} / ${QS.length + 1}</div><h2>${it.q}</h2><div class="opts" id="opts"></div>
    <button class="back" id="bk" ${st.i ? "" : "hidden"}>이전 질문</button></section>`;
  const box = $("#opts");
  it.o.forEach((o, k) => {
    const b = el("button", "opt", o[0]);
    b.onclick = () => {
      if (st.lock) return;
      st.lock = 1;
      b.classList.add("sel");
      st.ans[st.i] = o[1];
      setTimeout(() => {
        st.lock = 0;
        st.i++;
        st.i < QS.length ? ask() : last();
      }, 260);
    };
    box.appendChild(b);
  });
  $("#bk").onclick = () => {
    st.i--;
    st.ans.pop();
    ask();
  };
}
function popup(title, msg, items, btn, extra) {
  const ov = el("div", "ov"),
    bx = el("div", "dlg");
  bx.setAttribute("role", "dialog");
  bx.setAttribute("aria-modal", "true");
  bx.appendChild(el("h3", "", title));
  bx.appendChild(el("p", "", msg));
  if (extra) bx.appendChild(extra);
  if (items && items.length) {
    const u = el("ul");
    items.forEach((i) => u.appendChild(el("li", "", i)));
    bx.appendChild(u);
  }
  const b = el("button", "pill", btn || "확인");
  const close = () => {
    ov.remove();
    document.removeEventListener("keydown", k);
  };
  const k = (e) => {
    if (e.key === "Escape") close();
  };
  document.addEventListener("keydown", k);
  b.onclick = close;
  ov.onclick = (e) => {
    if (e.target === ov) close();
  };
  bx.appendChild(b);
  ov.appendChild(bx);
  document.body.appendChild(ov);
  b.focus();
}
function last() {
  view.innerHTML = `<section class="q"><div class="bar"><i style="width:${(QS.length / (QS.length + 1)) * 100}%"></i></div>
    <div class="count">${QS.length + 1} / ${QS.length + 1}</div>
    <h2>요즘 가장 마음에 남는 고민이나 생각을 적어 주세요</h2>
    <textarea id="tx" maxlength="300" placeholder="고민이 없다면 감사한 일을 적어도 좋고, 비워 두어도 괜찮아요."></textarea>
    <div class="row"><span>비워 두어도 결과를 볼 수 있어요</span><span id="ct">0 / 300</span></div>
    <label for="nk" style="display:block;font-weight:600;margin:.2em 0 .4em">별명 (이야기를 적으면 필수)</label>
    <input type="text" id="nk" maxlength="12" placeholder="실명이 아니어도 괜찮아요" style="margin-bottom:.4em">
    <label class="chk"><input type="checkbox" id="sh"><span>적은 이야기를 별명과 함께 '마음 나눔'에 공유할게요. (이야기를 적었다면 필수예요)</span></label>
    <button class="pill" id="sub">제출하고 결과 보기</button><br>
    <button class="back" id="bk">이전 질문</button></section>`;
  const tx = $("#tx"),
    sub = $("#sub");
  tx.oninput = () => {
    $("#ct").textContent = tx.value.length + " / 300";
  };
  $("#bk").onclick = () => {
    st.i = QS.length - 1;
    st.ans.pop();
    ask();
  };
  sub.onclick = async () => {
    const txt = tx.value.trim(),
      nk = $("#nk").value.trim();
    if (txt) {
      const miss = [];
      if (!nk) miss.push("별명을 적어 주세요.");
      if (!$("#sh").checked)
        miss.push("'마음 나눔'에 공유하는 것에 체크해 주세요.");
      if (miss.length) {
        popup(
          "아직 제출할 수 없어요",
          "이야기를 적은 경우에는 아래 항목이 필요해요.",
          miss,
        );
        return;
      }
    }
    sub.disabled = true;
    if (txt) sub.textContent = "서버에 저장하는 중이에요…";
    const tally = {};
    st.ans.forEach((a) => (tally[a] = (tally[a] || 0) + 1));
    st.type = Object.keys(tally).sort(
      (a, b) => tally[b] - tally[a] || st.ans.indexOf(a) - st.ans.indexOf(b),
    )[0];
    st.text = tx.value.trim();
    st.nick = $("#nk").value.trim();
    if ($("#sh").checked && st.text) await share(st.text, st.type, st.nick);
    invite();
    window.scrollTo({ top: 0 });
    const rt = T[st.type],
      rs = el("div", "res");
    rs.appendChild(el("small", "", "나의 마음 유형 · " + rt.kw));
    rs.appendChild(el("b", "", rt.name));
    popup(
      "결과 화면을 캡처해 주세요 📸",
      "지금 보이는 결과 화면을 캡처(스크린샷)해서 행사 당일에 보여 주세요.",
      ["2026년 10월 25일(일) 오후 2시 30분", "마가의다락방교회"],
      "캡쳐할게요",
      rs,
    );
  };
}
function invite() {
  const t = T[st.type];
  view.innerHTML = `<article class="inv"><div class="body">
    <div class="cap"><b>이 화면을 캡처해 주세요</b><span>행사 당일(10월 25일 일요일 오후 2시 30분)에 이 결과 화면을 보여 주세요.</span></div>
    <p class="ev">나의 마음 유형 · ${t.kw}</p>
    <div class="title">${t.name}</div>
    <div class="typebox"><p>${t.desc}</p>
      <div class="verse"><q>${t.verse}</q><span>${t.ref}</span></div></div>
    <p class="close" id="mine"></p>
    <p class="close" style="margin-top:1.2em;font-size:.85em">2026 새생명축제 · 10월 25일(일) 오후 2시 30분 · 마가의다락방교회</p>
    </div></article>
    <div class="acts"><button class="pill" id="toC">다른 사람들의 마음 보기</button><button class="ghost" id="re">다시 해보기</button></div>`;
  $(".ev").textContent =
    (st.nick ? st.nick + "님의 " : "나의 ") + "마음 유형 · " + t.kw;
  $("#mine").textContent = st.text ? "내가 적은 이야기: " + st.text : "";
  $("#toC").onclick = () => tab("comm");
  $("#re").onclick = () => {
    st.type = null;
    intro();
  };
}
/* community */
async function initDb() {
  const cfg = window.FIREBASE_CONFIG;
  if (!cfg || !cfg.projectId || /^YOUR/.test(cfg.projectId)) return;
  try {
    const B = "https://www.gstatic.com/firebasejs/10.12.2/";
    const app = await import(B + "firebase-app.js"),
      fs = await import(B + "firebase-firestore.js");
    FB = { fs, db: fs.getFirestore(app.initializeApp(cfg)) };
  } catch (e) {
    FB = null;
    console.error("Firebase 연결 실패", e);
  }
}
async function share(text, type, nick) {
  await ready;
  const rec = {
    text: text.slice(0, 300),
    type,
    nick: (nick || "").slice(0, 12),
    at: Date.now(),
  };
  try {
    if (FB) {
      const f = FB.fs;
      await f.addDoc(f.collection(FB.db, "worries"), {
        text: rec.text,
        type: rec.type,
        nick: rec.nick,
        at: f.serverTimestamp(),
      });
      return;
    }
  } catch (e) {
    console.error("저장 실패", e);
  }
  posts.unshift(rec);
  toast("서버에 저장하지 못해 이 기기에만 보여요");
}
function comm() {
  if (unsub) {
    unsub();
    unsub = null;
  }
  view.innerHTML = `<section><h1>마음 나눔</h1><p class="lead">같은 시대를 사는 사람들의 이야기예요. 이름 없이 공유되고, 서로를 위해 기도하는 자리예요.</p>
   <div class="note" id="nt">서버 로딩 중이에요.</div><div class="chips" id="chips"></div><div class="grid" id="gr"></div></section>`;
  const ch = $("#chips");
  [["all", "전체"], ...Object.keys(T).map((k) => [k, T[k].kw])].forEach(
    ([k, n]) => {
      const b = el("button", "chip", n);
      b.setAttribute("aria-pressed", st.filter === k);
      b.onclick = () => {
        st.filter = k;
        draw();
        ch.querySelectorAll(".chip").forEach((c, i) =>
          c.setAttribute(
            "aria-pressed",
            (i ? Object.keys(T)[i - 1] : "all") === k,
          ),
        );
      };
      ch.appendChild(b);
    },
  );
  draw();
  ready.then(() => {
    if (!FB) loaded = true;
    const nt = $("#nt");
    if (!nt || st.tab !== "comm") return;
    if (!FB) {
      nt.textContent =
        "지금은 이 기기에서 적은 이야기만 보여요. (서버 연결 전)";
      draw();
      return;
    }
    nt.textContent = "공유된 이야기가 실시간으로 올라와요.";
    const f = FB.fs,
      q = f.query(
        f.collection(FB.db, "worries"),
        f.orderBy("at", "desc"),
        f.limit(60),
      );
    unsub = f.onSnapshot(
      q,
      (s) => {
        posts = s.docs
          .map((d) => d.data())
          .filter((x) => !x.hidden)
          .map((x) => ({
            text: x.text,
            type: x.type,
            nick: x.nick,
            at: x.at && x.at.toMillis ? x.at.toMillis() : Date.now(),
          }));
        loaded = true;
        draw();
      },
      (e) => {
        console.error(e);
        loaded = true;
        nt.textContent = "이야기를 불러오지 못했어요.";
        draw();
      },
    );
  });
}
function draw() {
  const g = $("#gr");
  if (!g) return;
  g.textContent = "";
  if (!loaded) {
    g.appendChild(el("p", "lead", "서버 로딩 중이에요. 잠시만 기다려 주세요…"));
    return;
  }
  let list = posts.map((p) => ({ ...p }));
  list = list.filter(
    (p) => T[p.type] && (st.filter === "all" || p.type === st.filter),
  );
  if (!list.length) {
    g.appendChild(
      el(
        "p",
        "lead",
        posts.length
          ? "아직 이 주제의 이야기가 없어요."
          : "아직 공유된 이야기가 없어요. 첫 번째 이야기를 남겨 보세요.",
      ),
    );
    return;
  }
  list.forEach((p) => {
    const c = el("div", "card");
    c.appendChild(el("p", "", p.text));
    const s = el("small");
    s.appendChild(el("span", "tag", T[p.type].kw + " · " + (p.nick || "익명")));
    s.appendChild(
      el("span", "", p.at ? new Date(p.at).toLocaleDateString("ko-KR") : ""),
    );
    c.appendChild(s);
    g.appendChild(c);
  });
}
intro();
const ready = initDb();

// 진단용: 주소 끝에 ?debug=1 을 붙이면 페이지 영역이 색으로 표시돼요 (평소에는 아무 영향 없음)
if (/debug/.test(location.search)) {
  document.documentElement.style.background = "#bfe3ff";
  document.body.style.background = "#fff3b0";
  document.querySelector(".wrap").style.outline = "3px solid red";
}
