//Find mac.address
let text = "69.43.112.233(38:f8:B7:90:45:92):68 -> 217.70.100.113(00:21:87:79:9c:d9):67 UDP len:576 ttl:64)"
/*
{num} - сортирует числа в строке в группы по заданному кол-ву.

x = "1230";
regEx = /\d{2}/g;
//=> (2) ["12", "30"]
*/
let regEx = /([0-9A-Fa-f]{2}:){5}[0-9A-Fa-f]{2}/gi;

console.log(text.match(regEx)); //=>  ["38:f8:B7:90:45:92", "00:21:87:79:9c:d9"]
/*
Jan 13 00:48:59: DROP service 68->67(udp) from 213.92.153.167 to 69.43.107.219, 
prefix: "spoof iana-0/8" (in: eth0 69.43.112.233(38:f8:b7:90:45:92):68 -> 
217.70.100.113(00:21:87:79:9c:d9):67 UDP len:576 ttl:64)

Jan 13 12:02:48: ACCEPT service dns from 74.125.186.208 to firewall(pub-nic-dns), 
prefix: "none" (in: eth0 74.125.186.208(00:1a:e3:52:5d:8e):36008 -> 
140.105.63.158(00:1a:9a:86:2e:62):53 UDP len:82 ttl:38)

Jan 13 17:44:52: DROP service 68->67(udp) from 172.45.240.237 to 217.70.177.60, 
prefix: "spoof iana-0/8" (in: eth0 216.34.90.16(00:21:91:fe:a2:6f):68 -> 
69.43.85.253(00:07:e1:7c:53:db):67 UDP len:328 ttl:64)

Jan 13 17:52:08: ACCEPT service http from 213.121.184.130 to firewall(pub-nic), 
prefix: "none" (in: eth0 213.121.184.130(00:05:2e:6a:a4:14):8504 -> 
140.105.63.164(00:60:11:92:ed:1b):80 TCP flags: ****S* len:52 ttl:109)

Jan 14 04:56:08: DROP service 68->67(udp) from 217.70.196.185 to 217.70.92.217, 
prefix: "spoof iana-0/8" (in: eth0 69.43.195.65(00:26:f4:fd:77:d1):68 -> 
172.45.101.249(bc:b8:52:d0:55:33):67 UDP len:576 ttl:64)

Jan 14 06:03:01: DROP service 68->67(udp) from 217.70.20.228 to 213.92.27.87, 
prefix: "spoof iana-0/8" (in: eth0 216.34.214.4(0c:71:5d:52:6f:65):68 -> 
172.45.70.44(00:00:6b:ed:5e:cf):67 UDP len:328 ttl:64)
*/