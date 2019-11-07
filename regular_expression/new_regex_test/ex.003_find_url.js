//Find mac.address
let text = "ftp://ftp7.br.FreeBSD.org/pub/FreeBSD/"

let regEx = /(ftp?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

console.log(text.match(regEx)); //=>  ["ftp://ftp7.br.FreeBSD.org/pub/FreeBSD/"]
/*
Fedora Core 		ftp 	
Fedora Extras 	http 	ftp 	rsync
          ftp://ftp7.br.FreeBSD.org/pub/FreeBSD/ (ftp)
          ftp://ftp3.de.FreeBSD.org/pub/FreeBSD/ (ftp)
          ftp://ftp.is.FreeBSD.org/pub/FreeBSD/ (ftp / rsync)
          ftp://ftp4.jp.FreeBSD.org/pub/FreeBSD/ (ftp)
          ftp://ftp.no.FreeBSD.org/pub/FreeBSD/ (ftp / rsync)
        *
          ftp://ftp3.no.FreeBSD.org/pub/FreeBSD/ (ftp)
          ftp://ftp.pt.FreeBSD.org/pub/FreeBSD/ (ftp)
          ftp://ftp1.ro.FreeBSD.org/pub/FreeBSD/ (ftp / ftpv6)
          ftp://ftp3.es.FreeBSD.org/pub/FreeBSD/ (ftp)
          ftp://ftp2.tw.FreeBSD.org/pub/FreeBSD/ (ftp / ftpv6 / http / httpv6 / rsync / rsyncv6)
          ftp://ftp6.uk.FreeBSD.org/pub/FreeBSD/ (ftp)
          ftp://ftp6.us.FreeBSD.org/pub/FreeBSD/ (ftp / http)
*/