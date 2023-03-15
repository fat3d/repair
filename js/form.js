


const form = document.querySelector("#add-form");
const successMessage = document.querySelector("#success-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const blockN = form.querySelector("#block-n").value;
    const reqRepair = form.querySelector("#req-repair").value;
    const repairDesc = form.querySelector("#repair-desc").value;
    const unit_n = form.querySelector("#unit_n").value;
    const reqdate = form.querySelector("#reqdate").value;
    const etc = form.querySelector("#etc").value;
    db.collection("repair").add({
      block_n: blockN,  
      req_repair: reqRepair,
      repair_desc: repairDesc,
      unit_n: unit_n,
      req_date: reqdate,
      etc: etc
    })
    .then(() => {
        successMessage.style.display = "block";
        form.reset();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
});