<!-- DEPLOYMENT & HOSTING GUIDE -->

# 🚀 Elite CS2 Coaching - Deployment Guide

Complete guide to deploy your professional CS2 coaching website online.

---

## 1️⃣ LOCAL TESTING (Before Deployment)

### Test in Browser
```
1. Navigate to: d:\GIT\415\cscoach\
2. Double-click: index.html
3. Opens in default browser
```

### Test Features
- [ ] Language toggle (EN/РУ) works
- [ ] Testimonials slider rotates
- [ ] Mobile menu appears on mobile
- [ ] Form validation works
- [ ] Smooth scrolling works
- [ ] All images load
- [ ] Console has no errors (F12)

### Performance Check
```
1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Score should be 95+
```

---

## 2️⃣ GITHUB PAGES (Free, Easy)

### Prerequisites
- GitHub account (free at github.com)
- Git installed on your computer

### Steps

#### Step 1: Create GitHub Repository
```
1. Go to github.com
2. Click "New repository"
3. Name: cs2-coaching (or similar)
4. Description: "Professional CS2 coaching website"
5. Public: Yes (for Pages to work)
6. Initialize with README: No
7. Click "Create repository"
```

#### Step 2: Upload Files
```
Using Command Line (recommended):

1. Open Terminal in d:\GIT\415\cscoach\
2. Run these commands:

git init
git add .
git commit -m "Initial commit: Elite CS2 website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/cs2-coaching.git
git push -u origin main
```

OR using GitHub Desktop:
```
1. Download GitHub Desktop
2. File → Clone repository
3. URL: https://github.com/YOUR_USERNAME/cs2-coaching
4. Copy files into the folder
5. Commit & push to main branch
```

#### Step 3: Enable GitHub Pages
```
1. Go to repository on GitHub
2. Settings → Pages
3. Source: Deploy from branch
4. Branch: main, folder: / (root)
5. Click Save
6. Wait 2-3 minutes
7. Visit: https://YOUR_USERNAME.github.io/cs2-coaching
```

### Result
✅ Live website at: `https://YOUR_USERNAME.github.io/cs2-coaching`
✅ Free HTTPS certificate
✅ Automatic updates on git push

---

## 3️⃣ VERCEL (Free, Professional)

### Recommended for Production

#### Step 1: Upload to GitHub (see above)

#### Step 2: Deploy to Vercel
```
1. Go to vercel.com
2. Click "Create New Project"
3. Import GitHub repository
4. Click "Import" on cs2-coaching
5. Project Name: cs2-coaching
6. Framework: Other (not Next.js)
7. Click "Deploy"
```

#### Step 3: Configure Domain (Optional)
```
1. After deployment:
2. Go to Settings → Domains
3. Add custom domain (costs extra)
4. Or use free: cs2coaching.vercel.app
```

### Result
✅ Live at: `https://cs2coaching.vercel.app`
✅ Auto-deploys on git push
✅ CDN for fast loading
✅ Analytics included
✅ Can add domain later

---

## 4️⃣ NETLIFY (Free, Popular)

### Alternative to Vercel

#### Step 1: Upload to GitHub (see above)

#### Step 2: Deploy to Netlify
```
1. Go to netlify.com
2. Click "Connect Git provider"
3. Select GitHub
4. Choose cs2-coaching repository
5. Build Command: (leave empty)
6. Publish Directory: / (root)
7. Click "Deploy site"
```

#### Step 3: Wait for Deployment
```
Usually takes 1-2 minutes
URL will be: https://[random-name].netlify.app
```

### Result
✅ Live website deployed
✅ Free form handling (optional)
✅ Easy domain connection
✅ Analytics available

---

## 5️⃣ SHARED HOSTING (Paid, Full Control)

### For Custom Domain

#### Prerequisites
- Domain name ($10-15/year)
- Shared hosting ($5-15/month)
- FTP client (FileZilla, free)

#### Step 1: Get Hosting
Popular providers:
- **Hostinger** (~$3-4/month)
- **Bluehost** (~$2-7/month)
- **DreamHost** (~$3/month)
- **SiteGround** (~$3-5/month)

Hostinger Recommendation:
```
1. Go to hostinger.com
2. Choose Shared Hosting plan
3. Add domain during checkout
4. Complete payment
5. Receive credentials email
```

