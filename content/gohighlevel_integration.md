# GoHighLevel Integration Guide
## Integrating Your Civil 3D Training Course with GoHighLevel

### Introduction to Integration Options

GoHighLevel (GHL) is a comprehensive marketing and sales platform that includes website building, funnel creation, and membership site functionality. This guide will walk you through four different methods to integrate your Civil 3D training course website with GoHighLevel, allowing you to leverage GHL's powerful marketing automation, CRM, and course delivery features.

**Why Integrate with GoHighLevel?**
- **Marketing Automation:** Automated email sequences for course delivery
- **CRM Integration:** Track student progress and engagement
- **Payment Processing:** Built-in Stripe and PayPal integration
- **Membership Management:** Control access levels and drip content
- **Analytics:** Track user behavior and course completion
- **All-in-One Solution:** Website, CRM, email marketing, and more in one platform

**Choose Your Integration Method Based on:**
- Technical expertise level
- Desired level of customization
- Marketing automation requirements
- Budget and time constraints

---

## Method 1: Iframe Embedding

**Difficulty:** Easy  
**Best For:** Quick integration, keeping your custom design  
**Time Required:** 15-30 minutes

### Overview
Iframe embedding allows you to display your externally hosted Civil 3D training website inside GHL pages. This is the fastest method and preserves your custom design completely.

### Prerequisites
- Your Civil 3D training website hosted on a public URL
- Access to a GoHighLevel account
- Basic understanding of HTML (helpful but not required)

### Step-by-Step Instructions

#### Step 1: Get Your Website URL
Ensure your Civil 3D training course website is hosted and accessible:
- Example: `https://yourdomain.com/civil3d-training`
- Test the URL in a private browser window to ensure it loads correctly

#### Step 2: Access GHL Website/Funnel Editor
1. Log into your GoHighLevel account
2. Navigate to **Sites** from the left sidebar
3. Select the website or funnel where you want to embed the course
4. Click **Edit** to open the builder

#### Step 3: Add Custom HTML/Code Element
1. In the GHL page builder, locate the section where you want the course
2. Drag a **Custom HTML/Code** element onto the page
   - Found in the elements panel (usually labeled "Custom Code" or "Custom HTML")
3. Click on the element to open the code editor

#### Step 4: Insert Iframe Code
Paste the following HTML code into the Custom HTML element:

```html
<div style="width: 100%; overflow: hidden;">
  <iframe 
    src="https://yourdomain.com/civil3d-training" 
    width="100%" 
    height="800px" 
    frameborder="0" 
    scrolling="yes"
    style="border: none; display: block;"
    title="Civil 3D Training Course">
  </iframe>
</div>
```

**Customize the code:**
- Replace `https://yourdomain.com/civil3d-training` with your actual URL
- Adjust `height="800px"` based on your content (recommend 1000px-1500px for full course pages)
- Set `scrolling="yes"` to allow scrolling within the iframe

#### Step 5: Responsive Design Adjustments
For better mobile experience, use this enhanced code:

```html
<div style="width: 100%; max-width: 1200px; margin: 0 auto; padding: 0 15px;">
  <div style="position: relative; overflow: hidden; padding-top: 56.25%;">
    <iframe 
      src="https://yourdomain.com/civil3d-training" 
      style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;"
      frameborder="0" 
      scrolling="yes"
      title="Civil 3D Training Course">
    </iframe>
  </div>
</div>
```

This creates a responsive container that adapts to screen size.

#### Step 6: Test on Multiple Devices
1. Save your GHL page
2. Preview in desktop browser
3. Test on mobile device or use browser dev tools
4. Adjust height values if content is cut off
5. Ensure all navigation works within iframe

### Advanced Iframe Configuration

**Full-Height Iframe (No Scrolling):**
If you want the iframe to expand to fit all content without internal scrolling:

```html
<script>
  function resizeIframe(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
  }
</script>

<iframe 
  src="https://yourdomain.com/civil3d-training" 
  width="100%" 
  onload="resizeIframe(this)" 
  frameborder="0" 
  scrolling="no"
  style="border: none; overflow: hidden;"
  title="Civil 3D Training Course">
</iframe>
```

