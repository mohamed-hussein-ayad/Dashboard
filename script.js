// Sidebar toggle
const menuToggle = document.getElementById("menu-toggle");
const wrapper = document.getElementById("wrapper");

menuToggle.addEventListener("click", () => {
  wrapper.classList.toggle("toggled");
});

// Bar Chart
const barChart = new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "Revenue",
        data: [3000, 5000, 4000, 6000],
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Pie Chart
const pieChart = new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Completed", "In Progress", "Pending"],
    datasets: [
      {
        data: [75, 20, 5],
        backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
