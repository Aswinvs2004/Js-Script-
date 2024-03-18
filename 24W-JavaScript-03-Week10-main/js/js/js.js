function buildHamburger() {
    const bun = document.getElementById("bun").value;
    const patty = document.getElementById("patty").value;
    const cheese = document.getElementById("cheese").value;

    const hamburger = {
        bun: bun,
        patty: patty,
        cheese: cheese,
        describe: function() {
            return `You've created a hamburger with a ${this.bun} bun, ${this.patty} patty, and ${this.cheese} cheese.`;
        }
    };

    document.getElementById("hamburgerOutput").innerText = hamburger.describe();
}