**Note:** This requires your embedded site to allow cross-origin communication.

### Pros and Cons of Iframe Method

**Pros:**
- ✅ Quick and easy implementation
- ✅ Maintains your custom design completely
- ✅ Easy to update (changes to your site reflect automatically)
- ✅ No need to rebuild content in GHL

**Cons:**
- ❌ Limited GHL-specific features (tracking, automation)
- ❌ Potential cross-origin issues
- ❌ Less seamless user experience
- ❌ SEO limitations for embedded content
- ❌ May have scrolling within scrolling on mobile

### Troubleshooting Common Iframe Issues

**Issue: "Refused to display in a frame"**
- **Cause:** Your website has X-Frame-Options header preventing embedding
- **Solution:** Configure your web server to allow framing from GHL domain:
  ```
  X-Frame-Options: ALLOW-FROM https://yourghl.domain.com
  ```
  Or use Content-Security-Policy:
  ```
  Content-Security-Policy: frame-ancestors 'self' https://yourghl.domain.com
  ```

**Issue: Content is cut off**
- **Cause:** Iframe height is too small
- **Solution:** Increase the height value (try 1200px, 1500px, or use auto-resize script)

**Issue: Links don't work**
- **Cause:** Links trying to break out of iframe
- **Solution:** Ensure all links in your site use `target="_blank"` or `target="_parent"`

---

## Method 2: Custom Domain Setup

**Difficulty:** Intermediate  
**Best For:** Professional branding, SEO benefits  
**Time Required:** 1-2 hours (including DNS propagation)

### Overview
Custom domain setup allows you to host your GoHighLevel site (with embedded course) on your own domain, providing a seamless branded experience.

### Prerequisites
- Domain name registered (e.g., GoDaddy, Namecheap, Google Domains, Cloudflare)
- Access to domain DNS settings
- GoHighLevel account with appropriate plan (check if custom domains are included)

### Step-by-Step Instructions

#### Step 1: Access GHL Domain Settings
1. Log into GoHighLevel
2. Navigate to **Sites** > **Settings**
3. Click on **Domains** tab
4. Click **Connect a Domain** or **Add Domain**

#### Step 2: Enter Your Domain
1. Enter your desired domain or subdomain
   - Full domain: `civil3dtraining.com`
   - Subdomain: `training.yourdomain.com` or `civil3d.yourdomain.com`
2. Click **Continue** or **Next**

#### Step 3: Choose DNS Configuration Method

GHL typically offers two options:

**Option A: Automatic Setup (Recommended for supported registrars)**
- Supported for: GoDaddy, Google Domains, Cloudflare
- Click **Automatic Setup**
- Authorize GHL to access your DNS settings
- GHL will automatically configure DNS records
- Wait for confirmation (usually 5-15 minutes)

**Option B: Manual Setup (All registrars)**
- Choose **Manual Setup**
- GHL will provide DNS records to add
- Proceed to Step 4

#### Step 4: Manual DNS Configuration

If you chose manual setup, GHL will display DNS records to add. Typically:

**A Record:**
- **Type:** A
- **Name:** @ (or your subdomain, e.g., "training")
- **Value/Points to:** [IP address provided by GHL]
- **TTL:** 3600 (or default)

**CNAME Record (if using subdomain):**
- **Type:** CNAME
- **Name:** training (or your chosen subdomain)
- **Value/Points to:** [domain provided by GHL, e.g., proxy.leadconnectorhq.com]
- **TTL:** 3600

**TXT Record (for verification):**
- **Type:** TXT
- **Name:** @ or _ghl-verification
- **Value:** [verification code provided by GHL]
- **TTL:** 3600

#### Step 5: Add DNS Records in Your Domain Registrar

**For GoDaddy:**
1. Log into GoDaddy account
2. Go to **My Products** > **Domains**
3. Click **DNS** next to your domain
4. Click **Add** to add new records
5. Enter the record details from Step 4
6. Save each record

