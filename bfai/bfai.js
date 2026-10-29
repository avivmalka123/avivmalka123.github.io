/* Black Friday AI campaign builder (source bfai/src/bfai.html, built by bfai/build.py) */
(function(){
 var root=document.getElementById('pf-root'); if(!root){root=document.createElement('div');root.id='pf-root';document.body.appendChild(root);}
 try{ document.body.style.background='#FAF8F3'; var p=root.parentElement; while(p && p!==document.body){ p.style.backgroundColor='#FAF8F3'; p.style.backgroundImage='none'; if(/section|container|row|col|sizer|block/.test(p.className||'')){ p.style.padding='0'; p.style.margin='0'; p.style.maxWidth='none'; } p=p.parentElement; } document.querySelectorAll('header.header, footer.footer, .announcement').forEach(function(el){ el.style.display='none'; }); }catch(e){}
 root.innerHTML="<link href=\"https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600;700;800;900&display=swap\" rel=\"stylesheet\"><style>#pf-root .pf{--bg:#FAF8F3;--line:#E8E3D8;--ink:#121318;--mut:#5F6170;--gold:#F2B705;--gold2:#E08A00;--soft:#FFF6DA;--y:#FFD84D;--dk:#121318;font-family:Heebo,Arial,sans-serif;color:var(--ink);background:var(--bg);min-height:100vh;direction:rtl;text-align:right;-webkit-font-smoothing:antialiased;overflow-x:hidden;overflow-x:clip;font-size:16px;line-height:1.45;-webkit-tap-highlight-color:transparent}#pf-root .pf *{box-sizing:border-box}#pf-root .pf.dark{background:#121318 radial-gradient(130% 560px at 50% 0%,#2a2414 0%,#121318 70%) no-repeat;color:#fff}#pf-root .pf .tb{background:var(--dk);color:#fff;font-weight:800;font-size:13px;text-align:center;padding:12px 12px 10px;position:sticky;top:0;z-index:20;height:42px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}#pf-root .pf.dark .tb{background:#000}#pf-root .pf .tb b{color:var(--y);font-weight:800}#pf-root .pf .wrap{max-width:460px;margin:0 auto;padding:18px 20px 26px;display:flex;flex-direction:column;gap:12px;min-height:calc(100vh - 42px)}#pf-root .pf .wrap.wide{max-width:880px}#pf-root .pf .scr{display:flex;flex-direction:column;gap:12px;flex:1;animation:aiIn .32s ease both;min-width:0}#pf-root .pf .scr.back{animation-name:aiBack}@keyframes aiIn{from{opacity:0;transform:translateX(-18px)}to{opacity:1;transform:none}}@keyframes aiBack{from{opacity:0;transform:translateX(18px)}to{opacity:1;transform:none}}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf h4,#pf-root .pf p{margin:0;color:inherit;letter-spacing:normal;text-transform:none}#pf-root .pf h1{font-size:30px;font-weight:900;line-height:1.18}#pf-root .pf h1 em{font-style:normal;color:var(--gold2)}#pf-root .pf.dark h1 em{color:var(--y)}#pf-root .pf h2{margin-top:4px;font-size:24px;font-weight:900;line-height:1.25}#pf-root .pf .hint{color:var(--mut);font-size:14.5px;margin-top:-4px}#pf-root .pf.dark .hint{color:#ffffffa8}#pf-root .pf .prog{display:flex;align-items:center;gap:10px}#pf-root .pf .prog .b{flex:1;height:7px;background:#ECE7DA;border-radius:7px;overflow:hidden}#pf-root .pf .prog .b i{display:block;height:100%;background:linear-gradient(90deg,var(--gold2),var(--gold));border-radius:7px;transition:width .35s ease}#pf-root .pf .prog span{font-size:12.5px;font-weight:800;color:var(--mut);white-space:nowrap;direction:ltr}#pf-root .pf .bk{appearance:none;-webkit-appearance:none;border:0;background:#EFEADF;color:var(--ink);font:inherit;font-size:13px;font-weight:800;padding:6px 11px;border-radius:99px;cursor:pointer;white-space:nowrap}#pf-root .pf button:focus-visible,#pf-root .pf a:focus-visible,#pf-root .pf input:focus-visible{outline:3px solid var(--gold2);outline-offset:2px}#pf-root .pf .opts{display:flex;flex-direction:column;gap:10px}#pf-root .pf .opt{appearance:none;-webkit-appearance:none;display:flex;align-items:center;gap:12px;width:100%;padding:14px;border:1.5px solid var(--line);border-radius:14px;background:#fff;color:var(--ink);font:inherit;font-weight:700;font-size:16px;line-height:1.3;text-align:right;cursor:pointer;transition:border-color .15s,background .15s,transform .1s}#pf-root .pf .opt:active{transform:scale(.985)}#pf-root .pf .opt .e{font-size:20px;flex:none;width:26px;text-align:center}#pf-root .pf .opt .t{flex:1}#pf-root .pf .opt .t small{display:block;font-weight:500;font-size:13px;color:var(--mut);margin-top:2px}#pf-root .pf .opt.on{border-color:var(--gold2);background:var(--soft)}#pf-root .pf .opt .ck{flex:none;width:22px;height:22px;border-radius:6px;border:2px solid #D8D1C2;display:grid;place-items:center;font-size:14px;color:#1a1205}#pf-root .pf .opt.on .ck{background:var(--gold);border-color:var(--gold2)}#pf-root .pf .dgrid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}#pf-root .pf .dgrid .opt{justify-content:center;font-size:19px;font-weight:900;padding:18px 2px;direction:ltr}#pf-root .pf .btn{appearance:none;-webkit-appearance:none;border:0;display:block;width:100%;margin-top:auto;background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));color:#1a1205;font:inherit;font-weight:900;font-size:18px;text-align:center;padding:16px;border-radius:16px;box-shadow:0 14px 30px -10px rgba(224,138,0,.6);cursor:pointer;text-decoration:none;line-height:1.25}#pf-root .pf .btn[disabled]{opacity:.45;cursor:default;box-shadow:none}#pf-root .pf .btn.sm{font-size:16px;padding:13px;margin:0}#pf-root .pf .btn.out{background:none;border:1.5px solid #ffffff55;color:#fff;box-shadow:none}#pf-root .pf .spacer{flex:1;min-height:6px}#pf-root .pf .chip{display:inline-flex;align-items:center;gap:6px;background:#121318;color:var(--y);font-weight:800;font-size:13px;padding:6px 12px;border-radius:99px;align-self:flex-start}#pf-root .pf.dark .chip{background:#ffffff14}#pf-root .pf .note{font-size:12.5px;color:var(--mut);text-align:center}#pf-root .pf.dark .note{color:#ffffff80}#pf-root .pf .hero{border-radius:22px;background:linear-gradient(160deg,#1b1c24,#2c2410);padding:18px 14px 16px;position:relative;overflow:hidden;color:#fff;display:grid;gap:12px;justify-items:center;flex:none}#pf-root .pf .hero .bot{width:86px;height:86px;border-radius:26px;background:linear-gradient(160deg,#FFE680,#F2B705 55%,#E08A00);display:grid;place-items:center;box-shadow:0 0 40px rgba(242,183,5,.45);animation:aiFloat 3.2s ease-in-out infinite}#pf-root .pf .hero .bot svg{width:58px;height:58px}#pf-root .pf .hero .flo{display:flex;flex-wrap:wrap;gap:7px;justify-content:center}#pf-root .pf .hero .flo span{background:#ffffff12;border:1px solid #ffffff26;font-weight:800;font-size:12.5px;padding:5px 10px;border-radius:99px;animation:aiPop .5s ease both}#pf-root .pf .hero .flo span b{color:var(--y)}@keyframes aiFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}@keyframes aiPop{from{opacity:0;transform:translateY(8px) scale(.9)}to{opacity:1;transform:none}}#pf-root .pf .gets{list-style:none;padding:0;margin:0;display:grid;gap:8px}#pf-root .pf .gets li{display:flex;gap:10px;align-items:flex-start;background:#fff;border:1.5px solid var(--line);border-radius:14px;padding:10px 12px;font-weight:700;font-size:15px}#pf-root .pf .gets li span{flex:none}#pf-root .pf .fld{display:grid;gap:4px}#pf-root .pf .vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}#pf-root .pf input.in{appearance:none;-webkit-appearance:none;width:100%;min-width:0;border:2px solid var(--line);border-radius:14px;padding:14px;background:#fff;color:var(--ink);font:inherit;font-size:16px;outline:0;transition:border-color .15s}#pf-root .pf input.in:focus{border-color:var(--gold2)}#pf-root .pf input.in::placeholder{color:#8a8c98}#pf-root .pf .fld.bad input.in,#pf-root .pf input.in.bad{border-color:#D64545}#pf-root .pf .em{font-size:12.5px;color:#C43B3B;font-weight:600}#pf-root .pf .em:empty{display:none}#pf-root .pf .chips{display:flex;flex-wrap:wrap;gap:8px}#pf-root .pf .chp{appearance:none;-webkit-appearance:none;border:1.5px solid var(--line);background:#fff;border-radius:99px;padding:10px 14px;font:inherit;font-weight:700;font-size:15px;color:var(--ink);cursor:pointer;line-height:1.2}#pf-root .pf .chp.on{border-color:var(--gold2);background:var(--soft)}#pf-root .pf .lab{font-weight:800;font-size:15px;margin-top:6px}#pf-root .pf .prod{background:#fff;border:1.5px solid var(--line);border-radius:16px;padding:12px;display:grid;gap:8px;position:relative}#pf-root .pf .prod .n{font-weight:800;font-size:13px;color:var(--mut)}#pf-root .pf .prod .row{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;align-items:center}#pf-root .pf .prod .rm{appearance:none;-webkit-appearance:none;position:absolute;left:8px;top:6px;border:0;background:none;font-size:22px;line-height:1;color:var(--mut);cursor:pointer;padding:4px 8px}#pf-root .pf .inw{position:relative;min-width:0}#pf-root .pf .inw i{position:absolute;left:12px;top:50%;transform:translateY(-50%);font-style:normal;color:var(--mut);font-weight:800;pointer-events:none}#pf-root .pf input.in.sm{padding:11px 12px}#pf-root .pf .seg{display:flex;background:#EFEADF;border-radius:10px;padding:3px;gap:3px;min-width:0}#pf-root .pf .seg button{appearance:none;-webkit-appearance:none;flex:1;border:0;background:none;font:inherit;font-size:13px;font-weight:800;padding:8px 2px;border-radius:8px;cursor:pointer;color:var(--mut);white-space:nowrap}#pf-root .pf .seg button[aria-pressed=true]{background:#fff;color:var(--ink);box-shadow:0 1px 3px rgba(0,0,0,.12)}#pf-root .pf .add{appearance:none;-webkit-appearance:none;border:1.5px dashed #CFC6B3;background:none;border-radius:14px;padding:12px;font:inherit;font-weight:800;color:var(--ink);cursor:pointer}#pf-root .pf .chk{font-size:13px;color:var(--mut);display:flex;gap:10px;align-items:flex-start;cursor:pointer;line-height:1.45}#pf-root .pf .chk input{flex:none;width:20px;height:20px;margin:0;accent-color:var(--gold2);cursor:pointer}#pf-root .pf .legal{font-size:12px;color:var(--mut)}#pf-root .pf .lnk{appearance:none;-webkit-appearance:none;background:none;border:0;padding:0;font:inherit;color:inherit;text-decoration:underline;cursor:pointer}#pf-root .pf .hp{position:absolute!important;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}#pf-root .pf .lock{background:var(--dk);color:#fff;border-radius:22px;padding:14px;display:grid;gap:8px;position:relative;overflow:hidden;flex:none}#pf-root .pf .lock .bl{display:grid;gap:6px;filter:blur(4px);opacity:.75}#pf-root .pf .lock .bl div{background:#ffffff14;border-radius:10px;padding:8px 10px;font-weight:700;font-size:13px}#pf-root .pf .lock .t{font-weight:900;font-size:18px;line-height:1.3;text-align:center;position:absolute;inset:0;display:grid;place-items:center;padding:0 22px;background:radial-gradient(closest-side,#121318cc,transparent)}#pf-root .pf .gen{display:grid;gap:14px;justify-items:center;text-align:center;padding-top:10px}#pf-root .pf .gen .bot{width:96px;height:96px;border-radius:28px;background:linear-gradient(160deg,#FFE680,#F2B705 55%,#E08A00);display:grid;place-items:center;box-shadow:0 0 50px rgba(242,183,5,.5);animation:aiFloat 2.4s ease-in-out infinite}#pf-root .pf .gen .bot svg{width:64px;height:64px}#pf-root .pf .gen .clk{font-weight:800;color:#ffffff90;font-size:13px;direction:ltr}#pf-root .pf .steps{list-style:none;margin:0;padding:0;display:grid;gap:8px;width:100%;text-align:right}#pf-root .pf .steps li{display:flex;gap:12px;align-items:center;background:#ffffff0b;border:1px solid #ffffff18;border-radius:14px;padding:11px 12px;font-weight:700;font-size:15px;color:#ffffff70;transition:color .3s,border-color .3s}#pf-root .pf .steps li.run{color:#fff;border-color:#F2B70566}#pf-root .pf .steps li.done{color:#fff}#pf-root .pf .steps li.fail{color:#FFB4B4}#pf-root .pf .steps .ic{flex:none;width:22px;height:22px;display:grid;place-items:center;font-size:14px}#pf-root .pf .spin{width:18px;height:18px;border:2.5px solid #ffffff30;border-top-color:var(--y);border-radius:50%;animation:aiSpin .8s linear infinite}#pf-root .pf .dot{width:9px;height:9px;border-radius:50%;background:#ffffff40}#pf-root .pf .ok{width:22px;height:22px;border-radius:50%;background:var(--gold);color:#1a1205;display:grid;place-items:center;font-weight:900;font-size:13px}@keyframes aiSpin{to{transform:rotate(360deg)}}#pf-root .pf .gbar{width:100%;height:8px;border-radius:8px;background:#ffffff18;overflow:hidden}#pf-root .pf .gbar i{display:block;height:100%;width:0;background:linear-gradient(90deg,var(--gold2),var(--y));transition:width .6s ease}#pf-root .pf .nav{position:sticky;top:42px;z-index:15;margin:0 -20px;padding:8px 20px;background:#121318ee;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);display:flex;gap:6px;overflow-x:auto;scrollbar-width:none;border-bottom:1px solid #ffffff14}#pf-root .pf .nav::-webkit-scrollbar{display:none}#pf-root .pf .nav button{appearance:none;-webkit-appearance:none;flex:none;border:1px solid #ffffff26;background:#ffffff0d;color:#ffffffc0;font:inherit;font-size:13px;font-weight:800;padding:6px 11px;border-radius:99px;cursor:pointer;white-space:nowrap}#pf-root .pf .nav button.on{background:var(--y);color:#1a1205;border-color:var(--y)}#pf-root .pf .sec{scroll-margin-top:100px;display:grid;gap:12px;padding-top:14px;min-width:0}#pf-root .pf .sec>h3{font-size:23px;font-weight:900;line-height:1.25;display:flex;align-items:center;gap:8px}#pf-root .pf .sec>h3 small{font-size:13px;font-weight:800;color:#1a1205;background:var(--y);padding:2px 9px;border-radius:99px}#pf-root .pf .sub{color:#ffffffa8;font-size:14px;margin-top:-6px}#pf-root .pf .card{background:#ffffff0d;border:1px solid #ffffff1c;border-radius:20px;padding:16px;min-width:0;overflow-wrap:anywhere}#pf-root .pf .card h4{font-size:17px;font-weight:900;margin-bottom:8px;line-height:1.3}#pf-root .pf .grid2{display:grid;gap:12px;grid-template-columns:minmax(0,1fr)}@media (min-width:760px){#pf-root .pf .grid2{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}}#pf-root .pf .pre{white-space:pre-wrap;overflow-wrap:anywhere}#pf-root .pf .cp{appearance:none;-webkit-appearance:none;border:1px solid #ffffff30;background:#ffffff10;color:#fff;font:inherit;font-size:13px;font-weight:800;padding:7px 12px;border-radius:10px;cursor:pointer;white-space:nowrap}#pf-root .pf .cp.done{background:var(--y);color:#1a1205;border-color:var(--y)}#pf-root .pf .ch{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:10px}#pf-root .pf .tag{display:inline-block;font-size:12px;font-weight:800;padding:2px 9px;border-radius:99px;background:#ffffff14;color:#ffffffc8;white-space:nowrap}#pf-root .pf .tag.g{background:#F2B70526;color:var(--y)}#pf-root .pf .warn{background:#E08A001f;border:1px solid #E08A0055;border-radius:14px;padding:10px 12px;font-size:13.5px;color:#FFD9A0}#pf-root .pf .hd1{display:grid;gap:10px}#pf-root .pf .offer{display:grid;gap:8px}#pf-root .pf .offer div{background:linear-gradient(160deg,#2c2410,#1b1c24);border:1px solid #F2B70544;border-radius:16px;padding:12px 14px}#pf-root .pf .offer b{display:block;color:var(--y);font-size:12.5px;font-weight:800;margin-bottom:2px}#pf-root .pf .tips{margin:0;padding:0 18px 0 0;display:grid;gap:6px;font-size:14.5px;color:#ffffffd0}#pf-root .pf .cal{list-style:none;margin:0;padding:0;display:grid;gap:0;position:relative}#pf-root .pf .cal li{display:grid;grid-template-columns:64px minmax(0,1fr);gap:12px;position:relative;padding-bottom:14px}#pf-root .pf .cal li:before{content:\"\";position:absolute;right:31px;top:46px;bottom:0;width:2px;background:#ffffff18}#pf-root .pf .cal li:last-child:before{display:none}#pf-root .pf .cal .dt{background:#ffffff12;border:1px solid #ffffff22;border-radius:14px;text-align:center;padding:7px 2px;height:max-content}#pf-root .pf .cal .dt b{display:block;font-size:16px;font-weight:900;direction:ltr}#pf-root .pf .cal .dt span{display:block;font-size:11px;font-weight:700;color:#ffffffa0}#pf-root .pf .cal li.hot .dt{background:var(--y);border-color:var(--y);color:#1a1205}#pf-root .pf .cal li.hot .dt span{color:#1a1205b0}#pf-root .pf .cal .ph{font-weight:900;font-size:16px}#pf-root .pf .cal .nt{font-size:12.5px;color:var(--y);font-weight:700}#pf-root .pf .cal ul{list-style:none;margin:6px 0 0;padding:0;display:grid;gap:6px}#pf-root .pf .cal ul li{display:flex;gap:8px;align-items:flex-start;padding:0;grid-template-columns:none;font-size:14px;color:#ffffffd8}#pf-root .pf .cal ul li:before{display:none}#pf-root .pf .cal a{color:inherit;text-decoration:underline;text-decoration-color:#ffffff50;text-underline-offset:3px;cursor:pointer}#pf-root .pf .chn{flex:none;display:inline-block;font-size:11.5px;font-weight:800;padding:2px 8px;border-radius:99px;margin-top:1px}#pf-root .pf .chn.email{background:#3b82f633;color:#a9c8ff}#pf-root .pf .chn.sms{background:#a855f733;color:#dcbcff}#pf-root .pf .chn.whatsapp{background:#25D36633;color:#86e8ad}#pf-root .pf .chn.ads{background:#F2B70533;color:var(--y)}#pf-root .pf .chn.site,#pf-root .pf .chn.auto{background:#ffffff1c;color:#fff}#pf-root .pf .miss{opacity:.55}#pf-root .pf .adw{display:grid;gap:8px;min-width:0}#pf-root .pf .adh{display:flex;align-items:center;justify-content:space-between;gap:8px}#pf-root .pf .adh .seg{background:#ffffff14;flex:none}#pf-root .pf .adh .seg button{color:#ffffffa8;padding:5px 10px;font-size:12px}#pf-root .pf .adh .seg button[aria-pressed=true]{background:#fff;color:#121318}#pf-root .pf .ad{background:#fff;color:#111;border-radius:14px;overflow:hidden;font-size:13.5px;box-shadow:0 18px 40px -22px #000}#pf-root .pf .ad .top{display:flex;align-items:center;gap:8px;padding:10px 12px}#pf-root .pf .av{flex:none;width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#FFE680,#F2B705 60%,#E08A00);display:grid;place-items:center;font-weight:900;color:#1a1205;font-size:15px;box-shadow:0 0 0 2px #fff,0 0 0 3.5px #E08A00}#pf-root .pf .ad .nm{font-weight:800;font-size:13.5px;line-height:1.2}#pf-root .pf .ad .nm small{display:block;font-weight:500;font-size:11.5px;color:#737373}#pf-root .pf .ad .more{margin-right:auto;font-weight:900;color:#555;letter-spacing:1px}#pf-root .pf .vis{aspect-ratio:1/1;position:relative;display:grid;place-items:center;text-align:center;padding:22px 18px;color:#fff;overflow:hidden}#pf-root .pf .vis:before{content:\"\";position:absolute;width:70%;height:70%;border-radius:50%;background:radial-gradient(closest-side,rgba(255,216,77,.35),transparent);top:-18%;left:-12%}#pf-root .pf .vis .in2{position:relative;display:grid;gap:10px;justify-items:center;max-width:100%}#pf-root .pf .vis .ov{font-size:clamp(20px,6.4vw,30px);font-weight:900;line-height:1.12;text-shadow:0 2px 18px rgba(0,0,0,.35);overflow-wrap:anywhere}#pf-root .pf .pt{display:inline-flex;align-items:center;gap:8px;background:#ffffff1c;border:1px solid #ffffff40;border-radius:12px;padding:7px 12px;font-weight:800;font-size:13.5px;max-width:100%;overflow-wrap:anywhere;color:#fff}#pf-root .pf .pt i{font-style:normal;width:22px;height:22px;border-radius:7px;background:var(--y);color:#1a1205;display:grid;place-items:center;font-size:12px;font-weight:900;flex:none}#pf-root .pf .vis .rb,#pf-root .pf .srb{position:absolute;top:12px;left:12px;background:#000;color:var(--y);font-weight:900;font-size:11px;letter-spacing:.5px;padding:4px 8px;border-radius:6px;direction:ltr}#pf-root .pf .srb{position:static;display:inline-block;margin-bottom:10px}#pf-root .pf .dsc{position:absolute;top:12px;right:12px;background:var(--y);color:#1a1205;font-weight:900;font-size:15px;border-radius:10px;padding:4px 9px;direction:ltr}#pf-root .pf .ad .cta{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:10px 12px;background:#f0f2f5}#pf-root .pf .ad .cta b{font-size:13.5px;line-height:1.25;min-width:0;overflow-wrap:anywhere}#pf-root .pf .ad .cta span{flex:none;background:#e2e5e9;border-radius:8px;padding:7px 12px;font-weight:800;font-size:13px;white-space:nowrap}#pf-root .pf .ad .ics{display:flex;gap:14px;padding:8px 12px 0;color:#222}#pf-root .pf .ad .ics svg{width:22px;height:22px}#pf-root .pf .ad .tx{padding:6px 12px 12px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere}#pf-root .pf .ad .tx b{font-weight:800}#pf-root .pf .story{aspect-ratio:9/16;width:100%;max-width:290px;margin:0 auto;border-radius:18px;position:relative;overflow:hidden;color:#fff;display:flex;flex-direction:column;box-shadow:0 18px 40px -22px #000}#pf-root .pf .story .bars{display:flex;gap:4px;padding:10px 10px 0}#pf-root .pf .story .bars i{flex:1;height:2.5px;border-radius:2px;background:#ffffff55}#pf-root .pf .story .bars i:first-child{background:#fff}#pf-root .pf .story .top{display:flex;align-items:center;gap:8px;padding:8px 10px;font-size:12.5px;font-weight:800}#pf-root .pf .story .top small{font-weight:500;opacity:.8}#pf-root .pf .story .mid{flex:1;display:grid;place-items:center;padding:12px 16px;text-align:center;position:relative}#pf-root .pf .story .mid .ov{font-size:27px;font-weight:900;line-height:1.12;overflow-wrap:anywhere}#pf-root .pf .story .mid .pt{margin-top:12px}#pf-root .pf .story .dsc{top:4px}#pf-root .pf .story .low{padding:12px 14px 16px;display:grid;gap:10px;justify-items:center;background:linear-gradient(0deg,#000000b0,transparent)}#pf-root .pf .story .low p{font-size:13px;line-height:1.4;text-align:center;max-height:5.6em;overflow:hidden;white-space:pre-wrap}#pf-root .pf .story .low span{background:#fff;color:#111;font-weight:800;font-size:13px;padding:8px 16px;border-radius:99px}#pf-root .pf .ugc .bl{display:grid;gap:8px}#pf-root .pf .ugc .bl div{display:grid;grid-template-columns:64px minmax(0,1fr);gap:10px;align-items:start}#pf-root .pf .ugc .bl b{font-size:12px;font-weight:800;color:#1a1205;background:var(--y);border-radius:8px;padding:3px 6px;text-align:center}#pf-root .pf .ugc .bl b.x{background:#ffffff1c;color:#fff}#pf-root .pf .ugc ul{margin:8px 0 0;padding:0 18px 0 0;font-size:13.5px;color:#ffffffb8;display:grid;gap:3px}#pf-root .pf .meta{font-size:13px;color:#ffffffa0;margin:-4px 0 10px}#pf-root .pf .costs{display:grid;gap:8px}#pf-root .pf .costs .r{display:grid;grid-template-columns:minmax(0,1fr) 112px;gap:10px;align-items:center;font-size:14px}#pf-root .pf .costs .r small{display:block;color:#ffffff88;font-size:12px}#pf-root .pf .costs input.in{background:#ffffff12;border-color:#ffffff30;color:#fff;padding:9px 10px 9px 28px;font-size:16px;text-align:left;direction:ltr}#pf-root .pf .costs input.in::placeholder{color:#ffffff60}#pf-root .pf .tgl{display:flex;gap:10px;align-items:center;font-size:14px;cursor:pointer}#pf-root .pf .tgl input{width:20px;height:20px;accent-color:var(--gold);flex:none;margin:0}#pf-root .pf .bt{width:100%;border-collapse:collapse;font-size:14px;margin-top:6px}#pf-root .pf .bt td{padding:6px 0;border-bottom:1px solid #ffffff14;vertical-align:top}#pf-root .pf .bt td:last-child{text-align:left;font-weight:800;direction:ltr;white-space:nowrap;padding-right:10px}#pf-root .pf .bt tr.big td{font-size:16px;font-weight:900;color:var(--y);border-bottom:0}#pf-root .pf .vd{display:inline-block;font-weight:900;font-size:14px;padding:4px 12px;border-radius:99px}#pf-root .pf .vd.good{background:#16a34a33;color:#7ee3a6}#pf-root .pf .vd.mid{background:#E08A0033;color:#FFCB5C}#pf-root .pf .vd.bad{background:#dc262633;color:#ffb0b0}#pf-root .pf .vd.unk{background:#ffffff1c;color:#fff}#pf-root .pf .its{margin:0;padding:0 18px 0 0;font-size:14px;color:#ffffffd0}#pf-root .pf .mail .sbj{font-weight:900;font-size:16px}#pf-root .pf .mail .pv{font-size:13px;color:#ffffff90;margin:2px 0 10px}#pf-root .pf .mail .bd{background:#fff;color:#1d1d1f;border-radius:12px;padding:14px;font-size:14.5px;line-height:1.55}#pf-root .pf .sms .ph{background:#1c1c1e;border-radius:18px;padding:14px 12px}#pf-root .pf .sms .bub{background:#3a3a3c;color:#fff;border-radius:16px 16px 16px 4px;padding:9px 12px;font-size:14.5px;line-height:1.45;max-width:92%;white-space:pre-wrap;overflow-wrap:anywhere}#pf-root .pf .cnt{font-size:12.5px;font-weight:800;color:#7ee3a6;direction:rtl}#pf-root .pf .cnt.over{color:#ffb0b0}#pf-root .pf .wab{background:#EFEAE2;border-radius:16px;overflow:hidden;border:1px solid #E2DCD0;color:#111}#pf-root .pf .wab .bar{background:#075E54;color:#fff;font-size:13px;font-weight:700;padding:8px 12px;display:flex;align-items:center;gap:8px}#pf-root .pf .wab .bar i{width:24px;height:24px;border-radius:50%;background:#ffffff30;display:grid;place-items:center;font-style:normal;font-size:12px;font-weight:900}#pf-root .pf .wab .msgs{padding:12px 12px 14px}#pf-root .pf .wab .bub{position:relative;background:#fff;border-radius:0 12px 12px 12px;padding:8px 10px 18px;font-size:14.5px;line-height:1.45;max-width:92%;box-shadow:0 1px 1px rgba(0,0,0,.08);white-space:pre-wrap;overflow-wrap:anywhere}#pf-root .pf .wab .bub small{position:absolute;bottom:3px;left:8px;font-size:11px;color:#8a8c98}#pf-root .pf .auto dl{display:grid;grid-template-columns:max-content minmax(0,1fr);gap:5px 12px;margin:0 0 10px;font-size:14px}#pf-root .pf .auto dt{color:#ffffff90;font-weight:700}#pf-root .pf .auto dd{margin:0}#pf-root .pf .auto .cp2{background:#ffffff10;border-radius:12px;padding:10px 12px;font-size:14px}#pf-root .pf .calc{display:grid;gap:10px}#pf-root .pf .calc .r{display:grid;grid-template-columns:minmax(0,1fr) 104px;gap:10px;align-items:center;font-size:14px}#pf-root .pf .calc .r small{display:block;font-size:12px;color:#ffffff80}#pf-root .pf .calc .r .as{color:var(--y)}#pf-root .pf .calc input.in{background:#ffffff12;border-color:#ffffff30;color:#fff;padding:9px 10px;font-size:16px;text-align:left;direction:ltr}#pf-root .pf .calc .out{background:linear-gradient(160deg,#2c2410,#1b1c24);border:1px solid #F2B70555;border-radius:18px;padding:14px;display:grid;gap:6px}#pf-root .pf .calc .out .l{display:flex;justify-content:space-between;gap:10px;font-size:14px}#pf-root .pf .calc .out .l b{direction:ltr;white-space:nowrap}#pf-root .pf .calc .out .l small{display:block;color:#ffffff80;font-size:12px}#pf-root .pf .calc .out .tot{font-size:20px;font-weight:900;color:var(--y);border-top:1px solid #ffffff22;padding-top:8px;margin-top:4px}#pf-root .pf .calc .lbl{font-weight:900;font-size:13.5px;background:#fff;color:#121318;border-radius:10px;padding:8px 12px;text-align:center}#pf-root .pf .ping{background:#fff;color:var(--ink);border-radius:20px;padding:18px 16px;display:grid;gap:10px;box-shadow:0 20px 50px -20px rgba(242,183,5,.45)}#pf-root .pf .ping .k{justify-self:start;font-size:11.5px;font-weight:800;color:var(--gold2);background:var(--soft);padding:3px 9px;border-radius:99px}#pf-root .pf .ping .h{font-weight:900;font-size:19px;line-height:1.3}#pf-root .pf .ping .s{font-size:14px;color:var(--mut)}#pf-root .pf .ping .btn2{appearance:none;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;gap:8px;width:100%;border:1.5px solid #121318;background:#fff;color:#121318;font:inherit;font-weight:900;font-size:16px;padding:13px;border-radius:16px;cursor:pointer;text-decoration:none;text-align:center}#pf-root .pf .ping .btn2.hi{border:0;background:linear-gradient(180deg,#FFD84D,var(--gold) 50%,var(--gold2));color:#1a1205;box-shadow:0 14px 30px -10px rgba(224,138,0,.6)}#pf-root .pf .ping .btn2{position:relative}#pf-root .pf .ping .yp{position:absolute;top:-10px;left:14px;font-size:11px;font-weight:800;background:#121318;color:var(--y);border-radius:99px;padding:3px 9px;white-space:nowrap}#pf-root .pf .ping .ok2{background:var(--soft);border-radius:12px;padding:10px 12px;font-weight:800;font-size:14px}#pf-root .pf .ctas{display:grid;gap:10px}#pf-root .pf .cta2{display:flex;align-items:center;justify-content:center;gap:8px;text-decoration:none;font-weight:800;font-size:16px;padding:14px;border-radius:16px;text-align:center}#pf-root .pf .cta2.tr{border:1.5px solid var(--y);color:var(--y)}#pf-root .pf .cta2.wa{background:#1FAF55;color:#fff}#pf-root .pf .redo{appearance:none;-webkit-appearance:none;background:none;border:0;color:#ffffff80;font:inherit;font-size:13px;text-decoration:underline;cursor:pointer;justify-self:center}#pf-root .pf .fail{display:grid;gap:8px;justify-items:start}#pf-root .pf .foot{text-align:center;font-size:12.5px;color:#8a8c98;padding:18px 16px 28px}#pf-root .pf .foot .lnk{margin-inline:6px}#pf-root .pf.dark .foot{color:#ffffff70}#pf-root .pf .mod{position:fixed;inset:0;background:rgba(18,19,24,.6);display:grid;place-items:center;padding:16px;z-index:99999}#pf-root .pf .mod[hidden]{display:none}#pf-root .pf .mod>div{background:var(--bg);color:var(--ink);border-radius:22px;max-width:560px;width:100%;max-height:85vh;overflow:auto;padding:22px;font-size:15px}#pf-root .pf .mod h3{font-size:20px;font-weight:900;margin-bottom:10px}#pf-root .pf .mod h4{margin:14px 0 4px;font-size:15px;font-weight:800}#pf-root .pf .mod p{color:var(--mut)}#pf-root .pf .mod .x{appearance:none;-webkit-appearance:none;border:0;background:none;cursor:pointer;font-size:28px;line-height:1;color:var(--mut);float:left;padding:0}@media (min-width:760px){#pf-root .pf .wrap{padding-top:28px}#pf-root .pf h1{font-size:36px}#pf-root .pf .nav{margin:0;border-radius:99px;top:50px}}@media (prefers-reduced-motion:reduce){#pf-root .pf .scr,#pf-root .pf .hero .bot,#pf-root .pf .gen .bot,#pf-root .pf .hero .flo span{animation:none}#pf-root .pf .spin{animation-duration:2s}#pf-root .pf .prog .b i,#pf-root .pf .gbar i{transition:none}}#pf-root .pf h1,#pf-root .pf h2,#pf-root .pf h3,#pf-root .pf h4,#pf-root .pf p,#pf-root .pf a,#pf-root .pf button,#pf-root .pf span,#pf-root .pf li,#pf-root .pf label,#pf-root .pf input,#pf-root .pf small,#pf-root .pf b,#pf-root .pf strong{font-family:Heebo,Arial,sans-serif;letter-spacing:normal;text-transform:none}#pf-root .pf p{margin-bottom:0}#pf-root .pf ul,#pf-root .pf ol{margin-bottom:0}</style><div class=\"pf\" id=\"aiApp\">\n  <div class=\"tb\" id=\"aiTb\">🤖 עובד AI <b>לבלאק פריידיי</b></div>\n  <main class=\"wrap\" id=\"aiMain\"></main>\n  <footer class=\"foot\">© אביב מלכה · מועדון האיקומרס <button type=\"button\" class=\"lnk\" data-open=\"aiPriv\">מדיניות פרטיות</button></footer>\n\n  <div class=\"mod\" id=\"aiPriv\" hidden role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"aiPrivT\"><div>\n    <button class=\"x\" type=\"button\" data-close aria-label=\"סגירה\">×</button>\n    <h3 id=\"aiPrivT\">מדיניות פרטיות · עובד AI לבלאק פריידיי</h3>\n    <p>הדף מופעל על ידי אביב מלכה. כך אנחנו משתמשים בפרטים שתשאירו כאן:</p>\n    <h4>מה נאסף</h4><p>שם פרטי, טלפון נייד, אימייל אם מסרתם, פרטי החנות והמוצרים שהזנתם (כולל מחירים ועלויות), והתוכנית שנבנתה. בנוסף נשמרים נתוני מקור טכניים: מאיזו מודעה או קמפיין הגעתם (UTM) ולחיצות בדף.</p>\n    <h4>למה</h4><p>כדי לבנות ולהציג לכם את התוכנית, לחזור אליכם כשאתם מבקשים, ולמדוד אילו מודעות עובדות. דיוור שיווקי נשלח רק למי שסימן את תיבת ההסכמה, ואפשר להסיר בכל עת.</p>\n    <h4>עם מי משותף</h4><p>ספקי שירות שמפעילים את המערכת עבורנו: Cloudflare (אחסון), Google (מנוע ה-AI שכותב את התוכנית; מקבל רק את פרטי החנות והמוצרים, בלי שם, טלפון או אימייל), Make ו-2Chat (התראה פנימית בוואטסאפ), Meta (מדידת מודעות, עם נתונים מוצפנים ב-hash). לא נמכור את הפרטים לאף אחד.</p>\n    <h4>הקישור לתוכנית</h4><p>התוכנית נשמרת בקישור אישי שאי אפשר לנחש. מי שמקבל ממכם את הקישור רואה את התוכנית ואת פרטי החנות, אבל לא את השם, הטלפון או האימייל.</p>\n    <h4>כמה זמן</h4><p>עד 24 חודשים, או עד שתבקשו למחוק.</p>\n    <h4>הזכויות שלכם</h4><p>אפשר לבקש לעיין בפרטים, לתקן אותם או למחוק אותם בהודעת וואטסאפ למספר 052-5535537.</p>\n  </div></div>\n</div>";
})();
/* bfai: shared client helpers (copied from bfcheck/src/common.js, own storage keys so attribution is per funnel). No personal data ever goes into URLs. */
var AIX = (function () {
  var LOCAL = /^(localhost|127\.0\.0\.1)$/.test(location.hostname);
  var API = LOCAL && /[?&]api=([^&]+)/.test(location.search) ? decodeURIComponent(RegExp.$1) : 'https://ping-funnel.aviv1988.workers.dev';
  var PIXEL = '2210072352882860';

  function ls(k, v) { try { if (v === undefined) return localStorage.getItem(k); if (v === null) localStorage.removeItem(k); else localStorage.setItem(k, v); } catch (e) { return null; } }
  function rid(n) { var a = new Uint8Array(n || 12), s = ''; (window.crypto || window.msCrypto).getRandomValues(a); for (var i = 0; i < a.length; i++) s += (a[i] % 36).toString(36); return s; }
  function cookie(n) { var m = document.cookie.match('(?:^|; )' + n + '=([^;]*)'); return m ? decodeURIComponent(m[1]) : ''; }
  var vid = ls('bfai_vid'); if (!vid) { vid = 'v' + rid(14); ls('bfai_vid', vid); }

  /* attribution of this funnel: the latest ad click wins (kept 30 days) */
  var KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'campaign_id', 'adset_id', 'ad_id', 'fbclid'];
  function captureUtm() {
    var p = new URLSearchParams(location.search), got = {}, any = false;
    KEYS.forEach(function (k) { var v = p.get(k); if (v) { got[k] = v.slice(0, 200); any = true; } });
    var old = utm();
    if (any) { got.t = Date.now(); ls('bfai_utm', JSON.stringify(got)); old = got; }
    else if (old.t && Date.now() - old.t > 30 * 864e5) { ls('bfai_utm', null); old = {}; }
    if (got.fbclid) ls('bfai_fbc', 'fb.1.' + Date.now() + '.' + got.fbclid);
    return old;
  }
  function utm() { try { return JSON.parse(ls('bfai_utm') || '{}'); } catch (e) { return {}; } }
  function fbc() { return cookie('_fbc') || ls('bfai_fbc') || ''; }

  /* Meta pixel: events go only to this pixel (trackSingle), with the same event_id the server sends to CAPI */
  function pixel() {
    if (!window.fbq) {
      !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    }
    if (!window.__bfaiPixel) { window.fbq('init', PIXEL); window.__bfaiPixel = 1; }
  }
  var STD = {PageView: 1, Lead: 1};
  function fb(name, eventId, data) {
    try { pixel(); window.fbq(STD[name] ? 'trackSingle' : 'trackSingleCustom', PIXEL, name, data || {}, eventId ? {eventID: eventId} : undefined); } catch (e) {}
  }

  function api(path, body, ms, long) {   // long = generation call (no keepalive, long timeout)
    var ctl = window.AbortController ? new AbortController() : null, tm = ctl && setTimeout(function () { ctl.abort(); }, ms || 9000);
    return fetch(API + path, {method: body ? 'POST' : 'GET', headers: {'Content-Type': 'application/json'}, body: body ? JSON.stringify(body) : undefined, keepalive: !long && !!body && JSON.stringify(body).length < 6e4, signal: ctl ? ctl.signal : undefined})
      .then(function (r) { clearTimeout(tm); return r.json().catch(function () { return {}; }).then(function (j) { j._status = r.status; return j; }); }, function (e) { clearTimeout(tm); throw e; });
  }
  /* funnel event: pixel (browser) + server log (and CAPI once a token is set) with the same id; once per page per name unless repeat */
  var sent = {};
  function track(name, data, opt) {
    opt = opt || {};
    if (sent[name] && !opt.repeat) return; sent[name] = 1;
    var id = name.toLowerCase().slice(0, 12) + '_' + rid(14), d = data || {};
    d.content_name = 'bf-ai';
    fb(name, id, d);
    if (opt.server === false) return;
    api('/api/event', {name: name, event_id: id, vid: vid, utm: utm(), url: location.origin + location.pathname, fbc: fbc(), fbp: cookie('_fbp')}).catch(function () {});
  }

  return {API: API, ls: ls, rid: rid, vid: vid, captureUtm: captureUtm, utm: utm, fbc: fbc, cookie: cookie, fb: fb, api: api, track: track};
})();


