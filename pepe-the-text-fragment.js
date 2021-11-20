function draw(z_index) {
    let d = document.createElement('div')
    d.style.cssText = `position:absolute;top:0;left:0;height:100vh;width:100vw;z-index:${z_index};display:flex;justify-content:center;align-items:center;background:rgba(0,0,0,0.2);`
    d.innerHTML = '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQBAMAAADkNkIoAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTKGumFiNPnyQbI1VL8LHulp3N1plU3RhMQAAAP///2sfVBEAAAABdFJOUwBA5thmAAAAfklEQVQI12NgYGAINg5gFWUAAUYlJWUlJQEQM0gJBBRATCMwUzkALA8GqgwMQkCqWNiwXJCBFSgnOD1w6fRSsLx6eZKymQADE1SpIkQp2ASYUUogO4DMFJe2tLS0ApCCFhcQEGBgVlJSS+vocHFkgOlTA9rLwBoobGxsCGQBAOepGb3TWKDyAAAAAElFTkSuQmCC">'
    d.querySelector('img').style.cssText = 'image-rendering:pixelated;max-height:100%;max-width:100%;height:500px;width:auto;'
    document.body.appendChild(d)
    document.querySelector('body').style = 'overflow: hidden'
}

export default function(z_index = 999) {
    let url = performance.getEntries().find( v => v.type === 'navigate')?.name || location.href;
    /#[^:~]*?:~:text=/.test(url) && draw(z_index)
}