**For Cloudflare:**
1. Log into Cloudflare
2. Select your domain
3. Go to **DNS** tab
4. Click **Add record**
5. Enter record details (set Proxy status to **DNS only** for A record)
6. Save

**For Namecheap:**
1. Log into Namecheap
2. Domain List > **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Click **Add New Record**
5. Enter record details
6. Save

**For Google Domains:**
1. Log into Google Domains
2. Select your domain
3. Click **DNS** in left menu
4. Scroll to **Custom resource records**
5. Add each record
6. Save

#### Step 6: Wait for DNS Propagation
- DNS changes can take 1-48 hours to propagate worldwide
- Typically propagates in 15 minutes to 4 hours
- Check propagation status: https://www.whatsmydns.net/
- Enter your domain and select A or CNAME record type

#### Step 7: Verify Connection in GHL
1. Return to GHL > Sites > Settings > Domains
2. Your domain should show "Verifying" or "Pending"
3. Click **Verify** or **Check Status**
4. Once verified, status will change to "Active" or "Connected"

#### Step 8: SSL Certificate Activation
GHL automatically provisions SSL certificates (HTTPS):
1. Once domain is verified, SSL cert is generated (usually automatic)
2. Can take 10 minutes to 2 hours
3. Check by visiting https://yourdomain.com
4. You should see a padlock icon in the browser

#### Step 9: Set as Primary Domain (Optional)
If you have multiple domains connected:
1. Go to Sites > Settings > Domains
2. Find your domain in the list
3. Click **Set as Primary** if you want this as the default

### Pros and Cons of Custom Domain Method

**Pros:**
- ✅ Professional branded URL
- ✅ Better SEO than subdomain
- ✅ Full GHL features available
- ✅ Automatic SSL certificate
- ✅ Improved trust and credibility

**Cons:**
- ❌ Requires DNS configuration knowledge
- ❌ Waiting time for DNS propagation
- ❌ May require GHL plan upgrade
- ❌ Need to own a domain

### Troubleshooting Custom Domain Issues

**Issue: Domain not verifying**
- **Solution:** Double-check DNS records are entered exactly as provided
- Wait longer (DNS can take up to 48 hours)
- Use https://www.whatsmydns.net/ to verify propagation
- Clear DNS cache on your computer: `ipconfig /flushdns` (Windows) or `sudo dscacheutil -flushcache` (Mac)

**Issue: SSL certificate not working**
- **Solution:** Ensure domain is fully verified first
- Can take up to 2 hours after verification
- Check if you have CAA records restricting SSL issuance
- Contact GHL support if still not working after 24 hours

**Issue: Website shows "Not Found" error**
- **Solution:** Verify you've published your GHL site
- Check that the domain is set as primary (if multiple domains)
- Clear browser cache and try incognito mode

---

## Method 3: Native GHL Membership Site

**Difficulty:** Intermediate to Advanced  
**Best For:** Full GHL integration, drip content, course management  
**Time Required:** 4-8 hours (for full course migration)

### Overview
GHL's native membership/course features allow you to rebuild your Civil 3D training course entirely within the GoHighLevel platform, providing seamless integration with all GHL features.

### Prerequisites
- GoHighLevel account with membership site access
- Course content prepared (text, videos, downloadable files)
- Basic understanding of GHL course builder

### Step-by-Step Instructions

#### Step 1: Access Membership Area
1. Log into GoHighLevel
2. Navigate to **Sites** from left sidebar
3. Click **Membership** or **Courses** (depending on your GHL version)
4. Click **Create New Membership Site** or **Create New Course**

#### Step 2: Configure Membership Site Settings
1. **Name:** Civil 3D Training Course
2. **URL Slug:** civil3d-training (creates yourghlsite.com/civil3d-training)
3. **Description:** Comprehensive Civil 3D workflow training
4. **Thumbnail:** Upload course image
5. **Access Settings:**
   - Free, Paid, or Gated (require opt-in)
   - Set pricing if paid course
6. Click **Create**

