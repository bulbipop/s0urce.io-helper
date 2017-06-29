let i = 0
let words = ['account', 'accountname', 'add', 'anon',
'batchallfiles', 'bit', 'blockthreat', 'buffer', 'bufferpingset','bytes',
'call', 'callmodule', 'channel', 'channelsetpackage', 'changeusername',
'changepassword', 'checkhttptype', 'client', 'com', 'config', 'connect',
'cookies', 'count', 'create2axisvector', 'create3axisvector',
'createfilethread', 'createnewpackage', 'createnewsocket',
'data', 'decryptdatabatch', 'delete', 'deleteallids', 'destroybatch', 'dir',
'disconnectchannel', 'disconnectserver', 'dodecahedron', 'domain',
'encode', 'encodenewfolder', 'encryptfile', 'encryptunpackedbatch', 'emit',
'emitconfiglist', 'event', 'eventlistdir', 'eventtype',
'file', 'filedir', 'fileexpresslog', 'filetype', 'findpackage',
'generate', 'generatecodepack', 'get', 'getcookie', 'getdatapassword',
'getpass', 'getfirewallchannel', 'getinfo', 'getkey', 'getmysqldomain',
'getpartoffile', 'getping', 'getxmlprotocol', 'ghost', 'ghostfilesystem',
'global',
'handle', 'hexagon', 'http', 'httpbuffersize', 'host', 'hostnewserver',
'includedirectory', 'info', 'init', 'intel',
'join', 'joinnetworkclient',
'key',
'left', 'list', 'listconfig', 'load', 'loadaltevent', 'loadbytes',
'loadregisterlist', 'loadloggedpassword', 'log','loop',
'mergesocket', 'mysql', 'module',
'net', 'newhost', 'newline', 'num',
'part', 'pass', 'password', 'patcheventlog', 'ping', 'point', 'poly', 'port',
'process', 'proxy',
'remove', 'removeoldcookie', 'removenewcookie', 'reset', 'response',
'responder', 'respondertimeout', 'right', 'root',
'script', 'send', 'sent', 'sendintelpass', 'serverproxy', 'set',
'setcookie', 'setnewid', 'setnewproxy', 'setping', 'signal', 'size',
'sizeof', 'socket', 'stat', 'status', 'statusofprocess', 'syscall',
'system', 'systemgridtype', 'systemportkey',
'temp', 'tempdatapass', 'type',
'unpacktmpfile', 'upload', 'uploaduserstats', 'url', 'user', 'username',
'userpass',
'val', 'vector',
'wordcounter', 'write',
'xml']

function print(e) {
    let autocomplete = document.querySelector('#autocomplete')
    let textbox = document.querySelector('#tool-type-word').value

    while (autocomplete.firstChild) {
        autocomplete.removeChild(autocomplete.firstChild);
    }

    if (textbox) {
        let b = document.createDocumentFragment()
        for (let x = 0; x < words.length; x++) {
            if (words[x].startsWith(textbox)) {
                let d = document.createElement("p")
                d.innerText = words[x]
                d.classList.add('autoword')
                let onclick =
                "document.querySelector('#tool-type-word').value=this.innerText"
                d.setAttribute("onclick", onclick)
                b.appendChild(d)
            }
        }
        autocomplete.appendChild(b)
    }
}

function bf(e) {
    if (e.keyCode == 13 && document.querySelector('#bruteforce').checked) {
        let wordlist = document.querySelectorAll('.autoword')
        if (i >= wordlist.length) {
            i = 0
        }
        document.querySelector('#tool-type-word').value = wordlist[i].innerText
        console.log(wordlist[i].innerText)
        i++
    }
}

