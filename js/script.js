/**
 * QURAN ACADEMY - INTERACTIVE CORE JAVASCRIPT
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCounters();
  initAccordion();
  initModals();
  initCurrencyToggle();
  initFormValidation();
  initWhatsAppCTA();
  initSmoothScroll();
});

/* --------------------------------------------------------------------------
   1. NAVBAR & MOBILE MENU
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Scroll Behavior
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Hamburger Toggle
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
      document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navMenu.classList.contains('open')) {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }
}

/* --------------------------------------------------------------------------
   2. STATS COUNTER ANIMATION
   -------------------------------------------------------------------------- */
function initCounters() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observerOptions = {
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetVal = parseFloat(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        const isDecimal = el.getAttribute('data-decimal') === 'true';

        animateCount(el, targetVal, suffix, isDecimal);
        obs.unobserve(el);
      }
    });
  }, observerOptions);

  statNumbers.forEach(num => observer.observe(num));
}

function animateCount(el, target, suffix, isDecimal) {
  let start = 0;
  const duration = 2000;
  const steps = 60;
  const stepTime = duration / steps;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      el.textContent = (isDecimal ? target.toFixed(1) : Math.floor(target)) + suffix;
      clearInterval(timer);
    } else {
      el.textContent = (isDecimal ? start.toFixed(1) : Math.floor(start)) + suffix;
    }
  }, stepTime);
}

/* --------------------------------------------------------------------------
   3. FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all items & reset ARIA
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        const otherBtn = otherItem.querySelector('.faq-question');
        if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked item
      if (!isActive) {
        item.classList.add('active');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   4. MODALS & DATA PREVIEWS
   -------------------------------------------------------------------------- */