#### Step 3: Design Course Structure
Plan your course organization:

```
Course: Civil 3D Workflow Mastery
├── Module 1: Fundamentals
│   ├── Session 1: Introduction & Project Setup
│   ├── Session 2: Folder Structure
│   └── Session 3: Template Setup
├── Module 2: Data Management
│   ├── Session 4: Survey Data Import
│   ├── Session 5: Surfaces & Data Shortcuts
│   └── Session 6: Alignments & Profiles
├── Module 3: Design Elements
│   ├── Session 7: Corridors
│   ├── Session 8: Pipe Networks
│   └── Session 9: Xrefs & Layer States
├── Module 4: Production
│   ├── Session 10: Model.dwg Creation
│   ├── Session 11: Plan Production
│   └── Session 12: QA & Delivery
└── Bonus: GoHighLevel Integration Guide
```

#### Step 4: Create Course Modules
1. Click **Add Module** or **Add Section**
2. Enter module name: "Module 1: Fundamentals"
3. Add description (optional)
4. Set module order
5. Repeat for all modules

#### Step 5: Add Lessons to Each Module
For each session/lesson:

1. Click **Add Lesson** within a module
2. **Lesson Title:** "Session 1: Introduction & Project Setup"
3. **Lesson Type:** Choose from:
   - **Text/Article:** For written content
   - **Video:** Embed YouTube, Vimeo, or upload video
   - **PDF:** Upload downloadable PDFs
   - **Quiz:** Create assessments
   - **Combination:** Mix multiple content types

4. **Add Content:**
   - Use rich text editor for main content
   - Embed videos (YouTube/Vimeo URLs or upload)
   - Upload downloadable files (PDFs, templates, cheat sheets)
   - Add images and diagrams

5. **Lesson Settings:**
   - **Drip Schedule:** Set when lesson becomes available
     - Immediate, After X days, On specific date
   - **Prerequisites:** Require completion of previous lessons
   - **Completion Settings:** Require video watch, quiz passing, etc.

6. Click **Save Lesson**
7. Repeat for all 12 sessions

#### Step 6: Upload Supporting Materials
For each session, upload:
- **Video Scripts** (as text or PDF)
- **Quick Reference Guides** (PDF downloads)
- **Cheat Sheets** (PDF downloads)
- **Case Study Documents** (PDF or text)
- **Template Files** (if applicable)

To add downloadable files:
1. Edit lesson
2. Click **Add File** or **Attachments**
3. Upload file
4. Enter download link text: "Download Quick Reference Guide"
5. Save

#### Step 7: Configure Drip Schedule
Set up content release schedule:
1. Go to **Course Settings** > **Drip Content**
2. Choose drip method:
   - **All at Once:** All lessons immediately available
   - **Sequential:** Unlock after previous lesson completion
   - **Scheduled:** Release on specific dates
   - **Timed:** Release X days after enrollment

Example for 12-week course:
- Module 1 (Sessions 1-3): Weeks 1-3
- Module 2 (Sessions 4-6): Weeks 4-6
- Module 3 (Sessions 7-9): Weeks 7-9
- Module 4 (Sessions 10-12): Weeks 10-12

3. Set completion requirements:
   - Require 80% video watching
   - Require quiz passing (if quizzes included)
   - Require manual "Mark Complete"

#### Step 8: Design Membership Site Layout
1. **Choose Theme:** Select from GHL templates
2. **Customize Design:**
   - Logo and branding colors
   - Header/footer
   - Course card layout
   - Navigation menu

3. **Create Custom Pages (Optional):**
   - Welcome/Introduction page
   - Resources page
   - FAQ page
   - Contact/Support page

#### Step 9: Set Up Access Levels
If offering different tiers:
1. Go to **Settings** > **Access Levels**
2. Create levels:
   - **Free Tier:** Sessions 1-2 only
   - **Basic Tier:** Sessions 1-6
   - **Pro Tier:** All 12 sessions + bonus content
3. Assign pricing to each tier
4. Set up payment gateway (Stripe/PayPal)

