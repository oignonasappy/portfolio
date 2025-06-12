// アニメーション
(() => {
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                obs.unobserve(entry.target);
            }
        });
    });
    document.querySelectorAll('.use-animation').forEach(elem => observer.observe(elem));
})();