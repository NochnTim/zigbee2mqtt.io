"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[248],{81962:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i={key:"v-0b0a758f",path:"/devices/412015.html",title:"Legrand 412015 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand 412015 control via MQTT",description:"Integrate your Legrand 412015 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2020-06-29T17:33:31.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Model numbers",slug:"model-numbers",children:[]},{level:3,title:"Force read power",slug:"force-read-power",children:[]},{level:3,title:"Power Alarm Configuration",slug:"power-alarm-configuration",children:[]},{level:3,title:"Identify",slug:"identify",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Power_alarm_active (binary)",slug:"power-alarm-active-binary",children:[]},{level:3,title:"Power_alarm (binary)",slug:"power-alarm-binary",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/412015.md",git:{updatedTime:1643903989e3}}},56221:(e,a,t)=>{t.r(a),t.d(a,{default:()=>l});var i=t(66252);const o=(0,i.uE)('<h1 id="legrand-412015" tabindex="-1"><a class="header-anchor" href="#legrand-412015" aria-hidden="true">#</a> Legrand 412015</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>412015</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>DIN power consumption module</td></tr><tr><td>Exposes</td><td>power, power_alarm_active, power_alarm, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/412015.jpg" alt="Legrand 412015"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="model-numbers" tabindex="-1"><a class="header-anchor" href="#model-numbers" aria-hidden="true">#</a> Model numbers</h3><p>In Legrand, model number depends on the country and the colour of the devices, for instance:</p><ul><li>French models are branded as Céliane with Netatmo, whereas Spanish models are branded as Legrand Valena Next. However, this device has no colour options, so there is only one model: &quot;412015&quot; or &quot;4 120 15&quot;</li></ul><p>Other brand names depending on the country:</p><ul><li>Availability for Céliane™ with Netatmo → France and Overseas territories, Greece, Poland, Hungary, Tunisia, Morocco, Ivory Coast, Czech Republic, Russia, Mauritius</li><li>Availability for Dooxie™ with Netatmo → France and Overseas territories</li><li>Availability for Mosaic™ with Netatmo → France and Overseas territories, Ivory Coast</li><li>Availability for Living Now™ with Netatmo → Italy, Belgium, Greece, Portugal, Lebanon, Israel, Chile, Peru, Mexico</li><li>Availability for Valena Allure™ with Netatmo → Greece, Germany, Austria, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Russia</li><li>Availability for Valena Life™ with Netatmo → Greece, Germany, Austria, Portugal, Poland, Slovakia, Bulgaria, Czech Republic, Hungary, Lituania, Russia</li><li>Availability for Valena Next™ with Netatmo → Spain, Belgium</li><li>Availability for Arteor™ with Netatmo → Australia, New Zealand, India, Malaysia, Lebanon, Mauritius, South Africa</li><li>Availability for Plexo™ with Netatmo → France and Overseas territories, Spain, Belgium</li><li>Availability for Modul&#39;Up™ with Netatmo → France and Overseas territories</li></ul><h3 id="force-read-power" tabindex="-1"><a class="header-anchor" href="#force-read-power" aria-hidden="true">#</a> Force read power</h3><ul><li><code>power</code>: Asks the device for the current active power.</li></ul><p>Example of MQTT message payload to ask for the active power. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/get</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;power&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="power-alarm-configuration" tabindex="-1"><a class="header-anchor" href="#power-alarm-configuration" aria-hidden="true">#</a> Power Alarm Configuration</h3><ul><li><code>power_alarm</code>: enables or disables the power alarm, and sets the value: <code>DISABLE</code> (default) / <code>integer</code> (in kWh)</li></ul><p>Example of MQTT message payload to disable the power alarm. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;power_alarm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DISABLE&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Example of MQTT message payload to enable the power alarm at 3.3 kWh. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;power_alarm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3300&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>When it reaches that value, the <code>power_alarm_active</code> binary_sensor will change to <code>true</code>.</p><h3 id="identify" tabindex="-1"><a class="header-anchor" href="#identify" aria-hidden="true">#</a> Identify</h3><p>Helps to identify the device using the LED.</p><ul><li><p><code>identify[&#39;effect&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>blink3</code></li><li><code>fixed</code></li><li><code>blinkgreen</code></li><li><code>blinkblue</code></li></ul></li><li><p><code>identify[&#39;color&#39;]</code>: only works for blink3 &amp; fixed in <code>effect</code>. Values:</p><ul><li><code>default</code></li><li><code>red</code></li><li><code>green</code></li><li><code>blue</code></li><li><code>lightblue</code></li><li><code>yellow</code></li><li><code>pink</code></li><li><code>white</code></li></ul></li></ul><p>Example of MQTT message payload to Identify the device. This should be sent to <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n    <span class="token string">&quot;identify&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;effect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;blink3&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;white&quot;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',25),n=(0,i.Uk)("How to use device type specific configuration"),r=(0,i.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-alarm-active-binary" tabindex="-1"><a class="header-anchor" href="#power-alarm-active-binary" aria-hidden="true">#</a> Power_alarm_active (binary)</h3><p>Value can be found in the published state on the <code>power_alarm_active</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> power_alarm_active is ON, if <code>false</code> OFF.</p><h3 id="power-alarm-binary" tabindex="-1"><a class="header-anchor" href="#power-alarm-binary" aria-hidden="true">#</a> Power_alarm (binary)</h3><p>Enable/disable the power alarm. Value can be found in the published state on the <code>power_alarm</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_alarm&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power_alarm is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',10),s={},l=(0,t(83744).Z)(s,[["render",function(e,a){const t=(0,i.up)("RouterLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("p",null,[(0,i._)("em",null,[(0,i.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.w5)((()=>[n])),_:1})])]),r],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{for(const[t,i]of a)e[t]=i;return e}}}]);