function initModals() {
  const modalOverlay = document.getElementById('infoModal');
  if (!modalOverlay) return;

  const modalTitle = modalOverlay.querySelector('.modal-title');
  const modalBody = modalOverlay.querySelector('.modal-body-content');
  const closeBtns = modalOverlay.querySelectorAll('.modal-close, .btn-close-modal');

  closeBtns.forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Learn More Buttons for Courses
  document.querySelectorAll('[data-course-detail]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const courseName = btn.getAttribute('data-course-detail');
      const courseDesc = btn.getAttribute('data-course-desc');
      const courseGroup = btn.getAttribute('data-course-group');

      modalTitle.textContent = courseName;
      modalBody.innerHTML = `
        <div style="text-align: left; line-height: 1.7;">
          <p style="margin-bottom: 16px; color: var(--text-secondary);">${courseDesc}</p>
          <div style="background: var(--bg-sand); padding: 16px; border-radius: 12px; margin-bottom: 24px;">
            <p style="font-weight: 700; color: var(--primary-dark); margin-bottom: 4px;">Target Audience:</p>
            <p style="color: var(--gold-dark); font-weight: 600;">${courseGroup}</p>
          </div>
          <h4 style="color: var(--primary-dark); font-weight: 800; margin-bottom: 12px;">What You Will Learn:</h4>
          <ul style="list-style: disc; padding-left: 20px; color: var(--text-secondary); margin-bottom: 24px;">
            <li style="margin-bottom: 6px;">Step-by-step personalized curriculum tailored to student level</li>
            <li style="margin-bottom: 6px;">Proper pronunciation and rules of Tajweed</li>
            <li style="margin-bottom: 6px;">Interactive digital screen sharing and audio practice</li>
            <li style="margin-bottom: 6px;">Monthly progress assessment report for parents/students</li>
          </ul>
          <button onclick="selectCourseAndEnroll('${courseName}')" class="btn btn-primary" style="width: 100%;">Book Free Trial For ${courseName}</button>
        </div>
      `;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // View Profile Buttons for Teachers
  document.querySelectorAll('[data-teacher-detail]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = btn.getAttribute('data-teacher-name');
      const spec = btn.getAttribute('data-teacher-spec');
      const exp = btn.getAttribute('data-teacher-exp');
      const lang = btn.getAttribute('data-teacher-lang');
      const gender = btn.getAttribute('data-teacher-gender') || 'Certified Tutor';
      const imgSrc = btn.getAttribute('data-teacher-img') || 'assets/images/teacher-1.jpg';

      modalTitle.textContent = "Teacher Profile";
      modalBody.innerHTML = `
        <div class="teacher-profile-modal">
          <!-- Top Profile Header -->
          <div class="profile-header-card">
            <div class="profile-avatar-wrapper">
              <img src="${imgSrc}" alt="${name}" class="profile-avatar-img">
            </div>
            <div class="profile-header-meta">
              <div class="profile-title-row">
                <h3 class="profile-name-text">${name}</h3>
                <span class="profile-gender-pill">${gender}</span>
              </div>
              <p class="profile-spec-text">${spec}</p>
            </div>
          </div>

          <!-- Stat Chips Grid -->
          <div class="profile-stats-grid">
            <div class="profile-stat-chip">
              <div class="profile-chip-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <span class="chip-label">Teaching Experience</span>
                <strong class="chip-value">${exp}</strong>
              </div>
            </div>

            <div class="profile-stat-chip">
              <div class="profile-chip-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div>
                <span class="chip-label">Fluent Languages</span>
                <strong class="chip-value">${lang}</strong>
              </div>
            </div>
          </div>

          <!-- About Section -->
          <div class="profile-section-block">
            <h4 class="profile-block-heading">About the Instructor</h4>
            <p class="profile-bio-p">Dedicated Quran instructor experienced in interactive 1-on-1 online Quran sessions, Tajweed pronunciation, and customized learning plans for kids and adults.</p>
          </div>

          <!-- Courses Taught Section -->
          <div class="profile-section-block">
            <h4 class="profile-block-heading">Courses Taught</h4>
            <ul class="profile-courses-list">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Noorani Qaida &amp; Arabic Phonics</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Quran Recitation with Tajweed Rules</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>Quran Memorization (Hifz) &amp; Revision</span>
              </li>
            </ul>
          </div>

          <!-- Short Premium CTA Button -->
          <button onclick="selectTeacherAndEnroll('${name}', '${gender}')" class="btn btn-primary profile-cta-btn">Book Free Trial</button>
        </div>
      `;
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Pricing Plan CTA click handlers
  document.querySelectorAll('[data-select-plan]').forEach(btn => {
    btn.addEventListener('click', () => {
      const planName = btn.getAttribute('data-select-plan');
      const notesField = document.getElementById('notes');
      if (notesField && planName) {
        notesField.value = `Selected Membership Plan: ${planName} Plan`;
      }
    });
  });

  // How It Works Step Cards In-Page Navigation
  document.querySelectorAll('.step-card[data-step-target]').forEach(card => {
    const handleStepAction = () => {
      const targetId = card.getAttribute('data-step-target');
      const focusFieldId = card.getAttribute('data-focus-field');
      const targetEl = document.querySelector(targetId);

      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });

        if (focusFieldId) {
          setTimeout(() => {
            const field = document.getElementById(focusFieldId);
            if (field) {
              field.focus();
              field.classList.add('field-highlight');
              setTimeout(() => field.classList.remove('field-highlight'), 1500);
            }
          }, 600);
        }
      }
    };

    card.addEventListener('click', handleStepAction);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleStepAction();
      }
    });
  });
}

// Global helpers to auto fill form
window.selectCourseAndEnroll = function(courseName) {
  const modalOverlay = document.getElementById('infoModal');
  if (modalOverlay) modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
  
  const courseSelect = document.getElementById('selectCourse');
  if (courseSelect) {
    for (let opt of courseSelect.options) {
      if (opt.text.toLowerCase().includes(courseName.toLowerCase())) {
        opt.selected = true;
        break;
      }
    }
  }

  const enrollSection = document.getElementById('contact');
  if (enrollSection) {
    enrollSection.scrollIntoView({ behavior: 'smooth' });
  }
};

window.selectTeacherAndEnroll = function(teacherName, gender) {
  const modalOverlay = document.getElementById('infoModal');
  if (modalOverlay) modalOverlay.classList.remove('active');
  document.body.style.overflow = '';

  const genderSelect = document.getElementById('teacherGender');
  if (genderSelect && gender) {
    if (gender.toLowerCase().includes('female')) {
      genderSelect.value = 'Female';
    } else if (gender.toLowerCase().includes('male')) {
      genderSelect.value = 'Male';
    }
  }

  const enrollSection = document.getElementById('contact');
  if (enrollSection) {
    enrollSection.scrollIntoView({ behavior: 'smooth' });
  }
};

/* --------------------------------------------------------------------------
   5. WHATSAPP FORM SUBMISSION & VALIDATION
   -------------------------------------------------------------------------- */
