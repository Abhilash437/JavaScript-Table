

let tbody = document.getElementById('tbody');


fetch("http://localhost:3000/user").then(res=>res.json()).then(json=>{
  json.map(data=>{
    tbody.append(td_fun(data.machine_name,data.machine_id,data.daily_energy,data.monthly_energy,data.yearly_energy,data.active_power,data.apparent_power,data.reactive_power,data.current,data.voltage,data.power_factor,data.idle_daily,data.idle_monthly,data.idle_yearly));
  })
})

function td_fun(machine_name,machine_id,daily_energy,monthly_energy,yearly_energy,active_power,apparent_power,reactive_power,current,voltage,power_factor,idle_daily,idle_monthly,idle_yearly){
  let td = document.createElement('tr');
  td.innerHTML = `
  <tr>
    <td class="px-6 py-4 whitespace-nowrap">
      ${machine_name}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      ${machine_id}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${daily_energy}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${monthly_energy}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${yearly_energy}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${active_power}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${apparent_power}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${reactive_power}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${current}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${voltage}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${power_factor}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${idle_daily}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${idle_monthly}
    </td>
    <td class="px-6 py-4 text-center whitespace-nowrap">
      ${idle_yearly}
    </td>
  </tr>
  `
  return td;
}
