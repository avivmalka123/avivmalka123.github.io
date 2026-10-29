/* Black Friday readiness check (source bfcheck/src/bf.html, built by bfcheck/build.py) */
(function(){
 var root=document.getElementById('pf-root'); if(!root){root=document.createElement('div');root.id='pf-root';document.body.appendChild(root);}
 try{ document.body.style.background='#FAF8F3'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='#FAF8F3'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer, .announcement').forEach(function(el){ el.style.display='none'; }); }catch(e){}
 root.innerHTML="<link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap\" rel=\"stylesheet\"><style>#pf-root .pf{--bg:#FAF8F3;--line:#E8E3D8;--ink:#121318;--mut:#5F6170;--gold:#F2B705;--gold2:#E08A00;--soft:#FFF6DA;--y:#FFD84D;--dk:#121318;font-family:Heebo,Arial,sans-serif;color:var(--ink);background:var(--bg);min-height:100vh;direction:rtl;text-align:right;-webkit-font-smoothing:antialiased;overflow-x:hidden;overflow-x:clip;font-size:16px;line-height:1.45;-webkit-tap-highlight-color:transparent}#pf-root .pf *{box-sizing:border-box}#pf-root .pf.dark{background:#121318 radial-gradient(130% 560px at 50% 0%,#2a2414 0%,#121318 70%) no-repeat;color:#fff}#pf-root .pf .tb{background:var(--dk);color:#fff;font-weight:800;font-size:13px;text-align:center;padding:12px 12px 10px;position:sticky;top:0;z-index:20}#pf-root .pf.dark .tb{background:#000}#pf-root .pf .tb b{color:var(--y);font-weight:800}#pf-root .pf .wrap{max-width:460px;margin:0 auto;padding:18px 20px 26px;display:flex;flex-direction:column;gap:12px;min-height:calc(100vh - 42px)}#pf-root .pf .scr{display:flex;flex-direction:column;gap:12px;flex:1;animation:bfIn .32s ease both}#pf-root .pf .scr.back{animation-name:bfBack}@keyframes bfIn{from{opacity:0;transform:translateX(-18px)}to{opacity:1;transform:none}}@keyframes bfBack{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:none}}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf h4,#pf-root .pf p{margin:0;color:inherit;letter-spacing:normal;text-transform:none}#pf-root .pf h1{font-size:30px;font-weight:900;line-height:1.18}#pf-root .pf h1 em{font-style:normal;color:var(--gold2)}#pf-root .pf h2{margin-top:4px;font-size:24px;font-weight:900;line-height:1.25}#pf-root .pf .hint{color:var(--mut);font-size:14.5px;margin-top:-4px}#pf-root .pf .prog{display:flex;align-items:center;gap:10px}#pf-root .pf .prog .b{flex:1;height:7px;background:#ECE7DA;border-radius:7px;overflow:hidden}#pf-root .pf .prog .b i{display:block;height:100%;background:linear-gradient(90deg,var(--gold2),var(--gold));border-radius:7px;transition:width .35s ease}#pf-root .pf .prog span{font-size:12.5px;font-weight:800;color:var(--mut);white-space:nowrap;direction:ltr}#pf-root .pf .bk{appearance:none;-webkit-appearance:none;border:0;background:#EFEADF;color:var(--ink);font:inherit;font-size:13px;font-weight:800;padding:6px 11px;border-radius:99px;cursor:pointer;white-space:nowrap}#pf-root .pf .bk:focus-visible,#pf-root .pf .opt:focus-visible,#pf-root .pf .btn:focus-visible,#pf-root .pf .eng:focus-visible,#pf-root .pf .tog button:focus-visible{outline:3px solid var(--gold2);outline-offset:2px}#pf-root .pf .ill{height:150px;border-radius:20px;background:linear-gradient(160deg,#1b1c24,#2c2410);position:relative;overflow:hidden;display:grid;place-items:center;flex:none}#pf-root .pf .ill svg{width:190px;height:104px;margin-top:-14px;overflow:visible}#pf-root .pf .ill .fl{animation:bfFloat 3.2s ease-in-out infinite;transform-origin:center}@keyframes bfFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}#pf-root .pf .ghost{position:absolute;inset:auto 0 14px;text-align:center;color:#ffffffb8;font-size:12.5px;font-weight:700;padding:0 10px}#pf-root .pf .cart{width:96px;height:70px;border:5px solid var(--y);border-top:0;border-radius:0 0 18px 18px;position:relative;transform:perspective(300px) rotateX(18deg) rotateY(-18deg);margin-top:-34px}#pf-root .pf .cart:before{content:\"\";position:absolute;top:-16px;right:-22px;width:28px;height:5px;background:var(--y);border-radius:3px;transform:rotate(-30deg)}#pf-root .pf .cart i{position:absolute;bottom:-20px;width:16px;height:16px;border-radius:50%;background:var(--y)}#pf-root .pf .cart i:first-child{right:8px}#pf-root .pf .cart i:last-child{left:8px}#pf-root .pf .opts{display:flex;flex-direction:column;gap:10px}#pf-root .pf .opt{appearance:none;-webkit-appearance:none;display:flex;align-items:center;gap:12px;width:100%;padding:14px;border:1.5px solid var(--line);border-radius:14px;background:#fff;color:var(--ink);font:inherit;font-weight:700;font-size:16px;line-height:1.3;text-align:right;cursor:pointer;transition:border-color .15s,background .15s,transform .1s}#pf-root .pf .opt:active{transform:scale(.985)}#pf-root .pf .opt .e{font-size:20px;flex:none;width:26px;text-align:center}#pf-root .pf .opt .t{flex:1}#pf-root .pf .opt.on{border-color:var(--gold2);background:var(--soft)}#pf-root .pf .opt .ck{flex:none;width:22px;height:22px;border-radius:6px;border:2px solid #D8D1C2;display:grid;place-items:center;font-size:14px;color:#1a1205}#pf-root .pf .opt.on .ck{background:var(--gold);border-color:var(--gold2)}#pf-root .pf .btn{appearance:none;-webkit-appearance:none;border:0;display:block;width:100%;margin-top:auto;background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));color:#1a1205;font:inherit;font-weight:900;font-size:18px;text-align:center;padding:16px;border-radius:16px;box-shadow:0 14px 30px -10px rgba(224,138,0,.6);cursor:pointer;text-decoration:none;line-height:1.25}#pf-root .pf .btn[disabled]{opacity:.45;cursor:default;box-shadow:none}#pf-root .pf .btn.sm{font-size:16px;padding:13px;margin:0}#pf-root .pf .spacer{flex:1;min-height:6px}#pf-root .pf .hero{border-radius:22px;background:linear-gradient(160deg,#1b1c24,#2c2410);padding:10px 8px 4px;overflow:hidden}#pf-root .pf .hero svg{display:block;width:100%;height:auto}#pf-root .pf .chip{display:inline-flex;align-items:center;gap:6px;background:#121318;color:var(--y);font-weight:800;font-size:13px;padding:6px 12px;border-radius:99px;align-self:flex-start}#pf-root .pf.dark .chip{background:#ffffff14}#pf-root .pf .pts{list-style:none;padding:0;margin:0;display:grid;gap:8px}#pf-root .pf .pts li{display:flex;gap:10px;align-items:flex-start;font-weight:600;font-size:15px}#pf-root .pf .pts li span{flex:none}#pf-root .pf .note{font-size:12.5px;color:var(--mut);text-align:center}#pf-root .pf .lock{background:var(--dk);color:#fff;border-radius:22px;padding:12px 12px 16px;display:grid;gap:4px;position:relative;overflow:hidden;flex:none}#pf-root .pf .lock svg{display:block;width:100%;max-width:300px;height:auto;margin:0 auto;filter:blur(6px);opacity:.8}#pf-root .pf .lock .t{font-weight:900;font-size:19px;text-align:center;position:relative}#pf-root .pf .fld{display:grid;gap:4px}#pf-root .pf .vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}#pf-root .pf input.in{appearance:none;-webkit-appearance:none;width:100%;border:2px solid var(--line);border-radius:14px;padding:14px;background:#fff;color:var(--ink);font:inherit;font-size:16px;outline:0;transition:border-color .15s}#pf-root .pf input.in:focus{border-color:var(--gold2)}#pf-root .pf input.in::placeholder{color:#8a8c98}#pf-root .pf .fld.bad input.in{border-color:#D64545}#pf-root .pf .em{font-size:12.5px;color:#C43B3B;font-weight:600;min-height:0}#pf-root .pf .em:empty{display:none}#pf-root .pf .chk{font-size:13px;color:var(--mut);display:flex;gap:10px;align-items:flex-start;cursor:pointer;line-height:1.45}#pf-root .pf .chk input{flex:none;width:20px;height:20px;margin:0;accent-color:var(--gold2);cursor:pointer}#pf-root .pf .chk.bad span{color:#C43B3B}#pf-root .pf .legal{font-size:12px;color:var(--mut)}#pf-root .pf .lnk{appearance:none;-webkit-appearance:none;background:none;border:0;padding:0;font:inherit;color:inherit;text-decoration:underline;cursor:pointer}#pf-root .pf .hp{position:absolute!important;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}#pf-root .pf .score{display:flex;align-items:center;gap:14px}#pf-root .pf .ring{width:72px;height:72px;border-radius:50%;display:grid;place-items:center;flex:none}#pf-root .pf .ring b{width:56px;height:56px;border-radius:50%;background:#121318;display:grid;place-items:center;font-weight:900;font-size:19px;direction:ltr;color:#fff}#pf-root .pf .score h3{font-size:20px;font-weight:900;line-height:1.25}#pf-root .pf .score p{margin-top:3px;font-size:13.5px;color:#ffffffb0}#pf-root .pf .score small{display:block;margin-top:2px;font-size:12.5px;color:#ffffff80}#pf-root .pf .tog{display:flex;background:#ffffff14;border-radius:99px;padding:4px;gap:4px}#pf-root .pf .tog button{appearance:none;-webkit-appearance:none;border:0;flex:1;background:none;font:inherit;font-size:14px;font-weight:800;text-align:center;padding:9px 6px;border-radius:99px;color:#ffffffa8;cursor:pointer;transition:background .2s,color .2s}#pf-root .pf .tog button[aria-pressed=true]{background:var(--y);color:#1a1205}#pf-root .pf .stage{position:relative;margin:2px -8px 0;overflow:hidden;border-radius:18px}#pf-root .pf .stage svg{display:block;width:100%;height:auto;max-width:420px;margin:0 auto;overflow:visible}#pf-root .pf .stage [data-k]{cursor:pointer}#pf-root .pf .stage svg.all{animation:bfGlow 1.8s ease-in-out .35s 1}@keyframes bfGlow{0%,100%{filter:none}45%{filter:drop-shadow(0 0 22px rgba(242,183,5,.55)) brightness(1.12)}}#pf-root .pf .sweep{position:absolute;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 35%,rgba(255,216,77,.22) 50%,transparent 65%);transform:translateX(110%);opacity:0}#pf-root .pf .sweep.go{animation:bfSweep 1.1s ease-out 1}@keyframes bfSweep{0%{transform:translateX(110%);opacity:1}100%{transform:translateX(-110%);opacity:1}}#pf-root .pf .allmsg{text-align:center;font-weight:800;color:var(--y);font-size:15px;min-height:22px;transition:opacity .3s}#pf-root .pf .allmsg[hidden]{display:block;visibility:hidden;opacity:0}#pf-root .pf .leg{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;font-size:12.5px;color:#ffffffb8}#pf-root .pf .leg i{display:inline-block;width:11px;height:11px;border-radius:3px;margin-left:5px;vertical-align:-1px}#pf-root .pf .tip{text-align:center;font-size:12.5px;color:#ffffff80;margin-top:-4px}#pf-root .pf .card{background:#ffffff0d;border:1px solid #ffffff1c;border-radius:20px;padding:16px}#pf-root .pf .card h4{font-size:17px;font-weight:900;margin-bottom:10px}#pf-root .pf .engs{display:grid;gap:8px}#pf-root .pf .eng{appearance:none;-webkit-appearance:none;display:flex;align-items:center;gap:10px;width:100%;border:1px solid #ffffff1a;background:#ffffff08;color:#fff;font:inherit;font-size:15px;font-weight:700;padding:11px 12px;border-radius:14px;text-align:right;cursor:pointer}#pf-root .pf .eng .d{flex:none;width:14px;height:14px;border-radius:4px}#pf-root .pf .eng .d.on{background:var(--gold);box-shadow:0 0 10px #F2B70599}#pf-root .pf .eng .d.partial{background:linear-gradient(0deg,var(--gold2) 50%,transparent 50%);border:1.5px solid var(--gold2)}#pf-root .pf .eng .d.off{border:1.5px dashed #ffffff80}#pf-root .pf .eng .n{flex:1}#pf-root .pf .eng .s{font-size:12.5px;font-weight:800;padding:3px 9px;border-radius:99px;white-space:nowrap}#pf-root .pf .eng .s.on{background:#F2B7052b;color:var(--y)}#pf-root .pf .eng .s.partial{background:#E08A0026;color:#FFC24D}#pf-root .pf .eng .s.off{background:#ffffff12;color:#ffffffb0}#pf-root .pf .eng .c{color:#ffffff60;font-size:18px;line-height:1}#pf-root .pf .ping{background:#fff;color:var(--ink);border-radius:20px;padding:16px;display:grid;gap:8px;box-shadow:0 20px 50px -20px rgba(242,183,5,.45)}#pf-root .pf .ping .k{justify-self:start;font-size:11.5px;font-weight:800;color:var(--gold2);background:var(--soft);padding:3px 9px;border-radius:99px}#pf-root .pf .ping .h{font-weight:900;font-size:17px;line-height:1.3}#pf-root .pf .ping .s{font-size:13.5px;color:var(--mut)}#pf-root .pf .plan{list-style:none;margin:0;padding:0;display:grid;gap:10px}#pf-root .pf .plan li{display:grid;grid-template-columns:auto 1fr;gap:4px 12px;align-items:start}#pf-root .pf .plan .dn{grid-row:span 2;background:var(--y);color:#1a1205;font-weight:900;font-size:12.5px;border-radius:10px;padding:6px 8px;text-align:center;min-width:52px}#pf-root .pf .plan .dn.x{background:#ffffff18;color:#fff}#pf-root .pf .plan b{font-size:15px;font-weight:800}#pf-root .pf .plan p{font-size:13.5px;color:#ffffffa8}#pf-root .pf .ctas{display:grid;gap:10px}#pf-root .pf .cta2{display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;font-weight:800;font-size:16px;padding:14px;border-radius:16px;text-align:center}#pf-root .pf .cta2.tr{border:1.5px solid var(--y);color:var(--y)}#pf-root .pf .cta2.wa{background:#1FAF55;color:#fff}#pf-root .pf .share{display:grid;grid-template-columns:96px 1fr;gap:14px;align-items:center}#pf-root .pf .share img{width:96px;height:170px;border-radius:12px;object-fit:cover;background:#000;border:1px solid #ffffff22}#pf-root .pf .share p{font-size:13.5px;color:#ffffffb0;margin:4px 0 10px}#pf-root .pf .redo{appearance:none;-webkit-appearance:none;background:none;border:0;color:#ffffff80;font:inherit;font-size:13px;text-decoration:underline;cursor:pointer;justify-self:center}#pf-root .pf .foot{text-align:center;font-size:12.5px;color:#8a8c98;padding:18px 16px 28px}#pf-root .pf .foot .lnk{margin-inline:6px}#pf-root .pf.dark .foot{color:#ffffff70}#pf-root .pf .sh{position:fixed;inset:0;z-index:99990;display:flex;align-items:flex-end;justify-content:center;background:rgba(0,0,0,0);transition:background .25s;pointer-events:none}#pf-root .pf .sh.open{background:rgba(0,0,0,.55);pointer-events:auto}#pf-root .pf .sh[hidden]{display:none}#pf-root .pf .sh .pn{width:100%;max-width:480px;max-height:88vh;overflow:auto;background:var(--bg);color:var(--ink);border-radius:24px 24px 0 0;padding:10px 20px calc(22px + env(safe-area-inset-bottom,0px));transform:translateY(105%);transition:transform .3s cubic-bezier(.2,.8,.2,1)}#pf-root .pf .sh.open .pn{transform:none}#pf-root .pf .sh .grab{width:44px;height:5px;border-radius:5px;background:#D8D1C2;margin:0 auto 12px}#pf-root .pf .sh .hd{display:flex;align-items:center;gap:10px;margin-bottom:12px}#pf-root .pf .sh .hd .ic{font-size:26px}#pf-root .pf .sh .hd h3{flex:1;font-size:21px;font-weight:900}#pf-root .pf .sh .x{appearance:none;-webkit-appearance:none;border:0;background:#EFEADF;width:34px;height:34px;border-radius:50%;font-size:20px;line-height:1;cursor:pointer;color:var(--ink)}#pf-root .pf .sh h4{font-size:14px;font-weight:900;margin:14px 0 4px;color:var(--gold2)}#pf-root .pf .sh p{font-size:15px;color:#33353f}#pf-root .pf .st{display:inline-block;font-size:12.5px;font-weight:800;padding:3px 10px;border-radius:99px}#pf-root .pf .st.on{background:var(--y);color:#1a1205}#pf-root .pf .st.partial{background:#FFE7B8;color:#8A5200}#pf-root .pf .st.off{background:#ECE7DA;color:#5F6170}#pf-root .pf .now{margin-top:14px;background:#fff;border:1.5px solid var(--line);border-radius:14px;padding:12px 14px;font-size:14.5px}#pf-root .pf .now b{font-weight:900}#pf-root .pf .wab{margin-top:6px;background:#EFEAE2;border-radius:16px;overflow:hidden;border:1px solid #E2DCD0}#pf-root .pf .wab .bar{background:#075E54;color:#fff;font-size:13px;font-weight:700;padding:8px 12px;display:flex;align-items:center;gap:8px}#pf-root .pf .wab .bar i{width:24px;height:24px;border-radius:50%;background:#ffffff30;display:grid;place-items:center;font-style:normal;font-size:13px}#pf-root .pf .wab .msgs{padding:12px 12px 14px}#pf-root .pf .wab .bub{position:relative;background:#fff;border-radius:0 12px 12px 12px;padding:8px 10px 18px;font-size:14.5px;line-height:1.45;max-width:88%;box-shadow:0 1px 1px rgba(0,0,0,.08);color:#111}#pf-root .pf .wab .bub:before{content:\"\";position:absolute;top:0;right:-7px;border-style:solid;border-width:0 0 10px 8px;border-color:transparent transparent transparent #fff}#pf-root .pf .wab .bub small{position:absolute;bottom:3px;left:8px;font-size:11px;color:#8a8c98}#pf-root .pf .wab .cap{font-size:11.5px;color:#6b6e7a;text-align:center;margin-top:8px}#pf-root .pf .mod{position:fixed;inset:0;background:rgba(18,19,24,.6);display:grid;place-items:center;padding:16px;z-index:99999}#pf-root .pf .mod[hidden]{display:none}#pf-root .pf .mod>div{background:var(--bg);color:var(--ink);border-radius:22px;max-width:560px;width:100%;max-height:85vh;overflow:auto;padding:22px;font-size:15px}#pf-root .pf .mod h3{font-size:20px;font-weight:900;margin-bottom:10px}#pf-root .pf .mod h4{margin:14px 0 4px;font-size:15px;font-weight:800}#pf-root .pf .mod p{color:var(--mut)}#pf-root .pf .mod .x{appearance:none;-webkit-appearance:none;border:0;background:none;cursor:pointer;font-size:28px;line-height:1;color:var(--mut);float:left;padding:0}@media (min-width:760px){#pf-root .pf .wrap{padding-top:28px}#pf-root .pf h1{font-size:34px}}@media (prefers-reduced-motion:reduce){#pf-root .pf .scr,#pf-root .pf .ill .fl,#pf-root .pf .stage svg.all,#pf-root .pf .sweep.go{animation:none}#pf-root .pf .sh .pn,#pf-root .pf .prog .b i{transition:none}}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf h4,#pf-root .pf p,#pf-root .pf a,#pf-root .pf button,#pf-root .pf span,#pf-root .pf li,#pf-root .pf label,#pf-root .pf input,#pf-root .pf small,#pf-root .pf b,#pf-root .pf strong{font-family:Heebo,Arial,sans-serif;letter-spacing:normal;text-transform:none}#pf-root .pf p{margin-bottom:0}#pf-root .pf ul,#pf-root .pf ol{margin-bottom:0}</style><div class=\"pf\" id=\"bfApp\">\n  <div class=\"tb\" id=\"bfTb\">🛒 בדיקת מוכנות <b>לבלאק פריידיי</b></div>\n  <main class=\"wrap\" id=\"bfMain\"></main>\n  <footer class=\"foot\">© אביב מלכה · מועדון האיקומרס <button type=\"button\" class=\"lnk\" data-open=\"bfPriv\">מדיניות פרטיות</button></footer>\n\n  <div class=\"sh\" id=\"bfSheet\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"bfShT\"><div class=\"pn\" id=\"bfShP\"></div></div>\n\n  <div class=\"mod\" id=\"bfPriv\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"bfPrivT\"><div>\n    <button class=\"x\" type=\"button\" data-close aria-label=\"סגירה\">×</button>\n    <h3 id=\"bfPrivT\">מדיניות פרטיות · בדיקת המוכנות לבלאק פריידיי</h3>\n    <p>הדף מופעל על ידי אביב מלכה. כך אנחנו משתמשים בפרטים שתשאירו כאן:</p>\n    <h4>מה נאסף</h4><p>שם פרטי, טלפון נייד, אימייל אם מסרתם, התשובות לשאלון ותוצאת הבדיקה. בנוסף נשמרים נתוני מקור טכניים: מאיזו מודעה או קמפיין הגעתם (UTM) ולחיצות בדף.</p>\n    <h4>למה</h4><p>כדי להציג לכם את התוצאה, לחזור אליכם כשאתם מבקשים, ולמדוד אילו מודעות עובדות. דיוור שיווקי נשלח רק למי שסימן את תיבת ההסכמה, ואפשר להסיר בכל עת.</p>\n    <h4>עם מי משותף</h4><p>ספקי שירות שמפעילים את המערכת עבורנו: Cloudflare (אחסון), Make ו-2Chat (התראה פנימית בוואטסאפ), Meta (מדידת מודעות, עם נתונים מוצפנים ב-hash). לא נמכור את הפרטים לאף אחד.</p>\n    <h4>כמה זמן</h4><p>עד 24 חודשים מהבדיקה, או עד שתבקשו למחוק.</p>\n    <h4>הזכויות שלכם</h4><p>אפשר לבקש לעיין בפרטים, לתקן אותם או למחוק אותם בהודעת וואטסאפ למספר 052-5535537.</p>\n  </div></div>\n</div>";
})();
/* bfcheck: shared client helpers (adapted from pingf/src/common.js, own storage keys so attribution is per funnel). No personal data ever goes into URLs. */
var BFX = (function () {
  var LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var API = LOCAL && /[?&]api=([^&]+)/.test(location.search) ? decodeURIComponent(RegExp.$1) : 'https://ping-funnel.aviv1988.workers.dev';
  var PIXEL = '2210072352882860';

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function rid(n) { var a = new Uint8Array(n || 12), s = ''; (window.crypto || window.msCrypto).getRandomValues(a); for (var i = 0; i < a.length; i++) s += (a[i] % 36).toString(36); return s; }
  function cookie(n) { var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)'); return m ? decodeURIComponent(m[1]) : ''; }
  var vid = ls('bf_vid'); if (!vid) { vid = 'v' + rid(14); ls('bf_vid', vid); }

  /* attribution of this funnel: the latest ad click wins (kept 30 days) */
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'campaign_id', 'adset_id', 'ad_id', 'fbclid'];
  function captureUtm() {
    var p = new URLSearchParams(location.search), got = {}, any = false;
    KEYS.forEach(function (k) { var v = p.get(k); if (v) { got[k] = v.slice(0, 200); any = true; } });
    var old = utm();
    if (any) { got.t = Date.now(); ls('bf_utm', JSON.stringify(got)); old = got; }
    else if (old.t && Date.now() - old.t > 30 * 864e5) { ls('bf_utm', null); old = {}; }
    if (got.fbclid) ls('bf_fbc', 'fb.1.' + Date.now() + '.' + got.fbclid);
    return old;
  }
  function utm() { try { return JSON.parse(ls('bf_utm') || '{}'); } catch (e) { return {}; } }
  function fbc() { return cookie('_fbc') || ls('bf_fbc') || ''; }

  /* Meta pixel: events go only to this pixel (trackSingle), with the same event_id the server sends to CAPI */
  function pixel() {
    if (!window.fbq) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }
    if (!window.__bfPixel) { window.fbq('init', PIXEL); window.__bfPixel = 1; }
  }
  var STD = {PageView: 1, Lead: 1};
  function fb(name, eventId, data) {
    try { pixel(); window.fbq(STD[name] ? 'trackSingle' : 'trackSingleCustom', PIXEL, name, data || {}, eventId ? {eventID: eventId} : undefined); } catch (e) {}
  }

  function api(path, body, ms) {
    var ctl = window.AbortController ? new AbortController() : null, tm = ctl && setTimeout(function () { ctl.abort(); }, ms || 9000);
    return fetch(API + path, {method: body ? 'POST' : 'GET', headers: {'Content-Type': 'application/json'}, body: body ? JSON.stringify(body) : undefined, keepalive: !!body && JSON.stringify(body).length < 6e4, signal: ctl ? ctl.signal : undefined})
      .then(function (r) { clearTimeout(tm); return r.json().catch(function () { return {}; }).then(function (j) { j._status = r.status; return j; }); }, function (e) { clearTimeout(tm); throw e; });
  }
  /* funnel event: pixel (browser) + server log (and CAPI once a token is set) with the same id; once per page per name unless repeat */
  var sent = {};
  function track(name, data, opt) {
    opt = opt || {};
    if (sent[name] && !opt.repeat) return; sent[name] = 1;
    var id = name.toLowerCase().slice(0, 12) + '_' + rid(14), d = data || {};
    d.content_name = 'bf-quiz';
    fb(name, id, d);
    if (opt.server === false) return;
    api('/api/event', {name: name, event_id: id, vid: vid, utm: utm(), url: location.origin + location.pathname, fbc: fbc(), fbp: cookie('_fbp')}).catch(function () {});
  }

  return {API: API, ls: ls, rid: rid, vid: vid, captureUtm: captureUtm, utm: utm, fbc: fbc, cookie: cookie, fb: fb, api: api, track: track};
})();


