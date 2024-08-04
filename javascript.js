function agecalculate() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please enter your Date Of Birth.');
        return;
    }

    const db = new Date(dob);
    const today = new Date();
    
    let age = today.getFullYear() - db.getFullYear();
    const md = today.getMonth() - db.getMonth();
    const dd = today.getDate() - db.getDate();
    
    if (md < 0 || (md == 0 && dd < 0)) {
        age--;
    }
    
    document.getElementById('result').textContent = "Your are " + age +" years old";
}
