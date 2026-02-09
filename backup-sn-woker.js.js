const COUNTRY_MAP = {
  AF: "🇦🇫 阿富汗", AL: "🇦🇱 阿尔巴尼亚", DZ: "🇩🇿 阿尔及利亚", AS: "🇦🇸 美属萨摩亚", AD: "🇦🇩 安道尔",
  AO: "🇦🇴 安哥拉", AI: "🇦🇮 安圭拉", AQ: "🇦🇶 南极洲", AG: "🇦🇬 安提瓜和巴布达", AR: "🇦🇷 阿根廷",
  AM: "🇦🇲 亚美尼亚", AW: "🇦🇼 阿鲁巴", AU: "🇦🇺 澳大利亚", AT: "🇦🇹 奥地利", AZ: "🇦🇿 阿塞拜疆",
  BS: "🇧🇸 巴哈马", BH: "🇧🇭 巴林", BD: "🇧🇩 孟加拉国", BB: "🇧🇧 巴巴多斯", BY: "🇧🇾 白俄罗斯",
  BE: "🇧🇪 比利时", BZ: "🇧🇿 伯利兹", BJ: "🇧🇯 贝宁", BM: "🇧🇲 百慕大", BT: "🇧🇹 不丹",
  BO: "🇧🇴 玻利维亚", BA: "🇧🇦 波斯尼亚和黑塞哥维那", BW: "🇧🇼 博茨瓦纳", BR: "🇧🇷 巴西", BN: "🇧🇳 文莱",
  BG: "🇧🇬 保加利亚", BF: "🇧🇫 布基纳法索", BI: "🇧🇮 布隆迪", KH: "🇰🇭 柬埔寨", CM: "🇨🇲 喀麦隆",
  CA: "🇨🇦 加拿大", CV: "🇨🇻 佛得角", KY: "🇰🇾 开曼群岛", CF: "🇨🇫 中非共和国", TD: "🇹🇩 乍得",
  CL: "🇨🇱 智利", CN: "🇨🇳 中国", HK: "🇭🇰 中国香港", MO: "🇲🇴 中国澳门", TW: "🇹🇼 中国台湾",
  CO: "🇨🇴 哥伦比亚", KM: "🇰🇲 科摩罗", CG: "🇨🇬 刚果(布)", CD: "🇨🇩 刚果(金)", CR: "🇨🇷 哥斯达黎加",
  HR: "🇭🇷 克罗地亚", CU: "🇨🇺 古巴", CY: "🇨🇾 塞浦路斯", CZ: "🇨🇿 捷克", DK: "🇩🇰 丹麦",
  DJ: "🇩🇯 吉布提", DM: "🇩🇲 多米尼克", DO: "🇩🇴 多米尼加共和国", EC: "🇪🇨 厄瓜多尔", EG: "🇪🇬 埃及",
  SV: "🇸🇻 萨尔瓦多", GQ: "🇬🇶 赤道几内亚", ER: "🇪🇷 厄立特里亚", EE: "🇪🇪 爱沙尼亚", ET: "🇪🇹 埃塞俄比亚",
  FJ: "🇫🇯 斐济", FI: "🇫🇮 芬兰", FR: "🇫🇷 法国", GF: "🇬🇫 法属圭亚那", PF: "🇵🇫 法属波利尼西亚",
  GA: "🇬🇦 加蓬", GM: "🇬🇲 冈比亚", GE: "🇬🇪 格鲁吉亚", DE: "🇩🇪 德国", GH: "🇬🇭 加纳",
  GR: "🇬🇷 希腊", GL: "🇬🇱 格陵兰", GD: "🇬🇩 格林纳达", GP: "🇬🇵 瓜德罗普", GT: "🇬🇹 危地马拉",
  GN: "🇬🇳 几内亚", GW: "🇬🇼 几内亚比绍", GY: "🇬🇾 圭亚那", HT: "🇭🇹 海地", HN: "🇭🇳 洪都拉斯",
  HU: "🇭🇺 匈牙利", IS: "🇮🇸 冰岛", IN: "🇮🇳 印度", ID: "🇮🇩 印度尼西亚", IR: "🇮🇷 伊朗",
  IQ: "🇮🇶 伊拉克", IE: "🇮🇪 爱尔兰", IL: "🇮🇱 以色列", IT: "🇮🇹 意大利", JM: "🇯🇲 牙买加",
  JP: "🇯🇵 日本", JO: "🇯🇴 约旦", KZ: "🇰🇿 哈萨克斯坦", KE: "🇰🇪 肯尼亚", KI: "🇰🇮 基里巴斯",
  KR: "🇰🇷 韩国", KW: "🇰🇼 科威特", KG: "🇰🇬 吉尔吉斯斯坦", LA: "🇱🇦 老挝", LV: "🇱🇻 拉脱维亚",
  LB: "🇱🇧 黎巴嫩", LS: "🇱🇸 莱索托", LR: "🇱🇷 利比里亚", LY: "🇱🇾 利比亚", LI: "🇱🇮 列支敦士登",
  LT: "🇱🇹 立陶宛", LU: "🇱🇺 卢森堡", MG: "🇲🇬 马达加斯加", MW: "🇲🇼 马拉维", MY: "🇲🇾 马来西亚",
  MV: "🇲🇻 马尔代夫", ML: "🇲🇱 马里", MT: "🇲🇹 马耳他", MH: "🇲🇭 马绍尔群岛", MQ: "🇲🇶 马提尼克",
  MR: "🇲🇷 毛里塔尼亚", MU: "🇲🇺 毛里求斯", YT: "🇾🇹 马约特", MX: "🇲🇽 墨西哥", FM: "🇫🇲 密克罗尼西亚",
  MD: "🇲🇩 摩尔多瓦", MC: "🇲🇨 摩纳哥", MN: "🇲🇳 蒙古", ME: "🇲🇪 黑山", MA: "🇲🇦 摩洛哥",
  MZ: "🇲🇿 莫桑比克", MM: "🇲🇲 缅甸", NA: "🇳🇦 纳米比亚", NR: "🇳🇷 瑙鲁", NP: "🇳🇵 尼泊尔",
  NL: "🇳🇱 荷兰", NC: "🇳🇨 新喀里多尼亚", NZ: "🇳🇿 新西兰", NI: "🇳🇮 尼加拉瓜", NE: "🇳🇪 尼日尔",
  NG: "🇳🇬 尼日利亚", MK: "🇲🇰 北马其顿", NO: "🇳🇴 挪威", OM: "🇴🇲 阿曼", PK: "🇵🇰 巴基斯坦",
  PW: "🇵🇼 帕劳", PA: "🇵🇦 巴拿马", PG: "🇵🇬 巴布亚新几内亚", PY: "🇵🇾 巴拉圭", PE: "🇵🇪 秘鲁",
  PH: "🇵🇭 菲律宾", PL: "🇵🇱 波兰", PT: "🇵🇹 葡萄牙", QA: "🇶🇦 卡塔尔", RE: "🇷🇪 留尼汪",
  RO: "🇷🇴 罗马尼亚", RU: "🇷🇺 俄罗斯", RW: "🇷🇼 卢旺达", KN: "🇰🇳 圣基茨和尼维斯", LC: "🇱🇨 圣卢西亚",
  VC: "🇻🇨 圣文森特和格林纳丁斯", WS: "🇼🇸 萨摩亚", SM: "🇸🇲 圣马力诺", ST: "🇸🇹 圣多美和普林西比",
  SA: "🇸🇦 沙特阿拉伯", SN: "🇸🇳 塞内加尔", RS: "🇷🇸 塞尔维亚", SC: "🇸🇨 塞舌尔", SL: "🇸🇱 塞拉利昂",
  SG: "🇸🇬 新加坡", SK: "🇸🇰 斯洛伐克", SI: "🇸🇮 斯洛文尼亚", SB: "🇸🇧 所罗门群岛", SO: "🇸🇴 索马里",
  ZA: "🇿🇦 南非", ES: "🇪🇸 西班牙", LK: "🇱🇰 斯里兰卡", SD: "🇸🇩 苏丹", SR: "🇸🇷 苏里南",
  SE: "🇸🇪 瑞典", CH: "🇨🇭 瑞士", SY: "🇸🇾 叙利亚", TH: "🇹🇭 泰国", TL: "🇹🇱 东帝汶",
  TG: "🇹🇬 多哥", TO: "🇹🇴 汤加", TT: "🇹🇹 特立尼达和多巴哥", TN: "🇹🇳 突尼斯", TR: "🇹🇷 土耳其",
  TM: "🇹🇲 土库曼斯坦", TV: "🇹🇻 图瓦卢", UG: "🇺🇬 乌干达", UA: "🇺🇦 乌克兰", AE: "🇦🇪 阿联酋",
  GB: "🇬🇧 英国", US: "🇺🇸 美国", UY: "🇺🇾 乌拉圭", UZ: "🇺🇿 乌兹别克斯坦", VU: "🇻🇺 瓦努阿图",
  VE: "🇻🇪 委内瑞拉", VN: "🇻🇳 越南", YE: "🇾🇪 也门", ZM: "🇿🇲 赞比亚", ZW: "🇿🇼 津巴布韦", UN: "🇺🇳 联合国"
};
const CITY_MAP = {
  "Beijing": "北京", "Shanghai": "上海", "Guangzhou": "广州", "Shenzhen": "深圳",
  "Chengdu": "成都", "Chongqing": "重庆", "Wuhan": "武汉", "Xi'an": "西安",
  "Hangzhou": "杭州", "Nanjing": "南京", "Tianjin": "天津", "Suzhou": "苏州",
  "Zhengzhou": "郑州", "Changsha": "长沙", "Shenyang": "沈阳", "Qingdao": "青岛",
  "Xiamen": "厦门", "Harbin": "哈尔滨", "Kunming": "昆明", "Dalian": "大连",
  "Jinan": "济南", "Fuzhou": "福州", "Changchun": "长春", "Shijiazhuang": "石家庄",
  "Hefei": "合肥", "Urumqi": "乌鲁木齐", "Nanchang": "南昌", "Ningbo": "宁波",
  "Taiyuan": "太原", "Guiyang": "贵阳", "Nanning": "南宁", "Lanzhou": "兰州",
  "Hohhot": "呼和浩特", "Yinchuan": "银川", "Xining": "西宁", "Haikou": "海口",
  "Lhasa": "拉萨", "Zhuhai": "珠海", "Foshan": "佛山", "Dongguan": "东莞",
  "Wenzhou": "温州", "Wuxi": "无锡", "Changzhou": "常州", "Yangzhou": "扬州",
  "Baoding": "保定", "Tangshan": "唐山", "Luoyang": "洛阳", "Kaifeng": "开封",
  "Anyang": "安阳", "Xuzhou": "徐州", "Lianyungang": "连云港", "Huai'an": "淮安",
  "Yantai": "烟台", "Weifang": "潍坊", "Zibo": "淄博", "Linyi": "临沂",
  "Nantong": "南通", "Taizhou": "台州", "Shaoxing": "绍兴", "Jinhua": "金华",
  "Huzhou": "湖州", "Jiaxing": "嘉兴", "Quanzhou": "泉州", "Zhangzhou": "漳州",
  "Ganzhou": "赣州", "Jingdezhen": "景德镇", "Yichang": "宜昌", "Xiangyang": "襄阳",
  "Jingzhou": "荆州", "Huangshi": "黄石", "Yueyang": "岳阳", "Zhuzhou": "株洲",
  "Xiangtan": "湘潭", "Hengyang": "衡阳", "Shantou": "汕头", "Zhanjiang": "湛江",
  "Jiangmen": "江门", "Zhongshan": "中山", "Huizhou": "惠州", "Mianyang": "绵阳",
  "Deyang": "德阳", "Nanchong": "南充", "Yibin": "宜宾", "Luzhou": "泸州",
  "Zunyi": "遵义", "Liuzhou": "柳州", "Guilin": "桂林", "Beihai": "北海",
  "Qujing": "曲靖", "Yuxi": "玉溪", "Dali": "大理", "Lijiang": "丽江",
  "Baoji": "宝鸡", "Xianyang": "咸阳", "Yan'an": "延安", "Hanzhong": "汉中",
  "Hong Kong": "香港", "Kowloon": "九龙", "Macau": "澳门", "Macao": "澳门",
  "Taipei": "台北", "Kaohsiung": "高雄", "Taichung": "台中", "Tainan": "台南",
  "Hsinchu": "新竹", "Keelung": "基隆", "Chiayi": "嘉义", "Taoyuan": "桃园", "Poxin": "埔心",
  "Tokyo": "东京", "Osaka": "大阪", "Yokohama": "横滨", "Nagoya": "名古屋", "Anyang-si": "安养市",
  "Sapporo": "札幌", "Fukuoka": "福冈", "Kobe": "神户", "Kyoto": "京都",
  "Kawasaki": "川崎", "Saitama": "埼玉", "Hiroshima": "广岛", "Sendai": "仙台",
  "Chiba": "千叶", "Kitakyushu": "北九州", "Sakai": "堺市", "Niigata": "新潟",
  "Hamamatsu": "滨松", "Kumamoto": "熊本", "Sagamihara": "相模原", "Shizuoka": "静冈",
  "Okayama": "冈山", "Kagoshima": "鹿儿岛", "Hachioji": "八王子", "Funabashi": "船桥",
  "Nagasaki": "长崎", "Nara": "奈良", "Matsuyama": "松山", "Kanazawa": "金泽",
  "Seoul": "首尔", "Busan": "釜山", "Incheon": "仁川", "Daegu": "大邱", "Yongin-si": "龙仁市",
  "Daejeon": "大田", "Gwangju": "光州", "Ulsan": "蔚山", "Suwon": "水原",
  "Changwon": "昌原", "Seongnam": "城南", "Goyang": "高阳", "Yongin": "龙仁",
  "Bucheon": "富川", "Cheongju": "清州", "Ansan": "安山", "Jeonju": "全州",
  "Singapore": "新加坡", "Bangkok": "曼谷", "Kuala Lumpur": "吉隆坡",
  "Jakarta": "雅加达", "Manila": "马尼拉", "Ho Chi Minh City": "胡志明市",
  "Hanoi": "河内", "Yangon": "仰光", "Phnom Penh": "金边", "Vientiane": "万象",
  "Surabaya": "泗水", "Bandung": "万隆", "Medan": "棉兰", "Semarang": "三宝垄",
  "Makassar": "望加锡", "Palembang": "巨港", "Tangerang": "唐格朗", "Bekasi": "勿加西",
  "Cebu": "宿务", "Davao": "达沃", "Quezon City": "奎松市", "Caloocan": "加洛坎",
  "George Town": "乔治市", "Ipoh": "怡保", "Johor Bahru": "新山", "Petaling Jaya": "八打灵再也",
  "Chiang Mai": "清迈", "Phuket": "普吉", "Pattaya": "芭提雅", "Hat Yai": "合艾",
  "Da Nang": "岘港", "Can Tho": "芹苴", "Hai Phong": "海防", "Nha Trang": "芽庄",
  "Mandalay": "曼德勒", "Naypyidaw": "内比都", "Bandar Seri Begawan": "斯里巴加湾市",
  "Mumbai": "孟买", "Delhi": "德里", "Bangalore": "班加罗尔", "Hyderabad": "海得拉巴",
  "Ahmedabad": "艾哈迈达巴德", "Chennai": "金奈", "Kolkata": "加尔各答", "Surat": "苏拉特",
  "Pune": "浦那", "Jaipur": "斋浦尔", "Lucknow": "勒克瑙", "Kanpur": "坎普尔",
  "Nagpur": "那格浦尔", "Indore": "印多尔", "Thane": "塔那", "Bhopal": "博帕尔",
  "Visakhapatnam": "维沙卡帕特南", "Patna": "巴特那", "Vadodara": "瓦道达拉", "Ghaziabad": "加济阿巴德",
  "Karachi": "卡拉奇", "Lahore": "拉合尔", "Faisalabad": "费萨拉巴德", "Rawalpindi": "拉瓦尔品第",
  "Multan": "木尔坦", "Gujranwala": "古吉兰瓦拉", "Peshawar": "白沙瓦", "Islamabad": "伊斯兰堡",
  "Dhaka": "达卡", "Chittagong": "吉大港", "Khulna": "库尔纳", "Rajshahi": "拉杰沙希",
  "Colombo": "科伦坡", "Dehiwala-Mount Lavinia": "德希瓦勒-芒特拉维尼亚", "Moratuwa": "莫勒图沃",
  "Kathmandu": "加德满都", "Pokhara": "博卡拉", "Lalitpur": "拉利特布尔",
  "Dubai": "迪拜", "Abu Dhabi": "阿布扎比", "Sharjah": "沙迦", "Ajman": "阿治曼",
  "Riyadh": "利雅得", "Jeddah": "吉达", "Mecca": "麦加", "Medina": "麦地那",
  "Dammam": "达曼", "Khobar": "胡拜尔", "Tehran": "德黑兰", "Mashhad": "马什哈德",
  "Isfahan": "伊斯法罕", "Karaj": "卡拉季", "Tabriz": "大不里士", "Shiraz": "设拉子",
  "Baghdad": "巴格达", "Basra": "巴士拉", "Mosul": "摩苏尔", "Erbil": "埃尔比勒",
  "Ankara": "安卡拉", "Istanbul": "伊斯坦布尔", "Izmir": "伊兹密尔", "Bursa": "布尔萨",
  "Antalya": "安塔利亚", "Adana": "阿达纳", "Gaziantep": "加济安泰普", "Konya": "科尼亚",
  "Tel Aviv": "特拉维夫", "Jerusalem": "耶路撒冷", "Haifa": "海法", "Rishon LeZion": "里雄莱锡安",
  "Amman": "安曼", "Zarqa": "扎尔卡", "Beirut": "贝鲁特", "Tripoli": "的黎波里",
  "Damascus": "大马士革", "Aleppo": "阿勒颇", "Homs": "霍姆斯", "Doha": "多哈",
  "Muscat": "马斯喀特", "Salalah": "塞拉莱", "Kuwait City": "科威特城", "Manama": "麦纳麦",
  "London": "伦敦", "Birmingham": "伯明翰", "Manchester": "曼彻斯特", "Glasgow": "格拉斯哥",
  "Liverpool": "利物浦", "Leeds": "利兹", "Sheffield": "谢菲尔德", "Edinburgh": "爱丁堡",
  "Bristol": "布里斯托尔", "Cardiff": "加的夫", "Belfast": "贝尔法斯特", "Leicester": "莱斯特",
  "Paris": "巴黎", "Marseille": "马赛", "Lyon": "里昂", "Toulouse": "图卢兹",
  "Nice": "尼斯", "Nantes": "南特", "Strasbourg": "斯特拉斯堡", "Montpellier": "蒙彼利埃",
  "Bordeaux": "波尔多", "Lille": "里尔", "Rennes": "雷恩", "Reims": "兰斯",
  "Berlin": "柏林", "Hamburg": "汉堡", "Munich": "慕尼黑", "Cologne": "科隆",
  "Frankfurt": "法兰克福", "Stuttgart": "斯图加特", "Dusseldorf": "杜塞尔多夫", "Dortmund": "多特蒙德",
  "Essen": "埃森", "Leipzig": "莱比锡", "Bremen": "不来梅", "Dresden": "德累斯顿",
  "Hanover": "汉诺威", "Nuremberg": "纽伦堡", "Duisburg": "杜伊斯堡", "Bochum": "波鸿",
  "Amsterdam": "阿姆斯特丹", "Rotterdam": "鹿特丹", "The Hague": "海牙", "Utrecht": "乌得勒支",
  "Eindhoven": "埃因霍温", "Tilburg": "蒂尔堡", "Groningen": "格罗宁根", "Almere": "阿尔梅勒",
  "Brussels": "布鲁塞尔", "Antwerp": "安特卫普", "Ghent": "根特", "Charleroi": "沙勒罗瓦",
  "Liege": "列日", "Bruges": "布鲁日", "Luxembourg": "卢森堡", "Vienna": "维也纳",
  "Graz": "格拉茨", "Linz": "林茨", "Salzburg": "萨尔茨堡", "Innsbruck": "因斯布鲁克",
  "Zurich": "苏黎世", "Geneva": "日内瓦", "Basel": "巴塞尔", "Lausanne": "洛桑",
  "Bern": "伯尔尼", "Winterthur": "温特图尔", "Lucerne": "卢塞恩", "St. Gallen": "圣加仑",
  "Rome": "罗马", "Milan": "米兰", "Naples": "那不勒斯", "Turin": "都灵",
  "Palermo": "巴勒莫", "Genoa": "热那亚", "Bologna": "博洛尼亚", "Florence": "佛罗伦萨",
  "Bari": "巴里", "Catania": "卡塔尼亚", "Venice": "威尼斯", "Verona": "维罗纳",
  "Madrid": "马德里", "Barcelona": "巴塞罗那", "Valencia": "瓦伦西亚", "Seville": "塞维利亚",
  "Zaragoza": "萨拉戈萨", "Malaga": "马拉加", "Murcia": "穆尔西亚", "Palma": "帕尔马",
  "Bilbao": "毕尔巴鄂", "Alicante": "阿利坎特", "Cordoba": "科尔多瓦", "Valladolid": "巴利亚多利德",
  "Lisbon": "里斯本", "Porto": "波尔图", "Amadora": "阿马多拉", "Braga": "布拉加",
  "Coimbra": "科英布拉", "Funchal": "丰沙尔", "Athens": "雅典", "Thessaloniki": "塞萨洛尼基",
  "Patras": "帕特雷", "Heraklion": "伊拉克利翁", "Larissa": "拉里萨", "Volos": "沃洛斯",
  "Moscow": "莫斯科", "Saint Petersburg": "圣彼得堡", "Novosibirsk": "新西伯利亚", "Yekaterinburg": "叶卡捷琳堡",
  "Nizhny Novgorod": "下诺夫哥罗德", "Kazan": "喀山", "Chelyabinsk": "车里雅宾斯克", "Omsk": "鄂木斯克",
  "Samara": "萨马拉", "Rostov-on-Don": "顿河畔罗斯托夫", "Ufa": "乌法", "Krasnoyarsk": "克拉斯诺亚尔斯克",
  "Voronezh": "沃罗涅日", "Perm": "彼尔姆", "Volgograd": "伏尔加格勒", "Krasnodar": "克拉斯诺达尔",
  "Kyiv": "基辅", "Kharkiv": "哈尔科夫", "Odessa": "敖德萨", "Dnipro": "第聂伯罗",
  "Donetsk": "顿涅茨克", "Lviv": "利沃夫", "Warsaw": "华沙", "Krakow": "克拉科夫",
  "Lodz": "罗兹", "Wroclaw": "弗罗茨瓦夫", "Poznan": "波兹南", "Gdansk": "格但斯克",
  "Bucharest": "布加勒斯特", "Cluj-Napoca": "克卢日-纳波卡", "Timisoara": "蒂米什瓦拉", "Iasi": "雅西",
  "Budapest": "布达佩斯", "Debrecen": "德布勒森", "Szeged": "塞格德", "Miskolc": "米什科尔茨",
  "Prague": "布拉格", "Brno": "布尔诺", "Ostrava": "俄斯特拉发", "Pilsen": "比尔森",
  "Bratislava": "布拉迪斯拉发", "Kosice": "科希策", "Belgrade": "贝尔格莱德", "Novi Sad": "诺维萨德",
  "Zagreb": "萨格勒布", "Split": "斯普利特", "Rijeka": "里耶卡", "Sofia": "索非亚",
  "Plovdiv": "普罗夫迪夫", "Varna": "瓦尔纳", "Minsk": "明斯克", "Gomel": "戈梅利",
  "Stockholm": "斯德哥尔摩", "Gothenburg": "哥德堡", "Malmo": "马尔默", "Uppsala": "乌普萨拉",
  "Oslo": "奥斯陆", "Bergen": "卑尔根", "Trondheim": "特隆赫姆", "Stavanger": "斯塔万格",
  "Copenhagen": "哥本哈根", "Aarhus": "奥胡斯", "Odense": "欧登塞", "Aalborg": "奥尔堡",
  "Helsinki": "赫尔辛基", "Espoo": "埃斯波", "Tampere": "坦佩雷", "Vantaa": "万塔",
  "Reykjavik": "雷克雅未克", "Tallinn": "塔林", "Tartu": "塔尔图", "Riga": "里加",
  "Daugavpils": "陶格夫匹尔斯", "Vilnius": "维尔纽斯", "Kaunas": "考纳斯",
  "New York": "纽约", "Los Angeles": "洛杉矶", "Chicago": "芝加哥", "Houston": "休斯顿",
  "Phoenix": "凤凰城", "Philadelphia": "费城", "San Antonio": "圣安东尼奥", "San Diego": "圣迭戈",
  "Dallas": "达拉斯", "San Jose": "圣何塞", "Austin": "奥斯汀", "Jacksonville": "杰克逊维尔",
  "Fort Worth": "沃思堡", "Columbus": "哥伦布", "San Francisco": "旧金山", "Charlotte": "夏洛特",
  "Indianapolis": "印第安纳波利斯", "Seattle": "西雅图", "Denver": "丹佛", "Washington": "华盛顿",
  "Boston": "波士顿", "El Paso": "埃尔帕索", "Nashville": "纳什维尔", "Detroit": "底特律",
  "Portland": "波特兰", "Las Vegas": "拉斯维加斯", "Memphis": "孟菲斯", "Louisville": "路易斯维尔",
  "Baltimore": "巴尔的摩", "Milwaukee": "密尔沃基", "Albuquerque": "阿尔伯克基", "Tucson": "图森",
  "Fresno": "弗雷斯诺", "Sacramento": "萨克拉门托", "Kansas City": "堪萨斯城", "Mesa": "梅萨",
  "Atlanta": "亚特兰大", "Omaha": "奥马哈", "Colorado Springs": "科罗拉多斯普林斯", "Raleigh": "罗利",
  "Miami": "迈阿密", "Cleveland": "克利夫兰", "Tulsa": "塔尔萨", "Oakland": "奥克兰",
  "Minneapolis": "明尼阿波利斯", "Wichita": "威奇托", "Arlington": "阿灵顿", "Tampa": "坦帕",
  "Toronto": "多伦多", "Montreal": "蒙特利尔", "Vancouver": "温哥华", "Calgary": "卡尔加里",
  "Edmonton": "埃德蒙顿", "Ottawa": "渥太华", "Winnipeg": "温尼伯", "Quebec City": "魁北克城",
  "Hamilton": "汉密尔顿", "Kitchener": "基奇纳", "London": "伦敦", "Victoria": "维多利亚",
  "Mexico City": "墨西哥城", "Guadalajara": "瓜达拉哈拉", "Monterrey": "蒙特雷", "Puebla": "普埃布拉",
  "Tijuana": "蒂华纳", "Leon": "莱昂", "Juarez": "华雷斯", "Zapopan": "萨波潘",
  "Havana": "哈瓦那", "Santiago de Cuba": "圣地亚哥-德古巴", "Camaguey": "卡马圭",
  "Sao Paulo": "圣保罗", "Rio de Janeiro": "里约热内卢", "Brasilia": "巴西利亚", "Salvador": "萨尔瓦多",
  "Fortaleza": "福塔莱萨", "Belo Horizonte": "贝洛奥里藏特", "Manaus": "马瑙斯", "Curitiba": "库里蒂巴",
  "Recife": "累西腓", "Porto Alegre": "阿雷格里港", "Belem": "贝伦", "Goiania": "戈亚尼亚",
  "Buenos Aires": "布宜诺斯艾利斯", "Cordoba": "科尔多瓦", "Rosario": "罗萨里奥", "Mendoza": "门多萨",
  "La Plata": "拉普拉塔", "San Miguel de Tucuman": "图库曼", "Mar del Plata": "马德普拉塔",
  "Santiago": "圣地亚哥", "Valparaiso": "瓦尔帕莱索", "Concepcion": "康塞普西翁", "La Serena": "拉塞雷纳",
  "Lima": "利马", "Arequipa": "阿雷基帕", "Trujillo": "特鲁希略", "Chiclayo": "奇克拉约",
  "Bogota": "波哥大", "Medellin": "麦德林", "Cali": "卡利", "Barranquilla": "巴兰基亚",
  "Cartagena": "卡塔赫纳", "Cucuta": "库库塔", "Caracas": "加拉加斯", "Maracaibo": "马拉开波",
  "Valencia": "巴伦西亚", "Barquisimeto": "巴基西梅托", "Quito": "基多", "Guayaquil": "瓜亚基尔",
  "Cuenca": "昆卡", "La Paz": "拉巴斯", "Santa Cruz": "圣克鲁斯", "Cochabamba": "科恰班巴",
  "Montevideo": "蒙得维的亚", "Asuncion": "亚松森", "Georgetown": "乔治敦", "Paramaribo": "帕拉马里博",
  "Cairo": "开罗", "Alexandria": "亚历山大", "Giza": "吉萨", "Shubra El-Kheima": "舒卜拉开马",
  "Lagos": "拉各斯", "Kano": "卡诺", "Ibadan": "伊巴丹", "Abuja": "阿布贾",
  "Port Harcourt": "哈科特港", "Benin City": "贝宁城", "Kinshasa": "金沙萨", "Lubumbashi": "卢本巴希",
  "Mbuji-Mayi": "姆布吉马伊", "Kananga": "卡南加", "Johannesburg": "约翰内斯堡", "Cape Town": "开普敦",
  "Durban": "德班", "Pretoria": "比勒陀利亚", "Port Elizabeth": "伊丽莎白港", "Bloemfontein": "布隆方丹",
  "Nairobi": "内罗毕", "Mombasa": "蒙巴萨", "Kisumu": "基苏木", "Nakuru": "纳库鲁",
  "Addis Ababa": "亚的斯亚贝巴", "Dire Dawa": "迪雷达瓦", "Mekelle": "默克莱", "Gondar": "贡德尔",
  "Accra": "阿克拉", "Kumasi": "库马西", "Tamale": "塔马利", "Casablanca": "卡萨布兰卡",
  "Rabat": "拉巴特", "Fez": "非斯", "Marrakech": "马拉喀什", "Tangier": "丹吉尔",
  "Algiers": "阿尔及尔", "Oran": "奥兰", "Constantine": "君士坦丁", "Tunis": "突尼斯",
  "Dar es Salaam": "达累斯萨拉姆", "Mwanza": "姆万扎", "Arusha": "阿鲁沙", "Dodoma": "多多马",
  "Kampala": "坎帕拉", "Kigali": "基加利", "Lusaka": "卢萨卡", "Harare": "哈拉雷",
  "Bulawayo": "布拉瓦约", "Maputo": "马普托", "Luanda": "罗安达", "Dakar": "达喀尔",
  "Abidjan": "阿比让", "Yamoussoukro": "亚穆苏克罗", "Bamako": "巴马科", "Ouagadougou": "瓦加杜古",
  "Conakry": "科纳克里", "Freetown": "弗里敦", "Monrovia": "蒙罗维亚", "Tripoli": "的黎波里",
  "Benghazi": "班加西", "Khartoum": "喀土穆", "Omdurman": "恩图曼", "Mogadishu": "摩加迪沙",
  "Antananarivo": "塔那那利佛", "Toamasina": "图阿马西纳", "Port Louis": "路易港",
  "Sydney": "悉尼", "Melbourne": "墨尔本", "Brisbane": "布里斯班", "Perth": "珀斯",
  "Adelaide": "阿德莱德", "Gold Coast": "黄金海岸", "Newcastle": "纽卡斯尔", "Canberra": "堪培拉",
  "Sunshine Coast": "阳光海岸", "Wollongong": "卧龙岗", "Hobart": "霍巴特", "Geelong": "吉朗",
  "Townsville": "汤斯维尔", "Cairns": "凯恩斯", "Darwin": "达尔文", "Toowoomba": "图文巴",
  "Auckland": "奥克兰", "Wellington": "惠灵顿", "Christchurch": "基督城", "Hamilton": "汉密尔顿",
  "Tauranga": "陶兰加", "Napier-Hastings": "内皮尔-黑斯廷斯", "Dunedin": "但尼丁", "Palmerston North": "北帕默斯顿",
  "Port Moresby": "莫尔兹比港", "Lae": "莱城", "Suva": "苏瓦", "Nadi": "南迪",
  "Apia": "阿皮亚", "Pago Pago": "帕果帕果", "Noumea": "努美阿", "Papeete": "帕皮提",
  "Tashkent": "塔什干", "Samarkand": "撒马尔罕", "Namangan": "纳曼干", "Andijan": "安集延",
  "Almaty": "阿拉木图", "Nur-Sultan": "努尔苏丹", "Shymkent": "奇姆肯特", "Karaganda": "卡拉干达",
  "Bishkek": "比什凯克", "Osh": "奥什", "Jalal-Abad": "贾拉拉巴德", "Dushanbe": "杜尚别",
  "Khujand": "苦盏", "Ashgabat": "阿什哈巴德", "Turkmenabat": "土库曼纳巴德",
  "The Dalles": "达尔斯", "The Hague": "海牙", "The Bronx": "布朗克斯",
  "The Villages": "村庄", "The Woodlands": "林地", "The Colony": "殖民地",
  "The Pas": "帕斯", "The Hills": "山区", "The Rocks": "岩石区",
  "The Gap": "峡口", "The Plains": "平原", "The Valley": "山谷",
  "Las Vegas": "拉斯维加斯", "Los Angeles": "洛杉矶", "San Francisco": "旧金山",
  "San Diego": "圣迭戈", "San Jose": "圣何塞", "San Antonio": "圣安东尼奥",
  "Santa Clara": "圣克拉拉", "Santa Monica": "圣莫尼卡", "El Paso": "埃尔帕索",
  "La Paz": "拉巴斯", "Las Cruces": "拉斯克鲁塞斯", "Des Moines": "得梅因",
  "Baton Rouge": "巴吞鲁日", "Boca Raton": "博卡拉顿", "Costa Mesa": "科斯塔梅萨", "Lauterbourg": "洛泰堡",
};
function extractChineseName(text) {
  if (!text) return null;
  const noisePatterns = [
    /感谢.*?使用/gi, /如果.*?问题/gi, /请.*?反馈/gi,
    /^翻译[:：]/gi, /^结果[:：]/gi, /^译文[:：]/gi,
    /[\[\]【】]/g, /^\s*[-–—]\s*/, /\n/g
  ];
  let cleaned = text.trim();
  for (const pattern of noisePatterns) {
    cleaned = cleaned.replace(pattern, '');
  }
  const chineseMatch = cleaned.match(/[\u4e00-\u9fa5\u3000-\u303f]+/g);
  if (!chineseMatch) return null;
  const longest = chineseMatch.reduce((a, b) => a.length > b.length ? a : b, '');
  if (longest.length >= 1 && longest.length <= 20) {
    return longest.trim();
  }
  return null;
}

