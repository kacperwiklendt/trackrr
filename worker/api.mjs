const json=(v,status=200)=>new Response(JSON.stringify(v),{status,headers:{'Content-Type':'application/json','Cache-Control':'no-store'}});
export async function api(request,env){const user=request.headers.get('oai-authenticated-user-id');if(!user)return json({error:'Unauthorized'},401);if(!env.BUCKET)return json({error:'Storage unavailable'},503);const key='users/'+encodeURIComponent(user)+'/state.json';
if(request.method==='GET'){const item=await env.BUCKET.get(key);return json(item?{state:await item.json(),revision:item.etag}:{state:null,revision:''})}
if(request.method!=='PUT')return json({error:'Method not allowed'},405);
const origin=request.headers.get('Origin');if(origin&&origin!==new URL(request.url).origin)return json({error:'Origin mismatch'},403);
if(Number(request.headers.get('Content-Length')||0)>16*1024*1024)return json({error:'Too large'},413);
let body;try{const raw=await request.text();if(raw.length>16*1024*1024)return json({error:'Too large'},413);body=JSON.parse(raw)}catch{return json({error:'Invalid JSON'},400)}
const state=body.state;if(!state||state.version!==3||!Array.isArray(state.tasks)||state.tasks.length>5000||!Array.isArray(state.rests)||!state.tasks.every(t=>typeof t.id==='string'&&typeof t.name==='string'&&typeof t.category==='string'&&typeof t.date==='string'))return json({error:'Invalid state'},400);
const current=await env.BUCKET.get(key);if((current?.etag||'')!==body.revision)return json({error:'Conflict'},409);
if(current){const old=await current.text();await env.BUCKET.put('users/'+encodeURIComponent(user)+'/previous.json',old)}
const item=await env.BUCKET.put(key,JSON.stringify(state),{onlyIf:body.revision?{etagMatches:body.revision}:{etagDoesNotMatch:'*'},httpMetadata:{contentType:'application/json'}});if(!item)return json({error:'Conflict'},409);return json({revision:item.etag})}
