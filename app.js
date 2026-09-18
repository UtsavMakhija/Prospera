// ==========================================
// PROSPERA - CORE DASHBOARD INTEGRATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  renderKPIs();
  renderInventoryTable();
  renderCustomerTable();
});

// 1. Render Core Business KPIs from Sales Data
function renderKPIs() {
  if (typeof salesData === 'undefined') return;

  const totalRevenue = salesData.reduce((acc, curr) => acc + Number(curr.total_amount || 0), 0);
  const totalOrders = salesData.length;
  const avgOrderValue = totalOrders > 0 ? (totalRevenue / totalOrders) : 0;

  const kpiRevenue = document.getElementById("kpi-revenue");
  const kpiOrders = document.getElementById("kpi-orders");
  const kpiAov = document.getElementById("kpi-aov");

  if (kpiRevenue) kpiRevenue.innerText = `$${totalRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  if (kpiOrders) kpiOrders.innerText = totalOrders.toLocaleString();
  if (kpiAov) kpiAov.innerText = `$${avgOrderValue.toFixed(2)}`;
}

// 2. Render Predictive Inventory Depletion Feature
function renderInventoryTable() {
  const tableBody = document.getElementById("inventory-table-body");
  if (!tableBody || typeof inventoryData === 'undefined') return;

  tableBody.innerHTML = inventoryData.map(item => {
    let badgeClass = "badge-healthy";
    if (item.urgency === "Critical") badgeClass = "badge-critical";
    else if (item.urgency === "Low Stock") badgeClass = "badge-warning";

    return `
            <tr>
                <td><strong>${item.product_name}</strong></td>
                <td>${item.category}</td>
                <td>${item.current_stock} units</td>
                <td><span class="badge ${badgeClass}">${item.urgency}</span></td>
                <td>${item.predicted_depletion} (${item.days_until_depletion} days)</td>
            </tr>
        `;
  }).join("");
}

// 3. Render Customer Cohorts & LTV Analysis Feature
function renderCustomerTable() {
  const tableBody = document.getElementById("customer-table-body");
  if (!tableBody || typeof customerData === 'undefined') return;

  tableBody.innerHTML = customerData.map(cust => {
    const badgeClass = cust.status === "ACTIVE" ? "badge-healthy" : "badge-critical";
    return `
            <tr>
                <td>
                    <strong>${cust.customer_name}</strong><br>
                    <small style="color: #666;">${cust.email}</small>
                </td>
                <td><span class="badge ${badgeClass}">${cust.status}</span></td>
                <td><strong>$${Number(cust.ltv).toLocaleString(undefined, { minimumFractionDigits: 2 })}</strong></td>
                <td>${cust.last_purchase_date}</td>
                <td><span class="cohort-tag">${cust.cohort}</span></td>
            </tr>
        `;
  }).join("");
}