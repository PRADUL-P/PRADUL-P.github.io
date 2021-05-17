self.addEventListener("install",e=>{
    
    e.waitUntil(
        caches.open("static").then(cache=>{
            return cache.addAll(["./","./assets/icon64.png","./assets/icon512.png","assets/img/bg-image.jpg",
            "assets/ns.jpg","assets/ns1.jpg","assets/ns2.jpg",,"assets/ns3.jpg","assets/ns4.jpg","assets/ns5.jpg"
            ,"assets/ns6.jpg","assets/pic 1.jpg","assets/pic 2.jpg","assets/pic 3.jpg","assets/pic 4.jpg","assets/pic 5.jpg"]) /*to view the files always when it is offinile */
        })
    )
})
self.addEventListener("fetch",e=>{
    e.respondWith(
        caches.match(e.request).then(Response=>{
            return Response  ||fetch(e.request);
        })
    )
})