#### Step 10: Integrate with GHL CRM and Automations
1. **Create Tags:**
   - `civil3d_enrolled`
   - `session_1_complete`
   - `session_2_complete`
   - etc.

2. **Build Workflows:**
   - **Enrollment Workflow:**
     - Trigger: Course enrollment
     - Actions: Welcome email, add tag, start drip sequence
   - **Lesson Completion Workflow:**
     - Trigger: Lesson marked complete
     - Actions: Congratulations email, unlock next lesson, add tag
   - **Course Completion Workflow:**
     - Trigger: Final lesson complete
     - Actions: Certificate email, request testimonial, upsell offer

3. **Email Sequences:**
   - Welcome sequence (Days 1, 3, 7)
   - Engagement sequence (if user inactive for 7 days)
   - Completion celebration and next steps

#### Step 11: Test the Course
1. Create a test user account
2. Enroll test user in course
3. Go through entire course flow
4. Verify:
   - Content displays correctly
   - Downloads work
   - Videos play
   - Drip schedule functions
   - Completion tracking works
   - Automations trigger correctly

5. Test on desktop and mobile devices

#### Step 12: Launch and Promote
1. **Create Sales/Landing Page:**
   - Build in GHL funnel builder
   - Highlight benefits, curriculum, testimonials
   - Add enrollment CTA

2. **Set Up Payment Processing:**
   - Connect Stripe or PayPal
   - Create product/offer in GHL
   - Link to enrollment button

3. **Promote:**
   - Email your list
   - Social media posts
   - LinkedIn articles
   - YouTube channel
   - Paid ads (if budget allows)

### Content Migration Tips

**For Video Content:**
- Upload to YouTube (unlisted) or Vimeo
- Embed in GHL lessons using video URLs
- Or upload directly to GHL (if file size permits)

**For Text Content:**
- Copy from your existing website
- Paste into GHL rich text editor
- Reformat as needed (headings, bullet points, bold/italic)

**For Downloadable Files:**
- Upload PDFs to GHL file storage
- Add download links in lesson content
- Alternatively, host on your own server and link

**For Interactive Elements:**
- Use GHL's quiz feature for assessments
- Embed external tools via iframe if needed
- Add discussion prompts in lesson text

### Pros and Cons of Native GHL Membership

**Pros:**
- ✅ Full GHL integration (CRM, automations, email)
- ✅ Built-in payment processing
- ✅ Drip content and access control
- ✅ Progress tracking and completion certificates
- ✅ All-in-one platform (no external hosting needed)
- ✅ Mobile-responsive design

**Cons:**
- ❌ Time-consuming to migrate content
- ❌ Less design flexibility than custom site
- ❌ Limited customization compared to custom code
- ❌ Dependent on GHL platform
- ❌ May require learning GHL course builder

### Troubleshooting Native Membership Issues

**Issue: Videos not playing**
- **Solution:** Use supported video hosts (YouTube, Vimeo, Wistia)
- Check video privacy settings (unlisted or public)
- Test video URL in incognito browser

**Issue: Drip content not unlocking**
- **Solution:** Check drip schedule settings
- Verify completion requirements are met
- Check automation workflows are active

**Issue: Payment not processing**
- **Solution:** Verify Stripe/PayPal connection
- Check payment gateway settings
- Ensure product/offer is correctly linked
- Test with small amount first

---

## Method 4: Dashboard Embedding (Internal Team Access)

**Difficulty:** Easy  
**Best For:** Internal training, team access without public website  
**Time Required:** 15-30 minutes

### Overview
If your primary goal is to provide Civil 3D training to your internal team (not public), you can embed the course directly in GHL dashboards, making it accessible to team members without creating a public-facing site.

### Prerequisites
- GoHighLevel account with dashboard access
- Team members with GHL user accounts
- Course content hosted on accessible URL

### Step-by-Step Instructions

#### Step 1: Access Dashboard Editor
1. Log into GoHighLevel
2. Navigate to **Dashboards** from left sidebar
3. Select an existing dashboard or create new: **Create Dashboard**
4. Click **Edit** to enter edit mode

