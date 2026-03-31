/**
 * Somatra Project - Main JavaScript File
 */

// 1. إعدادات الترجمة للرسائل التفاعلية
const translations = {
    en: {
        "form-success": "Message sent successfully!",
        "form-error": "Oops! There was a problem.",
        "sending": "Sending..."
    },
    ar: {
        "form-success": "تم إرسال رسالتك بنجاح!",
        "form-error": "عذراً! حدث خطأ ما.",
        "sending": "جاري الإرسال..."
    }
};

document.addEventListener("DOMContentLoaded", function() {
    
    // --- أ: تحديث السنة تلقائياً في الفوتر ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- ب: تحديد اللغة الحالية ---
    const currentLang = document.documentElement.lang === 'ar' ? 'ar' : 'en';

    // --- ج: معالجة إرسال نموذج الاتصال (Formspree) ---
    const contactForm = document.getElementById('contactForm');
    const status = document.getElementById("formStatus");
    const submitBtn = document.getElementById("submitBtn");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            const data = new FormData(contactForm);
            
            // تغيير حالة الزر أثناء الإرسال
            const originalBtnText = submitBtn.innerText;
            submitBtn.disabled = true;
            submitBtn.innerText = translations[currentLang]["sending"];

            fetch(contactForm.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = `<div class="alert alert-success">${translations[currentLang]["form-success"]}</div>`;
                    contactForm.reset();
                } else {
                    status.innerHTML = `<div class="alert alert-danger">${translations[currentLang]["form-error"]}</div>`;
                }
            }).catch(error => {
                status.innerHTML = `<div class="alert alert-danger">${translations[currentLang]["form-error"]}</div>`;
            }).finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            });
        });
    }

    // --- د: التمرير السلس (Smooth Scroll) للروابط الداخلية ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // تعويض لارتفاع الهيدر الثابت
                    behavior: 'smooth'
                });
            }
        });
    });
});