#### Step 2: Connect via FTP
```
1. Download FileZilla (filezilla-project.org)
2. Open FileZilla
3. File → Site Manager
4. New Site

Fill in from hosting email:
  Host: ftp.yourdomain.com
  User: your_username
  Password: your_password
  Port: 21

Click Connect

Navigate to: public_html folder
Upload all files there
```

#### Step 3: Enable HTTPS
```
Most hosting includes free SSL certificate
Control Panel → SSL Certificate → Install
Usually auto-installs or 1-click setup
```

---

## 6️⃣ CUSTOM DOMAIN SETUP

### Connect Domain to GitHub Pages
```
1. Buy domain from:
   - GoDaddy
   - Namecheap
   - Google Domains
   - Any registrar

2. Configure DNS records:
   - Type: A
   - Name: @ (root)
   - Value: 185.199.108.153
   
   Add 4 A records:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153

3. On GitHub repository:
   - Settings → Pages → Custom domain
   - Enter: yourdomain.com
   - Check "Enforce HTTPS"
```

### Using CNAME (Alternative)
```
1. Create CNAME file in repository
   Content: yourdomain.com
   
2. Push to GitHub

3. DNS records:
   Type: CNAME
   Name: www
   Value: username.github.io
```

---

## 7️⃣ EMAIL & FORM HANDLING

### Add Email Functionality

#### Option A: Formspree (Easiest)
```
1. Go to formspree.io
2. Create new form
3. In index.html, find:
   <form id="contactForm">
   
4. Change to:
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   
5. Remove script.js form handling for this form
6. Users submit → email sent to you
```

#### Option B: EmailJS (JavaScript)
```
1. Go to emailjs.com
2. Create account
3. Add Service
4. Copy Service ID
5. In script.js add:

<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

emailjs.init("PUBLIC_KEY");

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', this)
        .then(() => alert('Message sent!'))
        .catch(err => alert('Error: ' + err));
});
```

#### Option C: Backend (Advanced)
```
Create Node.js/Python backend:

POST /api/contact
{
  "name": "John",
  "email": "john@email.com",
  "message": "..."
}

Use services like:
- SendGrid (for email)
- Mailgun (for email)
- AWS SES (for email)
```

---

## 8️⃣ PAYMENT INTEGRATION (Stripe/PayPal)

### Add Payment Buttons

#### Option A: Simple Stripe Links
```html
<!-- Replace button href -->
<a href="https://buy.stripe.com/YOUR_LINK" class="btn btn-primary">
  Book Session
</a>
```

1. Go to stripe.com
2. Create payment link
3. Get shareable URL
4. Add to button href

#### Option B: Full Checkout
```
More complex, requires backend
Use Stripe.js library
Handle payment complete → trigger email
Update database with payment
```

---

## 9️⃣ MONITORING & MAINTENANCE

### Check Site Health

#### Google Search Console
```
1. Go to search.google.com/search-console
2. Add property: yourdomain.com
3. Verify ownership (upload file or DNS)
4. Monitor:
   - Clicks & impressions
   - Core Web Vitals
   - Crawl errors
   - Mobile usability
```

#### Google Analytics
```
1. Go to analytics.google.com
2. Create account for yourdomain.com
3. Get tracking ID
4. Add to index.html head:

<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

#### Uptime Monitoring
```
Use services to check if site is up:
- Uptimerobot.com (free tier)
- Statuscake.com
- Freshworks Uptime

Get alerts if site goes down
```

---

## 🔟 UPDATING YOUR SITE

### After Deployment

#### GitHub Pages / Vercel
```
1. Edit files in d:\GIT\415\cscoach\
2. Commit: git add . && git commit -m "Update..."
3. Push: git push
4. Site auto-updates (takes 1-2 min)
5. Check: yourdomain.com (refresh F5)
```

#### Shared Hosting
```
1. Edit files locally
2. Upload via FTP (overwrite files)
3. Refresh browser (Ctrl+Shift+R for cache clear)
4. Changes live immediately
```

#### Content Updates
```
For quick text changes:
1. Edit index.html
2. Find data-en="Your text"
3. Add Russian translation in translations.ru
4. Deploy (git push or upload via FTP)
```

---

## 1️⃣1️⃣ TROUBLESHOOTING

### Website Not Loading
```
✓ Check internet connection
✓ Try different browser
✓ Clear browser cache (Ctrl+Shift+Delete)
✓ Check domain DNS (can take 24-48 hours to propagate)
✓ Verify hosting/GitHub Pages is active
```

### HTTPS Not Working
```
✓ GitHub Pages: auto-enables, wait 24h
✓ Vercel/Netlify: should auto-enable
✓ Shared hosting: enable SSL in control panel
✓ Custom domain: update DNS records
```

### Forms Not Submitting
```
✓ Check console for errors (F12)
✓ Ensure Formspree/backend is set up
✓ Test in different browser
✓ Check email address is correct
✓ Check spam folder
```

### Images Not Loading
```
✓ Check file paths (should be relative)
✓ Verify images are in correct folder
✓ Check image filenames (case-sensitive on Linux)
✓ Verify permissions (755 for folders, 644 for files)
```

---

## 1️⃣2️⃣ RECOMMENDED SETUP

### Best Free Solution
```
✅ GitHub (free hosting)
✅ Namecheap domain ($9/year)
✅ Formspree forms (free)
✅ Google Analytics (free)
✅ Stripe payments (optional, pay per transaction)

