function carrouselImages() {
    var imagescc = document.querySelectorAll('.image');
    let d = 1600;
    let delta = 1000;

    imagescc.forEach(function(img,indice) {
        imgcc.style.zIndex = imagescc.length - indice;
    });

    let anim155 = anime.timeline({
        loop: true,
        delay: 0
    });

    anim155.add({
        targets: imagescc,
        translateX: [{value: '500', duration: d},
                     {value: '-500', duration: 0, delay: function(img,ind) {
                         if (ind == 0) return (7*delta)+(6*d);
                         if (ind == 1) return (6*delta)+(5*d);
                         if (ind == 2) return (5*delta)+(4*d);
                         if (ind == 3) return (4*delta)+(3*d);
                         if (ind == 4) return (3*delta)+(2*d);
                         if (ind == 5) return (2*delta)+d;
                         if (ind == 6) return delta;
                         return 0;
                     }},
                     {value: '0', duration: function(img,ind) {
                         if (ind == 4) return 0;
                         return d;
                     }}],
        easing: 'linear',
        delay: function(img,ind) {
            if (ind == 0) return delta;
            if (ind == 1) return (2*delta)+d;
            if (ind == 2) return (3*delta)+(2*d);
            if (ind == 3) return (4*delta)+(3*d);
            if (ind == 4) return (5*delta)+(4*d);
            if (ind == 5) return (6*delta)+(5*d);
            if (ind == 6) return (7*delta)+(6*d);
            return (8*delta)+(7*d);
        }
    });
}