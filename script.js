(function(){
  const yearEl = document.getElementById('y');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const root = document.documentElement;
  const modeBtn = document.getElementById('modeBtn');
  function applyMode(m){
    if(m==='light'){ root.classList.add('light'); } else { root.classList.remove('light'); }
    try{ localStorage.setItem('mode', m); }catch(e){}
  }
  const saved = (typeof localStorage!=='undefined') ? localStorage.getItem('mode') : null;
  if(saved){ applyMode(saved); }
  if(modeBtn){
    modeBtn.addEventListener('click',()=>{
      const m = root.classList.contains('light')? 'dark':'light';
      applyMode(m);
    });
  }

  const YOUR_EMAIL = "<email@example.com>"; // ← THAY BẰNG EMAIL CỦA BẠN
  const form = document.getElementById('contactForm');
  const copyBtn = document.getElementById('copyBtn');
  if (form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const subject = encodeURIComponent('Liên hệ từ website: '+ name);
      const body = encodeURIComponent(`Tên: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;
    });
  }
  if (copyBtn){
    copyBtn.addEventListener('click', (e)=>{
      e.preventDefault();
      navigator.clipboard.writeText(YOUR_EMAIL).then(()=>{
        alert('Đã sao chép email: ' + YOUR_EMAIL);
      }).catch(()=>{
        alert('Không sao chép được. Hãy copy thủ công: ' + YOUR_EMAIL);
      });
    });
  }
})();
