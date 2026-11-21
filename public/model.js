const iso=d=>[d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-');
const parse=s=>new Date(s+'T12:00:00'),plus=(d,n)=>{const v=new Date(d);v.setDate(v.getDate()+n);return v},mon=d=>plus(d,-((d.getDay()+6)%7));
function due(t,date){if(!t.date||date<t.date)return false;const schedule=t.schedule||'once',day=parse(date).getDay();return schedule==='once'?date===t.date:schedule==='weekdays'?day>0&&day<6:schedule==='alternate'?Math.round((parse(date)-parse(t.date))/86400000)%2===0:true}
function entry(t,date){return t.logs?.[date]||((t.schedule||'once')==='once'&&t.date===date&&t.done?{value:t.target||1}:null)}
function complete(t,date){return Number(entry(t,date)?.value||0)>=Number(t.target||1)}
function weeklyResult(tasks,start){let total=0,done=0;const dates=Array.from({length:7},(_,i)=>iso(plus(start,i)));for(const t of tasks){const eligible=dates.filter(d=>due(t,d));const count=eligible.filter(d=>complete(t,d)).length;const max=t.schedule==='weeklyN'?Math.min(t.frequency||3,eligible.length):eligible.length;total+=max;done+=Math.min(max,count)}return {done,total,pct:total?Math.round(done/total*100):0}}
function streak(tasks,rests,now){let n=0,date=now;const active=d=>tasks.some(t=>complete(t,d));if(!active(iso(date))&&!rests.includes(iso(date)))date=plus(date,-1);for(let i=0;i<3660;i++,date=plus(date,-1)){const key=iso(date);if(active(key))n++;else if(!rests.includes(key))break}return n}
function validateBackup(data){
 const photo=v=>!v||(typeof v==='string'&&v.length<1500000&&/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(v));
 const date=v=>typeof v==='string'&&(!v||/^\d{4}-\d{2}-\d{2}$/.test(v)&&!isNaN(parse(v)));
 return !!(data&&data.version===3&&Array.isArray(data.tasks)&&data.tasks.length<=5000&&Array.isArray(data.rests)&&data.rests.every(date)&&(!data.profile||typeof data.profile==='string')&&data.tasks.every(t=>t&&typeof t.id==='string'&&typeof t.name==='string'&&typeof t.category==='string'&&date(t.date)&&(!t.target||typeof t.target==='number'&&Number.isFinite(t.target)&&t.target>0)&&(!t.frequency||Number.isInteger(t.frequency)&&t.frequency>=1&&t.frequency<=7)&&photo(t.photo)&&(!t.steps||Array.isArray(t.steps)&&t.steps.every(s=>s&&typeof s.name==='string'))&&(!t.logs||typeof t.logs==='object'&&!Array.isArray(t.logs)&&Object.entries(t.logs).every(([d,v])=>date(d)&&v&&typeof v.value==='number'&&Number.isFinite(v.value)&&photo(v.photo)))));
}
if(typeof module!=='undefined')module.exports={iso,parse,plus,mon,due,entry,complete,weeklyResult,streak,validateBackup};
