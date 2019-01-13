var game = {
    goal: Math.floor(Math.random()*101+19),
    wins: 0,
    losses: 0,
    userTotal: 0,
    crystals: ["assets/images/blue-crystal.png", "assets/images/green-crystal.png", "assets/images/pink-crystal.png", "assets/images/purple-crystal.png"], 

    crystalCreation: function() {
		for (var i = 0; i < this.crystals.length; i++) {
		var image = $('<img>');

		image.addClass("click-crystal");

		image.attr("src", this.crystals[i]);

		image.attr("data-crystalvalue", Math.floor(Math.random() * 11+1));

        $("#crystal-container").append(image);
        
		};
	},

    newNumbers: function() {
        game.goal = Math.floor(Math.random()*121);
        $("#random-goal").text(game.goal)
        game.userTotal = 0;
        $("#your-number").text(game.userTotal);
    },

    win: function() {
        game.wins ++;
        alert("You win!");
        $("#win-count").text(game.wins)
        game.newNumbers();
    },

    lose: function() {
        game.losses ++;
        alert("You lose!");
        $("#loss-count").text(game.losses)
        game.newNumbers();
    },
}


$("#random-goal").text(game.goal)


game.crystalCreation();
game.newNumbers();

$(".click-crystal").click(function() {
    var crystalValue = $(this).data("crystalvalue");
    game.userTotal += crystalValue;
    $("#your-number").text(game.userTotal);
    if (game.userTotal === game.goal) {
        game.win();
    }
    else if (game.userTotal > game.goal) {
        game.lose();
    }
});
