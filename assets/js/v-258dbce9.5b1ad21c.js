"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[81188],{55042:(e,t,a)=>{a.r(t),a.d(t,{data:()=>i});const i={key:"v-258dbce9",path:"/devices/MCCGQ14LM.html",title:"Xiaomi MCCGQ14LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi MCCGQ14LM control via MQTT",description:"Integrate your Xiaomi MCCGQ14LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-11-30T20:10:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Contact (binary)",slug:"contact-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/MCCGQ14LM.md",git:{updatedTime:1643903989e3}}},20473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var i=a(66252);const o=(0,i.uE)('<h1 id="xiaomi-mccgq14lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-mccgq14lm" aria-hidden="true">#</a> Xiaomi MCCGQ14LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>MCCGQ14LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara E1 door &amp; window contact sensor</td></tr><tr><td>Exposes</td><td>contact, battery, voltage, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/MCCGQ14LM.jpg" alt="Xiaomi MCCGQ14LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h2 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware" aria-hidden="true">#</a> Adapter firmware</h2><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p>',5),r=(0,i.Uk)("CC2530/CC2531: "),n={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},d=(0,i._)("code",null,"20211115",-1),l=(0,i.Uk)("CC1352/CC2652: "),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},u=(0,i._)("code",null,"20211114",-1),s=(0,i.Uk)("Conbee II: "),h={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},m=(0,i._)("code",null,"0x26720700",-1),p=(0,i._)("p",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.",-1),f=(0,i._)("h2",{id:"options",tabindex:"-1"},[(0,i._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,i.Uk)(" Options")],-1),b=(0,i.Uk)("How to use device type specific configuration"),v=(0,i.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_precision</code>: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="contact-binary" tabindex="-1"><a class="header-anchor" href="#contact-binary" aria-hidden="true">#</a> Contact (binary)</h3><p>Indicates if the contact is closed (= true) or open (= false). Value can be found in the published state on the <code>contact</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>false</code> contact is ON, if <code>true</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),g={},k=(0,a(83744).Z)(g,[["render",function(e,t){const a=(0,i.up)("OutboundLink"),g=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("ul",null,[(0,i._)("li",null,[r,(0,i._)("a",n,[d,(0,i.Wm)(a)])]),(0,i._)("li",null,[l,(0,i._)("a",c,[u,(0,i.Wm)(a)])]),(0,i._)("li",null,[s,(0,i._)("a",h,[m,(0,i.Wm)(a)])])]),p,f,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(g,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[b])),_:1})])]),v],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[a,i]of t)e[a]=i;return e}}}]);