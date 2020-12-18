
var st_skillData = {
 	$00 : new Data("薬草学",					'未',	"生活",			1,	1,	"HEG"),
	$01 : new Data("ポーション調合",			'未',	"生活",			1,	2,	"HEG"),
	$02 : new Data("木工",						'未',	"生活",			2,	6,	"HEG"),
	$03 : new Data("ハンディクラフト",			'未',	"生活",			2,	2,	"HEG"),
	$04 : new Data("裁縫",						'未',	"生活",			1,	7,	"HEG"),
	$05 : new Data("羊毛狩り",					'未',	"生活",			2,	8,	"HEG"),
	$06 : new Data("紡織",						'未',	"生活",			1,	8,	"HEG"),
	$07 : new Data("鉱物採集",					'未',	"生活",			1,	3,	"HEG"),
	$08 : new Data("採鉱",						'未',	"生活",			1,	4,	"HEG"),
	$09 : new Data("鍛治",						'未',	"生活",			1,	5,	"HEG"),
	$0A : new Data("精錬",						'未',	"生活",			1,	6,	"HEG"),
	$0B : new Data("料理",						'未',	"生活",			2,	3,	"HEG"),
	$0C : new Data("卵採集",					'未',	"生活",			2,	9,	"HEG"),
	$0D : new Data("キノコ採集",				'未',	"生活",			3,	0,	"HEG"),
	$0E : new Data("乳搾り",					'未',	"生活",			3,	1,	"HEG"),
	$0F : new Data("収穫",						'未',	"生活",			3,	2,	"HEG"),
	$10 : new Data("鍬さばき",					'未',	"生活",			3,	3,	"HEG"),
	$11 : new Data("ワイン製造",				'未',	"生活",			2,	7,	"HEG"),
	$12 : new Data("メイキングマスタリ",		'未',	"生活",			1,	0,	"HEG"),
	$13 : new Data("釣り",						'未',	"生活",			2,	4,	"HEG"),
	$14 : new Data("休憩",						'未',	"生活",			1,	9,	"HEG"),
	$15 : new Data("キャンプファイア",			'未',	"生活",			2,	0,	"HEG"),
	$16 : new Data("応急治療",					'未',	"生活",			2,	1,	"HEG"),
	$17 : new Data("野生動物調教",				'未',	"生活",			2,	5,	"HEG"),
	$18 : new Data("変身マスタリ",				'未',	"生活",			3,	5,	"HEG"),
	$19 : new Data("交易マスタリ",				'未',	"生活",			3,	4,	"HEG"),
	$1A : new Data("スマッシュ",				'未',	"戦闘",			3,	6,	"HEG"),
	$1B : new Data("ディフェンス",				'未',	"戦闘",			3,	8,	"HEG"),
	$1C : new Data("カウンターアタック",		'未',	"戦闘",			3,	7,	"HEG"),
	$1D : new Data("ダウンアタック",			'未',	"戦闘",			4,	0,	"HEG"),
	$1E : new Data("ウィンドミル",				'未',	"戦闘",			3,	9,	"HEG"),
	$1F : new Data("ファイナルヒット",			'未',	"戦闘",			4,	2,	"H"),
	$20 : new Data("ストンプ",					'未',	"戦闘",			13,	9,	"G"),
	$21 : new Data("ウィンドブレイカー",		'未',	"戦闘",			14,	0,	"G"),
	$22 : new Data("タウント",					'未',	"戦闘",			14,	1,	"G"),
	$23 : new Data("ランスチャージ",			'未',	"戦闘",			4,	6,	"HG"),
	$24 : new Data("ランスカウンター",			'未',	"戦闘",			4,	5,	"HG"),
	$25 : new Data("突進",						'未',	"戦闘",			4,	1,	"HEG"),
	$26 : new Data("回避",						'未',	"戦闘",			4,	3,	"HEG"),
	$27 : new Data("分身術",					'未',	"隠し才能",		4,	4,	"HEG"),
	$28 : new Data("ゴールドストライク",		'未',	"戦闘",			6,	0,	"HEG"),
	$29 : new Data("アタック",					'未',	"戦闘",			5,	2,	"HEG"),
	$2A : new Data("クリティカルヒット",		'未',	"戦闘",			5,	3,	"HEG"),
	$2B : new Data("ソードマスタリ",			'未',	"戦闘",			5,	4,	"HEG"),
	$2C : new Data("プラントマスタリ",			'未',	"戦闘",			5,	6,	"HEG"),
	$2D : new Data("アックスマスタリ",			'未',	"戦闘",			5,	5,	"HEG"),
	$2E : new Data("ランスマスタリ",			'未',	"戦闘",			5,	9,	"HG"),
	$2F : new Data("レンジアタック",			'未',	"戦闘",			4,	7,	"HE"),
	$30 : new Data("マグナムショット",			'未',	"戦闘",			4,	8,	"HE"),
	$31 : new Data("サポートショット",			'未',	"戦闘",			4,	9,	"HE"),
	$32 : new Data("クラッシュショット",		'未',	"戦闘",			5,	1,	"HE"),
	$33 : new Data("アローリボルバー",			'未',	"戦闘",			13,	7,	"HE"),
	$34 : new Data("ミラージュミサイル",		'未',	"戦闘",			14,	2,	"E"),
	$35 : new Data("ファイナルショット",		'未',	"戦闘",			14,	3,	"E"),
	$36 : new Data("投擲",						'未',	"戦闘",			14,	4,	"G"),
	$37 : new Data("ボウマスタリ",				'未',	"戦闘",			5,	7,	"HE"),
	$38 : new Data("クロスボウマスタリ",		'未',	"戦闘",			5,	8,	"HE"),
	$39 : new Data("アイスボルト",				'未',	"魔法",			6,	1,	"HEG"),
	$3A : new Data("ファイアボルト",			'未',	"魔法",			6,	3,	"HEG"),
	$3B : new Data("ライトニングボルト",		'未',	"魔法",			6,	2,	"HEG"),
	$3C : new Data("アイススピア",				'未',	"魔法",			6,	4,	"HEG"),
	$3D : new Data("ファイアボール",			'未',	"魔法",			6,	6,	"HEG"),
	$3E : new Data("サンダー",					'未',	"魔法",			6,	5,	"HEG"),
	$3F : new Data("ブレイズ",					'未',	"魔法",			6,	8,	"HEG"),
	$40 : new Data("ヘイルストーム",			'未',	"魔法",			6,	7,	"HEG"),
	$41 : new Data("アイスマスタリ",			'未',	"魔法",			7,	5,	"HEG"),
	$42 : new Data("ファイアマスタリ",			'未',	"魔法",			7,	4,	"HEG"),
	$43 : new Data("ライトニングマスタリ",		'未',	"魔法",			7,	6,	"HEG"),
	$44 : new Data("ボルトマスタリ",			'未',	"魔法",			7,	7,	"HEG"),
	$45 : new Data("マジックマスタリ",			'未',	"魔法",			7,	2,	"HEG"),
	$46 : new Data("ボルト魔法の合体",			'未',	"魔法",			7,	8,	"HEG"),
	$47 : new Data("ヒーリング",				'未',	"魔法",			7,	1,	"HEG"),
	$48 : new Data("パーティヒーリング",		'未',	"魔法",			7,	3,	"HEG"),
	$49 : new Data("マナシールド",				'未',	"魔法",			8,	3,	"HEG"),
	$4A : new Data("アイスMS",					'未',	"魔法",			8,	0,	"HEG"),
	$4B : new Data("ファイアMS",				'未',	"魔法",			7,	9,	"HEG"),
	$4C : new Data("ライトニングMS",			'未',	"魔法",			8,	1,	"HEG"),
	$4D : new Data("ナチュラルMS",				'未',	"魔法",			8,	2,	"HEG"),
	$4E : new Data("メディテーション",			'未',	"魔法",			6,	9,	"HEG"),
	$4F : new Data("エンチャント",				'未',	"魔法",			7,	0,	"HEG"),
	$50 : new Data("合成",						'未',	"錬金術",		11,	4,	"HEG"),
	$51 : new Data("分解",						'未',	"錬金術",		11,	5,	"HEG"),
	$52 : new Data("金属変換",					'未',	"錬金術",		11,	6,	"HEG"),
	$53 : new Data("レインキャスティング",		'未',	"錬金術",		13,	4,	"HEG"),
	$54 : new Data("防護壁",					'未',	"錬金術",		12,	1,	"HEG"),
	$55 : new Data("マナフォーミング",			'未',	"錬金術",		11,	7,	"HEG"),
	$56 : new Data("ゴーレム錬成",				'未',	"錬金術",		12,	2,	"HEG"),
	$57 : new Data("ウォーターキャノン",		'未',	"錬金術",		11,	9,	"HEG"),
	$58 : new Data("ヒートバスター",			'未',	"錬金術",		13,	2,	"HEG"),
	$59 : new Data("ウィンドブラスト",			'未',	"錬金術",		11,	8,	"HEG"),
	$5A : new Data("サンドバースト",			'未',	"錬金術",		12,	0,	"HEG"),
	$5B : new Data("フローズンブラスト",		'未',	"錬金術",		13,	3,	"HEG"),
	$5C : new Data("フレイマー",				'未',	"錬金術",		12,	9,	"HEG"),
	$5D : new Data("スパーク",					'未',	"錬金術",		13,	5,	"HEG"),
	$5E : new Data("チェーンシリンダー",		'未',	"錬金術",		13,	1,	"HEG"),
	$5F : new Data("ライフドレイン",			'未',	"錬金術",		13,	0,	"HEG"),
	$60 : new Data("錬成マスタリ",				'未',	"錬金術",		12,	7,	"HEG"),
	$61 : new Data("アルケミマスタリ",			'未',	"錬金術",		12,	3,	"HEG"),
	$62 : new Data("ウォーターアルケミマス",	'未',	"錬金術",		12,	4,	"HEG"),
	$63 : new Data("ファイアアルケミマスタ",	'未',	"錬金術",		12,	8,	"HEG"),
	$64 : new Data("ウィンドアルケミマスタ",	'未',	"錬金術",		12,	6,	"HEG"),
	$65 : new Data("アースアルケミマスタリ",	'未',	"錬金術",		12,	5,	"HEG"),
	$66 : new Data("ダッシュパンチ",			'未',	"格闘術",		9,	6,	"HEG"),
	$67 : new Data("チャージングフィスト",		'未',	"格闘術",		9,	9,	"HEG"),
	$68 : new Data("スクリューアッパー",		'未',	"格闘術",		10,	0,	"HEG"),
	$69 : new Data("サマーソールト",			'未',	"格闘術",		9,	7,	"HEG"),
	$6A : new Data("パウンディング",			'未',	"格闘術",		9,	8,	"HEG"),
	$6B : new Data("ドロップキック",			'未',	"格闘術",		10,	1,	"HEG"),
	$6C : new Data("バックステップ",			'未',	"格闘術",		10,	3,	"HEG"),
	$6D : new Data("ナックルマスタリ",			'未',	"格闘術",		9,	4,	"HEG"),
	$6E : new Data("チェーンマスタリ",			'未',	"格闘術",		9,	5,	"HEG"),
	$6F : new Data("リストア",					'未',	"格闘術",		10,	2,	"HEG"),
	$70 : new Data("音楽知識",					'未',	"音楽",			9,	3,	"HEG"),
	$71 : new Data("楽器演奏",					'未',	"音楽",			8,	4,	"HEG"),
	$72 : new Data("作曲",						'未',	"音楽",			8,	6,	"HEG"),
	$73 : new Data("幻惑の演奏",				'未',	"音楽",			9,	1,	"HEG"),
	$74 : new Data("子守唄",					'未',	"音楽",			8,	7,	"HEG"),
	$75 : new Data("忍耐の歌",					'未',	"音楽",			8,	8,	"HEG"),
	$76 : new Data("戦場の序曲",				'未',	"音楽",			8,	9,	"HEG"),
	$77 : new Data("豊作の歌",					'未',	"音楽",			9,	0,	"HEG"),
	$78 : new Data("ヴィヴァーチェ",			'未',	"音楽",			9,	2,	"HEG"),
	$79 : new Data("行進曲",					'未',	"音楽",			13,	6,	"HEG"),
	$7A : new Data("メロディーショック",		'未',	"音楽",			8,	5,	"HEG"),
	$7B : new Data("ワイヤープーリング",		'未',	"人形術",		10,	4,	"HEG"),
	$7C : new Data("ワイヤーバインディング",	'未',	"人形術",		10,	5,	"HEG"),
	$7D : new Data("ピエロマリオネット",		'未',	"人形術",		10,	6,	"HEG"),
	$7E : new Data("コロッサスマリオネット",	'未',	"人形術",		10,	7,	"HEG"),
	$7F : new Data("マリオネット操縦術",		'未',	"人形術",		10,	8,	"HEG"),
	$80 : new Data("1幕：偶然の衝突",			'未',	"人形術",		10,	9,	"HEG"),
	$81 : new Data("2幕：湧き出る怒り",			'未',	"人形術",		11,	0,	"HEG"),
	$82 : new Data("4幕：嫉妬の鬼",				'未',	"人形術",		11,	1,	"HEG"),
	$83 : new Data("6幕：誘惑の罠",				'未',	"人形術",		11,	2,	"HEG"),
	$84 : new Data("7幕：狂乱の疾走",			'未',	"人形術",		11,	3,	"HEG"),
	$85 : new Data("9幕：目覚める命",			'未',	"人形術",		13,	8,	"HEG"),
	$86 : new Data("精霊実体化",				'未',	"戦闘",			5,	0,	"HEG"),
	$87 : new Data("ショックウェーブ",			'未',	"隠し才能",		14,	8,	"HEG"),
	$88 : new Data("バーサーク",				'未',	"隠し才能",		14,	9,	"HEG"),
	$89 : new Data("カウンターパンチ",			'未',	"隠し才能",		14,	6,	"HEG"),
	$8A : new Data("スパイダーショット",		'未',	"隠し才能",		14,	5,	"HEG"),
	$8B : new Data("ポーション中毒",			'未',	"隠し才能",		14,	7,	"HEG"),
	$8C : new Data("ヒルウェン工学",			'未',	"生活",			15,	1,	"HEG"),
	$8D : new Data("希少鉱物学",				'未',	"生活",			15,	0,	"HEG"),
	$8E : new Data("マジッククラフト",			'未',	"生活",			15,	3,	"HEG"),
	$8F : new Data("シリエン生態学",			'未',	"生活",			15,	2,	"HEG"),
	$90 : new Data("デュアルガンマスタリ",		'未',	"デュアルガン",	15,	4,	"HEG"),
	$91 : new Data("リロード",					'未',	"デュアルガン",	15,	5,	"HEG"),
	$92 : new Data("クローザー",				'未',	"デュアルガン",	15,	6,	"HEG"),
	$93 : new Data("ファーアウェイ",			'未',	"デュアルガン",	15,	7,	"HEG"),
	$94 : new Data("シューティングラッシュ",	'未',	"デュアルガン",	15,	8,	"HEG"),
	$95 : new Data("バレットストーム",			'未',	"デュアルガン",	15,	9,	"HEG"),
	$96 : new Data("フレンジー",				'未',	"デュアルガン",	16,	0,	"HEG"),
	$97 : new Data("クロスバスター",			'未',	"デュアルガン",	16,	1,	"HEG"),
	$98 : new Data("マジックウェポンマスタ",	'未',	"魔法",			16,	2,	"HEG"),
	$99 : new Data("インスタントキャスティ",	'未',	"魔法",			16,	3,	"HEG"),
	$9A : new Data("ムービングキャスティン",	'未',	"魔法",			16,	4,	"HEG"),
	$9B : new Data("メテオストライク",			'未',	"魔法",			16,	5,	"HEG"),
	$9C : new Data("歌",						'未',	"音楽",			16,	6,	"HEG"),
	$9D : new Data("アンコール",				'未',	"音楽",			16,	7,	"HEG"),
	$9E : new Data("幻惑のコーラス",			'未',	"音楽",			16,	8,	"HEG"),
	$9F : new Data("シールドマスタリ",			'未',	"戦闘",			16,	9,	"HEG"),
	$A0 : new Data("ヘビーアーマーマスタリ",	'未',	"戦闘",			17,	0,	"HEG"),
	$A1 : new Data("ライトアーマーマスタリ",	'未',	"戦闘",			17,	1,	"HEG"),
	$A2 : new Data("ガードシリンダーマスタ",	'未',	"錬金術",		17,	2,	"HEG"),
	$A3 : new Data("ヒュドラ錬成",				'未',	"錬金術",		17,	3,	"HEG"),
	$A4 : new Data("ゴールデンタイム",			'未',	"錬金術",		17,	4,	"HEG"),
	$A5 : new Data("エレメンタルウェーブ",		'未',	"錬金術",		17,	5,	"HEG"),
	$A6 : new Data("フェスティバルフード",		'未',	"生活",			17,	6,	"HEG"),
	$A7 : new Data("材料探索",					'未',	"生活",			17,	7,	"HEG"),
	$A8 : new Data("フードマスタリ",			'未',	"生活",			17,	8,	"HEG"),
	$A9 : new Data("探検マスタリ",				'未',	"生活",			17,	9,	"HEG"),
	$AA : new Data("遺物調査",					'未',	"生活",			18,	0,	"HEG"),
	$AB : new Data("危機脱出",					'未',	"戦闘",			18,	1,	"HEG"),
	$AC : new Data("手裏剣マスタリ",			'未',	"忍術",			18,	2,	"HEG"),
	$AD : new Data("螺旋斬",					'未',	"忍術",			18,	3,	"HEG"),
	$AE : new Data("闇討ち・旋",				'未',	"忍術",			18,	4,	"HEG"),
	$AF : new Data("大地陣",					'未',	"忍術",			18,	5,	"HEG"),
	$B0 : new Data("乱れ苦無",					'未',	"忍術",			18,	6,	"HEG"),
	$B1 : new Data("朧煙幕",					'未',	"忍術",			18,	7,	"HEG"),
	$B2 : new Data("影縛り",					'未',	"忍術",			18,	8,	"HEG"),
	$B3 : new Data("奥義・桜時雨",				'未',	"忍術",			18,	9,	"HEG"),
	$B4 : new Data("シールドオブトラスト",		'未',	"神聖",			19,	0,	"HEG"),
	$B5 : new Data("セレスティアルスパイク",	'未',	"神聖",			19,	1,	"HEG"),
	$B6 : new Data("ジャッジメントブレイド",	'未',	"神聖",			19,	2,	"HEG"),
	$B7 : new Data("レイジインパクト",			'未',	"戦闘",			19,	3,	"HEG"),
	$B8 : new Data("バッシュ",					'未',	"戦闘",			19,	4,	"HEG"),
	$B9 : new Data("デュアルウェポンマスタ",	'未',	"戦闘",			19,	5,	"HG"),
	$BA : new Data("マナリカバリー",			'未',	"魔法",			19,	6,	"HEG"),
	$BB : new Data("ライトニングロード",		'未',	"魔法",			19,	7,	"HEG"),
	$BC : new Data("アージェントショット",		'未',	"戦闘",			19,	8,	"HE"),
	$BD : new Data("ディヴァインリンク",		'未',	"神聖",			19,	9,	"HEG"),
	$BE : new Data("光の覚醒",					'未',	"半神化",		20,	0,	"HEG"),
	$BF : new Data("スピアオブライト",			'未',	"半神化",		20,	1,	"HEG"),
	$C0 : new Data("ヒューリーオブライト",		'未',	"半神化",		20,	2,	"HEG"),
	$C1 : new Data("シャドウオブスピリット",	'未',	"半神化",		20,	3,	"HEG"),
	$C2 : new Data("イクリプスオブウィングス",	'未',	"半神化",		20,	4,	"HEG"),
	$C3 : new Data("レイジオブウィングス",		'未',	"半神化",		20,	5,	"HEG"),
	$C4 : new Data("シャイン・オブ・イウェカ",	'未',	"隠し才能",		20,	6,	"HEG"),
	$C5 : new Data("ブレス・オブ・ラデカ",		'未',	"隠し才能",		20,	7,	"H"),
	$C6 : new Data("ビジョン・オブ・ラデカ",	'未',	"隠し才能",		20,	8,	"E"),
	$C7 : new Data("マイト・オブ・ラデカ",		'未',	"隠し才能",		20,	9,	"G"),
	$C8 : new Data("オーラ・オブ・パララ",		'未',	"隠し才能",		21,	0,	"HEG"),
	$C9 : new Data("死の舞踏",					'未',	"音楽",			21,	1,	"HEG"),
	$CA : new Data("ドルカマスタリ",			'未',	"チェーン",		21,	2,	"HEG"),
	$CB : new Data("チェーンブレイドﾏｽﾀﾘ",		'未',	"チェーン",		21,	3,	"HEG"),
	$CC : new Data("ドルカスナッチ",			'未',	"チェーン",		21,	4,	"HEG"),
	$CD : new Data("チェーンインペイル",		'未',	"チェーン",		21,	5,	"HEG"),
	$CE : new Data("レイジングスラスト",		'未',	"チェーン",		21,	6,	"HEG"),
	$CF : new Data("スピニングスラッシュ",		'未',	"チェーン",		21,	7,	"HEG"),
	$D0 : new Data("チェーンクラッシュ",		'未',	"チェーン",		21,	8,	"HEG"),
	$D1 : new Data("チェーンスイーピング",		'未',	"チェーン",		21,	9,	"HEG"),
	$D2 : new Data("ドルカコンバージョン",		'未',	"チェーン",		22,	0,	"HEG"),
	$D3 : new Data("アンカーラッシュ",			'未',	"チェーン",		22,	1,	"HEG"),
	$D4 : new Data("デスマーカー",				'未',	"チェーン",		22,	2,	"HEG"),
	$D5 : new Data("チェーンバースト",			'未',	"チェーン",		22,	3,	"HEG"),
	$D6 : new Data("ﾄｩｱﾘﾑｴｸｽﾌﾟﾛｰｼﾞｮﾝ",			'未',	"チェーン",		22,	4,	"HEG"),
	$D7 : new Data("ｱﾅｻﾞｰﾃﾞｨｳﾞｨﾆﾃｨ",			'未',	"異神化",		22,	5,	"HEG"),
	$D8 : new Data("ﾃﾞｨｳﾞｧｲﾝｲﾝﾊﾟｸﾄ",			'未',	"異神化",		22,	6,	"HEG"),
	$D9 : new Data("ブリンク",					'未',	"異神化",		22,	7,	"HEG"),
	$DA : new Data("ルインオブノヴァ",			'未',	"異神化",		22,	8,	"HEG")
};
st_skillData.setData = function(data){
	if(!data){
		return st_skillData;
	}
	var id, rank; 
	for(var i = 0; i < data.length; i += 3){
		id = "$" + data.slice(i, i + 2);
		rank = data.charAt(i + 2);
		st_skillData[id].rank = rank;
	}
	return st_skillData;
}