// Academy WhatsApp Configuration Number (Digits with country code, e.g. 923XXXXXXXXX)
const ACADEMY_WHATSAPP_NUMBER = '923227018875';

function initFormValidation() {
  const form = document.getElementById('enrollForm');

  // Update floating WhatsApp button link
  const floatWhatsappBtn = document.getElementById('whatsappBtn');
  if (floatWhatsappBtn) {
    floatWhatsappBtn.href = `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}`;
    floatWhatsappBtn.target = '_blank';
  }

  if (!form) return;

  const ageInput = document.getElementById('age');
  const parentInput = document.getElementById('parentName');

  // Parent Field Logic: Always visible. Required if age < 18, Optional if age >= 18 or empty
  if (ageInput && parentInput) {
    const handleAgeChange = () => {
      const val = parseInt(ageInput.value, 10);
      const parentStar = document.getElementById('parentStar');
      const parentLabel = document.getElementById('parentLabel');
      
      if (!isNaN(val) && val < 18) {
        if (parentStar) parentStar.style.display = 'inline';
        if (parentLabel) parentLabel.childNodes[0].nodeValue = 'Parent Name ';
        parentInput.setAttribute('required', 'true');
      } else {
        if (parentStar) parentStar.style.display = 'none';
        if (parentLabel) parentLabel.childNodes[0].nodeValue = 'Parent Name ';
        parentInput.removeAttribute('required');
        parentInput.classList.remove('error');
      }
    };
    handleAgeChange();
    ageInput.addEventListener('input', handleAgeChange);
    ageInput.addEventListener('change', handleAgeChange);
  }

  const countrySelect = document.getElementById('country');
  const whatsappInput = document.getElementById('whatsapp');
  const otherCountryGroup = document.getElementById('otherCountryGroup');
  const otherCountryInput = document.getElementById('otherCountry');

  if (countrySelect) {
    countrySelect.addEventListener('change', () => {
      const selectedOpt = countrySelect.options[countrySelect.selectedIndex];
      const dialCode = selectedOpt ? selectedOpt.getAttribute('data-code') : '';
      
      // Auto-fill country dialing code in WhatsApp input
      if (whatsappInput && dialCode) {
        whatsappInput.value = dialCode;
        whatsappInput.focus();
      }

      // Toggle custom country input if "Other" is selected
      if (otherCountryGroup) {
        if (countrySelect.value === 'Other') {
          otherCountryGroup.style.display = 'block';
          if (otherCountryInput) otherCountryInput.setAttribute('required', 'true');
        } else {
          otherCountryGroup.style.display = 'none';
          if (otherCountryInput) {
            otherCountryInput.removeAttribute('required');
            otherCountryInput.value = '';
            otherCountryInput.classList.remove('error');
          }
        }
      }
    });
  }

  // Remove error state on field input/change
  form.querySelectorAll('.form-control').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
    field.addEventListener('change', () => field.classList.remove('error'));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const studentName = document.getElementById('studentName');
    const email = document.getElementById('email');
    const country = document.getElementById('country');
    const age = document.getElementById('age');
    const selectCourse = document.getElementById('selectCourse');
    const teacherGender = document.getElementById('teacherGender');
    const timePreference = document.getElementById('timePreference');
    const notes = document.getElementById('notes');

    // Reset errors
    form.querySelectorAll('.form-control').forEach(f => f.classList.remove('error'));

    // Validate Student Name
    if (!studentName || !studentName.value.trim()) {
      if (studentName) studentName.classList.add('error');
      isValid = false;
    }

    // Validate Age
    const ageVal = parseInt(age ? age.value : '', 10);
    if (isNaN(ageVal) || ageVal < 3 || ageVal > 90) {
      if (age) age.classList.add('error');
      isValid = false;
    }

    // Validate Parent Name if under 18
    if (!isNaN(ageVal) && ageVal < 18) {
      if (!parentInput || !parentInput.value.trim()) {
        if (parentInput) parentInput.classList.add('error');
        isValid = false;
      }
    }

    // Validate Other Country if selected
    if (country && country.value === 'Other') {
      if (!otherCountryInput || !otherCountryInput.value.trim()) {
        if (otherCountryInput) otherCountryInput.classList.add('error');
        isValid = false;
      }
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      if (email) email.classList.add('error');
      isValid = false;
    }

    // Validate Phone / WhatsApp
    if (!whatsappInput || whatsappInput.value.trim().length < 6) {
      if (whatsappInput) whatsappInput.classList.add('error');
      isValid = false;
    }

    // Validate Selects
    [country, selectCourse, teacherGender, timePreference].forEach(selectEl => {
      if (!selectEl || !selectEl.value) {
        if (selectEl) selectEl.classList.add('error');
        isValid = false;
      }
    });

    if (isValid) {
      // 1. Gather clean form values
      const sName = studentName ? studentName.value.trim() : '';
      const pName = parentInput && parentInput.value.trim() ? parentInput.value.trim() : 'N/A';
      const sAge = age ? age.value.trim() : '';
      const uEmail = email ? email.value.trim() : '';
      const uPhone = whatsappInput ? whatsappInput.value.trim() : '';

      let uCountry = country ? country.value : '';
      if (uCountry === 'Other' && otherCountryInput && otherCountryInput.value.trim()) {
        uCountry = otherCountryInput.value.trim();
      } else if (countrySelect && countrySelect.selectedIndex >= 0) {
        const selOpt = countrySelect.options[countrySelect.selectedIndex];
        if (selOpt && selOpt.text) uCountry = selOpt.text;
      }

      const uCourse = selectCourse ? selectCourse.value : '';
      const uGender = teacherGender ? teacherGender.value : '';
      const uTiming = timePreference ? timePreference.value : '';
      const uNotes = notes && notes.value.trim() ? notes.value.trim() : 'None';

      // 2. Build WhatsApp message text
      const whatsappMessage = `Assalamualaikum, I want to book a free trial class.

Student Name: ${sName}

Parent / Guardian: ${pName}

Student Age: ${sAge}

Email: ${uEmail}

WhatsApp Number: ${uPhone}

Country: ${uCountry}

Course: ${uCourse}

Tutor Preference: ${uGender}

Preferred Class Timing: ${uTiming}`;

      // 3. Construct WhatsApp URL
      const encodedMsg = encodeURIComponent(whatsappMessage);
      const whatsappUrl = `https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${encodedMsg}`;

      // 4. Open WhatsApp chat window
      window.open(whatsappUrl, '_blank');
    } else {
      const firstError = form.querySelector('.form-control.error');
      if (firstError) {
        firstError.focus();
      }
    }
  });
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  if (!toast) return;

  const toastText = toast.querySelector('.toast-text');
  toastText.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 5000);
}

