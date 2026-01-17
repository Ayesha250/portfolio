# EmailJS Setup Instructions

This guide will help you set up EmailJS to receive contact form submissions directly to your email inbox.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free!)
3. Sign up using your Google account or email address
4. Verify your email if required

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose **"Gmail"** (or your email provider)
4. Click **"Connect Account"** and authorize EmailJS to send emails from your Gmail account
5. Give your service a name (e.g., "Portfolio Contact")
6. Click **"Create Service"**
7. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use the following template:

**Template Name:** Contact Form Template

**Subject:** New Contact Form Message: {{subject}}

**Content:**
```
Hello Ayesha,

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website.
```

4. Click **"Save"**
5. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **"Public Key"** (it looks like: `abcdefghijklmnop`)
3. **Copy the Public Key** - you'll need this later

## Step 5: Update Your Code

Open `script.js` and replace the following placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your EmailJS Public Key (line ~139)
2. Replace `YOUR_SERVICE_ID` with your Service ID (line ~161)
3. Replace `YOUR_TEMPLATE_ID` with your Template ID (line ~162)

**Example:**
```javascript
// Before:
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData);

// After:
emailjs.init('abcdefghijklmnop');
emailjs.send('service_xyz123', 'template_abc456', formData);
```

## Step 6: Test Your Form

1. Open your portfolio website
2. Go to the Contact page
3. Fill out the form with test data
4. Submit the form
5. Check your email inbox (and spam folder) for the message

## Troubleshooting

### Email not received?
- Check your spam/junk folder
- Verify all IDs are correct in `script.js`
- Check the browser console for errors (F12 → Console)
- Make sure EmailJS service is connected properly

### Form shows error?
- Verify your Public Key, Service ID, and Template ID are correct
- Check that EmailJS script is loaded (check browser console)
- Ensure your email service is active in EmailJS dashboard

### Need help?
- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Check their help center

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- All basic features
- Perfect for personal portfolios!

---

**Your Email:** ayeshashabbir8970@gmail.com
