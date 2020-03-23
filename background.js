function getSelectedMessage() {
    const mailTabs = window.messenger.mailTabs;
    const messages = window.messenger.messages;

    mailTabs.getSelectedMessages().then(msgs => {
        msgs.messages.forEach(msg => {
            const msgId = msg.id;
            console.log(msgId);
            messages.getFull(msgId).then(msgFull => {
                const sender = msgFull.headers['sender'][0]
                console.log(sender)
                const domain = sender.substring(
                    sender.indexOf('@') + 1,
                    sender.length - 1
                );
                console.log(domain);

                const whois = fetch("https://www.whois.com/search.php?query=" + domain)
                    .then(console.log);
            });
        });    
    });
}

messenger.browserAction.onClicked.addListener(getSelectedMessage);