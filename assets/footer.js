document.getElementById('footer').innerHTML = `
<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo"><img src="assets/logo-icon.svg" alt="" class="logo-icon" style="height:30px;"><span class="logo-text"><span class="logo-ad">AD</span><span class="logo-hunt">HUNT</span></span></a>
        <p>Recruitment for affiliate, adtech and digital teams across Europe, CIS, LATAM and SEA.</p>
      </div>
      <div class="footer-col">
        <h5>Pages</h5>
        <a href="vacancies.html"><span data-en>Vacancies</span><span data-ru>Вакансии</span></a>
        <a href="consulting.html"><span data-en>Consulting</span><span data-ru>Консалтинг</span></a>
        <a href="blog.html"><span data-en>Blog</span><span data-ru>Блог</span></a>
      </div>
      <div class="footer-col">
        <h5>Contact</h5>
        <a href="https://t.me/ADhunt_support" target="_blank">Telegram</a>
        <a href="mailto:info@adhunt.ai">info@adhunt.ai</a>
        <a href="https://www.linkedin.com/company/adhunt" target="_blank">LinkedIn</a>
      </div>
      <div class="footer-col">
        <h5>Jobs channel</h5>
        <a href="https://t.me/adhunt_cpa_job" target="_blank">@adhunt_cpa_job</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} AdHunt</span>
      <span>Affiliate · AdTech · AdNetworks</span>
    </div>
  </div>
</footer>
`;

/* re-apply language to footer nodes */
const lang = document.documentElement.lang || 'en';
document.querySelectorAll('#footer [data-en]').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
document.querySelectorAll('#footer [data-ru]').forEach(el => el.style.display = lang === 'ru' ? '' : 'none');
