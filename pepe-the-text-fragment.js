export default (z_index = 999) => has_text_fragment() && draw(z_index)

function has_text_fragment() {
    return /#.*:~:text=/.test(performance.getEntries().find( v => v.type === 'navigate')?.name || location.href)
}

function draw(z_index) {
    let d = document, w = d.createElement('div')
    w.style.cssText = `position:fixed;top:0;left:0;height:100%;width:100%;z-index:${z_index};display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,.2)`
    w.innerHTML = '<img src="data:image/gif;base64,R0lGODlhFAAQAOMKAAAAAFp3N3RhMVplU41VL1iNPnyQbKGumMLHuv////b27/b27/b27/b27/b27/b27yH5BAEKAA8ALAAAAAAUABAAAARl8MmJjEUSHTz7O0UYGmJxeFmpiuhDrqrBSSAMc7U6GId1DIPDCRFLHAADTQKBTH5gwEFgZAicHjbbNZctGSSvruoUDgUIaEFgzQ4MniUBek5HX8sFtmAvt3e4NgEzFBo9FocbHhEAOw==">'
    w.querySelector('img').style.cssText = 'image-rendering:pixelated;max-height:100%;max-width:100%;height:500px;width:auto'
    d.body.appendChild(w)
}
