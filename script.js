var arr = [
    {
        dp:"https://images.unsplash.com/photo-1557977275-d261356f567f?q=80&w=1899&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1533488069324-f9265c15d37f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/flagged/photo-1571367032928-3034d979fac1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1543764477-646365e11da3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1625698457101-fec2f565a8f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww",
        story: "https://images.unsplash.com/photo-1626978407649-de62156f1548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1611603640928-0a26c496f47e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        dp:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D",
        story: "https://plus.unsplash.com/premium_photo-1661866803933-17fc0cf78150?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbGUlMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D"
    }
]
var storiyan = document.querySelector("#storiyan")
var fss = document.querySelector("#fullscreenStory")
var clutter = " "
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id = "${idx}" src="${elem.dp}">
</div>`
})

storiyan.innerHTML = clutter

storiyan.addEventListener('click',function(dets){
    fss.style.display = "block"
    fss.style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(function(){
        fss.style.display = "none"
    },2000)
})