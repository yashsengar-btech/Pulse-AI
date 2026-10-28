document.getElementById('healthForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    age: document.getElementById('age').value,
    sex: document.getElementById('sex').value,
    cp: document.getElementById('cp').value,
    trestbps: document.getElementById('trestbps').value,
    chol: document.getElementById('chol').value,
    fbs: document.getElementById('fbs').value,
    restecg: document.getElementById('restecg').value,
    thalach: document.getElementById('thalach').value,
    exang: document.getElementById('exang').value,
    oldpeak: document.getElementById('oldpeak').value,
    slope: document.getElementById('slope').value,
    ca: document.getElementById('ca').value,
    thal: document.getElementById('thal').value
  };

  alert("✅ Form submitted!\nCollected data:\n" + JSON.stringify(data, null, 2));
});