/* --------------------------------------------------------------------------
   6. WHATSAPP CTA
   -------------------------------------------------------------------------- */
function initWhatsAppCTA() {
  const waBtn = document.getElementById('whatsappBtn');
  if (!waBtn) return;

  const defaultMsg = encodeURIComponent('Assalamualaikum! I would like to inquire about online Quran classes at Online Rohan Quran Academy.');

  waBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${ACADEMY_WHATSAPP_NUMBER}?text=${defaultMsg}`, '_blank');
  });
}

/* --------------------------------------------------------------------------
   7. SMOOTH SCROLL
   -------------------------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   8. PRICING CURRENCY SWITCHER (USD / PKR)
   -------------------------------------------------------------------------- */
function initCurrencyToggle() {
  const toggleBtns = document.querySelectorAll('.currency-toggle-btn');
  if (!toggleBtns.length) return;

  const priceBoxes = document.querySelectorAll('.plan-price-box');

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedCurrency = btn.getAttribute('data-currency');

      toggleBtns.forEach(b => {
        const isCurrent = b === btn;
        b.classList.toggle('active', isCurrent);
        b.setAttribute('aria-pressed', isCurrent ? 'true' : 'false');
      });

      priceBoxes.forEach(box => {
        const priceEl = box.querySelector('.plan-price');
        const currEl = box.querySelector('.plan-currency');

        if (priceEl && currEl) {
          box.classList.remove('animating');
          void box.offsetWidth; // Trigger reflow
          box.classList.add('animating');

          if (selectedCurrency === 'PKR') {
            priceEl.textContent = priceEl.getAttribute('data-pkr');
            currEl.textContent = currEl.getAttribute('data-pkr');
          } else {
            priceEl.textContent = priceEl.getAttribute('data-usd');
            currEl.textContent = currEl.getAttribute('data-usd');
          }
        }
      });
    });
  });
}

