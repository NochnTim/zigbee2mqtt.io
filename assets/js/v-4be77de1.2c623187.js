"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[5358],{68428:(e,t,i)=>{i.r(t),i.d(t,{data:()=>r});const r={key:"v-4be77de1",path:"/devices/SP_120.html",title:"Innr SP 120 control via MQTT",lang:"en-US",frontmatter:{title:"Innr SP 120 control via MQTT",description:"Integrate your Innr SP 120 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Specs",slug:"specs",children:[]},{level:3,title:"Manual",slug:"manual",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Energy (numeric)",slug:"energy-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SP_120.md",git:{updatedTime:1643903989e3}}},80911:(e,t,i)=>{i.r(t),i.d(t,{default:()=>u});var r=i(66252);const a=(0,r.uE)('<h1 id="innr-sp-120" tabindex="-1"><a class="header-anchor" href="#innr-sp-120" aria-hidden="true">#</a> Innr SP 120</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SP 120</td></tr><tr><td>Vendor</td><td>Innr</td></tr><tr><td>Description</td><td>Smart plug</td></tr><tr><td>Exposes</td><td>power, current, voltage, switch (state), energy, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SP-120.jpg" alt="Innr SP 120"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Factory reset by press &amp; hold the power button for 5 seconds. The LED is then starting to blink during pairing process.</p><h3 id="specs" tabindex="-1"><a class="header-anchor" href="#specs" aria-hidden="true">#</a> Specs</h3><ul><li>Rating: 220-240VAC, 10A, 50Hz</li><li>Standby Power: &lt;= 0.5W</li></ul><h3 id="manual" tabindex="-1"><a class="header-anchor" href="#manual" aria-hidden="true">#</a> Manual</h3>',8),o={href:"https://www.innr.com/wp-content/uploads/2019/12/Installation-Manual-Smart-Plug-EU-version-SP-120.pdf",target:"_blank",rel:"noopener noreferrer"},n=(0,r.Uk)("Supplier's manual"),d=(0,r._)("h2",{id:"options",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,r.Uk)(" Options")],-1),c=(0,r.Uk)("How to use device type specific configuration"),s=(0,r.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),l={},u=(0,i(83744).Z)(l,[["render",function(e,t){const i=(0,r.up)("OutboundLink"),l=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[a,(0,r._)("p",null,[(0,r._)("a",o,[n,(0,r.Wm)(i)])]),d,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(l,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[c])),_:1})])]),s],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,r]of t)e[i]=r;return e}}}]);