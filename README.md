<div align="center">
    <a href="https://github.com/SilentDemonSD">
        <kbd>
            <img width="350" src="https://te.legra.ph/file/246b0881d54fce4a642b1.jpg" alt="Pay On UPI Logo">
        </kbd>
    </a>

## ***Pay On UPI***

<i> A simple `worker.js` script to make QR (Quick Response) Codes Auto Generate for your UPI Payments, Easily Free Deploy on Cloudflare Workers, Fast Responsive Neon-Dark Design </i>

</div>

---

## ***Features***
- _Fast and Responsive_
- _Generate URLs On the Go_
- _Build with Dark Neon Design_
- _Attach Parameters for Fixed Payment with UPI ID_
- _Use for Anytime, Anywhere for Anyone_

---

### ***TODO***

- [x] ~Add Landing Page for Generate Links~
- [ ] Add Custom Access to Generate Page Only
- [ ] Excrypt Params, So that Users can't Change

---

## ***Deployment***

**Step 1** : Create a Cloudflare Account 

**Step 2** : Go to Workers & Pages Tab, and Click on Create Worker and Choose a Sub Domain

**Step 3** : Copy code from Repo's worker.js file and Paste it

**Step 4** : Click on Deploy and your Site is Ready !

## ***Usage***

> [!NOTE]
> ***No need to make URL formatting manually, its just for understanding, Visit direct Base URL to generate URL***

**Format :** https://your_url/pay?pa=demonic@ybl&pn=Demon&cu=INR&am=500

**Sample Generate URL :** https://payme.mysterysd.in/ <br>
**Sample Pay URL (With Amt) :** https://payme.mysterysd.in/pay?pa=demonic@ybl&pn=Demon&cu=INR&am=500 <br>
**Sample Pay URL (Without Amt) :** https://payme.mysterysd.in/pay?pa=demonic@ybl&pn=Demon&cu=INR <br>

**Params**|**Desp**|**Required**|**Example**
:--------:|:---:|:------:|:---------:
`pa=` | _Paymee Address ( UPI ID or VPA )_| *Required | sample@ybl
`pn=` | _Paymee Name_ | Optional | MysterySD
`am=` | _Amount of Money to Pay_ | Optional | Like 250, Only Digits

## ***Credits***
- `SilentDemonSD` (Developer)
- Inspired from `LinkPe` and to make for Easy Deployments

