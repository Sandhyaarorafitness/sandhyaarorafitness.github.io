(function() {
  if (document.getElementById('saf-lead-popup')) return;

  const style = document.createElement('style');
  style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');

    .saf-floating-btn {
      position: fixed;
      bottom: 24px;
      left: 24px;
      background: linear-gradient(135deg, #E94560, #FF6B86);
      color: #fff;
      border: none;
      border-radius: 50px;
      padding: 16px 28px;
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      font-size: 15px;
      box-shadow: 0 10px 24px rgba(233, 69, 96, 0.4);
      cursor: pointer;
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
    }
    .saf-floating-btn:hover {
      transform: translateY(-4px) scale(1.02);
      box-shadow: 0 15px 30px rgba(233, 69, 96, 0.5);
    }
    .saf-floating-btn svg {
      width: 22px;
      height: 22px;
      fill: currentColor;
    }

    .saf-modal-overlay {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(14, 14, 26, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s ease, visibility 0.4s ease;
      padding: 20px;
    }
    .saf-modal-overlay.active {
      opacity: 1;
      visibility: visible;
    }

    .saf-modal-content {
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      width: 100%;
      max-width: 580px;
      border-radius: 24px;
      box-shadow: 0 40px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
      position: relative;
      transform: translateY(30px) scale(0.95);
      transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      display: flex;
      flex-direction: column;
      max-height: 90vh;
      overflow: hidden;
      font-family: 'Outfit', sans-serif;
    }
    .saf-modal-overlay.active .saf-modal-content {
      transform: translateY(0) scale(1);
    }

    .saf-modal-header {
      padding: 32px 40px 24px;
      text-align: center;
      position: relative;
      border-bottom: 1px solid rgba(255,255,255,0.05);
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%);
    }
    .saf-modal-header h3 {
      margin: 0 0 12px;
      font-size: 28px;
      color: #fff;
      font-weight: 700;
      letter-spacing: -0.5px;
    }
    .saf-modal-header p {
      margin: 0;
      font-size: 15px;
      color: rgba(255,255,255,0.6);
      line-height: 1.5;
    }
    .saf-close-btn {
      position: absolute;
      top: 20px;
      right: 20px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      color: rgba(255,255,255,0.7);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      font-size: 24px;
      line-height: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    .saf-close-btn:hover {
      background: rgba(233, 69, 96, 0.2);
      color: #E94560;
      border-color: rgba(233, 69, 96, 0.5);
      transform: rotate(90deg);
    }

    .saf-modal-body {
      padding: 24px 40px 40px;
      overflow-y: auto;
    }
    .saf-modal-body::-webkit-scrollbar {
      width: 8px;
    }
    .saf-modal-body::-webkit-scrollbar-track {
      background: transparent;
    }
    .saf-modal-body::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.2);
      border-radius: 10px;
    }

    .saf-form-group { margin-bottom: 24px; }
    .saf-form-row { display: flex; gap: 20px; margin-bottom: 24px; }
    .saf-form-row .saf-form-group { flex: 1; margin-bottom: 0; }
    
    .saf-form-group label {
      display: block;
      margin-bottom: 10px;
      font-size: 13px;
      font-weight: 600;
      color: rgba(255,255,255,0.8);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .saf-form-group input,
    .saf-form-group select {
      width: 100%;
      padding: 16px 20px;
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      font-size: 15px;
      font-family: 'Outfit', sans-serif;
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      transition: all 0.3s ease;
      box-sizing: border-box;
    }
    .saf-form-group select {
      appearance: none;
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.5)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
      background-repeat: no-repeat;
      background-position: right 16px center;
      background-size: 16px;
    }
    .saf-form-group select option {
      background: #1A1A2E;
      color: #fff;
    }
    .saf-form-group input::placeholder { color: rgba(255,255,255,0.3); }
    .saf-form-group input:focus,
    .saf-form-group select:focus {
      outline: none;
      border-color: #E94560;
      box-shadow: 0 0 0 4px rgba(233, 69, 96, 0.15);
      background: rgba(0, 0, 0, 0.5);
    }
    
    .saf-radio-group { display: flex; gap: 24px; margin-top: 10px; }
    .saf-radio-label {
      display: flex; align-items: center; gap: 8px;
      font-size: 15px; color: #fff; cursor: pointer; font-weight: 500;
    }
    .saf-radio-label input { margin: 0; width: 18px; height: 18px; accent-color: #E94560; }
    
    .saf-optional { color: rgba(255,255,255,0.4); font-size: 11px; text-transform: none; font-weight: 400; margin-left: 4px; }

    .saf-submit-btn {
      width: 100%;
      background: linear-gradient(135deg, #E94560, #FF6B86);
      color: #fff;
      border: none;
      padding: 18px;
      border-radius: 12px;
      font-size: 16px;
      font-weight: 700;
      font-family: 'Outfit', sans-serif;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 10px 24px rgba(233, 69, 96, 0.3);
      margin-top: 16px;
    }
    .saf-submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 15px 30px rgba(233, 69, 96, 0.4);
    }
    .saf-submit-btn:disabled {
      opacity: 0.7; cursor: not-allowed; transform: none;
    }

    .saf-msg {
      display: none; padding: 16px; border-radius: 12px; margin-bottom: 24px; font-size: 14px; font-weight: 500; text-align: center;
    }
    .saf-msg.success { display: block; background: rgba(39, 128, 68, 0.15); color: #4ade80; border: 1px solid rgba(39, 128, 68, 0.3); }
    .saf-msg.error { display: block; background: rgba(209, 44, 44, 0.15); color: #f87171; border: 1px solid rgba(209, 44, 44, 0.3); }

    @media (max-width: 600px) {
      .saf-form-row { flex-direction: column; gap: 24px; }
      .saf-modal-content { max-height: 95vh; border-radius: 20px; }
      .saf-modal-header { padding: 24px; }
      .saf-modal-body { padding: 20px 24px 30px; }
      .saf-floating-btn { left: 20px; bottom: 20px; padding: 14px 24px; font-size: 14px; }
    }
  `;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.id = 'saf-lead-popup';
  container.innerHTML = `
    <button class="saf-floating-btn" id="saf-open-btn">
      <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7zm0 6h7v2H7z"/></svg>
      Enquire Now
    </button>

    <div class="saf-modal-overlay" id="saf-modal">
      <div class="saf-modal-content">
        <div class="saf-modal-header">
          <button class="saf-close-btn" id="saf-close-btn">&times;</button>
          <h3>Connect with Coach</h3>
          <p>Fill in your details below to start your transformation journey.</p>
        </div>
        <div class="saf-modal-body">
          <div id="saf-form-msg" class="saf-msg"></div>
          <form id="saf-lead-form">
            <div class="saf-form-group">
              <label>Name *</label>
              <input type="text" name="name" required placeholder="Enter your full name">
            </div>

            <div class="saf-form-row">
              <div class="saf-form-group">
                <label>Age <span class="saf-optional">(Optional)</span></label>
                <input type="number" name="age" placeholder="e.g. 30">
              </div>
              <div class="saf-form-group">
                <label>Gender <span class="saf-optional">(Optional)</span></label>
                <select name="gender">
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div class="saf-form-row">
              <div class="saf-form-group">
                <label>Height <span class="saf-optional">(Optional)</span></label>
                <input type="text" name="height" placeholder="e.g. 5'6&quot; or 170cm">
              </div>
              <div class="saf-form-group">
                <label>Weight (kg) <span class="saf-optional">(Optional)</span></label>
                <input type="number" name="weight" placeholder="e.g. 70">
              </div>
            </div>

            <div class="saf-form-row">
              <div class="saf-form-group">
                <label>Goal Weight (kg) <span class="saf-optional">(Optional)</span></label>
                <input type="number" name="goal_weight" placeholder="e.g. 60">
              </div>
              <div class="saf-form-group">
                <label>Occupation <span class="saf-optional">(Optional)</span></label>
                <input type="text" name="occupation" placeholder="e.g. IT Professional">
              </div>
            </div>

            <div class="saf-form-row">
              <div class="saf-form-group">
                <label>Country <span class="saf-optional">(Optional)</span></label>
                <input type="text" name="country" placeholder="e.g. India">
              </div>
              <div class="saf-form-group">
                <label>City <span class="saf-optional">(Optional)</span></label>
                <input type="text" name="city" placeholder="e.g. Delhi">
              </div>
            </div>

            <div class="saf-form-row">
              <div class="saf-form-group">
                <label>Phone / WhatsApp *</label>
                <input type="text" name="phone" required placeholder="With country code">
              </div>
              <div class="saf-form-group">
                <label>Email *</label>
                <input type="email" name="email" required placeholder="your@email.com">
              </div>
            </div>

            <div class="saf-form-group">
              <label>How did you find Sandhya Arora Fitness? <span class="saf-optional">(Optional)</span></label>
              <input type="text" name="found_via" placeholder="e.g. Instagram, Google, Friend">
            </div>

            <div class="saf-form-group">
              <label>Have you followed an exercise or diet plan before? <span class="saf-optional">(Optional)</span></label>
              <div class="saf-radio-group">
                <label class="saf-radio-label"><input type="radio" name="previous_plan" value="Yes"> Yes</label>
                <label class="saf-radio-label"><input type="radio" name="previous_plan" value="No"> No</label>
              </div>
            </div>

            <button type="submit" class="saf-submit-btn" id="saf-submit-btn">Submit Details</button>
          </form>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(container);

  const modal = document.getElementById('saf-modal');
  const openBtn = document.getElementById('saf-open-btn');
  const closeBtn = document.getElementById('saf-close-btn');
  const form = document.getElementById('saf-lead-form');
  const submitBtn = document.getElementById('saf-submit-btn');
  const msgBox = document.getElementById('saf-form-msg');

  openBtn.addEventListener('click', () => { modal.classList.add('active'); });
  closeBtn.addEventListener('click', () => { modal.classList.remove('active'); });
  modal.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('active'); });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwUtjpjCxXJe-E-NOWtlKyZorZU4hQ7Fa_U3CI2YgiRATSXuSSYaq11ulRipfv17rBLEw/exec';

  form.addEventListener('submit', e => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.innerText = 'Submitting...';
    msgBox.className = 'saf-msg';
    msgBox.innerText = '';

    const formData = new FormData(form);
    formData.append('page_url', window.location.href);
    formData.append('page_title', document.title);
    
    const params = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      if (params.has(param)) {
        formData.append(param, params.get(param));
      }
    });

    fetch(scriptURL, { method: 'POST', body: formData })
      .then(response => {
        msgBox.className = 'saf-msg success';
        msgBox.innerText = 'Thank you! Your details have been submitted successfully. Coach Sandhya will connect with you soon.';
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerText = 'Submit Details';
        setTimeout(() => {
          modal.classList.remove('active');
          msgBox.className = 'saf-msg';
          msgBox.innerText = '';
        }, 5000);
      })
      .catch(error => {
        console.error('Error!', error.message);
        msgBox.className = 'saf-msg error';
        msgBox.innerText = 'Something went wrong. Please try again or contact via WhatsApp.';
        submitBtn.disabled = false;
        submitBtn.innerText = 'Submit Details';
      });
  });

})();
