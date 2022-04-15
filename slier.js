function Slier(slider2) {
  const slider = (typeof slider2 === typeof 'String') ? document.querySelector(slider2) : slider2
  const curr_index = () => Number(slider.querySelector('div.active').getAttribute('data-index'))
  const num_of_children = () => Number(slider.querySelectorAll('div').length)
  
  function set_slide(index) {
    const active_div = slider.querySelector('div.active')
    if (active_div) active_div.classList.remove('active')
    slider.querySelectorAll('div')[index].classList.add('active');
    return slider
  }
  
  const first_btn = document.createElement('button')
  const second_btn = document.createElement('button')
  const nav = document.createElement('nav')
  first_btn.innerHTML = '&lt;'
  second_btn.innerHTML = '&gt;'
  nav.appendChild(first_btn)
  nav.appendChild(second_btn)
  slider.appendChild(nav)
  
  let i = 0
  for (const div of slider.querySelectorAll('div')) div.setAttribute('data-index', i++)
  
  first_btn.addEventListener('click', () => {
    let jindex = (curr_index() == 0) ? num_of_children() - 1 : curr_index() - 1
    set_slide(jindex)
  })
  
  second_btn.addEventListener('click', () => {
    let jindex = (curr_index() > 1) ? 0 : curr_index() + 1
    set_slide(jindex)
  })
  
  set_slide(0)
  
  return {
    slider,
    curr_index,
    num_of_children,
    set_slide
  }
}


/*
function Slier(e){const t="string"==typeof e?document.querySelector(e):e,n=()=>Number(t.querySelector("div.active").getAttribute("data-index")),r=()=>Number(t.querySelectorAll("div").length);function i(e){const n=t.querySelector("div.active");return n&&n.classList.remove("active"),t.querySelectorAll("div")[e].classList.add("active"),t}const c=document.createElement("button"),d=document.createElement("button"),l=document.createElement("nav");c.innerHTML="&lt;",d.innerHTML="&gt;",l.appendChild(c),l.appendChild(d),t.appendChild(l);let o=0;for(const e of t.querySelectorAll("div"))e.setAttribute("data-index",o++);return c.addEventListener("click",()=>{i(0==n()?r()-1:n()-1)}),d.addEventListener("click",()=>{i(n()>1?0:n()+1)}),i(0),{slider:t,curr_index:n,num_of_children:r,set_slide:i}}
*/