function cost() {
    let u1 = document.querySelector('#shop-basic-miner-value')
    let u2 = document.querySelector('#shop-advanced-miner-value')
    let u3 = document.querySelector('#shop-mining-drill-value')
    let u4 = document.querySelector('#shop-data-center-value')
    let u5 = document.querySelector('#shop-bot-net-value')
    let u6 = document.querySelector('#shop-quantum-server-value')
    let c1 = String(Math.round(0.0002 / Number(u1.innerHTML) * 3000))
    let c2 = String(Math.round(0.0075 / Number(u2.innerHTML) * 3000))
    let c3 = String(Math.round( 0.039 / Number(u3.innerHTML) * 3000))
    let c4 = String(Math.round( 1.07 / Number(u4.innerHTML) * 3000))
    let c5 = String(Math.round( 6.4 / Number(u5.innerHTML) * 3000))
    let c6 = String(Math.round( 53.33 / Number(u6.innerHTML) * 3000))
    u1 = u1.parentNode.firstChild
    u2 = u2.parentNode.firstChild
    u3 = u3.parentNode.firstChild
    u4 = u4.parentNode.firstChild
    u5 = u5.parentNode.firstChild
    u6 = u6.parentNode.firstChild
    u1.textContent = u1.textContent.replace(/\d+%$/, ' ') + c1 + '%'
    u2.textContent = u2.textContent.replace(/\d+%$/, ' ') + c2 + '%'
    u3.textContent = u3.textContent.replace(/\d+%$/, ' ') + c3 + '%'
    u4.textContent = u4.textContent.replace(/\d+%$/, ' ') + c4 + '%'
    u5.textContent = u5.textContent.replace(/\d+%$/, ' ') + c5 + '%'
    u6.textContent = u6.textContent.replace(/\d+%$/, ' ') + c6 + '%'
}

function checkCharges() {
    log('checking charges')
    let chargesA = document.querySelector('.firewall-part1-charges')
    let chargesB = document.querySelector('.firewall-part2-charges')
    let chargesC = document.querySelector('.firewall-part3-charges')
    let availabilityA = chargesA.style.opacity
    let availabilityB = chargesA.style.opacity
    let availabilityC = chargesA.style.opacity
    let maxA = document.querySelector('.firewall-part1-charges-max').innerText
    let maxB = document.querySelector('.firewall-part2-charges-max').innerText
    let maxC = document.querySelector('.firewall-part3-charges-max').innerText
    let firewalls = document.querySelectorAll('.window-firewall-letter')

    if (maxA / 2 > chargesA.innerText && availabilityA == 1) {
        firewalls[0].click()
        document.querySelector('#shop-firewall-charge5').click()
        document.querySelector('#window-firewall-pagebutton').click()
        log('Charges+5 on Port A')
    }
    if (maxB / 2 > chargesB.innerText && availabilityB == 1) {
        firewalls[1].click()
        document.querySelector('#shop-firewall-charge5').click()
        document.querySelector('#window-firewall-pagebutton').click()
        log('Charges+5 on Port B')
    }
    if (maxC / 2 > chargesC.innerText && availabilityC == 1) {
        firewalls[2].click()
        document.querySelector('#shop-firewall-charge5').click()
        document.querySelector('#window-firewall-pagebutton').click()
        log('Charges+5 on Port C')
    }
}

function log(txt, danger=false) {
    let newLog = '<div class="window-log-message'
    if (danger) {
        newLog += ' window-log-message-danger">' + txt + '</div>'
    } else {
        newLog += '">' + txt + '</div>'
    }

    let logContent = document.querySelector('.window-log-content')
    logContent.insertAdjacentHTML('beforeend', newLog)
}

function main() {
    let base = document.querySelectorAll('.window-firewall-letter')[2]
    base.textContent = ''
    let el = document.createElement('div')
    el.innerHTML = '<div><input type="checkbox" id="bruteforce" /></div>'
    base.appendChild(el)

    let textbox = document.querySelector('#tool-type-form')
    let autocomplete = '<div id="autocomplete"></div>'
    textbox.insertAdjacentHTML('beforeend', autocomplete)

    // Open and resize windows
    document.querySelector('#desktop-computer').click()
    document.querySelector('#desktop-miner').click()
    document.querySelector('#desktop-shop').click()
    document.querySelector('#desktop-tool').click()

    document.querySelector('#window-log').style.top = '1195px'
    document.querySelector('#window-tool').style.top = '440px'
    document.querySelector('#window-shop').style.top = '530px'
    document.querySelector('#window-shop').style.left = '1150px'
    document.querySelector('#window-log .window-content')
                                                        .style.height = '800px'
    document.querySelector('#window-computer .window-content')
                                                        .style.height = '360px'
    document.querySelector('#window-list .window-content')
                                                        .style.height = '920px'
    document.querySelectorAll('.window-content .window-list-table-wrapper')[1]
                                                        .style.height = '700px'
    document.querySelector('.window-firewall-page2-content')
                                                        .style.height = '240px'



    setInterval(cost, 5000)
    setInterval(checkCharges, 10000)

    document.querySelector('#tool-type-word').addEventListener("keydown", bf)
    document.querySelector('#tool-type-word').addEventListener("keyup", print)
}

main()
