'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "https://capriele.github.io/localintap_web/version.json": "daffd5d1ab1215ce65ea3973fecbb7c3",
"index.html": "5aba9522fbef96e1cacd0613ab3aa999",
"/": "5aba9522fbef96e1cacd0613ab3aa999",
"https://capriele.github.io/localintap_web/main.dart.js": "20daf55566d783ddac060a3a01513064",
"https://capriele.github.io/localintap_web/favicon.png": "5dc17ebcd71cff72fe575d3eaf858b66",
"https://capriele.github.io/localintap_web/sql-wasm.js": "8ffd545d7b00ab4de0b2d0492f555ac7",
"https://capriele.github.io/localintap_web/icons/Icon-192.png": "bd2c88dbec99b90652ae0646817e8e32",
"https://capriele.github.io/localintap_web/icons/Icon-512.png": "f2911264b7c25da55f443379dae797f0",
"https://capriele.github.io/localintap_web/manifest.json": "32c7c424122ac6e4d71a919a2a98f879",
"https://capriele.github.io/localintap_web/assets/images/instagram.png": "1d07e1b2f15c58a88ef4a1a63ce3c2b5",
"https://capriele.github.io/localintap_web/assets/images/flutter.png": "a877907a6e70c371c669204c6840471f",
"https://capriele.github.io/localintap_web/assets/images/qr-code-icon.jpg": "303bfd2b27b4cfdc4618aca014218330",
"https://capriele.github.io/localintap_web/assets/images/facebook.png": "37ad67be1f6773fd2d4eab5f0a750a6a",
"https://capriele.github.io/localintap_web/assets/AssetManifest.json": "419ef0cd609e1515d8ce737c9adf68d2",
"https://capriele.github.io/localintap_web/assets/NOTICES": "0b840ef09c10196a27438306cb5e9e7b",
"https://capriele.github.io/localintap_web/assets/1FontManifest.json": "a342797f9a2500850c04f393e79df7ba",
"https://capriele.github.io/localintap_web/assets/FontManifest.json": "cd11211b47613ecc478c6c5d617221d3",
"https://capriele.github.io/localintap_web/assets/packages/libphonenumber_plugin/js/libphonenumber.js": "8578efe7b5232496cd05944ae9ae8ce8",
"https://capriele.github.io/localintap_web/assets/packages/libphonenumber_plugin/js/stringbuffer.js": "5d8ac81dc841740b2a94e8daa7be8027",
"https://capriele.github.io/localintap_web/assets/packages/libphonenumber_plugin/assets/js/libphonenumber.js": "8578efe7b5232496cd05944ae9ae8ce8",
"https://capriele.github.io/localintap_web/assets/packages/libphonenumber_plugin/assets/js/stringbuffer.js": "5d8ac81dc841740b2a94e8daa7be8027",
"https://capriele.github.io/localintap_web/assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"https://capriele.github.io/localintap_web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/af.png": "220f72ed928d9acca25b44793670a8dc",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cy.png": "f7175e3218b169a96397f93fa4084cac",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/aq.png": "216d1b34c9e362af0444b2e72a6cd3ce",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ag.png": "6094776e548442888a654eb7b55c9282",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ms.png": "ae3dde287cba609de4908f78bc432fc0",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mq.png": "710f4e8f862a155bfda542d747f6d8a6",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/as.png": "5e47a14ff9c1b6deea5634a035385f80",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bh.png": "264498589a94e5eeca22e56de8a4f5ee",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tv.png": "04680395c7f89089e8d6241ebb99fb9d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/aw.png": "e22cbb318a7070c92f2ab4bfdc2b0118",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bz.png": "756b19ec31787dc4dac6cc19e223f751",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bm.png": "3c19361619761c96a0e96aabadb126eb",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bo.png": "15c5765e4ad6f6d84a9a9d10646a6b16",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ck.png": "f390a217a5e90aee35f969f2ed7c185f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/au.png": "9babd0456e7f28e456b24206d13d7d8b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/nz.png": "7587f27e4fe2b61f054ae40a59d2c9e8",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tc.png": "036010ddcce73f0f3c5fd76cbe57b8fb",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gs.png": "14948849c313d734e2b9e1059f070a9b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gb-nir.png": "3eb22f21d7c402d315e10948fd4a08cc",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sv.png": "38809d2409ae142c87618709e4475b0f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/kr.png": "79d162e210b8711ae84e6bd7a370cf70",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gf.png": "83c6ef012066a5bfc6e6704d76a14f40",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pn.png": "ab07990e0867813ce13b51085cd94629",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/do.png": "fae653f4231da27b8e4b0a84011b53ad",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gb.png": "ad7fed4cea771f23fdf36d93e7a40a27",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gu.png": "13fad1bad191b087a5bb0331ef5de060",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/hm.png": "e5eeb261aacb02b43d76069527f4ff60",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/dm.png": "e4b9f0c91ed8d64fe8cb016ada124f3d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/qa.png": "bcb7cfa9fa185e00720f901c4a522531",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pr.png": "d551174a2b132a99c12d21ba6171281d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/iq.png": "8e9600510ae6ebd2023e46737ca7cd02",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ky.png": "3d1cbb9d896b17517ef6695cf9493d05",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sh.png": "9c0678557394223c4eb8b242770bacd7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/is.png": "907840430252c431518005b562707831",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/fk.png": "a694b40c9ded77e33fc5ec43c08632ee",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/fj.png": "214df51718ad8063b93b2a3e81e17a8b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ki.png": "4d0b59fe3a89cd0c8446167444b07548",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ao.png": "1c12ddef7226f1dd1a79106baee9f640",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/vg.png": "6855eed44c0ed01b9f8fe28a20499a6d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mx.png": "8697753210ea409435aabfb42391ef85",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/al.png": "f27337407c55071f6cbf81a536447f9e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cr.png": "08cd857f930212d5ed9431d5c1300518",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/nu.png": "4a10304a6f0b54592985975d4e18709f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/xk.png": "980a56703da8f6162bd5be7125be7036",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ai.png": "d6ea69cfc53b925fee020bf6e3248ca8",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ca.png": "81e2aeafc0481e73f76dc8432429b136",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/za.png": "7687ddd4961ec6b32f5f518887422e54",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"https://capriele.github.io/localintap_web/assets/packages/intl_phone_number_input/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"https://capriele.github.io/localintap_web/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ba00886256c29a890fb3841a7175b634",
"https://capriele.github.io/localintap_web/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b2614d59b4646078440f7aba5e3a45b4",
"https://capriele.github.io/localintap_web/assets/packages/font_awesome_flutter/lib/fonts/fa-light-300.ttf": "2cbba30b30ee00b9e4108ba8a373afb9",
"https://capriele.github.io/localintap_web/assets/packages/font_awesome_flutter/lib/fonts/fa-duotone-900.ttf": "a2da25e8a0cb09414adfd1d5d470f623",
"https://capriele.github.io/localintap_web/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "7b31967daf0c01c330f5bb9766d9c79e",
"https://capriele.github.io/localintap_web/assets/fonts/Samantha.ttf": "26c9a667c68dee258ba1dfed9219994d",
"https://capriele.github.io/localintap_web/assets/fonts/MaterialIcons-Regular.ttf": "5022f339b6bade069af7b2d79670e2b2",
"https://capriele.github.io/localintap_web/assets/fonts/Futura.ttf": "6bdad2171386bb586d2bc0fe719abf2d",
"https://capriele.github.io/localintap_web/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"https://capriele.github.io/localintap_web/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"https://capriele.github.io/localintap_web/assets/fonts/TimesNewRoman.ttf": "3f7dc90a1651b35e69718bbf38ed265a",
"https://capriele.github.io/localintap_web/assets/fonts/Gatwick.ttf": "4bdb2aada471bd81158ccfcefab64582",
"https://capriele.github.io/localintap_web/assets/assets/icon_intro_2.png": "a54ae0d610a068789d7fffd94e576835",
"https://capriele.github.io/localintap_web/assets/assets/icon_intro_1.png": "aabf6c32f42ed17ba1d628d0eba7caba",
"https://capriele.github.io/localintap_web/assets/assets/google.jpg": "b6f20795941e323a9295e4d745971bc0",
"https://capriele.github.io/localintap_web/assets/assets/flare/Favorite.flr": "f3dc264483727f0d001ccd10e9ceb5f8",
"https://capriele.github.io/localintap_web/assets/assets/flare/Like.flr": "59695761c88a35f2f443aed6ee6b37b9",
"https://capriele.github.io/localintap_web/sql-wasm.wasm": "e96391fc594b5869546a3cdac4e76b10"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"https://capriele.github.io/localintap_web/main.dart.js",
"index.html",
"https://capriele.github.io/localintap_web/assets/NOTICES",
"https://capriele.github.io/localintap_web/assets/AssetManifest.json",
"https://capriele.github.io/localintap_web/assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