var st_dataSet = [
];
st_dataSet.reset = function(){
	var data = [
		new Category("生活",		[]),
		new Category("戦闘",		[]),
		new Category("魔法",		[]),
		new Category("錬金術",		[]),
		new Category("格闘術",		[]),
		new Category("音楽",		[]),
		new Category("人形術",		[]),
		new Category("デュアルガン",	[]),
		new Category("隠し才能",	[]),
		new Category("忍術",		[]),
		new Category("神聖",		[]),
		new Category("半神化",		[]),
		new Category("チェーン",	[]),
		new Category("異神化",		[]),
		new Category("未習得",		[])
	];
	st_dataSet.length = 0;
	for(var i = 0; i<data.length; ++i){
		st_dataSet[i] = data[i];
	}
};
st_dataSet.untrainedFilter = function(){

	var ut = st_dataSet[st_dataSet.length-1].skills;
	for(var i = 0; i<st_dataSet.length-1; ++i){	
		var skills = st_dataSet[i].skills;
		for(var j = 0; j<skills.length; ++j){
			if(!skills[j] || skills[j].rank != '未'){
				continue;
			}
			ut[ut.length] = skills[j];
			skills[j] = null;
		}
	}
};

st_dataSet.addData = function(map){

	function getCategoryIndex(name){
		for(var i = 0; i < st_dataSet.length; ++i){
			if(st_dataSet[i].name == name){
				return i;
			}
		}
		i = st_dataSet.length;
		st_dataSet[i] = new Category(name, []);
		return i;
	}

	var data, ind, ary;

	for(var key in map){
		if(key.indexOf("$") == -1){
			continue;
		}
		data = map[key];
		ind = getCategoryIndex(data.cat);
		ary = st_dataSet[ind].skills;
		ary[ary.length] = new Skill(key, data.name, data.rank, data.yIndex, data.xIndex, data.race);
	}
};

function Category(name, skills){
	this.name = name;
	this.skills = skills;
}

function Skill(id, name, rank, yIndex, xIndex, race){	
	this.id = id;
	this.name = name;
	this.rank = rank;
	this.yIndex = yIndex;
	this.xIndex = xIndex;
	this.race = race;
}

function Data(name, rank, cat, yIndex, xIndex, race){
	this.name = name;
	this.rank = rank;
	this.cat = cat;
	this.yIndex = yIndex;
	this.xIndex = xIndex;
	this.race = race;	
}