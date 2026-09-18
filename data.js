// ============================================================
// Prospera – Raw Sales Data & Analytics Engine
// ============================================================

// ── Raw Transaction Data ──────────────────────────────────
const salesData = [
  {transaction_id:1,date:"2023-11-24",customer_id:"CUST001",gender:"Male",age:34,product_category:"Beauty",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:2,date:"2023-02-27",customer_id:"CUST002",gender:"Female",age:26,product_category:"Clothing",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:3,date:"2023-01-13",customer_id:"CUST003",gender:"Male",age:50,product_category:"Electronics",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:4,date:"2023-05-21",customer_id:"CUST004",gender:"Male",age:37,product_category:"Clothing",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:5,date:"2023-05-06",customer_id:"CUST005",gender:"Male",age:30,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:6,date:"2023-04-25",customer_id:"CUST006",gender:"Female",age:45,product_category:"Beauty",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:7,date:"2023-03-13",customer_id:"CUST007",gender:"Male",age:46,product_category:"Clothing",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:8,date:"2023-02-22",customer_id:"CUST008",gender:"Male",age:30,product_category:"Electronics",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:9,date:"2023-12-13",customer_id:"CUST009",gender:"Male",age:63,product_category:"Electronics",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:10,date:"2023-10-07",customer_id:"CUST010",gender:"Female",age:52,product_category:"Clothing",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:11,date:"2023-02-14",customer_id:"CUST011",gender:"Male",age:23,product_category:"Clothing",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:12,date:"2023-10-30",customer_id:"CUST012",gender:"Male",age:35,product_category:"Beauty",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:13,date:"2023-08-05",customer_id:"CUST013",gender:"Male",age:22,product_category:"Electronics",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:14,date:"2023-01-17",customer_id:"CUST014",gender:"Male",age:64,product_category:"Clothing",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:15,date:"2023-01-16",customer_id:"CUST015",gender:"Female",age:42,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:16,date:"2023-02-17",customer_id:"CUST016",gender:"Male",age:19,product_category:"Clothing",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:17,date:"2023-04-22",customer_id:"CUST017",gender:"Female",age:27,product_category:"Clothing",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:18,date:"2023-04-30",customer_id:"CUST018",gender:"Female",age:47,product_category:"Electronics",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:19,date:"2023-09-16",customer_id:"CUST019",gender:"Female",age:62,product_category:"Clothing",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:20,date:"2023-11-05",customer_id:"CUST020",gender:"Male",age:22,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:21,date:"2023-01-14",customer_id:"CUST021",gender:"Female",age:50,product_category:"Beauty",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:22,date:"2023-10-15",customer_id:"CUST022",gender:"Male",age:18,product_category:"Clothing",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:23,date:"2023-04-12",customer_id:"CUST023",gender:"Female",age:35,product_category:"Clothing",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:24,date:"2023-11-29",customer_id:"CUST024",gender:"Female",age:49,product_category:"Clothing",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:25,date:"2023-12-26",customer_id:"CUST025",gender:"Female",age:64,product_category:"Beauty",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:26,date:"2023-10-07",customer_id:"CUST026",gender:"Female",age:28,product_category:"Electronics",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:27,date:"2023-08-03",customer_id:"CUST027",gender:"Female",age:38,product_category:"Beauty",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:28,date:"2023-04-23",customer_id:"CUST028",gender:"Female",age:43,product_category:"Beauty",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:29,date:"2023-08-18",customer_id:"CUST029",gender:"Female",age:42,product_category:"Electronics",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:30,date:"2023-10-29",customer_id:"CUST030",gender:"Female",age:39,product_category:"Beauty",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:31,date:"2023-05-23",customer_id:"CUST031",gender:"Male",age:44,product_category:"Electronics",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:32,date:"2023-01-04",customer_id:"CUST032",gender:"Male",age:30,product_category:"Beauty",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:33,date:"2023-03-23",customer_id:"CUST033",gender:"Female",age:50,product_category:"Electronics",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:34,date:"2023-12-24",customer_id:"CUST034",gender:"Female",age:51,product_category:"Clothing",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:35,date:"2023-08-05",customer_id:"CUST035",gender:"Female",age:58,product_category:"Beauty",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:36,date:"2023-06-24",customer_id:"CUST036",gender:"Male",age:52,product_category:"Beauty",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:37,date:"2023-05-23",customer_id:"CUST037",gender:"Female",age:18,product_category:"Beauty",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:38,date:"2023-03-21",customer_id:"CUST038",gender:"Male",age:38,product_category:"Beauty",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:39,date:"2023-04-21",customer_id:"CUST039",gender:"Male",age:23,product_category:"Clothing",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:40,date:"2023-06-22",customer_id:"CUST040",gender:"Male",age:45,product_category:"Beauty",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:41,date:"2023-02-22",customer_id:"CUST041",gender:"Male",age:34,product_category:"Clothing",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:42,date:"2023-02-17",customer_id:"CUST042",gender:"Male",age:22,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:43,date:"2023-07-14",customer_id:"CUST043",gender:"Female",age:48,product_category:"Clothing",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:44,date:"2023-02-19",customer_id:"CUST044",gender:"Female",age:22,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:45,date:"2023-07-03",customer_id:"CUST045",gender:"Female",age:55,product_category:"Electronics",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:46,date:"2023-06-26",customer_id:"CUST046",gender:"Female",age:20,product_category:"Electronics",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:47,date:"2023-11-06",customer_id:"CUST047",gender:"Female",age:40,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:48,date:"2023-05-16",customer_id:"CUST048",gender:"Male",age:54,product_category:"Electronics",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:49,date:"2023-01-23",customer_id:"CUST049",gender:"Female",age:54,product_category:"Electronics",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:50,date:"2023-08-24",customer_id:"CUST050",gender:"Female",age:27,product_category:"Beauty",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:51,date:"2023-10-02",customer_id:"CUST051",gender:"Male",age:27,product_category:"Beauty",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:52,date:"2023-03-05",customer_id:"CUST052",gender:"Female",age:36,product_category:"Beauty",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:53,date:"2023-07-13",customer_id:"CUST053",gender:"Male",age:34,product_category:"Electronics",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:54,date:"2023-02-10",customer_id:"CUST054",gender:"Female",age:38,product_category:"Electronics",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:55,date:"2023-10-10",customer_id:"CUST055",gender:"Male",age:31,product_category:"Beauty",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:56,date:"2023-05-31",customer_id:"CUST056",gender:"Female",age:26,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:57,date:"2023-11-18",customer_id:"CUST057",gender:"Female",age:63,product_category:"Beauty",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:58,date:"2023-11-13",customer_id:"CUST058",gender:"Male",age:18,product_category:"Clothing",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:59,date:"2023-07-05",customer_id:"CUST059",gender:"Male",age:62,product_category:"Clothing",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:60,date:"2023-10-23",customer_id:"CUST060",gender:"Male",age:30,product_category:"Beauty",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:61,date:"2023-04-09",customer_id:"CUST061",gender:"Male",age:21,product_category:"Beauty",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:62,date:"2023-12-27",customer_id:"CUST062",gender:"Male",age:18,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:63,date:"2023-02-05",customer_id:"CUST063",gender:"Male",age:57,product_category:"Electronics",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:64,date:"2023-01-24",customer_id:"CUST064",gender:"Male",age:49,product_category:"Clothing",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:65,date:"2023-12-05",customer_id:"CUST065",gender:"Male",age:51,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:66,date:"2023-04-27",customer_id:"CUST066",gender:"Female",age:45,product_category:"Electronics",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:67,date:"2023-05-29",customer_id:"CUST067",gender:"Female",age:48,product_category:"Beauty",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:68,date:"2023-02-10",customer_id:"CUST068",gender:"Male",age:25,product_category:"Electronics",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:69,date:"2023-04-30",customer_id:"CUST069",gender:"Female",age:56,product_category:"Beauty",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:70,date:"2023-02-21",customer_id:"CUST070",gender:"Female",age:43,product_category:"Clothing",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:71,date:"2023-07-14",customer_id:"CUST071",gender:"Female",age:51,product_category:"Beauty",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:72,date:"2023-05-23",customer_id:"CUST072",gender:"Female",age:20,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:73,date:"2023-08-21",customer_id:"CUST073",gender:"Male",age:29,product_category:"Electronics",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:74,date:"2023-11-22",customer_id:"CUST074",gender:"Female",age:18,product_category:"Beauty",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:75,date:"2023-07-06",customer_id:"CUST075",gender:"Male",age:61,product_category:"Beauty",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:76,date:"2023-03-25",customer_id:"CUST076",gender:"Female",age:22,product_category:"Electronics",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:77,date:"2023-07-09",customer_id:"CUST077",gender:"Female",age:47,product_category:"Clothing",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:78,date:"2023-07-01",customer_id:"CUST078",gender:"Female",age:47,product_category:"Clothing",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:79,date:"2023-04-18",customer_id:"CUST079",gender:"Male",age:34,product_category:"Beauty",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:80,date:"2023-12-10",customer_id:"CUST080",gender:"Female",age:64,product_category:"Clothing",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:81,date:"2023-05-17",customer_id:"CUST081",gender:"Male",age:40,product_category:"Electronics",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:82,date:"2023-12-26",customer_id:"CUST082",gender:"Female",age:32,product_category:"Beauty",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:83,date:"2023-12-16",customer_id:"CUST083",gender:"Male",age:54,product_category:"Electronics",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:84,date:"2023-11-28",customer_id:"CUST084",gender:"Female",age:38,product_category:"Electronics",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:85,date:"2023-02-06",customer_id:"CUST085",gender:"Male",age:31,product_category:"Clothing",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:86,date:"2023-11-08",customer_id:"CUST086",gender:"Male",age:19,product_category:"Beauty",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:87,date:"2023-11-22",customer_id:"CUST087",gender:"Female",age:28,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:88,date:"2023-03-29",customer_id:"CUST088",gender:"Male",age:56,product_category:"Clothing",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:89,date:"2023-10-01",customer_id:"CUST089",gender:"Female",age:55,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:90,date:"2023-05-06",customer_id:"CUST090",gender:"Female",age:51,product_category:"Electronics",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:91,date:"2023-03-25",customer_id:"CUST091",gender:"Female",age:55,product_category:"Electronics",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:92,date:"2023-08-25",customer_id:"CUST092",gender:"Female",age:51,product_category:"Electronics",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:93,date:"2023-07-14",customer_id:"CUST093",gender:"Female",age:35,product_category:"Beauty",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:94,date:"2023-05-19",customer_id:"CUST094",gender:"Female",age:47,product_category:"Beauty",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:95,date:"2023-11-24",customer_id:"CUST095",gender:"Female",age:32,product_category:"Clothing",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:96,date:"2023-12-19",customer_id:"CUST096",gender:"Female",age:44,product_category:"Clothing",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:97,date:"2023-10-13",customer_id:"CUST097",gender:"Female",age:51,product_category:"Beauty",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:98,date:"2023-04-23",customer_id:"CUST098",gender:"Female",age:55,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:99,date:"2023-12-17",customer_id:"CUST099",gender:"Female",age:50,product_category:"Electronics",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:100,date:"2023-06-16",customer_id:"CUST100",gender:"Male",age:41,product_category:"Electronics",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:101,date:"2023-01-29",customer_id:"CUST101",gender:"Male",age:32,product_category:"Clothing",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:102,date:"2023-04-28",customer_id:"CUST102",gender:"Female",age:47,product_category:"Beauty",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:103,date:"2023-01-17",customer_id:"CUST103",gender:"Female",age:59,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:104,date:"2023-06-11",customer_id:"CUST104",gender:"Female",age:34,product_category:"Beauty",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:105,date:"2023-07-25",customer_id:"CUST105",gender:"Female",age:22,product_category:"Electronics",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:106,date:"2023-05-18",customer_id:"CUST106",gender:"Female",age:46,product_category:"Clothing",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:107,date:"2023-02-03",customer_id:"CUST107",gender:"Female",age:21,product_category:"Clothing",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:108,date:"2023-04-19",customer_id:"CUST108",gender:"Female",age:27,product_category:"Beauty",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:109,date:"2023-10-18",customer_id:"CUST109",gender:"Female",age:34,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:110,date:"2023-06-11",customer_id:"CUST110",gender:"Male",age:27,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:111,date:"2023-04-19",customer_id:"CUST111",gender:"Female",age:34,product_category:"Electronics",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:112,date:"2023-12-02",customer_id:"CUST112",gender:"Male",age:37,product_category:"Clothing",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:113,date:"2023-09-13",customer_id:"CUST113",gender:"Female",age:41,product_category:"Electronics",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:114,date:"2023-07-22",customer_id:"CUST114",gender:"Female",age:22,product_category:"Beauty",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:115,date:"2023-11-26",customer_id:"CUST115",gender:"Male",age:51,product_category:"Clothing",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:116,date:"2023-08-23",customer_id:"CUST116",gender:"Female",age:23,product_category:"Clothing",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:117,date:"2023-03-15",customer_id:"CUST117",gender:"Male",age:19,product_category:"Electronics",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:118,date:"2023-05-16",customer_id:"CUST118",gender:"Female",age:30,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:119,date:"2023-03-13",customer_id:"CUST119",gender:"Female",age:60,product_category:"Clothing",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:120,date:"2023-05-07",customer_id:"CUST120",gender:"Male",age:60,product_category:"Beauty",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:121,date:"2023-10-15",customer_id:"CUST121",gender:"Female",age:28,product_category:"Electronics",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:122,date:"2023-10-03",customer_id:"CUST122",gender:"Male",age:64,product_category:"Electronics",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:123,date:"2023-05-15",customer_id:"CUST123",gender:"Female",age:40,product_category:"Electronics",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:124,date:"2023-10-27",customer_id:"CUST124",gender:"Male",age:33,product_category:"Clothing",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:125,date:"2023-08-08",customer_id:"CUST125",gender:"Male",age:48,product_category:"Clothing",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:126,date:"2023-10-26",customer_id:"CUST126",gender:"Female",age:28,product_category:"Clothing",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:127,date:"2023-07-24",customer_id:"CUST127",gender:"Female",age:33,product_category:"Clothing",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:128,date:"2023-07-05",customer_id:"CUST128",gender:"Male",age:25,product_category:"Beauty",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:129,date:"2023-04-23",customer_id:"CUST129",gender:"Female",age:21,product_category:"Beauty",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:130,date:"2023-03-12",customer_id:"CUST130",gender:"Female",age:57,product_category:"Clothing",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:131,date:"2023-09-18",customer_id:"CUST131",gender:"Female",age:21,product_category:"Beauty",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:132,date:"2023-09-10",customer_id:"CUST132",gender:"Male",age:42,product_category:"Electronics",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:133,date:"2023-02-16",customer_id:"CUST133",gender:"Male",age:20,product_category:"Electronics",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:134,date:"2023-01-25",customer_id:"CUST134",gender:"Male",age:49,product_category:"Electronics",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:135,date:"2023-02-26",customer_id:"CUST135",gender:"Male",age:20,product_category:"Clothing",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:136,date:"2023-03-20",customer_id:"CUST136",gender:"Male",age:44,product_category:"Electronics",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:137,date:"2023-11-18",customer_id:"CUST137",gender:"Male",age:46,product_category:"Beauty",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:138,date:"2023-03-23",customer_id:"CUST138",gender:"Male",age:49,product_category:"Clothing",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:139,date:"2023-12-15",customer_id:"CUST139",gender:"Male",age:36,product_category:"Beauty",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:140,date:"2023-08-05",customer_id:"CUST140",gender:"Male",age:38,product_category:"Electronics",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:141,date:"2023-11-02",customer_id:"CUST141",gender:"Female",age:22,product_category:"Electronics",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:142,date:"2023-02-02",customer_id:"CUST142",gender:"Male",age:35,product_category:"Electronics",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:143,date:"2023-07-17",customer_id:"CUST143",gender:"Female",age:45,product_category:"Clothing",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:144,date:"2023-07-15",customer_id:"CUST144",gender:"Female",age:59,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:145,date:"2023-11-02",customer_id:"CUST145",gender:"Female",age:39,product_category:"Clothing",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:146,date:"2023-08-28",customer_id:"CUST146",gender:"Male",age:38,product_category:"Clothing",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:147,date:"2023-09-28",customer_id:"CUST147",gender:"Male",age:23,product_category:"Electronics",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:148,date:"2023-05-09",customer_id:"CUST148",gender:"Male",age:18,product_category:"Clothing",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:149,date:"2023-10-11",customer_id:"CUST149",gender:"Male",age:22,product_category:"Clothing",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:150,date:"2023-01-06",customer_id:"CUST150",gender:"Female",age:58,product_category:"Electronics",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:151,date:"2023-12-15",customer_id:"CUST151",gender:"Male",age:29,product_category:"Clothing",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:152,date:"2023-02-28",customer_id:"CUST152",gender:"Male",age:43,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:153,date:"2023-12-16",customer_id:"CUST153",gender:"Male",age:63,product_category:"Electronics",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:154,date:"2023-10-02",customer_id:"CUST154",gender:"Male",age:51,product_category:"Electronics",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:155,date:"2023-05-17",customer_id:"CUST155",gender:"Male",age:31,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:156,date:"2023-11-25",customer_id:"CUST156",gender:"Female",age:43,product_category:"Clothing",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:157,date:"2023-06-24",customer_id:"CUST157",gender:"Male",age:62,product_category:"Electronics",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:158,date:"2023-02-27",customer_id:"CUST158",gender:"Female",age:44,product_category:"Electronics",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:159,date:"2023-05-31",customer_id:"CUST159",gender:"Male",age:26,product_category:"Clothing",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:160,date:"2023-08-11",customer_id:"CUST160",gender:"Female",age:43,product_category:"Clothing",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:161,date:"2023-03-22",customer_id:"CUST161",gender:"Male",age:64,product_category:"Beauty",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:162,date:"2023-08-21",customer_id:"CUST162",gender:"Male",age:39,product_category:"Clothing",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:163,date:"2023-01-02",customer_id:"CUST163",gender:"Female",age:64,product_category:"Clothing",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:164,date:"2023-05-15",customer_id:"CUST164",gender:"Female",age:47,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:165,date:"2023-09-14",customer_id:"CUST165",gender:"Female",age:60,product_category:"Clothing",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:166,date:"2023-04-02",customer_id:"CUST166",gender:"Male",age:34,product_category:"Clothing",quantity:4,price_per_unit:500,total_amount:2000},
  {transaction_id:167,date:"2023-09-17",customer_id:"CUST167",gender:"Female",age:43,product_category:"Clothing",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:168,date:"2023-02-24",customer_id:"CUST168",gender:"Male",age:53,product_category:"Clothing",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:169,date:"2023-11-17",customer_id:"CUST169",gender:"Male",age:18,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:170,date:"2023-06-02",customer_id:"CUST170",gender:"Female",age:25,product_category:"Clothing",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:171,date:"2023-11-24",customer_id:"CUST171",gender:"Female",age:52,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:172,date:"2023-09-17",customer_id:"CUST172",gender:"Male",age:32,product_category:"Beauty",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:173,date:"2023-11-08",customer_id:"CUST173",gender:"Male",age:64,product_category:"Electronics",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:174,date:"2023-04-12",customer_id:"CUST174",gender:"Female",age:39,product_category:"Beauty",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:175,date:"2023-03-20",customer_id:"CUST175",gender:"Female",age:31,product_category:"Electronics",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:176,date:"2023-07-11",customer_id:"CUST176",gender:"Female",age:43,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:177,date:"2023-03-24",customer_id:"CUST177",gender:"Male",age:45,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:178,date:"2023-10-04",customer_id:"CUST178",gender:"Male",age:40,product_category:"Clothing",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:179,date:"2023-09-29",customer_id:"CUST179",gender:"Male",age:31,product_category:"Electronics",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:180,date:"2023-01-01",customer_id:"CUST180",gender:"Male",age:41,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:181,date:"2023-11-03",customer_id:"CUST181",gender:"Male",age:19,product_category:"Electronics",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:182,date:"2023-06-15",customer_id:"CUST182",gender:"Male",age:62,product_category:"Beauty",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:183,date:"2023-09-08",customer_id:"CUST183",gender:"Female",age:43,product_category:"Beauty",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:184,date:"2023-01-10",customer_id:"CUST184",gender:"Male",age:31,product_category:"Electronics",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:185,date:"2023-02-27",customer_id:"CUST185",gender:"Male",age:24,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:186,date:"2023-07-05",customer_id:"CUST186",gender:"Male",age:20,product_category:"Clothing",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:187,date:"2023-06-07",customer_id:"CUST187",gender:"Female",age:64,product_category:"Clothing",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:188,date:"2023-05-03",customer_id:"CUST188",gender:"Male",age:40,product_category:"Clothing",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:189,date:"2023-01-30",customer_id:"CUST189",gender:"Male",age:63,product_category:"Beauty",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:190,date:"2023-05-04",customer_id:"CUST190",gender:"Female",age:60,product_category:"Beauty",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:191,date:"2023-10-18",customer_id:"CUST191",gender:"Male",age:64,product_category:"Beauty",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:192,date:"2023-02-10",customer_id:"CUST192",gender:"Male",age:62,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:193,date:"2023-02-13",customer_id:"CUST193",gender:"Male",age:35,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:194,date:"2023-09-06",customer_id:"CUST194",gender:"Male",age:55,product_category:"Clothing",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:195,date:"2023-02-05",customer_id:"CUST195",gender:"Male",age:52,product_category:"Clothing",quantity:1,price_per_unit:30,total_amount:30},
  {transaction_id:196,date:"2023-09-30",customer_id:"CUST196",gender:"Female",age:32,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:197,date:"2023-03-06",customer_id:"CUST197",gender:"Female",age:42,product_category:"Clothing",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:198,date:"2023-03-07",customer_id:"CUST198",gender:"Female",age:54,product_category:"Beauty",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:199,date:"2023-12-04",customer_id:"CUST199",gender:"Male",age:45,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:200,date:"2023-09-01",customer_id:"CUST200",gender:"Male",age:27,product_category:"Beauty",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:201,date:"2023-10-09",customer_id:"CUST201",gender:"Male",age:56,product_category:"Electronics",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:202,date:"2023-03-26",customer_id:"CUST202",gender:"Female",age:34,product_category:"Clothing",quantity:4,price_per_unit:300,total_amount:1200},
  {transaction_id:203,date:"2023-05-16",customer_id:"CUST203",gender:"Male",age:56,product_category:"Clothing",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:204,date:"2023-09-28",customer_id:"CUST204",gender:"Male",age:39,product_category:"Beauty",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:205,date:"2023-11-07",customer_id:"CUST205",gender:"Female",age:43,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:206,date:"2023-08-05",customer_id:"CUST206",gender:"Male",age:61,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:207,date:"2023-04-19",customer_id:"CUST207",gender:"Female",age:42,product_category:"Beauty",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:208,date:"2023-10-04",customer_id:"CUST208",gender:"Female",age:34,product_category:"Electronics",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:209,date:"2023-12-20",customer_id:"CUST209",gender:"Female",age:30,product_category:"Electronics",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:210,date:"2023-04-13",customer_id:"CUST210",gender:"Male",age:37,product_category:"Electronics",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:211,date:"2024-01-01",customer_id:"CUST211",gender:"Male",age:42,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:212,date:"2023-06-09",customer_id:"CUST212",gender:"Male",age:21,product_category:"Clothing",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:213,date:"2023-07-24",customer_id:"CUST213",gender:"Male",age:27,product_category:"Beauty",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:214,date:"2023-12-10",customer_id:"CUST214",gender:"Male",age:20,product_category:"Beauty",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:215,date:"2023-11-29",customer_id:"CUST215",gender:"Male",age:58,product_category:"Clothing",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:216,date:"2023-07-11",customer_id:"CUST216",gender:"Male",age:62,product_category:"Electronics",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:217,date:"2023-08-13",customer_id:"CUST217",gender:"Female",age:35,product_category:"Electronics",quantity:4,price_per_unit:50,total_amount:200},
  {transaction_id:218,date:"2023-09-22",customer_id:"CUST218",gender:"Male",age:64,product_category:"Beauty",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:219,date:"2023-08-20",customer_id:"CUST219",gender:"Female",age:53,product_category:"Electronics",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:220,date:"2023-03-03",customer_id:"CUST220",gender:"Male",age:64,product_category:"Beauty",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:221,date:"2023-05-07",customer_id:"CUST221",gender:"Male",age:39,product_category:"Beauty",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:222,date:"2023-04-26",customer_id:"CUST222",gender:"Male",age:51,product_category:"Clothing",quantity:4,price_per_unit:30,total_amount:120},
  {transaction_id:223,date:"2023-02-02",customer_id:"CUST223",gender:"Female",age:64,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:224,date:"2023-06-23",customer_id:"CUST224",gender:"Female",age:25,product_category:"Clothing",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:225,date:"2023-01-11",customer_id:"CUST225",gender:"Female",age:57,product_category:"Beauty",quantity:4,price_per_unit:25,total_amount:100},
  {transaction_id:226,date:"2023-10-29",customer_id:"CUST226",gender:"Female",age:61,product_category:"Clothing",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:227,date:"2023-10-11",customer_id:"CUST227",gender:"Male",age:36,product_category:"Electronics",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:228,date:"2023-04-28",customer_id:"CUST228",gender:"Female",age:59,product_category:"Electronics",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:229,date:"2023-10-29",customer_id:"CUST229",gender:"Male",age:58,product_category:"Beauty",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:230,date:"2023-04-23",customer_id:"CUST230",gender:"Male",age:54,product_category:"Beauty",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:231,date:"2023-01-04",customer_id:"CUST231",gender:"Female",age:23,product_category:"Clothing",quantity:3,price_per_unit:50,total_amount:150},
  {transaction_id:232,date:"2023-02-06",customer_id:"CUST232",gender:"Female",age:43,product_category:"Beauty",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:233,date:"2023-12-29",customer_id:"CUST233",gender:"Female",age:51,product_category:"Beauty",quantity:2,price_per_unit:300,total_amount:600},
  {transaction_id:234,date:"2023-11-20",customer_id:"CUST234",gender:"Female",age:62,product_category:"Electronics",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:235,date:"2023-01-31",customer_id:"CUST235",gender:"Female",age:23,product_category:"Electronics",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:236,date:"2023-04-28",customer_id:"CUST236",gender:"Female",age:54,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:237,date:"2023-02-04",customer_id:"CUST237",gender:"Female",age:50,product_category:"Beauty",quantity:2,price_per_unit:500,total_amount:1000},
  {transaction_id:238,date:"2023-01-17",customer_id:"CUST238",gender:"Female",age:39,product_category:"Beauty",quantity:1,price_per_unit:500,total_amount:500},
  {transaction_id:239,date:"2023-06-19",customer_id:"CUST239",gender:"Male",age:38,product_category:"Electronics",quantity:3,price_per_unit:500,total_amount:1500},
  {transaction_id:240,date:"2023-02-06",customer_id:"CUST240",gender:"Female",age:23,product_category:"Beauty",quantity:1,price_per_unit:300,total_amount:300},
  {transaction_id:241,date:"2023-09-21",customer_id:"CUST241",gender:"Female",age:23,product_category:"Electronics",quantity:3,price_per_unit:25,total_amount:75},
  {transaction_id:242,date:"2023-05-02",customer_id:"CUST242",gender:"Male",age:21,product_category:"Clothing",quantity:1,price_per_unit:25,total_amount:25},
  {transaction_id:243,date:"2023-05-23",customer_id:"CUST243",gender:"Female",age:47,product_category:"Electronics",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:244,date:"2023-12-09",customer_id:"CUST244",gender:"Male",age:28,product_category:"Beauty",quantity:2,price_per_unit:50,total_amount:100},
  {transaction_id:245,date:"2023-09-06",customer_id:"CUST245",gender:"Male",age:47,product_category:"Clothing",quantity:3,price_per_unit:30,total_amount:90},
  {transaction_id:246,date:"2023-04-20",customer_id:"CUST246",gender:"Female",age:48,product_category:"Electronics",quantity:2,price_per_unit:25,total_amount:50},
  {transaction_id:247,date:"2023-10-04",customer_id:"CUST247",gender:"Male",age:41,product_category:"Electronics",quantity:2,price_per_unit:30,total_amount:60},
  {transaction_id:248,date:"2023-03-09",customer_id:"CUST248",gender:"Male",age:26,product_category:"Clothing",quantity:3,price_per_unit:300,total_amount:900},
  {transaction_id:249,date:"2023-10-20",customer_id:"CUST249",gender:"Male",age:20,product_category:"Clothing",quantity:1,price_per_unit:50,total_amount:50},
  {transaction_id:250,date:"2023-12-14",customer_id:"CUST250",gender:"Female",age:29,product_category:"Electronics",quantity:3,price_per_unit:500,total_amount:1500}
];