(function () {
  var app = document.getElementById('bfApp'); if (!app) return;
  var main = app.querySelector('#bfMain'), tb = app.querySelector('#bfTb');
  var t0 = Date.now();
  var CONSENT_REQUIRED = false;  // marketing consent stays optional (Israeli spam law: no bundled consent)
  var PING_URL = 'https://apps.shopify.com/ping-ai?utm_source=bfcheck&utm_medium=quiz&utm_campaign=bf2026';
  var TRAINING_URL = 'https://www.avivmalka.com/ping-training?utm_source=bfcheck&utm_medium=quiz&utm_campaign=bf2026';
  var PAGE_URL = 'https://www.avivmalka.com/bf-check';
  var WA = '972525535537';
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); };

  /* ---------- questions (codes must match BF_Q in ping-funnel/src/index.js) ---------- */
  var Q = [
    {k: 'platform', t: 'על איזו פלטפורמה החנות שלך?', h: 'נתחיל בקלות 🙂', ill: 'store', g: 'החנות שלך, עוד רגע על המפה',
      o: [['shopify', '🛍️', 'Shopify'], ['woo', '🟣', 'WooCommerce'], ['wix', '⚫', 'Wix'], ['other', '🧩', 'משהו אחר']]},
    {k: 'orders', t: 'כמה הזמנות יש לך בחודש, בערך?', h: 'הערכה גסה מספיקה', ill: 'boxes', g: 'לא צריך מספר מדויק',
      o: [['a', '📦', 'עד 50'], ['b', '🚚', '50–300'], ['c', '🏭', '300–1,000'], ['d', '🚀', '1,000+']]},
    {k: 'cart', t: 'מה קורה אצלך כשלקוח נוטש עגלה?', h: 'תהיו כנים, זה נשאר בינינו 🙂', ill: 'cart', g: 'לקוח הוסיף לעגלה… ונעלם',
      o: [['none', '🤷', 'כלום, הוא פשוט הולך'], ['one', '📧', 'יוצא לו מייל תזכורת אחד'], ['seq', '💬', 'מייל + וואטסאפ / SMS ברצף'], ['unknown', '❓', 'אין לי מושג']]},
    {k: 'welcome', t: 'מי שנרשם לדיוור אצלך מקבל…', h: 'הרגע שבו הוא הכי סקרן', ill: 'mail', g: 'נרשם חדש! ומה עכשיו?',
      o: [['none', '🦗', 'כלום, שקט'], ['coupon', '🎟️', 'קופון וזהו'], ['seq', '👋', 'רצף ברוכים הבאים']]},
    {k: 'post', t: 'ומה מקבל לקוח אחרי שקנה?', h: 'מעבר לחשבונית 😉', ill: 'box', g: 'ההזמנה יצאה. ומה הלאה?',
      o: [['confirm', '🧾', 'רק אישור הזמנה'], ['thanks', '💌', 'מייל תודה'], ['seq', '✨', 'רצף שלם: תודה, מעקב משלוח, המלצה']]},
    {k: 'list', t: 'כמה לקוחות אישרו לקבל ממך הודעות?', h: 'במייל, SMS או וואטסאפ. בערך זה מספיק', ill: 'people', g: 'האנשים שאמרו לך "כן"',
      o: [['none', '🫙', 'אין לי רשימה'], ['s', '🙂', 'עד 1,000'], ['m', '😎', '1,000–10,000'], ['l', '🔥', '10,000+']]},
    {k: 'winback', t: 'מתי שלחת לאחרונה הודעה ללקוחות שכבר קנו פעם?', h: 'בלי לשפוט, מבטיחים', ill: 'loop', g: 'קנו פעם אחת… איפה הם היום?',
      o: [['week', '⚡', 'השבוע'], ['month', '📅', 'החודש'], ['half', '🕸️', 'לפני חצי שנה ויותר'], ['never', '🙈', 'אף פעם']]},
    {k: 'bundles', t: 'יש אצלך באנדלים או הצעה נוספת בעגלה?', h: 'כמו "מי שקנה את זה, לקח גם…"', ill: 'bundle', g: 'רוצה להוסיף גם…?',
      o: [['yes', '🎁', 'כן, יש'], ['disc', '🏷️', 'רק הנחות כלליות'], ['no', '➖', 'לא']]},
    {k: 'reviews', t: 'מבקשים אצלך ביקורת אחרי קנייה?', h: 'שלוש שאלות לסיום', ill: 'stars', g: 'מי ביקש ממני ביקורת?',
      o: [['auto', '🤖', 'כן, אוטומטית'], ['manual', '✍️', 'לפעמים, ידנית'], ['no', '🤐', 'לא']]},
    {k: 'channels', multi: true, t: 'באילו ערוצים אתה מדבר עם הלקוחות?', h: 'אפשר לבחור כמה', ill: 'chat', g: 'איפה הלקוחות שומעים ממך?',
      o: [['email', '📧', 'מייל'], ['whatsapp', '💬', 'וואטסאפ'], ['sms', '📱', 'SMS'], ['none', '🔇', 'אף אחד']]},
    {k: 'daily', t: 'איך אתה יודע מה קרה אתמול בחנות?', h: 'שאלה אחרונה!', ill: 'sun', g: 'בוקר טוב. מה קרה אתמול?',
      o: [['check', '🔍', 'נכנס {P} ובודק'], ['reports', '📊', 'דוחות שאני מוציא'], ['auto', '☀️', 'מקבל סיכום אוטומטי כל בוקר'], ['none', '🫣', 'לא בודק']]},
  ];
  var N = Q.length;
  var STATE = {cart: {none: 'off', one: 'partial', seq: 'on', unknown: 'off'}, welcome: {none: 'off', coupon: 'partial', seq: 'on'}, post: {confirm: 'off', thanks: 'partial', seq: 'on'},
    list: {none: 'off', s: 'partial', m: 'on', l: 'on'}, winback: {week: 'on', month: 'partial', half: 'off', never: 'off'}, bundles: {yes: 'on', disc: 'partial', no: 'off'},
    reviews: {auto: 'on', manual: 'partial', no: 'off'}, daily: {check: 'off', reports: 'partial', auto: 'on', none: 'off'}};

  /* ---------- the 9 engines (map order = the mockup's 3×3 grid) ---------- */
  var EK = ['cart', 'welcome', 'post', 'list', 'winback', 'bundles', 'reviews', 'wa', 'daily'];
  var PRI = ['cart', 'post', 'winback', 'welcome', 'wa', 'bundles', 'reviews', 'daily', 'list'];
  var E = {
    cart: {n: 'עגלה נטושה', i: '🛒', what: 'מי שהוסיף לעגלה ולא סיים מקבל תזכורת קצרה, ואם צריך עוד אחת אחרי כמה שעות.',
      why: 'בבלאק פריידיי אנשים פותחים עשרה טאבים ומשווים. מי שמזכיר בזמן נשאר בראש.',
      ex: 'היי דנה 👋 ראינו שהשארת בעגלה את הסווטשירט השחור. שמרנו לך אותו עד הערב 🖤 לסיום ההזמנה: [קישור]',
      st: {on: 'יוצא רצף במייל ובוואטסאפ/SMS. נשאר רק לעדכן את ההודעות לבלאק פריידיי.', partial: 'יוצא מייל אחד. הודעה שנייה בוואטסאפ או SMS נותנת עוד הזדמנות לסגור.', off: 'כרגע לא יוצא כלום. זה המנוע הראשון שכדאי להדליק.'},
      plan: ['מדליקים עגלה נטושה', 'משדרגים את העגלה הנטושה', 'מייל אחרי שעה, ואחריו וואטסאפ או SMS למי שאישר.']},
    welcome: {n: 'ברוכים הבאים', i: '👋', what: 'מי שנרשם לדיוור מקבל רצף קצר: מי אתם, המוצרים הכי אהובים, וסיבה לקנות עכשיו.',
      why: 'בנובמבר נרשמים הרבה אנשים חדשים שמחכים למבצע. רצף טוב מחמם אותם לפני היום עצמו.',
      ex: 'ברוכה הבאה, נועה 🎉 הנה 3 המוצרים שהלקוחות שלנו הכי אוהבים. ובבלאק פריידיי? הרשומים שומעים ראשונים 😉',
      st: {on: 'יש רצף ברוכים הבאים. כדאי להוסיף לו הודעה על המבצע הקרוב.', partial: 'קופון וזהו. 2–3 הודעות קצרות מספרות מי אתם, ולא רק נותנות הנחה.', off: 'נרשמים ולא מקבלים כלום, בדיוק כשהם הכי סקרנים.'},
      plan: ['בונים רצף ברוכים הבאים', 'מרחיבים את הקופון לרצף', '2–3 הודעות: מי אתם, המוצרים האהובים ותזכורת על המבצע.']},
    post: {n: 'תודה אחרי קנייה', i: '📦', what: 'אחרי ההזמנה הלקוח מקבל תודה אישית, עדכון כשהחבילה יוצאת, והמלצה למוצר שמתאים למה שקנה.',
      why: 'מי שקונה בבלאק פריידיי יכול להפוך ללקוח החוזר של דצמבר. החוויה אחרי הקנייה קובעת אם יחזור.',
      ex: 'תודה רבה יוסי! 🙏 ההזמנה שלך כבר בדרך, מעקב משלוח כאן: [קישור]. אגב, מי שקנה את המטען הזה אהב גם את המעמד 👀',
      st: {on: 'יש רצף שלם. לבדוק שהוא מוכן לעומס של נובמבר.', partial: 'יוצא מייל תודה. מעקב משלוח והמלצה למוצר משלים הופכים אותו לרצף.', off: 'הלקוח מקבל רק אישור הזמנה, ואז שקט.'},
      plan: ['מגדירים תודה אחרי קנייה', 'משלימים את רצף התודה', 'תודה אישית, קישור למעקב משלוח והמלצה למוצר משלים.']},
    list: {n: 'רשימת לקוחות', i: '📋', what: 'הלקוחות שאישרו לקבל ממך הודעות. הקהל היחיד שמגיעים אליו בלי לשלם על כל קליק.',
      why: 'בבלאק פריידיי המודעות מתייקרות. רשימה משלך מאפשרת להודיע על המבצע ישר לטלפון ולמייל.',
      ex: '📣 זה מתחיל! מבצע בלאק פריידיי נפתח הלילה, והרשומים נכנסים שעה לפני כולם: [קישור]',
      st: {on: 'יש רשימה רצינית. עכשיו לוודא שהיא שומעת ממך באופן קבוע.', partial: 'עד 1,000 אנשים. פופאפ הרשמה טוב לפני נובמבר יכול להגדיל אותה.', off: 'עוד אין רשימה. כדאי להתחיל לאסוף כבר השבוע.'},
      plan: ['מתחילים לבנות רשימה', 'מגדילים את הרשימה', 'פופאפ הרשמה עם סיבה טובה להירשם, ותיבת אישור דיוור בקופה.']},
    winback: {n: 'החזרת לקוחות', i: '🔁', what: 'הודעה ללקוחות שקנו פעם ולא חזרו: מה חדש, מה מתאים להם, ולמה עכשיו.',
      why: 'מי שכבר קנה ממך מכיר אותך וסומך עליך. לפני בלאק פריידיי זה הקהל הכי חם שיש לך.',
      ex: 'היי מיכל, מזמן לא דיברנו 💛 נכנסו מוצרים חדשים שמתאימים בדיוק למה שקנית בפעם הקודמת. רוצה הצצה ראשונה? [קישור]',
      st: {on: 'שלחת השבוע. מעולה, לשמור על הקצב גם בנובמבר.', partial: 'שלחת החודש. הודעה ממוקדת למי שלא קנה מזמן תעיר עוד כמה.', off: 'הלקוחות הקודמים לא שמעו ממך הרבה זמן. הם מחכים לסיבה לחזור.'},
      plan: ['מחזירים לקוחות ישנים', 'מחזירים לקוחות ישנים', 'הודעה אחת למי שקנה לפני יותר מ-3 חודשים: מה חדש ומה מחכה בבלאק פריידיי.']},
    bundles: {n: 'באנדלים', i: '🎁', what: 'הצעה לצרף מוצר משלים או חבילה, בעגלה או בעמוד המוצר.',
      why: 'בבלאק פריידיי אנשים כבר במצב של קנייה. באנדל טוב עוזר להם לקחת עוד משהו שבאמת מתאים.',
      ex: 'רגע לפני התשלום 🛍️ מי שקנה את קרם הפנים לקח גם את הסרום. ביחד במחיר חבילה, רק היום: [הוספה לעגלה]',
      st: {on: 'יש באנדלים. כדאי להכין גרסה מיוחדת לבלאק פריידיי.', partial: 'רק הנחות כלליות. באנדל של מוצרים שנקנים יחד הוא הצעה ממוקדת יותר.', off: 'אין הצעה נוספת בעגלה.'},
      plan: ['בונים 2–3 באנדלים', 'הופכים הנחות לבאנדלים', 'בוחרים מוצרים שנקנים יחד ומציגים אותם בעגלה ובעמוד המוצר.']},
    reviews: {n: 'ביקורות', i: '⭐', what: 'בקשה אוטומטית לביקורת כמה ימים אחרי שהחבילה הגיעה.',
      why: 'בבלאק פריידיי מגיעים הרבה קונים שלא מכירים אותך. ביקורות טריות עוזרות להם להחליט.',
      ex: 'היי רון, החבילה הגיעה? 📦 נשמח לשמוע מה דעתך, זה לוקח 20 שניות ⭐⭐⭐⭐⭐ [קישור]',
      st: {on: 'יש בקשה אוטומטית. לבדוק שהביקורות מוצגות בעמודי המוצר.', partial: 'לפעמים, ידנית. אוטומציה פשוטה תבקש מכל לקוח בזמן הנכון.', off: 'לא מבקשים ביקורות כרגע.'},
      plan: ['מבקשים ביקורות אוטומטית', 'הופכים את הבקשה לאוטומטית', 'הודעה כמה ימים אחרי שהחבילה הגיעה, עם קישור ישיר לדירוג.']},
    wa: {n: 'וואטסאפ', i: '💬', what: 'ערוץ שהלקוחות פותחים כל יום: תזכורות, עדכונים ומבצעים, רק למי שאישר לקבל.',
      why: 'בתקופת המבצעים תיבות המייל מוצפות. הודעת וואטסאפ קצרה בולטת יותר.',
      ex: '⏰ אבי, נשארו 3 שעות למבצע בלאק פריידיי. העגלה שלך עדיין שמורה: [קישור]',
      st: {on: 'כבר מדבר בוואטסאפ. לוודא שיש אישור דיוור לכל מי שמקבל.', partial: 'יש מייל או SMS, בלי וואטסאפ. זה הערוץ שכדאי להוסיף.', off: 'אין ערוץ קבוע מול הלקוחות.'},
      plan: ['פותחים ערוץ וואטסאפ', 'מוסיפים וואטסאפ לערוצים', 'מחברים מספר עסקי ומבקשים אישור דיוור בקופה ובהרשמה.']},
    daily: {n: 'סיכום יומי AI', i: '☀️', owner: true, what: 'כל בוקר מגיעה אליך הודעה קצרה: כמה הזמנות היו, מה נמכר, מה נתקע ומה כדאי לעשות היום.',
      why: 'בשבוע של בלאק פריידיי כל יום חשוב. מי שרואה מהר מה עובד, מתקן מהר.',
      ex: '☀️ בוקר טוב! אתמול: 23 הזמנות, המוצר המוביל: כוס תרמית. 6 עגלות עדיין פתוחות. המלצה להיום: תזכורת למי שלא סיים.',
      st: {on: 'כבר מקבל סיכום כל בוקר. מעולה.', partial: 'מוציא דוחות בעצמך. סיכום אוטומטי חוסך את הזמן הזה.', off: 'כרגע אין תמונת מצב יומית.'},
      plan: ['מקבלים סיכום יומי', 'הופכים את הדוחות לסיכום אוטומטי', 'הודעה כל בוקר עם ההזמנות, המוצר המוביל ומה נתקע.']},
  };
  var FILL = [['מחליטים על הצעת בלאק פריידיי', 'מה המבצע, עד מתי, ומי שומע עליו ראשון.'], ['בודקים הכל כמו לקוח', 'מהטלפון: מוסיפים לעגלה, נוטשים, ובודקים שכל הודעה מגיעה.'],
    ['שולחים טיזר לרשימה', 'הודעה קצרה: משהו גדול מגיע, ומי שרשום שומע ראשון.'], ['מתכננים את לוח ההודעות', 'מתי יוצאת כל הודעה בשבוע המבצע, ובאיזה ערוץ.'],
    ['מכינים הודעת "יום אחרון"', 'כתובה מראש, מוכנה לשליחה בבוקר של היום האחרון.'], ['מרעננים את ההודעות הקיימות', 'עוברים על כל האוטומציות ומעדכנים נוסח ותמונות לנובמבר.'], ['נושמים 😌', 'הכל מוכן. מכאן רק עוקבים ומגיבים.']];

  /* ---------- storage ---------- */
  function load(k) { try { return JSON.parse(BFX.ls(k) || 'null'); } catch (e) { return null; } }
  function save(k, v) { BFX.ls(k, v == null ? null : JSON.stringify(v)); }
  var S = load('bf_ans') || {a: {}, i: 0};
  if (!S.a) S = {a: {}, i: 0};

  function engines(a) {
    var e = {};
    EK.forEach(function (k) { if (STATE[k]) e[k] = STATE[k][a[k]] || 'off'; });
    var ch = a.channels || [];
    e.wa = ch.indexOf('whatsapp') >= 0 ? 'on' : (ch.indexOf('email') >= 0 || ch.indexOf('sms') >= 0) ? 'partial' : 'off';
    return e;
  }
  function counts(e) { var c = {on: 0, partial: 0, off: 0}; EK.forEach(function (k) { c[e[k]]++; }); return c; }

  /* ---------- isometric growth map (mockup geometry: 3×3 tiles, back-to-front) ---------- */
  var W = 84, G = 26, CX = 170, CY = 74, HON = 46, HHALF = 22;
  var ORDER = []; for (var i = 0; i < 3; i++) for (var j = 0; j < 3; j++) ORDER.push([i, j]);
  ORDER.sort(function (a, b) { return (a[0] + a[1]) - (b[0] + b[1]) || a[0] - b[0]; });
  function target(st) { return st === 'on' ? HON : st === 'partial' ? HHALF : 0; }
  function geo(states, hs, all) {
    return ORDER.map(function (ij, n) {
      var idx = ij[0] * 3 + ij[1], k = EK[idx], st = all ? 'on' : states[idx];
      var x = CX + (ij[1] - ij[0]) * (W + G) / 2, y = CY + (ij[0] + ij[1]) * (W + G) / 4, w = W / 2, q = W / 4, h = hs[idx];
      var flat = h < 1.5, hh = flat ? 3 : h;
      return {k: k, st: st, real: states[idx], idx: idx, n: n, d: ij[0] + ij[1], x: x, y: y, h: hh, flat: flat,
        top: [[x, y - q - hh], [x + w, y - hh], [x, y + q - hh], [x - w, y - hh]],
        left: [[x - w, y - hh], [x, y + q - hh], [x, y + q], [x - w, y]],
        right: [[x + w, y - hh], [x, y + q - hh], [x, y + q], [x + w, y]],
        ghost: [[x, y - q - HON], [x + w, y - HON], [x, y + q - HON], [x - w, y - HON]]};
    });
  }
  var PAL = {on: {l: '#C98500', r: '#A86F00', lb: '#FFD84D', tx: '#FFD84D'}, partial: {l: '#946305', r: '#734C04', lb: '#E8A321', tx: '#FFCB5C'}, off: {l: '', r: '', lb: 'rgba(255,255,255,.28)', tx: 'rgba(255,255,255,.85)'}};
  var pts = function (a) { return a.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '); };
  function isoSvg(states, hs, all, pre) {
    var g = geo(states, hs, all), out = '', labels = '';
    out += '<defs><linearGradient id="' + pre + 'gt" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFE680"/><stop offset="1" stop-color="#F2B705"/></linearGradient>' +
      '<linearGradient id="' + pre + 'gp" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F3CF63"/><stop offset="1" stop-color="#C98A00"/></linearGradient>' +
      '<filter id="' + pre + 'gl" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>';
    out += '<polygon points="' + CX + ',' + (CY - 36) + ' ' + (CX + 166) + ',' + (CY + 47) + ' ' + CX + ',' + (CY + 166) + ' ' + (CX - 166) + ',' + (CY + 47) + '" fill="#23242d" stroke="#ffffff18"/>';
    g.forEach(function (t) {
      var p = PAL[t.st];
      out += '<g data-k="' + t.k + '">';
      if (t.flat) out += '<polygon points="' + pts(t.top) + '" fill="#ffffff0d" stroke="#ffffff70" stroke-dasharray="4 4"/>' + (all ? '' : '<polygon points="' + pts(t.ghost) + '" fill="none" stroke="#ffffff24" stroke-dasharray="3 4"/>');
      else {
        if (t.st === 'partial') out += '<polygon points="' + pts(t.ghost) + '" fill="none" stroke="#ffffff38" stroke-dasharray="3 4"/>';
        out += '<polygon points="' + pts(t.left) + '" fill="' + p.l + '"/><polygon points="' + pts(t.right) + '" fill="' + p.r + '"/>';
        out += '<polygon points="' + pts(t.top) + '" fill="url(#' + pre + (t.st === 'on' ? 'gt' : 'gp') + ')"' + (t.st === 'on' && t.h > HON * .6 ? ' filter="url(#' + pre + 'gl)"' : '') + '/>';
      }
      out += '</g>';
      var nm = E[t.k].n, wd = nm.length * 5.9 + 12;   // labels sit at full-tower height so neighbours never overlap; the wide tile gap keeps towers apart
      labels += '<g data-k="' + t.k + '" transform="translate(' + t.x.toFixed(1) + ',' + (t.y - HON + 2).toFixed(1) + ')"><rect x="' + (-wd / 2).toFixed(1) + '" y="-9" width="' + wd.toFixed(1) + '" height="18" rx="9" fill="#000000cc" stroke="' + p.lb + '"/>' +
        '<text text-anchor="middle" y="3.6" font-size="10" font-weight="800" font-family="Heebo,Arial,sans-serif" fill="' + p.tx + '">' + esc(nm) + '</text></g>';
    });
    return out + labels;
  }
  function svgEl(states, hs, all, pre, label) {
    return '<svg viewBox="0 0 340 236" role="img" aria-label="' + esc(label || 'מפת הצמיחה של החנות') + '" xmlns="http://www.w3.org/2000/svg">' + isoSvg(states, hs, all, pre) + '</svg>';
  }
  /* height animation: each tower rises in turn (map order back-to-front), or along the diagonal for the "all on" sweep */
  function animate(svg, states, from, to, all, pre, mode, done) {
    var dur = 560, gap = mode === 'sweep' ? 95 : 130, start = null, g0 = geo(states, from, all);
    var delay = {}; g0.forEach(function (t) { delay[t.idx] = (mode === 'sweep' ? t.d : t.n) * gap; });
    if (svg.__h) from = svg.__h.slice();   // continue from where an interrupted animation stopped
    var cur = from.slice(); svg.__h = cur; var total = dur + Math.max.apply(null, Object.keys(delay).map(function (k) { return delay[k]; }));
    if (reduce) { svg.__h = to.slice(); svg.innerHTML = isoSvg(states, to, all, pre); if (done) done(); return; }
    var ease = function (x) { var c = 1.4; return 1 + (c + 1) * Math.pow(x - 1, 3) + c * Math.pow(x - 1, 2); };   // easeOutBack
    (function frame(ts) {
      if (start == null) start = ts;
      var el = ts - start;
      for (var i = 0; i < 9; i++) { var x = Math.min(1, Math.max(0, (el - delay[i]) / dur)); cur[i] = from[i] + (to[i] - from[i]) * (x > 0 ? ease(x) : 0); }
      svg.innerHTML = isoSvg(states, cur, all, pre);
      if (el < total) svg.__raf = requestAnimationFrame(frame); else { svg.innerHTML = isoSvg(states, to, all, pre); if (done) done(); }
    })(performance.now());
  }

  /* ---------- small illustrations, one per question ---------- */
  var Y = '#FFD84D';
  var ILL = {
    store: '<svg viewBox="0 0 190 104"><g class="fl" fill="none" stroke="' + Y + '" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"><path d="M45 40h100v54H45z"/><path d="M38 40l12-26h90l12 26"/><path d="M38 40c0 8 12 8 14 0 2 8 14 8 16 0 2 8 14 8 16 0 2 8 14 8 16 0 2 8 14 8 16 0 2 8 14 8 16 0"/><path d="M82 94V66h26v28"/></g></svg>',
    boxes: '<svg viewBox="0 0 190 104"><g class="fl" stroke="#1a1205" stroke-width="1.5"><path d="M60 62l24-12 24 12-24 12z" fill="#FFE680"/><path d="M60 62v24l24 12V74z" fill="#C98500"/><path d="M108 62v24l-24 12V74z" fill="#A86F00"/><path d="M106 62l24-12 24 12-24 12z" fill="#FFE680"/><path d="M106 62v24l24 12V74z" fill="#C98500"/><path d="M154 62v24l-24 12V74z" fill="#A86F00"/><path d="M83 26l24-12 24 12-24 12z" fill="#FFE680"/><path d="M83 26v24l24 12V38z" fill="#C98500"/><path d="M131 26v24l-24 12V38z" fill="#A86F00"/></g></svg>',
    mail: '<svg viewBox="0 0 190 104"><g class="fl" fill="none" stroke="' + Y + '" stroke-width="5" stroke-linejoin="round"><rect x="50" y="22" width="90" height="62" rx="8"/><path d="M52 26l43 32 43-32"/></g><path class="fl" d="M146 18c-4-8-16-6-15 3 1 6 15 14 15 14s14-8 15-14c1-9-11-11-15-3z" fill="#E08A00"/></svg>',
    box: '<svg viewBox="0 0 190 104"><g class="fl"><path d="M58 34l37-16 37 16-37 16z" fill="#FFE680" stroke="#1a1205" stroke-width="1.5"/><path d="M58 34v42l37 18V50z" fill="#C98500" stroke="#1a1205" stroke-width="1.5"/><path d="M132 34v42L95 94V50z" fill="#A86F00" stroke="#1a1205" stroke-width="1.5"/><circle cx="140" cy="28" r="16" fill="#16A34A"/><path d="M133 28l5 5 9-10" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g></svg>',
    people: '<svg viewBox="0 0 190 104"><g class="fl" fill="' + Y + '"><circle cx="95" cy="30" r="14"/><path d="M69 84c0-18 12-30 26-30s26 12 26 30z"/><circle cx="55" cy="40" r="11" opacity=".7"/><path d="M35 86c0-14 9-24 20-24s20 10 20 24z" opacity=".7"/><circle cx="135" cy="40" r="11" opacity=".7"/><path d="M115 86c0-14 9-24 20-24s20 10 20 24z" opacity=".7"/></g></svg>',
    loop: '<svg viewBox="0 0 190 104"><g class="fl" fill="none" stroke="' + Y + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"><path d="M130 52a35 35 0 1 1-12-26"/><path d="M120 12l-2 15 15 2"/></g><text x="95" y="60" text-anchor="middle" font-size="26" class="fl">💛</text></svg>',
    bundle: '<svg viewBox="0 0 190 104"><g class="fl"><rect x="34" y="34" width="46" height="46" rx="8" fill="#C98500"/><rect x="34" y="34" width="46" height="14" rx="6" fill="#FFE680"/><rect x="110" y="34" width="46" height="46" rx="8" fill="#A86F00"/><rect x="110" y="34" width="46" height="14" rx="6" fill="#FFE680"/><path d="M95 46v24M83 58h24" stroke="' + Y + '" stroke-width="6" stroke-linecap="round"/></g></svg>',
    stars: '<svg viewBox="0 0 190 104"><g class="fl" fill="' + Y + '">' + [0, 1, 2, 3, 4].map(function (n) { var cx = 35 + n * 30, cy = 50; var p = []; for (var s = 0; s < 10; s++) { var r = s % 2 ? 6 : 14, a = Math.PI / 5 * s - Math.PI / 2; p.push((cx + r * Math.cos(a)).toFixed(1) + ',' + (cy + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(' ') + '"' + (n === 4 ? ' opacity=".35"' : '') + '/>'; }).join('') + '</g></svg>',
    chat: '<svg viewBox="0 0 190 104"><g class="fl"><path d="M40 20h70a10 10 0 0 1 10 10v26a10 10 0 0 1-10 10H62l-16 12V66h-6a10 10 0 0 1-10-10V30a10 10 0 0 1 10-10z" fill="' + Y + '"/><path d="M150 40H96a10 10 0 0 0-10 10v22a10 10 0 0 0 10 10h38l14 10V82h2a10 10 0 0 0 10-10V50a10 10 0 0 0-10-10z" fill="#25D366"/><circle cx="108" cy="61" r="4" fill="#fff"/><circle cx="123" cy="61" r="4" fill="#fff"/><circle cx="138" cy="61" r="4" fill="#fff"/></g></svg>',
    sun: '<svg viewBox="0 0 190 104"><g class="fl"><circle cx="70" cy="46" r="18" fill="' + Y + '"/><g stroke="' + Y + '" stroke-width="4" stroke-linecap="round">' + [0, 1, 2, 3, 4, 5, 6, 7].map(function (n) { var a = n * Math.PI / 4; return '<path d="M' + (70 + 26 * Math.cos(a)).toFixed(1) + ' ' + (46 + 26 * Math.sin(a)).toFixed(1) + 'L' + (70 + 34 * Math.cos(a)).toFixed(1) + ' ' + (46 + 34 * Math.sin(a)).toFixed(1) + '"/>'; }).join('') + '</g><rect x="116" y="14" width="44" height="78" rx="9" fill="none" stroke="#fff" stroke-width="4"/><rect x="123" y="30" width="30" height="8" rx="4" fill="#25D366"/><rect x="123" y="44" width="24" height="6" rx="3" fill="#ffffff80"/><rect x="123" y="56" width="28" height="6" rx="3" fill="#ffffff80"/></g></svg>'
  };
  function illustration(q) {
    var art = q.ill === 'cart' ? '<div class="cart fl"><i></i><i></i></div>' : ILL[q.ill];
    return '<div class="ill" aria-hidden="true">' + art + '<div class="ghost">' + esc(q.g) + '</div></div>';
  }

  /* ---------- page helpers ---------- */
  function setDark(on) {
    app.classList.toggle('dark', on);
    var c = on ? '#121318' : '#FAF8F3';
    try { document.body.style.background = c; var p = app.parentElement; while (p && p !== document.body) { p.style.backgroundColor = c; p = p.parentElement; } } catch (e) {}
  }
  function top() { var y = app.getBoundingClientRect().top + window.pageYOffset; if (window.pageYOffset > y) window.scrollTo(0, y); }
  function bfDay() {   // Black Friday = the day after the 4th Thursday of November
    var now = new Date(), yr = now.getFullYear();
    for (var k = 0; k < 2; k++) {
      var d = new Date(yr + k, 10, 1), th = (4 - d.getDay() + 7) % 7 + 1 + 21, bf = new Date(yr + k, 10, th + 1);
      var days = Math.ceil((bf - new Date(now.getFullYear(), now.getMonth(), now.getDate())) / 864e5);
      if (days >= 0) return {days: days, date: bf.getDate() + '.11'};
    }
    return null;
  }
  function countdown() {
    var b = bfDay(); if (!b || b.days > 60) return '';
    return '<span class="chip">⏳ ' + (b.days === 0 ? 'היום בלאק פריידיי!' : b.days === 1 ? 'מחר בלאק פריידיי!' : 'עוד ' + b.days + ' ימים לבלאק פריידיי · ' + b.date) + '</span>';
  }
  var started = false;

  /* ---------- screens ---------- */
  function intro() {
    setDark(false); tb.innerHTML = '🛒 בדיקת מוכנות <b>לבלאק פריידיי</b>';
    var resume = Object.keys(S.a).length > 0 && S.i > 0 && S.i < N;
    var demo = ['on', 'partial', 'on', 'on', 'off', 'on', 'partial', 'on', 'on'];
    main.innerHTML = '<div class="scr">' +
      '<div class="hero" aria-hidden="true"><svg viewBox="0 0 340 236" id="bfHero">' + isoSvg(demo, [0, 0, 0, 0, 0, 0, 0, 0, 0], false, 'h') + '</svg></div>' +
      countdown() +
      '<h1>כמה החנות שלך מוכנה <em>לבלאק פריידיי?</em></h1>' +
      '<p class="hint" style="margin-top:0">11 שאלות קצרות, בערך דקה וחצי. בסוף מקבלים מפת צמיחה של החנות: אילו מנועים כבר עובדים, אילו כבויים, ותוכנית ל-7 ימים.</p>' +
      '<ul class="pts"><li><span>🗺️</span>מפה של 9 המנועים שמכניסים כסף בחנות</li><li><span>📅</span>תוכנית פשוטה, יום אחרי יום</li><li><span>🔒</span>בלי להתחבר לחנות ובלי כרטיס אשראי</li></ul>' +
      '<div class="spacer"></div>' +
      '<button class="btn" type="button" id="bfGo">' + (resume ? 'ממשיכים מאיפה שעצרת ←' : 'מתחילים ←') + '</button>' +
      (resume ? '<button class="redo" type="button" id="bfFresh" style="color:var(--mut)">להתחיל מההתחלה</button>' : '') +
      '</div>';
    var hero = main.querySelector('#bfHero');
    animate(hero, demo, [0, 0, 0, 0, 0, 0, 0, 0, 0], [46, 22, 46, 46, 0, 46, 22, 46, 46], false, 'h', 'rise');
    main.querySelector('#bfGo').onclick = function () {
      if (!started) { started = true; BFX.track('BFQuizStart'); }
      question(resume ? S.i : 0, false, true);
    };
    var fr = main.querySelector('#bfFresh'); if (fr) fr.onclick = function () { S = {a: {}, i: 0}; save('bf_ans', S); intro(); };
  }

  function optLabel(q, o) {
    var plat = S.a.platform === 'shopify' ? 'לשופיפיי' : 'לממשק החנות';
    return o[2].replace('{P}', plat);
  }
  var lock = false;
  function question(i, back, push) {
    setDark(false); lock = false;
    var q = Q[i], cur = S.a[q.k], multi = !!q.multi, sel = multi ? (cur || []).slice() : cur;
    S.i = i; save('bf_ans', S);
    if (push !== false) try { history.pushState({bf: i}, ''); } catch (e) {}
    var opts = q.o.map(function (o) {
      var on = multi ? sel.indexOf(o[0]) >= 0 : sel === o[0];
      return '<button type="button" class="opt' + (on ? ' on' : '') + '" data-v="' + o[0] + '" ' + (multi ? 'role="checkbox" aria-checked="' + on + '"' : 'role="radio" aria-checked="' + on + '"') + '>' +
        '<span class="e" aria-hidden="true">' + o[1] + '</span><span class="t">' + esc(optLabel(q, o)) + '</span>' + (multi ? '<span class="ck" aria-hidden="true">' + (on ? '✓' : '') + '</span>' : '') + '</button>';
    }).join('');
    main.innerHTML = '<div class="scr' + (back ? ' back' : '') + '">' +
      '<div class="prog"><button type="button" class="bk" id="bfBack" aria-label="חזרה">→ חזרה</button><div class="b"><i style="width:' + ((i + 1) / N * 100) + '%"></i></div><span>' + (i + 1) + ' / ' + N + '</span></div>' +
      illustration(q) + '<h2 id="bfQt">' + esc(q.t) + '</h2>' + (q.h ? '<p class="hint">' + esc(q.h) + '</p>' : '') +
      '<div class="opts" role="' + (multi ? 'group' : 'radiogroup') + '" aria-labelledby="bfQt">' + opts + '</div>' +
      '<div class="spacer"></div>' +
      (multi || cur != null ? '<button class="btn" type="button" id="bfNext"' + (multi && !sel.length ? ' disabled' : '') + '>המשך ←</button>' : '') +
      '</div>';
    top();
    main.querySelector('#bfBack').onclick = function () { if (history.state && history.state.bf === i) history.back(); else if (i === 0) intro(); else question(i - 1, true); };
    var nx = main.querySelector('#bfNext');
    function next() {
      if (multi) S.a[q.k] = sel.slice();
      save('bf_ans', S);
      BFX.track('BFQuizAnswer', {q: q.k, a: [].concat(S.a[q.k]).join(',')}, {repeat: true, server: false});
      if (i + 1 < N) question(i + 1); else leadForm();
    }
    if (nx) nx.onclick = function () { if (!multi || sel.length) next(); };
    main.querySelectorAll('.opt').forEach(function (b) {
      b.onclick = function () {
        var v = b.getAttribute('data-v');
        if (multi) {
          if (v === 'none') sel = sel.indexOf('none') >= 0 ? [] : ['none'];
          else { sel = sel.filter(function (x) { return x !== 'none'; }); var p = sel.indexOf(v); if (p >= 0) sel.splice(p, 1); else sel.push(v); }
          main.querySelectorAll('.opt').forEach(function (o) { var on = sel.indexOf(o.getAttribute('data-v')) >= 0; o.classList.toggle('on', on); o.setAttribute('aria-checked', on); o.querySelector('.ck').textContent = on ? '✓' : ''; });
          nx.disabled = !sel.length; S.a[q.k] = sel.slice(); save('bf_ans', S);
          return;
        }
        if (lock) return; lock = true;
        S.a[q.k] = v;
        main.querySelectorAll('.opt').forEach(function (o) { var on = o === b; o.classList.toggle('on', on); o.setAttribute('aria-checked', on); });
        setTimeout(next, reduce ? 60 : 260);
      };
    });
  }

  function complete() { return Q.every(function (q) { var v = S.a[q.k]; return q.multi ? v && v.length : v != null; }); }

  function leadForm() {
    setDark(false);
    if (!complete()) { for (var i = 0; i < N; i++) if (S.a[Q[i].k] == null || (Q[i].multi && !S.a[Q[i].k].length)) return question(i); }
    try { history.pushState({bf: 'lead'}, ''); } catch (e) {}
    var e = engines(S.a), st = EK.map(function (k) { return e[k]; }), prev = load('bf_res') || {};
    main.innerHTML = '<div class="scr">' +
      '<div class="prog"><button type="button" class="bk" id="bfBack" aria-label="חזרה">→ חזרה</button><div class="b"><i style="width:100%"></i></div><span>' + N + ' / ' + N + ' ✓</span></div>' +
      '<div class="lock" aria-hidden="true">' + svgEl(st, st.map(target), false, 'l') + '<div class="t">🔒 מפת הצמיחה שלך כמעט מוכנה</div></div>' +
      '<h2>סיימת! מפת הצמיחה שלך מוכנה</h2><p class="hint">איך לקרוא לך, ואיך אפשר לחזור אליך?</p>' +
      '<form id="bfForm" novalidate style="display:grid;gap:10px">' +
      '<div class="fld" data-f="name"><label class="vh" for="bfName">שם פרטי</label><input class="in" id="bfName" name="name" autocomplete="given-name" maxlength="40" placeholder="שם פרטי" required value="' + esc(prev.name || '') + '"><span class="em" aria-live="polite"></span></div>' +
      '<div class="fld" data-f="phone"><label class="vh" for="bfPhone">טלפון נייד</label><input class="in" id="bfPhone" name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="16" placeholder="טלפון נייד" dir="ltr" style="text-align:right" required value="' + esc(prev.phone || '') + '"><span class="em" aria-live="polite"></span></div>' +
      '<div class="fld" data-f="email"><label class="vh" for="bfEmail">אימייל (לא חובה)</label><input class="in" id="bfEmail" name="email" type="email" inputmode="email" autocomplete="email" maxlength="120" placeholder="אימייל (לא חובה)" dir="ltr" style="text-align:right" value="' + esc(prev.email || '') + '"><span class="em" aria-live="polite"></span></div>' +
      '<div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>' +
      '<label class="chk" data-f="consent"><input type="checkbox" name="consent"' + (prev.consent ? ' checked' : '') + '><span>מאשר/ת לקבל מאביב מלכה תכנים ועדכונים באימייל, ב-SMS ובוואטסאפ. אפשר להסיר בכל רגע.</span></label>' +
      '<span class="em" id="bfCe" aria-live="polite"></span>' +
      '<p class="legal">בשליחה אני מאשר/ת את <button type="button" class="lnk" data-open="bfPriv">מדיניות הפרטיות</button>.</p>' +
      '<button class="btn" type="submit" style="margin-top:6px">לפתוח את התוצאה ←</button>' +
      '</form></div>';
    top();
    main.querySelector('#bfBack').onclick = function () { if (history.state && history.state.bf === 'lead') history.back(); else question(N - 1, true); };
    var f = main.querySelector('#bfForm');
    f.addEventListener('submit', function (ev) { ev.preventDefault(); submit(f); });
  }

  function normPhone(s) {   // Israeli mobile only: 05X-XXXXXXX / +972 5X… → 9725XXXXXXXX
    s = String(s || '').replace(/[\s\-().]/g, ''); if (s.indexOf('00') === 0) s = '+' + s.slice(2);
    if (/^05\d{8}$/.test(s)) return '972' + s.slice(1);
    if (/^\+?9720?5\d{8}$/.test(s)) return '972' + s.replace(/^\+?9720?/, '');
    return null;
  }
  function setErr(f, name, msg) { var el = f.querySelector('[data-f="' + name + '"]'); if (!el) return; el.classList.toggle('bad', !!msg); var m = el.querySelector('.em'); if (m) m.textContent = msg || ''; }

  function submit(f) {
    var name = f.name.value.trim().replace(/\s+/g, ' '), phone = normPhone(f.phone.value), email = f.email.value.trim(), consent = f.consent.checked, bad = null;
    var ok = {name: name.length >= 2 && /[A-Za-z֐-׿]/.test(name), phone: !!phone, email: !email || /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)};
    setErr(f, 'name', ok.name ? '' : 'איך לקרוא לך? (לפחות 2 אותיות)'); setErr(f, 'phone', ok.phone ? '' : 'צריך מספר נייד ישראלי, למשל 050-1234567'); setErr(f, 'email', ok.email ? '' : 'האימייל לא נראה תקין (אפשר גם להשאיר ריק)');
    var ce = f.parentNode.querySelector('#bfCe'); f.querySelector('.chk').classList.toggle('bad', CONSENT_REQUIRED && !consent); ce.textContent = CONSENT_REQUIRED && !consent ? 'צריך לסמן את האישור כדי לפתוח את התוצאה' : '';
    ['name', 'phone', 'email'].some(function (k) { if (!ok[k]) { bad = k; return true; } return false; });
    if (bad) { f[bad].focus(); return; }
    if (CONSENT_REQUIRED && !consent) { f.consent.focus(); return; }
    var btn = f.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = 'פותחים…';
    var u = BFX.utm(), prev = load('bf_res') || {};
    var sid = 'bf' + BFX.rid(18);   // one id per submission: the retry after a network error reuses it, so the server never stores it twice
    var body = {sid: sid, name: name, phone: f.phone.value.trim(), email: email, consent: consent, privacy_ack: true, answers: S.a, hp: f.company.value, elapsed: Date.now() - t0,
      event_id: 'lead_' + BFX.rid(16), vid: BFX.vid, utm: u, fbclid: u.fbclid || '', fbc: BFX.fbc(), fbp: BFX.cookie('_fbp'), referrer: document.referrer.slice(0, 300), landing_url: location.origin + location.pathname};
    var res = {sid: sid, name: name, phone: f.phone.value.trim(), email: email, consent: consent, a: S.a, t: Date.now(), event_id: body.event_id, sent: false, lead: false};
    save('bf_res', res);
    BFX.api('/api/bf', body).then(function (r) {
      if (r.ok && !r.spam) { res.sent = true; fireLead(res); save('bf_res', res); return result(true); }
      if (r.ok && r.spam) { res.sent = true; save('bf_res', res); return result(true); }
      if (r._status === 422 && r.fields) {
        if (r.fields.answers) { res.sent = true; save('bf_res', res); return result(true); }
        if (r.fields.name) setErr(f, 'name', 'איך לקרוא לך? (לפחות 2 אותיות)'); if (r.fields.phone) setErr(f, 'phone', 'צריך מספר נייד ישראלי, למשל 050-1234567'); if (r.fields.email) setErr(f, 'email', 'האימייל לא נראה תקין (אפשר גם להשאיר ריק)');
        btn.disabled = false; btn.textContent = 'לפתוח את התוצאה ←'; return;
      }
      if (r._status === 429) { res.sent = true; save('bf_res', res); return result(true); }
      throw new Error('http ' + r._status);
    }).catch(function () {
      // never block the result: count the lead now (same event_id the server will use), keep the submission and retry once
      fireLead(res); save('bf_pending', body); save('bf_res', res); result(true);
      setTimeout(retryPending, 5000);
    });
  }
  function fireLead(res) {
    if (res.lead) return; res.lead = true;
    BFX.fb('Lead', res.event_id, {content_name: 'bf-quiz', content_category: 'lead-magnet'});
  }
  function retryPending() {
    var body = load('bf_pending'); if (!body) return;
    BFX.api('/api/bf', body).then(function (r) {
      if (r.ok || r._status === 422 || r._status === 429) { save('bf_pending', null); var res = load('bf_res'); if (res && res.sid === body.sid) { res.sent = true; save('bf_res', res); } }
    }).catch(function () {});
  }

  /* ---------- result ---------- */
  var view = 'today', curH = null;
  function result(fresh) {
    var res = load('bf_res'); if (!res || !res.a) return intro();
    S.a = res.a; S.i = N; save('bf_ans', null);
    setDark(true); tb.innerHTML = '🛒 מפת הצמיחה של <b>החנות שלך</b>';
    var e = engines(res.a), st = EK.map(function (k) { return e[k]; }), c = counts(e), on = c.on, not = 9 - on;
    var shop = res.a.platform === 'shopify';
    var todo = PRI.filter(function (k) { return e[k] !== 'on'; });
    var h3 = on === 9 ? 'כל 9 המנועים עובדים 👏' : (on === 0 ? 'עוד אין מנוע שעובד במלואו' : on === 1 ? 'מנוע אחד עובד' : on + ' מנועים עובדים') + '. ' + (not === 1 ? 'אחד כבוי.' : not + ' כבויים.');
    var pct = on / 9 * 100;
    /* 7-day plan: off/partial engines by priority; 8–9 items share the last days; fewer than 7 get Black Friday prep days */
    var days = [], extra = Math.max(0, todo.length - 7), singles = todo.length - extra * 2, ti = 0;
    for (var d = 0; d < 7; d++) {
      var items = [];
      if (ti < todo.length) { items.push(todo[ti++]); if (d >= singles && ti < todo.length) items.push(todo[ti++]); }
      days.push(items);
    }
    var fi = 0;
    var planHtml = days.map(function (items, d) {
      if (!items.length) { var fl = FILL[fi++] || FILL[FILL.length - 1]; return '<li><span class="dn x">יום ' + (d + 1) + '</span><b>' + esc(fl[0]) + '</b><p>' + esc(fl[1]) + '</p></li>'; }
      return '<li><span class="dn">יום ' + (d + 1) + '</span><b>' + items.map(function (k) { return esc(E[k].plan[e[k] === 'partial' ? 1 : 0]); }).join(' + ') + '</b><p>' + items.map(function (k) { return esc(E[k].plan[2]); }).join(' ') + '</p></li>';
    }).join('');
    var help = todo.slice(0, 2).map(function (k) { return E[k].n; });
    var waText = 'היי אביב, עשיתי את בדיקת המוכנות לבלאק פריידיי ויצא לי ' + on + '/9. אשמח לעזרה עם ' + (help.length ? help.join(' ו') : 'ההכנות לבלאק פריידיי');
    var pingH = shop ? (on === 9 ? 'הכל דולק. רוצה לנהל את כל המנועים ממקום אחד?' : (not === 1 ? 'את המנוע הכבוי' : 'את רוב המנועים הכבויים') + ' אפשר להדליק עם Ping AI')
      : 'רוצה לראות איך מדליקים את המנועים האלה?';
    var pingS = shop ? 'עגלות נטושות, תודה אחרי קנייה, החזרת לקוחות ישנים ועוד. בוואטסאפ, SMS ומייל, למי שאישר לקבל.'
      : 'בהדרכת וידאו חינמית רואים איך עובד מערך כזה: עגלה נטושה, תודה אחרי קנייה והחזרת לקוחות, בוואטסאפ, SMS ומייל.';
    main.innerHTML = '<div class="scr">' +
      '<div class="score"><div class="ring" id="bfRing" style="background:conic-gradient(#FFD84D 0 0%,#ffffff22 0 100%)"><b>' + on + '/9</b></div><div><h3>' + esc(h3) + '</h3><p>לפני בלאק פריידיי, אלה הכסף שמחכה לך בחנות</p>' +
      (c.partial ? '<small>' + (c.partial === 1 ? 'אחד מהם חצי דולק' : c.partial + ' מהם חצי דולקים') + '</small>' : '') + '</div></div>' +
      countdown() +
      '<div class="tog" role="group" aria-label="תצוגת המפה"><button type="button" data-v="today" aria-pressed="true">החנות היום</button><button type="button" data-v="all" aria-pressed="false">כשהכל דולק ✨</button></div>' +
      '<div class="stage"><svg viewBox="0 0 340 236" id="bfMap" role="img" aria-label="מפת הצמיחה: ' + on + ' מתוך 9 מנועים דולקים"></svg><div class="sweep" id="bfSweep"></div></div>' +
      '<p class="allmsg" id="bfAllMsg" hidden>ככה נראית חנות שכל המנועים שלה דולקים</p>' +
      '<div class="leg"><span><i style="background:#F2B705"></i>עובד</span><span><i style="background:linear-gradient(0deg,#E08A00 50%,transparent 50%);border:1.5px solid #E08A00"></i>חצי דולק</span><span><i style="border:1.5px dashed #fff8"></i>כבוי, אפשר להדליק</span></div>' +
      '<p class="tip">👆 לחצו על מנוע כדי לראות מה הוא עושה</p>' +
      '<div class="ping"><span class="k">' + (shop ? 'הכלי שאני ממליץ עליו' : 'הדרכה חינמית') + '</span><div class="h">' + esc(pingH) + '</div><div class="s">' + esc(pingS) + '</div>' +
      (shop ? '<a class="btn sm" id="bfPing" href="' + PING_URL + '" target="_blank" rel="noopener">לראות איך מדליקים ←</a>' : '<a class="btn sm" id="bfTr1" href="' + TRAINING_URL + '" target="_blank" rel="noopener">להדרכה החינמית ←</a>') + '</div>' +
      '<div class="card"><h4>המנועים שלך</h4><div class="engs">' + EK.map(function (k) {
        return '<button type="button" class="eng" data-k="' + k + '"><span class="d ' + e[k] + '" aria-hidden="true"></span><span class="n">' + E[k].i + ' ' + esc(E[k].n) + '</span><span class="s ' + e[k] + '">' + {on: 'דולק', partial: 'חצי', off: 'כבוי'}[e[k]] + '</span><span class="c" aria-hidden="true">‹</span></button>';
      }).join('') + '</div></div>' +
      '<div class="card"><h4>התוכנית שלך ל-7 ימים</h4><ol class="plan">' + planHtml + '</ol></div>' +
      '<div class="ctas">' + (shop ? '<a class="cta2 tr" id="bfTr2" href="' + TRAINING_URL + '" target="_blank" rel="noopener">🎬 הדרכת וידאו חינמית</a>' : '') +
      '<a class="cta2 wa" id="bfWa" href="https://wa.me/' + WA + '?text=' + encodeURIComponent(waText) + '" target="_blank" rel="noopener">💬 לדבר עם אביב בוואטסאפ</a></div>' +
      '<div class="card share"><img id="bfShImg" alt="תצוגה מקדימה של תמונת הסטורי"><div><h4 style="margin:0">שתפו בסטורי</h4><p>תמונה עם המפה והציון שלך, בלי שם החנות.</p><button class="btn sm" type="button" id="bfShare">שתפו בסטורי</button></div></div>' +
      '<button class="redo" type="button" id="bfRedo">לעשות את הבדיקה מחדש</button>' +
      '</div>';
    top();
    var map = main.querySelector('#bfMap'), ring = main.querySelector('#bfRing');
    var zero = [0, 0, 0, 0, 0, 0, 0, 0, 0], tgt = st.map(target), full = EK.map(function () { return HON; });
    curH = tgt; view = 'today';
    if (reduce) ring.style.background = 'conic-gradient(#FFD84D 0 ' + pct + '%,#ffffff22 0 100%)';
    else { var t1 = null; (function rf(ts) { if (t1 == null) t1 = ts; var x = Math.min(1, (ts - t1) / 900); ring.style.background = 'conic-gradient(#FFD84D 0 ' + (pct * x) + '%,#ffffff22 0 100%)'; if (x < 1) requestAnimationFrame(rf); })(performance.now()); }
    animate(map, st, zero, tgt, false, 'm', 'rise');
    var tog = main.querySelectorAll('.tog button'), msg = main.querySelector('#bfAllMsg'), sweep = main.querySelector('#bfSweep');
    tog.forEach(function (b) {
      b.onclick = function () {
        var v = b.getAttribute('data-v'); if (v === view) return; view = v;
        tog.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
        cancelAnimationFrame(map.__raf);
        if (v === 'all') {
          map.classList.remove('all'); void map.getBoundingClientRect(); map.classList.add('all');
          sweep.classList.remove('go'); void sweep.offsetWidth; sweep.classList.add('go');
          animate(map, st, tgt, full, true, 'm', 'sweep'); msg.hidden = false;
        } else { map.classList.remove('all'); animate(map, st, full, tgt, false, 'm', 'sweep'); msg.hidden = true; }
      };
    });
    map.addEventListener('click', function (ev) { var g = ev.target.closest && ev.target.closest('[data-k]'); if (g) sheet(g.getAttribute('data-k'), e); });
    main.querySelectorAll('.eng').forEach(function (b) { b.onclick = function () { sheet(b.getAttribute('data-k'), e, b); }; });
    var link = function (id, evn) { var a = main.querySelector('#' + id); if (a) a.addEventListener('click', function () { BFX.track(evn, {on_count: on}); }); };
    link('bfPing', 'BFPingClick'); link('bfTr1', 'BFTrainingClick'); link('bfTr2', 'BFTrainingClick'); link('bfWa', 'BFWhatsAppClick');
    main.querySelector('#bfRedo').onclick = function () { save('bf_res', res.sent ? {name: res.name, phone: res.phone, email: res.email, consent: res.consent, done: true} : res); S = {a: {}, i: 0}; save('bf_ans', S); started = false; intro(); };
    BFX.track('BFResultView', {on_count: on, platform: res.a.platform});
    storyImage(st, on).then(function (blob) {
      shareBlob = blob; var img = main.querySelector('#bfShImg'); if (img && blob) img.src = URL.createObjectURL(blob);
    });
    main.querySelector('#bfShare').onclick = function () { share(on); };
    if (load('bf_pending') && !fresh) retryPending();
  }

  /* ---------- engine bottom sheet ---------- */
  var sh = app.querySelector('#bfSheet'), shp = app.querySelector('#bfShP'), shLast = null;
  function sheet(k, e, from) {
    var x = E[k], s = e[k];
    shLast = from || document.activeElement;
    shp.innerHTML = '<div class="grab" aria-hidden="true"></div><div class="hd"><span class="ic" aria-hidden="true">' + x.i + '</span><h3 id="bfShT">' + esc(x.n) + '</h3><span class="st ' + s + '">' + {on: 'דולק', partial: 'חצי דולק', off: 'כבוי'}[s] + '</span><button type="button" class="x" data-close aria-label="סגירה">×</button></div>' +
      '<p>' + esc(x.what) + '</p>' +
      '<h4>למה זה חשוב לפני בלאק פריידיי</h4><p>' + esc(x.why) + '</p>' +
      '<h4>' + (x.owner ? 'דוגמה להודעה שמגיעה אליך' : 'דוגמה להודעה ללקוח') + '</h4>' +
      '<div class="wab" aria-label="דוגמה להודעת וואטסאפ"><div class="bar"><i>' + (x.owner ? '☀️' : '🛍️') + '</i>' + (x.owner ? 'הסיכום היומי שלך' : 'החנות שלך') + '</div><div class="msgs"><div class="bub">' + esc(x.ex) + '<small>10:24</small></div>' +
      (x.owner ? '' : '<div class="cap">נשלחת רק ללקוחות שאישרו לקבל הודעות</div>') + '</div></div>' +
      '<div class="now"><b>אצלך עכשיו:</b> ' + esc(x.st[s]) + '</div>';
    sh.hidden = false; void sh.offsetWidth; sh.classList.add('open');
    shp.querySelector('[data-close]').focus({preventScroll: true});
  }
  function closeSheet() { if (sh.hidden) return; sh.classList.remove('open'); setTimeout(function () { sh.hidden = true; }, reduce ? 0 : 280); if (shLast && shLast.focus) shLast.focus({preventScroll: true}); }
  sh.addEventListener('click', function (ev) { if (ev.target === sh || (ev.target.closest && ev.target.closest('[data-close]'))) closeSheet(); });
  var ty = null;
  shp.addEventListener('touchstart', function (ev) { ty = shp.scrollTop <= 0 ? ev.touches[0].clientY : null; }, {passive: true});
  shp.addEventListener('touchend', function (ev) { if (ty != null && ev.changedTouches[0].clientY - ty > 80) closeSheet(); ty = null; }, {passive: true});

  /* ---------- story image 1080×1920 ---------- */
  var shareBlob = null;
  function poly(ctx, a) { ctx.beginPath(); ctx.moveTo(a[0][0], a[0][1]); for (var i = 1; i < a.length; i++) ctx.lineTo(a[i][0], a[i][1]); ctx.closePath(); }
  function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
  function drawIso(ctx, states, ox, oy, sc) {
    ctx.save(); ctx.translate(ox, oy); ctx.scale(sc, sc);
    poly(ctx, [[CX, CY - 34], [CX + 150, CY + 41], [CX, CY + 150], [CX - 150, CY + 41]]); ctx.fillStyle = '#23242d'; ctx.fill(); ctx.strokeStyle = 'rgba(255,255,255,.1)'; ctx.lineWidth = 1; ctx.stroke();
    var g = geo(states, states.map(target), false);
    g.forEach(function (t) {
      var p = PAL[t.st];
      if (t.flat) { poly(ctx, t.top); ctx.fillStyle = 'rgba(255,255,255,.05)'; ctx.fill(); ctx.setLineDash([4, 4]); ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.stroke(); poly(ctx, t.ghost); ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(255,255,255,.14)'; ctx.stroke(); ctx.setLineDash([]); return; }
      if (t.st === 'partial') { poly(ctx, t.ghost); ctx.setLineDash([3, 4]); ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.stroke(); ctx.setLineDash([]); }
      poly(ctx, t.left); ctx.fillStyle = p.l; ctx.fill(); poly(ctx, t.right); ctx.fillStyle = p.r; ctx.fill();
      var gr = ctx.createLinearGradient(t.x - 46, t.y - t.h - 23, t.x + 46, t.y - t.h + 23);
      gr.addColorStop(0, t.st === 'on' ? '#FFE680' : '#F3CF63'); gr.addColorStop(1, t.st === 'on' ? '#F2B705' : '#C98A00');
      if (t.st === 'on') { ctx.shadowColor = 'rgba(242,183,5,.75)'; ctx.shadowBlur = 14 * sc; }
      poly(ctx, t.top); ctx.fillStyle = gr; ctx.fill(); ctx.shadowBlur = 0;
    });
    ctx.font = '800 10px Heebo, Arial, sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; try { ctx.direction = 'rtl'; } catch (e) {}
    g.forEach(function (t) {
      var p = PAL[t.st], nm = E[t.k].n, wd = ctx.measureText(nm).width + 14, y = t.y - HON + 2;
      rr(ctx, t.x - wd / 2, y - 9, wd, 18, 9); ctx.fillStyle = 'rgba(0,0,0,.8)'; ctx.fill(); ctx.lineWidth = 1; ctx.strokeStyle = p.lb; ctx.stroke();
      ctx.fillStyle = p.tx; ctx.fillText(nm, t.x, y + .5);
    });
    ctx.restore();
  }
  function storyImage(states, on) {
    var fonts = document.fonts && document.fonts.load ? Promise.all(['900 80px Heebo', '800 40px Heebo', '700 34px Heebo'].map(function (f) { return document.fonts.load(f); })).catch(function () {}) : Promise.resolve();
    return fonts.then(function () {
      var cv = document.createElement('canvas'); cv.width = 1080; cv.height = 1920;
      var ctx = cv.getContext('2d'); if (!ctx) return null;
      var bg = ctx.createRadialGradient(540, 120, 40, 540, 300, 1300); bg.addColorStop(0, '#3a3016'); bg.addColorStop(.45, '#16171d'); bg.addColorStop(1, '#0d0e12');
      ctx.fillStyle = bg; ctx.fillRect(0, 0, 1080, 1920);
      ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic'; try { ctx.direction = 'rtl'; } catch (e) {}
      ctx.font = '700 34px Heebo, Arial, sans-serif'; var brand = 'אביב מלכה · מועדון האיקומרס', bw = ctx.measureText(brand).width + 56;
      rr(ctx, 540 - bw / 2, 118, bw, 64, 32); ctx.fillStyle = 'rgba(255,255,255,.08)'; ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,.82)'; ctx.fillText(brand, 540, 162);
      ctx.font = '900 82px Heebo, Arial, sans-serif'; ctx.fillStyle = '#fff'; ctx.fillText('כמה החנות שלך מוכנה', 540, 330);
      ctx.fillStyle = '#FFD84D'; ctx.fillText('לבלאק פריידיי?', 540, 428);
      drawIso(ctx, states, 540 - 170 * 2.9, 500, 2.9);
      ctx.font = '900 230px Heebo, Arial, sans-serif'; ctx.shadowColor = 'rgba(242,183,5,.55)'; ctx.shadowBlur = 50; ctx.fillStyle = '#FFD84D';
      try { ctx.direction = 'ltr'; } catch (e) {} ctx.fillText(on + '/9', 540, 1500); ctx.shadowBlur = 0; try { ctx.direction = 'rtl'; } catch (e) {}
      ctx.font = '800 66px Heebo, Arial, sans-serif'; ctx.fillStyle = '#fff'; ctx.fillText('מנועים דולקים', 540, 1600);
      ctx.font = '800 44px Heebo, Arial, sans-serif'; var cta = 'בדקו את החנות שלכם ←', cw = ctx.measureText(cta).width + 90;
      var bt = ctx.createLinearGradient(0, 1680, 0, 1790); bt.addColorStop(0, '#FFD84D'); bt.addColorStop(.5, '#F2B705'); bt.addColorStop(1, '#E08A00');
      rr(ctx, 540 - cw / 2, 1682, cw, 104, 30); ctx.fillStyle = bt; ctx.fill(); ctx.fillStyle = '#1a1205'; ctx.fillText(cta, 540, 1750);
      ctx.font = '600 34px Heebo, Arial, sans-serif'; ctx.fillStyle = 'rgba(255,255,255,.6)'; try { ctx.direction = 'ltr'; } catch (e) {} ctx.fillText('avivmalka.com/bf-check', 540, 1858);
      return new Promise(function (res) { cv.toBlob(function (b) { res(b); }, 'image/png'); });
    }).catch(function () { return null; });
  }
  function share(on) {
    BFX.track('BFShare', {on_count: on});
    var go = function (blob) {
      if (!blob) return;
      var file = null; try { file = new File([blob], 'bf-check.png', {type: 'image/png'}); } catch (e) {}
      var data = {files: file ? [file] : [], title: 'בדיקת מוכנות לבלאק פריידיי', text: 'בדקתי כמה החנות שלי מוכנה לבלאק פריידיי: ' + on + '/9 מנועים דולקים. לבדיקה: ' + PAGE_URL};
      if (file && navigator.canShare && navigator.canShare({files: [file]})) { navigator.share(data).catch(function () {}); return; }
      var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'bf-check.png'; document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); }, 500);
    };
    if (shareBlob) go(shareBlob); else storyImage(EK.map(function (k) { return engines(S.a)[k]; }), on).then(function (b) { shareBlob = b; go(b); });
  }

  /* ---------- privacy modal ---------- */
  var mod = app.querySelector('#bfPriv'), mLast;
  app.addEventListener('click', function (ev) { var b = ev.target.closest && ev.target.closest('[data-open]'); if (b) { mLast = b; mod.hidden = false; mod.querySelector('[data-close]').focus(); } });
  function closeMod() { mod.hidden = true; if (mLast) mLast.focus(); }
  mod.addEventListener('click', function (ev) { if (ev.target === mod || ev.target.hasAttribute('data-close')) closeMod(); });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') { if (!mod.hidden) closeMod(); else closeSheet(); } });

  /* browser back between questions */
  window.addEventListener('popstate', function (ev) {
    if (!sh.hidden) { closeSheet(); }
    var s = ev.state && ev.state.bf;
    if (app.classList.contains('dark')) return;
    if (typeof s === 'number' && s >= 0 && s < N) question(s, true, false);
    else if (s == null) intro();
  });

  /* ---------- start ---------- */
  BFX.captureUtm();
  BFX.fb('PageView');
  var done = load('bf_res');
  if (done && done.a && !done.done) { result(false); }
  else intro();
})();