#### Step 2: Add Embed Widget
1. Look for **Add Widget** button (usually top-right or center)
2. Click **Add Widget**
3. Select **Elements** tab or **Advanced** tab
4. Find and click **Embed** widget (may be called "Embed", "iFrame", or "Custom HTML")

#### Step 3: Configure Embed Widget
1. **Widget Title:** "Civil 3D Training Course"
2. **Type:** Choose between:
   - **URL:** Direct embed of external website
   - **IFRAME:** Custom iframe code
3. **Source URL (if URL type):**
   - Enter: `https://yourdomain.com/civil3d-training`
4. **Or Iframe Code (if IFRAME type):**
```html
<iframe 
  src="https://yourdomain.com/civil3d-training" 
  width="100%" 
  height="800px" 
  frameborder="0" 
  style="border: none;">
</iframe>
```

5. **Widget Size:**
   - Width: Full width or custom
   - Height: 800px or custom
6. **Permissions:** Set which team roles can view this widget

#### Step 4: Position and Save
1. Drag widget to desired position on dashboard
2. Resize if needed
3. Click **Save** or **Save Changes**

#### Step 5: Share Dashboard with Team
1. **Option A: Set as Default Dashboard**
   - Go to Dashboard settings
   - Set as default for specific user roles

2. **Option B: Share Dashboard Link**
   - Click **Share** or get dashboard URL
   - Send link to team members

3. **Option C: Add to Navigation**
   - Add dashboard to main navigation menu
   - All users with access can navigate to it

#### Step 6: Set Permissions (Optional)
Control who can access this dashboard:
1. Go to **Settings** > **Team**
2. Edit user roles
3. Set dashboard permissions:
   - Admin: Full access
   - Manager: View only
   - Technician: View only
   - Custom roles: Define access

### Use Cases for Dashboard Embedding

**Internal Training Program:**
- Onboard new CAD technicians
- Provide ongoing training resources
- Track team's training progress (via external tracking if your site supports it)

**Reference Resource:**
- Quick access to cheat sheets and quick references
- On-demand video tutorials during projects
- Standard operating procedures

**Client Training (White-label):**
- Provide training to clients using your GHL agency account
- Each client sees training in their dashboard
- Customize training content per client sub-account

### Pros and Cons of Dashboard Embedding

**Pros:**
- ✅ Very quick setup
- ✅ Controlled access (team members only)
- ✅ Integrated with GHL workspace
- ✅ No public website needed
- ✅ Easy to update (change embed URL)

**Cons:**
- ❌ Not suitable for public courses
- ❌ Limited to GHL users
- ❌ Less polished than dedicated membership site
- ❌ No built-in course progress tracking

---

## Comparison Table: All Four Methods

| Feature | Iframe Embedding | Custom Domain | Native Membership | Dashboard Embed |
|---------|------------------|---------------|-------------------|-----------------|
| **Setup Time** | 15-30 min | 1-2 hours | 4-8 hours | 15-30 min |
| **Difficulty** | Easy | Intermediate | Intermediate-Advanced | Easy |
| **Design Control** | Full | Full | Limited | Limited |
| **GHL Features** | Minimal | Full | Full | Minimal |
| **Payment Processing** | External | External or GHL | Built-in GHL | Not applicable |
| **Drip Content** | External | External | Built-in GHL | Not applicable |
| **Public Access** | Yes | Yes | Yes | No (team only) |
| **SEO Benefits** | Limited | Good | Good | Not applicable |
| **Maintenance** | Easy | Easy | Moderate | Easy |
| **Best For** | Quick launch | Professional branding | Full integration | Internal training |

---

## Best Practices for All Integration Methods

### 1. Mobile Responsiveness
- Test on actual mobile devices
- Use responsive iframe codes
- Verify navigation works on touch screens
- Check text readability on small screens

### 2. Performance Optimization
- Optimize images before uploading
- Use video compression
- Minimize file sizes for downloads
- Use lazy loading for images