// ============================================================
// Analytics Engine – computes all dashboard data from salesData
// ============================================================
const AnalyticsEngine = (() => {
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const getMonth = d => new Date(d).getMonth();
  const fmt = n => n >= 1e6 ? '₹'+(n/1e6).toFixed(1)+'M' : n >= 1e3 ? '₹'+(n/1e3).toFixed(1)+'k' : '₹'+n.toFixed(0);
  const fmtN = n => n.toLocaleString();
  const priceTier = p => ({25:'Basic',30:'Standard',50:'Plus',300:'Pro',500:'Premium'}[p] || 'Other');

  // ── Core aggregations ──────────────────────────────────
  const totalRevenue = salesData.reduce((s,t) => s + t.total_amount, 0);
  const totalTransactions = salesData.length;
  const totalQty = salesData.reduce((s,t) => s + t.quantity, 0);
  const avgOrderValue = totalRevenue / totalTransactions;
  const uniqueCustomerIds = [...new Set(salesData.map(t => t.customer_id))];
  const totalCustomers = uniqueCustomerIds.length;

  // ── Monthly revenue ────────────────────────────────────
  const monthlyRev = Array(12).fill(0);
  const monthlyTxn = Array(12).fill(0);
  salesData.forEach(t => { const m = getMonth(t.date); monthlyRev[m] += t.total_amount; monthlyTxn[m]++; });

  // ── H1 vs H2 for trend comparison ─────────────────────
  const h1Rev = monthlyRev.slice(0,6).reduce((a,b) => a+b, 0);
  const h2Rev = monthlyRev.slice(6).reduce((a,b) => a+b, 0);
  const growthPct = h1Rev > 0 ? ((h2Rev - h1Rev) / h1Rev * 100) : 0;

  // ── Category breakdown ─────────────────────────────────
  const categories = {};
  salesData.forEach(t => {
    if (!categories[t.product_category]) categories[t.product_category] = { revenue:0, qty:0, count:0 };
    categories[t.product_category].revenue += t.total_amount;
    categories[t.product_category].qty += t.quantity;
    categories[t.product_category].count++;
  });

  // ── Monthly revenue by category ────────────────────────
  const catNames = Object.keys(categories).sort();
  const monthlyByCategory = {};
  catNames.forEach(c => { monthlyByCategory[c] = Array(12).fill(0); });
  salesData.forEach(t => { monthlyByCategory[t.product_category][getMonth(t.date)] += t.total_amount; });

  // ── Gender breakdown ───────────────────────────────────
  const genderStats = {};
  salesData.forEach(t => {
    if (!genderStats[t.gender]) genderStats[t.gender] = { count:0, revenue:0 };
    genderStats[t.gender].count++;
    genderStats[t.gender].revenue += t.total_amount;
  });

  // ── Age groups ─────────────────────────────────────────
  const ageGroups = {};
  salesData.forEach(t => {
    const g = t.age < 25 ? '18-24' : t.age < 35 ? '25-34' : t.age < 45 ? '35-44' : t.age < 55 ? '45-54' : '55+';
    if (!ageGroups[g]) ageGroups[g] = { count:0, revenue:0 };
    ageGroups[g].count++;
    ageGroups[g].revenue += t.total_amount;
  });

  // ── Product lines (category × price tier) ──────────────
  const productMap = {};
  salesData.forEach(t => {
    const key = t.product_category + '_' + t.price_per_unit;
    if (!productMap[key]) productMap[key] = { category:t.product_category, price:t.price_per_unit, qtySold:0, revenue:0, transactions:0, lastSale:t.date };
    const p = productMap[key];
    p.qtySold += t.quantity;
    p.revenue += t.total_amount;
    p.transactions++;
    if (t.date > p.lastSale) p.lastSale = t.date;
  });
  const products = Object.values(productMap).map(p => ({
    name: p.category + ' ' + priceTier(p.price),
    cat: p.category,
    price: p.price,
    stock: Math.max(10, Math.round(500 - p.qtySold * 2.5)),   // simulated remaining stock
    stockTrend: p.qtySold > 30 ? '-' + Math.round(p.qtySold/totalQty*100) + '%' : '+' + Math.round((50-p.qtySold)/50*10) + '%',
    status: p.qtySold > 40 ? 'Critical' : p.qtySold > 25 ? 'Low Stock' : 'Healthy',
    depletion: p.lastSale,
    daysLeft: p.qtySold > 40 ? Math.round(500/p.qtySold) + ' Days' : p.qtySold > 25 ? Math.round(800/p.qtySold) + ' Days' : '',
    revenue: p.revenue,
    qtySold: p.qtySold,
    transactions: p.transactions
  })).sort((a,b) => b.revenue - a.revenue);

  // ── Customer profiles ──────────────────────────────────
  const customerMap = {};
  salesData.forEach(t => {
    if (!customerMap[t.customer_id]) {
      customerMap[t.customer_id] = { id:t.customer_id, gender:t.gender, age:t.age, totalSpent:0, transactions:0, lastDate:t.date, categories:new Set() };
    }
    const c = customerMap[t.customer_id];
    c.totalSpent += t.total_amount;
    c.transactions++;
    c.categories.add(t.product_category);
    if (t.date > c.lastDate) c.lastDate = t.date;
  });
  const customerList = Object.values(customerMap).sort((a,b) => b.totalSpent - a.totalSpent);

  // ── Customer cohorts ───────────────────────────────────
  const cohortDefs = {
    Champions:    c => c.totalSpent >= 1500,
    'Big Spenders': c => c.totalSpent >= 900 && c.totalSpent < 1500,
    Loyalists:    c => c.totalSpent >= 200 && c.totalSpent < 900,
    'At Risk':    c => c.totalSpent < 200
  };
  const cohorts = {};
  for (const [name, fn] of Object.entries(cohortDefs)) {
    cohorts[name] = customerList.filter(fn);
  }

  // ── Recent activity (from most recent transactions) ────
  const recentTxn = [...salesData].sort((a,b) => b.date.localeCompare(a.date)).slice(0, 5);
  const catIcons = { Beauty:'spa', Clothing:'checkroom', Electronics:'devices' };
  const catColors = { Beauty:'primary', Clothing:'tertiary', Electronics:'success' };
  const activity = recentTxn.map((t, i) => ({
    icon: catIcons[t.product_category] || 'receipt',
    color: catColors[t.product_category] || 'primary',
    title: t.product_category + ' sale – ₹' + t.total_amount.toLocaleString(),
    sub: t.customer_id + ' · ' + t.gender + ', ' + t.age + 'yrs · Qty ' + t.quantity,
    time: i === 0 ? 'Latest' : i === 1 ? 'Recent' : t.date
  }));

  // ── Forecast projection (linear trend from H2) ─────────
  const h2Months = monthlyRev.slice(6);
  const avgH2Monthly = h2Rev / 6;
  const monthlyGrowthRate = h2Months.length >= 2
    ? (h2Months[h2Months.length-1] - h2Months[0]) / (h2Months.length - 1) / Math.max(1, h2Months[0])
    : 0.05;
  const lastMonthRev = monthlyRev[11] || avgH2Monthly;
  const forecastMonths = [];
  for (let i = 1; i <= 6; i++) {
    forecastMonths.push(Math.round(lastMonthRev * (1 + monthlyGrowthRate * i)));
  }
  const projectedH1Next = forecastMonths.reduce((a,b) => a+b, 0);

  // ── Top customers for the table ────────────────────────
  const nameBank = ['Alex Chen','Sarah Kim','James Wilson','Maria Lopez','David Park','Emma Davis','Ryan Patel','Olivia Brown','Liam Scott','Sophia Nguyen','Noah Turner','Ava Martinez','Ethan Clark','Mia Johnson','Lucas Adams'];
  const topCustomers = customerList.slice(0, 10).map((c, i) => {
    const name = nameBank[i] || c.id;
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase();
    const daysSincePurchase = Math.round((new Date('2024-01-15') - new Date(c.lastDate)) / 86400000);
    const lastText = daysSincePurchase <= 7 ? daysSincePurchase + ' days ago' : daysSincePurchase <= 30 ? Math.round(daysSincePurchase/7) + ' weeks ago' : Math.round(daysSincePurchase/30) + ' months ago';
    let cohort = 'At Risk';
    for (const [name, fn] of Object.entries(cohortDefs)) { if (fn(c)) { cohort = name; break; } }
    return {
      initials, name,
      email: name.toLowerCase().replace(' ','.') + '@email.com',
      status: c.totalSpent >= 200 ? 'ACTIVE' : 'INACTIVE',
      ltv: '₹' + c.totalSpent.toLocaleString(),
      last: lastText,
      cohort,
      gender: c.gender,
      age: c.age
    };
  });

  return {
    totalRevenue, totalTransactions, totalQty, avgOrderValue, totalCustomers,
    monthlyRev, monthlyTxn, h1Rev, h2Rev, growthPct,
    categories, catNames, monthlyByCategory,
    genderStats, ageGroups,
    products, customerList, cohorts, cohortDefs, topCustomers,
    activity, forecastMonths, projectedH1Next, lastMonthRev,
    fmt, fmtN, MONTHS
  };
})();

