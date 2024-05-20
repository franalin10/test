   
   
   let mieiDati = [2478,5267,734,784,433];
    let etichette = ["Africa", "Asia", "Europa", "America Latina", "Nord America"]
    

   let caratteri = ["a","b","c","d","e","f",""]


    function calcola() {

      let soldi = parseInt(document.getElementById("soldi").value);
      let anni = parseInt(document.getElementById("anni").value);
      let interessi = parseFloat(document.getElementById("interessi").value);
      let agg = parseFloat(document.getElementById("agg").value);

      let datiSoldi = [];
      let datiAnni = [];
      let colori = [];
      let tot = soldi;

      let interesseCalc = 0;
      let totInv = soldi;

      for(let i = 0; i < anni; i++) {
        interesseCalc += tot*interessi;
        // totale
        tot+=agg + tot*interessi;
        // interesse maturato
       
        // soldi investiti 
        totInv += agg;
        if(i%2== 0 || i == anni-1) {
        datiSoldi.push(tot.toFixed(1));
        datiAnni.push(2024+i);
        colori.push("#3e95cd");
        }
      }
      // investimento
      document.getElementById("inv").innerText = totInv.toFixed(0);
      // parte interesse 
      document.getElementById("int").innerText = interesseCalc.toFixed(0)

    // Bar chart
    new Chart(document.getElementById("bar-chart"), {
        type: 'bar',
        data: {
          
          labels: datiAnni,
          datasets: [
            {
              label: "SALDO",
              // COLORI DI OGNI LABEL
              backgroundColor: colori,
              data:  datiSoldi
            }
          ]
        },
        options: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Profitto Annuo'
          }
        }
    });
  }