async function translateToChineseOnline(text) {
  if (!text || typeof text !== 'string') return null;
  const trimmed = text.trim();
  if (!trimmed) return null;
  if (/[\u4e00-\u9fa5]/.test(trimmed)) return trimmed;
  
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CN&dt=t&q=${encodeURIComponent(trimmed)}`;
    const res = await fetch(url, { 
      cf: { cacheTtl: 86400 },
      signal: AbortSignal.timeout(3000)
    });
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data[0] && data[0][0] && data[0][0][0]) {
      return extractChineseName(data[0][0][0]);
    }
  } catch {}
  return null;
}

function getClientIP(request, url) {
  const ip = url.searchParams.get("ip");
  console.log("IP from URL params:", ip);  // Debugging output
  if (ip && /^(\d{1,3}\.){3}\d{1,3}$/.test(ip)) return ip;
  
  const headerIP = request.headers.get("CF-Connecting-IP") ||
                   request.headers.get("X-Forwarded-For")?.split(",")[0] ||
                   "1.1.1.1";
  console.log("IP from headers:", headerIP);  // Debugging output
  return headerIP;
}


// 新函数放在这里，与 getClientIP 平级
function getClientIPv4(request) {
  const ip = request.headers.get("CF-Connecting-IP") ||
             request.headers.get("X-Forwarded-For")?.split(",")[0] ||
             "1.1.1.1";
  if (/^(\d{1,3}\.){3}\d{1,3}$/.test(ip)) {
    return ip;
  }
  return null;
}

function getClientIPv6(request) {
  const ip = request.headers.get("CF-Connecting-IP") ||
             request.headers.get("X-Forwarded-For")?.split(",")[0];
  if (ip && /^([0-9a-fA-F]{0,4}:){2,7}[0-9a-fA-F]{0,4}$/.test(ip)) {
    return ip;
  }
  return null;
}


// 然后是 getGeo 函数
async function getGeo(ip) {
  try {
    // 第一个备用 IP 地址查询 API
    const res1 = await fetch(
      `http://ip-api.com/json/${ip}?fields=status,country,countryCode,city,regionName,isp,org,as,hosting,query`,
      { cf: { cacheTtl: 3600 } }
    );
    if (res1.ok) {
      const data = await res1.json();
      if (data && data.status === "success") {
        return data;
      }
    }

    // 第二个备用 IP 地址查询 API
    const res2 = await fetch(`https://ipapi.co/${ip}/json/`, { cf: { cacheTtl: 3600 } });
    if (res2.ok) {
      const data = await res2.json();
      if (data && data.country) {
        return {
          country: data.country_name || data.country,
          countryCode: data.country_code || data.country,
          city: data.city,
          regionName: data.region,
          isp: data.org || data.asn,
          org: data.org,
          hosting: false
        };
      }
    }

    // 第三个备用 IP 地址查询 API
    const res3 = await fetch(`https://ipinfo.io/${ip}/json/`, { cf: { cacheTtl: 3600 } });
    if (res3.ok) {
      const data = await res3.json();
      return {
        country: data.country,
        countryCode: data.country,
        city: data.city,
        regionName: data.region,
        isp: data.org,
        hosting: false
      };
    }

  } catch (error) {
    console.error('Error fetching geo data:', error);
  }

  return null;
}

