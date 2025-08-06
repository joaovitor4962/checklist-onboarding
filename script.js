async function gerarPDF() {
  const tecnico = document.getElementById('tecnico').value;
  const funcionario = document.getElementById('funcionario').value;
  const checklistItems = document.querySelectorAll('#checklist .checklist-item');
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  let y = 10;
  doc.setFontSize(16);
  doc.text(`Checklist de Onboarding`, 10, y); y += 10;
  doc.setFontSize(12);
  doc.text(`Técnico Responsável: ${tecnico}`, 10, y); y += 8;
  doc.text(`Funcionário: ${funcionario}`, 10, y); y += 10;

  checklistItems.forEach(item => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    const text = item.textContent.trim();
    const marcado = checkbox.checked ? "[X]" : "[ ]";
    doc.text(`${marcado} ${text}`, 10, y);
    y += 8;
  });

  doc.save("checklist-onboarding.pdf");
}