(function () {
  var app = document.getElementById('aiApp'); if (!app) return;
  var main = app.querySelector('#aiMain'), tb = app.querySelector('#aiTb');
  var t0 = Date.now();
  var PING_URL = 'https://apps.shopify.com/ping-ai?utm_source=bfai';
  var TRAINING_URL = 'https://www.avivmalka.com/ping-training?utm_source=bfai&utm_medium=plan&utm_campaign=bf2026';
  var WA = '972525535537';
  var PARTS = ['ads', 'ugc', 'mail', 'msg'];
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var esc = function (s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]; }); };
  var fmt = function (n) { return Math.round(n).toLocaleString('he-IL'); };
  var nis = function (n) { return '₪' + fmt(n); };
  function load(k) { try { return JSON.parse(AIX.ls(k) || 'null'); } catch (e) { return null; } }
  function save(k, v) { AIX.ls(k, v == null ? null : JSON.stringify(v)); }
  var BOT = '<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="12" y="18" width="40" height="32" rx="11" fill="#121318"/><circle cx="25" cy="34" r="5" fill="#FFD84D"/><circle cx="39" cy="34" r="5" fill="#FFD84D"/><path d="M26 44h12" stroke="#FFD84D" stroke-width="3" stroke-linecap="round"/><path d="M32 18V9" stroke="#121318" stroke-width="3.5" stroke-linecap="round"/><circle cx="32" cy="8" r="4" fill="#121318"/><rect x="6" y="28" width="6" height="12" rx="3" fill="#121318"/><rect x="52" y="28" width="6" height="12" rx="3" fill="#121318"/></svg>';

  /* ---------- wizard (codes must match AI_OPT in ping-funnel/src/bfai.js) ---------- */
  var OPT = {
    platform: [['shopify', '🛍️', 'Shopify'], ['woo', '🟣', 'WooCommerce / WordPress'], ['wix', '⚫', 'Wix'], ['other', '🧩', 'משהו אחר']],
    category: [['fashion', 'אופנה וביגוד'], ['jewelry', 'תכשיטים ואקססוריז'], ['beauty', 'קוסמטיקה וטיפוח'], ['home', 'בית ועיצוב'], ['kids', 'ילדים ותינוקות'], ['toys', 'צעצועים ומשחקים'],
      ['sport', 'ספורט וכושר'], ['tech', 'גאדג׳טים ואלקטרוניקה'], ['pets', 'חיות מחמד'], ['food', 'אוכל ומשקאות'], ['gifts', 'מתנות'], ['other', 'אחר']],
    audience: [['women', 'נשים'], ['men', 'גברים'], ['parents', 'הורים'], ['young', 'צעירים'], ['business', 'עסקים']],
    ages: [['a18', '18–24'], ['a25', '25–34'], ['a35', '35–44'], ['a45', '45–54'], ['a55', '55+']],
    tone: [['warm', '🤗', 'חם ומשפחתי', 'כמו לדבר עם חברה'], ['lux', '✨', 'יוקרתי ומדויק', 'מעט מילים, הרבה סטייל'], ['young', '😎', 'צעיר וקליל', 'קצר, זורם, עם קריצה'],
      ['pro', '🧰', 'מקצועי ואמין', 'עובדות, בלי סלסולים'], ['fun', '😄', 'עם הומור', 'משעשע, אבל לא מתאמץ'], ['natural', '🌿', 'טבעי ורגוע', 'שקט, נעים, בלי לחץ']],
    maxd: [[10, '10%'], [15, '15%'], [20, '20%'], [25, '25%'], [30, '30%']],
    channels: [['email', '📧', 'מייל'], ['sms', '📱', 'SMS'], ['whatsapp', '💬', 'וואטסאפ'], ['none', '🔇', 'עוד אין לי']],
    visitors: [['a', '🌱', 'עד 100'], ['b', '🚶', '100–1,000'], ['c', '🚌', '1,000–10,000'], ['d', '🏟️', '10,000+']],
  };
  var STEPS = [
    {k: 'store', t: 'איך קוראים לחנות?', h: 'ככה העובד יחתום על כל ההודעות'},
    {k: 'platform', t: 'על איזו פלטפורמה החנות?', h: 'כדי שההמלצות יתאימו למה שיש לך'},
    {k: 'category', t: 'מה מוכרים אצלך?', h: 'בוחרים תחום, ואפשר להוסיף כמה מילים'},
    {k: 'products', t: 'אילו מוצרים נקדם בבלאק פריידיי?', h: 'עד 5 מוצרים. העלות לא חובה, אבל איתה נבדוק אם כל באנדל רווחי'},
    {k: 'audience', t: 'למי החנות מוכרת?', h: 'אפשר לבחור כמה'},
    {k: 'tone', t: 'איך החנות מדברת עם הלקוחות?', h: 'העובד יכתוב בסגנון הזה'},
    {k: 'maxd', t: 'מה ההנחה הכי גבוהה שתסכים לתת?', h: 'העובד לא יכתוב אף פעם הנחה גבוהה מזו'},
    {k: 'channels', t: 'באילו ערוצים יש לך קשר עם הלקוחות?', h: 'אפשר לבחור כמה'},
    {k: 'visitors', t: 'כמה מבקרים יש באתר בחודש, בערך?', h: 'הערכה מספיקה. זה רק בשביל המחשבון בסוף'},
  ];
  var N = STEPS.length;
  var S = load('bfai_ans') || {a: {}, i: 0};
  if (!S.a) S = {a: {}, i: 0};
  if (!S.a.products || !S.a.products.length) S.a.products = [{name: '', price: '', mode: 'cost', cost: '', margin: ''}];
  function persist() { save('bfai_ans', S); }

  /* ---------- page helpers ---------- */
  function setDark(on) {
    app.classList.toggle('dark', on);
    var c = on ? '#121318' : '#FAF8F3';
    try { document.body.style.background = c; var p = app.parentElement; while (p && p !== document.body) { p.style.backgroundColor = c; p = p.parentElement; } } catch (e) {}
  }
  function top() { var y = app.getBoundingClientRect().top + window.pageYOffset; if (window.pageYOffset > y) window.scrollTo(0, y); }
  function bfDay() {
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
  function push(st) { try { history.pushState({ai: st}, ''); } catch (e) {} }
  var started = false;

  /* ---------- hero ---------- */
  function intro() {
    setDark(false); tb.innerHTML = '🤖 עובד AI <b>לבלאק פריידיי</b>';
    var resume = S.i > 0 && S.i < N && S.a.store;
    var flo = [['10', 'מודעות'], ['5', 'תסריטי UGC'], ['5', 'באנדלים'], ['7', 'מיילים'], ['5', 'SMS'], ['5', 'וואטסאפ'], ['5', 'אוטומציות']];
    main.innerHTML = '<div class="scr">' +
      '<div class="hero" aria-hidden="true"><div class="bot">' + BOT + '</div><div class="flo">' + flo.map(function (f, i) { return '<span style="animation-delay:' + (0.15 + i * 0.09) + 's"><b>' + f[0] + '</b> ' + f[1] + '</span>'; }).join('') + '</div></div>' +
      countdown() +
      '<h1>עובד AI שבונה לחנות שלך את <em>כל קמפיין בלאק פריידיי</em></h1>' +
      '<p class="hint" style="margin-top:0">עונים על 9 שאלות קצרות על החנות, ותוך פחות מדקה מקבלים תוכנית מלאה מ-7.11 ועד סייבר מאנדיי. כל הטקסטים מוכנים להעתקה.</p>' +
      '<ul class="gets"><li><span>📅</span>לוח זמנים יום אחרי יום: מה יוצא, מתי ובאיזה ערוץ</li><li><span>📣</span>10 מודעות עם תצוגה מקדימה ו-5 תסריטים לסרטוני UGC</li><li><span>💬</span>מיילים, SMS, וואטסאפ, אוטומציות ובאנדלים עם בדיקת רווח</li></ul>' +
      '<div class="spacer"></div>' +
      '<button class="btn" type="button" id="aiGo">' + (resume ? 'ממשיכים מאיפה שעצרת ←' : 'לבנות את התוכנית שלי ←') + '</button>' +
      '<p class="note">בלי להתחבר לחנות ובלי כרטיס אשראי</p>' +
      (resume ? '<button class="redo" type="button" id="aiFresh" style="color:var(--mut)">להתחיל מההתחלה</button>' : '') +
      '</div>';
    main.querySelector('#aiGo').onclick = function () {
      if (!started) { started = true; AIX.track('BFAIStart'); }
      if (!resume || !S.t0) { S.t0 = Date.now(); persist(); }   // wizard start time, kept across visits (bot check on the server)
      step(resume ? S.i : 0, false);
    };
    var fr = main.querySelector('#aiFresh'); if (fr) fr.onclick = function () { S = {a: {products: [{name: '', price: '', mode: 'cost', cost: '', margin: ''}]}, i: 0}; persist(); intro(); };
  }

  /* ---------- wizard steps ---------- */
  var lock = false;
  function head(i) {
    return '<div class="prog"><button type="button" class="bk" id="aiBack" aria-label="חזרה">→ חזרה</button><div class="b"><i style="width:' + ((i + 1) / N * 100) + '%"></i></div><span>' + (i + 1) + ' / ' + N + '</span></div>' +
      '<h2 id="aiQt">' + esc(STEPS[i].t) + '</h2>' + (STEPS[i].h ? '<p class="hint">' + esc(STEPS[i].h) + '</p>' : '');
  }
  function lbl(t) { return /^[\d,.+–%\s-]+$/.test(t) ? '<bdi dir="ltr">' + esc(t) + '</bdi>' : esc(t); }   // number ranges keep their order inside RTL text
  function optBtn(code, emo, label, on, role, sub) {
    return '<button type="button" class="opt' + (on ? ' on' : '') + '" data-v="' + esc(code) + '" role="' + role + '" aria-checked="' + on + '">' + (emo ? '<span class="e" aria-hidden="true">' + emo + '</span>' : '') +
      '<span class="t">' + lbl(label) + (sub ? '<small>' + esc(sub) + '</small>' : '') + '</span>' + (role === 'checkbox' ? '<span class="ck" aria-hidden="true">' + (on ? '✓' : '') + '</span>' : '') + '</button>';
  }
  function step(i, back, noPush) {
    setDark(false); lock = false;
    var st = STEPS[i], k = st.k, a = S.a, body = '', nextBtn = true;
    S.i = i; persist();
    if (!noPush) push(i);
    if (k === 'store') body = '<div class="fld"><label class="vh" for="aiStore">שם החנות</label><input class="in" id="aiStore" maxlength="60" autocomplete="organization" placeholder="למשל: לונה תכשיטים" value="' + esc(a.store || '') + '"><span class="em" aria-live="polite"></span></div>';
    else if (k === 'platform' || k === 'tone' || k === 'visitors') { body = '<div class="opts" role="radiogroup" aria-labelledby="aiQt">' + OPT[k].map(function (o) { return optBtn(o[0], o[1], o[2], a[k] === o[0], 'radio', o[3]); }).join('') + '</div>'; nextBtn = a[k] != null; }
    else if (k === 'maxd') { body = '<div class="dgrid" role="radiogroup" aria-labelledby="aiQt">' + OPT.maxd.map(function (o) { return optBtn(String(o[0]), '', o[1], +a.maxd === o[0], 'radio'); }).join('') + '</div>'; nextBtn = a.maxd != null; }
    else if (k === 'channels') body = '<div class="opts" role="group" aria-labelledby="aiQt">' + OPT.channels.map(function (o) { return optBtn(o[0], o[1], o[2], (a.channels || []).indexOf(o[0]) >= 0, 'checkbox'); }).join('') + '</div>';
    else if (k === 'category') body = '<div class="chips" role="radiogroup" aria-labelledby="aiQt">' + OPT.category.map(function (o) { return '<button type="button" class="chp' + (a.category === o[0] ? ' on' : '') + '" data-v="' + o[0] + '" role="radio" aria-checked="' + (a.category === o[0]) + '">' + esc(o[1]) + '</button>'; }).join('') + '</div>' +
      '<div class="fld" style="margin-top:6px"><label class="lab" for="aiCatT">במילה או שתיים, מה מיוחד אצלך? <span style="font-weight:500;color:var(--mut)">(לא חובה)</span></label><input class="in" id="aiCatT" maxlength="60" placeholder="למשל: תכשיטי כסף בעבודת יד" value="' + esc(a.category_text || '') + '"></div><span class="em" id="aiCatE" aria-live="polite"></span>';
    else if (k === 'audience') body = '<div class="chips" role="group" aria-label="קהל">' + OPT.audience.map(function (o) { var on = (a.audience || []).indexOf(o[0]) >= 0; return '<button type="button" class="chp' + (on ? ' on' : '') + '" data-g="audience" data-v="' + o[0] + '" aria-pressed="' + on + '">' + esc(o[1]) + '</button>'; }).join('') + '</div>' +
      '<p class="lab">ובאיזה גיל?</p><div class="chips" role="group" aria-label="גיל">' + OPT.ages.map(function (o) { var on = (a.ages || []).indexOf(o[0]) >= 0; return '<button type="button" class="chp' + (on ? ' on' : '') + '" data-g="ages" data-v="' + o[0] + '" aria-pressed="' + on + '">' + lbl(o[1]) + '</button>'; }).join('') + '</div>';
    else if (k === 'products') body = '<div id="aiProds" style="display:grid;gap:10px"></div><button type="button" class="add" id="aiAdd">+ עוד מוצר</button><span class="em" id="aiPe" aria-live="polite"></span>';
    main.innerHTML = '<div class="scr' + (back ? ' back' : '') + '">' + head(i) + body + '<div class="spacer"></div>' +
      (nextBtn ? '<button class="btn" type="button" id="aiNext">' + (i === N - 1 ? 'כמעט סיימנו ←' : 'המשך ←') + '</button>' : '') + '</div>';
    top();
    main.querySelector('#aiBack').onclick = function () { if (history.state && history.state.ai === i) history.back(); else if (i === 0) intro(); else step(i - 1, true); };
    var nx = main.querySelector('#aiNext');
    var go = function () { AIX.track('BFAIStep', {s: k}, {repeat: true, server: false}); if (i + 1 < N) step(i + 1); else leadForm(); };

    if (k === 'store') {
      var inp = main.querySelector('#aiStore');
      inp.oninput = function () { a.store = inp.value; persist(); };
      inp.onkeydown = function (e) { if (e.key === 'Enter') nx.click(); };
      nx.onclick = function () { var v = inp.value.trim().replace(/\s+/g, ' '); if (v.length < 2) { inp.parentNode.classList.add('bad'); inp.parentNode.querySelector('.em').textContent = 'מה שם החנות? (לפחות 2 תווים)'; inp.focus(); return; } a.store = v; persist(); go(); };
      if (!('ontouchstart' in window)) inp.focus();
    }
    if (k === 'platform' || k === 'tone' || k === 'visitors' || k === 'maxd') {
      main.querySelectorAll('.opt').forEach(function (b) {
        b.onclick = function () {
          if (lock) return; lock = true;
          var v = b.getAttribute('data-v'); a[k] = k === 'maxd' ? +v : v; persist();
          main.querySelectorAll('.opt').forEach(function (o) { var on = o === b; o.classList.toggle('on', on); o.setAttribute('aria-checked', on); });
          setTimeout(go, reduce ? 60 : 240);
        };
      });
      if (nx) nx.onclick = go;
    }
    if (k === 'channels') {
      var sel = (a.channels || []).slice();
      var sync = function () { main.querySelectorAll('.opt').forEach(function (o) { var on = sel.indexOf(o.getAttribute('data-v')) >= 0; o.classList.toggle('on', on); o.setAttribute('aria-checked', on); o.querySelector('.ck').textContent = on ? '✓' : ''; }); nx.disabled = !sel.length; a.channels = sel.slice(); persist(); };
      main.querySelectorAll('.opt').forEach(function (b) {
        b.onclick = function () { var v = b.getAttribute('data-v'); if (v === 'none') sel = sel.indexOf('none') >= 0 ? [] : ['none']; else { sel = sel.filter(function (x) { return x !== 'none'; }); var p = sel.indexOf(v); if (p >= 0) sel.splice(p, 1); else sel.push(v); } sync(); };
      });
      nx.disabled = !sel.length; nx.onclick = function () { if (sel.length) go(); };
    }
    if (k === 'category') {
      var ct = main.querySelector('#aiCatT');
      main.querySelectorAll('.chp').forEach(function (b) { b.onclick = function () { a.category = b.getAttribute('data-v'); persist(); main.querySelectorAll('.chp').forEach(function (o) { var on = o === b; o.classList.toggle('on', on); o.setAttribute('aria-checked', on); }); main.querySelector('#aiCatE').textContent = ''; }; });
      ct.oninput = function () { a.category_text = ct.value; persist(); };
      nx.onclick = function () { if (!a.category) { main.querySelector('#aiCatE').textContent = 'בוחרים תחום אחד (אפשר "אחר")'; return; } a.category_text = ct.value.trim(); persist(); go(); };
    }
    if (k === 'audience') {
      main.querySelectorAll('.chp').forEach(function (b) {
        b.onclick = function () { var g = b.getAttribute('data-g'), v = b.getAttribute('data-v'), arr = (a[g] || []).slice(), p = arr.indexOf(v); if (p >= 0) arr.splice(p, 1); else arr.push(v); a[g] = arr; persist(); b.classList.toggle('on', p < 0); b.setAttribute('aria-pressed', p < 0); };
      });
      nx.onclick = go;
    }
    if (k === 'products') prodStep(nx, go);
  }

  function prodStep(nx, go) {
    var box = main.querySelector('#aiProds'), a = S.a;
    function draw() {
      box.innerHTML = a.products.map(function (p, j) {
        var m = p.mode === 'margin';
        return '<div class="prod" data-j="' + j + '"><span class="n">מוצר ' + (j + 1) + '</span>' + (a.products.length > 1 ? '<button type="button" class="rm" data-rm="' + j + '" aria-label="הסרת מוצר ' + (j + 1) + '">×</button>' : '') +
          '<label class="vh" for="aiPn' + j + '">שם המוצר</label><input class="in sm" id="aiPn' + j + '" data-f="name" maxlength="60" placeholder="שם המוצר" value="' + esc(p.name) + '">' +
          '<div class="row"><div class="inw"><label class="vh" for="aiPp' + j + '">מחיר בשקלים</label><input class="in sm" id="aiPp' + j + '" data-f="price" inputmode="decimal" maxlength="8" placeholder="מחיר" value="' + esc(p.price) + '"><i>₪</i></div>' +
          '<div class="seg" role="group" aria-label="עלות או אחוז רווח"><button type="button" data-mode="cost" aria-pressed="' + !m + '">עלות ₪</button><button type="button" data-mode="margin" aria-pressed="' + m + '">רווח %</button></div></div>' +
          '<div class="inw"><label class="vh" for="aiPc' + j + '">' + (m ? 'אחוז רווח גולמי' : 'עלות המוצר בשקלים') + '</label><input class="in sm" id="aiPc' + j + '" data-f="' + (m ? 'margin' : 'cost') + '" inputmode="decimal" maxlength="8" placeholder="' + (m ? 'אחוז רווח גולמי (לא חובה)' : 'עלות למוצר (לא חובה)') + '" value="' + esc(m ? p.margin : p.cost) + '"><i>' + (m ? '%' : '₪') + '</i></div></div>';
      }).join('');
      main.querySelector('#aiAdd').hidden = a.products.length >= 5;
    }
    draw();
    box.addEventListener('input', function (e) { var f = e.target.getAttribute('data-f'), j = +e.target.closest('.prod').getAttribute('data-j'); if (!f) return; a.products[j][f] = e.target.value; e.target.classList.remove('bad'); persist(); });
    box.addEventListener('click', function (e) {
      var rm = e.target.closest('[data-rm]'), md = e.target.closest('[data-mode]');
      if (rm) { a.products.splice(+rm.getAttribute('data-rm'), 1); persist(); draw(); }
      if (md) { var j = +md.closest('.prod').getAttribute('data-j'); a.products[j].mode = md.getAttribute('data-mode'); persist(); draw(); var c = box.querySelector('#aiPc' + j); if (c) c.focus(); }
    });
    main.querySelector('#aiAdd').onclick = function () { a.products.push({name: '', price: '', mode: 'cost', cost: '', margin: ''}); persist(); draw(); box.querySelector('#aiPn' + (a.products.length - 1)).focus(); };
    nx.onclick = function () {
      var good = 0, bad = null, pe = main.querySelector('#aiPe'); pe.textContent = '';
      a.products.forEach(function (p, j) {
        var nm = String(p.name || '').trim(), pr = num(p.price), any = nm || String(p.price || '').trim();
        if (!any) return;
        var c = p.mode === 'margin' ? p.margin : p.cost, cv = String(c || '').trim() === '' ? 0 : num(c);
        var okN = nm.length >= 2, okP = pr != null && pr >= 1, okC = cv != null && (p.mode !== 'margin' || String(c || '').trim() === '' || (cv >= 1 && cv <= 95));
        if (!okN) mark('#aiPn' + j); if (!okP) mark('#aiPp' + j); if (!okC) mark('#aiPc' + j);
        if (okN && okP && okC) good++;
      });
      function mark(sel) { var el = box.querySelector(sel); el.classList.add('bad'); if (!bad) bad = el; }
      if (bad) { pe.textContent = 'צריך שם (2 תווים לפחות) ומחיר בשקלים לכל מוצר. אחוז רווח: בין 1 ל-95.'; bad.focus(); return; }
      if (!good) { pe.textContent = 'מוסיפים לפחות מוצר אחד עם שם ומחיר'; mark('#aiPn0'); bad.focus(); return; }
      a.products = a.products.filter(function (p) { return String(p.name || '').trim() || String(p.price || '').trim(); }); persist(); go();
    };
  }
  function num(v) { var n = parseFloat(String(v == null ? '' : v).replace(/[,₪%\s]/g, '')); return isFinite(n) ? n : null; }
  function cleanProducts(list) {
    return (list || []).map(function (p) {
      var x = {name: String(p.name || '').trim(), price: num(p.price)};
      if (p.mode === 'margin' && num(p.margin) != null && String(p.margin).trim() !== '') { x.mode = 'margin'; x.margin = num(p.margin); }
      else if (p.mode !== 'margin' && num(p.cost) != null && String(p.cost).trim() !== '') { x.mode = 'cost'; x.cost = num(p.cost); }
      return x;
    }).filter(function (p) { return p.name.length >= 2 && p.price >= 1; });
  }
  function complete() {
    var a = S.a; return a.store && a.platform && a.category && cleanProducts(a.products).length && a.tone && a.maxd && (a.channels || []).length && a.visitors;
  }
  function firstMissing() { var a = S.a, m = [!a.store, !a.platform, !a.category, !cleanProducts(a.products).length, false, !a.tone, !a.maxd, !(a.channels || []).length, !a.visitors]; return m.indexOf(true); }

  /* ---------- lead form ---------- */
  function leadForm() {
    setDark(false);
    if (!complete()) return step(Math.max(0, firstMissing()));
    push('lead');
    var prev = load('bfai_me') || {};
    main.innerHTML = '<div class="scr">' +
      '<div class="prog"><button type="button" class="bk" id="aiBack" aria-label="חזרה">→ חזרה</button><div class="b"><i style="width:100%"></i></div><span>' + N + ' / ' + N + ' ✓</span></div>' +
      '<div class="lock" aria-hidden="true"><div class="bl"><div>📅 27.11 · מייל + וואטסאפ: בלאק פריידיי התחיל</div><div>📣 מודעה 5: ' + esc(S.a.store) + '</div><div>🎁 באנדל: רווח גולמי ₪… · כדאי</div><div>💬 SMS: 64/70 תווים</div></div><div class="t">🔒 התוכנית של ' + esc(S.a.store) + ' מוכנה לבנייה</div></div>' +
      '<h2>העובד מוכן להתחיל</h2><p class="hint">איך לקרוא לך, ואיך אפשר לחזור אליך?</p>' +
      '<form id="aiForm" novalidate style="display:grid;gap:10px">' +
      '<div class="fld" data-f="name"><label class="vh" for="aiName">שם פרטי</label><input class="in" id="aiName" name="name" autocomplete="given-name" maxlength="40" placeholder="שם פרטי" required value="' + esc(prev.name || '') + '"><span class="em" aria-live="polite"></span></div>' +
      '<div class="fld" data-f="phone"><label class="vh" for="aiPhone">טלפון נייד</label><input class="in" id="aiPhone" name="phone" type="tel" inputmode="tel" autocomplete="tel" maxlength="16" placeholder="טלפון נייד" dir="ltr" style="text-align:right" required value="' + esc(prev.phone || '') + '"><span class="em" aria-live="polite"></span></div>' +
      '<div class="fld" data-f="email"><label class="vh" for="aiEmail">אימייל (לא חובה)</label><input class="in" id="aiEmail" name="email" type="email" inputmode="email" autocomplete="email" maxlength="120" placeholder="אימייל (לא חובה)" dir="ltr" style="text-align:right" value="' + esc(prev.email || '') + '"><span class="em" aria-live="polite"></span></div>' +
      '<div class="hp" aria-hidden="true"><label>Company<input type="text" name="company" tabindex="-1" autocomplete="off"></label></div>' +
      '<label class="chk"><input type="checkbox" name="consent"' + (prev.consent ? ' checked' : '') + '><span>מאשר/ת לקבל מאביב מלכה תכנים ועדכונים באימייל, ב-SMS ובוואטסאפ. אפשר להסיר בכל רגע.</span></label>' +
      '<p class="legal">בשליחה אני מאשר/ת את <button type="button" class="lnk" data-open="aiPriv">מדיניות הפרטיות</button>.</p>' +
      '<span class="em" id="aiFe" aria-live="polite"></span>' +
      '<button class="btn" type="submit" style="margin-top:6px">לבנות את התוכנית ←</button>' +
      '</form></div>';
    top();
    main.querySelector('#aiBack').onclick = function () { if (history.state && history.state.ai === 'lead') history.back(); else step(N - 1, true); };
    var f = main.querySelector('#aiForm');
    f.addEventListener('submit', function (ev) { ev.preventDefault(); submit(f); });
  }
  function normPhone(s) {
    s = String(s || '').replace(/[\s\-().]/g, ''); if (s.indexOf('00') === 0) s = '+' + s.slice(2);
    if (/^05\d{8}$/.test(s)) return '972' + s.slice(1);
    if (/^\+?9720?5\d{8}$/.test(s)) return '972' + s.replace(/^\+?9720?/, '');
    return null;
  }
  function setErr(f, name, msg) { var el = f.querySelector('[data-f="' + name + '"]'); if (!el) return; el.classList.toggle('bad', !!msg); var m = el.querySelector('.em'); if (m) m.textContent = msg || ''; }
  var pendingBody = null;
  function submit(f) {
    var name = f.name.value.trim().replace(/\s+/g, ' '), phone = normPhone(f.phone.value), email = f.email.value.trim(), consent = f.consent.checked, bad = null;
    var ok = {name: name.length >= 2 && /[A-Za-z֐-׿]/.test(name), phone: !!phone, email: !email || /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)};
    setErr(f, 'name', ok.name ? '' : 'איך לקרוא לך? (לפחות 2 אותיות)'); setErr(f, 'phone', ok.phone ? '' : 'צריך מספר נייד ישראלי, למשל 050-1234567'); setErr(f, 'email', ok.email ? '' : 'האימייל לא נראה תקין (אפשר גם להשאיר ריק)');
    ['name', 'phone', 'email'].some(function (k) { if (!ok[k]) { bad = k; return true; } return false; });
    if (bad) { f[bad].focus(); return; }
    var btn = f.querySelector('button[type=submit]'), fe = main.querySelector('#aiFe'); btn.disabled = true; btn.textContent = 'שולחים…'; fe.textContent = '';
    save('bfai_me', {name: name, phone: f.phone.value.trim(), email: email, consent: consent});
    var a = S.a, u = AIX.utm();
    var answers = {store: a.store, platform: a.platform, category: a.category, category_text: a.category_text || '', products: cleanProducts(a.products), audience: a.audience || [], ages: a.ages || [], tone: a.tone, maxd: a.maxd, channels: a.channels, visitors: a.visitors};
    if (!pendingBody || pendingBody.phone !== f.phone.value.trim() || JSON.stringify(pendingBody.answers) !== JSON.stringify(answers))
      pendingBody = {sid: 'ai' + AIX.rid(18), event_id: 'lead_' + AIX.rid(16)};   // same sid on a retry → the server never stores the lead twice
    var body = {sid: pendingBody.sid, name: name, phone: f.phone.value.trim(), email: email, consent: consent, privacy_ack: true, answers: answers, hp: f.company.value, elapsed: Date.now() - Math.min(t0, S.t0 || t0),
      event_id: pendingBody.event_id, vid: AIX.vid, utm: u, fbclid: u.fbclid || '', fbc: AIX.fbc(), fbp: AIX.cookie('_fbp'), referrer: document.referrer.slice(0, 300), landing_url: location.origin + location.pathname};
    pendingBody.phone = body.phone; pendingBody.answers = answers;
    var fail = function (msg) { btn.disabled = false; btn.textContent = 'לנסות שוב ←'; fe.textContent = msg; };
    AIX.api('/api/bfai', body, 15000).then(function (r) {
      if (r.ok && r.spam) return fail('משהו השתבש. אפשר לנסות שוב בעוד רגע.');
      if (r.ok && r.id) {
        AIX.fb('Lead', r.event_id || body.event_id, {content_name: 'bf-ai', content_category: 'lead-magnet'});
        pendingBody = null;
        save('bfai_res', {id: r.id, t: Date.now()}); S.i = 0; persist();
        setUrl(r.id);
        return generate(r.id, {answers: answers, parts: {}});
      }
      if (r._status === 422 && r.fields) {
        if (r.fields.name) setErr(f, 'name', 'איך לקרוא לך? (לפחות 2 אותיות)'); if (r.fields.phone) setErr(f, 'phone', 'צריך מספר נייד ישראלי, למשל 050-1234567'); if (r.fields.email) setErr(f, 'email', 'האימייל לא נראה תקין (אפשר גם להשאיר ריק)');
        if (r.fields.answers) { var m = firstMissing(); return step(m >= 0 ? m : 3); }
        return fail('');
      }
      if (r._status === 429) return fail('יותר מדי ניסיונות מהרשת הזאת. נסו שוב בעוד כמה דקות.');
      fail('לא הצלחנו לשלוח. בודקים את החיבור ומנסים שוב.');
    }).catch(function () { fail('לא הצלחנו לשלוח. בודקים את החיבור ומנסים שוב.'); });
  }
  function setUrl(id) { try { var p = new URLSearchParams(location.search); p.set('plan', id); history.replaceState(history.state, '', location.pathname + '?' + p.toString()); } catch (e) {} }

  /* ---------- generation (4 parallel parts, real progress) ---------- */
  var GSTEPS = [['read', 'קורא את פרטי החנות והמוצרים'], ['cal', 'בונה לוח זמנים: 7.11 עד סייבר מאנדיי'], ['ads', 'כותב אסטרטגיה ו-10 מודעות'], ['ugc', 'כותב 5 תסריטי UGC ו-5 אוטומציות'],
    ['mail', 'כותב 7 מיילים'], ['msg', 'כותב SMS ווואטסאפ ובוחר 5 באנדלים'], ['math', 'מחשב רווח לכל באנדל'], ['calc', 'מכין את המחשבון']];
  function generate(id, plan, only) {
    setDark(true); tb.innerHTML = '🤖 העובד בונה את <b>התוכנית</b>';
    var need = (only || PARTS).filter(function (p) { return !plan.parts[p]; });
    if (!need.length) return renderPlan(id, plan);
    main.className = 'wrap';
    main.innerHTML = '<div class="scr"><div class="gen"><div class="bot" aria-hidden="true">' + BOT + '</div><h2>העובד בונה את התוכנית של ' + esc(plan.answers.store) + '…</h2>' +
      '<p class="hint" style="margin-top:-4px">לוקח בערך חצי דקה. אפשר להישאר כאן, זה קורה מול העיניים.</p><div class="gbar" aria-hidden="true"><i id="aiGb"></i></div><span class="clk" id="aiClk">0:00</span>' +
      '<ul class="steps" id="aiSteps">' + GSTEPS.map(function (s) { return '<li data-s="' + s[0] + '"><span class="ic"><span class="dot"></span></span><span>' + esc(s[1]) + '</span></li>'; }).join('') + '</ul></div></div>';
    top();
    var tStart = Date.now(), state = {}, capped = false, polls = {};
    function mark(s, st) { state[s] = st; var li = main.querySelector('[data-s="' + s + '"]'); if (!li) return; li.className = st; li.querySelector('.ic').innerHTML = st === 'run' ? '<span class="spin"></span>' : st === 'done' ? '<span class="ok">✓</span>' : st === 'fail' ? '⚠️' : '<span class="dot"></span>'; }
    PARTS.forEach(function (p) { if (plan.parts[p]) mark(p, 'done'); });
    mark('read', 'run'); setTimeout(function () { mark('read', 'done'); mark('cal', 'run'); }, 700); setTimeout(function () { mark('cal', 'done'); }, 2200);
    var tick = setInterval(function () {
      var s = Math.floor((Date.now() - tStart) / 1000), clk = main.querySelector('#aiClk'), gb = main.querySelector('#aiGb');
      if (!clk) return clearInterval(tick);
      clk.textContent = Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2);
      var done = PARTS.filter(function (p) { return state[p] === 'done'; }).length;
      gb.style.width = Math.min(96, 8 + done * 20 + Math.min(18, s * 0.8)) + '%';
    }, 500);
    need.forEach(function (p) { run(p, 0); });
    function run(p, tries) {
      mark(p, 'run');
      AIX.api('/api/bfai/gen', {id: id, part: p}, 85000, true).then(function (r) {
        if (r.ok && r.data) { plan.parts[p] = r.data; mark(p, 'done'); if (p === 'msg') mark('math', 'done'); return check(); }
        if (r.err === 'cap') { capped = true; mark(p, 'fail'); return check(); }
        if (r.err === 'busy') return setTimeout(function () { poll(p, tries); }, 3000);
        if (r.err === 'limit' || r._status === 404 || r._status === 400) { mark(p, 'fail'); return check(); }
        throw new Error('gen');
      }).catch(function () { if (tries < 1) setTimeout(function () { run(p, tries + 1); }, 1500); else { mark(p, 'fail'); check(); } });
    }
    function poll(p, tries) {   // another tab / an earlier request is already generating this part
      polls[p] = (polls[p] || 0) + 1;
      AIX.api('/api/bfai/plan?id=' + encodeURIComponent(id), null, 9000).then(function (r) {
        if (r.ok && r.parts && r.parts[p]) { plan.parts[p] = r.parts[p]; mark(p, 'done'); if (p === 'msg') mark('math', 'done'); return check(); }
        if (r.ok && r.busy && r.busy.indexOf(p) >= 0 && polls[p] < 30) return setTimeout(function () { poll(p, tries); }, 3000);
        run(p, tries);
      }).catch(function () { if (polls[p] < 30) setTimeout(function () { poll(p, tries); }, 3000); else { mark(p, 'fail'); check(); } });
    }
    function check() {
      var settled = need.every(function (p) { return state[p] === 'done' || state[p] === 'fail'; });
      if (!settled) return;
      clearInterval(tick);
      if (state.msg !== 'done') mark('math', 'fail');
      mark('calc', 'done'); var gb = main.querySelector('#aiGb'); if (gb) gb.style.width = '100%';
      var any = PARTS.some(function (p) { return plan.parts[p]; });
      if (!any) return genFail(id, plan, capped);
      setTimeout(function () { renderPlan(id, plan, capped); }, reduce ? 0 : 600);
    }
  }
  function genFail(id, plan, capped) {
    main.innerHTML = '<div class="scr"><div class="gen"><div class="bot" aria-hidden="true">' + BOT + '</div>' +
      '<h2>' + (capped ? 'העובד עמוס מאוד היום 🙏' : 'העובד נתקע לרגע') + '</h2><p class="hint">' + (capped ? 'הפרטים שלך נשמרו. אפשר לחזור לקישור הזה מחר ולבנות את התוכנית.' : 'הפרטים שלך נשמרו. בדרך כלל ניסיון נוסף עובד.') + '</p>' +
      '<button class="btn sm" type="button" id="aiRetry" style="max-width:320px">לנסות שוב ←</button></div></div>';
    main.querySelector('#aiRetry').onclick = function () { generate(id, plan); };
  }

  /* ---------- deterministic math ---------- */
  var VAT = 0.18;
  function costOf(p, over) {   // override from the cost panel → cost → margin → unknown
    if (over === '') return null;   // cleared in the cost panel = unknown
    if (over != null && isFinite(+over)) return +over;
    if (p.mode === 'cost' && p.cost != null) return +p.cost;
    if (p.mode === 'margin' && p.margin != null) return p.price * (1 - p.margin / 100);
    return null;
  }
  function bundleCalc(b, prods, o) {
    var list = 0, cost = 0, known = true, rows = [];
    b.items.forEach(function (it) { var p = prods[it.p - 1]; if (!p) return; list += p.price * it.qty; var c = costOf(p, o.costs[it.p - 1]); if (c == null) known = false; else cost += c * it.qty; rows.push({p: p, qty: it.qty, cost: c}); });
    var price = Math.round(list * (1 - b.discount / 100)), disc = list - price, net = o.vat ? price / (1 + VAT) : price, extra = +o.extra || 0;
    var r = {list: list, price: price, disc: disc, pct: list ? disc / list * 100 : 0, rows: rows, known: known, net: net};
    if (known) {
      r.cost = cost + extra; r.profit = net - r.cost; r.margin = net > 0 ? r.profit / net * 100 : 0;
      var fullNet = o.vat ? list / (1 + VAT) : list; r.fullProfit = fullNet - cost - extra * (b.items.length > 1 || b.items[0].qty > 1 ? 1 : 0);
      r.v = r.profit <= 0 || r.margin < 20 ? 'bad' : r.margin < 35 ? 'mid' : 'good';
    } else r.v = 'unk';
    return r;
  }
  var GSM = /^[@£$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !"#¤%&'()*+,\-.\/0-9:;<=>?¡A-ZÄÖÑÜ§¿a-zäöñüà^{}\\\[~\]|€]*$/;
  function adv(t) { t = String(t || ''); return /^\s*פרסומת/.test(t) ? t : 'פרסומת: ' + t; }   // Israeli spam law: 'פרסומת' opens every marketing SMS and email subject
  function smsInfo(t) {
    var uni = !GSM.test(t), len = uni ? t.length : t.length + (t.match(/[\^{}\\\[~\]|€]/g) || []).length;
    var one = uni ? 70 : 160, per = uni ? 67 : 153;
    return {len: len, one: one, parts: len <= one ? 1 : Math.ceil(len / per)};
  }

  /* ---------- plan page ---------- */
  var VIS = ['linear-gradient(150deg,#1b1c24,#3a2d0c)', 'linear-gradient(150deg,#2a1530,#5b2840)', 'linear-gradient(150deg,#0e2626,#1f4d40)', 'linear-gradient(150deg,#121318,#1e2b4a)', 'linear-gradient(150deg,#33240c,#7a4c00)'];
  var RIB = ['NEW', 'NEW', 'גישה מוקדמת', 'גישה מוקדמת', 'BLACK FRIDAY', 'BLACK FRIDAY', 'שמרנו לכם', 'BLACK FRIDAY', 'CYBER MONDAY', 'מתנה'];
  var CHN = {email: 'מייל', sms: 'SMS', whatsapp: 'וואטסאפ', ads: 'מודעות', site: 'באתר', auto: 'אוטומציה'};
  var ICS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M20 12a8 8 0 1 1-3.2-6.4L20 4l-.9 4A8 8 0 0 1 20 12z"/></svg><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"><path d="M21 3L3 10l7 3 3 7z"/></svg>';
  var copyStore = [], firstCopy = true, viewSent = false;

  function renderPlan(id, plan, capped) {
    setDark(true);
    var a = plan.answers, P = plan.parts, prods = a.products || [], store = a.store || 'החנות', ini = (store.trim()[0] || '?').toUpperCase();
    var has = function (ch) { return (a.channels || []).indexOf(ch) >= 0; };
    var shop = a.platform === 'shopify', woo = a.platform === 'woo';
    tb.innerHTML = '🤖 התוכנית של <b>' + esc(store) + '</b>';
    main.className = 'wrap wide';
    copyStore = [];
    var cp = function (text, sec) { copyStore.push({t: text, s: sec}); return '<button type="button" class="cp" data-cp="' + (copyStore.length - 1) + '">העתקה</button>'; };
    var missing = function (part) { return '<div class="card fail"><b>החלק הזה עוד לא נבנה</b><span class="sub" style="margin:0">' + (capped ? 'העובד עמוס היום. אפשר לנסות שוב מאוחר יותר מהקישור הזה.' : 'קרתה תקלה בכתיבה שלו.') + '</span><button type="button" class="cp" data-regen="' + part + '">לבנות את החלק הזה ←</button></div>'; };
    var A = P.ads, U = P.ugc, M = P.mail, G = P.msg;
    var ads = A ? A.ads : [], emails = M ? M.emails : [], sms = G ? G.sms : [], wa = G ? G.whatsapp : [];
    var ref = function (kind, i, label) { return '<a data-go="ai-' + kind + '-' + i + '">' + esc(label) + '</a>'; };
    var mailR = function (i) { return emails[i] ? ref('mail', i, 'מייל ' + (i + 1) + ': ' + emails[i].subject) : 'מייל ' + (i + 1); };
    var smsR = function (i) { return sms[i] ? ref('sms', i, 'SMS ' + (i + 1)) : 'SMS ' + (i + 1); };
    var waR = function (i) { return wa[i] ? ref('wa', i, 'וואטסאפ ' + (i + 1)) : 'וואטסאפ ' + (i + 1); };
    var adR = function (i) { return ads[i] ? ref('ad', i, 'מודעה ' + (i + 1) + ' (' + ads[i].angle + ')') : 'מודעה ' + (i + 1); };
    var CAL = [
      {d: '7.11', w: 'מוצ״ש', ph: 'מתחילים', it: [['ads', 'מודעות חימום: ' + adR(0) + ', ' + adR(1)], ['site', 'פופאפ באתר: הרשמה לגישה מוקדמת לבלאק פריידיי']]},
      {d: '10.11', w: 'שלישי', ph: 'שבוע טיזרים', it: [['email', mailR(0)]]},
      {d: '15.11', w: 'ראשון', ph: 'שבוע טיזרים', it: [['whatsapp', waR(0)], ['ads', 'מודעות הרשמה: ' + adR(2) + ', ' + adR(3)]]},
      {d: '19.11', w: 'חמישי', ph: 'הרשמה לגישה מוקדמת', it: [['email', mailR(1)], ['sms', smsR(0)]]},
      {d: '24.11', w: 'שלישי', ph: 'מכינים את השטח', it: [['site', 'מעלים את ' + ref('bnd', 0, 'הבאנדלים') + ' לאתר כטיוטה, ומכינים קוד הנחה'], ['auto', 'בודקים מהטלפון את ' + ref('auto', 0, 'העגלה הנטושה') + ': מוסיפים לעגלה, נוטשים ורואים שההודעה מגיעה']]},
      {d: '26.11', w: 'חמישי · ערב', ph: 'גישה מוקדמת לרשומים', it: [['email', mailR(2)], ['sms', smsR(1)], ['whatsapp', waR(1)]]},
      {d: '27.11', w: 'שישי', ph: 'בלאק פריידיי', hot: 1, nt: 'בישראל זה יום שישי: שולחים בבוקר, לפני כניסת שבת', it: [['email', mailR(3)], ['sms', smsR(2)], ['whatsapp', waR(2)], ['ads', adR(4) + ', ' + adR(5) + ' ורימרקטינג: ' + adR(6)]]},
      {d: '28.11', w: 'מוצ״ש', ph: 'סוף שבוע', nt: 'רק אחרי צאת השבת', it: [['whatsapp', waR(3)]]},
      {d: '29.11', w: 'ראשון', ph: 'יום אחרון לבלאק פריידיי', it: [['email', mailR(4)], ['sms', smsR(3)], ['ads', adR(7)]]},
      {d: '30.11', w: 'שני', ph: 'סייבר מאנדיי', hot: 1, it: [['email', mailR(5)], ['sms', smsR(4)], ['whatsapp', waR(4)], ['ads', adR(8)]]},
      {d: '1–3.12', w: 'אחרי המבצע', ph: 'תודה וחנוכה', it: [['email', mailR(6) + ' (2.12)'], ['auto', ref('auto', 2, 'תודה אחרי קנייה') + ' ו' + ref('auto', 3, 'בקשת ביקורת') + ' רצות לבד'], ['ads', 'מתנות לחנוכה: ' + adR(9)]]},
    ];
    var noCh = (a.channels || []).indexOf('none') >= 0;
    var calHtml = '<ol class="cal">' + CAL.map(function (d) {
      return '<li' + (d.hot ? ' class="hot"' : '') + '><div class="dt"><b>' + d.d + '</b><span>' + esc(d.w) + '</span></div><div><div class="ph">' + esc(d.ph) + '</div>' + (d.nt ? '<div class="nt">' + esc(d.nt) + '</div>' : '') +
        '<ul>' + d.it.map(function (x) { var miss = ['email', 'sms', 'whatsapp'].indexOf(x[0]) >= 0 && !has(x[0]); return '<li class="' + (miss ? 'miss' : '') + '"><span class="chn ' + x[0] + '">' + CHN[x[0]] + '</span><span>' + x[1] + (miss ? ' <small>(אין לך עדיין)</small>' : '') + '</span></li>'; }).join('') + '</ul></div></li>';
    }).join('') + '</ol>';

    /* header */
    var st = A ? A.strategy : null, h = '';
    h += '<div class="scr"><div class="hd1">' + countdown() + '<h1>' + (st && st.headline ? esc(st.headline) : 'התוכנית של <em>' + esc(store) + '</em> לבלאק פריידיי') + '</h1>' +
      (st && st.big_idea ? '<p class="hint" style="margin-top:0;font-size:16px">' + esc(st.big_idea) + '</p>' : '') +
      (st ? '<div class="offer"><div><b>ההצעה המרכזית</b>' + esc(st.offer) + '</div><div><b>מה מקבלים הרשומים לגישה מוקדמת</b>' + esc(st.vip) + '</div></div>' : '') +
      (st && st.tips && st.tips.length ? '<div class="card"><h4>3 דברים להכין כבר השבוע</h4><ol class="tips">' + st.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol></div>' : '') +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button type="button" class="cp" id="aiLink">🔗 העתקת הקישור לתוכנית</button><span class="note" style="text-align:right">הקישור שומר את התוכנית. אפשר לחזור אליה מכל מכשיר.</span></div></div>';
    var NAV = [['cal', 'לוח זמנים'], ['ads', 'מודעות'], ['ugc', 'UGC'], ['bnd', 'באנדלים'], ['mail', 'מיילים'], ['sms', 'SMS'], ['wa', 'וואטסאפ'], ['auto', 'אוטומציות'], ['calc', 'מחשבון'], ['ping', 'הפעלה']];
    h += '<nav class="nav" aria-label="חלקי התוכנית">' + NAV.map(function (n, i) { return '<button type="button" data-nav="ai-' + n[0] + '"' + (i ? '' : ' class="on"') + '>' + n[1] + '</button>'; }).join('') + '</nav>';

    /* calendar */
    h += '<section class="sec" id="ai-cal"><h3>📅 לוח הזמנים</h3><p class="sub">מ-7.11 ועד אחרי סייבר מאנדיי. לוחצים על פריט כדי לקפוץ לטקסט שלו.' + (noCh ? ' עוד אין לך ערוצים מול לקוחות, אז ההודעות מסומנות כ"אין לך עדיין". כדאי להתחיל מפופאפ הרשמה באתר.' : '') + '</p><div class="card">' + calHtml + '</div></section>';

    /* ads */
    h += '<section class="sec" id="ai-ads"><h3>📣 10 מודעות <small>תצוגה מקדימה</small></h3><p class="sub">ככה זה ייראה בפיד ובסטורי. התמונה כאן היא רק סקיצה: שמים תמונה או סרטון אמיתי של המוצר.</p>';
    if (A) h += '<div class="grid2">' + ads.map(function (ad, i) {
      var p = prods[ad.product - 1] || prods[0], txt = ad.primary + '\n\nכותרת: ' + ad.headline + '\nכפתור: ' + ad.cta;
      return '<div class="adw" id="ai-ad-' + i + '"><div class="adh"><span class="tag g">' + (i + 1) + ' · ' + esc(ad.angle) + '</span><div class="seg" role="group" aria-label="תצוגה"><button type="button" data-fmt="feed" data-ad="' + i + '" aria-pressed="' + (ad.format !== 'story') + '">פיד</button><button type="button" data-fmt="story" data-ad="' + i + '" aria-pressed="' + (ad.format === 'story') + '">סטורי</button></div></div>' +
        '<div data-mock="' + i + '">' + mock(ad, i, p, store, ini, ad.format) + '</div><div class="ch"><span class="note">' + (ad.format === 'story' ? 'הוצע לסטורי' : 'הוצע לפיד') + '</span>' + cp(txt, 'ad') + '</div></div>';
    }).join('') + '</div>'; else h += missing('ads');
    h += '</section>';

    /* UGC */
    h += '<section class="sec" id="ai-ugc"><h3>🎬 5 תסריטים ל-UGC</h3><p class="sub">סרטונים קצרים לטלפון, אנכיים. מצלמים עם לקוח/ה אמיתי/ת או יוצר/ת תוכן שקיבל/ה את המוצר, ומציגים אותם ככה.</p>';
    if (U) h += '<div class="grid2">' + U.ugc.map(function (u, i) {
      var p = prods[u.product - 1] || prods[0], txt = u.title + ' (' + u.seconds + ' שניות)\nמי מצלם: ' + u.creator + '\n\nפתיחה: ' + u.hook + '\nאמצע: ' + u.body + '\nסיום: ' + u.cta + '\n\nצילומים:\n' + u.shots.map(function (s) { return '• ' + s; }).join('\n');
      return '<div class="card ugc"><h4>' + (i + 1) + '. ' + esc(u.title) + '</h4><p class="meta">⏱ ' + u.seconds + ' שניות · <bdi>' + esc(p ? p.name : '') + '</bdi> · ' + esc(u.creator) + '</p>' +
        '<div class="bl"><div><b>0–2 שנ׳</b><span>' + esc(u.hook) + '</span></div><div><b class="x">אמצע</b><span>' + esc(u.body) + '</span></div><div><b>סיום</b><span>' + esc(u.cta) + '</span></div></div>' +
        '<ul>' + u.shots.map(function (s) { return '<li>🎥 ' + esc(s) + '</li>'; }).join('') + '</ul><div class="ch"><span></span>' + cp(txt, 'ugc') + '</div></div>';
    }).join('') + '</div>'; else h += missing('ugc');
    h += '</section>';

    /* bundles */
    h += '<section class="sec" id="ai-bnd"><h3>🎁 5 באנדלים <small>עם בדיקת רווח</small></h3><p class="sub">העובד בחר אילו מוצרים לשלב. החישוב עצמו נעשה כאן, לפי המחירים והעלויות שלך. אפשר לשנות עלות והחישוב מתעדכן.</p>';
    if (G) h += '<div class="card"><h4>העלויות שלך</h4><div class="costs" id="aiCosts">' + prods.map(function (p, j) {
      var c = costOf(p), hint = p.mode === 'margin' ? 'משוער מ-' + p.margin + '% רווח' : p.mode === 'cost' ? 'מה שהזנת' : 'חסר: להשלים עלות';
      return '<div class="r"><span><bdi>' + esc(p.name) + '</bdi> · ' + nis(p.price) + '<small>' + esc(hint) + '</small></span><div class="inw"><input class="in" data-cost="' + j + '" inputmode="decimal" aria-label="עלות ' + esc(p.name) + '" placeholder="עלות" value="' + (c != null ? Math.round(c * 100) / 100 : '') + '"><i style="right:auto;left:10px">₪</i></div></div>';
    }).join('') + '<label class="tgl"><input type="checkbox" id="aiVat" checked>המחירים באתר כוללים מע״מ (18%). הרווח מחושב על המחיר בלי מע״מ</label>' +
      '<div class="r"><span>עלות נוספת לכל חבילה<small>משלוח, אריזה, עמלת סליקה. ההנחה כאן: ₪0, כדאי לעדכן</small></span><div class="inw"><input class="in" id="aiExtra" inputmode="decimal" aria-label="עלות נוספת לחבילה" value="0"><i style="right:auto;left:10px">₪</i></div></div></div></div>' +
      '<p class="note" style="text-align:right">כלל האצבע שלנו לרווח גולמי מהמחיר בלי מע״מ: 35% ומעלה כדאי · 20%–35% גבולי · מתחת ל-20% לא כדאי. זו הנחה, לא חוק.</p><div class="grid2" id="aiBnd"></div>';
    else h += missing('msg');
    h += '</section>';

    /* emails */
    h += '<section class="sec" id="ai-mail"><h3>📧 7 מיילים</h3><p class="sub">' + (has('email') ? 'מוכנים להדבקה במערכת הדיוור שלך.' : 'עוד אין לך רשימת מייל. אפשר להתחיל לאסוף כבר עכשיו עם פופאפ באתר, והמיילים יחכו מוכנים.') + ' לפי חוק התקשורת, מייל שיווקי נשלח רק למי שאישר לקבל, עם המילה "פרסומת" בתחילת שורת הנושא (הוספנו אותה) ודרך פשוטה להסרה.</p>';
    var MD = ['10.11', '19.11', '26.11 · ערב', '27.11 · בוקר', '29.11', '30.11', '2.12'];
    if (M) h += '<div class="grid2">' + emails.map(function (m, i) {
      return '<div class="card mail" id="ai-mail-' + i + '"><span class="tag g">' + MD[i] + '</span><p class="sbj" style="margin-top:8px">' + esc(adv(m.subject)) + '</p><p class="pv">' + esc(m.preview) + '</p><div class="bd pre">' + esc(m.body) + '</div>' +
        '<div class="ch"><span></span>' + cp('נושא: ' + adv(m.subject) + '\nטקסט מקדים: ' + m.preview + '\n\n' + m.body, 'email') + '</div></div>';
    }).join('') + '</div>'; else h += missing('mail');
    h += '</section>';

    /* SMS */
    var SD = ['19.11', '26.11', '27.11', '29.11', '30.11'];
    h += '<section class="sec" id="ai-sms"><h3>📱 5 הודעות SMS</h3><p class="sub">רק ללקוחות שאישרו לקבל SMS. כל הודעה כוללת את שם החנות ודרך להסרה. ' + (has('sms') ? '' : 'עוד אין לך ערוץ SMS, אבל ההודעות מוכנות למתי שיהיה. ') + 'המונה סופר כמו מערכת SMS: בעברית, עד 70 תווים זה הודעה אחת. הקישור נספר כאן כ-7 תווים, וקישור מקוצר אמיתי ארוך יותר. לפי החוק כל הודעה נפתחת במילה "פרסומת", והיא כבר כלולה בטקסט ובמונה.</p>';
    if (G) h += '<div class="grid2">' + sms.map(function (s, i) {
      var st = adv(s.text), inf = smsInfo(st);
      return '<div class="card sms" id="ai-sms-' + i + '"><span class="tag g">' + SD[i] + '</span><div class="ph" style="margin-top:8px"><div class="bub">' + esc(st) + '</div></div>' +
        '<div class="ch"><span class="cnt' + (inf.parts > 1 ? ' over' : '') + '">' + inf.len + '/' + inf.one + ' תווים · ' + (inf.parts === 1 ? 'הודעה אחת' : inf.parts + ' הודעות') + '</span>' + cp(st, 'sms') + '</div></div>';
    }).join('') + '</div>'; else h += missing('msg');
    h += '</section>';

    /* WhatsApp */
    var WD = ['15.11', '26.11', '27.11', '28.11 · מוצ״ש', '30.11'];
    h += '<section class="sec" id="ai-wa"><h3>💬 5 הודעות וואטסאפ</h3><p class="sub">רק ללקוחות שאישרו לקבל הודעות בוואטסאפ. ' + (has('whatsapp') ? '' : 'עוד אין לך ערוץ וואטסאפ. כדאי להוסיף תיבת אישור בקופה ובהרשמה. ') + '</p>';
    if (G) h += '<div class="grid2">' + wa.map(function (w, i) {
      return '<div class="card" id="ai-wa-' + i + '"><span class="tag g">' + WD[i] + '</span><div class="wab" style="margin-top:8px"><div class="bar"><i>' + esc(ini) + '</i>' + esc(store) + '</div><div class="msgs"><div class="bub">' + esc(w.text) + '<small>10:24</small></div></div></div>' +
        '<div class="ch"><span class="note">נשלח רק למי שאישר</span>' + cp(w.text, 'whatsapp') + '</div></div>';
    }).join('') + '</div>'; else h += missing('msg');
    h += '</section>';

    /* automations */
    h += '<section class="sec" id="ai-auto"><h3>⚙️ 5 אוטומציות</h3><p class="sub">מגדירים פעם אחת, והן עובדות לבד כל הקמפיין וגם אחריו.</p>';
    if (U) h += '<div class="grid2">' + U.automations.map(function (x, i) {
      var txt = x.name + '\nטריגר: ' + x.trigger + '\nלמי: ' + x.condition + '\nמתי: ' + x.timing + '\nערוץ: ' + CHN[x.channel] + '\n\n' + x.copy;
      return '<div class="card auto" id="ai-auto-' + i + '"><h4>' + (i + 1) + '. ' + esc(x.name) + '</h4><dl><dt>טריגר</dt><dd>' + esc(x.trigger) + '</dd><dt>למי</dt><dd>' + esc(x.condition) + '</dd><dt>מתי</dt><dd>' + esc(x.timing) + '</dd><dt>ערוץ</dt><dd><span class="chn ' + x.channel + '">' + CHN[x.channel] + '</span></dd></dl>' +
        '<div class="cp2 pre">' + esc(x.copy) + '</div><div class="ch"><span></span>' + cp(txt, 'automation') + '</div></div>';
    }).join('') + '</div>'; else h += missing('ugc');
    h += '</section>';

    /* calculator */
    var VIS_MID = {a: 80, b: 500, c: 4000, d: 15000}, aov = prods.length ? prods.reduce(function (s, p) { return s + p.price; }, 0) / prods.length : 0;
    var CI = [
      ['v', 'מבקרים באתר בחודש', 'נקודת אמצע של הטווח שבחרת. כדאי לשים את המספר האמיתי', VIS_MID[a.visitors] || 500, 1],
      ['days', 'ימי הקמפיין', '7.11 עד 30.11', 24, 1],
      ['lift', 'תוספת תנועה בתקופת המבצעים (%)', 'הנחה', 20, 1],
      ['cr', 'אחוז המרה (%)', 'הנחה: 1.5%', 1.5, 0.1],
      ['aov', 'ממוצע הזמנה (₪)', 'ממוצע המחירים שהזנת', Math.round(aov), 1],
      ['atc', 'אחוז מהמבקרים שמוסיפים לעגלה (%)', 'הנחה', 6, 0.5],
      ['rec', 'אחוז מהעגלות הנטושות שחוזרות אחרי תזכורת (%)', 'הנחה', 10, 1],
      ['bsh', 'אחוז מההזמנות שלוקחות באנדל (%)', 'הנחה', 15, 1],
      ['bex', 'כמה באנדל מוסיף להזמנה (₪)', 'הנחה: חצי מממוצע ההזמנה', Math.round(aov / 2), 1],
      ['rep', 'אחוז מהקונים שקונים שוב תוך 60 יום (%)', 'הנחה, בזכות אוטומציות אחרי קנייה', 5, 1],
    ];
    h += '<section class="sec" id="ai-calc"><h3>🧮 כמה זה יכול להיות שווה לך</h3><p class="sub">כל מספר כאן הוא הנחה שאפשר לשנות. המחשבון מראה מחזור, לא רווח.</p><div class="card calc"><div class="lbl">הערכה לפי ההנחות שלך, לא התחייבות</div>' +
      CI.map(function (c) { return '<div class="r"><label for="aiC_' + c[0] + '">' + esc(c[1]) + '<small' + (c[2].indexOf('הנחה') === 0 ? ' class="as"' : '') + '>' + esc(c[2]) + '</small></label><input class="in" id="aiC_' + c[0] + '" data-c="' + c[0] + '" type="number" inputmode="decimal" min="0" step="' + c[4] + '" value="' + c[3] + '"></div>'; }).join('') +
      '<div class="out" id="aiCalcOut"></div></div></section>';

    /* Ping + CTAs */
    var waText = 'היי אביב, בניתי עם העובד AI את תוכנית הבלאק פריידיי של ' + store + '. אשמח לעזרה להפעיל אותה';
    h += '<section class="sec" id="ai-ping"><div class="ping"><span class="k">כלי שאני ממליץ עליו</span><div class="h">את האוטומציות וההודעות האלה אפשר להפעיל עם Ping AI</div>' +
      '<div class="s">עגלה נטושה, תודה אחרי קנייה, החזרת לקוחות והודעות מבצע, בוואטסאפ, SMS ומייל, למי שאישר לקבל. כרגע Ping AI זמין לחנויות Shopify.</div>' +
      '<a class="btn2' + (shop ? ' hi' : '') + '" id="aiPing" href="' + PING_URL + '" target="_blank" rel="noopener">ל-Shopify ←' + (shop ? ' <span class="yp">הפלטפורמה שלך</span>' : '') + '</a>' +
      '<button type="button" class="btn2' + (woo ? ' hi' : '') + '" id="aiWoo">ל-WordPress / WooCommerce ←' + (woo ? ' <span class="yp">הפלטפורמה שלך</span>' : '') + '</button>' +
      '<p class="ok2" id="aiWooMsg"' + (plan.woo ? '' : ' hidden') + '>הצטרפת לרשימת ההמתנה לגרסת WooCommerce. נעדכן אותך.</p></div>' +
      '<div class="ctas" style="margin-top:12px"><a class="cta2 tr" id="aiTr" href="' + TRAINING_URL + '" target="_blank" rel="noopener">🎬 הדרכת וידאו חינמית</a>' +
      '<a class="cta2 wa" id="aiWa" href="https://wa.me/' + WA + '?text=' + encodeURIComponent(waText) + '" target="_blank" rel="noopener">💬 לדבר עם אביב בוואטסאפ</a></div>' +
      '<button class="redo" type="button" id="aiRedo" style="margin-top:14px">לבנות תוכנית חדשה</button></section></div>';

    main.innerHTML = h;
    top();
    wirePlan(id, plan, prods, store, ini);
    if (!viewSent) { viewSent = true; AIX.track('BFAIPlanView', {platform: a.platform}); AIX.api('/api/bfai/act', {id: id, action: 'view'}).catch(function () {}); }
  }

  function mock(ad, i, p, store, ini, fmtv) {
    var bg = VIS[i % VIS.length], badge = ad.discount > 0 ? '<span class="dsc">-' + ad.discount + '%</span>' : '', pn = p ? '<span class="pt"><i>' + esc(ini) + '</i>' + esc(p.name) + '</span>' : '';
    if (fmtv === 'story') return '<div class="story" style="background:' + bg + '"><div class="bars"><i></i><i></i><i></i></div><div class="top"><span class="av">' + esc(ini) + '</span><span>' + esc(store) + ' <small>· ממומן</small></span></div>' +
      '<div class="mid">' + badge + '<div><span class="srb">' + esc(RIB[i]) + '</span><div class="ov">' + esc(ad.visual) + '</div>' + pn + '</div></div>' +
      '<div class="low"><p>' + esc(ad.primary) + '</p><span>︿ ' + esc(ad.cta) + '</span></div></div>';
    return '<div class="ad"><div class="top"><span class="av">' + esc(ini) + '</span><span class="nm">' + esc(store) + '<small>ממומן</small></span><span class="more">···</span></div>' +
      '<div class="vis" style="background:' + bg + '"><span class="rb">' + esc(RIB[i]) + '</span>' + badge + '<div class="in2"><div class="ov">' + esc(ad.visual) + '</div>' + pn + '</div></div>' +
      '<div class="cta"><b>' + esc(ad.headline) + '</b><span>' + esc(ad.cta) + '</span></div><div class="ics" aria-hidden="true">' + ICS + '</div><div class="tx"><b>' + esc(store) + '</b> ' + esc(ad.primary) + '</div></div>';
  }

  function wirePlan(id, plan, prods, store, ini) {
    var a = plan.answers, P = plan.parts;
    /* copy */
    main.addEventListener('click', function (e) {
      var b = e.target.closest('[data-cp]');
      if (b) {
        var it = copyStore[+b.getAttribute('data-cp')]; if (!it) return;
        copyText(it.t).then(function () { b.classList.add('done'); b.textContent = 'הועתק ✓'; setTimeout(function () { b.classList.remove('done'); b.textContent = 'העתקה'; }, 1600); });
        AIX.track('BFAICopy', {section: it.s}, {repeat: true, server: firstCopy}); firstCopy = false;
        return;
      }
      var g = e.target.closest('[data-go]');
      if (g) { var el = main.querySelector('#' + g.getAttribute('data-go')); if (el) { el.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'center'}); el.animate && el.animate([{boxShadow: '0 0 0 3px #FFD84D'}, {boxShadow: '0 0 0 0 transparent'}], {duration: 1600}); } return; }
      var nv = e.target.closest('[data-nav]');
      if (nv) { var s = main.querySelector('#' + nv.getAttribute('data-nav')); if (s) s.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'}); return; }
      var f = e.target.closest('[data-fmt]');
      if (f) { var i = +f.getAttribute('data-ad'), ad = P.ads.ads[i], fm = f.getAttribute('data-fmt'); f.parentNode.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === f); }); main.querySelector('[data-mock="' + i + '"]').innerHTML = mock(ad, i, prods[ad.product - 1] || prods[0], store, ini, fm); return; }
      var rg = e.target.closest('[data-regen]');
      if (rg) { generate(id, plan, [rg.getAttribute('data-regen')]); }
    });
    /* sticky nav highlight */
    if (window.IntersectionObserver) {
      var navs = main.querySelectorAll('[data-nav]'), io = new IntersectionObserver(function (en) {
        en.forEach(function (x) { if (x.isIntersecting) navs.forEach(function (n) { var on = n.getAttribute('data-nav') === x.target.id; n.classList.toggle('on', on); if (on && n.scrollIntoView && n.parentNode.scrollWidth > n.parentNode.clientWidth) n.parentNode.scrollTo({left: n.offsetLeft - n.parentNode.clientWidth / 2 + n.clientWidth / 2, behavior: 'smooth'}); }); });
      }, {rootMargin: '-45% 0px -50% 0px'});
      main.querySelectorAll('.sec').forEach(function (s) { io.observe(s); });
    }
    /* bundles */
    var bBox = main.querySelector('#aiBnd');
    function drawBundles() {
      if (!bBox) return;
      var o = {vat: main.querySelector('#aiVat').checked, extra: num(main.querySelector('#aiExtra').value) || 0, costs: []};
      main.querySelectorAll('[data-cost]').forEach(function (inp) { o.costs[+inp.getAttribute('data-cost')] = String(inp.value).trim() === '' ? '' : num(inp.value); });
      var VD = {good: 'כדאי ✓', mid: 'גבולי', bad: 'לא כדאי', unk: 'להשלים עלות'};
      bBox.innerHTML = P.msg.bundles.map(function (b, i) {
        var r = bundleCalc(b, prods, o);
        var items = r.rows.map(function (x) { return '<li>' + (x.qty > 1 ? x.qty + ' × ' : '') + '<bdi>' + esc(x.p.name) + '</bdi> · ' + nis(x.p.price) + (x.cost == null ? ' · <b style="color:#FFCB5C">להשלים עלות</b>' : '') + '</li>'; }).join('');
        var rows = '<tr><td>מחיר רגיל</td><td>' + nis(r.list) + '</td></tr><tr><td>הנחה ' + b.discount + '%</td><td>-' + nis(r.disc) + '</td></tr><tr class="big"><td>מחיר החבילה</td><td>' + nis(r.price) + '</td></tr>';
        if (o.vat) rows += '<tr><td>בלי מע״מ</td><td>' + nis(r.net) + '</td></tr>';
        rows += r.known ? '<tr><td>עלות סחורה' + (o.extra ? ' + עלות נוספת' : '') + '</td><td>-' + nis(r.cost) + '</td></tr><tr class="big"><td>רווח גולמי</td><td>' + nis(r.profit) + ' · ' + Math.round(r.margin) + '%</td></tr>'
          : '<tr><td>עלות סחורה</td><td>להשלים עלות</td></tr><tr><td colspan="2" style="text-align:right;font-weight:600;direction:rtl;white-space:normal">' + 'החישוב: מחיר החבילה' + (o.vat ? ' בלי מע״מ' : '') + ' פחות עלות כל המוצרים בחבילה. משלימים עלות למעלה והתוצאה מופיעה כאן.</td></tr>';
        return '<div class="card" id="ai-bnd-' + i + '"><div style="display:flex;justify-content:space-between;gap:8px;align-items:flex-start"><h4 style="margin:0">' + esc(b.name) + '</h4><span class="vd ' + r.v + '">' + VD[r.v] + '</span></div>' +
          '<p class="meta" style="margin:4px 0 8px">איפה להציג: ' + esc(b.where) + '</p><ul class="its">' + items + '</ul><p style="font-size:14px;color:#ffffffb8;margin-top:6px">' + esc(b.why) + '</p><table class="bt">' + rows + '</table>' +
          (r.known && r.fullProfit != null ? '<p class="note" style="text-align:right;margin-top:6px">לעומת אותם מוצרים במחיר מלא: רווח גולמי ' + nis(r.fullProfit) + '</p>' : '') +
          '<div class="ch"><span></span><button type="button" class="cp" data-bcp="' + i + '">העתקה</button></div></div>';
      }).join('');
      bBox.querySelectorAll('[data-bcp]').forEach(function (btn) {
        var b = P.msg.bundles[+btn.getAttribute('data-bcp')], r = bundleCalc(b, prods, o);
        btn.onclick = function () { copyText(b.name + '\n' + r.rows.map(function (x) { return (x.qty > 1 ? x.qty + ' × ' : '') + x.p.name; }).join(' + ') + '\nמחיר רגיל ' + nis(r.list) + ', מחיר חבילה ' + nis(r.price) + ' (' + b.discount + '% הנחה)\n' + b.why).then(function () { btn.classList.add('done'); btn.textContent = 'הועתק ✓'; setTimeout(function () { btn.classList.remove('done'); btn.textContent = 'העתקה'; }, 1600); }); AIX.track('BFAICopy', {section: 'bundle'}, {repeat: true, server: firstCopy}); firstCopy = false; };
      });
    }
    if (bBox) { drawBundles(); main.querySelector('#aiCosts').addEventListener('input', drawBundles); main.querySelector('#aiCosts').addEventListener('change', drawBundles); }
    /* calculator */
    var out = main.querySelector('#aiCalcOut');
    function calc() {
      var v = {}; main.querySelectorAll('[data-c]').forEach(function (i) { v[i.getAttribute('data-c')] = Math.max(0, num(i.value) || 0); });
      var visits = v.v * v.days / 30 * (1 + v.lift / 100), orders = visits * v.cr / 100, base = orders * v.aov;
      var aband = Math.max(0, visits * v.atc / 100 - orders), recO = aband * v.rec / 100, recR = recO * v.aov;
      var bun = orders * v.bsh / 100 * v.bex, repR = (orders + recO) * v.rep / 100 * v.aov, tot = recR + bun + repR;
      var L = function (t, s, n) { return '<div class="l"><span>' + t + '<small>' + s + '</small></span><b>' + n + '</b></div>'; };
      out.innerHTML = L('ביקורים בתקופה', fmt(v.v) + ' × ' + v.days + '/30 × ' + (1 + v.lift / 100).toFixed(2), fmt(visits)) +
        L('הזמנות בלי שום תוספת', 'ביקורים × ' + v.cr + '%', fmt(orders)) +
        L('מחזור בסיס בתקופה', 'הזמנות × ' + nis(v.aov), nis(base)) +
        L('עגלות נטושות', 'ביקורים × ' + v.atc + '% פחות ההזמנות', fmt(aband)) +
        L('+ הזמנות שחוזרות מתזכורת עגלה', fmt(aband) + ' × ' + v.rec + '% × ' + nis(v.aov), nis(recR)) +
        L('+ תוספת מבאנדלים', 'הזמנות × ' + v.bsh + '% × ' + nis(v.bex), nis(bun)) +
        L('+ קנייה חוזרת תוך 60 יום', '(הזמנות + חוזרות) × ' + v.rep + '% × ' + nis(v.aov), nis(repR)) +
        '<div class="l tot"><span>תוספת אפשרית למחזור</span><b>' + nis(tot) + '</b></div><p class="note" style="text-align:right">הערכה לפי ההנחות שלך, לא התחייבות. מחזור, לא רווח. משנים מספר למעלה והחישוב מתעדכן.</p>';
    }
    main.querySelector('.calc').addEventListener('input', calc); calc();
    /* link, ping, woo, ctas */
    main.querySelector('#aiLink').onclick = function () { var b = this; copyText((location.origin + location.pathname).replace(/\/$/, '') + '?plan=' + id).then(function () { b.classList.add('done'); b.textContent = 'הקישור הועתק ✓'; setTimeout(function () { b.classList.remove('done'); b.textContent = '🔗 העתקת הקישור לתוכנית'; }, 1800); }); };
    main.querySelector('#aiPing').addEventListener('click', function () { AIX.track('BFAIPingClick', {platform: a.platform}, {repeat: true}); AIX.api('/api/bfai/act', {id: id, action: 'ping'}).catch(function () {}); });
    main.querySelector('#aiWoo').onclick = function () {
      var msg = main.querySelector('#aiWooMsg'); msg.hidden = false; this.disabled = true;
      if (!plan.woo) { plan.woo = true; AIX.track('BFAIWooWaitlist', {platform: a.platform}); AIX.api('/api/bfai/act', {id: id, action: 'woo'}).catch(function () {}); }
    };
    if (plan.woo) main.querySelector('#aiWoo').disabled = true;
    main.querySelector('#aiTr').addEventListener('click', function () { AIX.track('BFAITrainingClick', {platform: a.platform}); });
    main.querySelector('#aiWa').addEventListener('click', function () { AIX.track('BFAIWhatsAppClick', {platform: a.platform}); });
    main.querySelector('#aiRedo').onclick = function () { save('bfai_res', null); viewSent = false; try { history.replaceState(null, '', location.pathname); } catch (e) {} S.a = JSON.parse(JSON.stringify(plan.answers)); S.a.products = (S.a.products || []).map(function (p) { return {name: p.name, price: p.price, mode: p.mode || 'cost', cost: p.cost != null ? p.cost : '', margin: p.margin != null ? p.margin : ''}; }); S.i = 0; persist(); started = false; main.className = 'wrap'; intro(); };
  }
  function copyText(t) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(t).catch(function () { return legacy(t); });
    return Promise.resolve(legacy(t));
    function legacy(s) { var ta = document.createElement('textarea'); ta.value = s; ta.setAttribute('readonly', ''); ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove(); }
  }

  /* ---------- load a saved plan ---------- */
  function openPlan(id) {
    setDark(true); main.className = 'wrap';
    main.innerHTML = '<div class="scr"><div class="gen"><div class="bot" aria-hidden="true">' + BOT + '</div><h2>טוען את התוכנית…</h2></div></div>';
    AIX.api('/api/bfai/plan?id=' + encodeURIComponent(id), null, 12000).then(function (r) {
      if (!r.ok) { save('bfai_res', null); try { history.replaceState(null, '', location.pathname); } catch (e) {} return intro(); }
      var plan = {answers: r.answers, parts: r.parts || {}, woo: r.woo};
      save('bfai_res', {id: id, t: Date.now()}); setUrl(id);
      var missingP = PARTS.filter(function (p) { return !plan.parts[p]; });
      if (!missingP.length) return renderPlan(id, plan);
      if (r.status === 'capped' && !Object.keys(plan.parts).length) return genFail(id, plan, true);
      generate(id, plan);   // finish what is missing (or wait for parts another request is still writing)
    }).catch(function () {
      main.innerHTML = '<div class="scr"><div class="gen"><h2>לא הצלחנו לטעון את התוכנית</h2><p class="hint">בודקים את החיבור ומנסים שוב.</p><button class="btn sm" type="button" id="aiRe" style="max-width:320px">לנסות שוב ←</button></div></div>';
      main.querySelector('#aiRe').onclick = function () { openPlan(id); };
    });
  }

  /* ---------- privacy modal ---------- */
  var mod = app.querySelector('#aiPriv'), mLast;
  app.addEventListener('click', function (ev) { var b = ev.target.closest && ev.target.closest('[data-open]'); if (b) { mLast = b; mod.hidden = false; mod.querySelector('[data-close]').focus(); } });
  function closeMod() { mod.hidden = true; if (mLast) mLast.focus(); }
  mod.addEventListener('click', function (ev) { if (ev.target === mod || ev.target.hasAttribute('data-close')) closeMod(); });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && !mod.hidden) closeMod(); });

  window.addEventListener('popstate', function (ev) {
    if (app.classList.contains('dark')) return;
    var s = ev.state && ev.state.ai;
    if (typeof s === 'number' && s >= 0 && s < N) step(s, true, true);
    else if (s == null) intro();
  });

  /* ---------- start ---------- */
  AIX.captureUtm();
  AIX.fb('PageView');
  var qp = (location.search.match(/[?&]plan=([A-Za-z0-9]{16,40})/) || [])[1], saved = load('bfai_res');
  if (qp) openPlan(qp);
  else if (saved && saved.id) openPlan(saved.id);
  else intro();
})();