function generateHTML(countryCN, cityCN, ip, countryCode, networkType, isp) {
  const flagEmoji = countryCN.match(/[\u{1F1E6}-\u{1F1FF}]{2}/gu)?.[0] || '🌍';
  const countryName = countryCN.replace(/[\u{1F1E6}-\u{1F1FF}]{2}\s*/gu, '').trim();
  
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IP 地理位置 - ${countryName}</title>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Noto+Color+Emoji&display=swap');
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
                   'PingFang SC', 'Microsoft YaHei', sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      padding: 20px;
    }
    .container {
      text-align: center;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-radius: 20px;
      padding: 50px 60px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      max-width: 500px;
      width: 100%;
    }
    .flag {
      font-size: 100px;
      line-height: 1;
      margin-bottom: 30px;
      font-family: 'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji';
      filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
    }
    .info-line {
      font-size: 20px;
      font-weight: 600;
      margin: 20px 0;
      padding: 15px 20px;
      background: rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      backdrop-filter: blur(5px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      letter-spacing: 0.5px;
      line-height: 1.6;
    }
    .info-line .label {
      font-size: 14px;
      opacity: 0.8;
      display: block;
      margin-bottom: 5px;
      font-weight: 400;
    }
    .info-line .value {
      font-family: 'Courier New', monospace;
      font-weight: 700;
    }
    .network-badge {
      display: inline-block;
      padding: 4px 12px;
      background: rgba(255, 255, 255, 0.25);
      border-radius: 20px;
      font-size: 14px;
      margin-left: 10px;
      font-weight: 500;
    }
    .network-badge.hosting {
      background: rgba(255, 193, 7, 0.3);
    }
    .network-badge.isp {
      background: rgba(76, 175, 80, 0.3);
    }
    .tip {
      margin-top: 30px;
      padding-top: 25px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      font-size: 14px;
      opacity: 0.8;
    }
    @media (max-width: 600px) {
      .container {
        padding: 35px 30px;
      }
      .flag {
        font-size: 70px;
      }
      .info-line {
        font-size: 18px;
        padding: 12px 16px;
      }
      .info-line .label {
        font-size: 12px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="flag">${flagEmoji}</div>
    <div class="info-line">
      <span class="label">IP 地址</span>
      <span class="value">${ip}</span>
    </div>
    <div class="info-line">
      <span class="label">网络类型</span>
      <span class="value">${networkType}</span>
      <span class="network-badge ${networkType === 'Hosting' ? 'hosting' : 'isp'}">${networkType === 'Hosting' ? '🖥️ 数据中心' : '🏠 家庭/企业网络'}</span>
    </div>
    <div class="info-line">
      <span class="label">国家 / 地区</span>
      <span class="value">${countryName}${cityCN ? ' · ' + cityCN : ''}</span>
    </div>
    ${isp ? `<div class="info-line">
      <span class="label">网络运营商</span>
      <span class="value" style="font-size: 16px;">${isp}</span>
    </div>` : ''}
    <div class="tip">
      💡 API示例: https://ip.xuexi365.eu.org/?ip=114.114.114.114
    </div>
  </div>
</body>
</html>`;
}



export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === '/ipv4') {
      const ipv4 = getClientIPv4(request);
      if (ipv4) {
        return new Response(ipv4, {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=300"
          }
        });
      } else {
        return new Response("No IPv4 address detected", {
          status: 400,
          headers: { "Content-Type": "text/plain;charset=utf-8" }
        });
      }
    }

    if (pathname === '/ipv6') {
      const ipv6 = getClientIPv6(request);
      if (ipv6) {
        return new Response(ipv6, {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
            "Access-Control-Allow-Origin": "*",
            "Cache-Control": "public, max-age=300"
          }
        });
      } else {
        return new Response("No IPv6 address detected", {
          status: 400,
          headers: { "Content-Type": "text/plain;charset=utf-8" }
        });
      }
    }

    const ip = getClientIP(request, url);
    const geo = await getGeo(ip); // 依然保持原有获取地理信息的逻辑

    let countryCode = geo?.countryCode || geo?.country_code || request.cf?.country;
    let countryCN = COUNTRY_MAP[countryCode];
    if (!countryCN) {
      const countryEN = geo?.country || geo?.country_name;
      if (countryEN) {
        if (/[\u4e00-\u9fa5]/.test(countryEN)) {
          countryCN = countryEN;
        } else {
          const translated = await translateToChineseOnline(countryEN);
          countryCN = translated || countryEN;
        }
      } else {
        countryCN = "未知国家";
      }
      if (!/[\u{1F1E6}-\u{1F1FF}]/u.test(countryCN)) {
        countryCN = "🌍 " + countryCN;
      }
    }
    let city = geo?.city || geo?.regionName || geo?.region;
    let cityCN = "";
    if (city) {
      cityCN = CITY_MAP[city];
      if (!cityCN) {
        if (/[\u4e00-\u9fa5]/.test(city)) {
          cityCN = city;
        } else {
          const translated = await translateToChineseOnline(city);
          cityCN = translated || city;
        }
      }
    }

    const accept = request.headers.get("Accept") || "";
    const userAgent = request.headers.get("User-Agent") || "";
    const isBrowser = accept.includes("text/html") && !userAgent.match(/curl|wget|httpie|python|java|go-http/i);
    const isHosting = geo?.hosting === true || geo?.hosting === "true";
    const networkType = isHosting ? "Hosting" : "ISP";
    const isp = geo?.isp || geo?.org || geo?.as || "";

    if (isBrowser) {
      return new Response(generateHTML(countryCN, cityCN, ip, countryCode || "XX", networkType, isp), {
        headers: {
          "Content-Type": "text/html;charset=utf-8",
          "Cache-Control": "public, max-age=1800"
        }
      });
    } else {
      const result = `${countryCN}${cityCN ? " " + cityCN : ""}`;
      return new Response(result, {
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "public, max-age=1800",
          "X-IP": ip,
          "X-Country-Code": countryCode || "",
          "X-Translation-Used": (!COUNTRY_MAP[countryCode] || (city && !CITY_MAP[city])) ? "true" : "false"
        }
      });
    }
  }
};