Total Cost: ~$9/year domain only
```

### Best Paid Solution
```
✅ Vercel (free tier or $10-20/month pro)
✅ Custom domain ($10-15/year)
✅ SendGrid email ($20/month or pay-as-you-go)
✅ Stripe payments (per transaction)

Total Cost: $30-50/month fully featured
```

### Quick Start (Fastest)
```
1. Vercel + GitHub = 5 minutes
2. Get free .vercel.app domain
3. Add form handling later
4. Domain upgrade later
```

---

## 1️⃣3️⃣ SECURITY CHECKLIST

- [ ] HTTPS enabled (green lock icon)
- [ ] No sensitive data in code
- [ ] Form handling secured (if backend)
- [ ] Regular backups (GitHub auto-backups)
- [ ] Monitor for unusual activity
- [ ] Keep dependencies updated (if using any)

---

## 1️⃣4️⃣ PERFORMANCE OPTIMIZATION

### Already Done
```
✓ No external dependencies
✓ CSS is optimized
✓ JS is minimal
✓ Images are placeholders (optimize if real images)
```

### Additional Optimizations
```
1. Minify HTML/CSS/JS:
   - Online tools: minifier.org
   - Build tools: webpack, gulp, vite

2. Optimize images:
   - Use WebP format
   - Compress with TinyPNG.com
   - Lazy load images

3. Add CDN:
   - Cloudflare (free)
   - Bunny CDN
   - Reduces latency worldwide
```

---

## 📋 DEPLOYMENT CHECKLIST

Before going live:
- [ ] Test on desktop, tablet, mobile
- [ ] All links working
- [ ] Forms functional
- [ ] Images optimized
- [ ] Lighthouse score 90+
- [ ] No console errors
- [ ] Mobile menu works
- [ ] Language switcher works
- [ ] HTTPS enabled
- [ ] Analytics installed
- [ ] Backups configured

---

## 🎯 QUICK DEPLOYMENT PATHS

### Path 1: Fastest (5 minutes)
```
GitHub + Vercel
1. Push files to GitHub
2. Connect to Vercel
3. Deploy
4. Done!
```

### Path 2: Easiest (10 minutes)
```
Netlify + GitHub
1. Push files to GitHub
2. Connect to Netlify
3. Auto-deploys
4. Optional: Add domain
```

### Path 3: Custom (30 minutes)
```
Buy domain + hosted solution
1. Domain: Namecheap (~$9/year)
2. Vercel or Netlify (free)
3. Connect domain to hosting
4. Set up form handling
5. Configure email
```

### Path 4: Full Control (1-2 hours)
```
Shared hosting + setup
1. Buy hosting ($5-15/month)
2. Get domain ($10-15/year)
3. Upload files via FTP
4. Configure SSL
5. Set up email
6. Monitor & maintain
```

---

## 📚 RESOURCES

### Tutorials
- GitHub Pages: https://pages.github.com
- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Domain Setup: https://support.google.com/domains

### Tools
- Git: https://git-scm.com
- GitHub Desktop: https://desktop.github.com
- FileZilla (FTP): https://filezilla-project.org
- Google Analytics: https://analytics.google.com
- Stripe: https://stripe.com

---

## ✅ YOU'RE READY TO DEPLOY!

Your website is:
✓ Fully functional
✓ Mobile responsive
✓ SEO optimized
✓ Deployment-ready

Choose your deployment method above and go live! 🚀

---

**Need Help?**
- Check resource links above
- Google your specific issue
- Community forums (Reddit, StackOverflow)
- Hosting support (usually available free)

**Good luck! 🎉**

---

Version: 1.0  
Last Updated: February 2025
