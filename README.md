# Spam Auto Responder

TLDR; Spam is heavy PITA. Payback time.

It is basically driven by:
- low costs for wide bandwidth, thus minimal success rates remain benificial.
- hard to trace, but within a complex multi-national legal system, so that spammers are not easy to sue.

## Spam statistics Q3 2019 (securelist)
https://securelist.com/spam-report-q3-2019/95177/

# Pitch
Respond to every single spam mail. Find the domain owner and thus responsible person and **make known that you didn't request that mail and wish that no further reaches out to you**.

## PoC Thunderbird Extension
By the mail's sender determine the domain,
consult the WHOIS record, and address response to the domain owner, respond with an automatic text having the original spam attached.

### Area of Work / Backlog
* connect to register of known spammers to have low false-positive error-rate.
* find a free WHOIS service
    * parse mail-address of legal entity behind domain.

## Resources
https://developer.thunderbird.net/add-on-examples/hello-world-add-on


https://thunderbird-webextensions.readthedocs.io/en/68/index.html

https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json

## Known (partially ineffective) responses to Spam

* Awareness:
Most people know that it is not advised to click any link from mails nor to open attachments from senders which are unknown.
* Spam Filters:
Let them spam your spam folder.
As spam is filtered, sometimes non-spam gets filtered too.
* Change your mail-address:
Some mail accounts need to be abondoned as they are flooded by spam, so that people prefer to tell their contacts to use another mail-addresses.
* Unsubscribe:
Some mails contain unsubscribe links or there are unsubscribe services. Eventually clicking the unsubscribe link is harmful.
* Known spammer registry:
Registries like for example https://www.spamcop.net/ help identify known spammers. Despite good intentions on the other side registering a new domain and change origin for spamming takes less than one minute, given a decent scripting.

# Related news
23.04.2020 GDPR is making situation at domain registrars worse not better \[DE\]: https://www.golem.de/news/domainverwaltung-gleichgewicht-bei-icann-in-gefahr-2004-147395-rss.html


