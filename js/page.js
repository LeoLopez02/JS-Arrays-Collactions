// Charts
let ctx = document.getElementById("monthlySales").getContext("2d");
let pieCtx = document.getElementById("deptSales").getContext("2d");
let yearlyLabel = document.getElementById("yearlyTotal");

let monthlySales = Array.of(555, 9000, 3000, 445);
let monthlyLabels = Array.of("Oct", "Nov", "Dec");
let deptSales = Array.of(12, 9, 3);
let deptLabels = Array.of("Hiking", "Running", "Hunting");

let yearlyTotal = 0;

function addYearlyTotal(x) {
  yearlyTotal = x + yearlyTotal;
}

monthlySales.forEach(addYearlyTotal);

let octNums = Array.of(555, 1000, 9000);
let novNums = Array.of(1499, 4545, 3453);
let decNums = Array.of(3234, 23423, 4567);

// let total = Array.of(
//   addYearlyTotal(...octNums),
//   addYearlyTotal(...novNums),
//   addYearlyTotal(...decNums)
// );

function findOver1000() {
  let firstThousand = monthlySales.findIndex((element) => element > 1000);
  alert(firstThousand);
}

yearlyLabel.innerHTML = "$" + yearlyTotal;

function resetNum() {
  monthlySales.fill(0);
  monthlySalesChart.update();
}
//Bar
var monthlySalesChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: monthlyLabels,
    datasets: [
      {
        label: "# of Sales",
        data: monthlySales,
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

//Pie

var deptSalesChart = new Chart(pieCtx, {
  type: "pie",
  data: {
    labels: deptLabels,
    datasets: [
      {
        label: "# of Sales",
        data: deptSales,
        backgroundColor: [
          "rgba(238, 184, 104, 1)",
          "rgba(75, 166, 223, 1)",
          "rgba(239, 118, 122, 1)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {},
});