### 3. User Experience
- Clear navigation structure
- Consistent branding across platforms
- Easy-to-find support/contact information
- Progress indicators for course completion

### 4. Security Considerations
- Use HTTPS for all content
- Protect downloadable files (if proprietary)
- Set appropriate CORS headers
- Use GHL's built-in security features

### 5. Analytics and Tracking
- Set up Google Analytics (if using custom domain)
- Track course completion rates
- Monitor user engagement
- A/B test landing pages

### 6. Regular Testing
- Test all links monthly
- Verify videos still play
- Check download links
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)

### 7. Backup and Updates
- Keep backup of course content
- Document integration settings
- Version control for custom code
- Regular content updates

---

## Troubleshooting Common Issues Across All Methods

### Issue: Content Not Loading
**Possible Causes:**
- Incorrect URL
- Server downtime
- Permissions/access restrictions
- CORS policy blocking

**Solutions:**
- Verify URL is correct and accessible
- Check website hosting status
- Review server/hosting security settings
- Configure CORS headers if needed

### Issue: Slow Loading Times
**Causes:**
- Large file sizes
- Too many embedded elements
- Server performance
- Unoptimized images/videos

**Solutions:**
- Compress images and videos
- Use CDN for static assets
- Optimize server performance
- Lazy load content

### Issue: Broken Links
**Causes:**
- Moved content
- Deleted files
- Incorrect relative paths
- URL structure changes

**Solutions:**
- Regular link checking (use tools like Broken Link Checker)
- Use absolute URLs where possible
- Test all links after updates
- Maintain redirect map for moved content

### Issue: Cross-Origin Errors (CORS)
**Causes:**
- Website blocking iframe embedding
- API calls blocked by CORS policy

**Solutions:**
- Configure server headers:
  ```
  Access-Control-Allow-Origin: *
  (or specific GHL domain)
  ```
- Remove X-Frame-Options restrictions
- Contact hosting provider for assistance

---

## Next Steps After Integration

### 1. Test Everything
- Complete user testing
- Mobile device testing
- Browser compatibility testing
- Payment flow testing (if applicable)

### 2. Create Supporting Materials
- Enrollment instructions
- Technical requirements (browser, plugins, etc.)
- FAQ document
- Support contact information

### 3. Set Up Support System
- Create support email (support@yourdomain.com)
- Set up GHL chat widget
- Create video tutorials for common questions
- Build FAQ page

### 4. Launch Strategy
- Soft launch to beta users
- Gather feedback and iterate
- Full public launch
- Promote through multiple channels

### 5. Ongoing Management
- Monitor analytics
- Respond to support requests promptly
- Update content regularly
- Solicit student feedback
- Iterate and improve

---

## Additional Resources

### GHL Documentation
- Official GHL Knowledge Base: https://help.gohighlevel.com
- GHL Community Forum: https://community.gohighlevel.com
- GHL YouTube Channel: Tutorial videos

### Technical Resources
- DNS Propagation Checker: https://www.whatsmydns.net/
- Iframe Tester: https://www.w3schools.com/html/html_iframe.asp
- CORS Information: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

### Civil 3D Resources
- Autodesk Civil 3D Help: https://help.autodesk.com/view/CIV3D/
- Civil 3D Forum: https://forums.autodesk.com/

---

## Conclusion

Choosing the right integration method depends on your specific needs:

- **Need quick setup?** → Iframe Embedding
- **Want professional branding?** → Custom Domain
- **Need full course management?** → Native GHL Membership
- **Internal team training only?** → Dashboard Embedding

Regardless of method chosen, the key to success is thorough testing, clear communication with users, and ongoing maintenance and improvement based on feedback.

Your Civil 3D training course has tremendous value for intermediate-level technicians looking to improve their workflows. By integrating with GoHighLevel, you're adding powerful marketing, sales, and automation capabilities that can help you reach more students and deliver a better learning experience.

**Ready to get started?** Choose your integration method and follow the step-by-step instructions above. If you encounter any issues, refer to the troubleshooting sections or reach out to GHL support.

**Good luck with your course launch!**