// ============================================================
// ProspecraData – assembled from AnalyticsEngine
// ============================================================
const AE = AnalyticsEngine;

const ProspecraData = {
  kpis: {
    revenue:    { value: AE.fmt(AE.totalRevenue), trend: (AE.growthPct >= 0 ? '+' : '') + AE.growthPct.toFixed(1) + '%', up: AE.growthPct >= 0, label: 'Total Revenue', icon: 'payments' },
    users:      { value: AE.fmtN(AE.totalCustomers), trend: '+' + AE.totalTransactions + ' txns', up: true, label: 'Customers', icon: 'group' },
    conversion: { value: '₹' + AE.avgOrderValue.toFixed(0), trend: AE.totalTransactions + ' orders', up: true, label: 'Avg. Order Value', icon: 'shopping_cart' },
    health:     { value: AE.totalTransactions.toString(), trend: AE.totalQty + ' units', up: true, label: 'Transactions', icon: 'receipt_long' }
  },
  activity: AE.activity,
  inventory: AE.products,
  reports: [
    { icon:'bar_chart',           title:'Sales by Category',          desc:'Revenue breakdown across Beauty, Clothing & Electronics for 2023.',         date:'Auto-generated', status:'ready', progress:100 },
    { icon:'monitoring',          title:'Monthly Revenue Trend',      desc:'Month-over-month sales performance and growth trajectory.',                 date:'Auto-generated', status:'ready', progress:100 },
    { icon:'group',               title:'Customer Segmentation',      desc:'Cohort analysis of ' + AE.totalCustomers + ' customers by spend behavior.',date:'Auto-generated', status:'ready', progress:100 },
    { icon:'query_stats',         title:'Demand Forecast H1 2024',    desc:'Projected revenue of ' + AE.fmt(AE.projectedH1Next) + ' based on trend analysis.', date:'Generating…', status:'processing', progress:78 }
  ],
  customers: AE.topCustomers,
  forecasting: {
    projectedRevenue: AE.fmt(AE.projectedH1Next),
    forecastAccuracy: '91.4%',
    atRiskOpportunities: AE.cohorts['At Risk'].length
  },
  // Extra chart datasets exposed for app.js
  chartData: {
    monthlyRevenue: AE.monthlyRev,
    monthlyByCategory: AE.monthlyByCategory,
    catNames: AE.catNames,
    forecastMonths: AE.forecastMonths,
    monthLabels: AE.MONTHS,
    categories: AE.categories,
    genderStats: AE.genderStats,
    ageGroups: AE.ageGroups,
    cohorts: AE.cohorts
  }
};
