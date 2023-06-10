"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[826],{138:()=>{class e{constructor(e,t="",i,n,l="",s=!1){this.title=e,this.description=t,this.dueDate=i,this.priority=n,this.note=l,this.finished=s}}class t{constructor(e=[]){this.list=e}add(...t){t.forEach((t=>{t instanceof e&&this.list.push(t)}))}remove(...e){e.forEach((e=>{let t=this.list.indexOf(e);-1!=this.list[e]&&this.list.splice(t,1)}))}}let i=[],n=0;const l=()=>{let l=document.querySelector("#title").value,o=document.querySelector("#description").value,r=document.querySelector("#dueDate").value,a=document.querySelector("#priority").value,c=document.querySelector("#note").value;const d=new Date,u=["01","02","03","04","05","06","07","08","09","10","11","12"][d.getMonth()],m=`${d.getFullYear()}-${u}-${d.getDate()}`;return{createList:function(){let e=new t;i.push(e),s().addList()},createTask:function(){if(!l||r<m)return void s().warning();let t=new e(l,o,r,a,c);s().addTask(l,r,a,o,c),i[n].add(t)},finishTask:function(e){i[n].list[e].finished=!0},removeTask:function(e){i[n].list.splice(e,1)}}},s=()=>{const e=document.querySelector("#app");function t(e,t="div"){let i=document.createElement(`${t}`);return"."==e.slice(0,1)&&i.classList.add(e.slice(1)),"#"==e.slice(0,1)&&i.setAttribute("id",e.slice(1)),function(e){return void 0!==e?(e.appendChild(i),function e(t,n){return void 0!==t&&void 0!==n?(i.setAttribute(`${t}`,`${n}`),e):i}):i}}function s(e){document.querySelectorAll("#app > .list").forEach((e=>{e.classList.add("hidden")}));let t=document.querySelector(`.list[data-list='${e}']`);t&&t.classList.remove("hidden")}function o(){t(".list")(e)("data-list",i.length-1),d()}function r(e,l,s,o,r,c=n){let d=document.querySelector(`.list[data-list="${c}"]`),u=i[n].list.length;if(""==d.textContent){let e=d.getAttribute("name");e=null!=e?e:d.getAttribute("data-list"),t(".list-name","span")(d)().textContent=`List ${e}: `}let m=t(".task")(d)("data-task",u);m().textContent=`TITLE: ${e} | DUE DATE: ${l} | PRIORITY: ${s}   `;let f="High"==s?"pink":"Medium"==s?"yellow":"yellowgreen";m().setAttribute("style",`background-color: ${f}`);let h=t(".button-container")(m());a(".finish",h()),a(".remove",h());let v=t(".detail")(d)("data-task",u);v().classList.add("hidden"),v().innerText=`DESCRIPTION: ${o}\nNOTE: ${r}`,m().addEventListener("mouseover",(()=>{v().classList.remove("hidden")})),m().addEventListener("mouseleave",(()=>{v().classList.add("hidden")}))}function a(e,i){const n=t(e,"button")(i),s=Number(n().parentNode.parentNode.getAttribute("data-task"));".remove"==e?(n().textContent="X",n().addEventListener("click",(()=>{n().parentNode.parentNode.remove(),document.querySelector(`.detail[data-task='${s}']`).remove(),l().removeTask(s),c()}))):(n().innerHTML="&#10004;",n().addEventListener("click",(()=>{n().classList.toggle("done"),l().finishTask(s)})))}function c(){document.querySelectorAll(".list").forEach((e=>{if(e.hasChildNodes()){let t=e.childNodes,i=0;for(let e of t)"task"==e.className&&(e.setAttribute("data-task",i),i++)}}))}function d(){document.querySelectorAll(".scroller-container > div").forEach((e=>e.remove()));for(let e of i){const l=t(".scroller-item")(document.querySelector(".scroller-container"))("data-list",i.indexOf(e));let o=Number(l().getAttribute("data-list")),r=document.querySelector(`.list[data-list='${o}']`);r&&(r=r.getAttribute("name")),l().textContent=null!=r?r:o,t(".image","img")(l())("src","./images/folder.svg"),l().addEventListener("click",(()=>{document.querySelectorAll(".scroller-item").forEach((e=>{e.classList.remove("selected")})),l().classList.toggle("selected"),n=o,s(n)}))}document.querySelector(`.scroller-item[data-list='${n}']`).classList.add("selected");let e=t(".more-list")(document.querySelector(".scroller-container"));e().textContent="+",e().addEventListener("click",(()=>{l().createList()}))}return{makeElement:t,addList:o,addTask:r,listScroller:d,warning:function(){let e=document.querySelector(".warning");e.textContent="",document.querySelector("#title").value?e.textContent="*Due Date has to be later than Today!":e.textContent="*You have to enter a Title!"},refreshAllTasks:function(){for(let e of i)o();let e=0;document.querySelectorAll(".list").forEach((t=>{t.setAttribute("data-list",e),e++}));for(let e of i)for(let t of e.list)r(t.title,t.dueDate,t.priority,t.description,t.note,i.indexOf(e));c(),s(n)}}};!function(){const e=document.querySelector("#input-area");!function(){const e=JSON.parse(localStorage.getItem("savedData"));if(!e)return i=[];for(let n of e)i.push(new t),i[e.indexOf(n)].list=n.list}(),0==i.length&&l().createList(),s().makeElement("#reset","input")(e)("type","reset")("style","visibility: hidden; position: absolute;"),document.querySelector(".addTask").addEventListener("click",(e=>{e.preventDefault(),l().createTask(),document.querySelector("#reset").click(),localStorage.setItem("savedData",JSON.stringify(i))})),s().refreshAllTasks()}()}},e=>{e(e.s=138)}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ksTUFBTXVFLEVBQWVDLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsY0FFckQsSUFBS0osRUFBYyxPQUFRM0UsRUFBWSxHQUVuQyxJQUFLLElBQUlnRixLQUFXTCxFQUNoQjNFLEVBQVVMLEtBQUssSUFBSU4sR0FDbkJXLEVBQVUyRSxFQUFhN0UsUUFBUWtGLElBQVUxRixLQUFPMEYsRUFBUTFGLElBR3BFLENBTUkyRixHQUd3QixHQUFwQmpGLEVBQVV5QyxRQUFhdkMsSUFBV1csYUFFdENFLElBQWNVLFlBQVksU0FBVSxRQUFwQ1YsQ0FBNkMyRCxFQUE3QzNELENBQXdELE9BQVEsUUFBaEVBLENBQ0ksUUFDQSwyQ0FHSlosU0FBU0MsY0FBYyxZQUFZa0QsaUJBQWlCLFNBQVU0QixJQUMxREEsRUFBRUMsaUJBQ0ZqRixJQUFXZSxhQUNYZCxTQUFTQyxjQUFjLFVBQVVnRixRQUNqQ04sYUFBYU8sUUFBUSxZQUFhVCxLQUFLVSxVQUFVdEYsR0FBVyxJQUdoRWUsSUFBY3VELGlCQUNqQixDQXJCRCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmNsYXNzIFRvRG9JdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJcIixcclxuICAgICAgICBkdWVEYXRlLFxyXG4gICAgICAgIHByaW9yaXR5LFxyXG4gICAgICAgIG5vdGUgPSBcIlwiLFxyXG4gICAgICAgIGZpbmlzaGVkID0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5ub3RlID0gbm90ZTtcclxuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmluaXNoZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRvRG9MaXN0IHtcclxuICAgIGNvbnN0cnVjdG9yKGxpc3QgPSBbXSkge1xyXG4gICAgICAgIHRoaXMubGlzdCA9IGxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkKC4uLml0ZW1zKSB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIFRvRG9JdGVtKSB0aGlzLmxpc3QucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgZWxzZSByZXR1cm47XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKC4uLml0ZW1zKSB7XHJcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxpc3QuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdFtpdGVtXSA9PSAtMSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3Quc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGxpc3RQYW5lbCA9IFtdO1xyXG5sZXQgY3VycmVudExpc3QgPSAwO1xyXG5cclxuY29uc3QgYXBwTG9naWMgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkZXNjcmlwdGlvblwiKS52YWx1ZSxcclxuICAgICAgICBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkdWVEYXRlXCIpLnZhbHVlLFxyXG4gICAgICAgIHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKS52YWx1ZSxcclxuICAgICAgICBub3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNub3RlXCIpLnZhbHVlO1xyXG5cclxuICAgIC8vIENhbiB1c2UgZGF0ZS1mbnM6IGRhdGUgPSBmb3JtYXQobmV3IERhdGUoKSwgJ3l5eXktTU0tZGQnKTtcclxuICAgIGNvbnN0IGN1cnJlbnQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgY29uc3QgbW9udGhzID0gW1xyXG4gICAgICAgIFwiMDFcIixcclxuICAgICAgICBcIjAyXCIsXHJcbiAgICAgICAgXCIwM1wiLFxyXG4gICAgICAgIFwiMDRcIixcclxuICAgICAgICBcIjA1XCIsXHJcbiAgICAgICAgXCIwNlwiLFxyXG4gICAgICAgIFwiMDdcIixcclxuICAgICAgICBcIjA4XCIsXHJcbiAgICAgICAgXCIwOVwiLFxyXG4gICAgICAgIFwiMTBcIixcclxuICAgICAgICBcIjExXCIsXHJcbiAgICAgICAgXCIxMlwiLFxyXG4gICAgXTtcclxuICAgIGNvbnN0IG1vbnRoID0gbW9udGhzW2N1cnJlbnQuZ2V0TW9udGgoKV07XHJcbiAgICBjb25zdCBkYXRlID0gYCR7Y3VycmVudC5nZXRGdWxsWWVhcigpfS0ke21vbnRofS0ke2N1cnJlbnQuZ2V0RGF0ZSgpfWA7XHJcblxyXG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzaygpIHtcclxuICAgICAgICBpZiAoIXRpdGxlIHx8IGR1ZURhdGUgPCBkYXRlKSB7XHJcbiAgICAgICAgICAgIGludGVyYWN0RE9NKCkud2FybmluZygpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IFRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGUpO1xyXG4gICAgICAgIGludGVyYWN0RE9NKCkuYWRkVGFzayh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGRlc2NyaXB0aW9uLCBub3RlKTtcclxuICAgICAgICBsaXN0UGFuZWxbY3VycmVudExpc3RdLmFkZChuZXdUYXNrKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVMaXN0KCkge1xyXG4gICAgICAgIGxldCBuZXdMaXN0ID0gbmV3IFRvRG9MaXN0KCk7XHJcbiAgICAgICAgbGlzdFBhbmVsLnB1c2gobmV3TGlzdCk7XHJcbiAgICAgICAgaW50ZXJhY3RET00oKS5hZGRMaXN0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZmluaXNoVGFzayh0YXJnZXRlZFRhc2tJbmRleCkge1xyXG4gICAgICAgIGxpc3RQYW5lbFtjdXJyZW50TGlzdF0ubGlzdFt0YXJnZXRlZFRhc2tJbmRleF0uZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2sodGFyZ2V0ZWRUYXNrSW5kZXgpIHtcclxuICAgICAgICBsaXN0UGFuZWxbY3VycmVudExpc3RdLmxpc3Quc3BsaWNlKHRhcmdldGVkVGFza0luZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZUxpc3QsXHJcbiAgICAgICAgY3JlYXRlVGFzayxcclxuICAgICAgICBmaW5pc2hUYXNrLFxyXG4gICAgICAgIHJlbW92ZVRhc2ssXHJcbiAgICB9O1xyXG59O1xyXG5cclxuY29uc3QgaW50ZXJhY3RET00gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKTtcclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlRWxlbWVudChpZGVudGlmaWVyLCB0eXBlID0gXCJkaXZcIikge1xyXG4gICAgICAgIGxldCBuZXdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0eXBlfWApO1xyXG4gICAgICAgIGlmIChpZGVudGlmaWVyLnNsaWNlKDAsIDEpID09IFwiLlwiKSB7XHJcbiAgICAgICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChpZGVudGlmaWVyLnNsaWNlKDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIuc2xpY2UoMCwgMSkgPT0gXCIjXCIpIHtcclxuICAgICAgICAgICAgbmV3RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpZGVudGlmaWVyLnNsaWNlKDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFBhcmVudChwYXJlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gc2V0QXR0cih0eXBlLCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnNldEF0dHJpYnV0ZShgJHt0eXBlfWAsIGAke3ZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0QXR0cjtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9IGVsc2UgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5VGFzayhsaXN0KSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNhcHAgPiAubGlzdFwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgcGlja2VkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5saXN0W2RhdGEtbGlzdD0nJHtsaXN0fSddYCk7XHJcbiAgICAgICAgaWYgKHBpY2tlZExpc3QpIHBpY2tlZExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoQWxsVGFza3MoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbGlzdE9iamVjdCBvZiBsaXN0UGFuZWwpIHtcclxuICAgICAgICAgICAgYWRkTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubGlzdFwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1saXN0XCIsIGkpO1xyXG4gICAgICAgICAgICBpKys7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGxpc3RPYmplY3Qgb2YgbGlzdFBhbmVsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHRhc2sgb2YgbGlzdE9iamVjdC5saXN0KSB7XHJcbiAgICAgICAgICAgICAgICBhZGRUYXNrKFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHksXHJcbiAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICB0YXNrLm5vdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdFBhbmVsLmluZGV4T2YobGlzdE9iamVjdClcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzZXREYXRhVGFza0luZGV4KCk7XHJcblxyXG4gICAgICAgIGRpc3BsYXlUYXNrKGN1cnJlbnRMaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRMaXN0KCkge1xyXG4gICAgICAgIC8vIGxpc3QuUGFuZWwubGVuZ3RoIGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZCAtPiBtaW51cyAxXHJcbiAgICAgICAgbWFrZUVsZW1lbnQoXCIubGlzdFwiKShhcHApKFwiZGF0YS1saXN0XCIsIGxpc3RQYW5lbC5sZW5ndGggLSAxKTtcclxuICAgICAgICBsaXN0U2Nyb2xsZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUYXNrKFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgICAgbm90ZSxcclxuICAgICAgICBsaXN0ID0gY3VycmVudExpc3RcclxuICAgICkge1xyXG4gICAgICAgIGxldCBwaWNrZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmxpc3RbZGF0YS1saXN0PVwiJHtsaXN0fVwiXWApO1xyXG4gICAgICAgIGxldCBjdXJyZW50VGFza09yZGVyID0gbGlzdFBhbmVsW2N1cnJlbnRMaXN0XS5saXN0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgLy8gTGlzdCBuYW1lOlxyXG4gICAgICAgIGlmIChwaWNrZWRMaXN0LnRleHRDb250ZW50ID09IFwiXCIpIHtcclxuICAgICAgICAgICAgbGV0IGxpc3ROYW1lID0gcGlja2VkTGlzdC5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICBsaXN0TmFtZSA9XHJcbiAgICAgICAgICAgICAgICBsaXN0TmFtZSAhPSB1bmRlZmluZWQgPyBsaXN0TmFtZSA6IHBpY2tlZExpc3QuZ2V0QXR0cmlidXRlKFwiZGF0YS1saXN0XCIpO1xyXG4gICAgICAgICAgICBsZXQgbmFtZURpc3BsYXkgPSBtYWtlRWxlbWVudChcIi5saXN0LW5hbWVcIiwgXCJzcGFuXCIpKHBpY2tlZExpc3QpO1xyXG4gICAgICAgICAgICBuYW1lRGlzcGxheSgpLnRleHRDb250ZW50ID0gYExpc3QgJHtsaXN0TmFtZX06IGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgRE9NVGFzayA9IG1ha2VFbGVtZW50KFwiLnRhc2tcIikocGlja2VkTGlzdCkoXHJcbiAgICAgICAgICAgIFwiZGF0YS10YXNrXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrT3JkZXJcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBET01UYXNrKCkudGV4dENvbnRlbnQgPSBgVElUTEU6ICR7dGl0bGV9IHwgRFVFIERBVEU6ICR7ZHVlRGF0ZX0gfCBQUklPUklUWTogJHtwcmlvcml0eX0gICBgO1xyXG5cclxuICAgICAgICBsZXQgcHJpb3JpdHlDb2xvciA9XHJcbiAgICAgICAgICAgIHByaW9yaXR5ID09IFwiSGlnaFwiXHJcbiAgICAgICAgICAgICAgICA/IFwicGlua1wiXHJcbiAgICAgICAgICAgICAgICA6IHByaW9yaXR5ID09IFwiTWVkaXVtXCJcclxuICAgICAgICAgICAgICAgICAgICA/IFwieWVsbG93XCJcclxuICAgICAgICAgICAgICAgICAgICA6IFwieWVsbG93Z3JlZW5cIjtcclxuICAgICAgICBET01UYXNrKCkuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYGJhY2tncm91bmQtY29sb3I6ICR7cHJpb3JpdHlDb2xvcn1gKTtcclxuXHJcbiAgICAgICAgbGV0IGJ0bkNvbnRhaW5lciA9IG1ha2VFbGVtZW50KFwiLmJ1dHRvbi1jb250YWluZXJcIikoRE9NVGFzaygpKTtcclxuICAgICAgICAvLyBGaW5pc2ggQnRuXHJcbiAgICAgICAgYWRkQnV0dG9uKFwiLmZpbmlzaFwiLCBidG5Db250YWluZXIoKSk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBCdG5cclxuICAgICAgICBhZGRCdXR0b24oXCIucmVtb3ZlXCIsIGJ0bkNvbnRhaW5lcigpKTtcclxuXHJcbiAgICAgICAgbGV0IGRldGFpbHMgPSBtYWtlRWxlbWVudChcIi5kZXRhaWxcIikocGlja2VkTGlzdCkoXHJcbiAgICAgICAgICAgIFwiZGF0YS10YXNrXCIsXHJcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrT3JkZXJcclxuICAgICAgICApO1xyXG4gICAgICAgIGRldGFpbHMoKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIGRldGFpbHMoKS5pbm5lclRleHQgPSBgREVTQ1JJUFRJT046ICR7ZGVzY3JpcHRpb259XFxuTk9URTogJHtub3RlfWA7XHJcbiAgICAgICAgRE9NVGFzaygpLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzKCkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBET01UYXNrKCkuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkZXRhaWxzKCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRCdXR0b24oaWRlbnRpZmllciwgcGFyZW50KSB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gbWFrZUVsZW1lbnQoaWRlbnRpZmllciwgXCJidXR0b25cIikocGFyZW50KTtcclxuICAgICAgICAvLyBzcGFuLnRhc2sgPiBkaXYuYnV0dG9uLWNvbnRhaW5lciA+IGJ1dHRvbi5yZW1vdmVcclxuICAgICAgICBjb25zdCB0YXJnZXRlZFRhc2tJbmRleCA9IE51bWJlcihcclxuICAgICAgICAgICAgYnRuKCkucGFyZW50Tm9kZS5wYXJlbnROb2RlLmdldEF0dHJpYnV0ZShcImRhdGEtdGFza1wiKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKGlkZW50aWZpZXIgPT0gXCIucmVtb3ZlXCIpIHtcclxuICAgICAgICAgICAgYnRuKCkudGV4dENvbnRlbnQgPSBcIlhcIjtcclxuICAgICAgICAgICAgYnRuKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bigpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoYC5kZXRhaWxbZGF0YS10YXNrPScke3RhcmdldGVkVGFza0luZGV4fSddYClcclxuICAgICAgICAgICAgICAgICAgICAucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBhcHBMb2dpYygpLnJlbW92ZVRhc2sodGFyZ2V0ZWRUYXNrSW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmVzZXREYXRhVGFza0luZGV4KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ0bigpLmlubmVySFRNTCA9IFwiJiMxMDAwNDtcIjtcclxuICAgICAgICAgICAgYnRuKCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGJ0bigpLmNsYXNzTGlzdC50b2dnbGUoXCJkb25lXCIpO1xyXG4gICAgICAgICAgICAgICAgYXBwTG9naWMoKS5maW5pc2hUYXNrKHRhcmdldGVkVGFza0luZGV4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0RGF0YVRhc2tJbmRleCgpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmxpc3RcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5oYXNDaGlsZE5vZGVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IGVsZW1lbnQuY2hpbGROb2RlcztcclxuICAgICAgICAgICAgICAgIGxldCB1ID0gMDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG5vZGUgb2YgY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5jbGFzc05hbWUgPT0gXCJ0YXNrXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRhc2tcIiwgdSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHUrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBsaXN0U2Nyb2xsZXIoKSB7XHJcbiAgICAgICAgY29uc3QgYWxsU2Nyb2xsZXJJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcclxuICAgICAgICAgICAgXCIuc2Nyb2xsZXItY29udGFpbmVyID4gZGl2XCJcclxuICAgICAgICApO1xyXG4gICAgICAgIGFsbFNjcm9sbGVySXRlbS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgbGlzdCBvZiBsaXN0UGFuZWwpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Nyb2xsZXJJdGVtID0gbWFrZUVsZW1lbnQoXCIuc2Nyb2xsZXItaXRlbVwiKShcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Nyb2xsZXItY29udGFpbmVyXCIpXHJcbiAgICAgICAgICAgICkoXCJkYXRhLWxpc3RcIiwgbGlzdFBhbmVsLmluZGV4T2YobGlzdCkpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxpc3ROYW1lSW5kZXggPSBOdW1iZXIoc2Nyb2xsZXJJdGVtKCkuZ2V0QXR0cmlidXRlKFwiZGF0YS1saXN0XCIpKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBsaXN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgICAgICAgICBgLmxpc3RbZGF0YS1saXN0PScke2xpc3ROYW1lSW5kZXh9J11gXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChsaXN0TmFtZSkgbGlzdE5hbWUgPSBsaXN0TmFtZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpO1xyXG4gICAgICAgICAgICBzY3JvbGxlckl0ZW0oKS50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgICAgICBsaXN0TmFtZSAhPSB1bmRlZmluZWQgPyBsaXN0TmFtZSA6IGxpc3ROYW1lSW5kZXg7XHJcblxyXG4gICAgICAgICAgICBtYWtlRWxlbWVudChcIi5pbWFnZVwiLCBcImltZ1wiKShzY3JvbGxlckl0ZW0oKSkoXHJcbiAgICAgICAgICAgICAgICBcInNyY1wiLFxyXG4gICAgICAgICAgICAgICAgXCIuL2ltYWdlcy9mb2xkZXIuc3ZnXCJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHNjcm9sbGVySXRlbSgpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNjcm9sbGVyLWl0ZW1cIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxlckl0ZW0oKS5jbGFzc0xpc3QudG9nZ2xlKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TGlzdCA9IGxpc3ROYW1lSW5kZXg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5VGFzayhjdXJyZW50TGlzdCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IHNlbGVjZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICAgICAgYC5zY3JvbGxlci1pdGVtW2RhdGEtbGlzdD0nJHtjdXJyZW50TGlzdH0nXWBcclxuICAgICAgICApO1xyXG4gICAgICAgIHNlbGVjZWRMaXN0LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuXHJcbiAgICAgICAgbGV0IG1vcmVMaXN0ID0gbWFrZUVsZW1lbnQoXCIubW9yZS1saXN0XCIpKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbGVyLWNvbnRhaW5lclwiKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIG1vcmVMaXN0KCkudGV4dENvbnRlbnQgPSBcIitcIjtcclxuICAgICAgICBtb3JlTGlzdCgpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGFwcExvZ2ljKCkuY3JlYXRlTGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHdhcm5pbmcoKSB7XHJcbiAgICAgICAgbGV0IHdhcm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndhcm5pbmdcIik7XHJcbiAgICAgICAgd2FybmluZy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcudGV4dENvbnRlbnQgPSBcIipZb3UgaGF2ZSB0byBlbnRlciBhIFRpdGxlIVwiO1xyXG4gICAgICAgIH0gZWxzZSB3YXJuaW5nLnRleHRDb250ZW50ID0gXCIqRHVlIERhdGUgaGFzIHRvIGJlIGxhdGVyIHRoYW4gVG9kYXkhXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtYWtlRWxlbWVudCxcclxuICAgICAgICBhZGRMaXN0LFxyXG4gICAgICAgIGFkZFRhc2ssXHJcbiAgICAgICAgbGlzdFNjcm9sbGVyLFxyXG4gICAgICAgIHdhcm5pbmcsXHJcbiAgICAgICAgcmVmcmVzaEFsbFRhc2tzLFxyXG4gICAgfTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlc3RvcmVGcm9tTG9jYWwoKSB7XHJcbiAgICBjb25zdCByZXN0b3JlZERhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2F2ZWREYXRhXCIpKTtcclxuXHJcbiAgICBpZiAoIXJlc3RvcmVkRGF0YSkgcmV0dXJuIChsaXN0UGFuZWwgPSBbXSk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBsaXN0T2JqIG9mIHJlc3RvcmVkRGF0YSkge1xyXG4gICAgICAgICAgICBsaXN0UGFuZWwucHVzaChuZXcgVG9Eb0xpc3QoKSk7XHJcbiAgICAgICAgICAgIGxpc3RQYW5lbFtyZXN0b3JlZERhdGEuaW5kZXhPZihsaXN0T2JqKV0ubGlzdCA9IGxpc3RPYmoubGlzdDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIEludGVyZmFjZXMgdG8gY29ubmVjdCB0aGUgYXBwbGljYXRpb24gbG9naWMgdG8gdGhlIERPTVxyXG4oZnVuY3Rpb24gRE9NTG9hZCgpIHtcclxuICAgIGNvbnN0IGlucHV0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtYXJlYVwiKTtcclxuXHJcbiAgICByZXN0b3JlRnJvbUxvY2FsKCk7XHJcblxyXG4gICAgLy8gRGVmYXVsdCBsaXN0XHJcbiAgICBpZiAobGlzdFBhbmVsLmxlbmd0aCA9PSAwKSBhcHBMb2dpYygpLmNyZWF0ZUxpc3QoKTtcclxuXHJcbiAgICBpbnRlcmFjdERPTSgpLm1ha2VFbGVtZW50KFwiI3Jlc2V0XCIsIFwiaW5wdXRcIikoaW5wdXRBcmVhKShcInR5cGVcIiwgXCJyZXNldFwiKShcclxuICAgICAgICBcInN0eWxlXCIsXHJcbiAgICAgICAgXCJ2aXNpYmlsaXR5OiBoaWRkZW47IHBvc2l0aW9uOiBhYnNvbHV0ZTtcIlxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGFwcExvZ2ljKCkuY3JlYXRlVGFzaygpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVzZXRcIikuY2xpY2soKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNhdmVkRGF0YVwiLCBKU09OLnN0cmluZ2lmeShsaXN0UGFuZWwpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGludGVyYWN0RE9NKCkucmVmcmVzaEFsbFRhc2tzKCk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6WyJUb0RvSXRlbSIsImNvbnN0cnVjdG9yIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJwcmlvcml0eSIsIm5vdGUiLCJmaW5pc2hlZCIsInRoaXMiLCJUb0RvTGlzdCIsImxpc3QiLCJhZGQiLCJpdGVtcyIsImZvckVhY2giLCJpdGVtIiwicHVzaCIsInJlbW92ZSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImxpc3RQYW5lbCIsImN1cnJlbnRMaXN0IiwiYXBwTG9naWMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImN1cnJlbnQiLCJEYXRlIiwibW9udGgiLCJnZXRNb250aCIsImRhdGUiLCJnZXRGdWxsWWVhciIsImdldERhdGUiLCJjcmVhdGVMaXN0IiwibmV3TGlzdCIsImludGVyYWN0RE9NIiwiYWRkTGlzdCIsImNyZWF0ZVRhc2siLCJ3YXJuaW5nIiwibmV3VGFzayIsImFkZFRhc2siLCJmaW5pc2hUYXNrIiwidGFyZ2V0ZWRUYXNrSW5kZXgiLCJyZW1vdmVUYXNrIiwiYXBwIiwibWFrZUVsZW1lbnQiLCJpZGVudGlmaWVyIiwidHlwZSIsIm5ld0VsZW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2xpY2UiLCJjbGFzc0xpc3QiLCJzZXRBdHRyaWJ1dGUiLCJwYXJlbnQiLCJ1bmRlZmluZWQiLCJhcHBlbmRDaGlsZCIsInNldEF0dHIiLCJkaXNwbGF5VGFzayIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJlbGVtZW50IiwicGlja2VkTGlzdCIsImxlbmd0aCIsImxpc3RTY3JvbGxlciIsImN1cnJlbnRUYXNrT3JkZXIiLCJ0ZXh0Q29udGVudCIsImxpc3ROYW1lIiwiZ2V0QXR0cmlidXRlIiwibmFtZURpc3BsYXkiLCJET01UYXNrIiwicHJpb3JpdHlDb2xvciIsImJ0bkNvbnRhaW5lciIsImFkZEJ1dHRvbiIsImRldGFpbHMiLCJpbm5lclRleHQiLCJhZGRFdmVudExpc3RlbmVyIiwiYnRuIiwiTnVtYmVyIiwicGFyZW50Tm9kZSIsInJlc2V0RGF0YVRhc2tJbmRleCIsImlubmVySFRNTCIsInRvZ2dsZSIsImhhc0NoaWxkTm9kZXMiLCJjaGlsZHJlbiIsImNoaWxkTm9kZXMiLCJ1Iiwibm9kZSIsImNsYXNzTmFtZSIsInNjcm9sbGVySXRlbSIsImxpc3ROYW1lSW5kZXgiLCJtb3JlTGlzdCIsInJlZnJlc2hBbGxUYXNrcyIsImxpc3RPYmplY3QiLCJpIiwidGFzayIsImlucHV0QXJlYSIsInJlc3RvcmVkRGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsaXN0T2JqIiwicmVzdG9yZUZyb21Mb2NhbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsaWNrIiwic2V0SXRlbSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=