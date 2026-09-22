// Snipzo — साझा जावास्क्रिप्ट (सभी पेजों में इस्तेमाल होता है)

// एक पेज से दूसरे पेज पर जाना (हर स्क्रीन अलग HTML फ़ाइल है)
function go(name) {
  window.location.href = name + '.html';
}

// प्रोफाइल पेज: नाम एडिट करना
function editName() {
  const el = document.getElementById('profileNameDisplay');
  if (!el) return;
  const current = el.textContent;
  const updated = prompt('अपना नया नाम लिखें:', current);
  if (updated && updated.trim()) {
    el.textContent = updated.trim();
    const sub = document.getElementById('profileNameSub');
    if (sub) sub.textContent = updated.trim();
  }
}

// प्रोफाइल पेज: भाषा चुनने वाली लिस्ट खोलना/बंद करना
function toggleLangPicker() {
  const picker = document.getElementById('langPicker');
  if (!picker) return;
  picker.style.display = picker.style.display === 'none' ? 'block' : 'none';
}

// प्रोफाइल पेज: भाषा सेट करना
function setLang(label) {
  const langSub = document.getElementById('langSub');
  if (langSub) langSub.textContent = label;
  const picker = document.getElementById('langPicker');
  if (picker) picker.style.display = 'none';
}
